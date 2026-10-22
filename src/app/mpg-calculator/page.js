import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/mpg-calculator',
      name: 'MPG Calculator - Miles Per Gallon Calculator',
      url: 'https://www.nextcodehub.com/mpg-calculator',
      description: 'Free MPG calculator to calculate miles per gallon for any vehicle. Accurate miles per gallon calculator for US and UK drivers.',
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
          name: 'How do I calculate miles per gallon (MPG)?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate MPG, divide the miles driven by the gallons of gas used. For example, 300 miles on 10 gallons = 30 MPG. Our MPG calculator automates this for you.' },
        },
        {
          '@type': 'Question',
          name: 'What is a good MPG for a car?',
          acceptedAnswer: { '@type': 'Answer', text: 'A good MPG for a standard car is 30–40 MPG for highway driving. Cars getting above 40 MPG are considered fuel efficient. Hybrids can achieve 50+ MPG.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between US MPG and UK MPG?',
          acceptedAnswer: { '@type': 'Answer', text: 'US MPG uses the US gallon (3.785 liters), while UK MPG uses the imperial gallon (4.546 liters). A car rated at 30 US MPG is about 36 UK MPG. Our calculator handles both.' },
        },
        {
          '@type': 'Question',
          name: 'How do I improve my MPG?',
          acceptedAnswer: { '@type': 'Answer', text: 'You can improve your miles per gallon by maintaining proper tire pressure, reducing highway speed, avoiding rapid acceleration, removing unnecessary weight, and keeping up with regular vehicle maintenance.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "MPG Calculator: Calculate Exact Miles Per Gallon [Free]",
  description: "Calculate your car's exact miles per gallon (MPG) instantly. Supports US and UK imperial gallons, cost per mile, and fuel efficiency tracking. Fast & Free.",
  keywords: [
    "mpg calculator",
    "miles per gallon calculator",
    "gas mileage calculator",
    "gas mileage estimator",
    "fuel efficiency calculator",
    "mpg calculator free",
    "calculate miles per gallon",
    "car mpg calculator",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/mpg-calculator',
  },
  openGraph: {
    title: "MPG Calculator - Free Miles Per Gallon Calculator",
    description: "Calculate miles per gallon (MPG) for any vehicle with our free MPG calculator. Track fuel efficiency and estimate gas costs.",
    url: 'https://www.nextcodehub.com/mpg-calculator',
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
            MPG Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your vehicle&apos;s miles per gallon (MPG) accurately. Track fuel efficiency, compare vehicles, and estimate gas costs with our free miles per gallon calculator.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          {/* What is MPG */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is MPG (Miles Per Gallon)?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Miles per gallon (MPG)</strong> is the standard measure of fuel efficiency used in the United States and United Kingdom. It tells you how many miles your vehicle can travel on one gallon of fuel. A higher MPG means your car is more fuel efficient and costs less to run.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The EPA (Environmental Protection Agency) tests every new car sold in the US and provides city and highway MPG ratings. Our <strong>MPG calculator</strong> lets you measure your real-world miles per gallon based on actual fuel fill-ups.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">MPG Formula</h3>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg">
                <p>MPG = Miles Driven ÷ Gallons of Gas Used</p>
                <p className="mt-2 text-gray-400">Example: 300 miles ÷ 10 gallons = 30 MPG</p>
              </div>
            </div>
          </section>

          {/* MPG Benchmarks */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">MPG Benchmarks by Vehicle Class</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Vehicle Class</th>
                    <th className="text-left p-3">City MPG</th>
                    <th className="text-left p-3">Highway MPG</th>
                    <th className="text-left p-3 rounded-tr-lg">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Electric Vehicle', 'N/A', 'N/A', '⭐⭐⭐⭐⭐ Excellent'],
                    ['Hybrid Car', '40 – 55', '45 – 60', '⭐⭐⭐⭐⭐ Excellent'],
                    ['Compact Car', '28 – 35', '35 – 45', '⭐⭐⭐⭐ Great'],
                    ['Midsize Sedan', '22 – 30', '30 – 40', '⭐⭐⭐ Average'],
                    ['SUV / Crossover', '18 – 25', '25 – 32', '⭐⭐ Below Avg'],
                    ['Full-Size Truck', '14 – 20', '18 – 26', '⭐ Poor'],
                  ].map(([cls, city, hwy, rating]) => (
                    <tr key={cls} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{cls}</td>
                      <td className="p-3 text-gray-600">{city}</td>
                      <td className="p-3 text-gray-600">{hwy}</td>
                      <td className="p-3 text-gray-600 text-xs">{rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* US vs UK MPG */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">US MPG vs UK MPG Explained</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-2">🇺🇸 US Gallon (3.785 L)</h3>
                <p className="text-blue-800 text-sm mb-3">Standard US MPG uses the US liquid gallon. Most American cars, trucks, and gas stations use this measurement.</p>
                <p className="font-mono text-xs text-blue-900 bg-blue-100 p-2 rounded">30 US MPG = 36.04 UK MPG</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-2">🇬🇧 UK Imperial Gallon (4.546 L)</h3>
                <p className="text-green-800 text-sm mb-3">UK MPG uses the larger imperial gallon. British fuel economy figures are typically higher than US MPG for the same vehicle.</p>
                <p className="font-mono text-xs text-green-900 bg-green-100 p-2 rounded">30 UK MPG = 24.95 US MPG</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate miles per gallon (MPG)?</h3>
                <p className="text-gray-600">Divide miles driven by gallons used: 300 miles ÷ 10 gallons = 30 MPG. Or simply use our MPG calculator above.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What is a good MPG for a car?</h3>
                <p className="text-gray-600">30–40 MPG is considered good for highway driving in a regular car. Above 40 MPG is fuel efficient. Hybrids achieve 50+ MPG.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I improve my MPG?</h3>
                <p className="text-gray-600">Maintain proper tire pressure, reduce highway speed to 60 mph, avoid rapid acceleration, remove unnecessary weight, and service your engine regularly.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What is the difference between US MPG and UK MPG?</h3>
                <p className="text-gray-600">US MPG uses a 3.785L gallon; UK MPG uses a 4.546L imperial gallon. A car at 30 US MPG equals ~36 UK MPG.</p>
              </div>
            </div>
          </section>

          {/* Cost per mile analysis */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Cost Per Mile by MPG & Gas Price</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Understanding your <strong>cost per mile</strong> is critical for budgeting commutes, road trips, and business mileage reimbursements. The table below shows fuel cost per mile at various MPG ratings and gas prices:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Your MPG</th>
                    <th className="text-center p-3">At $3.00/gal</th>
                    <th className="text-center p-3">At $4.00/gal</th>
                    <th className="text-center p-3 rounded-tr-lg">At $5.00/gal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['15 MPG', '$0.20/mi', '$0.27/mi', '$0.33/mi'],
                    ['20 MPG', '$0.15/mi', '$0.20/mi', '$0.25/mi'],
                    ['25 MPG', '$0.12/mi', '$0.16/mi', '$0.20/mi'],
                    ['30 MPG', '$0.10/mi', '$0.13/mi', '$0.17/mi'],
                    ['40 MPG', '$0.08/mi', '$0.10/mi', '$0.13/mi'],
                    ['50 MPG', '$0.06/mi', '$0.08/mi', '$0.10/mi'],
                  ].map(([mpg, c3, c4, c5]) => (
                    <tr key={mpg} className="hover:bg-gray-50">
                      <td className="p-3 font-bold text-gray-900">{mpg}</td>
                      <td className="p-3 text-center text-gray-600">{c3}</td>
                      <td className="p-3 text-center text-orange-600 font-medium">{c4}</td>
                      <td className="p-3 text-center text-red-600 font-medium">{c5}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">*The IRS standard mileage rate for 2024 is 67 cents/mile, which includes fuel, maintenance, and depreciation costs.</p>
          </section>

          {/* Real-world MPG vs EPA */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World MPG vs EPA Rated MPG: What to Expect</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The MPG rating on your vehicle&apos;s window sticker is measured under controlled laboratory conditions. Your real-world <strong>miles per gallon</strong> will vary significantly based on how and where you drive. Here&apos;s what affects the gap between official and real-world MPG:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { factor: 'Highway Speed', epaVsReal: 'EPA tests at 48 mph avg; real highways are 65–75 mph', impact: 'Real MPG 10–25% lower' },
                { factor: 'Air Conditioning', epaVsReal: 'EPA test has limited AC usage; real-world AC is constant', impact: 'Real MPG 5–20% lower' },
                { factor: 'Cold Weather', epaVsReal: 'EPA tests in controlled temperature; winter affects combustion', impact: 'Real MPG 10–30% lower' },
                { factor: 'Traffic & Idling', epaVsReal: 'EPA uses standardized cycles; real traffic varies greatly', impact: 'Real MPG 15–40% lower in cities' },
                { factor: 'Cargo Load', epaVsReal: 'EPA tests empty vehicles; real cars carry passengers/cargo', impact: 'Real MPG 2–5% lower per 100 lbs' },
                { factor: 'Tire Condition', epaVsReal: 'EPA uses new tires at correct pressure; real-world varies', impact: 'Real MPG up to 3% lower' },
              ].map(({ factor, epaVsReal, impact }) => (
                <div key={factor} className="p-4 bg-gray-50 rounded-xl">
                  <p className="font-bold text-gray-900 text-sm">{factor}</p>
                  <p className="text-gray-500 text-xs mt-1">{epaVsReal}</p>
                  <p className="text-orange-600 font-semibold text-xs mt-2">📉 {impact}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-900 font-semibold text-sm">💡 Pro Tip: Use our miles per gallon calculator</p>
              <p className="text-blue-800 text-sm mt-1">Always measure your real-world MPG using our calculator rather than relying on the window sticker figure. Your actual fuel budget should be based on measured results from at least 3 consecutive fill-up cycles.</p>
            </div>
          </section>

          {/* MPG for rideshare & business */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">MPG Calculator for Rideshare Drivers & Business Mileage</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Rideshare drivers (Uber, Lyft) and self-employed professionals need accurate MPG calculations for tax deduction purposes. The IRS and HMRC allow deductions based on business miles driven. Here&apos;s how to use our <strong>MPG calculator</strong> for business purposes:
            </p>
            <div className="space-y-4">
              {[
                { title: 'Track Your Real MPG Monthly', desc: 'Record your odometer and fuel receipts every fill-up. Input the data into our MPG calculator to get your exact miles per gallon for the month. This is more accurate than any dash display.' },
                { title: 'Calculate Your Fuel Cost Per Mile', desc: 'Once you know your MPG, divide your fuel price per gallon by your MPG. At $4.00/gallon and 30 MPG, your fuel cost is $0.133 per mile. Track this monthly for accurate expense reporting.' },
                { title: 'Compare to IRS Mileage Rate', desc: 'The IRS standard mileage rate (67 cents/mile in 2024) covers all vehicle costs including fuel. If your actual cost per mile exceeds this, it may be better to deduct actual expenses instead.' },
                { title: 'Document for Tax Purposes', desc: 'Keep your MPG calculator results alongside mileage logs for tax documentation. For business trips, document date, destination, purpose, and total miles to validate your fuel expense claims.' },
              ].map(({ title, desc }) => (
                <div key={title} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-600" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{title}</p>
                    <p className="text-gray-600 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MPG FAQ expansion */}
          <section className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl border border-amber-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Everything You Need to Know About MPG</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { q: 'What does MPG stand for?', a: 'MPG stands for Miles Per Gallon — the standard unit for measuring vehicle fuel efficiency in the US and UK. It tells you how many miles your car travels on one gallon of fuel.' },
                { q: 'How do I calculate MPG manually?', a: 'Fill your tank, note the odometer. Drive until you refuel. Note gallons added and miles since last fill-up. Divide miles by gallons = MPG. E.g., 320 miles ÷ 11 gallons = 29 MPG.' },
                { q: 'What is combined MPG?', a: 'Combined MPG is a weighted average of city and highway fuel economy (usually 55% city, 45% highway). It\'s the most relevant figure for everyday driving.' },
                { q: 'Why does my MPG drop in winter?', a: 'Cold weather increases engine warm-up time, thickens fluids, reduces tire pressure, and requires more energy for heating. Winter MPG can be 10–30% lower than summer MPG.' },
                { q: 'What is mpge (MPG equivalent)?', a: 'MPGe (miles per gallon equivalent) is used for electric and plug-in hybrid vehicles to compare their efficiency to gasoline cars. 33.7 kWh of electricity equals one gallon of gasoline.' },
                { q: 'What MPG do I need to drive 500 miles?', a: 'It depends on your tank size. At 25 MPG with a 20-gallon tank (500-mile range), you can do it on one tank. At 15 MPG with the same tank, you\'ll need to refuel mid-trip.' },
              ].map(({ q, a }) => (
                <div key={q} className="bg-white p-4 rounded-xl">
                  <p className="font-bold text-gray-900 text-sm mb-2">❓ {q}</p>
                  <p className="text-gray-600 text-sm">{a}</p>
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