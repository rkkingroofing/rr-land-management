import Image from 'next/image';
import type { GalleryItem } from '@/content/gallery';

type Props = {
  item: GalleryItem;
  aspect?: 'square' | 'portrait' | 'landscape';
  priority?: boolean;
};

function PlayIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function GalleryThumb({ item, aspect = 'square', priority = false }: Props) {
  const aspectClass =
    aspect === 'portrait'
      ? 'aspect-[3/4]'
      : aspect === 'landscape'
        ? 'aspect-[4/3]'
        : 'aspect-square';

  if (item.type === 'video' && item.src) {
    return (
      <div className={`relative ${aspectClass} bg-black overflow-hidden group`}>
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={item.src}
          poster={item.poster}
          controls
          preload="metadata"
          playsInline
          aria-label={item.alt}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-3 left-3 inline-flex items-center gap-1.5 bg-orange text-white text-[10px] uppercase tracking-widewide font-semibold px-2 py-1 rounded-sm z-10"
        >
          <PlayIcon />
          Video
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${aspectClass} bg-black overflow-hidden`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
