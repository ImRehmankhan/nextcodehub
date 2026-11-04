import GasPriceCalculator from '../../components/GasPriceCalculator';
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
          name: 'Gas Price Calculator',
          item: 'https://www.nextcodehub.com/gas-price-calculator',
        },
      ],
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/gas-price-calculator',
      name: 'Gas Price Impact & Fuel Grade Calculator',
      url: 'https://www.nextcodehub.com/gas-price-calculator',
      description: 'Free gas price calculator to analyze the impact of fuel price fluctuations and compare fuel costs between Regular and Premium gasoline.',
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
          name: 'How do gas price increases impact my monthly bill?',
          acceptedAnswer: { '@type': 'Answer', text: 'Every $0.10 increase in gas price per gallon adds about $4.00 per month for every 1,000 miles driven in a 25 MPG car ($48/year). Use our gas price calculator to see the exact impact on your vehicle.' },
        },
        {
          '@type': 'Question',
          name: 'Is Premium gas worth the extra cost over Regular?',
          acceptedAnswer: { '@type': 'Answer', text: 'Unless your vehicle manufacturer explicitly requires Premium (91+ octane) for turbocharged or high-compression engines, Regular (87 octane) performs identically and typically saves you $0.60–$0.80 per gallon.' },
        },
        {
          '@type': 'Question',
          name: 'What is the average monthly gas bill?',
          acceptedAnswer: { '@type': 'Answer', text: 'The average American driver spends between $150 and $250 per month on gasoline, depending on miles driven, vehicle fuel efficiency, and state fuel taxes.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Gas Price Calculator: Fuel Price Increase & Grade Comparison",
  description: "Calculate the exact financial impact of gas price increases and compare fuel costs between Regular, Midgrade, and Premium fuel grades. 100% Free.",
  alternates: {
    canonical: 'https://www.nextcodehub.com/gas-price-calculator',
  },
  openGraph: {
    title: "Gas Price Calculator - Fuel Price Increase & Grade Comparison",
    description: "Calculate how fuel price hikes and gas grades impact your monthly budget with our free calculator.",
    url: 'https://www.nextcodehub.com/gas-price-calculator',
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
        <Breadcrumbs items={[{ name: 'Gas Price Calculator' }]} />
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Gas Price Impact Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Compare fuel prices, test price hike scenarios, and see how switching between Regular and Premium fuel grades changes your monthly and annual budget.
          </p>
        </div>

        <GasPriceCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How Gas Prices Impact Your Budget</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gas prices can change daily and vary by region, season, and global oil markets. Even a small change of $0.10 per gallon can significantly affect your monthly gas bill, especially if you drive frequently or own a low-MPG vehicle.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our <strong>gas price calculator</strong> lets you see exactly what your gas bill would be at different price levels, so you can plan ahead and budget accurately.
            </p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Gas Price</th>
                    <th className="text-left p-3">20 MPG Car (1000 mi/mo)</th>
                    <th className="text-left p-3">30 MPG Car (1000 mi/mo)</th>
                    <th className="text-left p-3 rounded-tr-lg">40 MPG Car (1000 mi/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['$2.50/gal', '$125/mo', '$83/mo', '$63/mo'],
                    ['$3.00/gal', '$150/mo', '$100/mo', '$75/mo'],
                    ['$3.50/gal', '$175/mo', '$117/mo', '$88/mo'],
                    ['$4.00/gal', '$200/mo', '$133/mo', '$100/mo'],
                    ['$4.50/gal', '$225/mo', '$150/mo', '$113/mo'],
                    ['$5.00/gal', '$250/mo', '$167/mo', '$125/mo'],
                  ].map(([price, ...bills]) => (
                    <tr key={price} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{price}</td>
                      {bills.map((b, i) => <td key={i} className="p-3 text-gray-600">{b}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate my gas bill?</h3>
                <p className="text-gray-600">Monthly miles ÷ MPG × gas price per gallon = monthly gas bill. Example: 1000 miles ÷ 30 MPG × $3.50 = $116.67/month. Use the calculator above for your exact figures.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How does gas price affect my monthly fuel expense?</h3>
                <p className="text-gray-600">Every $0.10/gallon increase adds ~$3.33/month for a 30 MPG car driving 1,000 miles. A $1.00/gallon increase adds $33/month.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What is the average monthly gas bill in the US?</h3>
                <p className="text-gray-600">The average American household spends $150–$300/month on gasoline. This varies by vehicle type, local gas prices, and how much you drive.</p>
              </div>
            </div>
          </section>

          {/* Gas price savings section */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Save Money When Gas Prices Are High</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              When fuel prices spike, your monthly gas bill can increase by hundreds of dollars annually. Here are proven, actionable strategies that drivers use to combat rising gas prices and minimize their fuel price exposure:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { strategy: 'Use a gas price app', detail: 'Apps like GasBuddy show cheapest stations near you. Savings: $0.10–$0.30 per gallon.', icon: '📱' },
                { strategy: 'Fill up on Tuesdays or Wednesdays', detail: 'Gas prices are typically lowest mid-week before the weekend surge.', icon: '📅' },
                { strategy: 'Join a loyalty rewards program', detail: 'Supermarket and retailer fuel cards save 5–20 cents per gallon.', icon: '🎁' },
                { strategy: 'Pay with cash', detail: 'Many stations charge 5–10 cents less per gallon for cash purchases.', icon: '💵' },
                { strategy: 'Improve your MPG', detail: 'Drive 60 instead of 70 mph and save up to 14% on your fuel price impact.', icon: '🚗' },
                { strategy: 'Shop at warehouse clubs', detail: 'Costco and Sam\'s Club gas is often 10–20 cents cheaper per gallon.', icon: '🏪' },
              ].map(({ strategy, detail, icon }) => (
                <div key={strategy} className="flex gap-3 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{strategy}</p>
                    <p className="text-gray-500 text-xs mt-1">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gas price impact on vehicle choice */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gas Price Impact: How Vehicle MPG Affects Your Annual Gas Bill</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The higher the gas price, the more critical your vehicle&apos;s fuel efficiency becomes. This table shows how your annual gas bill changes based on MPG and gas price, assuming 12,000 miles driven per year:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Vehicle MPG</th>
                    <th className="text-left p-3">At $3.00/gal</th>
                    <th className="text-left p-3">At $4.00/gal</th>
                    <th className="text-left p-3 rounded-tr-lg">At $5.00/gal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['15 MPG (large truck)', '$2,400/yr', '$3,200/yr', '$4,000/yr'],
                    ['20 MPG (SUV)', '$1,800/yr', '$2,400/yr', '$3,000/yr'],
                    ['30 MPG (sedan)', '$1,200/yr', '$1,600/yr', '$2,000/yr'],
                    ['40 MPG (efficient car)', '$900/yr', '$1,200/yr', '$1,500/yr'],
                    ['50 MPG (hybrid)', '$720/yr', '$960/yr', '$1,200/yr'],
                  ].map(([mpg, low, mid, high]) => (
                    <tr key={mpg} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{mpg}</td>
                      <td className="p-3 text-gray-600">{low}</td>
                      <td className="p-3 text-orange-600 font-medium">{mid}</td>
                      <td className="p-3 text-red-600 font-medium">{high}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">*Based on 12,000 miles/year. Use our gas price calculator above for your exact annual gas bill.</p>
          </section>

          {/* Understanding gas price components */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes Up the Gas Price at the Pump?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Understanding the components of a gas price helps you predict fuel price changes and better manage your gas bill. The price you pay per gallon or liter breaks down as follows:
            </p>
            <div className="space-y-3">
              {[
                { component: 'Crude Oil Cost', pct: '54%', desc: 'The largest driver of fuel price. Crude oil is traded globally — geopolitical events, OPEC decisions, and demand affect this daily.', color: 'bg-red-500' },
                { component: 'Refining Costs', pct: '17%', desc: 'Converting crude oil into gasoline. Refinery capacity and maintenance schedules affect availability and fuel price.', color: 'bg-orange-500' },
                { component: 'Taxes (Federal + State)', pct: '17%', desc: 'Federal gas tax is 18.4 cents/gallon. State taxes vary from 8 cents (Alaska) to 68 cents (California) per gallon.', color: 'bg-yellow-500' },
                { component: 'Distribution & Marketing', pct: '12%', desc: 'Costs to transport gasoline from refineries to stations and retailer profit margins.', color: 'bg-green-500' },
              ].map(({ component, pct, desc, color }) => (
                <div key={component} className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0 text-center">
                    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{pct}</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{component}</p>
                    <p className="text-gray-500 text-sm mt-1">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gas bill budgeting tips */}
          <section className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gas Bill Budgeting: How to Plan Your Monthly Fuel Expense</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              A gas bill is often overlooked in household budgets until it becomes a problem. Here&apos;s a simple system to budget your monthly gas expense accurately:
            </p>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Calculate your baseline gas bill', desc: 'Enter your average monthly mileage, vehicle MPG, and current gas price into our gas price calculator above to get your baseline monthly gas bill.' },
                { step: '2', title: 'Set a fuel price buffer', desc: 'Gas prices can fluctuate by 10–20% in a month. Add a 15% buffer to your gas bill estimate to account for price spikes.' },
                { step: '3', title: 'Track actual vs estimated spending', desc: 'Save your fuel receipts or use our fuel expense calculator to compare your actual gas bill against your budget monthly.' },
                { step: '4', title: 'Adjust for seasonal changes', desc: 'Gas prices typically rise in summer (due to summer blend requirements and travel demand) and in winter (heating fuel competition). Adjust your gas bill budget seasonally.' },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">{step}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{title}</p>
                    <p className="text-gray-600 text-sm mt-1">{desc}</p>
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
