"use client"

import Link from "next/link"
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
    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
    Resources: [
      { label: "Tutorials", href: "/blog?category=tutorials" },
      { label: "JavaScript", href: "/blog?category=javascript" },
      { label: "React", href: "/blog?category=react" },
      { label: "Next.js", href: "/blog?category=nextjs" },
    ],
  }

  return (
    <footer className="bg-gradient-to-br from-muted via-background to-muted border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blog-primary to-blog-secondary flex items-center justify-center shadow-lg">
                <Icon name="book" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blog-primary to-blog-secondary bg-clip-text text-transparent">
                NextCodeHub
              </span>
            </Link>
            <p className="text-content-secondary text-sm mb-4">
              Your ultimate destination for web development tutorials, tips, and tools. Learn, build, and grow with us.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-muted hover:bg-blog-primary hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110">
                <span className="text-sm font-bold">𝕏</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-muted hover:bg-blog-primary hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110">
                <span className="text-sm font-bold">in</span>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-muted hover:bg-blog-primary hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110">
                <span className="text-sm font-bold">f</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-heading mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-content-secondary hover:text-blog-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-content-secondary text-sm">
              © {currentYear} NextCodeHub. All rights reserved.
            </p>
            <p className="text-content-secondary text-sm">
              Built with ❤️ using Next.js & Prisma
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
