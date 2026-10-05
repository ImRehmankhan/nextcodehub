import { blogData } from './blog/blogData';

export default function sitemap() {
  const baseUrl = 'https://www.nextcodehub.com';

  // Static routes
  const staticRoutes = [
    '',
    '/fuel-cost-calculator',
    '/fuel-mileage-calculator',
    '/mpg-calculator',
    '/petrol-calculator',
    '/fuel-consumption-calculator',
    '/fuel-economy-calculator',
    '/blog',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
