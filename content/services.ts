/**
 * Services data — used on Home overview cards and Services page detail.
 * `slug` is for anchor links from Home → Services.
 */
export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
};

export const services: readonly Service[] = [
  {
    slug: 'septic',
    title: 'Septic Systems',
    short: 'New installs, repairs, and replacements. Permitted and built to code.',
    long:
      "Septic work isn't something you let just anyone do. R&R is licensed and certified to install, repair, and replace septic systems across East Tennessee — including new construction, system failures, and permit work with the county health department. We pull the soil maps, do the perc work, set the tank, and run the field lines. We leave the yard clean and the system working.",
  },
  {
    slug: 'driveways',
    title: 'Driveways',
    short: 'New gravel driveways, regrading, and culverts. Built to handle East TN weather.',
    long:
      'A driveway in East Tennessee has to handle clay, runoff, and gravity. We build new gravel driveways with the right base, the right crown, and culverts where they need to go. We regrade washed-out drives, cut new approaches off county roads, and set entrance pads. Done right the first time so you’re not fixing it every spring.',
  },
  {
    slug: 'ponds',
    title: 'Ponds',
    short: 'Construction, expansion, dredging, and repair. Stocked or working ponds.',
    long:
      "Whether you want a stocked fishing pond, a livestock pond, or you've got an old one that's silted up and leaking — R&R builds, expands, and rebuilds ponds. We site it, dig it, pack the dam, and set the overflow. Existing pond not holding water? We can pull it down, reline, and bring it back.",
  },
  {
    slug: 'land-clearing',
    title: 'Land Clearing',
    short: 'Trees, brush, stumps, undergrowth — cleared and hauled.',
    long:
      'Wooded lot you want to build on. Overgrown property line. Cabin site that needs opening up. We clear trees, grind stumps, pull undergrowth, and haul it all off — leaving you a buildable, useable piece of ground. No burn piles left for you to deal with.',
  },
  {
    slug: 'utilities',
    title: 'Utilities',
    short: 'Trenching for water, sewer, electric, and drainage lines.',
    long:
      'Water lines, sewer laterals, electric conduit, drainage pipe — we trench it, lay it, and backfill it right. We coordinate with utility companies on tie-ins and locate calls so the work passes inspection and stays buried.',
  },
  {
    slug: 'bush-hogging',
    title: 'Bush Hogging',
    short: 'Overgrown fields and lots brought back under control.',
    long:
      "Pasture that's gone to scrub. Field that hasn't been touched in five years. Clearing fence lines. Bush hogging is fast, clean, and a fraction of the cost of full clearing when you just need the brush down. We have the equipment for tight spots and rough terrain.",
  },
  {
    slug: 'retaining-walls',
    title: 'Retaining Walls',
    short: 'Engineered walls for slopes, driveways, and erosion control.',
    long:
      'East TN is hills, and hills mean walls. We build retaining walls for driveways, slopes, foundations, and erosion control — block, boulder, or treated timber depending on the load and the look you want. Properly drained and properly tied back so they last.',
  },
  {
    slug: 'excavation',
    title: 'Excavation & More',
    short: 'Site prep, demolition, grading, hauling, and anything in between.',
    long:
      "Building a house, shop, or barn? We handle pad prep, footers, basement digs, and rough grading. Need demolition? We tear down old structures and haul off. Need fill dirt or gravel hauled in? We've got the trucks. If it involves moving dirt in East Tennessee, ask us.",
  },
] as const;
