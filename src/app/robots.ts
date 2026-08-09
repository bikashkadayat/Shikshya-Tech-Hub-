import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

// Required by `output: 'export'` — this route is emitted as a static file.
export const dynamic = 'force-static';

/** Generated at build time and emitted as a static /robots.txt. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
