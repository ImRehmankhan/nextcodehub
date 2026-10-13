import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/fuel-economy-calculator',
      name: 'Fuel Economy Calculator',
      url: 'https://www.nextcodehub.com/fuel-economy-calculator',
      description: 'Free fuel economy calculator to measure vehicle efficiency. Convert between MPG, km/L, and L/100km and check your fuel efficiency rating.',
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
          name: 'What does fuel economy mean?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fuel economy is a measure of how efficiently a vehicle uses fuel. It is expressed as miles per gallon (MPG) in the US, km per liter (km/L) in many countries, or liters per 100km (L/100km) in Europe. A better fuel economy means fewer fuel stops and lower costs.' },
        },
        {
          '@type': 'Question',
          name: 'How do I improve my vehicle\'s fuel economy?',
          acceptedAnswer: { '@type': 'Answer', text: 'Improve fuel economy by maintaining proper tire pressure, using the recommended motor oil, keeping up with tune-ups, reducing idling, driving at moderate speeds (55-65 mph), and removing excess cargo weight.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between fuel economy and fuel efficiency?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fuel economy and fuel efficiency are often used interchangeably. Technically, fuel economy refers to the distance traveled per unit of fuel (MPG, km/L), while fuel efficiency can also refer to how completely fuel is burned in the engine.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Fuel Economy Calculator - Check Vehicle Fuel Efficiency",
  description: "Free fuel economy calculator to measure your vehicle's fuel efficiency. Convert between MPG, km/L, and L/100km. Check and improve your fuel economy rating.",
  keywords: [
    "fuel economy calculator",
    "fuel efficiency calculator",
    "vehicle fuel economy",
    "check fuel economy",
    "fuel economy rating",
    "mpg to km/l converter",
    "fuel efficiency rating",
    "improve fuel economy",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/fuel-economy-calculator',
  },
  openGraph: {
    title: "Fuel Economy Calculator - Check Vehicle Fuel Efficiency",
    description: "Measure your vehicle's fuel economy and efficiency. Convert between MPG, km/L, and L/100km with our free fuel economy calculator.",
    url: 'https://www.nextcodehub.com/fuel-economy-calculator',
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
            Fuel Economy Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Measure your vehicle&apos;s true fuel economy. Convert between MPG, km/L, and L/100km to understand how efficiently your car uses fuel and identify ways to improve.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          {/* What is fuel economy */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Fuel Economy?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fuel economy</strong> measures how far a vehicle can travel on a unit of fuel under standard conditions. It is the single most important factor in determining your long-term fuel costs. Better fuel economy means spending less at the pump.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Governments worldwide publish official fuel economy ratings for new vehicles. In the US, the EPA provides city/highway/combined ratings. In the EU, ratings follow the WLTP standard. Our fuel economy calculator lets you measure your real-world fuel economy to compare against official figures.
            </p>
          </section>

          {/* Fuel economy conversion chart */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Fuel Economy Conversion Chart (MPG ↔ km/L ↔ L/100km)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">US MPG</th>
                    <th className="text-left p-3">UK MPG</th>
                    <th className="text-left p-3">km/L</th>
                    <th className="text-left p-3 rounded-tr-lg">L/100km</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['20 MPG', '24.0', '8.5', '11.76'],
                    ['25 MPG', '30.0', '10.6', '9.41'],
                    ['30 MPG', '36.0', '12.8', '7.84'],
                    ['35 MPG', '42.0', '14.9', '6.72'],
                    ['40 MPG', '48.0', '17.0', '5.88'],
                    ['50 MPG', '60.0', '21.3', '4.70'],
                  ].map(([us, uk, kml, l100]) => (
                    <tr key={us} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{us}</td>
                      <td className="p-3 text-gray-600">{uk}</td>
                      <td className="p-3 text-gray-600">{kml}</td>
                      <td className="p-3 text-gray-600">{l100}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to improve fuel economy */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">10 Ways to Improve Your Fuel Economy</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ['Maintain tire pressure', 'Under-inflated tires can reduce fuel economy by up to 3%.'],
                ['Drive at moderate speed', 'Each 5 mph over 50 mph reduces economy by 7–14%.'],
                ['Avoid rapid acceleration', 'Smooth acceleration improves economy by up to 15%.'],
                ['Use cruise control', 'Maintains steady speed and improves highway economy.'],
                ['Remove excess weight', 'Every 100 lbs reduces fuel economy by 1–2%.'],
                ['Avoid prolonged idling', 'Modern engines use less fuel when restarted vs idling.'],
                ['Use recommended oil', 'Using the right motor oil grade improves economy by 1–2%.'],
                ['Keep air filter clean', 'A clogged filter can reduce economy by 10%.'],
                ['Plan routes efficiently', 'Combine errands and avoid traffic to reduce total distance.'],
                ['Park in shade', 'Reduces fuel evaporation and decreases AC need on startup.'],
              ].map(([tip, detail]) => (
                <div key={tip} className="flex gap-3 items-start p-3 rounded-xl hover:bg-gray-50">
                  <svg className="flex-shrink-0 text-green-500 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{tip}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What does fuel economy mean?</h3>
                <p className="text-gray-600">Fuel economy is how far your vehicle travels per unit of fuel (MPG, km/L). Higher values = better economy = less fuel cost.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I improve my vehicle&apos;s fuel economy?</h3>
                <p className="text-gray-600">Keep tires inflated, drive at 55–65 mph, maintain your engine, use the right motor oil, and avoid idling. These changes can improve economy by 10–25%.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What is the difference between fuel economy and fuel efficiency?</h3>
                <p className="text-gray-600">Used interchangeably — both measure distance per unit of fuel. Fuel economy (MPG, km/L) is the practical consumer metric; fuel efficiency sometimes refers to engine combustion efficiency.</p>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}