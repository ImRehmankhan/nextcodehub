import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background theme-transition">
      {/* Navigation */}
      <nav className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gradient-to-r from-blog-primary to-blog-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NC</span>
              </div>
              <h1 className="text-xl font-bold text-heading">
                NextCodeHub
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link
                href="/admin"
                className="bg-admin-primary hover:bg-admin-primary/90 text-white px-4 py-2 rounded-md text-sm font-medium theme-transition"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-heading mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blog-primary to-blog-secondary bg-clip-text text-transparent">
              NextCodeHub
            </span>
          </h1>
          <p className="text-xl text-content-secondary mb-8 max-w-2xl mx-auto">
            A modern blogging platform built with Next.js, featuring a powerful admin dashboard 
            for content management and beautiful theme switching.
          </p>
          
          <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
            <Link
              href="/admin"
              className="bg-blog-primary hover:bg-blog-primary/90 text-white px-8 py-3 rounded-lg font-medium theme-transition flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              <span>Admin Dashboard</span>
            </Link>
            <Link
              href="#features"
              className="border border-border hover:bg-accent text-foreground px-8 py-3 rounded-lg font-medium theme-transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="mt-20">
          <h2 className="text-3xl font-bold text-heading text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg theme-transition">
              <div className="p-2 bg-blog-primary/10 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blog-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                Content Management
              </h3>
              <p className="text-content-secondary">
                Create, edit, and manage blog posts with a powerful admin interface.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg theme-transition">
              <div className="p-2 bg-blog-secondary/10 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blog-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                Dark/Light Theme
              </h3>
              <p className="text-content-secondary">
                Beautiful theme switching with system preference detection.
              </p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg theme-transition">
              <div className="p-2 bg-blog-accent/10 rounded-lg w-fit mb-4">
                <svg className="w-6 h-6 text-blog-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-heading mb-2">
                Secure Authentication
              </h3>
              <p className="text-content-secondary">
                Role-based access control with NextAuth.js integration.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-20 bg-card border border-border rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blog-primary mb-2">0</div>
              <div className="text-content-secondary">Blog Posts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blog-secondary mb-2">0</div>
              <div className="text-content-secondary">Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blog-accent mb-2">0</div>
              <div className="text-content-secondary">Tags</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blog-success mb-2">0</div>
              <div className="text-content-secondary">Total Views</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="h-6 w-6 bg-gradient-to-r from-blog-primary to-blog-secondary rounded"></div>
              <span className="text-heading font-medium">NextCodeHub</span>
            </div>
            <p className="text-content-secondary text-sm">
              © 2025 NextCodeHub. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
