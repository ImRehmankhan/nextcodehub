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
  title: "Fuel Economy Calculator: Check & Convert MPG to km/L",
  description: "Check your vehicle's fuel economy rating and convert between MPG, km/L, and L/100km. Discover how to improve gas mileage and save money on fuel.",
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

          {/* EV MPGe section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Electric Vehicle Fuel Economy: Understanding MPGe</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              With the rise of electric and hybrid vehicles, a new measure of <strong>fuel economy</strong> has emerged: <strong>MPGe (Miles Per Gallon equivalent)</strong>. This allows EV buyers to compare electric vehicle efficiency against traditional gasoline cars on a familiar scale.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">How MPGe is Calculated</h3>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg space-y-1">
                <p>1 gallon of gasoline = 33.7 kWh of energy</p>
                <p>MPGe = Miles driven on 33.7 kWh ÷ 1 (gallon equivalent)</p>
                <p className="text-gray-400 mt-2">Example: A Tesla Model 3 uses 24 kWh/100 miles</p>
                <p className="text-yellow-400">MPGe = 100 miles × (33.7 ÷ 24) = 140 MPGe</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Vehicle</th>
                    <th className="text-left p-3">Type</th>
                    <th className="text-left p-3">MPGe / MPG</th>
                    <th className="text-left p-3 rounded-tr-lg">Annual Fuel Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Tesla Model 3 LR', 'Battery EV', '134 MPGe', '~$750/yr electricity'],
                    ['Chevrolet Bolt EV', 'Battery EV', '120 MPGe', '~$850/yr electricity'],
                    ['Toyota Prius Prime', 'PHEV', '114 MPGe (elec) / 54 MPG', '~$900/yr hybrid'],
                    ['Toyota Prius (HEV)', 'Full Hybrid', '57 MPG combined', '~$1,200/yr gas'],
                    ['Honda Civic', 'Petrol', '33 MPG combined', '~$2,100/yr gas'],
                    ['Ford F-150 (V8)', 'Petrol Truck', '17 MPG combined', '~$4,100/yr gas'],
                  ].map(([vehicle, type, mpg, cost]) => (
                    <tr key={vehicle} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{vehicle}</td>
                      <td className="p-3 text-gray-500 text-xs">{type}</td>
                      <td className="p-3 text-primary-700 font-bold">{mpg}</td>
                      <td className="p-3 text-emerald-700 font-medium">{cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">*Annual fuel cost at national average electricity rates ($0.16/kWh) and gasoline ($3.50/gallon), 12,000 miles/year.</p>
          </section>

          {/* Fuel economy rating systems worldwide */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Fuel Economy is Rated Around the World</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Different countries use different testing standards and measurement units for <strong>fuel economy</strong>. This can cause confusion when comparing international vehicle models. Here&apos;s a breakdown of the major global fuel economy rating systems:
            </p>
            <div className="space-y-4">
              {[
                {
                  country: '🇺🇸 United States — EPA (Environmental Protection Agency)',
                  unit: 'Miles Per Gallon (MPG)',
                  test: 'City (FTP-75), Highway (HWFET), Combined (55% city / 45% highway)',
                  note: 'Real-world figures are typically 10–20% lower than EPA labels. The EPA added a "real-world" adjustment to 2008+ labels.',
                },
                {
                  country: '🇪🇺 European Union — WLTP (Worldwide Harmonised Light Vehicles Test Procedure)',
                  unit: 'Liters per 100km (L/100km)',
                  test: 'Four speed phases: Low, Medium, High, Extra High — total ~30 minute test',
                  note: 'More realistic than the old NEDC test. Added in 2017 to better reflect real driving.',
                },
                {
                  country: '🇬🇧 United Kingdom — WLTP (Post-Brexit)',
                  unit: 'Miles Per Gallon (Imperial) & CO₂ g/km',
                  test: 'Same WLTP procedure as EU. UK still uses MPG alongside metric figures.',
                  note: 'UK MPG is higher than US MPG because UK uses the larger Imperial gallon (4.546L vs 3.785L).',
                },
                {
                  country: '🇯🇵 Japan — JC08 / WLTC Cycle',
                  unit: 'km/L (Kilometers per Liter)',
                  test: 'Urban JC08 cycle (cold start + hot start) — transitioning to WLTC globally aligned test',
                  note: 'Japanese km/L ratings tend to be optimistic due to the low-speed urban focus of JC08.',
                },
                {
                  country: '🇮🇳 🇵🇰 India, Pakistan — ARAI / NEDC',
                  unit: 'km/L (Kilometers per Liter)',
                  test: 'ARAI (India) tests under controlled conditions. Pakistan uses manufacturer claims.',
                  note: 'Real-world fuel economy in South Asian conditions is typically 20–30% below claimed figures due to heat, traffic, and fuel quality.',
                },
              ].map(({ country, unit, test, note }) => (
                <div key={country} className="p-5 bg-gray-50 rounded-xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 text-sm mb-2">{country}</h3>
                  <div className="grid sm:grid-cols-3 gap-2">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Unit</p>
                      <p className="text-sm font-medium text-primary-700">{unit}</p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="text-xs text-gray-400 uppercase tracking-wide">Test Method</p>
                      <p className="text-xs text-gray-600">{test}</p>
                    </div>
                  </div>
                  <p className="text-xs text-amber-700 bg-amber-50 rounded-lg p-2 mt-3">💡 {note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fuel economy buying guide */}
          <section className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl border border-teal-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Car Buyer&apos;s Checklist: Evaluating Fuel Economy Before Purchase</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Before committing to any vehicle purchase, use this fuel economy evaluation checklist. Our <strong>fuel economy calculator</strong> can help you estimate real costs for each option:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { check: '✅ Look up the combined MPG/km/L rating', detail: 'Use the official EPA (fueleconomy.gov) or ARAI database to find rated fuel economy. Always use Combined rating, not just Highway.' },
                { check: '✅ Calculate annual fuel cost', detail: 'Enter the rated fuel economy into our fuel economy calculator along with your expected annual mileage and local fuel price for a realistic annual cost estimate.' },
                { check: '✅ Check real-world owner reports', detail: 'Consult owner forums, Consumer Reports, and fuelly.com for real-world fuel economy data submitted by actual owners in similar climates and driving conditions.' },
                { check: '✅ Compare 5-year fuel cost difference', detail: 'A car with 40 MPG vs 25 MPG saves ~$1,800/year at $3.50/gal. Over 5 years, that\'s $9,000 — often worth paying a premium for a more efficient model.' },
                { check: '✅ Factor in fuel type requirements', detail: 'Some turbocharged engines require premium fuel (91+ octane) which costs 15–20% more per gallon. Factor this into your fuel economy calculation.' },
                { check: '✅ Test drive under your conditions', detail: 'A 15-minute test drive through your typical commute route gives you real consumption data. Note starting fuel level and check at return to estimate real-world economy.' },
              ].map(({ check, detail }) => (
                <div key={check} className="bg-white p-4 rounded-xl border border-teal-100">
                  <p className="font-bold text-teal-900 text-sm mb-2">{check}</p>
                  <p className="text-gray-600 text-xs">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mathematical Harmonic Mean EPA Formula */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              The Math Behind Combined Fuel Economy: Harmonic Mean Formula
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Many motorists mistakenly believe that Combined Fuel Economy is a simple arithmetic average of City and Highway MPG (e.g., (30 + 40) ÷ 2 = 35 MPG). <strong>This is mathematically incorrect!</strong>
            </p>
            <p className="text-gray-600 leading-relaxed text-sm">
              Because fuel economy is measured as distance per unit of fuel (MPG or km/L), the US EPA weights combined fuel economy using the <strong>Harmonic Mean</strong> assuming 55% city driving and 45% highway driving:
            </p>
            <div className="p-5 bg-gray-900 text-green-400 rounded-2xl font-mono text-xs sm:text-sm space-y-2">
              <p className="text-gray-400 font-semibold">EPA Combined MPG Harmonic Mean Formula:</p>
              <p>Combined MPG = 1 ÷ [ (0.55 ÷ City MPG) + (0.45 ÷ Highway MPG) ]</p>
              <div className="pt-2 text-yellow-300">
                <p>Example: 25 City MPG &amp; 35 Highway MPG:</p>
                <p className="text-white">Arithmetic Average = (25 + 35) ÷ 2 = 30.0 MPG</p>
                <p className="text-emerald-400 font-bold">Actual True EPA Combined = 1 ÷ [(0.55/25) + (0.45/35)] = 28.68 MPG</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Notice that the true combined rating (28.68 MPG) is lower than the simple average (30.0 MPG). This occurs because you spend more time burning fuel in slower, less efficient city traffic.
            </p>
          </section>

          {/* Aerodynamics & Speed Curve */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Aerodynamic Drag vs Fuel Economy: The Speed Penalty Curve
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Aerodynamic drag increases with the square of your vehicle speed, and the power required to overcome that drag increases with the <strong>cube of speed</strong>. This is why fuel economy drops drastically above 50 mph (80 km/h):
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold border-b border-gray-200">
                    <th className="text-left p-3">Highway Speed</th>
                    <th className="text-center p-3">Fuel Economy Penalty</th>
                    <th className="text-center p-3">Effective Gas Price Increase</th>
                    <th className="text-left p-3">Impact on 30 MPG Baseline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-emerald-700">55 mph (88 km/h)</td>
                    <td className="p-3 text-center text-emerald-700 font-bold">0% (Optimal)</td>
                    <td className="p-3 text-center text-gray-600">Base price ($3.50/gal)</td>
                    <td className="p-3 text-gray-600">30.0 MPG</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-gray-900">65 mph (105 km/h)</td>
                    <td className="p-3 text-center text-amber-600 font-bold">-8% MPG</td>
                    <td className="p-3 text-center text-gray-600">+$0.28 / gal equivalent</td>
                    <td className="p-3 text-gray-600">27.6 MPG</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-gray-900">75 mph (120 km/h)</td>
                    <td className="p-3 text-center text-orange-600 font-bold">-17% MPG</td>
                    <td className="p-3 text-center text-gray-600">+$0.60 / gal equivalent</td>
                    <td className="p-3 text-gray-600">24.9 MPG</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-3 font-semibold text-red-700">80 mph (130 km/h)</td>
                    <td className="p-3 text-center text-red-700 font-bold">-28% MPG</td>
                    <td className="p-3 text-center text-gray-600">+$0.98 / gal equivalent</td>
                    <td className="p-3 text-gray-600">21.6 MPG</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}