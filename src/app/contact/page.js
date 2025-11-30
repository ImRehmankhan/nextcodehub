import ViewerLayout from "@/components/viewer/viewer-layout"
import Icon from "@/components/icon"

export const metadata = {
  title: "Contact Us - Get in Touch with NextCodeHub",
  description: "Have questions or feedback? Contact NextCodeHub team for support, collaboration opportunities, or general inquiries. We'd love to hear from you!",
}

export default function ContactPage() {
  return (
    <ViewerLayout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-heading mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-blog-primary via-blog-secondary to-blog-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-content-secondary max-w-3xl mx-auto">
            Have questions, suggestions, or just want to say hello? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-heading mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-content-primary mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-blog-primary transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-content-primary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-blog-primary transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-content-primary mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-blog-primary transition-all"
                  placeholder="Tutorial Request / Bug Report / Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-content-primary mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-blog-primary transition-all resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blog-primary to-blog-secondary text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Icon name="send" className="w-5 h-5" />
                <span>Send Message</span>
              </button>

              <p className="text-sm text-content-secondary text-center">
                We typically respond within 24-48 hours
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-heading mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Icon name="mail" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading mb-1">Email</h3>
                    <a
                      href="mailto:contact@nextcodehub.com"
                      className="text-blog-primary hover:text-blog-secondary transition-colors"
                    >
                      contact@nextcodehub.com
                    </a>
                    <p className="text-sm text-content-secondary mt-1">
                      For general inquiries and support
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Icon name="phone" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-blog-primary hover:text-blog-secondary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                    <p className="text-sm text-content-secondary mt-1">
                      Monday to Friday, 9 AM - 6 PM EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                    <Icon name="map-pin" className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading mb-1">Location</h3>
                    <p className="text-content-primary">
                      Remote-First Team<br />
                      Serving Developers Worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-blog-primary/10 to-blog-secondary/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-heading mb-4">Follow Us</h3>
              <p className="text-content-secondary mb-6">
                Stay updated with our latest tutorials and announcements on social media.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://twitter.com/nextcodehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border border-border rounded-xl hover:bg-muted hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <Icon name="twitter" className="w-5 h-5 text-blog-primary" />
                  <span className="font-medium text-content-primary">Twitter</span>
                </a>
                <a
                  href="https://github.com/nextcodehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border border-border rounded-xl hover:bg-muted hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <Icon name="github" className="w-5 h-5 text-blog-primary" />
                  <span className="font-medium text-content-primary">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/company/nextcodehub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-card border border-border rounded-xl hover:bg-muted hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <Icon name="linkedin" className="w-5 h-5 text-blog-primary" />
                  <span className="font-medium text-content-primary">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-xl font-bold text-heading mb-4">Common Questions</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/blog" className="text-blog-primary hover:text-blog-secondary transition-colors flex items-center space-x-2">
                    <Icon name="chevron-right" className="w-4 h-4" />
                    <span>Browse all tutorials</span>
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-blog-primary hover:text-blog-secondary transition-colors flex items-center space-x-2">
                    <Icon name="chevron-right" className="w-4 h-4" />
                    <span>Learn about our mission</span>
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="text-blog-primary hover:text-blog-secondary transition-colors flex items-center space-x-2">
                    <Icon name="chevron-right" className="w-4 h-4" />
                    <span>Read our privacy policy</span>
                  </a>
                </li>
                <li>
                  <a href="/terms-of-service" className="text-blog-primary hover:text-blog-secondary transition-colors flex items-center space-x-2">
                    <Icon name="chevron-right" className="w-4 h-4" />
                    <span>View terms of service</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-heading mb-6 text-center">We're Here to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="help-circle" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Technical Support</h3>
              <p className="text-sm text-content-secondary">
                Having trouble with a tutorial? Found a bug in our code examples? Let us know and we'll help you out.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="lightbulb" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Tutorial Requests</h3>
              <p className="text-sm text-content-secondary">
                Want us to cover a specific topic? Suggest new tutorial ideas and we'll prioritize community requests.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="users" className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-heading mb-2">Partnerships</h3>
              <p className="text-sm text-content-secondary">
                Interested in collaborating or sponsoring content? Reach out to discuss partnership opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ViewerLayout>
  )
}
