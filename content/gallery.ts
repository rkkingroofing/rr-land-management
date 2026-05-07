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
 * The first 6 entries appear in the home page preview — keep your strongest
 * shots up top.
 *
 * `feature: true` makes a tile span 2x2 in the gallery grid — use sparingly
 * for the strongest, most-finished shots.
 */
export type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  type?: 'image' | 'video';
  poster?: string;
  feature?: boolean;
};

export const galleryItems: GalleryItem[] = [
  // === HOME PAGE PREVIEW (first 6) — one strong shot per service ===
  {
    src: '/gallery/IMG_2342.jpg',
    alt: 'Bobcat excavator, dozer, and skid steer staged on a finished site',
    category: 'Excavation',
    feature: true,
  },
  {
    src: '/gallery/IMG_2171.jpg',
    alt: 'Finished gravel driveway leading to a new home with retaining slope',
    category: 'Driveway',
    feature: true,
  },
  {
    src: '/gallery/IMG_1442.jpg',
    alt: 'Newly built pond basin in a wooded clearing',
    category: 'Pond',
  },
  {
    src: '/gallery/IMG_1233.jpg',
    alt: 'Brick home with overgrown yard fully cleared and cleaned up',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_0651.jpg',
    alt: 'Septic drain field lines installed in fresh trenches',
    category: 'Septic',
  },
  {
    src: '/gallery/IMG_1521.jpg',
    alt: 'Utility trench with blue water and orange electrical conduit run',
    category: 'Utilities',
  },

  // === EXCAVATION ===
  {
    src: '/gallery/IMG_3710.jpg',
    alt: 'Multiple pieces of heavy equipment grading a cleared site in East Tennessee',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_0145.jpg',
    alt: 'Two skid steers and a dump truck loaded on a flatbed trailer',
    category: 'Excavation',
    feature: true,
  },
  {
    src: '/gallery/IMG_2076.jpg',
    alt: 'Excavator and skid steer working a wooded residential lot from above',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_2075.jpg',
    alt: 'Skid steer doing site work behind a wooded cabin',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_1893.jpg',
    alt: 'Bobcat excavator with hydraulic hammer attachment on a driveway',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_1536.jpg',
    alt: 'Bobcat skid steer with forestry mulcher attachment in equipment yard',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_2612.jpg',
    alt: 'Bobcat dozer and excavator staged on a job site at sunset',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_3527.jpg',
    alt: 'Excavator and skid steer working a steep dirt cut',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_3526.jpg',
    alt: 'Heavy excavation cut into a hillside',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_3151.jpg',
    alt: 'Graded slope and pad cut for new construction',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_2797.jpg',
    alt: 'Excavated foundation footers on a residential lot',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_2796.jpg',
    alt: 'Foundation excavation completed and ready for footers',
    category: 'Excavation',
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
    src: '/gallery/IMG_2545.jpg',
    alt: 'Site work in progress in East Tennessee',
    category: 'Excavation',
  },
  {
    src: '/gallery/IMG_3495.mp4',
    poster: '/gallery/IMG_3495-poster.jpg',
    alt: 'Heavy haul truck and equipment on site in winter',
    category: 'Excavation',
    type: 'video',
  },

  // === DRIVEWAYS ===
  {
    src: '/gallery/IMG_4537.jpg',
    alt: 'New driveway carved into a wooded hillside leading up to a home',
    category: 'Driveway',
    feature: true,
  },
  {
    src: '/gallery/IMG_2149.jpg',
    alt: 'Fresh driveway grading and slope shaping at a new construction home',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_1895.jpg',
    alt: 'New residential driveway grade with skid steer working the cut',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_1557.jpg',
    alt: 'Finished gravel driveway curving up a wooded hillside',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_4514.jpg',
    alt: 'Excavator carving a new driveway out of a rocky wooded slope',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_8104.jpg',
    alt: 'Finished asphalt driveway and turnaround at a house and detached garage',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_8106.jpg',
    alt: 'Asphalt driveway entrance and grade work',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_3145.jpg',
    alt: 'New gravel driveway with mountain views in the background',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_3774.jpg',
    alt: 'Dump truck and skid steer staged for driveway work',
    category: 'Driveway',
  },
  {
    src: '/gallery/IMG_3775.jpg',
    alt: 'Driveway base prep with dump truck on site',
    category: 'Driveway',
  },

  // === SEPTIC ===
  {
    src: '/gallery/IMG_0652.jpg',
    alt: 'Septic drain field with multiple parallel trenches and lines installed',
    category: 'Septic',
  },
  {
    src: '/gallery/IMG_1427.jpg',
    alt: 'Septic field lines run through fresh trenches in winter',
    category: 'Septic',
  },
  {
    src: '/gallery/IMG_1428.jpg',
    alt: 'Septic line PVC plumbing detail in a freshly cut trench',
    category: 'Septic',
  },
  {
    src: '/gallery/IMG_1511.jpg',
    alt: 'New green fiberglass septic distribution riser set on gravel',
    category: 'Septic',
  },
  {
    src: '/gallery/IMG_2457.jpg',
    alt: 'Septic distribution box installed on a hillside site',
    category: 'Septic',
  },
  {
    src: '/gallery/IMG_2458.jpg',
    alt: 'Septic system trench and distribution box on a finished site',
    category: 'Septic',
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
    src: '/gallery/IMG_5110.jpg',
    alt: 'Septic line trenching with distribution box installed',
    category: 'Septic',
  },

  // === UTILITIES ===
  {
    src: '/gallery/IMG_1503.jpg',
    alt: 'Excavator and crew laying PVC utility lines in a long commercial trench',
    category: 'Utilities',
    feature: true,
  },
  {
    src: '/gallery/IMG_1504.jpg',
    alt: 'Workers laying PVC pipe in a long lined utility trench',
    category: 'Utilities',
  },
  {
    src: '/gallery/IMG_1526.jpg',
    alt: 'Open trench with blue water line and orange electrical conduit running across pasture',
    category: 'Utilities',
  },
  {
    src: '/gallery/IMG_15261.jpg',
    alt: 'Trench cut next to a brick commercial building with excavator working overhead',
    category: 'Utilities',
  },
  {
    src: '/gallery/IMG_1489.jpg',
    alt: 'Deep utility trench with red conduit running toward a residence',
    category: 'Utilities',
  },
  {
    src: '/gallery/IMG_1500.jpg',
    alt: 'Utility distribution junction with multiple conduits feeding in',
    category: 'Utilities',
  },
  {
    src: '/gallery/IMG_1377.jpg',
    alt: 'Drainage line trenched and run alongside a residential deck',
    category: 'Utilities',
  },
  {
    src: '/gallery/IMG_1378.jpg',
    alt: 'Excavator working a drainage trench beside a home',
    category: 'Utilities',
  },

  // === LAND CLEARING ===
  {
    src: '/gallery/IMG_3713.jpg',
    alt: 'Skid steer, excavator, and dump truck on a cleared site',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_1228.jpg',
    alt: 'Brick ranch home with yard overgrown by vines and brush — before',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_1230.jpg',
    alt: 'Home overgrown with trees and brush — before clearing',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_1232.jpg',
    alt: 'Same brick home after the yard has been cleared and graded — after',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_1236.jpg',
    alt: 'Long brick ranch with yard fully cleared of brush and undergrowth',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_1272.jpg',
    alt: 'Riverbank lot freshly cleared and ready for construction',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_1273.jpg',
    alt: 'Cleared and graded lot beside a calm river',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_1089.jpg',
    alt: 'Overgrown rolling hillside in winter — before clearing',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_1091.jpg',
    alt: 'Same hillside cleared and ready for use — after',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_3142.jpg',
    alt: 'Cleared and graded lot with finished gravel pad',
    category: 'Land Clearing',
  },
  {
    src: '/gallery/IMG_3709.jpg',
    alt: 'Cleared site ready for grading',
    category: 'Land Clearing',
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
    src: '/gallery/IMG_0446.mp4',
    poster: '/gallery/IMG_0446-poster.jpg',
    alt: 'Forestry mulcher attachment cutting brush around a large tree',
    category: 'Land Clearing',
    type: 'video',
    feature: true,
  },
  {
    src: '/gallery/IMG_0493.mp4',
    poster: '/gallery/IMG_0493-poster.jpg',
    alt: 'Excavator with mulcher head clearing brush along a lakeshore',
    category: 'Land Clearing',
    type: 'video',
  },

  // === BUSH HOGGING ===
  {
    src: '/gallery/IMG_5089.mp4',
    poster: '/gallery/IMG_5089-poster.jpg',
    alt: 'Skid steer with mulcher attachment clearing overgrown brush',
    category: 'Bush Hogging',
    type: 'video',
  },
  {
    src: '/gallery/IMG_1402.mp4',
    poster: '/gallery/IMG_1402-poster.jpg',
    alt: 'Skid steer mowing tall brush in an open pasture',
    category: 'Bush Hogging',
    type: 'video',
  },
  {
    src: '/gallery/IMG_0437.mp4',
    poster: '/gallery/IMG_0437-poster.jpg',
    alt: 'Skid steer with mulcher head clearing wooded undergrowth',
    category: 'Bush Hogging',
    type: 'video',
  },
  {
    src: '/gallery/IMG_0759.jpg',
    alt: 'Two skid steers with brush mower attachments parked in a freshly cut field',
    category: 'Bush Hogging',
  },
  {
    src: '/gallery/IMG_0761.jpg',
    alt: 'Wide East Tennessee field cleared by bush hogging',
    category: 'Bush Hogging',
  },
  {
    src: '/gallery/IMG_1211.jpg',
    alt: 'Skid steer with brush mower running across a tall pasture',
    category: 'Bush Hogging',
  },
  {
    src: '/gallery/IMG_1438.jpg',
    alt: 'Skid steer cutting back tall brush in an overgrown field',
    category: 'Bush Hogging',
  },

  // === PONDS ===
  {
    src: '/gallery/IMG_3247.jpg',
    alt: 'New pond construction with skid steer working the bank',
    category: 'Pond',
  },
  {
    src: '/gallery/IMG_3242.jpg',
    alt: 'Pond basin shaped and graded ready for water',
    category: 'Pond',
  },
  {
    src: '/gallery/IMG_3240.jpg',
    alt: 'Pond construction with surrounding dirt work',
    category: 'Pond',
  },

  // === RETAINING WALLS ===
  {
    src: '/gallery/IMG_3328.jpg',
    alt: 'Finished block retaining wall behind a residential property',
    category: 'Retaining Wall',
    feature: true,
  },
  {
    src: '/gallery/IMG_0092.jpg',
    alt: 'Stone retaining wall built along a driveway and small stream',
    category: 'Retaining Wall',
  },
  {
    src: '/gallery/IMG_0093.jpg',
    alt: 'Stone retaining wall and culvert with new mailbox at driveway entrance',
    category: 'Retaining Wall',
  },
  {
    src: '/gallery/IMG_5072.jpg',
    alt: 'Block retaining wall under construction along a driveway',
    category: 'Retaining Wall',
  },
];
