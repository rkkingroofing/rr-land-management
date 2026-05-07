import type { Metadata } from 'next';
import { galleryItems } from '@/content/gallery';
import { Container } from '@/components/Container';
import { PageHeader } from '@/components/PageHeader';
import { Gallery } from '@/components/Gallery';
import { CTABlock } from '@/components/CTABlock';
import { OrangeStripe } from '@/components/OrangeStripe';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Real projects from R&R Land Management — septic, driveways, ponds, retaining walls, land clearing, and full excavation across East Tennessee.',
  openGraph: {
    title: 'Project Gallery | R&R Land Management',
    description:
      'Real jobs across East Tennessee — septic, driveways, ponds, and everything in between.',
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Project Gallery"
        heading="Our Work"
        subhead="Real jobs across East Tennessee. Septic, driveways, ponds, and everything in between."
      />
      <OrangeStripe />

      <section className="bg-offwhite py-14 md:py-20">
        <Container>
          <Gallery items={galleryItems} />
        </Container>
      </section>

      <CTABlock
        heading="Have a Project of Your Own?"
        body="Tell us about your job — we'll come look and give you a straight number."
      />
    </>
  );
}
