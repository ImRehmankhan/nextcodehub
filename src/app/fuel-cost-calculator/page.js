import FuelCalculator from '../../components/FuelCalculator';
import Link from 'next/link';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = {
  title: "Fuel Cost Calculator - Estimate Trip Expenses",
  description: "Free fuel cost calculator to estimate trip expenses based on distance, fuel efficiency, and gas price. Plan your journey and save money.",
};

export default function Page() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Fuel Cost <span className="text-[var(--color-primary-500)]">Calculator</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estimate your total fuel expenses for any journey instantly. Plan your road trips, daily commutes, or monthly budgets with precision.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <FuelCalculator />
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* How it works & Steps */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How the Fuel Cost Calculator Works</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our fuel cost calculator helps you estimate your total fuel expenses for any journey. Whether you're planning a road trip, calculating daily commute costs, or budgeting for monthly fuel expenses, this tool provides instant, accurate calculations.
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Simple Steps to Calculate Fuel Cost:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center font-bold text-sm">1</span>
                  <span><strong>Select unit system:</strong> Choose Metric (km/L) or Imperial (MPG)</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center font-bold text-sm">2</span>
                  <span><strong>Enter distance:</strong> Input trip length in km or miles</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center font-bold text-sm">3</span>
                  <span><strong>Input efficiency:</strong> Enter vehicle mileage</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center font-bold text-sm">4</span>
                  <span><strong>Fuel price:</strong> Add current price per unit</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center font-bold text-sm">5</span>
                  <span><strong>Select vehicle/trip type:</strong> Choose one-way or round trip</span>
                </li>
                <li className="flex gap-3 text-gray-600">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-primary-50)] text-[var(--color-primary-600)] flex items-center justify-center font-bold text-sm">6</span>
                  <span><strong>Calculate:</strong> Get instant results for fuel required and total cost</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Example Calculation Card */}
          <div className="bg-[#1f1f23] rounded-3xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary-500)" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              Example Calculation
            </h3>
            <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider font-semibold">Road Trip Example (Car):</p>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Distance</span>
                <span className="font-semibold">300 km (one-way)</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Fuel Efficiency</span>
                <span className="font-semibold">15 km/L</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Fuel Price</span>
                <span className="font-semibold">$1.50 per liter</span>
              </div>
              <div className="flex justify-between border-b border-gray-700 pb-2">
                <span className="text-gray-400">Trip Type</span>
                <span className="font-semibold text-[var(--color-primary-500)]">Round trip</span>
              </div>
            </div>
            <div className="bg-[#2a2a2f] p-4 rounded-xl">
              <p className="text-[var(--color-primary-500)] text-sm mb-2 font-semibold">Results:</p>
              <div className="flex justify-between items-end mb-2">
                <div>
                  <p className="text-3xl font-bold text-white">$60.00</p>
                  <p className="text-sm text-gray-400 mt-1">Total Cost</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-white">40 Liters</p>
                  <p className="text-sm text-gray-400 mt-1">Fuel Required</p>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-400 pt-2 border-t border-gray-700 mt-2">
                <span>600 km total distance</span>
                <span>$0.10 cost per km</span>
              </div>
            </div>
          </div>
        </section>

        {/* AdSense Placeholder */}
        <div className="bg-gray-200 text-gray-400 w-full h-32 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300">
          <span className="font-medium">Advertisement</span>
          <span className="text-sm">[ AdSense Slot - mid-content ]</span>
        </div>

        {/* Features */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Use Our Fuel Cost Calculator?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--color-primary-50)] text-[var(--color-primary-600)] rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accurate Results</h3>
              <p className="text-gray-600 text-sm">Get precise fuel cost calculations based on real-time data and accurate formulas.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--color-primary-50)] text-[var(--color-primary-600)] rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trip Planning</h3>
              <p className="text-gray-600 text-sm">Plan your road trips and budget accurately before you hit the road.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--color-primary-50)] text-[var(--color-primary-600)] rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Budget Management</h3>
              <p className="text-gray-600 text-sm">Track and manage your monthly fuel expenses with ease.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[var(--color-primary-50)] text-[var(--color-primary-600)] rounded-xl flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free & Easy</h3>
              <p className="text-gray-600 text-sm">100% free to use, no registration required. Instant calculations.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How do I calculate fuel cost for a trip?</h3>
              <p className="text-gray-600">To calculate fuel cost, divide your trip distance by your vehicle's fuel efficiency to get fuel required, then multiply by the current fuel price. Our calculator does this automatically.</p>
            </div>
            
            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What is a good fuel mileage?</h3>
              <p className="text-gray-600">For cars, 12-15 km/L (28-35 MPG) is considered average. Hybrid vehicles can achieve 20+ km/L (47+ MPG), while SUVs typically get 8-12 km/L (19-28 MPG).</p>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">How can I reduce my fuel costs?</h3>
              <p className="text-gray-600">Maintain proper tire pressure, avoid aggressive driving, reduce excess weight, use cruise control on highways, and keep your engine well-maintained. These can improve fuel efficiency by 10-25%.</p>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">What factors affect fuel consumption?</h3>
              <p className="text-gray-600">Driving habits, vehicle condition, tire pressure, air conditioning usage, traffic conditions, terrain, and vehicle load all significantly impact fuel consumption.</p>
            </div>

            <div className="border-b border-gray-100 pb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Is this calculator accurate for all vehicles?</h3>
              <p className="text-gray-600">Yes, the calculator works for cars, motorcycles, trucks, and SUVs. Just enter your specific vehicle's fuel efficiency for accurate results.</p>
            </div>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Can I calculate costs for international trips?</h3>
              <p className="text-gray-600">Absolutely! Switch between Metric (km/L) and Imperial (MPG) units to calculate fuel costs regardless of your location.</p>
            </div>

          </div>
        </section>
        
        {/* AdSense Placeholder */}
        <div className="bg-gray-200 text-gray-400 w-full h-32 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300">
          <span className="font-medium">Advertisement</span>
          <span className="text-sm">[ AdSense Slot - mid-content ]</span>
        </div>

        {/* Pro Tips & Related Calculators */}
        <section className="grid md:grid-cols-2 gap-8">
          
          {/* Pro Tips */}
          <div className="bg-gray-900 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* Subtle background accent */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--color-primary-500)] opacity-20 rounded-full blur-3xl"></div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="bg-[var(--color-primary-500)] text-white p-2 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v10l4.5 4.5"></path><circle cx="12" cy="12" r="10"></circle></svg>
              </div>
              Pro Tips for Saving Fuel Costs
            </h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex gap-3 items-start">
                <svg className="flex-shrink-0 text-[var(--color-primary-500)] mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Plan your route:</strong> Use GPS to avoid traffic and find the shortest route.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="flex-shrink-0 text-[var(--color-primary-500)] mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Regular maintenance:</strong> Keep your engine tuned for optimal efficiency.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="flex-shrink-0 text-[var(--color-primary-500)] mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Minimize AC use:</strong> Use it wisely to save up to 20% on fuel.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="flex-shrink-0 text-[var(--color-primary-500)] mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Smooth driving:</strong> Avoid sudden acceleration and braking.</span>
              </li>
              <li className="flex gap-3 items-start">
                <svg className="flex-shrink-0 text-[var(--color-primary-500)] mt-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span><strong>Track your mileage:</strong> Monitor fuel efficiency to spot problems early.</span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <RelatedLinks />
          </div>
        </section>

      </div>
    </div>
  );
}