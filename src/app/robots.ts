import type { MetadataRoute } from 'next';
import { BRAND_INFO } from '@/data/nexoraData';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${BRAND_INFO.siteUrl}/sitemap.xml`,
  };
}
