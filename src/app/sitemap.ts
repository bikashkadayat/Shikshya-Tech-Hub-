import type { MetadataRoute } from 'next';
import { getAllCourseSlugs } from '@/data/courses';
import { siteConfig } from '@/data/site';

// Required by `output: 'export'` — this route is emitted as a static file.
export const dynamic = 'force-static';

/** Generated at build time and emitted as a static /sitemap.xml. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1, changeFrequency: 'monthly' },
    { path: '/courses', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/workshops', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/tutors', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/schools', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
  ];

  const courseRoutes = getAllCourseSlugs().map((slug) => ({
    url: `${siteConfig.url}/courses/${slug}/`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: route.path === '/' ? `${siteConfig.url}/` : `${siteConfig.url}${route.path}/`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...courseRoutes,
  ];
}
