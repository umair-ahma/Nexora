import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perth Service Areas & Suburbs',
  description:
    'Check your Perth postcode or suburb for residential, end-of-lease, commercial, NDIS, and builders cleaning across Greater Perth and Western Australia. Zero metro travel surcharges.',
  alternates: {
    canonical: '/service-areas',
  },
};

export default function ServiceAreasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
