import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/fuel-efficiency-calculator',
      name: 'Fuel Efficiency Calculator',
      url: 'https://www.nextcodehub.com/fuel-efficiency-calculator',
      description: 'Free fuel efficiency calculator to measure and improve your vehicle\'s fuel efficiency. Calculate fuel efficiency in MPG, km/L, or L/100km.',
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
          name: 'What is fuel efficiency?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fuel efficiency measures how effectively a vehicle converts fuel energy into motion. It is commonly expressed as MPG (miles per gallon) or km/L. A more fuel-efficient vehicle travels further on the same amount of fuel.' },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate fuel efficiency?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fuel efficiency (km/L) = Distance Traveled ÷ Fuel Used. Or in MPG: Miles Traveled ÷ Gallons Used. For example, 300 km on 20 liters = 15 km/L fuel efficiency.' },
        },
        {
          '@type': 'Question',
          name: 'What reduces fuel efficiency?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fuel efficiency is reduced by aggressive driving, under-inflated tires, excessive idling, driving at high speeds, a poorly maintained engine, and carrying heavy loads.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Fuel Efficiency Calculator - Measure & Improve Vehicle Efficiency",
  description: "Free fuel efficiency calculator to measure your vehicle's efficiency in MPG, km/L, or L/100km. Track fuel efficiency over time and find ways to improve your vehicle's performance.",
  keywords: [
    "fuel efficiency calculator",
    "fuel economy calculator",
    "vehicle efficiency calculator",
    "calculate fuel efficiency",
    "mpg efficiency calculator",
    "fuel efficiency rating",
    "fuel efficiency test",
    "improve fuel efficiency",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/fuel-efficiency-calculator',
  },
  openGraph: {
    title: "Fuel Efficiency Calculator - Measure Vehicle Fuel Efficiency",
    description: "Calculate and improve your vehicle's fuel efficiency in MPG, km/L, or L/100km with our free fuel efficiency calculator.",
    url: 'https://www.nextcodehub.com/fuel-efficiency-calculator',
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
            Fuel Efficiency Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Measure your vehicle&apos;s fuel efficiency in MPG, km/L, or L/100km. Track how efficiently your car uses fuel and discover actionable ways to improve it.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Fuel Efficiency?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fuel efficiency</strong> refers to how effectively your vehicle converts fuel into distance traveled. A more fuel-efficient car travels more miles (or kilometers) per gallon (or liter) of fuel, resulting in lower running costs and reduced emissions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fuel efficiency is the key metric for comparing vehicles, planning fuel budgets, and reducing your carbon footprint. Use our fuel efficiency calculator to measure your real-world efficiency versus the manufacturer&apos;s rated figure.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Fuel Efficiency Formula</h3>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg space-y-1">
                <p>Fuel Efficiency (km/L) = Distance (km) ÷ Fuel Used (L)</p>
                <p>Fuel Efficiency (MPG) = Miles Driven ÷ Gallons Used</p>
                <p className="text-gray-400 mt-2">Example: 300 km ÷ 20 L = <span className="text-yellow-400">15 km/L</span></p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fuel Efficiency Ratings Guide</h2>
            <div className="space-y-4">
              {[
                { rating: '⭐⭐⭐⭐⭐ Excellent', range: 'Above 40 MPG / 17+ km/L', desc: 'Hybrids, economy cars. Very low running costs.', color: 'green' },
                { rating: '⭐⭐⭐⭐ Good', range: '30–40 MPG / 12–17 km/L', desc: 'Compact sedans. Below-average fuel costs.', color: 'blue' },
                { rating: '⭐⭐⭐ Average', range: '22–30 MPG / 9–12 km/L', desc: 'Midsize cars. Typical for most drivers.', color: 'yellow' },
                { rating: '⭐⭐ Below Average', range: '15–22 MPG / 6–9 km/L', desc: 'SUVs, minivans. Higher than average fuel costs.', color: 'orange' },
                { rating: '⭐ Poor', range: 'Below 15 MPG / Under 6 km/L', desc: 'Large trucks, muscle cars. High fuel costs.', color: 'red' },
              ].map(({ rating, range, desc }) => (
                <div key={rating} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900 text-sm">{rating}</p>
                    <p className="text-primary-700 font-medium text-sm">{range}</p>
                    <p className="text-gray-500 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What is fuel efficiency?</h3>
                <p className="text-gray-600">Fuel efficiency measures how far your vehicle travels per unit of fuel (MPG or km/L). Higher = more efficient = lower cost per mile.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate fuel efficiency?</h3>
                <p className="text-gray-600">Divide distance by fuel used. 300 km ÷ 20 L = 15 km/L. Or 300 miles ÷ 10 gallons = 30 MPG. Use the calculator above for instant results.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What reduces fuel efficiency?</h3>
                <p className="text-gray-600">Aggressive driving, under-inflated tires, idling, high speeds, excess weight, and poor engine maintenance all reduce fuel efficiency.</p>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
