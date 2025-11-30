"use client"

import { useState, useEffect } from "react"
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
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blog-primary to-blog-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Icon name="book" className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blog-primary to-blog-secondary bg-clip-text text-transparent">
              NextCodeHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "bg-blog-primary text-white shadow-lg shadow-blog-primary/30"
                    : "text-content-primary hover:bg-muted hover:text-blog-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-3">
            <ThemeToggle />
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blog-primary to-blog-secondary flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-content-primary max-w-[100px] truncate">
                    {user.name}
                  </span>
                  <Icon name="chevron-right" className={`w-4 h-4 text-content-secondary transition-transform ${showProfileMenu ? 'rotate-90' : ''}`} />
                </button>

                {/* Profile Dropdown */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-2xl py-2 z-50">
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
