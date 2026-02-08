import AdSenseBlock from '@/components/ui/AdSenseBlock';
import { FuelCalculatorSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import ViewerLayout from '@/components/viewer/viewer-layout';
import Icon from '@/components/icon';


export const metadata = {
  title: 'EV vs Petrol Calculator – Compare Electric vs Gas Car Costs',
  description: 'Compare electric vehicle (EV) costs vs petrol/gas cars. Calculate fuel savings, charging costs, maintenance, and total ownership cost. Make an informed EV purchase decision.',
  keywords: 'EV vs petrol calculator, electric car cost calculator, EV vs gas comparison, electric vehicle savings, EV cost calculator',
  openGraph: {
    title: 'EV vs Petrol Calculator – Compare Electric vs Gas Car Costs',
    description: 'Compare electric vehicle costs vs traditional petrol cars including fuel, maintenance, and total ownership.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/ev-vs-petrol-calculator'
  }
};

const faqs = [
  {
    question: "Are electric cars cheaper to run than petrol cars?",
    answer: "Yes, EVs typically cost 50-70% less to fuel per mile ($0.03-$0.05 per mile for electricity vs $0.10-$0.15 for gas). Maintenance costs are also 30-40% lower due to fewer moving parts. Over 5 years, you can save $5,000-$10,000 in operating costs."
  },
  {
    question: "How long does it take to recoup the higher EV purchase price?",
    answer: "With federal tax credits ($7,500), state incentives, and fuel savings, most EV buyers break even in 3-6 years for average drivers (12,000-15,000 miles/year). High-mileage drivers may break even in 2-3 years."
  },
  {
    question: "What's the true cost of charging an electric car?",
    answer: "Home charging costs $0.10-$0.15 per kWh (varies by state), averaging $0.03-$0.05 per mile. Public fast charging is more expensive at $0.25-$0.45 per kWh. A full charge for 300-mile range costs $10-$20 at home, $30-$50 at public chargers."
  },
  {
    question: "How does EV maintenance compare to petrol cars?",
    answer: "EVs have 30-40% lower maintenance costs: no oil changes, spark plugs, exhaust systems, or transmission maintenance. Main costs are tires, brakes (last longer due to regenerative braking), and cabin air filters. Battery warranties typically cover 8-10 years."
  }
];

export default function EVvsPetrolCalculatorPage() {
  return (
    <ViewerLayout>
      <FuelCalculatorSchema 
        pageName="EV vs Petrol Cost Calculator"
        description="Compare electric vehicle costs vs traditional petrol vehicles"
        url="https://nextcodehub.com/tools/ev-vs-petrol-calculator"
      />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              EV vs Petrol Cost Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Compare electric vehicle (EV) and petrol car costs including purchase price, fuel/charging, 
              maintenance, insurance, and total cost of ownership. Make a data-driven decision.
            </p>
          </div>

          {/* Comparison Calculator Coming Soon */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-8">
              <div className="inline-block p-4 bg-muted rounded-full mb-4">
                <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Interactive Comparison Tool Coming Soon
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                We're building a comprehensive EV vs Petrol calculator. Check out the comparison data below!
              </p>
            </div>
          </div>

          <AdSenseBlock position="after-calculator" />

          <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Complete EV vs Petrol Cost Breakdown (2026)
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300 flex items-center gap-2">
                  <Icon name="zap" className="w-6 h-6" /> Electric Vehicle (EV)
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Purchase Price:</strong> $40,000 - $60,000
                    <br /><span className="text-xs text-green-600">- $7,500 Federal Tax Credit</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Fuel Cost:</strong> $0.03 - $0.05 per mile
                    <br /><span className="text-xs">(Electricity: $0.12/kWh avg)</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Annual Fuel (15k mi):</strong> $450 - $750
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Maintenance:</strong> $300 - $500/year
                    <br /><span className="text-xs">(Minimal: tires, brakes, fluids)</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Insurance:</strong> $1,400 - $2,200/year
                    <br /><span className="text-xs">(10-20% higher than gas)</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Depreciation:</strong> Moderate-High
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-orange-700 dark:text-orange-300 flex items-center gap-2">
                  <Icon name="fuel" className="w-6 h-6" /> Petrol/Gas Vehicle
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Purchase Price:</strong> $30,000 - $45,000
                    <br /><span className="text-xs text-gray-500">(Comparable models)</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Fuel Cost:</strong> $0.10 - $0.15 per mile
                    <br /><span className="text-xs">(Gas: $3.50/gal, 28 MPG avg)</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Annual Fuel (15k mi):</strong> $1,500 - $2,250
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Maintenance:</strong> $800 - $1,200/year
                    <br /><span className="text-xs">(Oil, filters, belts, etc.)</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Insurance:</strong> $1,200 - $1,800/year
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <strong>Depreciation:</strong> Moderate
                  </div>
                </div>
              </div>
            </div>

            <AdSenseBlock position="mid-content" />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              5-Year Total Cost of Ownership
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-green-700 dark:text-green-300">Electric Vehicle (75k miles)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Icon name="car" className="w-4 h-4" /> Purchase: $50,000</li>
                    <li className="flex items-center gap-2"><Icon name="dollar-sign" className="w-4 h-4" /> Tax Credit: -$7,500</li>
                    <li className="flex items-center gap-2"><Icon name="zap" className="w-4 h-4" /> Electricity: $3,000</li>
                    <li className="flex items-center gap-2"><Icon name="wrench" className="w-4 h-4" /> Maintenance: $2,000</li>
                    <li className="flex items-center gap-2"><Icon name="shield" className="w-4 h-4" /> Insurance: $8,500</li>
                    <li className="flex items-center gap-2"><Icon name="trending-down" className="w-4 h-4" /> Resale Value: -$25,000</li>
                    <li className="pt-2 border-t-2 border-green-300 font-bold text-lg">
                      <strong>Net 5-Year Cost: $31,000</strong>
                    </li>
                    <li className="text-green-600 dark:text-green-400">
                      <strong>Cost per mile: $0.41</strong>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 text-orange-700 dark:text-orange-300">Petrol Vehicle (75k miles)</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><Icon name="car" className="w-4 h-4" /> Purchase: $38,000</li>
                    <li className="flex items-center gap-2"><Icon name="dollar-sign" className="w-4 h-4" /> Tax Credit: $0</li>
                    <li className="flex items-center gap-2"><Icon name="fuel" className="w-4 h-4" /> Gasoline: $10,000</li>
                    <li className="flex items-center gap-2"><Icon name="wrench" className="w-4 h-4" /> Maintenance: $5,000</li>
                    <li className="flex items-center gap-2"><Icon name="shield" className="w-4 h-4" /> Insurance: $7,500</li>
                    <li className="flex items-center gap-2"><Icon name="trending-down" className="w-4 h-4" /> Resale Value: -$18,000</li>
                    <li className="pt-2 border-t-2 border-orange-300 font-bold text-lg">
                      <strong>Net 5-Year Cost: $42,500</strong>
                    </li>
                    <li className="text-orange-600 dark:text-orange-400">
                      <strong>Cost per mile: $0.57</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-100 dark:bg-green-800 rounded-lg text-center">
                <p className="text-lg font-bold text-green-800 dark:text-green-200 flex items-center justify-center gap-2">
                  <Icon name="dollar-sign" className="w-5 h-5" /> 5-Year EV Savings: $11,500 ($2,300/year)
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                  Break-even point: ~2.5 years for average drivers
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Key Factors to Consider
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="map" className="w-5 h-5" /> Driving Habits</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>High mileage:</strong> EV saves more</li>
                  <li>• <strong>City driving:</strong> EV excels</li>
                  <li>• <strong>Long road trips:</strong> Gas more convenient</li>
                  <li>• <strong>Short commutes:</strong> EV ideal</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="zap" className="w-5 h-5" /> Home Setup</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Home charger:</strong> Essential</li>
                  <li>• <strong>Installation:</strong> $500-$2,000</li>
                  <li>• <strong>Electricity rates:</strong> Check yours</li>
                  <li>• <strong>Solar panels:</strong> Free charging</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="bar-chart" className="w-5 h-5" /> Incentives</h4>
                <ul className="text-sm space-y-1">
                  <li>• <strong>Federal:</strong> Up to $7,500</li>
                  <li>• <strong>State:</strong> $0-$5,000</li>
                  <li>• <strong>Utility rebates:</strong> $100-$1,000</li>
                  <li>• <strong>HOV lane access:</strong> Time savings</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Related Calculators</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/tools/fuel-cost-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 mb-2">Fuel Cost Calculator</h4>
                  <p className="text-sm text-gray-600">Calculate petrol/gas costs</p>
                </a>
                <a href="/tools/diesel-cost-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 mb-2">Diesel Cost Calculator</h4>
                  <p className="text-sm text-gray-600">Compare diesel expenses</p>
                </a>
                <a href="/tools/fuel-expense-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 mb-2">Fuel Expense Calculator</h4>
                  <p className="text-sm text-gray-600">Track monthly fuel budget</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdSenseBlock position="mobile-sticky" />
    </ViewerLayout>
  );
}
