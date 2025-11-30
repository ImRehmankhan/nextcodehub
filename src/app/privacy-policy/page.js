import ViewerLayout from "@/components/viewer/viewer-layout"

export const metadata = {
  title: "Privacy Policy",
  description: "Learn how NextCodeHub collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <ViewerLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-heading mb-4">Privacy Policy</h1>
        <p className="text-content-secondary mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">Introduction</h2>
            <p className="text-content-secondary mb-4">
              Welcome to NextCodeHub ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website nextcodehub.com.
            </p>
            <p className="text-content-secondary">
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-heading mb-3">Personal Information</h3>
            <p className="text-content-secondary mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-content-secondary mb-4 space-y-2">
              <li>Register on the website</li>
              <li>Subscribe to our newsletter</li>
              <li>Comment on blog posts</li>
              <li>Contact us via email or contact form</li>
            </ul>
            <p className="text-content-secondary mb-4">
              This information may include: name, email address, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-heading mb-3">Automatically Collected Information</h3>
            <p className="text-content-secondary mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 text-content-secondary mb-4 space-y-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages visited and time spent on pages</li>
              <li>Click data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">How We Use Your Information</h2>
            <p className="text-content-secondary mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc pl-6 text-content-secondary mb-4 space-y-2">
              <li>To provide, operate, and maintain our website</li>
              <li>To improve, personalize, and expand our website</li>
              <li>To understand and analyze how you use our website</li>
              <li>To develop new products, services, features, and functionality</li>
              <li>To communicate with you, including customer service and support</li>
              <li>To send you newsletters and marketing communications (with your consent)</li>
              <li>To prevent fraud and enhance security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-content-secondary mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
            </p>
            <p className="text-content-secondary mb-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">Google AdSense</h2>
            <p className="text-content-secondary mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
            </p>
            <p className="text-content-secondary mb-4">
              You may opt out of personalized advertising by visiting{" "}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blog-primary hover:underline">
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">Third-Party Services</h2>
            <p className="text-content-secondary mb-4">
              We may employ third-party companies and individuals to facilitate our website, provide services on our behalf, or assist us in analyzing how our website is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">Data Security</h2>
            <p className="text-content-secondary mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">Your Privacy Rights</h2>
            <p className="text-content-secondary mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-content-secondary mb-4 space-y-2">
              <li>The right to access – You have the right to request copies of your personal data</li>
              <li>The right to rectification – You have the right to request correction of inaccurate data</li>
              <li>The right to erasure – You have the right to request deletion of your personal data</li>
              <li>The right to restrict processing – You have the right to request restriction of processing</li>
              <li>The right to data portability – You have the right to request transfer of your data</li>
              <li>The right to object – You have the right to object to our processing of your data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">Children's Privacy</h2>
            <p className="text-content-secondary mb-4">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">Changes to This Privacy Policy</h2>
            <p className="text-content-secondary mb-4">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-heading mb-4">Contact Us</h2>
            <p className="text-content-secondary mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none text-content-secondary space-y-2">
              <li>Email: privacy@nextcodehub.com</li>
              <li>Website: <a href="/contact" className="text-blog-primary hover:underline">Contact Form</a></li>
            </ul>
          </section>
        </div>
      </div>
    </ViewerLayout>
  )
}
