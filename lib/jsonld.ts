import { site } from '@/content/site';
import { services } from '@/content/services';

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: site.name,
    description:
      'Excavation, septic, ponds, driveways, land clearing, utilities, bush hogging and retaining walls across East Tennessee.',
    url: site.url,
    telephone: site.contact.primary.tel,
    email: site.contact.email,
    priceRange: '$$',
    foundingDate: String(site.founded),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: site.serviceArea.map((area) => ({
      '@type': 'AdministrativeArea',
      name: `${area}, Tennessee`,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '18:00',
      },
    ],
    paymentAccepted: site.paymentAccepted.join(', '),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Land management services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.short,
        },
      })),
    },
    sameAs: [],
  };
}
