import { PrismaClient } from '@prisma/client'

export default async function sitemap() {
  const baseUrl = 'https://nextcodehub.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  try {
    const prisma = new PrismaClient()

    // Get all published blog posts
    const posts = await prisma.post.findMany({
      where: {
        published: true
      },
      select: {
        slug: true,
        updatedAt: true
      }
    })

    // Get all categories
    const categories = await prisma.category.findMany({
      select: {
        slug: true
      }
    })

    // Get all tags
    const tags = await prisma.tag.findMany({
      select: {
        slug: true
      }
    })

    await prisma.$disconnect()

    // Blog post pages
    const blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.8,
    }))

    // Category pages
    const categoryPages = categories.map((category) => ({
      url: `${baseUrl}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    }))

    // Tag pages
    const tagPages = tags.map((tag) => ({
      url: `${baseUrl}/tag/${tag.slug}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.5,
    }))

    return [...staticPages, ...blogPages, ...categoryPages, ...tagPages]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return only static pages if database connection fails
    return staticPages
  }
}
