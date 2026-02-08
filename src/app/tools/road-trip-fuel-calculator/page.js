import FuelCalculator from '@/components/tools/FuelCalculator';
import AdSenseBlock from '@/components/ui/AdSenseBlock';
import { FuelCalculatorSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import ViewerLayout from '@/components/viewer/viewer-layout';

export const metadata = {
  title: 'Road Trip Fuel Calculator – Calculate Trip Gas Cost & Mileage',
  description: 'Free road trip fuel calculator to estimate gas costs, plan fuel stops, and budget travel expenses. Calculate fuel needed, total cost, and cost per mile for your road trip.',
  keywords: 'road trip fuel calculator, road trip gas cost, trip fuel planner, travel fuel calculator, vacation fuel cost',
  openGraph: {
    title: 'Road Trip Fuel Calculator – Calculate Trip Gas Cost & Mileage',
    description: 'Plan your road trip fuel costs and expenses with our free calculator.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/road-trip-fuel-calculator'
  }
};

const faqs = [
  {
    question: "How much will gas cost for my road trip?",
    answer: "Calculate by dividing total trip miles by your vehicle's MPG to get gallons needed, then multiply by average gas price. Use our calculator for instant results including multiple stops and varying prices."
  },
  {
    question: "How do I plan fuel stops on a road trip?",
    answer: "Plan to refuel every 250-300 miles or when you reach 1/4 tank. Use apps like GasBuddy or Google Maps to find gas stations along your route. Budget time for 5-10 minute stops every 3-4 hours."
  },
  {
    question: "What's the most fuel-efficient road trip speed?",
    answer: "55-65 MPH is optimal for fuel efficiency. Every 5 MPH over 60 reduces fuel economy by approximately 7%. Use cruise control on highways to maintain steady speeds and maximize efficiency."
  },
  {
    question: "Should I rent a fuel-efficient car for road trips?",
    answer: "If your vehicle gets less than 25 MPG and the trip is over 1,000 miles, renting a fuel-efficient car (30-40 MPG) can save $100-300 on gas, potentially offsetting rental costs."
  }
];

export default function RoadTripFuelCalculatorPage() {
  return (
    <ViewerLayout>
      <FuelCalculatorSchema 
        pageName="Road Trip Fuel Calculator"
        description="Calculate road trip fuel costs, plan fuel stops, and budget travel expenses"
        url="https://nextcodehub.com/tools/road-trip-fuel-calculator"
      />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Road Trip Fuel Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Plan your road trip budget with accurate fuel cost calculations. Estimate gas expenses, 
              plan fuel stops, and optimize your travel costs for the perfect journey.
            </p>
          </div>

          <FuelCalculator variant="road-trip" />
          <AdSenseBlock position="after-calculator" />

          <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Plan Your Road Trip Fuel Budget
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Road trips are about adventure, but unexpected fuel costs can quickly drain your travel budget. 
              Our road trip fuel calculator helps you accurately estimate gas expenses, plan fuel stops, and 
              budget for the entire journey. Whether it's a weekend getaway or cross-country adventure, know 
              your costs before you hit the road.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold mb-4">Road Trip Fuel Planning Tips:</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>🗺️ <strong>Plan your route:</strong> Use Google Maps or Waze to find the most fuel-efficient path</li>
                <li>⛽ <strong>Research gas prices:</strong> Check GasBuddy for cheaper stations along your route</li>
                <li>🚗 <strong>Pack light:</strong> Every 100 lbs reduces MPG by 1-2%</li>
                <li>🌡️ <strong>Minimize AC usage:</strong> Open windows at low speeds, AC at highway speeds</li>
                <li>📍 <strong>Fill up strategically:</strong> Avoid highway exits and tourist areas (20-40% markup)</li>
              </ul>
            </div>

            <AdSenseBlock position="mid-content" />

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
              <h3 className="text-2xl font-bold mb-4">More Fuel Calculators</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/tools/fuel-cost-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 mb-2">Fuel Cost Calculator</h4>
                  <p className="text-sm text-gray-600">General fuel cost calculations</p>
                </a>
                <a href="/tools/gas-price-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 mb-2">Gas Price Calculator</h4>
                  <p className="text-sm text-gray-600">Current gas price estimates</p>
                </a>
                <a href="/tools/diesel-cost-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 mb-2">Diesel Cost Calculator</h4>
                  <p className="text-sm text-gray-600">Calculate diesel expenses</p>
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
