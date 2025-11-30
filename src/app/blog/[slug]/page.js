import { notFound } from "next/navigation"
import ViewerLayout from "@/components/viewer/viewer-layout"
import Icon from "@/components/icon"
import prisma from "@/lib/prisma"
import BlogPostInteractions from "@/components/viewer/blog-post-interactions"

export async function generateMetadata({ params }) {
  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
    include: {
      author: true,
      categories: true,
      tags: true,
    },
  })

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - NextCodeHub`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160).replace(/<[^>]*>/g, ''),
      type: "article",
      publishedTime: post.createdAt.toISOString(),
      authors: [post.author.name],
    },
  }
}

export default async function BlogPostPage({ params }) {
  // Increment view count
  await prisma.post.update({
    where: { slug: params.slug },
    data: { views: { increment: 1 } },
  }).catch(() => {}) // Ignore errors for view increment

  const post = await prisma.post.findUnique({
    where: { slug: params.slug },
    include: {
      author: true,
      categories: true,
      tags: true,
    },
  })

  if (!post || !post.published) {
    notFound()
  }

  // Get related posts
  const relatedPosts = await prisma.post.findMany({
    where: {
      AND: [
        { published: true },
        { id: { not: post.id } },
        {
          OR: [
            { categories: { some: { id: { in: post.categories.map(c => c.id) } } } },
            { tags: { some: { id: { in: post.tags.map(t => t.id) } } } }
          ]
        }
      ]
    },
    take: 3,
    orderBy: { createdAt: 'desc' },
    include: {
      author: true,
      categories: true,
    },
  })

  // Get comments
  const comments = await prisma.comment.findMany({
    where: {
      postId: post.id,
      published: true,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
          avatar: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <ViewerLayout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-content-secondary mb-8">
          <a href="/" className="hover:text-blog-primary transition-colors">Home</a>
          <Icon name="chevron-right" className="w-4 h-4" />
          <a href="/blog" className="hover:text-blog-primary transition-colors">Blog</a>
          <Icon name="chevron-right" className="w-4 h-4" />
          {post.categories.length > 0 && (
            <>
              <a href={`/blog?category=${post.categories[0].slug}`} className="hover:text-blog-primary transition-colors">
                {post.categories[0].name}
              </a>
              <Icon name="chevron-right" className="w-4 h-4" />
            </>
          )}
          <span className="text-content-primary">{post.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            {post.categories.length > 0 && (
              <a
                href={`/blog?category=${post.categories[0].slug}`}
                className="px-4 py-1.5 bg-gradient-to-r from-blog-primary to-blog-secondary text-white rounded-full text-sm font-medium hover:shadow-lg transition-all"
              >
                {post.categories[0].name}
              </a>
            )}
            <div className="flex items-center space-x-4 text-sm text-content-secondary">
              <span className="flex items-center space-x-1">
                <Icon name="eye" className="w-4 h-4" />
                <span>{post.views.toLocaleString()}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="thumbs-up" className="w-4 h-4" />
                <span>{post.likes}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Icon name="share-2" className="w-4 h-4" />
                <span>{post.shares}</span>
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-heading mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-4 text-content-secondary">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blog-primary to-blog-secondary flex items-center justify-center">
                <span className="text-white font-semibold">
                  {post.author.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-content-primary">{post.author.name}</p>
                <p className="text-xs text-content-secondary">
                  {new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
            <span className="text-content-secondary">•</span>
            <span className="text-sm">{Math.ceil(post.content.length / 1000)} min read</span>
          </div>
        </header>

        {/* Featured Image Placeholder */}
        {post.featuredImage && (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border">
            <span className="text-sm font-semibold text-content-secondary">Tags:</span>
            {post.tags.map((tag) => (
              <a
                key={tag.id}
                href={`/blog?tag=${tag.slug}`}
                className="px-3 py-1 bg-muted text-content-primary rounded-lg text-sm hover:bg-blog-primary hover:text-white transition-all"
              >
                #{tag.name}
              </a>
            ))}
          </div>
        )}

        {/* Interactive Section - Likes and Comments */}
        <BlogPostInteractions
          postId={post.id}
          initialLikes={post.likes}
          initialComments={comments}
        />

        {/* Author Bio */}
        <div className="bg-gradient-to-br from-blog-primary/10 to-blog-secondary/10 rounded-2xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blog-primary to-blog-secondary flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-2xl">
                {post.author.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-heading mb-2">About {post.author.name}</h3>
              <p className="text-content-secondary mb-4">
                {post.author.bio || "Passionate developer and technical writer sharing knowledge with the community."}
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-heading mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <a
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-200"
                >
                  <div className="p-6">
                    {relatedPost.categories.length > 0 && (
                      <span className="inline-block px-3 py-1 bg-blog-primary/10 text-blog-primary rounded-full text-xs font-medium mb-3">
                        {relatedPost.categories[0].name}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-heading mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-xs text-content-secondary">
                      <span className="flex items-center space-x-1">
                        <Icon name="eye" className="w-3 h-3" />
                        <span>{relatedPost.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Icon name="calendar" className="w-3 h-3" />
                        <span>
                          {new Date(relatedPost.createdAt).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </span>
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </article>
    </ViewerLayout>
  )
}
