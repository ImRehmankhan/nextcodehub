import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Left: Logo Section */}
          <div className="flex-shrink-0 flex items-center group">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-40 w-40 ">
                <Image 
                  src="/logo.png" 
                  alt="Fuel Calculator Logo" 
                  fill 
                  className="object-contain"
                  
                />
              </div>
             
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 w-max">
            <Link href="/" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="/fuel-cost-calculator" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
              Cost Calculator
            </Link>
            <Link href="/fuel-mileage-calculator" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
              Mileage
            </Link>
            <Link href="/mpg-calculator" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
              MPG
            </Link>
            <Link href="/fuel-consumption-calculator" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
              Consumption
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-primary-500 font-medium transition-colors">
              Blog
            </Link>
          </nav>

          {/* Right: Call to Action Button */}
          <div className="flex items-center gap-4">
            <Link href="/fuel-cost-calculator" className="hidden md:flex px-6 py-2.5 rounded-full bg-primary-500 text-white font-bold hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-0.5 items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="8" y1="6" x2="16" y2="6"></line>
                <line x1="16" y1="14" x2="16" y2="14"></line>
                <line x1="16" y1="18" x2="16" y2="18"></line>
                <line x1="12" y1="14" x2="12" y2="14"></line>
                <line x1="12" y1="18" x2="12" y2="18"></line>
                <line x1="8" y1="14" x2="8" y2="14"></line>
                <line x1="8" y1="18" x2="8" y2="18"></line>
              </svg>
              Open Calculator
            </Link>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-600 hover:text-primary-500 focus:outline-none transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
