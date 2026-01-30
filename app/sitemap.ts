import { MetadataRoute } from 'next';
import { caseStudies } from '@/content/caseStudies';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://aireadyri.com';

  // Static routes
  const routes = [
    '',
    '/services',
    '/work',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic case study routes
  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...caseStudyRoutes];
}
