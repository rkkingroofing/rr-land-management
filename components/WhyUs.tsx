import { Container } from './Container';

const POINTS = [
  {
    title: 'Local & Family-Owned',
    body: 'Based in Seymour. Owned and operated by Ryan Troxel and Ronnie King. We live where we work.',
  },
  {
    title: 'Licensed, Insured & Certified',
    body: 'Properly credentialed for septic, utilities, and every job we take on.',
  },
  {
    title: 'Real Experience',
    body: 'Founded in 2018, with more than 10 years of hands-on experience before that.',
  },
  {
    title: 'One Call, Full Job',
    body: "Septic, ponds, driveways, clearing — we don't sub the work out and disappear.",
  },
  {
    title: 'Plain Talk, Honest Quotes',
    body: 'No surprises, no upcharges. We tell you what it costs before we start.',
  },
];

const STATS = [
  { num: '10+', label: 'Years Experience' },
  { num: '8', label: 'Services' },
  { num: '8', label: 'Counties Served' },
];

export function WhyUs() {
  return (
    <section className="bg-offwhite py-20 md:py-28" aria-labelledby="why-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="label-eyebrow mb-4">Why R&amp;R</p>
            <h2 id="why-heading" className="font-display text-display-md uppercase">
              Why East Tennessee<br />Hires R&amp;R
            </h2>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-orange pl-4">
                  <div className="font-display text-4xl md:text-5xl leading-none">{s.num}</div>
                  <div className="text-[11px] uppercase tracking-widewide text-gray-600 mt-2">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ul className="lg:col-span-7 space-y-6">
            {POINTS.map((p) => (
              <li key={p.title} className="flex gap-5">
                <div className="shrink-0 w-1 bg-orange rounded-sm" aria-hidden="true" />
                <div>
                  <h3 className="font-display uppercase text-xl mb-1.5">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
