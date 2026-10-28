import { blogData } from './blog/blogData';

export default function sitemap() {
  const baseUrl = 'https://www.nextcodehub.com';

  // Calculator routes (highest priority)
  const calculatorRoutes = [
    '/fuel-cost-calculator',
    '/fuel-mileage-calculator',
    '/mpg-calculator',
    '/petrol-calculator',
    '/fuel-consumption-calculator',
    '/fuel-economy-calculator',
    '/gas-mileage-calculator',
    '/gas-price-calculator',
    '/fuel-efficiency-calculator',
    '/fuel-average-calculator',
    '/fuel-expense-calculator',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Blog index route (high priority content hub)
  const blogIndexRoute = {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  };

  // Static trust & legal routes
  const supportRoutes = [
    '/about',
    '/contact',
    '/privacy-policy',
    '/cookie-policy',
    '/terms',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Homepage
  const homepageRoute = {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  };

  // Dynamic blog routes
  const blogRoutes = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [homepageRoute, blogIndexRoute, ...calculatorRoutes, ...blogRoutes, ...supportRoutes];
}
