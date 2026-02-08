import ViewerLayout from "@/components/viewer/viewer-layout"
import Link from "next/link"
import Image from "next/image"
import { prisma } from "@/lib/useful"
import Icon from "@/components/icon"

export const metadata = {
  title: "Fuel Calculator Tools – Calculate Petrol Mileage, Gas Cost & MPG",
  description: "Free fuel calculator tools to calculate petrol mileage, gas costs, MPG, fuel expenses, and efficiency. Save money on fuel with accurate calculations and insights.",
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
      {/* Hero Section - Modern Fuel-Themed */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-950 dark:to-cyan-950 py-24 px-4 sm:px-6 lg:px-8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-400/10 dark:bg-sky-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400/10 dark:bg-amber-400/5 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg mb-6 border border-sky-200 dark:border-sky-800">
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-semibold text-sky-600 dark:text-sky-400">Smart Fuel Management Tools</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-slate-900 dark:text-white">Calculate</span>{" "}
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
              Fuel Costs
            </span>
            <br />
            <span className="text-slate-700 dark:text-slate-300">& Save Money</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            🚗 Calculate fuel costs, petrol mileage, and MPG instantly
            <br />
            <span className="text-lg font-medium text-sky-600 dark:text-sky-400">
              Free tools to optimize your vehicle's efficiency and track expenses
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/tools/fuel-cost-calculator"
              className="group px-8 py-5 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-2xl font-bold hover:shadow-2xl hover:shadow-sky-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">⛽</span>
              <div className="text-left">
                <div>Fuel Cost Calculator</div>
                <div className="text-xs font-normal opacity-90">Calculate trip fuel costs</div>
              </div>
            </Link>
            <Link
              href="/tools/petrol-mileage-calculator"
              className="px-8 py-5 bg-white dark:bg-slate-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 dark:hover:from-slate-700 dark:hover:to-slate-600 text-slate-900 dark:text-white border-2 border-sky-200 dark:border-sky-800 rounded-2xl font-bold hover:border-sky-400 dark:hover:border-sky-600 hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-lg"
            >
              <span className="text-2xl">📊</span>
              <div className="text-left">
                <div>Mileage Calculator</div>
                <div className="text-xs font-normal text-slate-600 dark:text-slate-400">Track efficiency</div>
              </div>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>No Registration</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Instant Results</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Privacy Protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fuel Calculator Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Popular Fuel Calculators
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Choose the perfect calculator for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Fuel Cost Calculator",
              description: "Calculate total fuel costs for any trip. Get instant estimates for fuel expenses, cost per km/mile, and budget planning.",
              icon: "⛽",
              href: "/tools/fuel-cost-calculator",
              gradient: "from-sky-500 to-cyan-500",
              bgGradient: "from-sky-50 to-cyan-50 dark:from-sky-950/50 dark:to-cyan-950/50"
            },
            {
              title: "Petrol Mileage Calculator",
              description: "Track your vehicle's petrol mileage and efficiency. Monitor km/L, consumption rates, and optimize fuel economy.",
              icon: "📊",
              href: "/tools/petrol-mileage-calculator",
              gradient: "from-green-500 to-emerald-500",
              bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/50 dark:to-emerald-950/50"
            },
            {
              title: "MPG Calculator",
              description: "Calculate miles per gallon (MPG) for your vehicle. Convert between units and track fuel efficiency metrics.",
              icon: "🚗",
              href: "/tools/mpg-calculator",
              gradient: "from-purple-500 to-pink-500",
              bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50"
            },
            {
              title: "Gas Price Calculator",
              description: "Estimate gas costs based on current prices. Find the cheapest gas and budget your fuel expenses accurately.",
              icon: "💰",
              href: "/tools/gas-price-calculator",
              gradient: "from-orange-500 to-red-500",
              bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/50 dark:to-red-950/50"
            },
            {
              title: "Fuel Expense Calculator",
              description: "Track and manage monthly fuel expenses. Budget fuel costs and monitor spending patterns over time.",
              icon: "💳",
              href: "/tools/fuel-expense-calculator",
              gradient: "from-indigo-500 to-blue-500",
              bgGradient: "from-indigo-50 to-blue-50 dark:from-indigo-950/50 dark:to-blue-950/50"
            },
            {
              title: "Road Trip Fuel Calculator",
              description: "Plan fuel costs for road trips. Estimate total gas expenses, plan fuel stops, and budget your journey.",
              icon: "🗺️",
              href: "/tools/road-trip-fuel-calculator",
              gradient: "from-teal-500 to-cyan-500",
              bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-950/50 dark:to-cyan-950/50"
            }
          ].map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className={`group relative overflow-hidden bg-gradient-to-br ${tool.bgGradient} border-2 border-white/50 dark:border-slate-700/50 rounded-2xl p-8 hover:shadow-2xl hover:shadow-${tool.gradient.split('-')[1]}-500/20 transition-all duration-500 hover:-translate-y-3 hover:scale-105`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center text-3xl mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                {tool.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-sky-600 group-hover:to-blue-600 transition-all duration-300">
                {tool.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                {tool.description}
              </p>
              <div className="mt-6 flex items-center text-sky-600 dark:text-sky-400 font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                <span>Try Now</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-sky-100 via-blue-50 to-cyan-100 dark:from-slate-800 dark:via-blue-900/30 dark:to-cyan-900/30 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Use Our Fuel Calculators?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Make smarter decisions about your fuel consumption
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "💡",
                title: "Smart Insights",
                description: "Get detailed analytics about your fuel consumption and costs"
              },
              {
                icon: "💰",
                title: "Save Money",
                description: "Identify opportunities to reduce fuel expenses and optimize routes"
              },
              {
                icon: "📈",
                title: "Track Progress",
                description: "Monitor your vehicle's efficiency over time with accurate data"
              },
              {
                icon: "🌍",
                title: "Eco-Friendly",
                description: "Reduce your carbon footprint by optimizing fuel consumption"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">Latest Fuel & Mileage Articles</h2>
            <p className="text-content-secondary">Tips and guides to save money on fuel</p>
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
                className="group bg-white dark:bg-slate-800 border-2 border-sky-100 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 hover:-translate-y-3"
              >
                {post.featuredImage && (
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                  </div>
                )}
                <div className="p-7">
                  {post.categories.length > 0 && (
                    <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-sky-500 to-blue-500 text-white rounded-full text-xs font-bold mb-4 shadow-md">
                      <span>📁</span>
                      {post.categories[0].name}
                    </span>
                  )}
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 line-clamp-3 leading-relaxed">
                    {post.excerpt || "Discover tips and insights to optimize your fuel consumption and save money on every trip..."}
                  </p>
                  <div className="flex items-center justify-between pt-5 border-t-2 border-sky-100 dark:border-slate-700">
                    <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
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
