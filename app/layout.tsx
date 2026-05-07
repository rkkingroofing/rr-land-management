import type { Metadata, Viewport } from 'next';
import { Anton, Inter_Tight } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCTABar } from '@/components/MobileCTABar';
import { localBusinessJsonLd } from '@/lib/jsonld';
import { site } from '@/content/site';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-anton',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-tight',
});

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'R&R Land Management — Excavation, Septic & Land Clearing | East TN',
    template: '%s | R&R Land Management',
  },
  description:
    'Family-owned excavation, septic, ponds, driveways and land clearing in East Tennessee. Serving Sevier, Knox & surrounding counties since 2018. Licensed, insured, certified.',
  keywords: [
    'excavation East TN',
    'septic system Sevier County',
    'land clearing Knoxville',
    'pond builder Tennessee',
    'driveway contractor Seymour TN',
  ],
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: 'R&R Land Management — Heavy Work, Done Right',
    description:
      'Excavation, septic, ponds, and land clearing across East Tennessee. Family-owned in Seymour.',
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'R&R Land Management',
    description: 'Heavy work, done right. East Tennessee since 2018.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${interTight.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main id="main" className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </body>
    </html>
  );
}
