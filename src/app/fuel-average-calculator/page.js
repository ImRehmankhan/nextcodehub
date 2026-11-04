import FuelAverageCalculator from '../../components/FuelAverageCalculator';
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
          name: 'Fuel Average Calculator',
          item: 'https://www.nextcodehub.com/fuel-average-calculator',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/fuel-average-calculator',
      name: 'Fuel Average Calculator',
      url: 'https://www.nextcodehub.com/fuel-average-calculator',
      description: 'Free fuel average calculator for petrol average and fuel average calculations. Track your vehicle\'s fuel average in km/L or MPG.',
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
          name: 'What is fuel average?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fuel average is the average distance your vehicle covers per unit of fuel, expressed as km/L (kilometer per liter) or MPG (miles per gallon). It is also called petrol average or mileage.' },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate my vehicle\'s fuel average?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate fuel average, fill your tank completely, note the odometer, drive normally, then refill and note: (Distance driven) ÷ (Fuel consumed) = Fuel Average in km/L.' },
        },
        {
          '@type': 'Question',
          name: 'What is a good fuel average for a petrol car?',
          acceptedAnswer: { '@type': 'Answer', text: 'A good fuel average for a petrol car is 12–16 km/L for sedans. Motorcycles achieve 30–60 km/L. Hybrids get 18–25 km/L. SUVs typically get 8–12 km/L.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Fuel Average Calculator: Calculate Petrol Average (km/L)",
  description: "Calculate your vehicle's average fuel consumption in km/L or MPG easily. Enter odometer distance and fuel filled to see your exact petrol average.",
  alternates: {
    canonical: 'https://www.nextcodehub.com/fuel-average-calculator',
  },
  openGraph: {
    title: "Fuel Average Calculator - Petrol Average & Mileage Calculator",
    description: "Calculate your vehicle's fuel average (petrol average) in km/L or MPG with our free fuel average calculator.",
    url: 'https://www.nextcodehub.com/fuel-average-calculator',
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
        <Breadcrumbs items={[{ name: 'Fuel Average Calculator' }]} />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Fuel Average Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your vehicle&apos;s fuel average (petrol average) in km/L or MPG. Track your average fuel consumption over time and see if your car is performing at its best.
          </p>
        </div>

        <FuelAverageCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Fuel Average?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Fuel average</strong> — also called <strong>petrol average</strong> or simply &quot;mileage&quot; — is the average distance your vehicle travels per liter of fuel (km/L) or per gallon (MPG). It is the most commonly tracked vehicle metric for understanding fuel costs and vehicle performance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              A higher fuel average means your vehicle is more efficient. If your petrol average drops over time, it could signal engine problems, tire issues, or a change in driving habits. Our fuel average calculator lets you track these changes precisely.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Fuel Average Formula</h3>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg space-y-1">
                <p>Fuel Average (km/L) = Total Distance (km) ÷ Total Fuel Used (L)</p>
                <p className="text-gray-400 mt-2">Example: 400 km ÷ 25 L = <span className="text-yellow-400">16 km/L</span> fuel average</p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Average Petrol Average by Vehicle Type</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { v: 'Motorcycle (125cc–250cc)', avg: '35–60 km/L' },
                { v: 'Motorcycle (400cc+)', avg: '20–35 km/L' },
                { v: 'Small Hatchback', avg: '16–22 km/L' },
                { v: 'Sedan / Saloon', avg: '12–17 km/L' },
                { v: 'Compact SUV', avg: '10–14 km/L' },
                { v: 'Large SUV / 4WD', avg: '7–10 km/L' },
                { v: 'Pickup Truck', avg: '6–10 km/L' },
                { v: 'Petrol Hybrid', avg: '18–26 km/L' },
              ].map(({ v, avg }) => (
                <div key={v} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-gray-900 text-sm font-medium">{v}</span>
                  <span className="font-bold text-primary-700 text-sm">{avg}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Is My Fuel Average Dropping?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A declining petrol average is one of the earliest warning signs of vehicle issues. Common causes include:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Dirty or clogged air filter',
                'Under-inflated tires',
                'Worn spark plugs',
                'Low-quality fuel',
                'Heavy traffic / frequent stops',
                'Excess vehicle weight',
                'Faulty oxygen sensor',
                'Poor wheel alignment',
              ].map((cause) => (
                <div key={cause} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500 flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                  <span className="text-sm text-red-800">{cause}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What is fuel average?</h3>
                <p className="text-gray-600">Fuel average is the average km traveled per liter of petrol (or miles per gallon). Also called petrol average or mileage. Higher = more efficient.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate my vehicle&apos;s fuel average?</h3>
                <p className="text-gray-600">Fill tank → drive → refill → note km driven and liters added. Divide km by liters = fuel average. Example: 400 km ÷ 25 L = 16 km/L.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What is a good fuel average for a petrol car?</h3>
                <p className="text-gray-600">12–16 km/L for sedans is average. Hybrids get 18–25 km/L. Motorcycles achieve 30–60 km/L. SUVs typically get 8–12 km/L.</p>
              </div>
            </div>
          </section>

          {/* How to check fuel average for popular car models */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Popular Car Models & Their Expected Fuel Average</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              While every vehicle&apos;s real-world <strong>fuel average</strong> depends on driving conditions, here are the manufacturer-claimed fuel averages for some popular car models in Asia, the UK, and the US. Use our fuel average calculator to measure your actual figures:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Car Model</th>
                    <th className="text-left p-3">Claimed km/L</th>
                    <th className="text-left p-3">Real-World km/L</th>
                    <th className="text-left p-3 rounded-tr-lg">Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Toyota Corolla (2024)', '16 km/L', '13–15 km/L', 'Sedan'],
                    ['Honda Civic (2024)', '17 km/L', '14–16 km/L', 'Compact Sedan'],
                    ['Suzuki Alto (660cc)', '22 km/L', '18–20 km/L', 'Mini Hatchback'],
                    ['Toyota Prius Hybrid', '28 km/L', '22–26 km/L', 'Hybrid Sedan'],
                    ['Honda CR-V (Petrol)', '13 km/L', '10–12 km/L', 'Compact SUV'],
                    ['Suzuki Wagon R', '20 km/L', '16–18 km/L', 'Micro Van'],
                    ['Yamaha YBR 125', '45 km/L', '38–43 km/L', 'Motorcycle'],
                    ['Honda CD 70 (Moped)', '55 km/L', '48–52 km/L', 'Moped'],
                  ].map(([model, claimed, realWorld, cat]) => (
                    <tr key={model} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{model}</td>
                      <td className="p-3 text-blue-600 font-semibold">{claimed}</td>
                      <td className="p-3 text-green-700 font-semibold">{realWorld}</td>
                      <td className="p-3 text-gray-500 text-xs">{cat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">*Real-world figures based on mixed city/highway driving. Use our fuel average calculator to measure your actual vehicle performance.</p>
          </section>

          {/* Seasonal fuel average variation */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Seasons & Weather Affect Your Fuel Average</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your <strong>petrol average</strong> naturally varies throughout the year. Understanding seasonal variation helps you set realistic expectations and distinguish normal variation from actual mechanical problems:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  season: '🌸 Spring & Autumn', avgImpact: 'Best fuel average season', detail: 'Mild temperatures mean minimal heating/AC use, optimal tire pressure, and efficient combustion. Expect your best petrol average results.',
                  color: 'green'
                },
                {
                  season: '☀️ Summer Heat', avgImpact: '5–10% lower fuel average', detail: 'Air conditioning load increases fuel consumption significantly. In very hot climates, AC alone can reduce your fuel average by 15–20%.',
                  color: 'yellow'
                },
                {
                  season: '❄️ Winter Cold', avgImpact: '10–30% lower fuel average', detail: 'Cold engines use more fuel to warm up. Winter-blend gasoline has lower energy content. Thicker oil creates more engine friction.',
                  color: 'blue'
                },
                {
                  season: '🌧️ Rainy Season', avgImpact: '5–10% lower fuel average', detail: 'Wet roads increase rolling resistance. Headlights, wipers, and defogger all add electrical load. Speed reductions in heavy rain also affect efficiency.',
                  color: 'gray'
                },
              ].map(({ season, avgImpact, detail }) => (
                <div key={season} className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <p className="font-bold text-gray-900 text-sm">{season}</p>
                  <p className="text-primary-700 font-semibold text-xs mt-1">{avgImpact}</p>
                  <p className="text-gray-500 text-xs mt-2">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fuel average vs fuel cost calculator guide */}
          <section className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl border border-indigo-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fuel Average Calculator vs Fuel Cost Calculator: Which Should You Use?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Both calculators are related but answer different questions. Here&apos;s when to use each:
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="bg-white p-5 rounded-xl border border-indigo-100">
                <h3 className="font-bold text-indigo-900 mb-3">📊 Fuel Average Calculator — Use When:</h3>
                <ul className="space-y-2">
                  {[
                    'You want to know HOW EFFICIENT your vehicle is',
                    'You\'ve just refueled and want to log your km/L or MPG',
                    'You suspect your mileage has dropped after a trip or service',
                    'You\'re comparing your vehicle\'s performance over time',
                    'You want to see if your driving habits are improving',
                  ].map(use => (
                    <li key={use} className="flex gap-2 text-xs text-gray-600 items-start">
                      <svg className="flex-shrink-0 text-indigo-500 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-5 rounded-xl border border-indigo-100">
                <h3 className="font-bold text-blue-900 mb-3">💰 Fuel Cost Calculator — Use When:</h3>
                <ul className="space-y-2">
                  {[
                    'You want to know HOW MUCH MONEY a trip will cost',
                    'You\'re planning a road trip and need a fuel budget',
                    'You want to compare fuel cost between two vehicles',
                    'You need to calculate monthly or annual fuel expense',
                    'You\'re calculating reimbursement for business travel',
                  ].map(use => (
                    <li key={use} className="flex gap-2 text-xs text-gray-600 items-start">
                      <svg className="flex-shrink-0 text-blue-500 mt-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {use}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
