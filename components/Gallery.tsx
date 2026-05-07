'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { GalleryItem } from '@/content/gallery';

type Props = { items: GalleryItem[] };

const ALL = 'All' as const;

export function Gallery({ items }: Props) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => set.add(i.category));
    return [ALL, ...Array.from(set)];
  }, [items]);

  const [filter, setFilter] = useState<string>(ALL);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === ALL ? items : items.filter((i) => i.category === filter)),
    [items, filter],
  );

  // Reset lightbox if filter changes
  useEffect(() => setLightboxIndex(null), [filter]);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length,
      ),
    [filtered.length],
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  );

  // Keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.classList.add('no-scroll');
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.classList.remove('no-scroll');
    };
  }, [lightboxIndex, closeLightbox, prev, next]);

  return (
    <>
      <FilterBar
        categories={categories}
        active={filter}
        onSelect={setFilter}
        counts={items}
      />

      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[240px]"
        role="list"
      >
        {filtered.map((item, i) => (
          <Tile
            key={item.src + i}
            item={item}
            onOpen={() => setLightboxIndex(i)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center py-12 text-gray-600">
          No projects in this category yet — check back soon.
        </p>
      )}

      {lightboxIndex !== null && (
        <Lightbox
          item={filtered[lightboxIndex]!}
          index={lightboxIndex}
          total={filtered.length}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}

function FilterBar({
  categories,
  active,
  onSelect,
  counts,
}: {
  categories: string[];
  active: string;
  onSelect: (c: string) => void;
  counts: GalleryItem[];
}) {
  return (
    <div className="mb-8 -mx-5 sm:mx-0">
      <div
        role="tablist"
        aria-label="Filter projects by service"
        className="flex gap-2 overflow-x-auto px-5 sm:px-0 pb-2 no-scrollbar"
      >
        {categories.map((cat) => {
          const count =
            cat === ALL
              ? counts.length
              : counts.filter((i) => i.category === cat).length;
          const isActive = cat === active;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelect(cat)}
              className={`shrink-0 inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-widewide font-semibold rounded-sm border transition-colors ${
                isActive
                  ? 'bg-orange text-white border-orange'
                  : 'bg-white text-black border-gray-100 hover:border-orange hover:text-orange'
              }`}
            >
              {cat}
              <span
                className={`text-[10px] font-mono ${
                  isActive ? 'text-white/80' : 'text-gray-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Tile({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  const span = item.feature
    ? 'col-span-2 row-span-2'
    : 'col-span-1 row-span-1';

  if (item.type === 'video') {
    return (
      <div
        role="listitem"
        className={`relative bg-black overflow-hidden ${span}`}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={item.src}
          poster={item.poster}
          controls
          preload="metadata"
          playsInline
          aria-label={item.alt}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-2 left-2 inline-flex items-center gap-1 bg-orange text-white text-[10px] uppercase tracking-widewide font-semibold px-2 py-1 rounded-sm z-10"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
          Video
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 left-2 bg-black/70 text-white text-[10px] uppercase tracking-widewide font-semibold px-2 py-1"
        >
          {item.category}
        </span>
      </div>
    );
  }

  return (
    <button
      type="button"
      role="listitem"
      onClick={onOpen}
      aria-label={`${item.alt} — open larger view`}
      className={`group relative bg-black overflow-hidden ${span} focus:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] uppercase tracking-widewide font-semibold px-2 py-1 group-hover:bg-orange transition-colors"
      >
        {item.category}
      </span>
    </button>
  );
}

function Lightbox({
  item,
  index,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  item: GalleryItem;
  index: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white p-2 hover:text-orange transition-colors z-10"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous photo"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white p-3 hover:text-orange transition-colors z-10 bg-black/40 rounded-sm"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next photo"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white p-3 hover:text-orange transition-colors z-10 bg-black/40 rounded-sm"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>

      <div
        className="relative w-full max-w-6xl max-h-[80vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === 'video' ? (
          <video
            className="max-w-full max-h-[80vh]"
            src={item.src}
            poster={item.poster}
            controls
            autoPlay
            playsInline
            aria-label={item.alt}
          />
        ) : (
          <Image
            src={item.src}
            alt={item.alt}
            width={1600}
            height={1200}
            sizes="100vw"
            className="object-contain max-h-[80vh] w-auto h-auto"
            priority
          />
        )}
      </div>

      <div
        className="mt-6 text-center text-white max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-xs uppercase tracking-widewide text-orange mb-2">
          {item.category} • {index + 1} of {total}
        </p>
        <p className="text-sm sm:text-base text-gray-100">{item.alt}</p>
      </div>
    </div>
  );
}
