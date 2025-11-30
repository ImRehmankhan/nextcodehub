import ViewerLayout from "@/components/viewer/viewer-layout"
import Icon from "@/components/icon"

export const metadata = {
  title: "About Us - Learn About NextCodeHub",
  description: "NextCodeHub is your trusted resource for web development tutorials, coding tips, and modern programming techniques. Learn who we are and what we do.",
}

export default function AboutPage() {
  return (
    <ViewerLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-heading mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blog-primary via-blog-secondary to-blog-primary bg-clip-text text-transparent">
              NextCodeHub
            </span>
          </h1>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            Empowering developers worldwide with high-quality tutorials, practical guides, and cutting-edge web development resources.
          </p>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Our Mission</h2>
            <p className="text-content-secondary text-lg leading-relaxed mb-4">
              At NextCodeHub, our mission is to make web development accessible, understandable, and enjoyable for everyone—from complete beginners taking their first steps in coding to experienced developers looking to master the latest technologies. We believe that quality education should be free and available to all who seek it.
            </p>
            <p className="text-content-secondary text-lg leading-relaxed">
              We are committed to creating in-depth, well-researched tutorials that not only teach you how to code but also help you understand the "why" behind every concept. Our goal is to help you build a strong foundation in web development that will serve you throughout your career.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
                  <Icon name="book" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">Comprehensive Tutorials</h3>
                <p className="text-content-secondary">
                  Step-by-step guides covering JavaScript, React, Next.js, Node.js, TypeScript, and more. Each tutorial is carefully crafted with practical examples and real-world applications.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                  <Icon name="code" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">Code Examples</h3>
                <p className="text-content-secondary">
                  Every tutorial includes clean, well-documented code examples that you can copy, modify, and use in your own projects. Learn by doing with our hands-on approach.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
                  <Icon name="star" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">Best Practices</h3>
                <p className="text-content-secondary">
                  Learn industry-standard best practices, design patterns, and coding conventions that will make you a better developer and your code more maintainable.
                </p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                  <Icon name="layers" className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">Latest Technologies</h3>
                <p className="text-content-secondary">
                  Stay up-to-date with the rapidly evolving web development landscape. We cover the newest frameworks, libraries, and tools as they emerge.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Our Story</h2>
            <p className="text-content-secondary text-lg leading-relaxed mb-4">
              NextCodeHub was founded with a simple vision: to create a comprehensive, reliable resource for web developers of all skill levels. We recognized that while there's a wealth of information available online, finding quality, up-to-date tutorials that actually help you learn can be challenging.
            </p>
            <p className="text-content-secondary text-lg leading-relaxed mb-4">
              Our team consists of experienced developers, technical writers, and educators who are passionate about sharing knowledge. Each piece of content on NextCodeHub is thoroughly researched, tested, and reviewed to ensure accuracy and clarity.
            </p>
            <p className="text-content-secondary text-lg leading-relaxed">
              We started as a small blog and have grown into a comprehensive learning platform trusted by thousands of developers worldwide. Our commitment to quality over quantity means that every tutorial we publish meets our high standards for educational value.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Why Choose NextCodeHub?</h2>
            <ul className="space-y-4 text-content-secondary text-lg">
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm mt-1">✓</span>
                <span><strong className="text-heading">100% Original Content:</strong> All our tutorials are written from scratch by our expert team. No copying or plagiarism.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm mt-1">✓</span>
                <span><strong className="text-heading">Beginner-Friendly:</strong> We explain complex concepts in simple terms with plenty of examples and analogies.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm mt-1">✓</span>
                <span><strong className="text-heading">Regularly Updated:</strong> We keep our content current with the latest versions and best practices in the industry.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm mt-1">✓</span>
                <span><strong className="text-heading">Community-Driven:</strong> We listen to our readers and create content based on what you want to learn.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm mt-1">✓</span>
                <span><strong className="text-heading">Free & Accessible:</strong> All our tutorials are completely free. Knowledge should be accessible to everyone.</span>
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Topics We Cover</h2>
            <p className="text-content-secondary text-lg leading-relaxed mb-4">
              Our tutorials span a wide range of web development topics, including but not limited to:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "JavaScript Fundamentals",
                "React.js",
                "Next.js",
                "TypeScript",
                "Node.js",
                "HTML & CSS",
                "Tailwind CSS",
                "API Development",
                "Database Management",
                "Authentication & Security",
                "Performance Optimization",
                "Deployment & DevOps"
              ].map((topic) => (
                <div key={topic} className="px-4 py-3 bg-muted rounded-lg text-content-primary font-medium text-sm">
                  {topic}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-heading mb-4">Join Our Community</h2>
            <p className="text-content-secondary text-lg leading-relaxed mb-6">
              NextCodeHub is more than just a tutorial website—it's a community of learners and builders. Whether you're just starting your coding journey or you're a seasoned developer, there's always something new to learn and share.
            </p>
            <p className="text-content-secondary text-lg leading-relaxed mb-6">
              We encourage you to engage with our content, leave comments, ask questions, and share your own experiences. Your feedback helps us improve and create better content for everyone.
            </p>
          </section>

          <section className="bg-gradient-to-r from-blog-primary/10 via-blog-secondary/10 to-blog-primary/10 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-heading mb-4">Ready to Start Learning?</h2>
            <p className="text-content-secondary text-lg mb-6">
              Explore our comprehensive collection of tutorials and start building amazing projects today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/blog"
                className="px-8 py-4 bg-gradient-to-r from-blog-primary to-blog-secondary text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <Icon name="book" className="w-5 h-5 text-white" />
                <span className="text-white">Browse Tutorials</span>
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-card border-2 border-border text-heading rounded-xl font-semibold hover:bg-muted hover:scale-105 transition-all duration-200"
              >
                Get in Touch
              </a>
            </div>
          </section>
        </div>
      </div>
    </ViewerLayout>
  )
}
