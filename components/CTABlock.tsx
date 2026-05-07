import Link from 'next/link';
import { site } from '@/content/site';
import { Container } from './Container';
import { PhoneLink } from './PhoneLink';

type Props = {
  heading?: string;
  body?: string;
  variant?: 'default' | 'compact';
};

export function CTABlock({
  heading = 'Ready to Get Started?',
  body = "Call us, or send a few details about your project and we'll get back to you fast.",
  variant = 'default',
}: Props) {
  const padding = variant === 'compact' ? 'py-16' : 'py-20 md:py-28';

  return (
    <section className={`relative bg-orange text-black ${padding}`} aria-labelledby="cta-heading">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #000 0 1px, transparent 1px 18px)',
        }}
      />
      <Container className="relative">
        <div className="max-w-3xl">
          <h2 id="cta-heading" className="font-display text-display-md uppercase">
            {heading}
          </h2>
          <p className="mt-4 text-lg sm:text-xl">{body}</p>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:flex-wrap">
          <a
            href={`tel:${site.contact.primary.tel}`}
            aria-label={`Call ${site.contact.primary.name} at ${site.contact.primary.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold uppercase tracking-wider px-6 py-4 rounded-sm transition-colors hover:bg-gray-900"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Ryan: {site.contact.primary.phone}
          </a>
          <a
            href={`tel:${site.contact.secondary.tel}`}
            aria-label={`Call ${site.contact.secondary.name} at ${site.contact.secondary.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-transparent text-black border-2 border-black font-semibold uppercase tracking-wider px-6 py-4 rounded-sm transition-colors hover:bg-black hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Ronnie: {site.contact.secondary.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-black border-2 border-black font-semibold uppercase tracking-wider px-6 py-4 rounded-sm transition-colors hover:bg-offwhite"
          >
            Request a Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
