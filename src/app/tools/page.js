import ViewerLayout from "@/components/viewer/viewer-layout"
import Icon from "@/components/icon"

export const metadata = {
  title: "Developer Tools - NextCodeHub",
  description: "Discover useful developer tools and utilities to enhance your web development workflow. Free online tools for developers.",
}

export default function ToolsPage() {
  return (
    <ViewerLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-heading mb-6">
            Developer{" "}
            <span className="bg-gradient-to-r from-blog-primary via-blog-secondary to-blog-primary bg-clip-text text-transparent">
              Tools
            </span>
          </h1>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            Explore our collection of free developer tools and utilities to boost your productivity.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blog-primary/10 to-blog-secondary/10 border border-border rounded-2xl p-12 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blog-primary to-blog-secondary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
              <Icon name="settings" className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-heading mb-4">Coming Soon!</h2>
            <p className="text-lg text-content-secondary leading-relaxed mb-8">
              We're working hard to bring you a comprehensive suite of developer tools. Our tools section will include useful utilities for web development, code formatting, conversion tools, and much more.
            </p>
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-muted rounded-xl text-content-primary">
              <Icon name="calendar" className="w-5 h-5" />
              <span className="font-medium">Expected Launch: Q2 2026</span>
            </div>
          </div>
        </div>

        {/* Planned Tools Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-heading mb-8 text-center">
            Planned Tools & Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "code",
                title: "Code Formatter",
                description: "Format your JavaScript, HTML, CSS, and JSON code with proper indentation and styling.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: "file-text",
                title: "JSON Validator",
                description: "Validate and beautify JSON data. Find syntax errors and format JSON properly.",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: "image",
                title: "Image Optimizer",
                description: "Compress and optimize images for web use. Reduce file sizes without losing quality.",
                color: "from-green-500 to-green-600"
              },
              {
                icon: "type",
                title: "Base64 Encoder/Decoder",
                description: "Convert text, images, and files to Base64 encoding and decode Base64 strings.",
                color: "from-orange-500 to-orange-600"
              },
              {
                icon: "hash",
                title: "Hash Generator",
                description: "Generate MD5, SHA-1, SHA-256, and other cryptographic hashes from text or files.",
                color: "from-red-500 to-red-600"
              },
              {
                icon: "palette",
                title: "Color Picker & Converter",
                description: "Pick colors, convert between HEX, RGB, HSL, and generate color palettes.",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: "regex",
                title: "Regex Tester",
                description: "Test regular expressions with real-time matching and explanation.",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: "link",
                title: "URL Encoder/Decoder",
                description: "Encode and decode URLs, query parameters, and special characters.",
                color: "from-cyan-500 to-cyan-600"
              },
              {
                icon: "clock",
                title: "Timestamp Converter",
                description: "Convert between Unix timestamps and human-readable dates.",
                color: "from-teal-500 to-teal-600"
              },
              {
                icon: "minimize-2",
                title: "CSS Minifier",
                description: "Minify CSS code to reduce file size and improve loading performance.",
                color: "from-lime-500 to-lime-600"
              },
              {
                icon: "key",
                title: "UUID Generator",
                description: "Generate random UUIDs (v4) for unique identifiers in your applications.",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: "file-code",
                title: "HTML Encoder/Decoder",
                description: "Encode and decode HTML entities and special characters safely.",
                color: "from-rose-500 to-rose-600"
              }
            ].map((tool) => (
              <div
                key={tool.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-not-allowed opacity-75"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                  <Icon name={tool.icon} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">{tool.title}</h3>
                <p className="text-content-secondary text-sm mb-4">{tool.description}</p>
                <span className="inline-flex items-center space-x-2 text-xs font-semibold text-content-secondary bg-muted px-3 py-1 rounded-full">
                  <Icon name="clock" className="w-3 h-3" />
                  <span>Coming Soon</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stay Updated Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <Icon name="bell" className="w-12 h-12 text-blog-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-heading mb-4">Want to Be Notified?</h3>
            <p className="text-content-secondary mb-6">
              We'll announce the launch of our developer tools on our blog and social media. Stay tuned for updates!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/blog"
                className="px-8 py-4 bg-gradient-to-r from-blog-primary to-blog-secondary text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <Icon name="book" className="w-5 h-5" />
                <span>Read Our Blog</span>
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-card border-2 border-border text-heading rounded-xl font-semibold hover:bg-muted hover:scale-105 transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Feature Request Section */}
        <div className="mt-16 bg-gradient-to-r from-blog-primary/10 via-blog-secondary/10 to-blog-primary/10 rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-heading mb-4">Have a Tool Suggestion?</h3>
            <p className="text-content-secondary mb-6">
              We'd love to hear what tools would be most useful for your development workflow. Share your ideas with us!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-card border-2 border-border text-heading rounded-xl font-semibold hover:bg-muted hover:scale-105 transition-all duration-200"
            >
              <Icon name="message-square" className="w-5 h-5" />
              <span>Suggest a Tool</span>
            </a>
          </div>
        </div>
      </div>
    </ViewerLayout>
  )
}
