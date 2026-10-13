import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/fuel-consumption-calculator',
      name: 'Fuel Consumption Calculator',
      url: 'https://www.nextcodehub.com/fuel-consumption-calculator',
      description: 'Free fuel consumption calculator to measure how much fuel your vehicle uses. Calculate gas per mile, L/100km, and total fuel consumption for any journey.',
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
          name: 'What is fuel consumption and how is it measured?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fuel consumption measures how much fuel your vehicle uses over a given distance. It is commonly expressed as liters per 100 kilometers (L/100km) or gallons per 100 miles. Lower values indicate better fuel efficiency.' },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate gas per mile?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate gas per mile, divide total gallons used by total miles driven. For example, 10 gallons used over 300 miles = 0.033 gallons per mile, or about $0.12/mile at $3.60/gallon.' },
        },
        {
          '@type': 'Question',
          name: 'What factors increase fuel consumption?',
          acceptedAnswer: { '@type': 'Answer', text: 'Factors that increase fuel consumption include high speeds, aggressive driving, cold weather, excess vehicle weight, poor aerodynamics, under-inflated tires, and a poorly maintained engine.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Fuel Consumption Calculator - Calculate Gas Per Mile & L/100km",
  description: "Free fuel consumption calculator to measure how much fuel your vehicle uses. Calculate gas per mile, L/100km, and total fuel consumption for trips and commutes.",
  keywords: [
    "fuel consumption calculator",
    "gas per mile calculator",
    "fuel usage calculator",
    "liters per 100km calculator",
    "L/100km calculator",
    "vehicle fuel consumption",
    "calculate fuel consumption",
    "fuel burn rate calculator",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/fuel-consumption-calculator',
  },
  openGraph: {
    title: "Fuel Consumption Calculator - Calculate Gas Per Mile & L/100km",
    description: "Calculate fuel consumption per mile, per 100km, and total fuel usage with our free fuel consumption calculator.",
    url: 'https://www.nextcodehub.com/fuel-consumption-calculator',
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
            Fuel Consumption Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Measure exactly how much fuel your vehicle consumes. Calculate gas per mile, liters per 100km, and total fuel usage for any trip or daily commute.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          {/* Fuel consumption vs efficiency */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fuel Consumption vs Fuel Efficiency</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              These two terms are often confused. <strong>Fuel consumption</strong> measures how much fuel you use per distance (L/100km, gallons/100 miles), while <strong>fuel efficiency</strong> measures distance per unit of fuel (km/L, MPG). A lower consumption number means a more efficient vehicle.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-900 mb-2">Fuel Consumption (Lower = Better)</h3>
                <p className="text-red-800 text-sm mb-3">How much fuel you use per 100km or 100 miles. Lower is better.</p>
                <div className="font-mono text-xs bg-red-100 text-red-900 p-3 rounded-lg">
                  <p>L/100km = (Fuel Used ÷ Distance) × 100</p>
                  <p className="mt-1 text-red-600">20L ÷ 300km × 100 = 6.67 L/100km</p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-2">Fuel Efficiency (Higher = Better)</h3>
                <p className="text-green-800 text-sm mb-3">How far you go on each unit of fuel. Higher is better.</p>
                <div className="font-mono text-xs bg-green-100 text-green-900 p-3 rounded-lg">
                  <p>km/L = Distance ÷ Fuel Used</p>
                  <p className="mt-1 text-green-600">300km ÷ 20L = 15 km/L</p>
                </div>
              </div>
            </div>
          </section>

          {/* Gas per mile explained */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Gas Per Mile</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Gas per mile</strong> is a useful metric to know your exact fuel cost for every mile driven. This is especially useful for ride-share drivers, truckers, and anyone tracking business mileage for tax purposes.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg space-y-2">
                <p>Gallons per mile = Gallons Used ÷ Miles Driven</p>
                <p>Cost per mile = Gallons per mile × Gas Price</p>
                <p className="text-gray-400 mt-2">Example: 10 gallons ÷ 300 miles = 0.033 gal/mile</p>
                <p className="text-gray-400">At $3.60/gal = <span className="text-yellow-400">$0.12 per mile</span></p>
              </div>
            </div>
          </section>

          {/* Consumption by vehicle */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Average Fuel Consumption by Vehicle Type</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Vehicle</th>
                    <th className="text-left p-3">L/100km</th>
                    <th className="text-left p-3">Gal/100mi</th>
                    <th className="text-left p-3 rounded-tr-lg">MPG</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Hybrid Car', '4.0 – 5.5', '1.7 – 2.3', '43 – 59'],
                    ['Compact Car', '5.5 – 7.0', '2.3 – 3.0', '34 – 43'],
                    ['Midsize Sedan', '7.0 – 9.0', '3.0 – 3.8', '26 – 34'],
                    ['SUV / Crossover', '9.0 – 13.0', '3.8 – 5.5', '18 – 26'],
                    ['Pickup Truck', '11.0 – 17.0', '4.7 – 7.2', '14 – 21'],
                    ['Motorcycle', '2.5 – 4.0', '1.1 – 1.7', '59 – 94'],
                  ].map(([v, l100, g100, mpg]) => (
                    <tr key={v} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{v}</td>
                      <td className="p-3 text-gray-600">{l100}</td>
                      <td className="p-3 text-gray-600">{g100}</td>
                      <td className="p-3 text-gray-600">{mpg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What is fuel consumption and how is it measured?</h3>
                <p className="text-gray-600">Fuel consumption measures fuel used per distance — expressed as L/100km or gallons/100 miles. Lower values mean better efficiency.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate gas per mile?</h3>
                <p className="text-gray-600">Divide total gallons by miles driven. At 30 MPG: 1 ÷ 30 = 0.033 gallons/mile. At $3.60/gal that&apos;s $0.12 per mile.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What factors increase fuel consumption?</h3>
                <p className="text-gray-600">High speed, aggressive driving, cold weather, excess weight, under-inflated tires, and poor engine maintenance all increase fuel consumption significantly.</p>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}