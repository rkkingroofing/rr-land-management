import type { Metadata } from 'next';
import Image from 'next/image';
import { site } from '@/content/site';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { CTABlock } from '@/components/CTABlock';
import { OrangeStripe } from '@/components/OrangeStripe';
import { PhoneLink } from '@/components/PhoneLink';

export const metadata: Metadata = {
  title: 'About',
  description:
    'R&R Land Management is family-owned by Ryan Troxel and Ronnie King in Seymour, TN. Founded in 2018, with 10+ years of hands-on experience before that. Licensed, insured, certified.',
  openGraph: {
    title: 'About R&R Land Management',
    description: 'Family-owned in Seymour, TN. Working East Tennessee since 2018.',
  },
};

const STANDARDS = [
  {
    title: 'Show up when we say we will',
    body: 'Time matters in this business — yours and ours.',
  },
  {
    title: 'Tell the truth on the quote',
    body: "If a job is going to grow, we tell you why before we charge for it.",
  },
  {
    title: 'Leave it better than we found it',
    body: 'Clean site, working systems, no debris left behind.',
  },
  {
    title: "Stand behind the work",
    body: "When it's done, it's done right.",
  },
];

const CREDENTIALS = [
  'Licensed, Insured, and Certified',
  'Septic system permitting and installation in compliance with TN Department of Environment and Conservation',
  'General liability and equipment coverage',
  "Workers' comp on every employee",
];

function Check() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-orange shrink-0 mt-0.5"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        heading="About R&R"
        subhead="Family-owned in Seymour, working East Tennessee since 2018."
      />
      <OrangeStripe />

      {/* The Story */}
      <section className="bg-offwhite py-20 md:py-28" aria-labelledby="story-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="label-eyebrow mb-4">The Story</p>
              <h2
                id="story-heading"
                className="font-display text-display-md uppercase"
              >
                Two Owners.<br />
                <span className="text-orange">One Crew.</span>
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                R&amp;R Land Management was founded in 2018 by Ryan Troxel and Ronnie King — but the experience behind it goes back more than a decade before that. Both Ryan and Ronnie spent years running equipment and learning the trade before going into business together, and that hands-on background shows up on every job.
              </p>
              <p>
                We started R&amp;R because East Tennessee needed a contractor who could do the whole job — clear the land, run the utilities, set the septic, build the driveway, and finish the grade — without handing the customer off to three other companies. That&apos;s still how we run today.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why R&R + Owners */}
      <section className="bg-black text-white py-20 md:py-28" aria-labelledby="owners-heading">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="label-eyebrow mb-4">Why &ldquo;R&amp;R&rdquo;</p>
            <h2 id="owners-heading" className="font-display text-display-md uppercase">
              Two owners, both named with R&apos;s.
            </h2>
            <p className="mt-5 text-lg text-gray-100">
              Ryan Troxel and Ronnie King. Family-owned, family-operated, and we both still show up to the job site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-900 border border-gray-900">
            <OwnerCard
              name={site.contact.primary.name}
              role={site.contact.primary.role}
              phoneTel={site.contact.primary.tel}
              phoneDisplay={site.contact.primary.phone}
            />
            <OwnerCard
              name={site.contact.secondary.name}
              role={site.contact.secondary.role}
              phoneTel={site.contact.secondary.tel}
              phoneDisplay={site.contact.secondary.phone}
            />
          </div>
        </Container>
      </section>

      {/* What We Stand For */}
      <section className="bg-offwhite py-20 md:py-28" aria-labelledby="standards-heading">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="label-eyebrow mb-4">What We Stand For</p>
            <h2 id="standards-heading" className="font-display text-display-md uppercase">
              Four Rules.<br />
              <span className="text-orange">Non-Negotiable.</span>
            </h2>
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100">
            {STANDARDS.map((s, i) => (
              <li
                key={s.title}
                className="bg-offwhite p-7 sm:p-8 flex gap-5"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-5xl leading-none text-orange shrink-0"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display uppercase text-xl mb-2">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Credentials */}
      <section className="bg-black text-white py-20 md:py-28" aria-labelledby="credentials-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="label-eyebrow mb-4">Credentials</p>
              <h2
                id="credentials-heading"
                className="font-display text-display-md uppercase"
              >
                Properly<br />
                <span className="text-orange">Credentialed.</span>
              </h2>
              <p className="mt-5 text-gray-100">
                Septic, utilities, and every job we take on — done by the book and properly insured.
              </p>
            </div>
            <ul className="lg:col-span-7 space-y-4 text-lg">
              {CREDENTIALS.map((c) => (
                <li
                  key={c}
                  className="flex gap-4 bg-gray-900 p-5 border-l-2 border-orange"
                >
                  <Check />
                  <span className="text-gray-100">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Equipment */}
      <section
        className="relative bg-black text-white py-20 md:py-28 overflow-hidden"
        aria-labelledby="equipment-heading"
      >
        <Image
          src="/gallery/IMG_3713.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-40"
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.85) 100%)',
          }}
        />
        <Container className="relative">
          <div className="max-w-3xl">
            <p className="label-eyebrow mb-4">Equipment</p>
            <h2
              id="equipment-heading"
              className="font-display text-display-md uppercase"
            >
              Sized for the Job.<br />
              <span className="text-orange">Maintained Daily.</span>
            </h2>
            <p className="mt-6 text-lg text-gray-100 leading-relaxed">
              We run a full lineup of excavators, skid steers, dump trucks, and specialty attachments — sized for everything from a single-lot driveway to a multi-acre clearing job. The equipment is maintained, insured, and on the road every day.
            </p>
          </div>
        </Container>
      </section>

      <CTABlock />
    </>
  );
}

function OwnerCard({
  name,
  role,
  phoneTel,
  phoneDisplay,
}: {
  name: string;
  role: string;
  phoneTel: string;
  phoneDisplay: string;
}) {
  return (
    <div className="bg-black p-8 sm:p-10">
      <div className="text-xs uppercase tracking-widewide text-orange mb-3">{role}</div>
      <div className="font-display uppercase text-3xl sm:text-4xl mb-6">{name}</div>
      <PhoneLink
        tel={phoneTel}
        display={phoneDisplay}
        label={`Call ${name}`}
        variant="button-primary"
      />
    </div>
  );
}
