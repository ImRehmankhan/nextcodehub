'use client';

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const tools = [
  { href: '/fuel-cost-calculator', name: 'Fuel Cost Calculator', desc: 'Estimate trip expenses & split gas' },
  { href: '/fuel-mileage-calculator', name: 'Fuel Mileage Calculator', desc: 'Calculate petrol & gas mileage' },
  { href: '/mpg-calculator', name: 'MPG Calculator', desc: 'Calculate miles per gallon & cost' },
  { href: '/petrol-calculator', name: 'Petrol Calculator', desc: 'Tank refill cost & driving range' },
  { href: '/fuel-consumption-calculator', name: 'Fuel Consumption Calculator', desc: 'Measure L/100km & gas per mile' },
  { href: '/fuel-economy-calculator', name: 'Fuel Economy Calculator', desc: 'Check vehicle economy rating' },
  { href: '/gas-mileage-calculator', name: 'Gas Mileage Calculator', desc: 'Estimate car MPG & gas costs' },
  { href: '/gas-price-calculator', name: 'Gas Price Calculator', desc: 'Fuel price hikes & grade comparison' },
  { href: '/fuel-efficiency-calculator', name: 'Fuel Efficiency Calculator', desc: 'Measure & optimize efficiency' },
  { href: '/fuel-average-calculator', name: 'Fuel Average Calculator', desc: 'Calculate petrol average in km/L' },
  { href: '/fuel-expense-calculator', name: 'Fuel Expense Calculator', desc: 'Monthly commute & fuel budget' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);

  const isCalculatorPage = pathname && (pathname.includes('-calculator') || pathname === '/');
  const calculatorCtaHref = isCalculatorPage && pathname !== '/' ? '#calculator' : '/gas-mileage-calculator';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 relative">
          {/* Left: Logo Section */}
          <div className="flex-shrink-0 flex items-center group">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-12 w-32 sm:w-36 flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="Fuel Calculator Logo" 
                  width={160}
                  height={80}
                  priority
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6 xl:space-x-8 w-max" aria-label="Main navigation">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base">
              Home
            </Link>

            {/* Tools Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsToolsOpen(true)}
              onMouseLeave={() => setIsToolsOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsToolsOpen(!isToolsOpen)}
                className="flex items-center gap-1.5 text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base focus:outline-none"
                aria-expanded={isToolsOpen}
                aria-haspopup="true"
              >
                <span>Tools</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isToolsOpen ? 'rotate-180 text-primary-600' : 'text-gray-400 group-hover:text-primary-600'}`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[560px] transition-all duration-200 z-50 ${isToolsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'}`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-2">
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setIsToolsOpen(false)}
                      className="flex flex-col p-2.5 rounded-xl hover:bg-primary-50/80 transition-colors group/item"
                    >
                      <span className="font-semibold text-gray-900 group-hover/item:text-primary-600 text-sm">
                        {tool.name}
                      </span>
                      <span className="text-xs text-gray-500 mt-0.5">
                        {tool.desc}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base">
              Blog
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base">
              Contact
            </Link>
          </nav>

          {/* Right: Call to Action Button */}
          <div className="flex items-center gap-4">
            <Link href={calculatorCtaHref} className="hidden md:flex px-6 py-2.5 rounded-full bg-primary-600 text-white font-bold hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/20 transition-all duration-300 transform hover:-translate-y-0.5 items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

            {/* Mobile Menu Button with accessible name and state */}
            <button 
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 p-2 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <nav id="mobile-navigation" className="lg:hidden py-4 border-t border-gray-100 space-y-2 bg-white" aria-label="Mobile navigation">
            <Link 
              href="/" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
            >
              Home
            </Link>

            {/* Mobile Tools Dropdown Accordion */}
            <div>
              <button 
                type="button"
                onClick={() => setIsMobileToolsOpen(!isMobileToolsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              >
                <span>Tools</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isMobileToolsOpen ? 'rotate-180 text-primary-600' : 'text-gray-400'}`} 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {isMobileToolsOpen && (
                <div className="pl-3 pr-2 py-1 space-y-1 bg-gray-50/70 rounded-xl my-1 border border-gray-100">
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-2 px-3 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-white rounded-lg transition-colors"
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/blog" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
            >
              Blog
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
            >
              Contact
            </Link>
            <div className="pt-2">
              <Link 
                href={calculatorCtaHref} 
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-primary-600 text-white font-bold hover:bg-primary-700 transition-colors"
              >
                Open Calculator
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
