import Link from 'next/link';

export default function RelatedLinks() {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mt-12 mb-12 max-w-7xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore Our Tools & Resources</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/fuel-cost-calculator" className="block p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary-500)] hover:shadow-md transition-all group">
          <h4 className="font-bold text-gray-900 group-hover:text-[var(--color-primary-600)] transition-colors flex justify-between items-center">
            Fuel Cost Calculator
            <svg className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-primary-500)]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </h4>
          <p className="text-sm text-gray-500 mt-1">Estimate trip expenses based on distance</p>
        </Link>
        <Link href="/fuel-mileage-calculator" className="block p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary-500)] hover:shadow-md transition-all group">
          <h4 className="font-bold text-gray-900 group-hover:text-[var(--color-primary-600)] transition-colors flex justify-between items-center">
            Fuel Mileage Calculator
            <svg className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-primary-500)]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </h4>
          <p className="text-sm text-gray-500 mt-1">Calculate your vehicle's mileage easily</p>
        </Link>
        <Link href="/mpg-calculator" className="block p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary-500)] hover:shadow-md transition-all group">
          <h4 className="font-bold text-gray-900 group-hover:text-[var(--color-primary-600)] transition-colors flex justify-between items-center">
            MPG Calculator
            <svg className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-primary-500)]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </h4>
          <p className="text-sm text-gray-500 mt-1">Convert and calculate miles per gallon</p>
        </Link>
        <Link href="/petrol-calculator" className="block p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary-500)] hover:shadow-md transition-all group">
          <h4 className="font-bold text-gray-900 group-hover:text-[var(--color-primary-600)] transition-colors flex justify-between items-center">
            Petrol Calculator
            <svg className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-primary-500)]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </h4>
          <p className="text-sm text-gray-500 mt-1">Track petrol consumption accurately</p>
        </Link>
        <Link href="/fuel-consumption-calculator" className="block p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary-500)] hover:shadow-md transition-all group">
          <h4 className="font-bold text-gray-900 group-hover:text-[var(--color-primary-600)] transition-colors flex justify-between items-center">
            Fuel Consumption Calculator
            <svg className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-primary-500)]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </h4>
          <p className="text-sm text-gray-500 mt-1">Determine how much fuel you consume</p>
        </Link>
        <Link href="/fuel-economy-calculator" className="block p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary-500)] hover:shadow-md transition-all group">
          <h4 className="font-bold text-gray-900 group-hover:text-[var(--color-primary-600)] transition-colors flex justify-between items-center">
            Fuel Economy Calculator
            <svg className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-primary-500)]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </h4>
          <p className="text-sm text-gray-500 mt-1">Find out your vehicle's true economy</p>
        </Link>
        <Link href="/blog" className="block p-4 rounded-xl border border-[var(--color-primary-100)] bg-[var(--color-primary-50)] hover:border-[var(--color-primary-500)] hover:shadow-md transition-all group md:col-span-2 lg:col-span-3">
          <h4 className="font-bold text-[var(--color-primary-700)] group-hover:text-[var(--color-primary-600)] transition-colors flex justify-between items-center text-center justify-center gap-2">
            Read Our Latest Blog Articles & Tips
            <svg className="transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </h4>
        </Link>
      </div>
    </div>
  );
}
