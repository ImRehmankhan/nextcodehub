import ViewerLayout from "@/components/viewer/viewer-layout"
import Link from "next/link"
import Image from "next/image"
import { prisma } from "@/lib/useful"
import Icon from "@/components/icon"

export const metadata = {
  title: "Home - Web Development Tutorials & Resources",
  description: "Discover the latest web development tutorials, tips, and tools. Learn JavaScript, React, Next.js and more with NextCodeHub.",
}

async function getLatestPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      take: 9,
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
    })
    return posts
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

export default async function HomePage() {
  const latestPosts = await getLatestPosts()

  return (
    <ViewerLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blog-primary/5 via-blog-secondary/5 to-transparent py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-heading mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blog-primary via-blog-secondary to-blog-primary bg-clip-text text-transparent">
              NextCodeHub
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-content-secondary mb-8 max-w-3xl mx-auto">
            Your ultimate destination for web development tutorials, tips, and tools. 
            Learn modern technologies and build amazing projects.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/blog"
              className="px-8 py-4 bg-gradient-to-r from-blog-primary to-blog-secondary text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2"
            >
              <Icon name="book" className="w-5 h-5" />
              <span>Explore Tutorials</span>
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-muted hover:bg-muted/80 text-heading rounded-xl font-semibold hover:scale-105 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-heading mb-2">Latest Articles</h2>
            <p className="text-content-secondary">Stay updated with our newest tutorials and guides</p>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center space-x-2 text-blog-primary hover:text-blog-secondary font-medium transition-colors"
          >
            <span>View All</span>
            <span>→</span>
          </Link>
        </div>

        {latestPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {post.featuredImage && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                )}
                <div className="p-6">
                  {post.categories.length > 0 && (
                    <span className="inline-block px-3 py-1 bg-blog-primary/10 text-blog-primary rounded-full text-sm font-medium mb-3">
                      {post.categories[0].name}
                    </span>
                  )}
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-blog-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-content-secondary text-sm mb-4 line-clamp-3">
                    {post.excerpt || "Read more about this amazing article..."}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-4 text-xs text-content-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="eye" className="w-4 h-4" />
                        <span>{post.views || 0}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="heart" className="w-4 h-4" />
                        <span>{post.likes || 0}</span>
                      </span>
                    </div>
                    <time className="text-xs text-content-secondary">
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Icon name="book" className="w-10 h-10 text-content-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-heading mb-2">No Posts Yet</h3>
            <p className="text-content-secondary mb-6">We're working on creating amazing content for you!</p>
          </div>
        )}

        {latestPosts.length > 0 && (
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blog-primary text-white rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              <span>View All Articles</span>
              <span>→</span>
            </Link>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-muted via-transparent to-muted py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-heading mb-3">Why Choose NextCodeHub?</h2>
            <p className="text-content-secondary max-w-2xl mx-auto">
              We provide high-quality, practical content to help you become a better developer
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                <Icon name="book" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">In-Depth Tutorials</h3>
              <p className="text-content-secondary">
                Step-by-step guides covering everything from basics to advanced concepts
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                <Icon name="code" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Practical Examples</h3>
              <p className="text-content-secondary">
                Real-world code examples you can use in your projects immediately
              </p>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                <Icon name="layers" className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-heading mb-2">Latest Technologies</h3>
              <p className="text-content-secondary">
                Stay up-to-date with the newest tools and frameworks in web development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blog-primary to-blog-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-4">Explore More</h2>
            <p className="text-white/90 mb-6">
              Discover our collection of helpful resources, tools, and information
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/about"
                className="px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-medium text-center transition-all hover:scale-105"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-medium text-center transition-all hover:scale-105"
              >
                Contact
              </Link>
              <Link
                href="/tools"
                className="px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-medium text-center transition-all hover:scale-105"
              >
                Tools
              </Link>
              <Link
                href="/privacy-policy"
                className="px-4 py-3 bg-white/20 hover:bg-white/30 rounded-lg font-medium text-center transition-all hover:scale-105"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ViewerLayout>
  )
}
