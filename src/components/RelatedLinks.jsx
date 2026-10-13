import Link from 'next/link';

const tools = [
  { href: '/fuel-cost-calculator', title: 'Fuel Cost Calculator', desc: 'Estimate trip expenses based on distance' },
  { href: '/fuel-mileage-calculator', title: 'Fuel Mileage Calculator', desc: 'Calculate petrol & gas mileage easily' },
  { href: '/mpg-calculator', title: 'MPG Calculator', desc: 'Calculate miles per gallon accurately' },
  { href: '/petrol-calculator', title: 'Petrol Calculator', desc: 'Track petrol cost & petrol average' },
  { href: '/fuel-consumption-calculator', title: 'Fuel Consumption Calculator', desc: 'Determine how much fuel you consume' },
  { href: '/fuel-economy-calculator', title: 'Fuel Economy Calculator', desc: 'Find your vehicle\'s true fuel economy' },
  { href: '/gas-mileage-calculator', title: 'Gas Mileage Calculator', desc: 'Estimate gas mileage for any car' },
  { href: '/gas-price-calculator', title: 'Gas Price Calculator', desc: 'Calculate your monthly gas bill' },
  { href: '/fuel-efficiency-calculator', title: 'Fuel Efficiency Calculator', desc: 'Measure & improve vehicle efficiency' },
  { href: '/fuel-average-calculator', title: 'Fuel Average Calculator', desc: 'Track petrol average in km/L or MPG' },
  { href: '/fuel-expense-calculator', title: 'Fuel Expense Calculator', desc: 'Budget your monthly petrol expense' },
];

export default function RelatedLinks() {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mt-12 mb-12 max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Explore All Fuel Calculators</h3>
      <p className="text-gray-500 text-center text-sm mb-6">Free tools to calculate fuel cost, mileage, MPG, petrol average, and more</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {tools.map(({ href, title, desc }) => (
          <Link key={href} href={href} className="block p-4 rounded-xl border border-gray-100 hover:border-primary-500 hover:shadow-md transition-all group">
            <h4 className="font-bold text-gray-900 group-hover:text-primary-700 transition-colors flex justify-between items-center">
              {title}
              <svg className="opacity-0 group-hover:opacity-100 transition-opacity text-primary-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </h4>
            <p className="text-sm text-gray-600 mt-1">{desc}</p>
          </Link>
        ))}
        <Link href="/blog" className="block p-4 rounded-xl border border-primary-200 bg-primary-50 hover:border-primary-400 hover:shadow-md transition-all group md:col-span-2 lg:col-span-3">
          <h4 className="font-bold text-primary-800 group-hover:text-primary-900 transition-colors flex items-center justify-center gap-2">
            Read Our Fuel Saving Tips &amp; Blog Articles
            <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </h4>
        </Link>
      </div>
    </div>
  );
}
