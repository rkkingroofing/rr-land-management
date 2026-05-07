import Image from 'next/image';
import { Container } from './Container';
import { OrangeStripe } from './OrangeStripe';

export function BrandPanel() {
  return (
    <>
      <OrangeStripe />
      <section
        className="bg-white py-14 md:py-20 relative overflow-hidden"
        aria-label="R&R Land Management"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, #0A0A0A 0 1px, transparent 1px 16px)',
          }}
        />
        <Container className="relative">
          <Image
            src="/logo.png"
            alt="R&R Land Management"
            width={1024}
            height={550}
            priority
            sizes="(min-width: 768px) 720px, 92vw"
            className="mx-auto w-full max-w-[720px] h-auto"
          />
          <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm uppercase tracking-widewide font-semibold text-gray-600">
            Licensed • Insured • Certified • Seymour, TN
          </p>
        </Container>
      </section>
      <OrangeStripe />
    </>
  );
}
