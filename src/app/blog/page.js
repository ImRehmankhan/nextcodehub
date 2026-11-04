import Link from "next/link";
import { blogData } from "./blogData";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "Automotive Fuel Insights & Mileage Guides",
  description: "Expert guides on improving gas mileage, lowering petrol expenses, calculating fuel consumption in L/100km & MPG, and selecting fuel-efficient vehicles.",
  alternates: {
    canonical: 'https://www.nextcodehub.com/blog',
  },
  openGraph: {
    title: "Automotive Fuel Insights & Mileage Guides | NextCodeHub",
    description: "In-depth articles and analytical guides to help drivers optimize fuel efficiency, minimize trip expenses, and understand automotive metrics.",
    url: 'https://www.nextcodehub.com/blog',
  },
};

const blogIndexJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
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
      ],
    },
    {
      '@type': 'CollectionPage',
      '@id': 'https://www.nextcodehub.com/blog',
      name: 'NextCodeHub Fuel & Mileage Insights Blog',
      url: 'https://www.nextcodehub.com/blog',
      description: 'Educational articles and guides on optimizing fuel economy, calculating trip budgets, and vehicle maintenance.',
      publisher: {
        '@type': 'Organization',
        name: 'NextCodeHub',
        url: 'https://www.nextcodehub.com',
        logo: 'https://www.nextcodehub.com/logo.png',
      },
    },
    {
      '@type': 'ItemList',
      itemListElement: blogData.map((post, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `https://www.nextcodehub.com/blog/${post.slug}`,
        name: post.title,
      })),
    },
  ],
};

export default function BlogPage() {
  const featuredPost = blogData[0];
  const remainingPosts = blogData.slice(1);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd) }}
      />

      <div className="bg-gray-50 min-h-screen py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <Breadcrumbs items={[{ name: 'Blog' }]} />
          
          {/* Hero Banner */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200">
              Automotive Engineering &amp; Fuel Economics
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              Fuel &amp; Mileage <span className="text-primary-600">Insights</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              In-depth research, empirical benchmarks, and practical tutorials to help you reduce fuel consumption, understand automotive metrics, and stretch every gallon or liter further.
            </p>
            
            {/* Quick Filter Topics */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
              {[
                'Fuel Cost Planning',
                'Mileage & Formulas',
                'Road Trip Budgets',
                'Hybrids & EVs',
                'Eco-Driving Habits',
                'Vehicle Maintenance',
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white text-gray-700 border border-gray-200 shadow-2xs hover:border-primary-400 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Spotlight Article */}
          {featuredPost && (
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary-600 uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
                  Featured Pillar Guide
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="block group">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {featuredPost.title}
                  </h2>
                </Link>
                <p className="text-gray-600 text-base leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500 pt-2">
                  <span>By {featuredPost.author}</span>
                  <span>•</span>
                  <time dateTime={featuredPost.date}>
                    {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </time>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col justify-center sm:items-end">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <span>Read Full Guide &rarr;</span>
                </Link>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Editorial Articles</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(remainingPosts.length > 0 ? remainingPosts : blogData).map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-primary-200 transition-all duration-300 group"
                >
                  <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-700 font-semibold border border-primary-100">
                          Tutorial &amp; Analysis
                        </span>
                        <time dateTime={post.date} className="text-gray-400">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </time>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="block group">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors leading-snug">
                          {post.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-gray-700">{post.author}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary-600 font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1"
                      >
                        Read Article &rarr;
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Quick Fuel Economy Reference Matrix */}
          <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-100 space-y-6">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                Essential Fuel Economy Metric Conversion Matrix
              </h2>
              <p className="text-sm text-gray-600">
                Quickly cross-reference between US MPG, UK Imperial MPG, km per liter, and European L/100km to evaluate any vehicle specification:
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                    <th className="text-left p-3.5">Fuel Economy Level</th>
                    <th className="text-center p-3.5">US MPG</th>
                    <th className="text-center p-3.5">UK Imperial MPG</th>
                    <th className="text-center p-3.5">km / Liter</th>
                    <th className="text-center p-3.5">Liters / 100km</th>
                    <th className="text-left p-3.5">Typical Vehicle Class</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Exceptional / Hybrid', '50+ MPG', '60+ MPG', '21+ km/L', '< 4.7 L/100km', 'Prius, Elantra Hybrid, PHEVs'],
                    ['High Efficiency', '35 – 49 MPG', '42 – 58 MPG', '15 – 21 km/L', '4.8 – 6.7 L/100km', 'Civic, Corolla, Mazda 3'],
                    ['Average Passenger Car', '25 – 34 MPG', '30 – 41 MPG', '10.5 – 14.5 km/L', '6.8 – 9.4 L/100km', 'RAV4, CR-V, Accord, Camry'],
                    ['Moderate / Midsize SUV', '18 – 24 MPG', '22 – 29 MPG', '7.5 – 10.2 km/L', '9.5 – 13.0 L/100km', 'Explorer, Highlander, Pilot'],
                    ['High Consumption / Truck', '< 18 MPG', '< 22 MPG', '< 7.5 km/L', '> 13.0 L/100km', 'F-150, Silverado, Full SUVs'],
                  ].map(([level, us, uk, kml, l100, vehicle]) => (
                    <tr key={level} className="hover:bg-gray-50 transition-colors">
                      <td className="p-3.5 font-bold text-gray-900">{level}</td>
                      <td className="p-3.5 text-center font-medium text-emerald-700">{us}</td>
                      <td className="p-3.5 text-center text-gray-600">{uk}</td>
                      <td className="p-3.5 text-center font-mono text-gray-700">{kml}</td>
                      <td className="p-3.5 text-center font-mono text-primary-700 font-semibold">{l100}</td>
                      <td className="p-3.5 text-gray-500 text-xs">{vehicle}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Direct Bridges to Core Calculators */}
          <section className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white space-y-6">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready to Put These Insights into Practice?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Test your own vehicle&apos;s real-world numbers with our free, instant calculation suite:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {[
                { name: 'Fuel Cost Calculator', href: '/fuel-cost-calculator', desc: 'Estimate trip cost & split gas bills' },
                { name: 'Fuel Mileage Calculator', href: '/fuel-mileage-calculator', desc: 'Calculate exact km/L or MPG' },
                { name: 'MPG Calculator', href: '/mpg-calculator', desc: 'Dual US & UK Imperial conversions' },
                { name: 'Fuel Consumption Calculator', href: '/fuel-consumption-calculator', desc: 'Measure L/100km & gas per mile' },
              ].map((calc) => (
                <Link
                  key={calc.name}
                  href={calc.href}
                  className="bg-white/10 hover:bg-white/20 p-5 rounded-2xl border border-white/10 transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="font-bold text-white group-hover:text-primary-300 transition-colors text-sm mb-1">
                      {calc.name}
                    </h3>
                    <p className="text-xs text-gray-300">{calc.desc}</p>
                  </div>
                  <div className="mt-4 text-xs font-semibold text-primary-400 flex items-center gap-1">
                    Calculate Now &rarr;
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Editorial Integrity & Author Profile */}
          <section className="border-t border-gray-200 pt-10 text-center max-w-2xl mx-auto space-y-3 text-xs text-gray-500">
            <p className="font-semibold text-gray-700 uppercase tracking-wider">
              Editorial Integrity &amp; Verification
            </p>
            <p>
              All articles published on NextCodeHub are authored and reviewed by automotive specialists. We reference verified testing protocols from the United States EPA, the European Environment Agency, and manufacturer WLTP specifications to provide trustworthy, transparent advice.
            </p>
          </section>

        </div>
      </div>
    </>
  );
}

