import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Column 1: Brand & Contact Information (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-11 w-36 flex items-center">
                <Image 
                  src="/logo.png" 
                  alt="NextCodeHub Fuel Calculator Logo" 
                  width={150} 
                  height={75} 
                  className="h-10 w-auto object-contain" 
                />
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
              Free, accurate automotive calculators to help you save money on gas, track mileage, and optimize fuel efficiency for every trip.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-1 border-t border-gray-100">
             

              {/* Phone */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-100">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <a href="tel:+923425221720" className="font-semibold text-gray-900 hover:text-primary-600 transition-colors">
                    +92-3425221720
                  </a>
                  <p className="text-xs text-gray-500">Mon to Fri • 9:00 AM – 6:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary-100">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <a href="mailto:rehmanattock30@gmail.com" className="font-semibold text-gray-900 hover:text-primary-600 transition-colors break-all">
                    rehmanattock30@gmail.com
                  </a>
                  <p className="text-xs text-gray-500">Replies within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="pt-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Follow &amp; Connect</p>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a 
                  href="https://web.facebook.com/rehman.khan.246606" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook Profile"
                  className="w-9 h-9 rounded-xl bg-gray-50 text-gray-600 hover:bg-[#1877F2] hover:text-white flex items-center justify-center border border-gray-200 transition-all shadow-sm hover:shadow-md hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a 
                  href="https://github.com/ImRehmankhan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="GitHub Profile"
                  className="w-9 h-9 rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-900 hover:text-white flex items-center justify-center border border-gray-200 transition-all shadow-sm hover:shadow-md hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/rehmankhan301b/?isSelfProfile=true" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn Profile"
                  className="w-9 h-9 rounded-xl bg-gray-50 text-gray-600 hover:bg-[#0A66C2] hover:text-white flex items-center justify-center border border-gray-200 transition-all shadow-sm hover:shadow-md hover:scale-105"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Calculators (3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Calculators</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/fuel-cost-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  Fuel Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/fuel-mileage-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  Fuel Mileage Calculator
                </Link>
              </li>
              <li>
                <Link href="/mpg-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  MPG Calculator
                </Link>
              </li>
              <li>
                <Link href="/petrol-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  Petrol Calculator
                </Link>
              </li>
              <li>
                <Link href="/fuel-consumption-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  Fuel Consumption Calculator
                </Link>
              </li>
              <li>
                <Link href="/fuel-economy-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  Fuel Economy Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: More Tools (2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">More Tools</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/gas-mileage-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  Gas Mileage Calculator
                </Link>
              </li>
              <li>
                <Link href="/gas-price-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  Gas Price Calculator
                </Link>
              </li>
              <li>
                <Link href="/fuel-efficiency-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  Fuel Efficiency Calculator
                </Link>
              </li>
              <li>
                <Link href="/fuel-average-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  Fuel Average Calculator
                </Link>
              </li>
              <li>
                <Link href="/fuel-expense-calculator" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                  Fuel Expense Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Company</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-primary-600 text-sm transition-colors font-medium flex items-center gap-1.5">
                    Contact Us
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                    Blog &amp; Guides
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wider">Legal &amp; Privacy</h3>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block font-medium text-primary-700">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="text-gray-600 hover:text-primary-600 text-sm transition-colors block">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NextCodeHub • Built by Rehman Khan</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Remote Work</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span>Built with Next.js</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
