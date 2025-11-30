import ViewerLayout from "@/components/viewer/viewer-layout"
import Link from "next/link"
import { prisma } from "@/lib/useful"
import Icon from "@/components/icon"

export const metadata = {
  title: "Blog - Web Development Tutorials",
  description: "Browse all our web development tutorials, guides, and articles. Learn JavaScript, React, Next.js, and more.",
}

async function getAllPosts(searchParams) {
  try {
    const category = searchParams?.category
    const tag = searchParams?.tag
    const search = searchParams?.search

    const where = {
      published: true,
      ...(category && {
        categories: {
          some: { slug: category }
        }
      }),
      ...(tag && {
        tags: {
          some: { slug: tag }
        }
      }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { excerpt: { contains: search, mode: 'insensitive' } },
          { content: { contains: search, mode: 'insensitive' } },
        ]
      })
    }

    const [posts, categories, tags] = await Promise.all([
      prisma.post.findMany({
        where,
        orderBy: { createdAt: "desc" },
        include: {
          author: {
            select: { name: true, email: true }
          },
          categories: {
            select: { id: true, name: true, slug: true }
          },
          tags: {
            select: { id: true, name: true, slug: true }
          }
        }
      }),
      prisma.category.findMany({
        select: { id: true, name: true, slug: true, _count: { select: { posts: true } } }
      }),
      prisma.tag.findMany({
        select: { id: true, name: true, slug: true, _count: { select: { posts: true } } }
      })
    ])

    return { posts, categories, tags }
  } catch (error) {
    console.error("Error fetching posts:", error)
    return { posts: [], categories: [], tags: [] }
  }
}

