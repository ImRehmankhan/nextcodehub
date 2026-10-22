import Link from 'next/link';

export const metadata = {
  title: "About Us - NextCodeHub | Mission, Team & Engineering Standards",
  description: "Learn about NextCodeHub, our mission to simplify automotive fuel mathematics, our technical calculation methodology, and our founder Rehman Khan.",
  keywords: [
    "about NextCodeHub",
    "fuel calculator mission",
    "automotive calculation methodology",
    "Rehman Khan developer",
    "free fuel tools",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/about',
  },
  openGraph: {
    title: "About Us - NextCodeHub | Mission & Engineering Standards",
    description: "Learn about NextCodeHub, our mission to simplify automotive calculations, and our commitment to privacy and accuracy.",
    url: 'https://www.nextcodehub.com/about',
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://www.nextcodehub.com/about',
      name: 'About NextCodeHub',
      url: 'https://www.nextcodehub.com/about',
      description: 'Comprehensive information about NextCodeHub, our mission, automotive calculation algorithms, and our engineering team.',
      publisher: {
        '@type': 'Organization',
        name: 'NextCodeHub',
        url: 'https://www.nextcodehub.com',
        logo: 'https://www.nextcodehub.com/logo.png',
        founder: {
          '@type': 'Person',
          name: 'Rehman Khan',
          jobTitle: 'Founder & Lead Engineer',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Islamabad',
            addressCountry: 'Pakistan',
          },
          sameAs: [
            'https://github.com/ImRehmankhan',
            'https://www.linkedin.com/in/rehmankhan301b/',
            'https://web.facebook.com/rehman.khan.246606',
          ],
        },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is NextCodeHub?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NextCodeHub is a dedicated suite of free, client-side digital calculators engineered to help drivers, fleet operators, and travelers calculate fuel costs, gas mileage, fuel consumption, and trip budgets with mathematical precision.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are NextCodeHub calculators 100% free to use?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All calculators on NextCodeHub are completely free, require no user account or registration, and do not store any personal travel data.',
          },
        },
        {
          '@type': 'Question',
          name: 'How accurate are the fuel cost and mileage formulas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our formulas strictly adhere to international engineering standards, including US EPA and European WLTP conversion constants (such as 235.215 for MPG to L/100km conversion) and ISO fuel density benchmarks.',
          },
        },
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200 mb-6">
              Our Mission &amp; Engineering Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Empowering Drivers with <span className="text-primary-600">Precision Fuel Analytics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              NextCodeHub was built to eliminate the guesswork from automotive expenses. We provide fast, accessible, and mathematically validated digital calculators for millions of drivers worldwide.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          
          {/* Who We Are & Founder Story */}
          <section className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Who We Are &amp; Why We Built NextCodeHub
              </h2>
              <p>
                Every day, millions of motorists, gig economy drivers (such as Uber, Lyft, and DoorDash couriers), road-trippers, and logistics managers face the same recurring problem: volatile petrol prices, complex conversion metrics (MPG vs. km/L vs. L/100km), and inaccurate vehicle trip estimators.
              </p>
              <p>
                Founded by <strong>Rehman Khan</strong>, a full-stack engineer and automotive enthusiast based in Islamabad, Pakistan, NextCodeHub was created to provide a completely transparent, blazing-fast, and distraction-free mathematical utility for anyone who operates a motor vehicle.
              </p>
              <p>
                Unlike generic sites cluttered with paywalls or forced registrations, NextCodeHub processes every calculation entirely on the client side in real-time. We believe that critical everyday utility tools should be reliable, instant, and accessible to anyone with a browser.
              </p>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden border border-gray-800">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary-500/20 border border-primary-400/30 flex items-center justify-center text-primary-400">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Rehman Khan</h3>
                  <p className="text-primary-400 text-sm font-medium">Founder &amp; Principal Architect</p>
                  <p className="text-gray-400 text-xs mt-1">Islamabad, Pakistan • Available Worldwide</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  &ldquo;Our vision is to build the web&apos;s most reliable, intuitive suite of automotive calculations. No bloatware, no deceptive subscriptions—just exact numbers when you need to make smart financial decisions.&rdquo;
                </p>
                <div className="pt-4 border-t border-gray-700/60 flex items-center gap-3">
                  <a href="https://github.com/ImRehmankhan" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-colors">
                    GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/rehmankhan301b/" target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="mailto:rehmanattock30@gmail.com" className="px-3 py-1.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-xs text-white transition-colors font-medium">
                    Contact Founder
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Calculation Standards & Rigor */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                Our Engineering &amp; Calculation Standards
              </h2>
              <p className="text-gray-600 leading-relaxed text-base">
                How do we ensure our numbers are correct? We don&apos;t use rough estimates or unverified heuristics. All NextCodeHub calculators are built upon international standard conversion constants and empirical automotive formulas:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                  01
                </div>
                <h3 className="text-lg font-bold text-gray-900">US EPA Standard Formulas</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We use the official United States Environmental Protection Agency conversion factor: <code className="bg-white px-1.5 py-0.5 rounded border border-gray-200 text-xs font-mono text-primary-700">L/100km = 235.215 ÷ US MPG</code> to guarantee exact bilateral conversion.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                  02
                </div>
                <h3 className="text-lg font-bold text-gray-900">Dual Metric &amp; Imperial Units</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Support for both US Gallons (3.78541 Liters) and UK Imperial Gallons (4.54609 Liters), eliminating the common 20% calculation error found in substandard generic calculators.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                  03
                </div>
                <h3 className="text-lg font-bold text-gray-900">Zero Server Storage (Privacy)</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Your trip distances, commute destinations, vehicle fuel consumptions, and expense entries are processed directly in your browser. We never log or harvest your private travel data.
                </p>
              </div>
            </div>
          </section>

          {/* Business Model & Ad Transparency */}
          <section className="bg-gradient-to-r from-primary-900 via-primary-800 to-gray-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl">
            <div className="max-w-4xl mx-auto space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-primary-300">
                Ethical &amp; Transparent Operations
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                How NextCodeHub Remains 100% Free
              </h2>
              <p className="text-gray-200 leading-relaxed text-base sm:text-lg">
                High-availability web hosting, CDN delivery, domain infrastructure, and continuous algorithmic updates incur real operating costs. To maintain free, unhindered access for every user worldwide, NextCodeHub partners with reputable, family-safe advertising providers like Google AdSense.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4 text-sm">
                <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    No Deceptive Paywalls
                  </h3>
                  <p className="text-gray-300">
                    We never lock core calculation features behind premium subscriptions, recurring credit card charges, or sign-up gates.
                  </p>
                </div>
                <div className="bg-white/10 p-5 rounded-2xl backdrop-blur-sm border border-white/10">
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    Non-Intrusive Advertisements
                  </h3>
                  <p className="text-gray-300">
                    Ads are placed thoughtfully to preserve your user experience without obscuring calculation inputs or mobile keyboards.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Suite of Available Calculators with Contextual Links */}
          <section className="space-y-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
                Explore Our Specialized Calculators
              </h2>
              <p className="text-gray-600">
                Each tool is customized for specific automotive, financial, and logistical scenarios:
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  href: '/fuel-cost-calculator',
                  title: 'Fuel Cost Calculator',
                  desc: 'Compute exact fuel expenditure for single trips, round trips, and carpooling splits based on live fuel prices.',
                },
                {
                  href: '/fuel-mileage-calculator',
                  title: 'Fuel Mileage Calculator',
                  desc: 'Determine real vehicle distance delivered per liter or gallon using brim-to-brim tank measurements.',
                },
                {
                  href: '/mpg-calculator',
                  title: 'MPG Calculator',
                  desc: 'Fast Miles Per Gallon calculator supporting both US standard and UK Imperial gallon calibrations.',
                },
                {
                  href: '/fuel-consumption-calculator',
                  title: 'Fuel Consumption Calculator',
                  desc: 'Measure exact gas consumption in L/100km, gallons per 100 miles, and fuel burn rate for road journeys.',
                },
                {
                  href: '/fuel-economy-calculator',
                  title: 'Fuel Economy Calculator',
                  desc: 'Compare window-sticker EPA ratings against actual odometer readings and test driving improvements.',
                },
                {
                  href: '/gas-price-calculator',
                  title: 'Gas Price Calculator',
                  desc: 'Estimate total fuel budget requirements and compare cost savings between regular, midgrade, and premium gas.',
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="bg-white p-7 rounded-3xl shadow-sm border border-gray-100 hover:border-primary-500 hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
                  </div>
                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-primary-600 group-hover:translate-x-1 transition-transform">
                    <span>Open Calculator</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8">
              Frequently Asked Questions About NextCodeHub
            </h2>
            <div className="space-y-6 divide-y divide-gray-100">
              <div className="pt-6 first:pt-0">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Who verifies the calculations on NextCodeHub?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  All mathematical routines and unit conversion multipliers are implemented by our software engineering team and cross-referenced against authoritative standards from the US Department of Energy, the Environmental Protection Agency (EPA), and European Commission Transport guidelines.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Can I use NextCodeHub for commercial fleet or rideshare tax deductions?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes. Many independent rideshare drivers (Uber/Lyft), delivery couriers (DoorDash/Amazon Flex), and small business fleet operators use our tools to verify fuel burn rates and validate mileage reimbursement logs. However, always verify deductions with a certified public accountant (CPA).
                </p>
              </div>

              <div className="pt-6">
                <h3 className="font-bold text-gray-900 text-lg mb-2">How can I submit feature requests or report an issue?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We welcome feedback from drivers around the world. You can get in touch with our founder directly via our <Link href="/contact" className="text-primary-600 hover:underline font-medium">Contact Form</Link> or by emailing <a href="mailto:rehmanattock30@gmail.com" className="text-primary-600 hover:underline font-medium">rehmanattock30@gmail.com</a>.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}