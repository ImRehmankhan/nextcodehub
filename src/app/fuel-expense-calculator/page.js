import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/fuel-expense-calculator',
      name: 'Fuel Expense Calculator',
      url: 'https://www.nextcodehub.com/fuel-expense-calculator',
      description: 'Free fuel expense calculator and petrol expense calculator. Track your daily, monthly, and annual fuel expenses to manage your transport budget.',
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
          name: 'How do I calculate my monthly fuel expense?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate monthly fuel expense: (Monthly distance ÷ Fuel mileage) × Fuel price per liter = Monthly fuel expense. Our calculator lets you compute daily, weekly, or monthly fuel expenses instantly.' },
        },
        {
          '@type': 'Question',
          name: 'How can I reduce my fuel expenses?',
          acceptedAnswer: { '@type': 'Answer', text: 'Reduce fuel expenses by carpooling, using fuel-efficient routes, maintaining proper tire pressure, avoiding peak traffic, and keeping up with regular vehicle maintenance to maximize your fuel average.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between fuel expense and fuel cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'Fuel expense usually refers to your total fuel spending over a period (daily, monthly, annually), while fuel cost typically refers to the cost for a specific trip or journey. Our fuel expense calculator helps track both.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Fuel Expense Calculator: Monthly Fuel Budget & Costs",
  description: "Calculate daily, monthly, and annual fuel expenses easily. Budget petrol costs, track commute expenses, and find out where you can save on gas.",
  keywords: [
    "fuel expense calculator",
    "petrol expense calculator",
    "monthly fuel expense",
    "fuel budget calculator",
    "calculate fuel expense",
    "annual fuel cost calculator",
    "daily fuel expense",
    "transport expense calculator",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/fuel-expense-calculator',
  },
  openGraph: {
    title: "Fuel Expense Calculator - Track Petrol & Monthly Fuel Costs",
    description: "Calculate daily, monthly, and annual fuel expenses with our free fuel expense calculator. Manage your petrol expense budget effectively.",
    url: 'https://www.nextcodehub.com/fuel-expense-calculator',
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
            Fuel Expense Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Track and calculate your daily, monthly, and annual fuel expenses. Our petrol expense calculator helps you budget your transport costs and identify opportunities to save on fuel.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Track Your Fuel Expenses</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Fuel expenses are often one of the largest variable costs in a household budget. By systematically tracking your petrol expense, you can identify patterns, reduce waste, and plan more effectively.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { period: 'Daily Fuel Expense', formula: 'Daily km ÷ km/L × Price/L', example: '50km ÷ 15km/L × $1.50 = $5.00/day' },
                { period: 'Monthly Fuel Expense', formula: 'Monthly km ÷ km/L × Price/L', example: '1,500km ÷ 15km/L × $1.50 = $150/month' },
                { period: 'Annual Fuel Expense', formula: 'Annual km ÷ km/L × Price/L', example: '18,000km ÷ 15km/L × $1.50 = $1,800/yr' },
              ].map(({ period, formula, example }) => (
                <div key={period} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-2">{period}</h3>
                  <p className="font-mono text-xs text-primary-700 bg-primary-50 p-2 rounded-lg mb-2">{formula}</p>
                  <p className="text-xs text-gray-500">{example}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Typical Monthly Petrol Expense by Commute Type</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Commute Type</th>
                    <th className="text-left p-3">Monthly km</th>
                    <th className="text-left p-3">At 12 km/L</th>
                    <th className="text-left p-3 rounded-tr-lg">At 18 km/L</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Short commute (10 km/day)', '300 km', '$37.50', '$25.00'],
                    ['Medium commute (25 km/day)', '750 km', '$93.75', '$62.50'],
                    ['Long commute (50 km/day)', '1,500 km', '$187.50', '$125.00'],
                    ['Road traveler (100 km/day)', '3,000 km', '$375.00', '$250.00'],
                  ].map(([type, km, low, high]) => (
                    <tr key={type} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{type}</td>
                      <td className="p-3 text-gray-600">{km}</td>
                      <td className="p-3 text-red-600 font-medium">{low}</td>
                      <td className="p-3 text-green-600 font-medium">{high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-400 mt-2">*Calculated at $1.50/liter. Adjust based on your local fuel price.</p>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ways to Reduce Your Petrol Expense</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Carpool or rideshare', saving: 'Save 25–50% on fuel expense' },
                { tip: 'Combine errands into one trip', saving: 'Save 10–20% on daily fuel cost' },
                { tip: 'Work from home 1 day/week', saving: 'Save ~20% on monthly petrol expense' },
                { tip: 'Drive at off-peak hours', saving: 'Reduce fuel waste from traffic by 15%' },
                { tip: 'Keep tires properly inflated', saving: 'Improve fuel average by up to 3%' },
                { tip: 'Switch to a fuel-efficient vehicle', saving: 'Reduce fuel expense by 30–50%' },
              ].map(({ tip, saving }) => (
                <div key={tip} className="flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-xl">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{tip}</p>
                    <p className="text-green-700 text-xs font-medium">{saving}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate my monthly fuel expense?</h3>
                <p className="text-gray-600">Monthly km ÷ fuel mileage (km/L) × fuel price = monthly expense. Example: 1500 km ÷ 15 km/L × $1.50/L = $150/month.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How can I reduce my fuel expenses?</h3>
                <p className="text-gray-600">Carpool, combine trips, drive during off-peak hours, maintain your vehicle, and keep tires inflated. These changes can reduce petrol expense by 20–50%.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What is the difference between fuel expense and fuel cost?</h3>
                <p className="text-gray-600">Fuel expense = total spending over a time period (monthly, annually). Fuel cost = the cost for a specific trip. Both are calculated the same way — distance ÷ mileage × price.</p>
              </div>
            </div>
          </section>

          {/* Annual fuel expense vs total ownership cost */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Fuel Expense vs Total Vehicle Ownership Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Your annual <strong>petrol expense</strong> is just one component of the total cost of owning a vehicle. Understanding how fuel expense fits into the bigger picture helps you make smarter vehicle purchasing decisions:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Cost Category</th>
                    <th className="text-left p-3">Economy Car</th>
                    <th className="text-left p-3">Midsize Sedan</th>
                    <th className="text-left p-3 rounded-tr-lg">Large SUV</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Annual Fuel Expense', '$1,200/yr', '$1,600/yr', '$2,800/yr'],
                    ['Insurance', '$800/yr', '$1,200/yr', '$1,800/yr'],
                    ['Maintenance & Repairs', '$600/yr', '$900/yr', '$1,400/yr'],
                    ['Depreciation', '$2,000/yr', '$3,500/yr', '$6,000/yr'],
                    ['Registration & Taxes', '$200/yr', '$350/yr', '$500/yr'],
                    ['Total Annual Cost', '$4,800/yr', '$7,550/yr', '$12,500/yr'],
                    ['Cost Per Mile (12k mi/yr)', '$0.40/mi', '$0.63/mi', '$1.04/mi'],
                  ].map(([cat, eco, mid, suv], idx) => (
                    <tr key={cat} className={`hover:bg-gray-50 ${idx === 5 ? 'font-bold border-t-2 border-gray-300' : ''}`}>
                      <td className={`p-3 ${idx === 0 ? 'text-primary-700 font-bold' : 'font-medium text-gray-900'}`}>{cat}</td>
                      <td className={`p-3 text-gray-600 ${idx === 0 ? 'text-primary-700 font-bold' : ''}`}>{eco}</td>
                      <td className={`p-3 text-gray-600 ${idx === 0 ? 'text-primary-700 font-bold' : ''}`}>{mid}</td>
                      <td className={`p-3 text-gray-600 ${idx === 0 ? 'text-primary-700 font-bold' : ''}`}>{suv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">*Estimated for US market. Fuel expense calculated at $3.50/gallon, 12,000 miles/year. Economy car = 38 MPG, Midsize = 28 MPG, SUV = 20 MPG.</p>
          </section>

          {/* Tax deductions for fuel expense */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Can You Deduct Your Fuel Expense on Taxes?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you use your vehicle for business, you may be able to deduct your <strong>fuel expense</strong> from your taxable income. Here&apos;s how the two main methods work in the US:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="font-bold text-blue-900 mb-3">📋 Method 1: Standard Mileage Rate</h3>
                <p className="text-blue-800 text-sm mb-3">Multiply your business miles by the IRS standard rate.</p>
                <div className="bg-blue-100 rounded-lg p-3 font-mono text-xs">
                  <p>2024 Rate: 67 cents per mile</p>
                  <p>Example: 10,000 business miles</p>
                  <p className="font-bold text-blue-900 mt-1">Deduction: $6,700</p>
                </div>
                <p className="text-blue-700 text-xs mt-3">✅ Simpler. No need to track actual fuel expense receipts.</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="font-bold text-green-900 mb-3">📊 Method 2: Actual Expense Method</h3>
                <p className="text-green-800 text-sm mb-3">Deduct actual fuel expense and other vehicle costs proportional to business use.</p>
                <div className="bg-green-100 rounded-lg p-3 font-mono text-xs">
                  <p>Annual fuel expense: $2,000</p>
                  <p>Business use: 70%</p>
                  <p className="font-bold text-green-900 mt-1">Deduction: $1,400 (fuel only)</p>
                </div>
                <p className="text-green-700 text-xs mt-3">✅ Better when actual fuel expense exceeds standard rate value.</p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-amber-900 text-sm font-semibold">⚠️ Important Note</p>
              <p className="text-amber-800 text-sm mt-1">Fuel expense deductions require you to keep a mileage log documenting date, destination, and business purpose for every trip. The IRS requires contemporaneous records — retroactive estimates are not accepted. Use our fuel expense calculator to maintain accurate monthly records.</p>
            </div>
          </section>

          {/* Fuel expense strategies */}
          <section className="bg-gradient-to-br from-violet-50 to-purple-50 p-8 rounded-2xl border border-violet-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Strategies to Minimize Your Monthly Fuel Expense</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beyond basic tips, these strategic approaches can dramatically reduce your annual <strong>petrol expense</strong>:
            </p>
            <div className="space-y-4">
              {[
                {
                  strategy: '🏠 Remote Work Negotiation',
                  impact: 'Save $200–$500/month on fuel expense',
                  detail: 'Negotiating 2 work-from-home days per week eliminates 40% of your commute. For a $300/month commuter, that\'s $1,440 saved annually — more than many car payments.'
                },
                {
                  strategy: '🚌 Transit + Park & Ride',
                  impact: 'Save $100–$300/month on fuel expense',
                  detail: 'Drive to the nearest park-and-ride lot and take transit into the city center. You pay for parking and transit but eliminate high-traffic fuel consumption on the most expensive part of your commute.'
                },
                {
                  strategy: '⚡ Electric Vehicle Conversion',
                  impact: 'Save 60–80% on fuel expense',
                  detail: 'The average EV owner pays ~$500–700/year in electricity vs $2,000–3,500/year in gasoline. At current electricity rates, driving an EV costs the equivalent of ~$1.20/gallon gasoline.'
                },
                {
                  strategy: '🛢️ Fleet Fuel Card Programs',
                  impact: 'Save 3–8% on all fuel purchases',
                  detail: 'For businesses with multiple vehicles, fleet fuel card programs from Shell, ExxonMobil, or WEX offer volume discounts and centralized billing for all petrol expense management.'
                },
                {
                  strategy: '📊 Fuel Expense Tracking App',
                  impact: 'Identify 10–15% waste reduction opportunities',
                  detail: 'Systematically tracking your petrol expense using our calculator alongside an app like Fuelio reveals patterns: time of day, route, or driver that increases fuel expense disproportionately.'
                },
              ].map(({ strategy, impact, detail }) => (
                <div key={strategy} className="bg-white p-4 rounded-xl border border-violet-100 flex gap-4 items-start">
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <p className="font-bold text-gray-900 text-sm">{strategy}</p>
                      <span className="text-violet-700 text-xs font-bold bg-violet-100 px-2 py-0.5 rounded-full">{impact}</span>
                    </div>
                    <p className="text-gray-600 text-xs">{detail}</p>
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
