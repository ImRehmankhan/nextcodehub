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

  return {
    title: `${post.title} - Fuel Calculator Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/blog" className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8 transition-colors">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
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
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-p:mb-6 prose-p:leading-relaxed
            prose-a:text-primary-500 hover:prose-a:text-primary-600
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-6
            prose-li:mb-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Calculate Your Costs Now</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/fuel-cost-calculator" className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 transition-colors">
              Fuel Cost Calculator
            </Link>
            <Link href="/fuel-mileage-calculator" className="inline-flex items-center justify-center px-5 py-2.5 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              Mileage Calculator
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
