import { site } from '@/content/site';
import { Container } from './Container';

export function ServiceArea() {
  return (
    <section className="bg-black text-white py-20 md:py-28" aria-labelledby="area-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="label-eyebrow mb-4">Where We Work</p>
            <h2 id="area-heading" className="font-display text-display-md uppercase">
              East Tennessee,<br />Top to Bottom
            </h2>
            <p className="mt-6 text-gray-100 text-lg leading-relaxed">
              R&amp;R Land Management is based in Seymour and serves all of Sevier and Knox counties, plus every county that borders them. From Sevierville cabin lots to Knoxville suburbs to working farms in the foothills, we&apos;re set up to get there.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-900 border border-gray-900">
              {site.serviceArea.map((county) => (
                <li
                  key={county}
                  className="bg-black px-5 py-6 text-center font-display uppercase text-lg tracking-wide"
                >
                  <span className="block text-orange text-[10px] tracking-widewide mb-1">
                    County
                  </span>
                  {county.replace(' County', '')}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
