import Link from 'next/link';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata = {
  title: "Disclaimer: Fuel Cost & Calculation Accuracy Notice",
  description: "Read the official NextCodeHub disclaimer regarding automotive calculations, fuel price volatility, EPA vs real-world mileage estimates, and advertising disclosures.",
  alternates: {
    canonical: 'https://www.nextcodehub.com/disclaimer',
  },
  openGraph: {
    title: "Disclaimer | NextCodeHub",
    description: "Important information regarding fuel calculation estimates, mileage variances, and financial decisions on NextCodeHub.",
    url: 'https://www.nextcodehub.com/disclaimer',
  },
};

const disclaimerJsonLd = {
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
          name: 'Disclaimer',
          item: 'https://www.nextcodehub.com/disclaimer',
        },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.nextcodehub.com/disclaimer',
      name: 'NextCodeHub Disclaimer',
      url: 'https://www.nextcodehub.com/disclaimer',
      description: 'Legal disclaimer and accuracy disclosure for NextCodeHub fuel calculation tools.',
      publisher: {
        '@type': 'Organization',
        name: 'NextCodeHub',
        url: 'https://www.nextcodehub.com',
      },
    },
  ],
};

export default function DisclaimerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(disclaimerJsonLd) }}
      />
      
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Disclaimer' }]} />
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 border border-primary-200 mb-4">
              Legal Disclosures &amp; Terms
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Disclaimer &amp; Calculation Notice
            </h1>
            <p className="text-gray-500 text-sm">
              Last Updated: October 2026 • Effective Date: January 1, 2026
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 space-y-10 text-gray-700 leading-relaxed text-base">
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                1. General Estimation Purpose
              </h2>
              <p>
                The digital calculators, converters, articles, and estimates provided on <strong>NextCodeHub (nextcodehub.com)</strong> are intended solely for general informational, educational, and planning purposes.
              </p>
              <p>
                While all algorithms on our platform utilize recognized automotive formulas (such as EPA conversion standards, metric fuel density coefficients, and standard mathematical ratios), calculation outputs are <strong>theoretical estimates</strong> and should never be interpreted as guaranteed actual vehicle performance or precise fiscal billing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                2. Real-World Fuel Economy &amp; Mileage Variances
              </h2>
              <p>
                Actual automotive fuel consumption varies significantly from laboratory ratings (such as US EPA ratings, European WLTP, or Japanese JC08 test cycles) due to dynamic real-world factors beyond our control, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                <li><strong>Driving Behavior:</strong> Rapid acceleration, aggressive braking, high cruising speeds (exceeding 65 mph / 105 km/h), and frequent cold engine starts.</li>
                <li><strong>Environmental Conditions:</strong> Ambient temperatures, headwinds, precipitation, high elevation, snow, and rough terrain.</li>
                <li><strong>Vehicle Maintenance Status:</strong> Incorrect tire inflation pressure, clogged air filters, dirty spark plugs, dragging brake calipers, and incorrect motor oil viscosity.</li>
                <li><strong>Auxiliary Loads:</strong> Continuous air conditioning usage, roof cargo carriers, towing trailers, and excess passenger or luggage payload.</li>
              </ul>
              <p className="text-sm">
                NextCodeHub assumes no liability for discrepancies between our estimated fuel consumption and your vehicle&apos;s real-world odometer or tank fill measurements.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                3. Fuel Price Volatility &amp; Currency Conversion
              </h2>
              <p>
                Retail pump prices for unleaded petrol, diesel, mid-grade, premium 98-octane gasoline, and alternative fuels fluctuate continuously by region, state, local municipality, taxes, and global crude oil markets.
              </p>
              <p>
                Any default price benchmarks provided in our inputs or example calculations are illustrative. Users are encouraged to input their specific local pump rates to achieve the highest possible cost estimation accuracy.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                4. No Professional Automotive or Financial Advice
              </h2>
              <p>
                Nothing on NextCodeHub constitutes certified mechanical, automotive repair, financial, tax, or legal advice:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                <li><strong>Tax Deductions:</strong> If you use our calculators to estimate vehicle mileage deductions for rideshare (Uber/Lyft), courier deliveries, or business vehicle logs, please consult a Certified Public Accountant (CPA) or official IRS / tax authority guidelines.</li>
                <li><strong>Mechanical Diagnoses:</strong> Sudden severe drops in fuel economy may signal mechanical malfunctions (such as failing oxygen sensors, catalytic converter restriction, or vacuum leaks). Always consult a certified automotive mechanic.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                5. Limitation of Liability
              </h2>
              <p>
                Under no circumstances shall NextCodeHub, its founder Rehman Khan, contributors, or service providers be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use or inability to use our tools, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-gray-600">
                <li>Budget miscalculations or unforeseen fuel expenditures during road trips.</li>
                <li>Disputes between carpooling parties regarding travel cost splits.</li>
                <li>Disallowed tax deductions or employer reimbursement audit differences.</li>
                <li>Mechanical damage resulting from driving choices influenced by website content.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                6. Advertising &amp; Third-Party Links Disclosure
              </h2>
              <p>
                NextCodeHub is supported by non-intrusive display advertisements, including services provided by Google AdSense and third-party advertising partners.
              </p>
              <p className="text-sm">
                Advertisements shown on our site do not represent an endorsement, sponsorship, or recommendation of any specific automotive product, oil additive, or fuel brand by NextCodeHub. We are not responsible for the content, privacy practices, or product warranties of external third-party sites.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3">
                7. Contact Information
              </h2>
              <p>
                If you have questions, feedback, or require clarification regarding this disclaimer, please reach out to us:
              </p>
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-2 text-sm">
                <p><strong>Entity:</strong> NextCodeHub</p>
                <p><strong>Founder:</strong> Rehman Khan</p>
                <p><strong>Location:</strong> Islamabad, Pakistan</p>
                <p><strong>Email:</strong> <a href="mailto:rehmanattock30@gmail.com" className="text-primary-600 hover:underline">rehmanattock30@gmail.com</a></p>
                <p><strong>Online Inquiry:</strong> <Link href="/contact" className="text-primary-600 hover:underline">Contact Form</Link></p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}