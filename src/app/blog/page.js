import Link from "next/link";
import { blogData } from "./blogData";

export const metadata = {
  title: "Blog - Fuel Cost & Mileage Calculator",
  description: "Read our latest articles on fuel economy, maximizing gas mileage, and using our fuel cost calculators effectively.",
};

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Fuel & Mileage Insights
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
          Tips, tricks, and guides on how to improve your fuel efficiency and accurately calculate your expenses.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((post) => (
          <div key={post.slug} className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
            <div className="flex-1 p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-primary-500">
                  Article
                </p>
                <Link href={`/blog/${post.slug}`} className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500 line-clamp-3">
                    {post.excerpt}
                  </p>
                </Link>
              </div>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <span className="sr-only">{post.author}</span>
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold">
                    NC
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {post.author}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
