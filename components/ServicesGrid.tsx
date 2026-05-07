import { services } from '@/content/services';
import { Container } from './Container';
import { ServiceCard } from './ServiceCard';

export function ServicesGrid() {
  return (
    <section className="bg-black text-white py-20 md:py-28" aria-labelledby="services-heading">
      <Container>
        <div className="max-w-3xl">
          <p className="label-eyebrow mb-4">What We Do</p>
          <h2 id="services-heading" className="font-display text-display-md uppercase">
            Full-Service Land Management
          </h2>
          <p className="mt-4 text-lg text-gray-100">
            One call, one crew, one job done right.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black border border-gray-900">
          {services.map((s) => (
            <ServiceCard
              key={s.slug}
              slug={s.slug}
              title={s.title}
              description={s.short}
              href={`/services#${s.slug}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
