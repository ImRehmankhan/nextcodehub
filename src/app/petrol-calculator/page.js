import PetrolCalculator from '../../components/PetrolCalculator';
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
          name: 'Petrol Calculator',
          item: 'https://www.nextcodehub.com/petrol-calculator',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/petrol-calculator',
      name: 'Petrol Tank Refill & Range Calculator',
      url: 'https://www.nextcodehub.com/petrol-calculator',
      description: 'Free petrol calculator to calculate petrol tank refill costs, liters required, estimated driving range on a full tank, and cost per kilometer.',
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
          name: 'What is the petrol average formula?',
          acceptedAnswer: { '@type': 'Answer', text: 'The petrol average formula is: Petrol Average (km/L) = Total Distance Driven (km) ÷ Total Liters of Petrol Used. For example, if you drove 450 km on 30 liters of petrol, your petrol average is 450 ÷ 30 = 15 km/L.' },
        },
        {
          '@type': 'Question',
          name: '1000 km me kitna petrol lagta hai?',
          acceptedAnswer: { '@type': 'Answer', text: '1000 km safar me petrol gaari ke fuel average par depend karta hai. 15 km/L average wali car me 1000 ÷ 15 = 66.7 Liters petrol lagega. 70cc bike (50 km/L) me 20 Liters, aur Alto 660cc (18 km/L) me taqreeban 55.5 Liters petrol lagta hai.' },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate the cost to fill my petrol tank?',
          acceptedAnswer: { '@type': 'Answer', text: 'Determine remaining liters using your fuel gauge, subtract that from your tank capacity to find liters needed, and multiply by the petrol price per liter. Our petrol calculator does this instantly.' },
        },
        {
          '@type': 'Question',
          name: 'How far can I drive on a full tank of petrol?',
          acceptedAnswer: { '@type': 'Answer', text: 'Multiply your petrol tank capacity (in liters) by your vehicle\'s average petrol mileage (in km/L). For example, a 50-liter tank at 14 km/L gives an estimated range of 700 kilometers.' },
        },
        {
          '@type': 'Question',
          name: 'How do I calculate petrol cost for a bike?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate bike petrol cost: divide your distance (km) by bike mileage (typically 45–60 km/L for 70cc–125cc), then multiply by petrol price per liter. For 100 km on a 70cc bike (55 km/L) at Rs. 280/L: (100 ÷ 55) × 280 = Rs. 509.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Petrol Calculator: Tank Refill Cost & Range Estimator",
  description: "Calculate the exact cost to refill your petrol tank, check driving range on a full tank, and estimate petrol cost per kilometer. 100% Free.",
  alternates: {
    canonical: 'https://www.nextcodehub.com/petrol-calculator',
  },
  openGraph: {
    title: "Petrol Calculator - Tank Refill Cost & Range Estimator",
    description: "Calculate petrol refill costs, liters required to fill your tank, and maximum driving range with our free petrol calculator.",
    url: 'https://www.nextcodehub.com/petrol-calculator',
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
        <Breadcrumbs items={[{ name: 'Petrol Calculator' }]} />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Petrol Tank Refill &amp; Range Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Find out how much it costs to fill your petrol tank, how many liters you need, and your vehicle&apos;s maximum driving range on a full tank.
          </p>
        </div>

        <PetrolCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          {/* Petrol Average Formula Section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Petrol Average Formula: How to Calculate km per Liter</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your <strong>petrol average formula</strong> measures how many kilometers your vehicle travels per single liter of fuel. Calculating your real-world petrol average is simple using the standard distance-over-fuel equation:
            </p>
            <div className="bg-gray-900 text-teal-300 p-6 rounded-xl font-mono text-sm space-y-2 my-4 shadow-inner">
              <p className="text-white font-bold text-base">Petrol Average Formula:</p>
              <p className="text-xl text-teal-400 font-extrabold">Petrol Average (km/L) = Total Distance Driven (km) ÷ Total Liters Used (L)</p>
              <p className="text-gray-400 pt-2 border-t border-gray-800">
                Worked Example: If you drove <span className="text-yellow-400 font-bold">450 km</span> and needed <span className="text-yellow-400 font-bold">30 Liters</span> to refill the tank:
              </p>
              <p className="text-white font-bold">450 km ÷ 30 Liters = <span className="text-teal-400 text-lg">15 km/L</span> Petrol Average</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 mt-6 text-sm">
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-xl">
                <p className="font-bold text-teal-950 mb-1">Step 1: Top Up</p>
                <p className="text-teal-900 text-xs">Fill tank completely until the pump clicks off. Record your odometer reading.</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-xl">
                <p className="font-bold text-teal-950 mb-1">Step 2: Drive</p>
                <p className="text-teal-900 text-xs">Drive normally for 200–400 km in mixed city and highway traffic conditions.</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 p-4 rounded-xl">
                <p className="font-bold text-teal-950 mb-1">Step 3: Refill &amp; Divide</p>
                <p className="text-teal-900 text-xs">Refill tank to full, note exact liters on receipt, and divide km driven by liters.</p>
              </div>
            </div>
          </section>

          {/* Petrol Cost for X km Lookup Table */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Petrol Cost for 100 km, 500 km &amp; 1000 km (Distance Lookup Table)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Wondering how much petrol you need and what it will cost for common trip distances? Use this quick reference table across different vehicle types:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Vehicle Category</th>
                    <th className="text-left p-3">Mileage</th>
                    <th className="text-left p-3">100 km</th>
                    <th className="text-left p-3">300 km</th>
                    <th className="text-left p-3">500 km</th>
                    <th className="text-left p-3 rounded-tr-lg">1,000 km</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['70cc / 125cc Motorbike', '50 km/L', '2.0 L ($3.00)', '6.0 L ($9.00)', '10.0 L ($15.00)', '20.0 L ($30.00)'],
                    ['Small Car (Alto, Picanto)', '18 km/L', '5.5 L ($8.25)', '16.7 L ($25.05)', '27.8 L ($41.70)', '55.5 L ($83.25)'],
                    ['Sedan (City, Corolla, Civic)', '14 km/L', '7.1 L ($10.65)', '21.4 L ($32.10)', '35.7 L ($53.55)', '71.4 L ($107.10)'],
                    ['Compact SUV / Crossover', '11 km/L', '9.1 L ($13.65)', '27.3 L ($40.95)', '45.5 L ($68.25)', '90.9 L ($136.35)'],
                    ['Large SUV / 4x4 (Fortuner, Prado)', '8 km/L', '12.5 L ($18.75)', '37.5 L ($56.25)', '62.5 L ($93.75)', '125.0 L ($187.50)'],
                  ].map(([veh, eff, k100, k300, k500, k1000], idx) => (
                    <tr key={veh} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="p-3 font-semibold text-gray-900">{veh}</td>
                      <td className="p-3 font-mono text-teal-700 font-bold">{eff}</td>
                      <td className="p-3 text-gray-700">{k100}</td>
                      <td className="p-3 text-gray-700">{k300}</td>
                      <td className="p-3 text-gray-700 font-medium">{k500}</td>
                      <td className="p-3 font-bold text-gray-900">{k1000}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">*Cost calculated at standard benchmark $1.50/L. Enter your local fuel price in our calculator above for exact currency results.</p>
          </section>

          {/* Bike & Motorcycle Petrol Calculator Section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Bike Petrol Calculator: Motorcycle Fuel Average &amp; Refill Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Searching for a <strong>petrol calculator for bike</strong> or motorcycle? Two-wheelers have smaller fuel tanks (typically 8 to 14 Liters) but significantly higher fuel mileage (35 to 65 km/L). Here is how fuel costs breakdown for common bike engines:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
              {[
                { title: '70cc Motorcycle', avg: '55 – 65 km/L', tank: '9 Liters', range: '500 – 580 km', costPer100: '1.6 L / 100km' },
                { title: '100cc – 110cc Bike', avg: '48 – 58 km/L', tank: '10 Liters', range: '480 – 550 km', costPer100: '1.9 L / 100km' },
                { title: '125cc Motorcycle', avg: '42 – 50 km/L', tank: '11 Liters', range: '460 – 520 km', costPer100: '2.2 L / 100km' },
                { title: '150cc – 250cc Sport', avg: '30 – 40 km/L', tank: '13 Liters', range: '390 – 480 km', costPer100: '2.9 L / 100km' },
              ].map(({ title, avg, tank, range, costPer100 }) => (
                <div key={title} className="bg-gradient-to-b from-gray-50 to-white p-5 rounded-2xl border border-gray-200 shadow-2xs">
                  <div className="text-2xl mb-2">🏍️</div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                  <div className="space-y-1 text-xs text-gray-600 font-medium">
                    <p>• Average: <span className="text-teal-700 font-bold">{avg}</span></p>
                    <p>• Tank Size: <span className="text-gray-900 font-bold">{tank}</span></p>
                    <p>• Tank Range: <span className="text-emerald-700 font-bold">{range}</span></p>
                    <p>• 100km Fuel: <span className="text-blue-700 font-bold">{costPer100}</span></p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500">
              💡 <strong>Bike Tip:</strong> Motorcycle carburetors and fuel injectors perform best when refueled before entering reserve mode (the bottom 1.5–2 liters), preventing tank sediment from clogging the jet nozzles.
            </p>
          </section>

          {/* Pakistan Specific Section */}
          <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-8 rounded-2xl border border-emerald-200">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🇵🇰</span>
              <div>
                <h2 className="text-2xl font-bold text-emerald-950">Fuel Cost Calculator Pakistan (Petrol Price in PKR)</h2>
                <p className="text-emerald-800 text-sm">Calculate petrol cost for Pakistani cars, bikes &amp; intercity motorway routes</p>
              </div>
            </div>
            <p className="text-emerald-900 text-sm leading-relaxed mb-6">
              With fluctuating petrol prices in Pakistan (estimated benchmark ~<strong>Rs. 280 / Liter</strong>), planning fuel expenses is essential for daily office commutes and highway road trips. Here is the estimated petrol cost for common Pakistani vehicles:
            </p>
            <div className="overflow-x-auto bg-white rounded-xl border border-emerald-200 shadow-xs mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-emerald-100/60 text-emerald-950 font-semibold text-xs uppercase">
                    <th className="text-left p-3">Popular Vehicle</th>
                    <th className="text-left p-3">Fuel Average</th>
                    <th className="text-left p-3">Cost per km</th>
                    <th className="text-left p-3">Lahore ⇄ Isb (380 km)</th>
                    <th className="text-left p-3">Full Tank Refill</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-100 text-xs">
                  {[
                    ['Honda CD 70 Bike', '60 km/L', 'Rs. 4.67 / km', 'Rs. 1,773 (6.3 L)', 'Rs. 2,520 (9 L tank)'],
                    ['Honda CG 125 Bike', '45 km/L', 'Rs. 6.22 / km', 'Rs. 2,364 (8.4 L)', 'Rs. 3,080 (11 L tank)'],
                    ['Suzuki Alto 660cc', '19 km/L', 'Rs. 14.74 / km', 'Rs. 5,600 (20.0 L)', 'Rs. 7,560 (27 L tank)'],
                    ['Suzuki Cultus / Wagon R', '16.5 km/L', 'Rs. 16.97 / km', 'Rs. 6,448 (23.0 L)', 'Rs. 9,800 (35 L tank)'],
                    ['Toyota Yaris / Honda City', '14 km/L', 'Rs. 20.00 / km', 'Rs. 7,600 (27.1 L)', 'Rs. 11,200 (40 L tank)'],
                    ['Toyota Corolla 1.6 / 1.8', '12 km/L', 'Rs. 23.33 / km', 'Rs. 8,867 (31.7 L)', 'Rs. 14,000 (50 L tank)'],
                    ['Sportage / Tucson / Oshan X7', '9 km/L', 'Rs. 31.11 / km', 'Rs. 11,822 (42.2 L)', 'Rs. 15,400 (55 L tank)'],
                  ].map(([car, avg, perkm, route, tank]) => (
                    <tr key={car} className="hover:bg-emerald-50/50">
                      <td className="p-3 font-bold text-gray-900">{car}</td>
                      <td className="p-3 font-semibold text-emerald-800">{avg}</td>
                      <td className="p-3 font-mono text-gray-700">{perkm}</td>
                      <td className="p-3 font-bold text-teal-800">{route}</td>
                      <td className="p-3 text-gray-800">{tank}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Roman Urdu FAQ Box */}
            <div className="bg-white rounded-xl p-6 border border-emerald-200">
              <h3 className="font-bold text-emerald-950 text-base mb-3 flex items-center gap-2">
                <span>💬</span> Roman Urdu Guide: 1000 km me kitna petrol lagta hai?
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                <strong>1000 km safar ke liye kitna petrol lagega</strong> yeh mukammal tor par aapki gaari ya bike ke petrol average par munhasir hota hai. Formula bohat asaan hai: <strong>1000 ÷ Petrol Average (km/L) = Total Petrol (Liters)</strong>.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 font-mono text-xs mb-4">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="font-bold text-gray-900">70cc Bike (50 km/L):</p>
                  <p className="text-teal-700 font-bold mt-1">1000 ÷ 50 = 20 Liters</p>
                  <p className="text-gray-500 mt-0.5">Taqreeban Rs. 5,600</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="font-bold text-gray-900">Suzuki Alto (18 km/L):</p>
                  <p className="text-teal-700 font-bold mt-1">1000 ÷ 18 = 55.5 Liters</p>
                  <p className="text-gray-500 mt-0.5">Taqreeban Rs. 15,540</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="font-bold text-gray-900">1.3L / 1.5L Sedan (14 km/L):</p>
                  <p className="text-teal-700 font-bold mt-1">1000 ÷ 14 = 71.4 Liters</p>
                  <p className="text-gray-500 mt-0.5">Taqreeban Rs. 19,992</p>
                </div>
              </div>
              <p className="text-xs text-gray-600">
                100 km ke liye: Bike me <strong>2 Liters</strong>, Alto me <strong>5.5 Liters</strong>, aur Sedan me <strong>7.1 Liters</strong> petrol lagta hai.
              </p>
            </div>
          </section>

          {/* Petrol cost explained */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Petrol Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Knowing your petrol cost before you drive saves you from surprise fuel bills. Whether you&apos;re planning a road trip or budgeting your daily commute, our petrol calculator gives you the exact petrol expense in seconds.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The formula for calculating <strong>petrol cost</strong> is simple: divide your trip distance by your vehicle&apos;s petrol mileage (km/L), then multiply the result by the current petrol price per liter.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Petrol Cost Formula</h3>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg space-y-1">
                <p>Petrol Required (L) = Distance (km) ÷ Petrol Average (km/L)</p>
                <p>Petrol Cost = Petrol Required (L) × Petrol Price ($/L)</p>
                <p className="text-gray-400 mt-2">Example: 200 km ÷ 15 km/L × $1.50/L = <span className="text-yellow-400">$20.00</span></p>
              </div>
            </div>
          </section>

          {/* Petrol average guide */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Petrol Average</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your <strong>petrol average</strong> — also known as fuel efficiency or mileage — is the number of kilometers your vehicle travels per liter of petrol. It&apos;s the most critical factor in your petrol expense calculations. Here&apos;s what typical petrol averages look like:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { vehicle: 'Motorcycle', avg: '40 – 60 km/L', color: 'green' },
                { vehicle: 'Small Hatchback', avg: '16 – 20 km/L', color: 'blue' },
                { vehicle: 'Sedan / Saloon', avg: '12 – 16 km/L', color: 'indigo' },
                { vehicle: 'SUV / 4x4', avg: '8 – 12 km/L', color: 'orange' },
                { vehicle: 'Pickup Truck', avg: '6 – 10 km/L', color: 'red' },
                { vehicle: 'Petrol Hybrid', avg: '18 – 25 km/L', color: 'teal' },
              ].map(({ vehicle, avg }) => (
                <div key={vehicle} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="font-medium text-gray-900">{vehicle}</span>
                  <span className="text-sm font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">{avg}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tips to reduce petrol expense */}
          <section className="bg-gray-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Tips to Reduce Your Petrol Expense</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Maintain steady speed', detail: 'Constant speed on highways reduces petrol consumption by up to 20%.' },
                { tip: 'Keep tires inflated', detail: 'Under-inflated tires can reduce petrol mileage by 3% per PSI drop.' },
                { tip: 'Reduce AC usage', detail: 'Air conditioning can increase petrol consumption by 10–20%.' },
                { tip: 'Avoid idling', detail: 'Idling uses 0.5–1 liter per hour. Turn off your engine when parked.' },
                { tip: 'Service regularly', detail: 'A well-tuned engine can improve petrol average by up to 15%.' },
                { tip: 'Drive smoothly', detail: 'Aggressive acceleration and braking waste up to 30% more petrol.' },
              ].map(({ tip, detail }) => (
                <div key={tip} className="flex gap-3 items-start">
                  <svg className="flex-shrink-0 text-green-400 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>
                    <p className="font-semibold">{tip}</p>
                    <p className="text-gray-400 text-sm">{detail}</p>
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
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate my petrol cost?</h3>
                <p className="text-gray-600">Divide distance by petrol mileage (km/L) to get liters, then multiply by the price per liter. Example: 200km ÷ 15 km/L × $1.50 = $20. Use our petrol calculator above.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What is petrol average and how is it calculated?</h3>
                <p className="text-gray-600">Petrol average is km driven per liter of petrol consumed. Calculate it: Total km ÷ Total liters used = km/L petrol average.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">How much petrol do I need for a trip?</h3>
                <p className="text-gray-600">Divide trip distance by your petrol average (km/L). For 300km at 15 km/L = 20 liters needed. Enter your values above for an instant calculation.</p>
              </div>
            </div>
          </section>

          {/* Petrol price sensitivity */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Petrol Price Sensitivity: How Price Changes Affect Your Budget</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Understanding how <strong>petrol price</strong> changes impact your monthly budget helps you prepare for price fluctuations. This table shows how a price change affects a driver covering 1,500 km/month at different petrol averages:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Petrol Average</th>
                    <th className="text-center p-3">At $1.00/L</th>
                    <th className="text-center p-3">At $1.50/L</th>
                    <th className="text-center p-3">At $2.00/L</th>
                    <th className="text-center p-3 rounded-tr-lg">At $2.50/L</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['8 km/L (SUV)', '$187.5', '$281.3', '$375.0', '$468.8'],
                    ['10 km/L (sedan)', '$150.0', '$225.0', '$300.0', '$375.0'],
                    ['12 km/L (compact)', '$125.0', '$187.5', '$250.0', '$312.5'],
                    ['15 km/L (efficient)', '$100.0', '$150.0', '$200.0', '$250.0'],
                    ['20 km/L (hybrid)', '$75.0', '$112.5', '$150.0', '$187.5'],
                    ['25 km/L (motorcycle)', '$60.0', '$90.0', '$120.0', '$150.0'],
                  ].map(([avg, p1, p15, p2, p25]) => (
                    <tr key={avg} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{avg}</td>
                      <td className="p-3 text-center text-green-600 font-medium">{p1}</td>
                      <td className="p-3 text-center text-yellow-600">{p15}</td>
                      <td className="p-3 text-center text-orange-600">{p2}</td>
                      <td className="p-3 text-center text-red-600 font-bold">{p25}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">*Monthly petrol expense for 1,500 km/month. Use our petrol calculator to compute your specific numbers.</p>
          </section>

          {/* Petrol vs diesel analysis */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Petrol vs Diesel: Which Fuel Type Costs Less Long-Term?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Choosing between a petrol and diesel vehicle is one of the biggest fuel cost decisions you&apos;ll make. While diesel vehicles have better <strong>petrol average</strong> (more km per liter), they cost more to purchase and service. Here&apos;s a complete comparison:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 text-lg mb-4">⛽ Petrol (Gasoline) Vehicle</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-blue-800"><strong>Fuel Average:</strong> 10–16 km/L typical</p>
                  <p className="text-sm text-blue-800"><strong>Purchase Cost:</strong> Lower initial price</p>
                  <p className="text-sm text-blue-800"><strong>Service Cost:</strong> Lower maintenance costs</p>
                  <p className="text-sm text-blue-800"><strong>Best For:</strong> City driving, shorter distances</p>
                </div>
                <div className="bg-blue-100 rounded-lg p-3">
                  <p className="text-blue-900 text-xs font-medium">Best choice if you drive under 20,000 km/year in the city.</p>
                </div>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-white text-lg mb-4">🛢️ Diesel Vehicle</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-300"><strong className="text-white">Fuel Average:</strong> 14–22 km/L typical</p>
                  <p className="text-sm text-gray-300"><strong className="text-white">Purchase Cost:</strong> 15–25% higher than petrol</p>
                  <p className="text-sm text-gray-300"><strong className="text-white">Service Cost:</strong> Higher but less frequent</p>
                  <p className="text-sm text-gray-300"><strong className="text-white">Best For:</strong> Highway driving, high annual km</p>
                </div>
                <div className="bg-gray-700 rounded-lg p-3">
                  <p className="text-gray-200 text-xs font-medium">Best choice if you drive over 30,000 km/year on highways.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Petrol calculator use cases */}
          <section className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5 Practical Ways to Use a Petrol Calculator Daily</h2>
            <div className="space-y-4">
              {[
                { useCase: 'Plan your daily commute budget', detail: 'Enter your one-way commute distance, vehicle petrol average, and current petrol price. Multiply by 2 for daily cost, then by working days for monthly petrol expense.' },
                { useCase: 'Calculate petrol cost before a road trip', detail: 'Enter total journey distance, your car\'s petrol average (km/L), and the current petrol price. Our calculator shows you total liters needed and total petrol cost — including optional return journey.' },
                { useCase: 'Compare petrol cost between two routes', detail: 'Some routes are longer but have better traffic flow, meaning less stop-and-go and better petrol average. Calculate the cost for each route to find the truly cheaper option.' },
                { useCase: 'Track your fleet petrol expenses', detail: 'Business owners and fleet managers can use our petrol calculator for each vehicle, then combine results to get a total fleet petrol expense for the week, month, or quarter.' },
                { useCase: 'Test the impact of a new driving style', detail: 'After changing driving habits (e.g., gentle acceleration, less AC), measure your new petrol average and re-run the calculator to see exactly how much money you\'ve saved per month.' },
              ].map(({ useCase, detail }) => (
                <div key={useCase} className="bg-white p-4 rounded-xl border border-orange-100 flex gap-3 items-start">
                  <span className="text-orange-500 font-bold text-lg flex-shrink-0">⛽</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{useCase}</p>
                    <p className="text-gray-600 text-xs mt-1">{detail}</p>
                  </div>
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