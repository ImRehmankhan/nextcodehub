import Link from 'next/link';

export const metadata = {
  title: "About Us - NextCodeHub",
  description: "Learn more about NextCodeHub, our mission to simplify daily tasks through smart digital tools, and our business model.",
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            About <span className="text-[var(--color-primary-500)]">NextCodeHub</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We build smart, simple, and beautifully designed digital tools to help decrease your daily efforts and make complex calculations effortless.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Who We Are & Our Mission */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                At NextCodeHub, we are a passionate team of developers, designers, and problem solvers. We noticed that people spend far too much time trying to figure out routine mathematics—whether it's calculating trip costs, converting fuel mileage, or managing personal budgets.
              </p>
              <p>
                We decided to step in and fix that. Our goal is to transform tedious daily tasks into seamless experiences through high-quality web utilities. By removing the friction from everyday calculations, we give you back your most valuable asset: time.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 bg-[#1f1f23] rounded-3xl p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-500)] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <div className="bg-[var(--color-primary-500)] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                To empower individuals by providing instant, highly accurate digital calculators and tools that save time, reduce stress, and eliminate daily friction.
              </p>
            </div>
          </div>
        </section>

        {/* Our Business Model */}
        <section className="bg-white rounded-[2.5rem] p-10 lg:p-16 shadow-sm border border-gray-100 text-center relative overflow-hidden">
          {/* Subtle background accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-32 bg-[var(--color-primary-500)] opacity-[0.03] blur-3xl rounded-full pointer-events-none"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-[var(--color-primary-50)] text-[var(--color-primary-600)] rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-sm">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Business Model</h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  100% Free Forever
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We strongly believe that utility tools should be completely accessible. You will never see a paywall, a premium subscription, or locked features on our core calculators.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                  Ad-Supported
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To keep the servers running and our team developing new tools, we monetize our platform through non-intrusive display advertising. This lets us offer premium tools at zero cost to you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Tools */}
        <section className="pb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tools Designed For You</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore our suite of intelligent calculators designed to make your life easier.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/fuel-cost-calculator" className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-[var(--color-primary-500)] hover:shadow-lg transition-all duration-300 group text-center block">
              <div className="w-16 h-16 bg-gray-50 text-gray-900 group-hover:bg-[var(--color-primary-500)] group-hover:text-white group-hover:scale-110 transition-all duration-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fuel Cost Calculator</h3>
              <p className="text-gray-500">Plan your trips and budget your fuel expenses perfectly.</p>
            </Link>
            
            <Link href="/fuel-mileage-calculator" className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-[var(--color-primary-500)] hover:shadow-lg transition-all duration-300 group text-center block">
              <div className="w-16 h-16 bg-gray-50 text-gray-900 group-hover:bg-[var(--color-primary-500)] group-hover:text-white group-hover:scale-110 transition-all duration-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mileage Calculator</h3>
              <p className="text-gray-500">Find out exactly how efficient your vehicle really is.</p>
            </Link>

            <Link href="/mpg-calculator" className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:border-[var(--color-primary-500)] hover:shadow-lg transition-all duration-300 group text-center block">
              <div className="w-16 h-16 bg-gray-50 text-gray-900 group-hover:bg-[var(--color-primary-500)] group-hover:text-white group-hover:scale-110 transition-all duration-300 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">MPG Calculator</h3>
              <p className="text-gray-500">Calculate exact miles per gallon for any journey quickly.</p>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}