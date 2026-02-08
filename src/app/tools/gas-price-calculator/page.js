import FuelCalculator from '@/components/tools/FuelCalculator';
import AdSenseBlock from '@/components/ui/AdSenseBlock';
import { FuelCalculatorSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import ViewerLayout from '@/components/viewer/viewer-layout';
import Icon from '@/components/icon';

export const metadata = {
  title: 'Gas Price Calculator – Calculate Gas Cost & Mileage Expenses Instantly',
  description: 'Free gas price calculator to estimate gas costs, mileage expenses, and fuel budget for any trip. Calculate gas price per mile, MPG, and total trip costs accurately.',
  keywords: 'gas price calculator, gas cost calculator, gas mileage calculator, fuel price calculator, trip gas cost, gas expense estimator',
  openGraph: {
    title: 'Gas Price Calculator – Calculate Gas Cost & Mileage Expenses Instantly',
    description: 'Calculate gas costs, mileage, and trip expenses with our free gas price calculator.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/gas-price-calculator'
  }
};

const faqs = [
  {
    question: "How do I calculate gas cost for a road trip?",
    answer: "Divide your trip distance by your vehicle's MPG to get gallons needed, then multiply by current gas price. Example: 300 miles ÷ 25 MPG = 12 gallons × $3.50/gallon = $42 total gas cost."
  },
  {
    question: "What is the average gas price in the US in 2026?",
    answer: "As of 2026, average US gas prices range from $3.20 to $4.50 per gallon depending on location, grade (regular/premium), and market conditions. California and Hawaii typically have the highest prices, while Gulf states have lower prices."
  },
  {
    question: "How can I save money on gas?",
    answer: "Use gas price comparison apps, fill up on Tuesdays/Wednesdays (typically cheaper), use loyalty programs, improve driving habits, maintain your vehicle, reduce weight, avoid premium gas unless required, and combine trips to minimize total mileage."
  },
  {
    question: "What's the difference between regular and premium gas?",
    answer: "Regular gas (87 octane) is suitable for most vehicles. Premium gas (91-93 octane) is required for high-performance engines to prevent knocking. Using premium in regular cars provides no benefit and wastes money. Always check your owner's manual."
  },
  {
    question: "How do I find the cheapest gas prices near me?",
    answer: "Use apps like GasBuddy, Waze, AAA Mobile, or Google Maps to compare real-time gas prices at nearby stations. Prices can vary by $0.20-$0.50 per gallon within a few miles."
  },
  {
    question: "Is it worth driving farther for cheaper gas?",
    answer: "Generally not. If gas is $0.10/gallon cheaper 5 miles away and your car gets 25 MPG, the 10-mile round trip uses 0.4 gallons, saving only $0.10 × tank capacity. Only worth it for large tanks and significant price differences."
  }
];

export default function GasPriceCalculatorPage() {
  return (
    <ViewerLayout>
      <FuelCalculatorSchema 
        pageName="Gas Price Calculator"
        description="Calculate gas costs, mileage expenses, and fuel budget for any trip"
        url="https://nextcodehub.com/tools/gas-price-calculator"
      />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Gas Price Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate gas costs, estimate trip expenses, and track fuel budget with our comprehensive 
              gas price calculator. Get accurate MPG calculations and cost per mile instantly.
            </p>
          </div>

          {/* Calculator Component */}
          <FuelCalculator variant="gas-price" />

          {/* AdSense After Calculator */}
          <AdSenseBlock position="after-calculator" />

          {/* Content Section */}
          <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Understanding Gas Prices and Fuel Costs
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Gas prices fluctuate daily based on crude oil prices, refinery capacity, seasonal demand, taxes, 
              and distribution costs. Understanding how to calculate and minimize your gas expenses can save 
              you hundreds or even thousands of dollars annually. Our gas price calculator helps you plan 
              trips, budget fuel expenses, and make informed decisions about when and where to fill up.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              With gas prices varying significantly by region, time of year, and even day of the week, having 
              a reliable tool to calculate exact costs is essential for both daily commuters and road trip 
              enthusiasts. This calculator accounts for vehicle efficiency, trip distance, and current prices 
              to give you precise cost estimates.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How to Use the Gas Price Calculator:
            </h3>

            <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
              <li><strong>Select Imperial (MPG):</strong> Choose the MPG option since this is for US gas calculations</li>
              <li><strong>Enter trip distance:</strong> Input your travel distance in miles</li>
              <li><strong>Input your MPG:</strong> Enter your vehicle's miles per gallon rating</li>
              <li><strong>Add current gas price:</strong> Enter the price per gallon from your local station</li>
              <li><strong>Select vehicle type:</strong> Choose your vehicle category for reference</li>
              <li><strong>Choose trip type:</strong> One-way or round trip calculation</li>
              <li><strong>Calculate:</strong> Get instant results for gallons needed, total cost, and cost per mile</li>
            </ol>

            <AdSenseBlock position="mid-content" />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              2026 Gas Price Trends by Region
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400 flex items-center gap-2">
                  <Icon name="trending-up" className="w-5 h-5" /> Highest Gas Price States
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>California:</strong> $4.20 - $5.50/gallon</li>
                  <li><strong>Hawaii:</strong> $4.30 - $5.20/gallon</li>
                  <li><strong>Washington:</strong> $3.90 - $4.80/gallon</li>
                  <li><strong>Oregon:</strong> $3.80 - $4.60/gallon</li>
                  <li><strong>Nevada:</strong> $3.75 - $4.50/gallon</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Icon name="trending-down" className="w-5 h-5" /> Lowest Gas Price States
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Texas:</strong> $2.90 - $3.60/gallon</li>
                  <li><strong>Mississippi:</strong> $2.85 - $3.50/gallon</li>
                  <li><strong>Louisiana:</strong> $2.90 - $3.55/gallon</li>
                  <li><strong>Oklahoma:</strong> $2.95 - $3.60/gallon</li>
                  <li><strong>Arkansas:</strong> $2.95 - $3.65/gallon</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary flex items-center gap-2">
                  <Icon name="map" className="w-5 h-5" /> Urban vs Rural Pricing
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Major Cities:</strong> $0.15-$0.30 higher</li>
                  <li><strong>Highways:</strong> $0.20-$0.40 higher</li>
                  <li><strong>Suburban Areas:</strong> Average pricing</li>
                  <li><strong>Rural Areas:</strong> Varies widely</li>
                  <li><strong>Membership Clubs:</strong> $0.10-$0.25 lower</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400 flex items-center gap-2">
                  <Icon name="bar-chart" className="w-5 h-5" /> Seasonal Price Variations
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Summer (May-Aug):</strong> Peak prices (+15-20%)</li>
                  <li><strong>Winter (Nov-Feb):</strong> Lower prices (-10-15%)</li>
                  <li><strong>Spring (Mar-Apr):</strong> Rising prices</li>
                  <li><strong>Fall (Sep-Oct):</strong> Declining prices</li>
                  <li><strong>Holidays:</strong> Temporary spikes (+5-10%)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Comprehensive Gas Saving Strategies
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="lightbulb" className="w-5 h-5" /> Smart Filling Strategies</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Fill up on Monday-Wednesday (typically 5-10 cents cheaper than weekends)</li>
                  <li>• Use gas rewards credit cards (2-5% cashback on gas purchases)</li>
                  <li>• Join loyalty programs (Chevron Techron, Shell Fuel Rewards, etc.)</li>
                  <li>• Fill up early morning when gas is denser (slightly more fuel for same price)</li>
                  <li>• Avoid topping off - it wastes money and harms environment</li>
                  <li>• Use warehouse club gas stations (Costco, Sam's Club) - save $0.10-$0.25/gallon</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="smartphone" className="w-5 h-5" /> Use Technology to Save</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• GasBuddy app - find cheapest gas nearby and earn points</li>
                  <li>• Waze navigation - shows gas prices along your route</li>
                  <li>• AAA Mobile app - member discounts and price tracking</li>
                  <li>• Gas Guru - real-time price updates from users</li>
                  <li>• Upside app - cashback on gas purchases (up to $0.25/gallon)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="car" className="w-5 h-5" /> Vehicle Efficiency Tips</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Remove roof racks and carriers when not in use (improve MPG by 25% on highway)</li>
                  <li>• Reduce weight - every 100 lbs reduces MPG by 1-2%</li>
                  <li>• Use cruise control on highways (improves MPG by 7-14%)</li>
                  <li>• Avoid excessive idling (costs $0.02-$0.05 per minute)</li>
                  <li>• Combine errands into one trip (save 20-30% on fuel)</li>
                  <li>• Carpool or use ride-sharing when possible</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="wrench" className="w-5 h-5" /> Maintenance for Better MPG</h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Keep tires properly inflated (improve MPG by 3%)</li>
                  <li>• Use recommended motor oil grade (improve MPG by 1-2%)</li>
                  <li>• Replace clogged air filters (improve MPG by up to 10%)</li>
                  <li>• Fix issues promptly - check engine light can indicate 40% MPG loss</li>
                  <li>• Get regular tune-ups (improve MPG by 4%)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Gas Cost Calculation Examples
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Daily Commute Example</h4>
                <ul className="space-y-2 mb-4">
                  <li><strong>Distance:</strong> 30 miles (one-way)</li>
                  <li><strong>MPG:</strong> 28 MPG</li>
                  <li><strong>Gas Price:</strong> $3.75/gallon</li>
                  <li><strong>Trip Type:</strong> Round trip</li>
                </ul>
                <div className="pt-4 border-t border-blue-200 dark:border-blue-700">
                  <p className="font-semibold mb-2">Daily Results:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Total Distance: 60 miles</li>
                    <li>• Gas Required: 2.14 gallons</li>
                    <li>• Daily Cost: $8.03</li>
                    <li>• Weekly Cost (5 days): $40.15</li>
                    <li>• Monthly Cost (22 days): $176.66</li>
                    <li>• Annual Cost (260 days): $2,087.80</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Road Trip Example</h4>
                <ul className="space-y-2 mb-4">
                  <li><strong>Distance:</strong> 850 miles (one-way)</li>
                  <li><strong>MPG:</strong> 32 MPG (highway)</li>
                  <li><strong>Gas Price:</strong> $3.50/gallon</li>
                  <li><strong>Trip Type:</strong> Round trip</li>
                </ul>
                <div className="pt-4 border-t border-green-200 dark:border-green-700">
                  <p className="font-semibold mb-2">Trip Results:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Total Distance: 1,700 miles</li>
                    <li>• Gas Required: 53.13 gallons</li>
                    <li>• Total Trip Cost: $185.95</li>
                    <li>• Cost per Mile: $0.109</li>
                    <li>• If split 4 ways: $46.49 per person</li>
                    <li>• Estimated Fill-ups: 3-4 stops</li>
                  </ul>
                </div>
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
                  <p className="text-sm text-gray-600 dark:text-gray-400">Universal fuel cost calculations</p>
                </a>
                <a href="/tools/mpg-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">MPG Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate miles per gallon</p>
                </a>
                <a href="/tools/fuel-expense-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Fuel Expense Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Track and budget fuel expenses</p>
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
