import FuelEfficiencyCalculator from '../../components/FuelEfficiencyCalculator';
import RelatedLinks from '../../components/RelatedLinks';
import Breadcrumbs from '../../components/Breadcrumbs';

const jsonLd = {
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
          name: 'Fuel Efficiency Calculator',
          item: 'https://www.nextcodehub.com/fuel-efficiency-calculator',
        },
      ],
    },
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
  title: "Fuel Efficiency Calculator: Measure Vehicle Efficiency",
  description: "Measure vehicle fuel efficiency in MPG, km/L, or L/100km. Track efficiency changes, calculate gas savings, and optimize vehicle fuel performance for free.",
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
        <Breadcrumbs items={[{ name: 'Fuel Efficiency Calculator' }]} />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Fuel Efficiency Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Measure your vehicle&apos;s fuel efficiency in MPG, km/L, or L/100km. Track how efficiently your car uses fuel and discover actionable ways to improve it.
          </p>
        </div>

        <FuelEfficiencyCalculator />

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

          {/* Long-term fuel savings */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Fuel Efficiency Improvement Saves You Thousands Over Time</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Even a small improvement in <strong>fuel efficiency</strong> translates into significant long-term savings. The table below shows how much you save annually by improving fuel efficiency, assuming 15,000 km/year driven at $1.50/liter:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Efficiency Improvement</th>
                    <th className="text-left p-3">Annual Savings</th>
                    <th className="text-left p-3">5-Year Savings</th>
                    <th className="text-left p-3 rounded-tr-lg">10-Year Savings</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['From 10 km/L to 12 km/L', '$375/yr', '$1,875', '$3,750'],
                    ['From 10 km/L to 14 km/L', '$643/yr', '$3,215', '$6,430'],
                    ['From 12 km/L to 15 km/L', '$375/yr', '$1,875', '$3,750'],
                    ['From 12 km/L to 20 km/L', '$900/yr', '$4,500', '$9,000'],
                    ['From 8 km/L to 12 km/L', '$750/yr', '$3,750', '$7,500'],
                  ].map(([improvement, yr, five, ten]) => (
                    <tr key={improvement} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{improvement}</td>
                      <td className="p-3 text-emerald-600 font-bold">{yr}</td>
                      <td className="p-3 text-emerald-700 font-medium">{five}</td>
                      <td className="p-3 text-emerald-800 font-bold">{ten}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">*Calculated at $1.50/L and 15,000 km/year. Adjust for your local fuel price using our fuel efficiency calculator above.</p>
          </section>

          {/* Advanced driving techniques */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Driving Techniques to Maximize Fuel Efficiency</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beyond basic driving advice, these advanced <strong>hypermiling</strong> techniques — used by fuel efficiency champions — can significantly boost your km/L or MPG figures. Track improvements using our fuel efficiency calculator:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { technique: 'Pulse and Glide', gain: '+15–25% efficiency', desc: 'Accelerate to target speed, then let the car coast (glide) in neutral before the next acceleration pulse. Works best at 30–60 km/h.' },
                { technique: 'Draft Behind Large Vehicles', gain: '+10–20% efficiency', desc: 'Following 2–3 car lengths behind a truck on highways reduces wind resistance. Safety note: maintain safe following distance.' },
                { technique: 'Engine Off Coasting (EOC)', gain: '+5–10% efficiency', desc: 'Turn ignition to ACC position when coasting downhill to stop fuel injection. Only for manual transmissions on long descents.' },
                { technique: 'Over-Inflation of Tires', gain: '+1–3% efficiency', desc: 'Inflate to 10% above the recommended PSI (not max). Reduces rolling resistance slightly. Check handling before doing this.' },
                { technique: 'Anticipatory Driving', gain: '+10–15% efficiency', desc: 'Look 12+ seconds ahead on the road. Lift off the accelerator early before stops to glide to a halt instead of braking.' },
                { technique: 'Optimal Gear Shifting', gain: '+5–10% efficiency', desc: 'Keep engine RPMs between 1,500–2,000 for petrol engines. Shift up as early as possible. Use the highest gear appropriate for your speed.' },
              ].map(({ technique, gain, desc }) => (
                <div key={technique} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-gray-900 text-sm">{technique}</p>
                    <span className="text-green-700 text-xs font-bold bg-green-100 px-2 py-0.5 rounded-full flex-shrink-0 ml-2">{gain}</span>
                  </div>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fuel efficiency comparison: petrol vs diesel vs hybrid */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fuel Efficiency Comparison: Petrol vs Diesel vs Hybrid</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Choosing the right powertrain is the single biggest decision affecting your long-term fuel efficiency. Here is how the main powertrain types compare in real-world conditions:
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  type: 'Petrol Engine', emoji: '⛽', efficiency: '10–16 km/L', cost: 'Medium', pros: ['Lower purchase price', 'Wide availability', 'Simpler maintenance'], cons: ['Lower fuel efficiency vs diesel', 'Higher CO₂ emissions', 'More frequent refueling'],
                  color: 'blue'
                },
                {
                  type: 'Diesel Engine', emoji: '🛢️', efficiency: '14–22 km/L', cost: 'Medium-High', pros: ['Best long-distance efficiency', 'Lower CO₂ than petrol', 'Greater torque/towing capacity'], cons: ['Higher purchase price', 'More expensive servicing', 'Urban driving not ideal'],
                  color: 'gray'
                },
                {
                  type: 'Petrol Hybrid', emoji: '🔋', efficiency: '18–28 km/L', cost: 'High', pros: ['Excellent city fuel efficiency', 'Lower fuel cost over time', 'Regenerative braking'], cons: ['Higher purchase price', 'Battery replacement cost', 'Less efficient on highways'],
                  color: 'green'
                },
              ].map(({ type, emoji, efficiency, pros, cons, color }) => (
                <div key={type} className={`p-5 rounded-xl border-2 ${color === 'green' ? 'border-green-200 bg-green-50' : color === 'blue' ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
                  <p className="text-2xl mb-2">{emoji}</p>
                  <h3 className="font-bold text-gray-900 mb-1">{type}</h3>
                  <p className="text-sm font-semibold text-primary-700 mb-3">{efficiency} typical efficiency</p>
                  <div className="space-y-1 mb-3">
                    {pros.map(p => <p key={p} className="text-xs text-green-800 flex gap-1"><span>✅</span>{p}</p>)}
                  </div>
                  <div className="space-y-1">
                    {cons.map(c => <p key={c} className="text-xs text-red-800 flex gap-1"><span>❌</span>{c}</p>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fuel efficiency standards globally */}
          <section className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Global Fuel Efficiency Standards & What They Mean for You</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Governments worldwide set mandatory fuel efficiency standards for new vehicles. These standards directly affect which cars manufacturers produce and which models are available for purchase. Understanding these standards helps you evaluate whether your vehicle meets modern efficiency benchmarks:
            </p>
            <div className="space-y-3">
              {[
                { country: '🇺🇸 United States (CAFE)', standard: '49 MPG (combined) by 2026', detail: 'The Corporate Average Fuel Economy standard requires automakers to hit fleet average targets. Individual car results vary widely.' },
                { country: '🇪🇺 European Union (WLTP)', standard: '95 g CO₂/km ≈ 24 km/L', detail: 'EU CO₂ emission targets translate directly to fuel efficiency mandates. Stricter regulations are planned through 2035.' },
                { country: '🇬🇧 United Kingdom (WLTP)', standard: 'Aligned with EU standards', detail: 'Post-Brexit, the UK follows similar efficiency standards with its own ZEV mandate requiring 22% electric sales by 2024.' },
                { country: '🇮🇳 India (CAFE)', standard: '5.5 L/100km ≈ 18.2 km/L', detail: 'India\'s Corporate Average Fuel Efficiency standards are being progressively tightened, driving the market toward smaller, more efficient petrol cars.' },
                { country: '🇨🇳 China (GB)', standard: '4.6 L/100km ≈ 21.7 km/L', detail: 'China has among the world\'s strictest fuel efficiency standards for passenger vehicles, accelerating the shift to NEVs (New Energy Vehicles).' },
              ].map(({ country, standard, detail }) => (
                <div key={country} className="bg-white p-4 rounded-xl flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <p className="font-bold text-gray-900 text-sm">{country}</p>
                    <p className="text-purple-700 font-semibold text-xs">{standard}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
