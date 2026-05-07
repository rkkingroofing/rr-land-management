import { galleryItems, type GalleryItem } from '@/content/gallery';

/**
 * Map service slug → gallery category names. Some services share photos
 * (e.g. bush-hogging surfaces forestry-mulching shots tagged Land Clearing).
 */
const SERVICE_TO_CATEGORIES: Record<string, string[]> = {
  septic: ['Septic'],
  driveways: ['Driveway'],
  ponds: ['Pond'],
  'land-clearing': ['Land Clearing'],
  utilities: ['Utilities', 'Septic'], // utilities work overlaps with septic plumbing
  'bush-hogging': ['Bush Hogging', 'Land Clearing'],
  'retaining-walls': ['Retaining Wall'],
  excavation: ['Excavation'],
};

/** Returns up to `limit` non-video gallery items relevant to the service. */
export function photosForService(slug: string, limit = 2): GalleryItem[] {
  const cats = SERVICE_TO_CATEGORIES[slug] ?? [];
  const matches: GalleryItem[] = [];
  for (const cat of cats) {
    for (const item of galleryItems) {
      if (item.category === cat && item.type !== 'video' && !matches.includes(item)) {
        matches.push(item);
        if (matches.length >= limit) return matches;
      }
    }
  }
  return matches;
}
