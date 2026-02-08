"use client"

import Link from "next/link"
import Image from "next/image"
import Icon from "@/components/icon"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Blog", href: "/blog" },
      { label: "Tools", href: "/tools" },
    ],
    "Fuel Calculators": [
      { label: "Fuel Cost Calculator", href: "/tools/fuel-cost-calculator" },
      { label: "Petrol Mileage Calculator", href: "/tools/petrol-mileage-calculator" },
      { label: "MPG Calculator", href: "/tools/mpg-calculator" },
      { label: "Gas Price Calculator", href: "/tools/gas-price-calculator" },
      { label: "Fuel Expense Calculator", href: "/tools/fuel-expense-calculator" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 text-white border-t-4 border-sky-500 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-2xl">
                  <Image src="/logo.png" alt="NextCodeHub Logo" width={40} height={40} className="rounded-xl" />
                </div>
              </div>
              <div>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
                  NextCodeHub
                </span>
                <div className="text-xs text-sky-300 -mt-1">Fuel Calculator Tools</div>
              </div>
            </Link>
            <p className="text-sky-100 text-sm mb-6 leading-relaxed">
              Free fuel calculators to help you save money on gas, track mileage, and optimize vehicle efficiency. Calculate fuel costs, MPG, and expenses with precision.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-sky-500/30">
                <span className="text-lg font-bold">𝕏</span>
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-sky-500/30">
                <span className="text-lg font-bold">in</span>
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-sky-500/30">
                <span className="text-lg font-bold">f</span>
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-white/10 hover:bg-gradient-to-br hover:from-sky-500 hover:to-blue-600 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-sky-500/30">
                <span className="text-lg font-bold">▶</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-white text-lg mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-sky-400 to-blue-500 rounded-full"></span>
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sky-200 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-sky-400 group-hover:w-3 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
          <div className="text-center">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent mb-1">100%</div>
            <div className="text-sky-200 text-sm">Free Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text text-transparent mb-1">50K+</div>
            <div className="text-sky-200 text-sm">Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-amber-300 to-orange-300 bg-clip-text text-transparent mb-1">10+</div>
            <div className="text-sky-200 text-sm">Calculators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-1">24/7</div>
            <div className="text-sky-200 text-sm">Available</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sky-200 text-sm">
              © {currentYear} NextCodeHub. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-sky-200">
              <span className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                All Systems Operational
              </span>
              <span className="flex items-center gap-2">
                <span>⚡</span>
                Built with Next.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
