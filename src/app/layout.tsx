import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import StickyMobileBar from '@/components/StickyMobileBar';
import { BRAND_INFO } from '@/data/nexoraData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_INFO.siteUrl),
  title: {
    default:
      'Nexora Cleaning Co | Professional Cleaning Solutions Across Western Australia',
    template: '%s | Nexora Cleaning Co WA',
  },
  description:
    'Reliable cleaning for homes, businesses, builders and specialist facilities across Perth & Western Australia. 100% free quote within minutes — we beat all comparable quotes by 5%.',
  keywords: [
    'Nexora Cleaning Co',
    'cleaning company Perth',
    'end of lease cleaning Perth',
    'bond cleaning Perth WA',
    'commercial cleaning Perth',
    'builders cleaning Western Australia',
    'childcare cleaning Perth',
    'school cleaning WA',
    'house cleaning Perth',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: BRAND_INFO.siteUrl,
    siteName: BRAND_INFO.companyName,
    title:
      'Nexora Cleaning Co — Professional Cleaning Solutions Across Western Australia',
    description:
      'Reliable cleaning for homes, businesses, builders and specialist facilities across Perth. Insured, police-checked staff. We beat any comparable quote by 5%.',
    images: [
      {
        url: '/images/nexora-logo.jpg',
        width: 1493,
        height: 1053,
        alt: 'Nexora Cleaning Co Western Australia',
      },
    ],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'nexora-gsc-ready',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    name: BRAND_INFO.companyName,
    url: BRAND_INFO.siteUrl,
    logo: `${BRAND_INFO.siteUrl}/images/nexora-logo.jpg`,
    image: `${BRAND_INFO.siteUrl}/images/nexora-logo.jpg`,
    email: BRAND_INFO.mainEmail,
    telephone: '+61861000000',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Perth',
      addressRegion: 'WA',
      addressCountry: 'AU',
    },
    areaServed: {
      '@type': 'City',
      name: 'Perth',
      containedInPlace: {
        '@type': 'State',
        name: 'Western Australia',
      },
    },
    description:
      'Professional Cleaning Solutions Across Western Australia. Reliable cleaning for homes, businesses, builders and specialist facilities.',
  };

  return (
    <html lang="en-AU" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <StickyMobileBar />
      </body>
    </html>
  );
}
