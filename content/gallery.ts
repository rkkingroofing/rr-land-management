/**
 * Gallery items.
 *
 * To add more photos:
 *   1. Drop image files into /public/gallery/  (recommend: WebP or JPG, ~1600px wide)
 *   2. Add an entry below: { src: '/gallery/yourfile.jpg', alt: '...', category: '...' }
 *
 * To add more videos:
 *   1. Drop the .mp4 into /public/gallery/ AND a still .jpg poster (same name + "-poster")
 *   2. Add an entry with type: 'video', src: '/gallery/file.mp4', poster: '/gallery/file-poster.jpg'
 *
 * Categories should match a service title so the filter buttons work:
 * "Septic" | "Driveway" | "Pond" | "Land Clearing" | "Utilities" | "Bush Hogging" | "Retaining Wall" | "Excavation"
 *
 * Categories below are a best-effort first pass — feel free to re-tag any photo
 * to match the actual job it shows.
 */
export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  type?: 'image' | 'video';
  poster?: string;
  /** Larger tiles get a 2x grid span — use sparingly for the strongest photos */
  feature?: boolean;
};

export const galleryItems: GalleryItem[] = [
  {
    src: '/gallery/IMG_3710.jpg',
    alt: 'Multiple pieces of heavy equipment grading a cleared site in East Tennessee',
    category: 'Excavation',
    feature: true,
  },
  {
    src: '/gallery/IMG_5089.mp4',
    poster: '/gallery/IMG_5089-poster.jpg',
    alt: 'Skid steer with mulcher attachment clearing overgrown brush',
    category: 'Bush Hogging',
    type: 'video',
  },
  {
    src: '/gallery/IMG_3328.jpg',
    alt: 'Finished block retaining wall behind a residential property',
    category: 'Retaining Wall',
    feature: true,
  },
  {
    src: '/gallery/IMG_3247.jpg',
    alt: 'New pond construction with skid steer working the bank',
    category: 'Pond',
  },
  {
    src: '/gallery/IMG_2612.jpg',
    alt: 'Bobcat dozer and excavator staged on a job site at sunset',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_8104.jpg',
    alt: 'Finished asphalt driveway and turnaround at a house and detached garage',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_3145.jpg',
    alt: 'New gravel driveway with mountain views in the background',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_3527.jpg',
    alt: 'Excavator and skid steer working a steep dirt cut',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_5145.jpg',
    alt: 'Newly installed septic field lines covered with gravel',
    category: 'Septic',
  },
  {
    src: '/gallery/IMG_5109.jpg',
    alt: 'Septic distribution box plumbed and ready for backfill',
    category: 'Septic',
  },
  {
    src: '/gallery/IMG_3713.jpg',
    alt: 'Skid steer, excavator, and dump truck on a cleared site',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_5072.jpg',
    alt: 'Block retaining wall under construction along a driveway',
    category: 'Retaining Wall',
  },
  {
    src: '/gallery/IMG_3242.jpg',
    alt: 'Pond basin shaped and graded ready for water',
    category: 'Pond',
  },
  {
    src: '/gallery/IMG_3151.jpg',
    alt: 'Graded slope and pad cut for new construction',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_3142.jpg',
    alt: 'Cleared and graded lot with finished gravel pad',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_2797.jpg',
    alt: 'Excavated foundation footers on a residential lot',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_3495.mp4',
    poster: '/gallery/IMG_3495-poster.jpg',
    alt: 'Heavy haul truck and equipment on site in winter',
    category: 'Excavation',
    type: 'video',
  },
  {
    src: '/gallery/IMG_5110.jpg',
    alt: 'Septic line trenching with distribution box installed',
    category: 'Septic',
  },
  {
    src: '/gallery/IMG_3774.jpg',
    alt: 'Dump truck and skid steer staged for driveway work',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_8106.jpg',
    alt: 'Asphalt driveway entrance and grade work',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_3526.jpg',
    alt: 'Heavy excavation cut into a hillside',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_3240.jpg',
    alt: 'Pond construction with surrounding dirt work',
    category: 'Pond',
  },
  {
    src: '/gallery/IMG_3709.jpg',
    alt: 'Cleared site ready for grading',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_2796.jpg',
    alt: 'Foundation excavation completed and ready for footers',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_3775.jpg',
    alt: 'Driveway base prep with dump truck on site',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_3768.jpg',
    alt: 'Equipment moving dirt at a residential site',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_3769.jpg',
    alt: 'Site grading and excavation work',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_1326.jpg',
    alt: 'Cleared residential lot with cleanup in progress',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_1672.jpg',
    alt: 'Land clearing project on a residential property',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_2545.jpg',
    alt: 'Site work in progress in East Tennessee',
    category: 'Excavation',
  },
];
