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
    <footer className="bg-surface dark:bg-background text-foreground border-t-4 border-primary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              
              <div>
                <span className="text-2xl font-extrabold text-primary">
                  NextCodeHub
                </span>
                <div className="text-xs text-accent -mt-1">Fuel Calculator Tools</div>
              </div>
            </Link>
            <p className="text-secondary-foreground text-sm mb-6 leading-relaxed">
              Free fuel calculators to help you save money on gas, track mileage, and optimize vehicle efficiency. Calculate fuel costs, MPG, and expenses with precision.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-xl bg-muted hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <span className="text-lg font-bold">𝕏</span>
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-muted hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <span className="text-lg font-bold">in</span>
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-muted hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <span className="text-lg font-bold">f</span>
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-muted hover:bg-primary backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl">
                <span className="text-lg font-bold">▶</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-foreground text-lg mb-5 flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-secondary-foreground hover:text-foreground transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-accent group-hover:w-3 transition-all duration-300"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-8 bg-muted backdrop-blur-sm rounded-2xl border border-border">
          <div className="text-center">
            <div className="text-3xl font-extrabold text-primary mb-1">100%</div>
            <div className="text-secondary-foreground text-sm">Free Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-success mb-1">50K+</div>
            <div className="text-secondary-foreground text-sm">Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-warning mb-1">10+</div>
            <div className="text-secondary-foreground text-sm">Calculators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-extrabold text-accent mb-1">24/7</div>
            <div className="text-secondary-foreground text-sm">Available</div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-foreground text-sm">
              © {currentYear} NextCodeHub. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-secondary-foreground">
              <span className="flex items-center gap-2">
                <span className="text-success">●</span>
                All Systems Operational
              </span>
              <span className="flex items-center gap-2">
                <Icon name="zap" className="w-4 h-4" />
                Built with Next.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
