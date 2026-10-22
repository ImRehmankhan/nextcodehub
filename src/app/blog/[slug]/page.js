import { blogData } from "../blogData";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  const postUrl = `https://www.nextcodehub.com/blog/${resolvedParams.slug}`;

  return {
    title: `${post.title} | NextCodeHub`,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const postUrl = `https://www.nextcodehub.com/blog/${resolvedParams.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: 'https://www.nextcodehub.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'NextCodeHub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.nextcodehub.com/icon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to All Guides
        </Link>
        
        <article className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 sm:p-12">
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-gray-500">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold mr-3">
                  NC
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{post.author}</p>
                  <time className="text-sm" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                </div>
              </div>
            </div>
          </header>

          <div 
            className="prose prose-lg prose-primary max-w-none text-gray-700 
              prose-headings:font-bold prose-headings:text-gray-900 
              prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
              prose-p:mb-6 prose-p:leading-relaxed
              prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-a:underline prose-a:font-medium
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Free Automotive Calculators</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/fuel-cost-calculator" className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 transition-colors shadow-sm">
                Fuel Cost Calculator
              </Link>
              <Link href="/fuel-mileage-calculator" className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                Fuel Mileage Calculator
              </Link>
              <Link href="/mpg-calculator" className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                MPG Calculator
              </Link>
              <Link href="/gas-price-calculator" className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors">
                Gas Price Calculator
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
