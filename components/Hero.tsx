import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/content/site';
import { Container } from './Container';
import { PhoneLink } from './PhoneLink';

export function Hero() {
  return (
    <section
      className="relative bg-black text-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/gallery/IMG_3710.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-50"
        aria-hidden="true"
      />
      {/* Dark overlay for legibility — black bottom-up gradient + slight orange glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.92) 100%), radial-gradient(900px 500px at 100% 0%, rgba(255,107,26,0.18), transparent 60%)',
        }}
      />
      {/* Diagonal hatch texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #fff 0 1px, transparent 1px 14px)',
        }}
      />

      <Container className="relative py-20 sm:py-28 md:py-36 lg:py-44">
        <p className="label-eyebrow mb-5">East Tennessee Excavation • Since 2018</p>
        <h1
          id="hero-heading"
          className="font-display text-display-xl uppercase max-w-5xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        >
          Heavy Work.<br />
          <span className="text-orange">Done Right.</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-100 max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
          Excavation, septic, ponds, and land clearing across East Tennessee. Family-owned in Seymour, serving Sevier, Knox, and surrounding counties since 2018.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
          <PhoneLink
            tel={site.contact.primary.tel}
            display={`Call Ryan: ${site.contact.primary.phone}`}
            label={`Call ${site.contact.primary.name}`}
            variant="button-primary"
            className="text-base"
          />
          <Link href="/contact" className="btn-secondary text-base">
            Request a Quote
          </Link>
        </div>

        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-widewide text-gray-300">
          {[...site.credentials, `${site.yearsExperience} Years Experience`].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 bg-orange" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
