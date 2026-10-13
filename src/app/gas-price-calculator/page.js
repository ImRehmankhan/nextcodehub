import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/gas-price-calculator',
      name: 'Gas Price Calculator',
      url: 'https://www.nextcodehub.com/gas-price-calculator',
      description: 'Free gas price calculator and gas bill calculator. Estimate your total gas bill based on current fuel prices, distance, and vehicle mileage.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'NextCodeHub', url: 'https://www.nextcodehub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I calculate my gas bill?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate your gas bill: multiply your monthly miles driven by your car\'s fuel consumption rate (gallons per mile), then multiply by the current gas price per gallon. Our gas bill calculator does this instantly.' },
        },
        {
          '@type': 'Question',
          name: 'How does the gas price affect my monthly fuel expense?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every $0.10 increase in gas price per gallon adds about $1.50–$3 to your monthly gas bill if you drive 300-600 miles per month in a 30 MPG car. Use our gas price calculator to see the exact impact.' },
        },
        {
          '@type': 'Question',
          name: 'What is the average monthly gas bill?',
          acceptedAnswer: { '@type': 'Answer', text: 'The average American household spends $150–$300 per month on gasoline, depending on vehicle type, number of vehicles, local gas prices, and driving habits.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Gas Price Calculator - Gas Bill Calculator & Fuel Price Estimator",
  description: "Free gas price calculator and gas bill calculator. Estimate your monthly gas bill, calculate fuel price impact, and budget your gas expenses based on current fuel prices.",
  keywords: [
    "gas price calculator",
    "gas bill calculator",
    "fuel price calculator",
    "calculate gas bill",
    "monthly gas bill calculator",
    "gas cost per month",
    "fuel price estimator",
    "gas expense calculator",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/gas-price-calculator',
  },
  openGraph: {
    title: "Gas Price Calculator - Gas Bill & Fuel Price Calculator",
    description: "Calculate your gas bill and estimate fuel price impact with our free gas price calculator.",
    url: 'https://www.nextcodehub.com/gas-price-calculator',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Gas Price Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your gas bill and see exactly how gas prices affect your fuel budget. Enter your distance, MPG, and current gas price to get your estimated gas expense instantly.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Gas Prices Impact Your Budget</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gas prices can change daily and vary by region, season, and global oil markets. Even a small change of $0.10 per gallon can significantly affect your monthly gas bill, especially if you drive frequently or own a low-MPG vehicle.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our <strong>gas price calculator</strong> lets you see exactly what your gas bill would be at different price levels, so you can plan ahead and budget accurately.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Gas Price</th>
                    <th className="text-left p-3">20 MPG Car (1000 mi/mo)</th>
                    <th className="text-left p-3">30 MPG Car (1000 mi/mo)</th>
                    <th className="text-left p-3 rounded-tr-lg">40 MPG Car (1000 mi/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['$2.50/gal', '$125/mo', '$83/mo', '$63/mo'],
                    ['$3.00/gal', '$150/mo', '$100/mo', '$75/mo'],
                    ['$3.50/gal', '$175/mo', '$117/mo', '$88/mo'],
                    ['$4.00/gal', '$200/mo', '$133/mo', '$100/mo'],
                    ['$4.50/gal', '$225/mo', '$150/mo', '$113/mo'],
                    ['$5.00/gal', '$250/mo', '$167/mo', '$125/mo'],
                  ].map(([price, ...bills]) => (
                    <tr key={price} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{price}</td>
                      {bills.map((b, i) => <td key={i} className="p-3 text-gray-600">{b}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate my gas bill?</h3>
                <p className="text-gray-600">Monthly miles ÷ MPG × gas price per gallon = monthly gas bill. Example: 1000 miles ÷ 30 MPG × $3.50 = $116.67/month. Use the calculator above for your exact figures.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How does gas price affect my monthly fuel expense?</h3>
                <p className="text-gray-600">Every $0.10/gallon increase adds ~$3.33/month for a 30 MPG car driving 1,000 miles. A $1.00/gallon increase adds $33/month.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What is the average monthly gas bill in the US?</h3>
                <p className="text-gray-600">The average American household spends $150–$300/month on gasoline. This varies by vehicle type, local gas prices, and how much you drive.</p>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
