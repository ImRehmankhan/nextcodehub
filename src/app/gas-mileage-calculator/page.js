import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/gas-mileage-calculator',
      name: 'Gas Mileage Calculator',
      url: 'https://www.nextcodehub.com/gas-mileage-calculator',
      description: 'Free gas mileage calculator and gas mileage estimator. Calculate your car\'s MPG and estimate gas costs for any trip.',
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
          name: 'How do I calculate my gas mileage?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate gas mileage (MPG), fill your tank, note the odometer reading, drive until you need to refuel, fill the tank again and note gallons used and miles driven. Divide miles by gallons to get your MPG.' },
        },
        {
          '@type': 'Question',
          name: 'What is a good gas mileage for a car?',
          acceptedAnswer: { '@type': 'Answer', text: 'A good gas mileage is 30–40 MPG for a passenger car. Fuel-efficient cars get 40+ MPG, while trucks and large SUVs typically get 15–20 MPG. Hybrids can achieve 50+ MPG.' },
        },
        {
          '@type': 'Question',
          name: 'How can I estimate my gas cost for a road trip?',
          acceptedAnswer: { '@type': 'Answer', text: 'Use our gas mileage calculator: enter your trip distance, your vehicle\'s MPG, and current gas price per gallon. The calculator will instantly show your estimated gas cost.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Gas Mileage Calculator: Calculate Car MPG & Gas Cost",
  description: "Calculate your car's gas mileage (MPG) and estimate fuel costs for any road trip. Free, instant gas mileage calculator with cost per mile breakdowns.",
  keywords: [
    "gas mileage calculator",
    "gas mileage estimator",
    "gas and mileage calculator",
    "mpg calculator",
    "calculate gas mileage",
    "car gas mileage",
    "road trip gas calculator",
    "miles per gallon estimator",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/gas-mileage-calculator',
  },
  openGraph: {
    title: "Gas Mileage Calculator - Free MPG & Gas Mileage Estimator",
    description: "Calculate your car's gas mileage (MPG) and estimate gas costs for any trip with our free gas mileage calculator.",
    url: 'https://www.nextcodehub.com/gas-mileage-calculator',
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
            Gas Mileage Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your car&apos;s gas mileage (MPG) and estimate gas costs for any journey. Our free gas mileage estimator helps you track fuel efficiency and plan road trips smarter.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Gas Mileage (MPG)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gas mileage — measured in miles per gallon (MPG) — tells you how far your vehicle travels on one gallon of gas. Knowing your gas mileage is essential for budgeting fuel costs on road trips and daily commutes.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Step-by-Step Gas Mileage Calculation</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">1</span><span>Fill your gas tank completely and note the odometer reading</span></li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">2</span><span>Drive normally until you need to refuel</span></li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">3</span><span>Fill the tank again and note gallons added and new odometer reading</span></li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">4</span><span>Divide miles driven by gallons used = your MPG</span></li>
              </ol>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg mt-4">
                <p>Gas Mileage (MPG) = Miles Driven ÷ Gallons Used</p>
                <p className="text-gray-400 mt-1">Example: 350 miles ÷ 11.5 gallons = <span className="text-yellow-400">30.4 MPG</span></p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gas Mileage by Vehicle Type</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { v: 'Economy/Compact Car', mpg: '30–45 MPG', label: '✅ Excellent' },
                { v: 'Midsize Sedan', mpg: '24–35 MPG', label: '✅ Good' },
                { v: 'Full-Size Sedan', mpg: '20–28 MPG', label: '⚠️ Average' },
                { v: 'Small SUV', mpg: '23–32 MPG', label: '⚠️ Average' },
                { v: 'Large SUV / Truck', mpg: '14–20 MPG', label: '❌ Below Avg' },
                { v: 'Hybrid Car', mpg: '42–60 MPG', label: '🌟 Best' },
              ].map(({ v, mpg, label }) => (
                <div key={v} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{v}</p>
                    <p className="text-xs text-gray-500">{label}</p>
                  </div>
                  <span className="font-bold text-primary-700">{mpg}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate my gas mileage?</h3>
                <p className="text-gray-600">Fill up your tank, drive until you need gas, refill and note gallons added. Divide miles driven by gallons = MPG. Or just use our gas mileage calculator above.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What is a good gas mileage?</h3>
                <p className="text-gray-600">30–40 MPG is good for a standard car. Above 40 MPG is excellent. Hybrids achieve 50+ MPG. SUVs and trucks get 15–22 MPG.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">How can I estimate gas cost for a road trip?</h3>
                <p className="text-gray-600">Enter your distance, MPG, and gas price in the calculator above. It instantly shows total gallons needed and total gas cost.</p>
              </div>
            </div>
          </section>

          {/* Road trip planning guide */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Using a Gas Mileage Calculator to Plan Road Trips</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Before embarking on any road trip, smart travelers use a <strong>gas mileage calculator</strong> to estimate total fuel costs and plan fuel stops. Here&apos;s a step-by-step road trip fuel planning guide:
            </p>
            <div className="space-y-3">
              {[
                { step: '1', title: 'Find your vehicle\'s real-world MPG', desc: 'Use our gas mileage calculator to measure your actual fuel economy — not just the window sticker number. Real-world MPG is typically 10–15% lower than EPA estimates.' },
                { step: '2', title: 'Calculate total gas needed', desc: 'Divide total trip miles by your MPG. A 500-mile trip in a 30 MPG car requires about 16.7 gallons of gas.' },
                { step: '3', title: 'Check gas prices along your route', desc: 'Use apps like GasBuddy to find cheap fuel stations along your route. Saving $0.20/gallon on a 16-gallon fill-up saves $3.20 each time.' },
                { step: '4', title: 'Plan fuel stops based on range', desc: 'Your range = MPG × tank capacity. A 30 MPG car with a 15-gallon tank has a 450-mile range. Never let your tank drop below ¼ full.' },
                { step: '5', title: 'Calculate total trip gas cost', desc: 'Total gallons needed × current gas price = estimated gas cost. Add 10% for real-world variability due to elevation, AC, and driving style.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-sm">{step}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{title}</p>
                    <p className="text-gray-500 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gas mileage myths */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5 Common Gas Mileage Myths — Busted</h2>
            <div className="space-y-5">
              {[
                { myth: 'Myth: Premium fuel improves gas mileage', truth: 'Unless your engine specifically requires premium, using it in a regular-grade engine provides no gas mileage benefit. Standard 87-octane is designed for most engines.' },
                { myth: 'Myth: Letting the engine warm up for 5 minutes saves gas', truth: 'Modern fuel-injected engines need only 30 seconds to warm up. Extended idling wastes 0.5–1 liter per hour and actually reduces gas mileage over time.' },
                { myth: 'Myth: Turning off your AC improves gas mileage on highways', truth: 'At highway speeds, open windows create enough drag to negate AC savings. AC is more efficient than open windows above 45 mph.' },
                { myth: 'Myth: Manual transmissions always get better gas mileage', truth: 'Modern automatic transmissions with 8+ speeds often match or exceed manual transmissions in fuel efficiency due to advanced torque converter technology.' },
                { myth: 'Myth: Gas mileage from the window sticker is what you\'ll get', truth: 'EPA window sticker MPG is measured in controlled lab conditions. Real-world gas mileage is typically 10–20% lower due to weather, traffic, driving style, and terrain.' },
              ].map(({ myth, truth }) => (
                <div key={myth} className="border border-gray-100 rounded-xl overflow-hidden">
                  <div className="bg-red-50 p-4 flex gap-3 items-start">
                    <span className="text-red-500 font-bold text-sm flex-shrink-0">❌</span>
                    <p className="font-semibold text-red-900 text-sm">{myth}</p>
                  </div>
                  <div className="bg-green-50 p-4 flex gap-3 items-start">
                    <span className="text-green-500 font-bold text-sm flex-shrink-0">✅</span>
                    <p className="text-green-900 text-sm">{truth}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gas mileage by driving condition */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Driving Conditions Affect Your Gas Mileage</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your <strong>gas mileage estimator</strong> result can vary significantly based on driving conditions. Understanding these factors helps you set realistic fuel budget expectations:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Condition</th>
                    <th className="text-left p-3">MPG Impact</th>
                    <th className="text-left p-3 rounded-tr-lg">Tips</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['City stop-and-go traffic', '-20 to -40%', 'Use eco-mode; accelerate gently'],
                    ['Highway at 75+ mph', '-15 to -25%', 'Stay at 60–65 mph for best mileage'],
                    ['Air conditioning on', '-5 to -20%', 'Use AC sparingly; park in shade'],
                    ['Carrying 500 lbs extra load', '-2 to -5%', 'Remove unused cargo and roof racks'],
                    ['Winter cold weather', '-10 to -30%', 'Keep car garaged; warm up engine briefly'],
                    ['Hilly / mountain terrain', '-5 to -15%', 'Use engine braking downhill to recover'],
                  ].map(([condition, impact, tip]) => (
                    <tr key={condition} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{condition}</td>
                      <td className="p-3 text-red-600 font-semibold">{impact}</td>
                      <td className="p-3 text-gray-600 text-xs">{tip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Maintenance for gas mileage */}
          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Maintenance That Directly Improves Gas Mileage</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Regular vehicle maintenance has a measurable impact on your gas mileage. Use our <strong>gas mileage calculator</strong> before and after maintenance to verify improvements:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { item: 'Tire Pressure Check', freq: 'Monthly', mileageGain: 'Up to 3% MPG gain', detail: 'Keep tires at recommended PSI. Under-inflated tires create drag.' },
                { item: 'Air Filter Replacement', freq: 'Every 15,000 mi', mileageGain: 'Up to 10% MPG gain', detail: 'A dirty air filter restricts airflow and forces the engine to work harder.' },
                { item: 'Spark Plug Replacement', freq: 'Every 30,000 mi', mileageGain: 'Up to 4% MPG gain', detail: 'Worn spark plugs cause misfires that waste fuel and reduce gas mileage.' },
                { item: 'Oxygen Sensor Replacement', freq: 'When faulty', mileageGain: 'Up to 40% MPG gain', detail: 'A faulty O2 sensor causes the engine to run rich (excess fuel). Critical fix.' },
                { item: 'Motor Oil Change', freq: 'Every 5,000–7,500 mi', mileageGain: 'Up to 2% MPG gain', detail: 'Fresh oil reduces engine friction. Use the grade specified in your owner\'s manual.' },
                { item: 'Wheel Alignment', freq: 'Every 12 months', mileageGain: 'Up to 2% MPG gain', detail: 'Misaligned wheels drag, causing your engine to work harder for every mile.' },
              ].map(({ item, freq, mileageGain, detail }) => (
                <div key={item} className="bg-white p-4 rounded-xl border border-emerald-100">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-bold text-gray-900 text-sm">{item}</p>
                    <span className="text-emerald-700 font-bold text-xs bg-emerald-100 px-2 py-0.5 rounded-full">{mileageGain}</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-1">📅 {freq}</p>
                  <p className="text-xs text-gray-600">{detail}</p>
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
