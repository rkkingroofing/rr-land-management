import Link from 'next/link';
import { galleryItems } from '@/content/gallery';
import { Container } from './Container';
import { GalleryThumb } from './GalleryThumb';

export function GalleryPreview() {
  const items = galleryItems.slice(0, 6);

  return (
    <section className="bg-offwhite py-20 md:py-28" aria-labelledby="recent-heading">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="label-eyebrow mb-3">Recent Projects</p>
            <h2 id="recent-heading" className="font-display text-display-md uppercase">
              Real Work, Real Sites
            </h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm uppercase tracking-widewide font-semibold text-black hover:text-orange transition-colors"
          >
            See full gallery →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {items.map((item, i) => (
            <GalleryThumb key={i} item={item} aspect="square" />
          ))}
        </div>
      </Container>
    </section>
  );
}
