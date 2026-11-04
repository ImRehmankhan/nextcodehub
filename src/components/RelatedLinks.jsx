import Link from 'next/link';

const tools = [
  { href: '/fuel-cost-calculator', title: 'Trip Fuel Cost Calculator', desc: 'Estimate road trip gas costs & split with passengers' },
  { href: '/fuel-expense-calculator', title: 'Fuel Expense Calculator', desc: 'Budget daily commute & annual fuel spending' },
  { href: '/gas-price-calculator', title: 'Gas Price Impact Calculator', desc: 'Compare price hikes & Regular vs Premium costs' },
  { href: '/petrol-calculator', title: 'Petrol Tank & Range Calculator', desc: 'Calculate tank refill cost & driving range on full tank' },
  { href: '/fuel-mileage-calculator', title: 'Fuel Mileage Calculator', desc: 'Calculate petrol & gas mileage easily' },
  { href: '/mpg-calculator', title: 'MPG Calculator', desc: 'Calculate miles per gallon accurately' },
  { href: '/fuel-consumption-calculator', title: 'Fuel Consumption Calculator', desc: 'Determine how much fuel you consume' },
  { href: '/fuel-economy-calculator', title: 'Fuel Economy Calculator', desc: 'Find your vehicle\'s true fuel economy' },
  { href: '/gas-mileage-calculator', title: 'Gas Mileage Calculator', desc: 'Estimate gas mileage for any car' },
  { href: '/fuel-efficiency-calculator', title: 'Fuel Efficiency Calculator', desc: 'Measure & improve vehicle efficiency' },
  { href: '/fuel-average-calculator', title: 'Fuel Average Calculator', desc: 'Track petrol average in km/L or MPG' },
];

export default function RelatedLinks() {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mt-12 mb-12 max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Explore All Fuel Calculators</h3>
      <p className="text-gray-500 text-center text-sm mb-6">Free tools to calculate fuel cost, mileage, MPG, petrol average, and more</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <Link 
          href="/blog/understanding-fuel-consumption-efficiency" 
          className="block p-4 rounded-xl border border-emerald-300 bg-emerald-50/80 hover:bg-emerald-100/80 hover:border-emerald-400 hover:shadow-md transition-all group md:col-span-2 lg:col-span-3"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-200/70 px-2 py-0.5 rounded-full">
                  Featured Guide
                </span>
                <span className="text-xs text-emerald-700 font-medium">Formulas &amp; Worked Examples</span>
              </div>
              <h4 className="font-bold text-emerald-950 group-hover:text-emerald-800 transition-colors text-base">
                Fuel Consumption and Fuel Efficiency: Meaning, Formula and How to Calculate
              </h4>
              <p className="text-xs text-emerald-800 mt-0.5">
                Learn what fuel consumption and fuel efficiency mean, the formulas for L/100km, km/L and MPG, and how to calculate yours with worked examples.
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-white/80 px-3 py-1.5 rounded-lg border border-emerald-200 group-hover:translate-x-1 transition-all flex-shrink-0 self-start sm:self-auto">
              Read Guide &rarr;
            </span>
          </div>
        </Link>
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
