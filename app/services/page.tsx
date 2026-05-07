import type { Metadata } from 'next';
import { services } from '@/content/services';
import { PageHeader } from '@/components/PageHeader';
import { ServicesAnchorNav } from '@/components/ServicesAnchorNav';
import { ServiceSection } from '@/components/ServiceSection';
import { CTABlock } from '@/components/CTABlock';
import { OrangeStripe } from '@/components/OrangeStripe';
import { photosForService } from '@/lib/servicePhotos';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Septic systems, driveways, ponds, land clearing, utilities, bush hogging, retaining walls, and full excavation in East Tennessee. Licensed, insured, and certified.',
  openGraph: {
    title: 'Services | R&R Land Management',
    description:
      'Septic, driveways, ponds, land clearing, utilities, bush hogging, retaining walls, and excavation across East Tennessee.',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Do"
        heading="Services"
        subhead="From clearing raw land to setting your septic, R&R handles the full job."
      />
      <ServicesAnchorNav />
      <OrangeStripe />

      {services.map((service, i) => (
        <ServiceSection
          key={service.slug}
          service={service}
          photos={photosForService(service.slug, 2)}
          index={i}
        />
      ))}

      <OrangeStripe />
      <CTABlock />
    </>
  );
}
