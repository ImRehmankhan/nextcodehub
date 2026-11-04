import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: "Cookie Policy",
  description: "Learn how NextCodeHub uses cookies, Google AdSense advertising cookies, and how you can manage your cookie preferences.",
  alternates: {
    canonical: 'https://www.nextcodehub.com/cookie-policy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const cookieJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.nextcodehub.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Cookie Policy',
          item: 'https://www.nextcodehub.com/cookie-policy',
        },
      ],
    },
  ],
};

export default function CookiePolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cookieJsonLd) }}
      />
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Cookie Policy' }]} />
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          
          {/* Header */}
          <div className="border-b border-gray-100 pb-8 mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-500">Last updated: April 22, 2026</p>
          </div>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                This Cookie Policy explains how NextCodeHub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) uses cookies and similar tracking technologies when you visit our website at <Link href="/" className="text-primary-600 hover:underline font-medium">nextcodehub.com</Link> (&quot;Website&quot;).
              </p>
              <p>
                By using our website, you consent to the use of cookies in accordance with this policy. If you do not accept the use of these cookies, please disable them according to the instructions in this policy or refrain from using our website.
              </p>
            </section>

            {/* What Are Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Are Cookies?</h2>
              <p className="mb-4">
                Cookies are small text files placed on your computer, tablet, or mobile phone by websites that you visit. They are widely used to make websites work efficiently, remember your preferences, and provide useful reporting data to site owners.
              </p>
              <p>
                Cookies may be &quot;persistent&quot; or &quot;session&quot; cookies. Persistent cookies remain on your device after you close your browser until they expire or you delete them. Session cookies are temporary and expire automatically when you close your browser.
              </p>
            </section>

            {/* Types of Cookies We Use */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
              <div className="space-y-6 mt-4">
                <div className="border border-gray-100 rounded-2xl p-5 bg-gray-50/50">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">A. Strictly Necessary / Essential Cookies</h3>
                  <p className="text-sm">
                    These cookies are necessary for the website to function properly. They enable basic features such as page navigation, access to secure areas, and saving your calculator inputs and preferred measurement units (e.g., Metric vs. Imperial).
                  </p>
                </div>

                <div className="border border-gray-100 rounded-2xl p-5 bg-gray-50/50">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">B. Functionality &amp; Preference Cookies</h3>
                  <p className="text-sm">
                    These cookies allow our website to remember choices you make (such as your chosen fuel unit, currency preference, and cookie consent status) to provide a more personalized and consistent user experience.
                  </p>
                </div>

                <div className="border border-gray-100 rounded-2xl p-5 bg-gray-50/50">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">C. Performance &amp; Analytics Cookies</h3>
                  <p className="text-sm">
                    We may use analytics services to collect anonymous information about how visitors use our calculators, which tools are most popular, and whether users encounter error pages. This helps us continuously improve the quality and speed of our services.
                  </p>
                </div>

                <div className="border border-gray-100 rounded-2xl p-5 bg-gray-50/50">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">D. Advertising &amp; Targeting Cookies (Google AdSense)</h3>
                  <p className="text-sm">
                    These cookies are used to deliver advertisements that are relevant to you and your interests. They also limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
                  </p>
                </div>
              </div>
            </section>

            {/* Google AdSense & DoubleClick Disclosure */}
            <section className="bg-primary-50/60 border border-primary-100 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Google AdSense &amp; DoubleClick DART Cookies
              </h2>
              <p className="mb-4">
                NextCodeHub uses <strong>Google AdSense</strong> to display advertisements to monetize and maintain our free digital tools and calculators. Google is a third-party vendor on our website and uses cookies to serve ads to our visitors.
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
                <li>
                  Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to NextCodeHub or other websites on the Internet.
                </li>
                <li>
                  Google&apos;s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.
                </li>
                <li>
                  Users may opt out of personalized advertising by visiting{' '}
                  <a 
                    href="https://www.google.com/settings/ads" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-700 underline font-semibold"
                  >
                    Google Ads Settings
                  </a>.
                </li>
              </ul>
              <p className="text-sm">
                Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{' '}
                <a 
                  href="https://www.aboutads.info/choices/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-700 underline font-semibold"
                >
                  aboutads.info
                </a>{' '}
                or the{' '}
                <a 
                  href="https://www.youronlinechoices.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary-700 underline font-semibold"
                >
                  Your Online Choices
                </a>{' '}
                portal.
              </p>
            </section>

            {/* How to Control Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How Can You Control or Block Cookies?</h2>
              <p className="mb-4">
                Most web browsers automatically accept cookies, but you have the right to decide whether to accept or decline cookies. You can set or amend your web browser controls to accept or refuse cookies whenever you wish.
              </p>
              <p className="mb-4">
                To manage or disable cookies in your browser, refer to the official support documentation for your browser:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Google Chrome:</strong>{' '}
                  <a 
                    href="https://support.google.com/chrome/answer/95647" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-600 hover:underline"
                  >
                    Clear, enable, and manage cookies in Chrome
                  </a>
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong>{' '}
                  <a 
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-600 hover:underline"
                  >
                    Enhanced Tracking Protection in Firefox
                  </a>
                </li>
                <li>
                  <strong>Apple Safari:</strong>{' '}
                  <a 
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-600 hover:underline"
                  >
                    Manage cookies and website data in Safari
                  </a>
                </li>
                <li>
                  <strong>Microsoft Edge:</strong>{' '}
                  <a 
                    href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-600 hover:underline"
                  >
                    Delete cookies in Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="text-sm text-gray-500">
                Please note that disabling cookies may affect the functionality of our calculators and prevent you from using certain personalized features.
              </p>
            </section>

            {/* Changes to Cookie Policy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for operational, legal, or regulatory reasons. Please revisit this page regularly to stay informed about our use of cookies and related technologies.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or other technologies, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <p className="font-semibold text-gray-900">NextCodeHub</p>
                <p className="text-sm mt-1">Website: <Link href="/" className="text-primary-600 hover:underline">https://www.nextcodehub.com</Link></p>
                <p className="text-sm mt-1">Contact Page: <Link href="/contact" className="text-primary-600 hover:underline">https://www.nextcodehub.com/contact</Link></p>
                <p className="text-sm mt-1">Privacy Policy: <Link href="/privacy-policy" className="text-primary-600 hover:underline">https://www.nextcodehub.com/privacy-policy</Link></p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
    </>
  );
}
