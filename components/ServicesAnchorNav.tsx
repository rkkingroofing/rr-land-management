import Link from 'next/link';
import { services } from '@/content/services';
import { Container } from './Container';

export function ServicesAnchorNav() {
  return (
    <nav
      aria-label="Jump to service"
      className="bg-black text-white border-t border-gray-900 sticky top-16 md:top-20 z-30"
    >
      <Container className="overflow-x-auto">
        <ul className="flex items-center gap-1 py-3 whitespace-nowrap">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                href={`#${s.slug}`}
                className="inline-block px-3 py-2 text-xs uppercase tracking-widewide font-semibold text-gray-100 hover:text-orange transition-colors"
              >
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