export default async function BlogPage({ searchParams }) {
  const { posts, categories, tags } = await getAllPosts(searchParams)

  return (
    <ViewerLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-heading mb-4">
            <span className="bg-gradient-to-r from-blog-primary via-blog-secondary to-blog-primary bg-clip-text text-transparent">
              Blog & Tutorials
            </span>
          </h1>
          <p className="text-xl text-content-secondary max-w-2xl mx-auto">
            Explore our collection of web development tutorials, tips, and guides
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              {/* Categories */}
              {categories.length > 0 && (
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-heading mb-4 flex items-center space-x-2">
                    <Icon name="layers" className="w-5 h-5 text-blog-primary" />
                    <span>Categories</span>
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/blog"
                        className={`block px-3 py-2 rounded-lg transition-colors ${
                          !searchParams?.category
                            ? "bg-blog-primary text-white"
                            : "text-content-secondary hover:bg-muted hover:text-blog-primary"
                        }`}
                      >
                        <span className="flex items-center justify-between">
                          <span>All Categories</span>
                          <span className="text-xs">{posts.length}</span>
                        </span>
                      </Link>
                    </li>
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/blog?category=${category.slug}`}
                          className={`block px-3 py-2 rounded-lg transition-colors ${
                            searchParams?.category === category.slug
                              ? "bg-blog-primary text-white"
                              : "text-content-secondary hover:bg-muted hover:text-blog-primary"
                          }`}
                        >
                          <span className="flex items-center justify-between">
                            <span>{category.name}</span>
                            <span className="text-xs">{category._count.posts}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              {tags.length > 0 && (
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold text-heading mb-4 flex items-center space-x-2">
                    <Icon name="tag" className="w-5 h-5 text-blog-primary" />
                    <span>Popular Tags</span>
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 10).map((tag) => (
                      <Link
                        key={tag.id}
                        href={`/blog?tag=${tag.slug}`}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          searchParams?.tag === tag.slug
                            ? "bg-blog-primary text-white"
                            : "bg-muted text-content-secondary hover:bg-blog-primary/10 hover:text-blog-primary"
                        }`}
                      >
                        #{tag.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8">
              <form action="/blog" method="get" className="relative">
                <input
                  type="text"
                  name="search"
                  defaultValue={searchParams?.search}
                  placeholder="Search articles..."
                  className="w-full px-6 py-4 pl-12 border-2 border-border rounded-xl bg-background text-heading placeholder-content-secondary focus:outline-none focus:ring-4 focus:ring-blog-primary/20 focus:border-blog-primary transition-all"
                />
                <Icon name="search" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-content-secondary" />
              </form>
            </div>

            {/* Active Filters */}
            {(searchParams?.category || searchParams?.tag || searchParams?.search) && (
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="text-sm font-medium text-content-secondary">Filters:</span>
                {searchParams?.category && (
                  <Link
                    href="/blog"
                    className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blog-primary/10 text-blog-primary rounded-lg text-sm font-medium hover:bg-blog-primary/20 transition-colors"
                  >
                    <span>Category: {searchParams.category}</span>
                    <span className="text-lg">×</span>
                  </Link>
                )}
                {searchParams?.tag && (
                  <Link
                    href="/blog"
                    className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blog-primary/10 text-blog-primary rounded-lg text-sm font-medium hover:bg-blog-primary/20 transition-colors"
                  >
                    <span>Tag: {searchParams.tag}</span>
                    <span className="text-lg">×</span>
                  </Link>
                )}
                {searchParams?.search && (
                  <Link
                    href="/blog"
                    className="inline-flex items-center space-x-2 px-3 py-1.5 bg-blog-primary/10 text-blog-primary rounded-lg text-sm font-medium hover:bg-blog-primary/20 transition-colors"
                  >
                    <span>Search: {searchParams.search}</span>
                    <span className="text-lg">×</span>
                  </Link>
                )}
              </div>
            )}

            {/* Posts Grid */}
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {post.featuredImage && (
                        <div className="md:col-span-1">
                          <div className="relative h-48 md:h-full overflow-hidden">
                            <img
                              src={post.featuredImage}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        </div>
                      )}
                      <div className={`p-6 ${post.featuredImage ? 'md:col-span-2' : 'md:col-span-3'}`}>
                        {post.categories.length > 0 && (
                          <Link
                            href={`/blog?category=${post.categories[0].slug}`}
                            className="inline-block px-3 py-1 bg-blog-primary/10 text-blog-primary rounded-full text-sm font-medium mb-3 hover:bg-blog-primary/20 transition-colors"
                          >
                            {post.categories[0].name}
                          </Link>
                        )}
                        <Link href={`/blog/${post.slug}`}>
                          <h2 className="text-2xl font-bold text-heading mb-3 group-hover:text-blog-primary transition-colors">
                            {post.title}
                          </h2>
                        </Link>
                        <p className="text-content-secondary mb-4 line-clamp-2">
                          {post.excerpt || "Read more about this article..."}
                        </p>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-content-secondary">
                          <span className="flex items-center space-x-1">
                            <Icon name="eye" className="w-4 h-4" />
                            <span>{post.views || 0} views</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Icon name="heart" className="w-4 h-4" />
                            <span>{post.likes || 0} likes</span>
                          </span>
                          <span>•</span>
                          <time>
                            {new Date(post.createdAt).toLocaleDateString('en-US', {
                              month: 'long',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </time>
                        </div>
                        {post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {post.tags.slice(0, 3).map((tag) => (
                              <Link
                                key={tag.id}
                                href={`/blog?tag=${tag.slug}`}
                                className="text-xs px-2 py-1 bg-muted hover:bg-blog-primary/10 text-content-secondary hover:text-blog-primary rounded transition-colors"
                              >
                                #{tag.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card border border-border rounded-xl">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                  <Icon name="search" className="w-10 h-10 text-content-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-heading mb-2">No Articles Found</h3>
                <p className="text-content-secondary mb-6">
                  {searchParams?.search || searchParams?.category || searchParams?.tag
                    ? "Try adjusting your filters or search query"
                    : "No published articles yet. Check back soon!"}
                </p>
                {(searchParams?.search || searchParams?.category || searchParams?.tag) && (
                  <Link
                    href="/blog"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-blog-primary text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
                  >
                    <span>Clear Filters</span>
                  </Link>
                )}
              </div>
            )}
          </main>
        </div>
      </div>
    </ViewerLayout>
  )
}
