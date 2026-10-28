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

  const graphItems = [
    {
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
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.nextcodehub.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.nextcodehub.com/blog',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: post.title,
          item: postUrl,
        },
      ],
    },
  ];

  if (post.faqs && post.faqs.length > 0) {
    graphItems.push({
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graphItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-primary-600 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium truncate max-w-xs sm:max-w-md">{post.title}</span>
        </nav>
        
        <article className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-10 md:p-12">
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-between flex-wrap gap-4 text-gray-500 pb-6 border-b border-gray-100">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold mr-3">
                  NC
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{post.author}</p>
                  <time className="text-xs text-gray-500" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Verified Automotive Data
              </span>
            </div>
          </header>

          <div 
            className="prose prose-lg prose-primary max-w-none text-gray-700 
              prose-headings:font-bold prose-headings:text-gray-900 
              prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:mb-6 prose-p:leading-relaxed
              prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-a:underline prose-a:font-medium
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6
              prose-ol:list-decimal prose-ol:pl-5 prose-ol:mb-6
              prose-li:mb-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Interactive FAQs Section */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-14 pt-10 border-t border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, index) => (
                  <div key={index} className="p-5 rounded-2xl bg-gray-50 border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Related Calculators */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recommended Fuel Calculators</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Link href="/fuel-cost-calculator" className="flex flex-col items-center justify-center p-3.5 text-center rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs transition-colors border border-emerald-200">
                <span className="font-bold text-sm">Fuel Cost</span>
                <span className="text-[11px] text-emerald-600 mt-0.5">Calculate Trip $</span>
              </Link>
              <Link href="/fuel-consumption-calculator" className="flex flex-col items-center justify-center p-3.5 text-center rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs transition-colors border border-gray-200">
                <span className="font-bold text-sm">Consumption</span>
                <span className="text-[11px] text-gray-600 mt-0.5">L/100km &amp; Usage</span>
              </Link>
              <Link href="/fuel-mileage-calculator" className="flex flex-col items-center justify-center p-3.5 text-center rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs transition-colors border border-gray-200">
                <span className="font-bold text-sm">Mileage</span>
                <span className="text-[11px] text-gray-600 mt-0.5">km/L &amp; MPG</span>
              </Link>
              <Link href="/gas-price-calculator" className="flex flex-col items-center justify-center p-3.5 text-center rounded-2xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs transition-colors border border-gray-200">
                <span className="font-bold text-sm">Gas Price</span>
                <span className="text-[11px] text-gray-600 mt-0.5">Monthly Gas Budget</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
