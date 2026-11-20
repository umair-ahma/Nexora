import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import StickyMobileBar from '@/components/StickyMobileBar';
import ScrollAnimator from '@/components/ScrollAnimator';
import { BRAND_INFO } from '@/data/nexoraData';

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_INFO.siteUrl),
  alternates: {
    canonical: '/',
  },
  title: {
    default:
      'Nexora Cleaning Co | Professional Cleaning Solutions Across Western Australia',
    template: '%s | Nexora Cleaning Co WA',
  },
  description:
    'Reliable cleaning for homes, businesses, builders and specialist facilities across Perth & Western Australia. 100% free quote in 3 minutes — we beat any comparable written quote by 5%.',
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
      'Reliable cleaning for homes, businesses, builders and specialist facilities across Perth. Insured, police-checked staff. 100% free quote in 3 minutes.',
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
  icons: {
    icon: '/images/nexora-logo.jpg',
    shortcut: '/images/nexora-logo.jpg',
    apple: '/images/nexora-logo.jpg',
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
    telephone: '+61493848764',
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
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-slate-100 text-slate-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-3 focus:min-h-[44px] focus:inline-flex focus:items-center focus:rounded-xl focus:bg-brandBlue focus:text-white focus:font-heading focus:font-bold focus:text-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <div className="min-h-screen w-full max-w-[1920px] mx-auto flex flex-col bg-white shadow-sm">
          <ScrollAnimator />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
          <WhatsAppWidget />
          <StickyMobileBar />
        </div>
      </body>
    </html>
  );
}
