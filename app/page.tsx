import { Hero } from '@/components/Hero';
import { BrandPanel } from '@/components/BrandPanel';
import { ServicesGrid } from '@/components/ServicesGrid';
import { WhyUs } from '@/components/WhyUs';
import { ServiceArea } from '@/components/ServiceArea';
import { GalleryPreview } from '@/components/GalleryPreview';
import { CTABlock } from '@/components/CTABlock';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandPanel />
      <ServicesGrid />
      <WhyUs />
      <ServiceArea />
      <GalleryPreview />
      <CTABlock />
    </>
  );
}
