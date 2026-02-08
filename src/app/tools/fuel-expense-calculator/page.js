import FuelCalculator from '@/components/tools/FuelCalculator';
import AdSenseBlock from '@/components/ui/AdSenseBlock';
import { FuelCalculatorSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import ViewerLayout from '@/components/viewer/viewer-layout';

export const metadata = {
  title: 'Fuel Expense Calculator – Track & Calculate Monthly Fuel Costs Instantly',
  description: 'Free fuel expense calculator to track monthly fuel costs, budget fuel expenses, and calculate total fuel spending. Manage your vehicle fuel budget and save money.',
  keywords: 'fuel expense calculator, fuel budget calculator, monthly fuel cost, fuel spending tracker, fuel cost estimator, vehicle expense calculator',
  openGraph: {
    title: 'Fuel Expense Calculator – Track & Calculate Monthly Fuel Costs Instantly',
    description: 'Calculate and track your monthly fuel expenses, budget fuel costs, and manage vehicle spending.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/fuel-expense-calculator'
  }
};

const faqs = [
  {
    question: "How do I calculate my monthly fuel expenses?",
    answer: "Track your odometer readings and fuel receipts for a month. Add up all fuel costs for total monthly expense. Or use this calculator: multiply daily distance by working days, divide by your MPG/km per liter, then multiply by fuel price."
  },
  {
    question: "What is a reasonable monthly fuel budget?",
    answer: "Average monthly fuel expenses range from $100-$300 depending on commute distance, vehicle efficiency, and fuel prices. Commuters driving 30+ miles daily might spend $200-$400/month, while minimal drivers may spend $50-$100."
  },
  {
    question: "How can I reduce my monthly fuel expenses?",
    answer: "Carpool, use public transit when possible, combine errands, work from home when available, maintain your vehicle, drive efficiently, use gas rewards programs, and consider a more fuel-efficient vehicle if expenses are consistently high."
  },
  {
    question: "Should fuel expenses be tax deductible?",
    answer: "If you're self-employed or use your vehicle for business, you can deduct actual fuel expenses or use the standard mileage rate ($0.67/mile in 2026). Keep detailed records of business miles and fuel receipts. Consult a tax professional for your specific situation."
  },
  {
    question: "How do I track fuel expenses effectively?",
    answer: "Use apps like Fuelio, GasBuddy, or Driversnote to automatically track fillups, mileage, and costs. Alternatively, keep a simple spreadsheet logging date, odometer, gallons/liters, price, and cost for each fillup. Review monthly to identify trends."
  },
  {
    question: "What percentage of income should go to fuel?",
    answer: "Financial experts recommend keeping total transportation costs (including fuel, insurance, maintenance, car payments) below 15-20% of net income. Fuel alone should ideally be 2-5% of monthly take-home pay for sustainable budgeting."
  }
];

export default function FuelExpenseCalculatorPage() {
  return (
    <ViewerLayout>
      <FuelCalculatorSchema 
        pageName="Fuel Expense Calculator"
        description="Track monthly fuel costs, budget fuel expenses, and manage vehicle spending"
        url="https://nextcodehub.com/tools/fuel-expense-calculator"
      />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Fuel Expense Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate, track, and manage your monthly fuel expenses. Budget fuel costs accurately, 
              monitor spending trends, and optimize your vehicle expenses with our comprehensive tool.
            </p>
          </div>

          {/* Calculator Component */}
          <FuelCalculator variant="fuel-expense" />

          {/* AdSense After Calculator */}
          <AdSenseBlock position="after-calculator" />

          {/* Content Section */}
          <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Complete Guide to Managing Fuel Expenses
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Fuel expenses represent one of the largest ongoing costs of vehicle ownership, often accounting 
              for 20-40% of total transportation costs. Whether you're a daily commuter, business owner tracking 
              deductible expenses, or household budgeting for multiple vehicles, understanding and managing fuel 
              costs is essential for financial health.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our fuel expense calculator helps you project monthly costs, compare vehicle efficiency, plan for 
              price fluctuations, and identify opportunities to reduce spending. By tracking fuel expenses 
              systematically, most users save 10-25% annually through better awareness and optimization.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How to Calculate Monthly Fuel Expenses:
            </h3>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-6">
              <h4 className="font-semibold text-lg mb-3">Method 1: Trip-Based Calculation</h4>
              <ol className="space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>1. Calculate daily distance (round trip commute + errands)</li>
                <li>2. Multiply by number of driving days per month</li>
                <li>3. Divide total monthly distance by vehicle MPG or km/L</li>
                <li>4. Multiply fuel needed by current price per gallon/liter</li>
                <li>5. Result = Estimated monthly fuel expense</li>
              </ol>
              
              <h4 className="font-semibold text-lg mb-3 mt-6">Method 2: Receipt Tracking</h4>
              <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>1. Save all fuel receipts for one month</li>
                <li>2. Add up total dollars spent on fuel</li>
                <li>3. Note odometer difference from start to end of month</li>
                <li>4. Calculate cost per mile/km for budgeting</li>
                <li>5. Use this baseline to project future months</li>
              </ol>
            </div>

            <AdSenseBlock position="mid-content" />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Average Monthly Fuel Expenses by Category
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  👤 Personal Commuter
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Short Commute (10 mi/day):</strong> $80-$120/month</li>
                  <li><strong>Average Commute (25 mi/day):</strong> $150-$250/month</li>
                  <li><strong>Long Commute (50+ mi/day):</strong> $300-$500/month</li>
                  <li><strong>Remote/Minimal Driving:</strong> $40-$80/month</li>
                  <li><strong>Weekend Only:</strong> $30-$60/month</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  👨‍👩‍👧‍👦 Family Household
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Single Vehicle:</strong> $200-$350/month</li>
                  <li><strong>Two Vehicles:</strong> $350-$600/month</li>
                  <li><strong>With Teen Drivers:</strong> $450-$750/month</li>
                  <li><strong>SUV/Minivan Primary:</strong> $300-$500/month</li>
                  <li><strong>Suburban Family:</strong> $400-$650/month</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  🚗 Business/Rideshare
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Sales Rep (Territory):</strong> $400-$800/month</li>
                  <li><strong>Uber/Lyft (Part-time):</strong> $300-$500/month</li>
                  <li><strong>Uber/Lyft (Full-time):</strong> $600-$1200/month</li>
                  <li><strong>Delivery Driver:</strong> $400-$700/month</li>
                  <li><strong>Field Service:</strong> $500-$900/month</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                  🚚 Commercial/Fleet
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Pickup Truck (Contractor):</strong> $500-$900/month</li>
                  <li><strong>Cargo Van:</strong> $600-$1000/month</li>
                  <li><strong>Box Truck:</strong> $800-$1500/month</li>
                  <li><strong>Semi-Truck:</strong> $3000-$6000/month</li>
                  <li><strong>Fleet (per vehicle avg):</strong> $400-$800/month</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Fuel Expense Budgeting Strategies
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">💰 Create a Realistic Fuel Budget</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Track actual expenses for 2-3 months to establish baseline</li>
                  <li>• Add 10-15% buffer for price fluctuations and unexpected trips</li>
                  <li>• Separate commute vs. leisure travel for better visibility</li>
                  <li>• Review and adjust budget quarterly based on driving patterns</li>
                  <li>• Use envelope method or separate account for fuel budget</li>
                  <li>• Set price alerts to adjust budget when fuel prices spike</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">📊 Track and Analyze Expenses</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Use apps like Fuelio, GasBuddy, or MileIQ for automatic tracking</li>
                  <li>• Create spreadsheet with: date, odometer, gallons, price, total cost</li>
                  <li>• Calculate monthly MPG to detect efficiency changes</li>
                  <li>• Compare month-over-month trends to identify patterns</li>
                  <li>• Track cost per mile to evaluate true driving costs</li>
                  <li>• Keep receipts for tax deductions if applicable</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">🎯 Expense Reduction Tactics</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Carpool 2-3 days/week to cut commute costs by 40-60%</li>
                  <li>• Use public transit for part of commute (park & ride)</li>
                  <li>• Negotiate work-from-home days to reduce weekly miles</li>
                  <li>• Combine errands into single trips (save 20-30%)</li>
                  <li>• Use bicycle for local trips under 5 miles</li>
                  <li>• Plan routes to minimize backtracking and left turns</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2">💳 Maximize Fuel Rewards</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Credit cards with 3-5% cashback on gas (Chase Freedom, Citi Custom Cash)</li>
                  <li>• Grocery store fuel points (Kroger, Safeway: $0.10-$1.00/gal discount)</li>
                  <li>• Warehouse club memberships (Costco, Sam's: save $0.15-$0.30/gal)</li>
                  <li>• Gas station loyalty programs (Shell Fuel Rewards, Exxon Mobil Rewards)</li>
                  <li>• Upside app cashback (earn $0.05-$0.25 per gallon back)</li>
                  <li>• Stack multiple rewards for maximum savings (10-15% total)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Tax Deduction Guide for Fuel Expenses
            </h2>

            <div className="bg-yellow-50 dark:bg-yellow-900 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold mb-4">Business Fuel Expense Deductions (2026)</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">Standard Mileage Rate Method:</h5>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>2026 Rate:</strong> $0.67 per business mile</li>
                    <li>• Includes fuel, maintenance, depreciation</li>
                    <li>• Simpler record-keeping</li>
                    <li>• Track: date, miles, destination, purpose</li>
                    <li>• Can't deduct actual fuel costs</li>
                    <li>• <strong>Example:</strong> 10,000 business miles = $6,700 deduction</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Actual Expense Method:</h5>
                  <ul className="space-y-2 text-sm">
                    <li>• Deduct actual fuel, oil, repairs, insurance</li>
                    <li>• Must track all vehicle expenses</li>
                    <li>• Calculate business use percentage</li>
                    <li>• Keep all receipts and records</li>
                    <li>• Better for high-expense vehicles</li>
                    <li>• <strong>Example:</strong> $8,000 expenses × 75% business = $6,000</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-yellow-200 dark:border-yellow-700">
                <p className="text-sm font-semibold mb-2">Who Can Deduct:</p>
                <ul className="text-sm space-y-1">
                  <li>✓ Self-employed individuals and business owners</li>
                  <li>✓ Rideshare/delivery drivers (Uber, Lyft, DoorDash)</li>
                  <li>✓ Real estate agents and sales representatives</li>
                  <li>✗ W-2 employees (commuting is not deductible)</li>
                  <li>✗ Personal/family use (only business portion)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Detailed Expense Calculation Examples
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">💼 Business Expense Example</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Scenario:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Daily business travel: 80 miles</li>
                      <li>• Working days: 22 days/month</li>
                      <li>• Vehicle MPG: 26</li>
                      <li>• Gas price: $3.65/gallon</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-indigo-200 dark:border-indigo-700">
                    <p className="font-semibold">Monthly Calculations:</p>
                    <ul className="text-sm space-y-1">
                      <li>📏 Total miles: 1,760 miles</li>
                      <li>⛽ Gallons needed: 67.7 gallons</li>
                      <li>💰 Total expense: $247.11</li>
                      <li>📊 Cost per mile: $0.140</li>
                      <li>💵 Annual expense: $2,965.32</li>
                      <li>🎯 Tax deduction (std): $1,179.20</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">👨‍👩‍👧 Family Budget Example</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Scenario:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Car 1 (commute): 600 miles/month</li>
                      <li>• Car 2 (local): 400 miles/month</li>
                      <li>• Car 1 MPG: 30, Car 2 MPG: 22</li>
                      <li>• Gas price: $3.50/gallon</li>
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-green-200 dark:border-green-700">
                    <p className="font-semibold">Monthly Budget:</p>
                    <ul className="text-sm space-y-1">
                      <li>🚗 Car 1 fuel: $70.00</li>
                      <li>🚙 Car 2 fuel: $63.64</li>
                      <li>💰 Total expense: $133.64</li>
                      <li>📊 Combined MPG: 26.5</li>
                      <li>💵 Annual expense: $1,603.68</li>
                      <li>🎯 % of $5k/mo income: 2.7%</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Fuel Expense Tracking Apps & Tools
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 text-blue-600">🔵 Fuelio</h4>
                <p className="text-sm mb-2">Comprehensive fuel tracking</p>
                <ul className="text-xs space-y-1">
                  <li>✓ MPG tracking</li>
                  <li>✓ Expense statistics</li>
                  <li>✓ Service reminders</li>
                  <li>✓ Multiple vehicles</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 text-green-600">🟢 MileIQ</h4>
                <p className="text-sm mb-2">Automatic mileage logging</p>
                <ul className="text-xs space-y-1">
                  <li>✓ GPS-based tracking</li>
                  <li>✓ Tax deduction reports</li>
                  <li>✓ IRS-compliant logs</li>
                  <li>✓ Business classification</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 text-purple-600">🟣 Everlance</h4>
                <p className="text-sm mb-2">Expense & mileage tracking</p>
                <ul className="text-xs space-y-1">
                  <li>✓ Auto-trip detection</li>
                  <li>✓ Receipt scanning</li>
                  <li>✓ Tax optimization</li>
                  <li>✓ Rideshare friendly</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 text-red-600">🔴 GasBuddy</h4>
                <p className="text-sm mb-2">Price finding & tracking</p>
                <ul className="text-xs space-y-1">
                  <li>✓ Find cheap gas</li>
                  <li>✓ Rewards program</li>
                  <li>✓ Expense logging</li>
                  <li>✓ Trip cost calculator</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 text-orange-600">🟠 Driversnote</h4>
                <p className="text-sm mb-2">Tax-focused tracking</p>
                <ul className="text-xs space-y-1">
                  <li>✓ Auto-tracking</li>
                  <li>✓ IRS compliance</li>
                  <li>✓ Tax reports</li>
                  <li>✓ Accountant export</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow">
                <h4 className="font-semibold text-lg mb-2 text-teal-600">🟦 Stride</h4>
                <p className="text-sm mb-2">Gig worker focused</p>
                <ul className="text-xs space-y-1">
                  <li>✓ Free for drivers</li>
                  <li>✓ Auto mileage</li>
                  <li>✓ Tax deductions</li>
                  <li>✓ Quarterly estimates</li>
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
                  <p className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                More Fuel Calculators
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/tools/fuel-cost-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Fuel Cost Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate trip fuel costs</p>
                </a>
                <a href="/tools/petrol-mileage-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Petrol Mileage Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Track fuel efficiency</p>
                </a>
                <a href="/tools/gas-price-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Gas Price Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Estimate gas costs</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Ad */}
      <AdSenseBlock position="mobile-sticky" />
    </ViewerLayout>
  );
}
