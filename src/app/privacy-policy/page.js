import Link from 'next/link';

export const metadata = {
  title: "Privacy Policy - NextCodeHub | Data Protection & AdSense Compliance",
  description: "Read the NextCodeHub privacy policy detailing how we protect your information, use Google AdSense cookies, respect GDPR & CCPA privacy rights, and keep calculations client-side.",
  alternates: {
    canonical: 'https://www.nextcodehub.com/privacy-policy',
  },
  openGraph: {
    title: "Privacy Policy - NextCodeHub",
    description: "Detailed privacy notice explaining our commitment to zero calculation tracking, Google AdSense compliance, and your data protection rights.",
    url: 'https://www.nextcodehub.com/privacy-policy',
  },
};

const privacyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.nextcodehub.com/privacy-policy',
  name: 'NextCodeHub Privacy Policy',
  url: 'https://www.nextcodehub.com/privacy-policy',
  description: 'Official privacy policy for NextCodeHub digital tools and services.',
  publisher: {
    '@type': 'Organization',
    name: 'NextCodeHub',
    url: 'https://www.nextcodehub.com',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
      />

      <div className="bg-gray-50 min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
            
            <div className="border-b border-gray-100 pb-8 mb-8 text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200 mb-4">
                Transparency &amp; Trust
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-500 text-sm">Last updated: October 2026 • Effective Date: January 1, 2026</p>
            </div>

            <div className="space-y-8 text-gray-700 leading-relaxed">
              
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Introduction</h2>
                <p className="mb-4">
                  Welcome to <strong>NextCodeHub</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), operated by Rehman Khan at nextcodehub.com. We respect your privacy and are committed to maintaining the highest ethical standards regarding data transparency and privacy protection.
                </p>
                <p>
                  This Privacy Policy outlines how we collect, handle, and safeguard data when you use our automotive calculators and informational articles.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Zero Calculation Data Storage (Privacy by Design)</h2>
                <div className="p-5 bg-primary-50/70 border border-primary-100 rounded-2xl text-primary-950 text-sm space-y-2">
                  <p className="font-bold flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Your Trip &amp; Mileage Inputs Are 100% Private
                  </p>
                  <p>
                    When you use our fuel cost calculator, mileage calculator, or MPG tools, all computations happen client-side within your browser. <strong>We do not transmit, log, store, or sell your trip distances, destinations, fuel costs, or vehicle mileage data to our servers or any third parties.</strong>
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Information We Collect</h2>
                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">A. Information You Voluntarily Provide</h3>
                <p className="mb-3 text-sm">
                  We collect personal information only when you voluntarily submit it to us, such as when submitting our <Link href="/contact" className="text-primary-600 hover:underline">Contact Form</Link> or emailing us directly. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-600 mb-4">
                  <li>Your Name</li>
                  <li>Your Email Address</li>
                  <li>The subject and body of your feedback or inquiry message</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2">B. Automatically Collected Technical Data</h3>
                <p className="mb-3 text-sm">
                  Like most modern websites, our hosting servers and analytics tools may log standard technical information, including:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-600">
                  <li>Internet Protocol (IP) address (anonymized where required)</li>
                  <li>Browser type, operating system, and screen resolution</li>
                  <li>Referring URLs and pages viewed</li>
                  <li>Date and timestamp of visits</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Google AdSense &amp; Advertising Cookies</h2>
                <p className="mb-4 text-sm">
                  We use Google AdSense and authorized third-party ad vendors to serve advertisements when you visit our website.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600 mb-4">
                  <li><strong>Third-Party Vendors:</strong> Google, as a third-party vendor, uses cookies (including the DoubleClick DART cookie) to serve ads on NextCodeHub.</li>
                  <li><strong>Personalized Ads:</strong> Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visits to our site and/or other sites on the Internet.</li>
                  <li><strong>User Opt-Out:</strong> You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">Google Ads Settings</a>. Alternatively, you can opt out of third-party vendors&apos; use of cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">AboutAds.info</a>.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Cookie Management &amp; Consent</h2>
                <p className="text-sm mb-3">
                  We provide an interactive Cookie Consent banner to allow visitors to control non-essential cookies. You can also modify your browser settings to decline or delete cookies at any time:
                </p>
                <p className="text-sm text-gray-600">
                  For in-depth details on the specific cookies we utilize, please review our comprehensive <Link href="/cookie-policy" className="text-primary-600 hover:underline font-medium">Cookie Policy</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">6. GDPR &amp; International User Rights</h2>
                <p className="mb-3 text-sm">
                  Under the European Union General Data Protection Regulation (GDPR) and UK Data Protection laws, you have specific rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-sm text-gray-600 mb-4">
                  <li><strong>Right to Access:</strong> You may request copies of personal information we hold about you.</li>
                  <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete data.</li>
                  <li><strong>Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> You may request that we delete your personal information.</li>
                  <li><strong>Right to Restrict or Object:</strong> You may object to the processing of your data.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">7. CCPA / CPRA Notice (California Residents)</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  The California Consumer Privacy Act provides California residents with specific rights regarding their personal information. NextCodeHub <strong>does not sell personal information</strong> of any consumer, including minors. You have the right to request disclosure of information practices and deletion of your data without discriminatory treatment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">8. Children&apos;s Online Privacy (COPPA)</h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  NextCodeHub is not directed to children under 13 years of age. We do not knowingly collect or solicit personal information from children under 13. If you believe a minor has provided us with personal data, please contact us immediately for prompt deletion.
                </p>
              </section>

              <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-4">
                <h2 className="text-2xl font-bold text-gray-900">9. Data Controller &amp; Contact Information</h2>
                <p className="text-sm text-gray-600">
                  If you have questions about this Privacy Policy, your rights, or wish to make a formal data request, please contact our Data Protection Officer:
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Entity:</strong> NextCodeHub</p>
                  <p><strong>Owner:</strong> Rehman Khan</p>
                  <p><strong>Location:</strong> Islamabad, Pakistan</p>
                  <p><strong>Email:</strong> <a href="mailto:rehmanattock30@gmail.com" className="text-primary-600 hover:underline">rehmanattock30@gmail.com</a></p>
                  <p><strong>Phone:</strong> <a href="tel:+923425221720" className="text-primary-600 hover:underline">+92-3425221720</a> (Mon–Fri, 9am–6pm PKT)</p>
                  <p><strong>Web:</strong> <Link href="/contact" className="text-primary-600 hover:underline">Contact Form</Link></p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}