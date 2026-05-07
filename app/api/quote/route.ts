import { NextResponse } from 'next/server';
import { QuoteFormSchema } from '@/lib/schema';

// Cloudflare Pages runs on Workers — must use the edge runtime.
export const runtime = 'edge';

/**
 * Quote form handler.
 *
 * TODO — wire up real email delivery before launch. Pick one:
 *
 *   1. Resend (recommended — clean API, free tier covers small volumes)
 *      $ npm install resend
 *      Add RESEND_API_KEY to Vercel env vars, then in this handler:
 *        import { Resend } from 'resend';
 *        const resend = new Resend(process.env.RESEND_API_KEY);
 *        await resend.emails.send({
 *          from: 'quotes@rrlandmanagement.com',  // verified sender
 *          to: 'kingshelby30@gmail.com',
 *          subject: `New quote request — ${data.name} (${data.service})`,
 *          replyTo: data.email,
 *          text: formatBody(data),
 *        });
 *
 *   2. Formspree — no code change. Replace this route with a direct POST
 *      from the client to https://formspree.io/f/YOUR_FORM_ID. Simplest.
 *
 *   3. SendGrid — similar to Resend, use @sendgrid/mail.
 *
 * Until then, submissions are logged to the server console only.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const result = QuoteFormSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: result.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // Drop honeypot hits silently — pretend we succeeded so bots don't retry
  if (result.data.website) {
    return NextResponse.json({ ok: true });
  }

  // TODO: replace with real email send (see comment block above)
  // eslint-disable-next-line no-console
  console.log('[quote-request]', {
    receivedAt: new Date().toISOString(),
    ...result.data,
  });

  return NextResponse.json({ ok: true });
}
