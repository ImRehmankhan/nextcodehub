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
  title: "Fuel Consumption Calculator: Gas Per Mile & L/100km",
  description: "Calculate your vehicle's fuel consumption in L/100km, km/L, or MPG. Estimate gas burned per mile and total fuel required for any journey accurately.",
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

          {/* Eco-driving to reduce fuel consumption */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Eco-Driving: The Fastest Way to Reduce Fuel Consumption</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Eco-driving</strong> is a set of scientifically proven driving techniques that can reduce your fuel consumption by 10–25% without any modifications to your vehicle. Use our fuel consumption calculator before and after adopting these habits to measure the savings:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { habit: 'Smooth Acceleration', consumption: '-15% fuel consumption', desc: 'Gradually press the accelerator over 5+ seconds instead of rapid flooring. The #1 most impactful eco-driving behavior.' },
                { habit: 'Anticipatory Braking', consumption: '-10% fuel consumption', desc: 'Look ahead and lift off the throttle early. Coasting to a stop rather than braking hard recaptures kinetic energy.' },
                { habit: 'Optimal Speed (90 km/h)', consumption: '-20% vs 120 km/h', desc: 'Aerodynamic drag increases exponentially with speed. Reducing highway speed from 120 to 90 km/h cuts fuel consumption significantly.' },
                { habit: 'Higher Gear Early', consumption: '-8% fuel consumption', desc: 'Shift to the highest gear as soon as possible (petrol: 2,000 RPM; diesel: 1,500 RPM). Higher gears reduce engine RPM and fuel flow rate.' },
                { habit: 'Engine Off When Parked', consumption: '-0.5L per hour', desc: 'Idling burns 0.5–1 liter per hour with zero distance covered. Turn off the engine for stops longer than 60 seconds.' },
                { habit: 'Reduce AC Use', consumption: '-10% city driving', desc: 'Air conditioning increases fuel consumption by up to 20% in city driving. Park in shade, use window shades, or ventilate before entering the car.' },
              ].map(({ habit, consumption, desc }) => (
                <div key={habit} className="p-4 bg-green-50 border border-green-100 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-gray-900 text-sm">{habit}</p>
                    <span className="text-green-700 text-xs font-bold bg-green-200 px-2 py-0.5 rounded-full ml-2 flex-shrink-0">{consumption}</span>
                  </div>
                  <p className="text-gray-600 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fuel consumption for commercial use */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fuel Consumption for Commercial & Professional Drivers</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For commercial drivers, accurate <strong>fuel consumption</strong> data is essential for pricing services, managing expenses, and maximizing profitability. Here&apos;s how to apply our fuel consumption calculator to different professional scenarios:
            </p>
            <div className="space-y-4">
              {[
                {
                  type: '🚗 Rideshare Driver (Uber/Lyft)',
                  guide: [
                    'Track consumption per 100 miles to calculate your real cost per mile',
                    'Compare your actual gas per mile against platform reimbursement rates',
                    'Calculate break-even point: how many rides needed to cover fuel expense',
                    'Identify peak hours where fuel consumption spikes due to heavy traffic',
                  ]
                },
                {
                  type: '🚚 Delivery Driver (DoorDash, Amazon Flex)',
                  guide: [
                    'Calculate fuel consumption per delivery zone to optimize route selection',
                    'Track how stop-and-go delivery routing affects your L/100km vs highway runs',
                    'Log daily fuel consumption to compare against weekly delivery earnings',
                    'Use fuel consumption data to negotiate delivery zone pay rates',
                  ]
                },
                {
                  type: '🏢 Business Fleet Manager',
                  guide: [
                    'Set fuel consumption benchmarks per vehicle class and route type',
                    'Identify vehicles with abnormally high fuel consumption for maintenance',
                    'Calculate monthly fleet fuel budget using consumption × local fuel price',
                    'Compare driver-to-driver fuel consumption to identify training opportunities',
                  ]
                },
              ].map(({ type, guide }) => (
                <div key={type} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3 text-sm">{type}</h3>
                  <ul className="space-y-2">
                    {guide.map(g => (
                      <li key={g} className="flex gap-2 items-start text-xs text-gray-600">
                        <svg className="flex-shrink-0 text-primary-500 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        {g}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Fuel consumption across transportation types */}
          <section className="bg-gradient-to-br from-slate-800 to-gray-900 p-8 rounded-2xl text-white">
            <h2 className="text-2xl font-bold mb-4">Fuel Consumption Comparison: Cars, Trucks, Buses & Motorcycles</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Understanding how fuel consumption varies across transportation types helps you make more informed mobility choices. This data shows average fuel consumption in liters per 100 passenger-kilometers — a standardized measure accounting for the number of people transported:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { transport: '🚲 Bicycle (E-Bike)', consumption: '~0 L/100km', efficiency: '⭐⭐⭐⭐⭐ Zero fuel' },
                { transport: '🏍️ Motorcycle (125cc)', consumption: '2.5–4 L/100km', efficiency: '⭐⭐⭐⭐⭐ Excellent' },
                { transport: '🚌 Full Bus (50 pax)', consumption: '1.5–2 L/100pkm', efficiency: '⭐⭐⭐⭐ Very Good' },
                { transport: '🚗 Compact Car (4 pax)', consumption: '2.0–3.0 L/100pkm', efficiency: '⭐⭐⭐⭐ Good' },
                { transport: '🚗 Solo Driver (30 MPG)', consumption: '7.8 L/100km', efficiency: '⭐⭐⭐ Average' },
                { transport: '🚙 Solo SUV Driver', consumption: '11–15 L/100km', efficiency: '⭐⭐ Poor' },
                { transport: '✈️ Short-Haul Flight', consumption: '3–4 L/100pkm', efficiency: '⭐⭐ Moderate' },
                { transport: '🚛 18-Wheeler Truck', consumption: '35–50 L/100km', efficiency: '⭐ High total (low per ton)' },
              ].map(({ transport, consumption, efficiency }) => (
                <div key={transport} className="bg-white/10 p-3 rounded-xl flex justify-between items-center">
                  <div>
                    <p className="font-medium text-white text-sm">{transport}</p>
                    <p className="text-gray-400 text-xs">{consumption}</p>
                  </div>
                  <span className="text-xs text-gray-300 text-right">{efficiency}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Fuel Consumption to CO2 emissions impact */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Fuel Consumption &amp; Carbon Footprint (CO2 Emissions per km)
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Your vehicle&apos;s fuel consumption directly dictates its greenhouse gas emissions. Gasoline and diesel combustion follow fixed chemical stoichiometric ratios:
            </p>
            <div className="grid md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
                <h3 className="font-bold text-amber-900 text-sm mb-1">⛽ Gasoline (Petrol) Emissions</h3>
                <p className="text-xs text-amber-800 leading-relaxed mb-2">
                  Burning <strong>1 Liter</strong> of unleaded gasoline produces approximately <strong>2.31 kg of CO2</strong> (or 8.89 kg CO2 per US gallon).
                </p>
                <div className="font-mono text-xs bg-amber-100/70 p-2.5 rounded-lg text-amber-900">
                  CO2 (g/km) = L/100km × 23.1
                  <br />
                  <span className="text-amber-700">Example: 7.0 L/100km = 161.7 g CO2/km</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-100 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm mb-1">🛢️ Diesel Fuel Emissions</h3>
                <p className="text-xs text-slate-700 leading-relaxed mb-2">
                  Burning <strong>1 Liter</strong> of standard diesel fuel generates roughly <strong>2.68 kg of CO2</strong> (or 10.16 kg CO2 per US gallon).
                </p>
                <div className="font-mono text-xs bg-slate-200/70 p-2.5 rounded-lg text-slate-800">
                  CO2 (g/km) = L/100km × 26.8
                  <br />
                  <span className="text-slate-600">Example: 5.5 L/100km = 147.4 g CO2/km</span>
                </div>
              </div>
            </div>
          </section>

          {/* International Fuel Consumption Testing Cycles */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Why Official Fuel Consumption Ratings Differ (WLTP vs. EPA vs. NEDC)
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              If you look up your vehicle&apos;s manufacturer specifications, you might notice different L/100km numbers across different regions. This is because testing cycles apply different speeds, acceleration profiles, and air conditioner settings:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <p className="font-bold text-gray-900 text-sm">US EPA Test</p>
                <p className="text-gray-600">Includes 5 distinct test cycles: city, highway, high speed (up to 80 mph), rapid acceleration, and AC running in 95°F heat. Most closely mirrors realistic driving.</p>
                <span className="inline-block font-semibold text-primary-700 bg-primary-50 px-2 py-0.5 rounded">Closest to real world</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <p className="font-bold text-gray-900 text-sm">European WLTP</p>
                <p className="text-gray-600">Replaced the outdated NEDC in 2018. Features 4 test phases with higher maximum speed (131 km/h) and real vehicle optional equipment weights included.</p>
                <span className="inline-block font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Europe &amp; Global standard</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 space-y-2">
                <p className="font-bold text-gray-900 text-sm">Older NEDC Test</p>
                <p className="text-gray-600">Laboratory bench test with slow acceleration and zero auxiliary electric loads. Underestimates real-world fuel consumption by 25% to 35%.</p>
                <span className="inline-block font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded">Often optimistic</span>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}