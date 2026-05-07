import type { Metadata } from 'next';
import Link from 'next/link';
import { site } from '@/content/site';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { QuoteForm } from '@/components/QuoteForm';
import { OrangeStripe } from '@/components/OrangeStripe';
import { PhoneLink } from '@/components/PhoneLink';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Call, text, or send us a few project details and we'll get back to you fast. R&R Land Management — Seymour, TN. Serving Sevier, Knox & all surrounding East Tennessee counties.",
  openGraph: {
    title: 'Contact R&R Land Management',
    description: 'Call Ryan at (865) 320-5478 or request a quote online.',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        heading="Get In Touch"
        subhead="Call, text, or send a few project details — we'll get back to you fast."
      />
      <OrangeStripe />

      <section className="bg-offwhite py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7">
              <QuoteForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom CTA — copy override per spec */}
      <section className="relative bg-orange text-black py-16 md:py-20" aria-labelledby="prefer-talk-heading">
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
            <h2
              id="prefer-talk-heading"
              className="font-display text-display-md uppercase"
            >
              Prefer to Talk?
            </h2>
            <p className="mt-4 text-lg sm:text-xl">
              A quick phone call usually gets you a faster, more accurate answer than a form ever will.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:flex-wrap">
              <a
                href={`tel:${site.contact.primary.tel}`}
                aria-label={`Call ${site.contact.primary.name} at ${site.contact.primary.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-semibold uppercase tracking-wider px-6 py-4 rounded-sm transition-colors hover:bg-gray-900"
              >
                <PhoneSvg />
                Call Ryan: {site.contact.primary.phone}
              </a>
              <a
                href={`tel:${site.contact.secondary.tel}`}
                aria-label={`Call ${site.contact.secondary.name} at ${site.contact.secondary.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-black border-2 border-black font-semibold uppercase tracking-wider px-6 py-4 rounded-sm transition-colors hover:bg-black hover:text-white"
              >
                <PhoneSvg />
                Call Ronnie: {site.contact.secondary.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function PhoneSvg() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="label-eyebrow mb-3">Direct Contact</p>
        <h2 className="font-display text-display-md uppercase">
          Best to Call.
        </h2>
        <p className="mt-3 text-gray-600">
          We answer the phone — if we miss you, leave a message and we&apos;ll call back the same day.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px bg-gray-100 border border-gray-100">
        <PersonBlock
          name={site.contact.primary.name}
          role={site.contact.primary.role}
          tel={site.contact.primary.tel}
          phone={site.contact.primary.phone}
        />
        <PersonBlock
          name={site.contact.secondary.name}
          role={site.contact.secondary.role}
          tel={site.contact.secondary.tel}
          phone={site.contact.secondary.phone}
        />
      </div>

      <dl className="space-y-5 text-sm">
        <InfoRow label="Email">
          <a
            href={`mailto:${site.contact.email}`}
            className="text-black hover:text-orange transition-colors break-all"
          >
            {site.contact.email}
          </a>
        </InfoRow>
        <InfoRow label="Based In">
          {site.address.city}, {site.address.regionFull}
        </InfoRow>
        <InfoRow label="Service Area">
          <span className="text-gray-600">
            {site.serviceArea.map((c) => c.replace(' County', '')).join(' • ')}
          </span>
        </InfoRow>
        <InfoRow label="Hours">
          <ul className="space-y-0.5">
            {site.hours.map((h) => (
              <li key={h.days}>
                <span className="font-semibold text-black">{h.days}:</span>{' '}
                <span className="text-gray-600">{h.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-gray-600 italic">{site.hoursNote}</p>
        </InfoRow>
        <InfoRow label="Payment">
          {site.paymentAccepted.join(' • ')}
        </InfoRow>
      </dl>
    </div>
  );
}

function PersonBlock({
  name,
  role,
  tel,
  phone,
}: {
  name: string;
  role: string;
  tel: string;
  phone: string;
}) {
  return (
    <div className="bg-white p-5 sm:p-6">
      <div className="text-xs uppercase tracking-widewide text-orange mb-1.5">{role}</div>
      <div className="font-display uppercase text-2xl mb-3">{name}</div>
      <PhoneLink tel={tel} display={phone} label={`Call ${name}`} />
    </div>
  );
}

function InfoRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-widewide font-semibold text-gray-600 mb-1.5">
        {label}
      </dt>
      <dd className="text-black">{children}</dd>
    </div>
  );
}
