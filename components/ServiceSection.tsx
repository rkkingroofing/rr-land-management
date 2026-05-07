import Image from 'next/image';
import Link from 'next/link';
import type { Service } from '@/content/services';
import type { GalleryItem } from '@/content/gallery';
import { Container } from './Container';
import { ServiceIcon } from './ServiceIcon';

type Props = {
  service: Service;
  photos: GalleryItem[];
  index: number;
};

export function ServiceSection({ service, photos, index }: Props) {
  // Alternate layout: even-indexed = photo left, odd = photo right
  const photoOnRight = index % 2 === 1;
  const isDark = index % 2 === 0;

  const sectionClasses = isDark
    ? 'bg-black text-white'
    : 'bg-offwhite text-black';

  const accentText = isDark ? 'text-gray-100' : 'text-gray-600';
  const ctaClass = isDark ? 'btn-secondary' : 'btn-secondary-dark';

  return (
    <section
      id={service.slug}
      className={`relative ${sectionClasses} py-20 md:py-28 scroll-mt-20`}
      aria-labelledby={`${service.slug}-heading`}
    >
      <Container>
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
            photoOnRight ? '' : 'lg:[direction:rtl]'
          }`}
        >
          {/* Copy column */}
          <div className="lg:col-span-6 lg:[direction:ltr]">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="text-orange">
                <ServiceIcon name={service.slug} className="h-7 w-7" />
              </span>
              <span className="label-eyebrow">{`0${index + 1}`} • Service</span>
            </div>
            <h2
              id={`${service.slug}-heading`}
              className="font-display text-display-md uppercase"
            >
              {service.title}
            </h2>
            <p className={`mt-6 text-lg leading-relaxed ${accentText}`}>{service.long}</p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:flex-wrap">
              <Link href="/contact" className={ctaClass}>
                Quote for {service.title}
              </Link>
            </div>
          </div>

          {/* Media column */}
          <div className="lg:col-span-6 lg:[direction:ltr]">
            <ServicePhotos photos={photos} category={service.title} />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ServicePhotos({
  photos,
  category,
}: {
  photos: GalleryItem[];
  category: string;
}) {
  if (photos.length === 0) {
    return (
      <div className="relative aspect-[4/3] bg-gray-900 overflow-hidden flex items-center justify-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #fff 0 1px, transparent 1px 14px)',
          }}
        />
        <div className="relative text-center px-6">
          <div className="text-xs uppercase tracking-widewide text-orange mb-2">Photos</div>
          <div className="font-display uppercase text-white text-2xl leading-tight">
            {category} project<br />photos coming soon
          </div>
        </div>
      </div>
    );
  }

  if (photos.length === 1) {
    const p = photos[0]!;
    return (
      <div className="relative aspect-[4/3] bg-black overflow-hidden">
        <Image
          src={p.src}
          alt={p.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  // 2+ photos — show big primary + small secondary
  const [primary, secondary] = photos;
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-3 sm:col-span-2 relative aspect-[4/3] bg-black overflow-hidden">
        <Image
          src={primary!.src}
          alt={primary!.alt}
          fill
          sizes="(min-width: 1024px) 33vw, 66vw"
          className="object-cover"
        />
      </div>
      <div className="col-span-3 sm:col-span-1 relative aspect-[4/3] sm:aspect-auto bg-black overflow-hidden">
        <Image
          src={secondary!.src}
          alt={secondary!.alt}
          fill
          sizes="(min-width: 1024px) 17vw, 33vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
