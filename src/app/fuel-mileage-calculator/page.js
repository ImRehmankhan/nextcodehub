import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/fuel-mileage-calculator',
      name: 'Fuel Mileage Calculator',
      url: 'https://www.nextcodehub.com/fuel-mileage-calculator',
      description: 'Free fuel mileage calculator for petrol mileage, gas mileage, and fuel average calculations.',
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
          name: 'How do I calculate my fuel mileage?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate fuel mileage, divide the total distance traveled by the amount of fuel consumed. For example, 300 km on 20 liters = 15 km/L fuel mileage.' },
        },
        {
          '@type': 'Question',
          name: 'What is a good petrol mileage for a car?',
          acceptedAnswer: { '@type': 'Answer', text: 'A good petrol mileage for a regular car is between 12–16 km/L. Hybrids can achieve 20–25 km/L, and bikes can reach 30–60 km/L.' },
        },
        {
          '@type': 'Question',
          name: 'How is gas mileage different from fuel mileage?',
          acceptedAnswer: { '@type': 'Answer', text: 'Gas mileage and fuel mileage are the same thing — they both measure how far your vehicle travels per unit of fuel. Gas mileage is the US term (MPG), while fuel mileage is used more broadly internationally (km/L).' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Fuel Mileage Calculator - Petrol & Gas Mileage Calculator",
  description: "Calculate your exact fuel mileage, petrol mileage, and gas mileage easily. Find out how efficient your vehicle is with our free fuel mileage calculator.",
  keywords: [
    "fuel mileage calculator",
    "petrol mileage calculator",
    "gas mileage calculator",
    "fuel average calculator",
    "petrol average calculator",
    "gas and mileage calculator",
    "gas mileage estimator",
    "vehicle mileage calculator",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/fuel-mileage-calculator',
  },
  openGraph: {
    title: "Fuel Mileage Calculator - Petrol & Gas Mileage Calculator",
    description: "Calculate your exact fuel mileage, petrol mileage, and gas mileage with our free online calculator.",
    url: 'https://www.nextcodehub.com/fuel-mileage-calculator',
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
            Fuel Mileage Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your exact fuel mileage, petrol mileage, and gas mileage. Track your vehicle&apos;s efficiency and optimize every journey for maximum savings.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          {/* What is Fuel Mileage */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Fuel Mileage?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fuel mileage — also called petrol mileage or gas mileage — is a measure of how far your vehicle travels on a given amount of fuel. It is the most important metric for understanding your vehicle&apos;s efficiency and managing your fuel budget.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              In the US and UK, fuel mileage is measured in <strong>miles per gallon (MPG)</strong>. In most other countries, it is expressed as <strong>km per liter (km/L)</strong> or <strong>liters per 100km (L/100km)</strong>. Our fuel mileage calculator supports all three formats.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">Fuel Mileage Formula</h3>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg">
                <p>Fuel Mileage (km/L) = Distance Traveled (km) ÷ Fuel Used (liters)</p>
                <p className="mt-2 text-gray-400">Example: 300 km ÷ 20 L = 15 km/L</p>
              </div>
            </div>
          </section>

          {/* Petrol vs Gas Mileage */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Petrol Mileage vs Gas Mileage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-3">🇬🇧 Petrol Mileage (km/L or MPG UK)</h3>
                <p className="text-blue-800 text-sm">Used in the UK, India, Pakistan, and most Commonwealth countries. Measured in km/L or miles per imperial gallon. A typical car achieves 12–16 km/L.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-3">🇺🇸 Gas Mileage (MPG US)</h3>
                <p className="text-green-800 text-sm">Used in the United States. Measured in miles per US gallon. A typical car achieves 25–35 MPG. Our gas mileage estimator handles US gallons automatically.</p>
              </div>
            </div>
          </section>

          {/* Average Mileage by Vehicle */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Petrol Average by Vehicle Type</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Vehicle Type</th>
                    <th className="text-left p-3">km/L Average</th>
                    <th className="text-left p-3 rounded-tr-lg">MPG Average</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Motorcycle', '30 – 60 km/L', '70 – 140 MPG'],
                    ['Compact Car', '15 – 20 km/L', '35 – 47 MPG'],
                    ['Sedan', '12 – 16 km/L', '28 – 38 MPG'],
                    ['SUV / Crossover', '8 – 13 km/L', '19 – 31 MPG'],
                    ['Truck / Pickup', '6 – 10 km/L', '14 – 23 MPG'],
                    ['Hybrid Car', '18 – 25 km/L', '42 – 59 MPG'],
                  ].map(([type, kmL, mpg]) => (
                    <tr key={type} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{type}</td>
                      <td className="p-3 text-gray-600">{kmL}</td>
                      <td className="p-3 text-gray-600">{mpg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate my fuel mileage?</h3>
                <p className="text-gray-600">Divide total distance traveled by fuel consumed. Example: 300 km on 20 liters = 15 km/L. Our calculator does this instantly.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What is a good petrol mileage for a car?</h3>
                <p className="text-gray-600">For regular petrol cars, 12–16 km/L is average. Hybrids achieve 20–25 km/L. If you&apos;re getting below 10 km/L, it may be time for a tune-up.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">How is gas mileage different from fuel mileage?</h3>
                <p className="text-gray-600">Gas mileage and fuel mileage measure the same thing — distance per unit of fuel. Gas mileage uses MPG (US), while fuel/petrol mileage uses km/L internationally.</p>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}