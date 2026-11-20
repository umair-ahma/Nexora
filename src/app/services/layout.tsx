import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cleaning Services Perth WA',
  description:
    'Explore all 24 residential, end-of-lease bond, commercial, builders, NDIS, and exterior cleaning services across Perth & Western Australia. 100% free quote in 3 minutes.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
