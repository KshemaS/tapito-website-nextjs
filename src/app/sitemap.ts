import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const currentDate = new Date();

  // Static pages with priorities and change frequencies
  const staticPages = [
    { url: '', priority: 1.0, changefreq: 'weekly' }, // Homepage
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.9, changefreq: 'monthly' },
    { url: '/enterprise', priority: 0.8, changefreq: 'monthly' },
    { url: '/partners', priority: 0.7, changefreq: 'monthly' },
    { url: '/plans', priority: 0.9, changefreq: 'weekly' },
    { url: '/integrations', priority: 0.7, changefreq: 'monthly' },
    { url: '/resources', priority: 0.6, changefreq: 'weekly' },
    { url: '/solutions', priority: 0.8, changefreq: 'monthly' },
    { url: '/case-studies', priority: 0.7, changefreq: 'weekly' },

    // Features pages
    { url: '/features', priority: 0.8, changefreq: 'monthly' },
    { url: '/features/business-intelligence', priority: 0.7, changefreq: 'monthly' },
    { url: '/features/campaign-automation', priority: 0.7, changefreq: 'monthly' },
    { url: '/features/growth-simulator', priority: 0.7, changefreq: 'monthly' },
    { url: '/features/mobile-app', priority: 0.7, changefreq: 'monthly' },
    { url: '/features/profitability-engine', priority: 0.7, changefreq: 'monthly' },
    { url: '/features/revenue-insights', priority: 0.7, changefreq: 'monthly' },
    { url: '/features/scheme-generator', priority: 0.7, changefreq: 'monthly' },
    { url: '/features/smart-analytics', priority: 0.7, changefreq: 'monthly' },

    // Legal pages
    { url: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms-of-service', priority: 0.3, changefreq: 'yearly' },
  ];

  // Generate sitemap entries for static pages
  const sitemap: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changefreq as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
    priority: page.priority,
  }));

  // Dynamic solution pages
  const solutionSlugs = [
    'building-materials',
    'beauty-health',
    'ecommerce',
    'electronics',
    'fashion',
    'fb-retail',
    'home-furnishing',
    'jewelry',
    'supermarkets',
  ];

  const solutionPages = solutionSlugs.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  sitemap.push(...solutionPages);

  // Dynamic case study pages
  const caseStudyIds = ['1', '2', '3', '4', '5', '6'];

  const caseStudyPages = caseStudyIds.map((id) => ({
    url: `${baseUrl}/case-studies/${id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  sitemap.push(...caseStudyPages);

  return sitemap;
}
