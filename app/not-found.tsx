import Link from 'next/link';
import { Container } from '@/components/Container';
import { OrangeStripe } from '@/components/OrangeStripe';

export const metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <section className="relative bg-black text-white py-32 md:py-44 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 500px at 100% 0%, rgba(255,107,26,0.18), transparent 60%), linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 60%, #0A0A0A 100%)',
          }}
        />
        <Container className="relative text-center">
          <p className="label-eyebrow mb-4">404</p>
          <h1 className="font-display text-display-lg uppercase">
            Off the Map.
          </h1>
          <p className="mt-5 text-lg text-gray-100 max-w-xl mx-auto">
            We can&apos;t find the page you were looking for. Head back home or check out our services.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="btn-primary">Back to Home</Link>
            <Link href="/services" className="btn-secondary">See Services</Link>
          </div>
        </Container>
      </section>
      <OrangeStripe />
    </>
  );
}
