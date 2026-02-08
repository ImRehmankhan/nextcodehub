"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Icon from "@/components/icon"
import { ThemeToggle } from "@/components/theme-toggle"
import AuthModal from "@/components/viewer/auth-modal"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [user, setUser] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setShowProfileMenu(false)
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/tools", label: "Tools" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b-2 border-sky-100 dark:border-slate-800 shadow-lg shadow-sky-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group py-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Image src="/logo.png" alt="NextCodeHub Logo" width={36} height={36} className="rounded-xl" />
              </div>
            </div>
            <div>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-600 dark:from-sky-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                NextCodeHub
              </span>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium -mt-1">Fuel Calculators</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/30 scale-105"
                    : "text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800 transition-all duration-300 border-2 border-sky-100 dark:border-slate-700"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-slate-900 dark:text-white max-w-[100px] truncate">
                    {user.name}
                  </span>
                  <Icon name="chevron-right" className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${showProfileMenu ? 'rotate-90' : ''}`} />
                </button>

                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-3 w-72 bg-white dark:bg-slate-800 border-2 border-sky-100 dark:border-slate-700 rounded-2xl shadow-2xl shadow-sky-500/10 py-3 z-50 animate-in fade-in scale-in">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="text-sm font-semibold text-content-primary">{user.name}</p>
                      <p className="text-xs text-content-secondary truncate">{user.email}</p>
                    </div>
                    
                    {user.role === "ADMIN" && (
                      <Link
                        href="/admin"
                        onClick={() => setShowProfileMenu(false)}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-muted transition-colors text-content-primary"
                      >
                        <Icon name="grid" className="w-4 h-4" />
                        <span className="text-sm">Admin Dashboard</span>
                      </Link>
                    )}
                    
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 hover:bg-red-500/10 transition-colors text-red-600 w-full"
                    >
                      <Icon name="logout" className="w-4 h-4" />
                      <span className="text-sm">Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setShowAuthModal(true)}
                className="px-4 py-2 bg-gradient-to-r from-blog-primary to-blog-secondary text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <Icon name="menu" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-blog-primary text-white"
                    : "text-content-primary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {user ? (
              <>
                {user.role === "ADMIN" && (
                  <Link
                    href="/admin"
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 bg-gradient-to-r from-blog-primary to-blog-secondary text-white rounded-lg font-medium text-center"
                  >
                    Admin Dashboard
                  </Link>
                )}
                <div className="px-4 py-3 bg-muted rounded-lg">
                  <p className="text-sm font-semibold text-content-primary mb-1">{user.name}</p>
                  <p className="text-xs text-content-secondary mb-3">{user.email}</p>
                  <button
                    onClick={() => {
                      handleLogout()
                      setIsMenuOpen(false)
                    }}
                    className="w-full px-4 py-2 bg-red-500 text-white rounded-lg font-medium text-sm hover:bg-red-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <button
                onClick={() => {
                  setShowAuthModal(true)
                  setIsMenuOpen(false)
                }}
                className="block w-full px-4 py-3 bg-gradient-to-r from-blog-primary to-blog-secondary text-white rounded-lg font-medium text-center"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => {
          setShowAuthModal(false)
          // Reload to check for new user
          const storedUser = localStorage.getItem("user")
          if (storedUser) {
            setUser(JSON.parse(storedUser))
          }
        }}
        mode="login"
      />
    </nav>
  )
}
