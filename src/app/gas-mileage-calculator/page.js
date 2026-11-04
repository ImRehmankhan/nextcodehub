import GasMileageCalculator from '../../components/GasMileageCalculator';
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
          name: 'Gas Mileage Calculator',
          item: 'https://www.nextcodehub.com/gas-mileage-calculator',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/gas-mileage-calculator#app',
      name: 'Gas Mileage Calculator',
      url: 'https://www.nextcodehub.com/gas-mileage-calculator',
      description: 'Free gas mileage calculator and car gas mileage estimator. Calculate vehicle MPG from a fill-up, estimate trip gas cost, and find exact cost per mile with monthly and yearly fuel budgets.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'All',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'NextCodeHub', url: 'https://www.nextcodehub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I calculate my gas mileage?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To calculate gas mileage (MPG), fill your gas tank completely and record your odometer reading. Drive normally until you need more fuel, then fill the tank completely again. Record the gallons pumped and your new odometer reading. Divide the miles driven by the gallons used: Miles Driven ÷ Gallons = MPG.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is a good gas mileage for a car?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A good gas mileage for a modern passenger car is between 30 and 40 MPG on the highway. High-efficiency compacts and hybrid vehicles achieve 45 to 60 MPG. Midsize crossovers average 24 to 32 MPG, while full-size trucks and large SUVs typically get 14 to 20 MPG.',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I estimate my gas cost for a road trip?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Use Tab 2 of our gas mileage estimator: enter your one-way or round trip distance, your vehicle\'s average MPG rating, and the current gas price per gallon. The tool calculates exact gallons required, total trip gas cost, cost per mile, and commute budget forecasts.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does 100 miles of gas cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'To calculate the gas cost for 100 miles, divide 100 by your vehicle\'s MPG and multiply by the gas price per gallon: (100 ÷ MPG) × Gas Price. For a 30 MPG car at $3.50/gallon, 100 miles uses 3.33 gallons and costs $11.67 ($0.117/mile). For a 20 MPG truck, 100 miles uses 5.0 gallons and costs $17.50 ($0.175/mile).',
          },
        },
        {
          '@type': 'Question',
          name: 'How many miles is 1 gallon of gas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'One gallon of gas moves your vehicle for as many miles as its MPG rating. If your car is rated at 28 MPG, 1 gallon gets you approximately 28 miles of driving. Modern compact cars travel 32 to 38 miles on a gallon, while efficient hybrids can travel 50 miles or more per gallon.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is my gas mileage lower than the EPA sticker rating?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Official EPA window sticker ratings are calculated under controlled dynamometer laboratory tests. In real-world driving, aggressive acceleration, frequent idling, driving over 65 mph, low tire pressure, cold weather, and roof cargo racks typically reduce actual gas mileage by 10% to 25% below the EPA rating.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does gas mileage decrease as a car gets older?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, gas mileage can gradually decrease as a car ages due to dirty fuel injectors, fouled spark plugs, worn oxygen sensors, and internal engine friction. Routine maintenance—such as replacing dirty engine air filters, using synthetic oil, replacing spark plugs, and maintaining tire PSI—restores fuel economy close to factory levels.',
          },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Gas Mileage Calculator – MPG, Cost Per Mile & Trip Gas Cost",
  description: "Free gas mileage calculator: calculate car MPG from fill-ups, estimate trip gas costs, and calculate exact cost per mile with monthly and yearly fuel budgets.",
  alternates: {
    canonical: 'https://www.nextcodehub.com/gas-mileage-calculator',
  },
  openGraph: {
    title: "Gas Mileage Calculator – MPG, Cost Per Mile & Trip Gas Cost",
    description: "Calculate your car's exact gas mileage (MPG), cost per mile, and road trip gas costs with our free interactive gas mileage calculator.",
    url: 'https://www.nextcodehub.com/gas-mileage-calculator',
    siteName: 'NextCodeHub',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gas Mileage Calculator – MPG, Cost Per Mile & Trip Gas Cost",
    description: "Free car gas mileage calculator and estimator. Calculate vehicle MPG from a fill-up, cost per mile, and total road trip gas budget.",
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
        <Breadcrumbs items={[{ name: 'Gas Mileage Calculator' }]} />
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Gas Mileage Calculator
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Use our free <strong>gas mileage calculator</strong> and <strong>gas mileage estimator</strong> to measure your car&apos;s true MPG from a fill-up, calculate <strong>gas mileage cost</strong> per mile, and plan accurate road trip and monthly fuel budgets.
          </p>
        </div>

        {/* Dedicated 2-Tab Gas Mileage & Cost Calculator */}
        <GasMileageCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          {/* Gas Mileage Cost: How to Calculate Cost Per Mile */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Gas Mileage Cost: How to Calculate Cost Per Mile
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Understanding your <strong>gas mileage cost</strong> allows you to evaluate your daily commute expenses, split road trip fuel fairly, and compare the true running cost of different vehicles. Calculating your cost per mile requires two figures: your <strong>gas mileage (MPG)</strong> and your <strong>local gas price</strong>.
            </p>

            {/* Step-by-Step Worked Example */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-6 my-6">
              <h3 className="font-bold text-emerald-950 text-lg mb-3">Worked Gas Mileage Cost Example</h3>
              <div className="space-y-3 text-sm text-emerald-900">
                <div className="bg-white p-3.5 rounded-xl border border-emerald-100 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <strong className="text-emerald-950">Calculate Your Vehicle&apos;s MPG:</strong>
                    <p className="font-mono text-emerald-800 mt-1">350 miles driven ÷ 11.5 gallons pumped = <span className="font-bold text-emerald-900">30.4 MPG</span></p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-emerald-100 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <strong className="text-emerald-950">Divide Gas Price by MPG (Cost Per Mile Formula):</strong>
                    <p className="font-mono text-emerald-800 mt-1">Cost Per Mile = Gas Price ($/gal) ÷ Vehicle MPG</p>
                    <p className="text-xs text-gray-600 mt-1">
                      At $3.50 per gallon: $3.50 ÷ 30.4 MPG = <strong className="text-emerald-900">$0.115 per mile (11.5¢ / mile)</strong>
                    </p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      At $3.40 per gallon: $3.40 ÷ 30.4 MPG = <strong className="text-emerald-900">$0.112 per mile (11.2¢ / mile)</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-emerald-100 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <strong className="text-emerald-950">Scale to Any Journey:</strong>
                    <p className="text-xs text-gray-700 mt-1">
                      • <strong>100 Miles:</strong> 100 × $0.115 = <strong>$11.50</strong> (uses 3.29 gallons)<br />
                      • <strong>500 Miles:</strong> 500 × $0.115 = <strong>$57.50</strong> (uses 16.45 gallons)<br />
                      • <strong>1,000 Miles:</strong> 1,000 × $0.115 = <strong>$115.00</strong> (uses 32.89 gallons)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">Cost Per Mile &amp; Distance Comparison Table</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-100 text-gray-700 uppercase font-bold text-xs">
                  <tr>
                    <th className="py-3 px-4">Vehicle MPG Class</th>
                    <th className="py-3 px-4">Gas Burned per Mile</th>
                    <th className="py-3 px-4">Cost/Mile ($3.25/gal)</th>
                    <th className="py-3 px-4">Cost/Mile ($3.75/gal)</th>
                    <th className="py-3 px-4">Cost for 100 Miles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-bold text-gray-900">18 MPG (Truck / Full-Size SUV)</td>
                    <td className="py-3 px-4">0.055 gal/mi</td>
                    <td className="py-3 px-4">$0.181 / mi</td>
                    <td className="py-3 px-4">$0.208 / mi</td>
                    <td className="py-3 px-4 font-semibold text-red-600">$18.06 – $20.83</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-bold text-gray-900">24 MPG (Midsize Crossover)</td>
                    <td className="py-3 px-4">0.042 gal/mi</td>
                    <td className="py-3 px-4">$0.135 / mi</td>
                    <td className="py-3 px-4">$0.156 / mi</td>
                    <td className="py-3 px-4 font-semibold text-orange-600">$13.54 – $15.63</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-bold text-gray-900">30 MPG (Standard Sedan)</td>
                    <td className="py-3 px-4">0.033 gal/mi</td>
                    <td className="py-3 px-4">$0.108 / mi</td>
                    <td className="py-3 px-4">$0.125 / mi</td>
                    <td className="py-3 px-4 font-semibold text-emerald-600">$10.83 – $12.50</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-bold text-gray-900">36 MPG (Compact Car)</td>
                    <td className="py-3 px-4">0.028 gal/mi</td>
                    <td className="py-3 px-4">$0.090 / mi</td>
                    <td className="py-3 px-4">$0.104 / mi</td>
                    <td className="py-3 px-4 font-semibold text-emerald-600">$9.03 – $10.42</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-emerald-50/50">
                    <td className="py-3 px-4 font-bold text-emerald-900">52 MPG (Hybrid Vehicle)</td>
                    <td className="py-3 px-4 text-emerald-800">0.019 gal/mi</td>
                    <td className="py-3 px-4 text-emerald-800">$0.062 / mi</td>
                    <td className="py-3 px-4 text-emerald-800">$0.072 / mi</td>
                    <td className="py-3 px-4 font-bold text-emerald-700">$6.25 – $7.21</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Calculate Gas Mileage (MPG Formula) */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Gas Mileage (MPG)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gas mileage — measured in <strong>miles per gallon (MPG)</strong> — measures how far your car travels on one gallon of gasoline. While modern dashboards display digital averages, calculating your gas mileage manually with the tank-to-tank method gives you the most accurate real-world measurement.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Step-by-Step Gas Mileage Calculation</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">1</span>
                  <span>Fill your gas tank completely to auto shut-off and note your current odometer reading (e.g., 42,000 miles).</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">2</span>
                  <span>Drive normally until your tank is roughly a quarter full or ready for a refill.</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">3</span>
                  <span>Fill the tank completely again. Note the exact gallons pumped (e.g., 12.0 gallons) and new odometer reading (e.g., 42,360 miles).</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">4</span>
                  <span>Subtract starting odometer from ending odometer (360 miles), then divide by gallons pumped (12.0) = <strong>30.0 MPG</strong>.</span>
                </li>
              </ol>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg mt-4">
                <p>Gas Mileage (MPG) = Miles Driven ÷ Gallons Pumped</p>
                <p className="text-gray-400 mt-1">Example: 350 miles ÷ 11.5 gallons = <span className="text-yellow-400">30.4 MPG</span></p>
              </div>
            </div>
          </section>

          {/* Gas Mileage by Vehicle Type */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gas Mileage by Vehicle Type</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { v: 'Economy / Compact Car', mpg: '30–45 MPG', label: '✅ Excellent Efficiency' },
                { v: 'Midsize Sedan', mpg: '24–35 MPG', label: '✅ Good Everyday Commute' },
                { v: 'Full-Size Sedan', mpg: '20–28 MPG', label: '⚠️ Average' },
                { v: 'Small SUV / Crossover', mpg: '23–32 MPG', label: '⚠️ Average' },
                { v: 'Large SUV / Pickup Truck', mpg: '14–20 MPG', label: '❌ Below Average' },
                { v: 'Hybrid Vehicle', mpg: '42–60 MPG', label: '🌟 Best Mileage' },
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

          {/* Road Trip Planning Guide */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Using a Gas Mileage Calculator to Plan Road Trips</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Before heading out on a road trip, smart drivers use a <strong>car gas mileage calculator</strong> to budget expenses and map out refueling stops. Follow this 5-step checklist:
            </p>
            <div className="space-y-3">
              {[
                { step: '1', title: 'Determine your real-world MPG', desc: 'Use Tab 1 to calculate your actual highway mileage rather than the window sticker rating, which can be 10–15% higher than highway conditions with passengers and baggage.' },
                { step: '2', title: 'Calculate total gallons required', desc: 'Divide your total round-trip distance by your MPG rating. For example, a 600-mile round trip in a 30 MPG sedan requires 20.0 gallons of gas.' },
                { step: '3', title: 'Check gas prices along the route', desc: 'Gasoline prices fluctuate between states and counties. Identify discount gas stations or exit plazas beforehand to avoid expensive highway rest stops.' },
                { step: '4', title: 'Schedule stops based on your tank range', desc: 'Tank range = Tank Capacity in Gallons × MPG. If your car has a 14-gallon tank at 30 MPG, your max range is 420 miles. Plan stops when your fuel needle hits ¼ full (around 315 miles).' },
                { step: '5', title: 'Add a 10% safety cushion', desc: 'Factors such as mountain climbing, idling in traffic, head-winds, and running the air conditioner increase fuel burn. Multiply your estimated gas cost by 1.10 for your final trip budget.' },
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

          {/* 5 Gas Mileage Myths */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">5 Common Gas Mileage Myths — Busted</h2>
            <div className="space-y-4">
              {[
                { myth: 'Myth: Premium fuel increases gas mileage in every car', truth: 'Unless your engine is designed and tuned for high-octane fuel (turbocharged or high-compression engines), premium 91/93 octane delivers zero MPG gain over standard 87 octane.' },
                { myth: 'Myth: Warming up your engine for 5–10 minutes saves fuel', truth: 'Modern fuel-injected engines only need 30 seconds of gentle driving to reach operating temperature. Extended idling burns 0.2 to 0.5 gallons of gas per hour and reduces your average MPG.' },
                { myth: 'Myth: Driving with windows down always uses less gas than AC', truth: 'At highway speeds over 45–50 mph, aerodynamic drag caused by open windows consumes more fuel than running the car\'s air conditioning system.' },
                { myth: 'Myth: Manual transmissions always achieve better gas mileage', truth: 'Modern automatic transmissions and CVTs have 8 to 10 gears and computer-optimized shift points that frequently beat manual gearboxes in real-world fuel economy.' },
                { myth: 'Myth: You will always match the official EPA window sticker MPG', truth: 'EPA figures are produced on indoor laboratory dynamometers. Real-world traffic, cold weather, terrain, and vehicle payload generally cause real gas mileage to be 10–20% lower.' },
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

          {/* Driving Conditions */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Driving Conditions Affect Your Gas Mileage</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your actual gas mileage varies depending on road conditions, speed, and environmental factors. Use these benchmarks to adjust your fuel estimates:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Driving Condition</th>
                    <th className="text-left p-3">Impact on Gas Mileage</th>
                    <th className="text-left p-3 rounded-tr-lg">Actionable Advice</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Stop-and-go city traffic', '-20% to -40%', 'Accelerate smoothly and anticipate stops to minimize braking'],
                    ['Highway cruising at 75+ mph', '-15% to -25%', 'Cruising at 60–65 mph delivers up to 15% better MPG than 75 mph'],
                    ['Air conditioning on maximum', '-5% to -20%', 'Use vent air at lower speeds; pre-cool car in the shade'],
                    ['Carrying 500 lbs extra luggage', '-2% to -5%', 'Empty trunk of unnecessary tools, cargo, and roof racks'],
                    ['Winter freezing temperatures', '-10% to -30%', 'Engine takes longer to reach optimal heat; monitor tire pressures'],
                    ['Steep uphill mountain roads', '-10% to -25%', 'Maintain steady throttle and avoid rapid acceleration'],
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

          {/* Maintenance Table */}
          <section className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vehicle Maintenance That Directly Improves Gas Mileage</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Keeping your vehicle properly maintained directly protects your fuel budget. Check your gas mileage before and after servicing to verify efficiency improvements:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { item: 'Tire Pressure Check', freq: 'Monthly', mileageGain: 'Up to 3% MPG gain', detail: 'Under-inflated tires increase rolling resistance. Keep tires inflated to the PSI listed on your driver door sticker.' },
                { item: 'Engine Air Filter Check', freq: 'Every 15,000 miles', mileageGain: 'Up to 10% MPG gain', detail: 'A clogged air filter restricts airflow into the combustion chamber, wasting unburned fuel.' },
                { item: 'Spark Plug Replacement', freq: 'Every 30,000–60,000 mi', mileageGain: 'Up to 4% MPG gain', detail: 'Worn or fouled spark plugs cause engine misfires and incomplete combustion.' },
                { item: 'Oxygen (O2) Sensor Replacement', freq: 'When faulty / 100k mi', mileageGain: 'Up to 40% MPG gain', detail: 'A failing O2 sensor sends incorrect fuel-air mixture signals, dumping excessive fuel into cylinders.' },
                { item: 'Synthetic Motor Oil Change', freq: 'Every 5,000–7,500 mi', mileageGain: 'Up to 2% MPG gain', detail: 'High-quality oil reduces internal engine friction. Use the manufacturer\'s recommended viscosity.' },
                { item: 'Wheel Alignment Inspection', freq: 'Every 12 months', mileageGain: 'Up to 2% MPG gain', detail: 'Misaligned wheels drag across asphalt, creating friction that forces your engine to work harder.' },
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

          {/* Comprehensive FAQs (Includes People Also Ask queries) */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 text-base mb-2">How do I calculate my gas mileage?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fill your tank completely and note your odometer reading. Drive normally until you need more fuel, then fill the tank completely again. Divide the miles driven by the gallons of fuel required to refill: <strong>Miles Driven ÷ Gallons Pumped = MPG</strong>. Alternatively, enter both numbers into Tab 1 above.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 text-base mb-2">How much does 100 miles of gas cost?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  To calculate the gas cost for 100 miles, divide 100 by your vehicle&apos;s MPG and multiply by the gas price per gallon: <code>(100 ÷ MPG) × Gas Price</code>. For example, in a 30 MPG car with gas at $3.50/gallon, 100 miles requires 3.33 gallons and costs <strong>$11.67</strong> ($0.117 per mile). In a 20 MPG truck, 100 miles costs <strong>$17.50</strong>.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 text-base mb-2">How many miles is 1 gallon of gas?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  One gallon of gas moves your vehicle for as many miles as its MPG rating. If your car gets 28 MPG, one gallon yields approximately 28 miles of driving. A typical compact car covers 32–40 miles per gallon, while a hybrid can cover 50 miles or more on a single gallon of gas.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 text-base mb-2">Why is my gas mileage lower than the EPA sticker rating?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  EPA window sticker ratings are generated on laboratory test benches without wind resistance, aggressive overtaking, freezing temperatures, or heavy air conditioning. In real-world driving, traveling above 65 mph, short stop-and-go trips, under-inflated tires, and extra cargo typically reduce gas mileage by 10% to 25% below official ratings.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 text-base mb-2">Does gas mileage decrease as a car gets older?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Yes, mechanical wear over time can cause gas mileage to drop slightly. Carbon deposits on fuel injectors, worn spark plugs, degraded oxygen sensors, and dirty air filters decrease combustion efficiency. Regular tune-ups and oil changes will restore your vehicle&apos;s gas mileage close to its original factory efficiency.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 text-base mb-2">What is a good gas mileage for a passenger car?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A good gas mileage for a gasoline passenger car is 30–40 MPG for highway driving. Vehicles achieving over 40 MPG are considered exceptionally fuel-efficient. Hybrid passenger cars routinely achieve 45–60 MPG.
                </p>
              </div>

              <div>
                <h3 className="font-bold text-gray-900 text-base mb-2">How can I estimate my gas cost for a road trip?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Switch to <strong>Tab 2: Trip &amp; Monthly Cost</strong> in the calculator above. Enter your trip distance, your vehicle&apos;s average MPG, and local gas price. Toggle the Round Trip button if returning, and our estimator instantly displays total gallons required, total trip cost, and cost per mile.
                </p>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
