import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy - NextCodeHub",
  description: "Privacy policy for NextCodeHub fuel cost calculators and tools.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          <div className="border-b border-gray-100 pb-8 mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500">Last updated: April 18, 2026</p>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="mb-4">
                Welcome to NextCodeHub ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website nextcodehub.com.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
              <p className="mb-3">We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Register on the website</li>
                <li>Subscribe to our newsletter</li>
                <li>Comment on blog posts</li>
                <li>Contact us via email or contact form</li>
              </ul>
              <p className="mb-6">This information may include: name, email address, and any other information you choose to provide.</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
              <p className="mb-3">When you visit our website, we automatically collect certain information about your device, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages visited and time spent on pages</li>
                <li>Click data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect in the following ways:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, operate, and maintain our website</li>
                <li>To improve, personalize, and expand our website</li>
                <li>To understand and analyze how you use our website</li>
                <li>To develop new products, services, features, and functionality</li>
                <li>To communicate with you, including customer service and support</li>
                <li>To send you newsletters and marketing communications (with your consent)</li>
                <li>To prevent fraud and enhance security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Google AdSense</h2>
              <p className="mb-4">
                We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
              </p>
              <p>
                You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary-600)] hover:underline font-medium">Google Ads Settings</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Services</h2>
              <p>
                We may employ third-party companies and individuals to facilitate our website, provide services on our behalf, or assist us in analyzing how our website is used. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
              <p className="mb-3">Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>The right to access</strong> – You have the right to request copies of your personal data</li>
                <li><strong>The right to rectification</strong> – You have the right to request correction of inaccurate data</li>
                <li><strong>The right to erasure</strong> – You have the right to request deletion of your personal data</li>
                <li><strong>The right to restrict processing</strong> – You have the right to request restriction of processing</li>
                <li><strong>The right to data portability</strong> – You have the right to request transfer of your data</li>
                <li><strong>The right to object</strong> – You have the right to object to our processing of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p>
                Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="mb-4">If you have any questions about this Privacy Policy, please contact us:</p>
              <ul className="space-y-3">
                
                <li className="flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-500)" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  <span><strong>Website:</strong> <Link href="/contact" className="text-[var(--color-primary-600)] hover:underline">Contact Form</Link></span>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}