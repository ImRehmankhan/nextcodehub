import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-auto pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          <div className="md:col-span-12 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-20 w-40 ">
                <Image src="/logo.png" alt="Fuel Calculator Logo" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 -mt-4 max-w-sm">Free fuel calculators to help you save money on gas, track mileage, and optimize vehicle efficiency. Calculate fuel costs, MPG, and expenses with precision.</p>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h3 className="text-gray-900 font-semibold mb-4">Calculators</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/fuel-cost-calculator" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                  Fuel Cost
                </Link>
              </li>
              <li>
                <Link href="/fuel-mileage-calculator" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                  Mileage
                </Link>
              </li>
              <li>
                <Link href="/mpg-calculator" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                  MPG
                </Link>
              </li>
              <li>
                <Link href="/petrol-calculator" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                  Petrol
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-gray-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} NextCodeHub. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span>All Systems Operational</span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              <span>Built with Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
