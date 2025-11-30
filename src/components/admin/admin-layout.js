"use client"

import { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { ThemeToggle } from "@/components/theme-toggle"
import Icon from "@/components/icon"

export default function AdminLayout({ children, activeSection = "dashboard", onSectionChange }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { data: session } = useSession()

      const navigation = [
    {
      name: "Dashboard",
      key: "dashboard",
      icon: <Icon name="dashboard" className="w-5 h-5" />,
    },
    {
      name: "Posts",
      key: "posts",
      icon: <Icon name="posts" className="w-5 h-5" />,
    },
    {
      name: "Categories",
      key: "categories",
      icon: <Icon name="categories" className="w-5 h-5" />,
    },
    {
      name: "Tags",
      key: "tags",
      icon: <Icon name="tag" className="w-5 h-5" />,
    },
  ]

  return (
    <div className="min-h-screen bg-background theme-transition">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <div className="fixed inset-0 bg-black/50"></div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-border">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gradient-to-r from-blog-primary to-blog-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NC</span>
              </div>
              <h1 className="text-lg font-semibold text-heading">
                Admin Panel
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  onSectionChange?.(item.key)
                  setSidebarOpen(false) // Close sidebar on mobile after selection
                }}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg theme-transition ${
                  activeSection === item.key
                    ? "bg-blog-primary text-white"
                    : "text-content-secondary hover:text-heading hover:bg-muted"
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </button>
            ))}
          </nav>

          {/* User info */}
          <div className="p-4 border-t border-border">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-8 w-8 bg-blog-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {session?.user?.name?.[0]?.toUpperCase() || session?.user?.email?.[0]?.toUpperCase()}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-heading truncate">
                  {session?.user?.name || "Admin"}
                </p>
                <p className="text-xs text-content-secondary truncate">
                  {session?.user?.email}
                </p>
              </div>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/admin/login" })}
              aria-label="Sign out"
              className="w-full flex items-center justify-center gap-2 bg-destructive hover:bg-destructive/90 text-destructive-foreground px-3 py-2 rounded-md text-sm font-medium theme-transition"
            >
              <Icon name="logout" className="w-5 h-5" aria-hidden="true" />
              
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Top navigation */}
        <header className="bg-card border-b border-border shadow-sm sticky top-0 z-10">
          <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-content-secondary hover:text-heading hover:bg-muted theme-transition"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h2 className="text-xl font-semibold text-heading capitalize">
                {activeSection}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="hidden sm:block">
                <span className="text-sm text-content-secondary">
                  Welcome, {session?.user?.name || session?.user?.email}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 bg-background">
          <div className="py-6 px-4 sm:px-6 lg:px-8 max-w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}