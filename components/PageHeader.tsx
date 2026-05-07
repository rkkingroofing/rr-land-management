import { Container } from './Container';

type Props = {
  eyebrow?: string;
  heading: string;
  subhead?: string;
  children?: React.ReactNode;
};

export function PageHeader({ eyebrow, heading, subhead, children }: Props) {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(900px 500px at 100% 0%, rgba(255,107,26,0.18), transparent 60%), linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 60%, #0A0A0A 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05] mix-blend-screen"
        style={{
          backgroundImage: 'repeating-linear-gradient(135deg, #fff 0 1px, transparent 1px 14px)',
        }}
      />
      <Container className="relative py-16 sm:py-20 md:py-28">
        {eyebrow && <p className="label-eyebrow mb-4">{eyebrow}</p>}
        <h1 className="font-display text-display-lg uppercase max-w-4xl">{heading}</h1>
        {subhead && (
          <p className="mt-5 text-lg sm:text-xl text-gray-100 max-w-2xl">{subhead}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
