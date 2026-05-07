import Link from 'next/link';
import { ServiceIcon } from './ServiceIcon';

type Props = {
  slug: string;
  title: string;
  description: string;
  href?: string;
};

export function ServiceCard({ slug, title, description, href }: Props) {
  const inner = (
    <>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-orange transition-all duration-200 group-hover:h-1" />
      <div className="text-orange mb-5">
        <ServiceIcon name={slug} className="h-8 w-8" />
      </div>
      <h3 className="font-display uppercase text-2xl leading-none mb-3">{title}</h3>
      <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
      {href && (
        <span className="mt-5 inline-flex items-center text-xs uppercase tracking-widewide text-orange font-semibold">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ml-1.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </span>
      )}
    </>
  );

  const base =
    'group relative block bg-gray-900 text-white p-6 sm:p-7 transition-transform duration-200 hover:-translate-y-1';

  return href ? (
    <Link href={href} className={base}>
      {inner}
    </Link>
  ) : (
    <div className={base}>{inner}</div>
  );
}
