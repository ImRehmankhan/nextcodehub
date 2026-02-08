import FuelCalculator from '@/components/tools/FuelCalculator';
import AdSenseBlock from '@/components/ui/AdSenseBlock';
import { FuelCalculatorSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import ViewerLayout from '@/components/viewer/viewer-layout';
import Icon from '@/components/icon';

export const metadata = {
  title: 'Fuel Cost Calculator – Calculate Petrol Expense Per KM Instantly | Free Tool',
  description: 'Free fuel cost calculator to estimate petrol mileage, fuel expense, MPG and trip cost. Calculate your car fuel cost instantly with accurate results.',
  keywords: 'fuel cost calculator, petrol expense calculator, fuel price calculator, trip cost calculator, fuel cost estimator',
  openGraph: {
    title: 'Fuel Cost Calculator – Calculate Petrol Expense Per KM Instantly',
    description: 'Free fuel cost calculator to estimate petrol mileage, fuel expense, MPG and trip cost.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/fuel-cost-calculator'
  }
};

const faqs = [
  {
    question: "How do I calculate fuel cost for a trip?",
    answer: "To calculate fuel cost, divide your trip distance by your vehicle's fuel efficiency to get fuel required, then multiply by the current fuel price. Our calculator does this automatically."
  },
  {
    question: "What is a good fuel mileage?",
    answer: "For cars, 12-15 km/L (28-35 MPG) is considered average. Hybrid vehicles can achieve 20+ km/L (47+ MPG), while SUVs typically get 8-12 km/L (19-28 MPG)."
  },
  {
    question: "How can I reduce my fuel costs?",
    answer: "Maintain proper tire pressure, avoid aggressive driving, reduce excess weight, use cruise control on highways, and keep your engine well-maintained. These can improve fuel efficiency by 10-25%."
  },
  {
    question: "What factors affect fuel consumption?",
    answer: "Driving habits, vehicle condition, tire pressure, air conditioning usage, traffic conditions, terrain, and vehicle load all significantly impact fuel consumption."
  },
  {
    question: "Is this calculator accurate for all vehicles?",
    answer: "Yes, the calculator works for cars, motorcycles, trucks, and SUVs. Just enter your specific vehicle's fuel efficiency for accurate results."
  },
  {
    question: "Can I calculate costs for international trips?",
    answer: "Absolutely! Switch between Metric (km/L) and Imperial (MPG) units to calculate fuel costs regardless of your location."
  }
];

export default function FuelCostCalculatorPage() {
  return (
    <ViewerLayout>
      <FuelCalculatorSchema 
        pageName="Fuel Cost Calculator"
        description="Calculate fuel costs, mileage, and trip expenses for any journey"
        url="https://nextcodehub.com/tools/fuel-cost-calculator"
      />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Fuel Cost Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate your fuel expenses instantly. Get accurate fuel cost, mileage, and trip expenses 
              for any distance with our free fuel cost calculator.
            </p>
          </div>

          <FuelCalculator variant="fuel-cost" />

          <AdSenseBlock position="after-calculator" />

          <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              How the Fuel Cost Calculator Works
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our fuel cost calculator helps you estimate your total fuel expenses for any journey. Whether you're 
              planning a road trip, calculating daily commute costs, or budgeting for monthly fuel expenses, this 
              tool provides instant, accurate calculations.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Simple Steps to Calculate Fuel Cost:
            </h3>

            <ol className="list-decimal pl-6 space-y-3 text-gray-700 dark:text-gray-300">
              <li><strong>Select your unit system:</strong> Choose between Metric (km/L) or Imperial (MPG)</li>
              <li><strong>Enter the distance:</strong> Input your trip distance in kilometers or miles</li>
              <li><strong>Input fuel efficiency:</strong> Enter your vehicle's mileage (km/L or MPG)</li>
              <li><strong>Enter fuel price:</strong> Add the current price per liter or gallon</li>
              <li><strong>Select vehicle type:</strong> Choose car, motorcycle, truck, or SUV</li>
              <li><strong>Choose trip type:</strong> One-way or round trip</li>
              <li><strong>Click Calculate:</strong> Get instant results for fuel required and total cost</li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Example Calculation
            </h2>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h4 className="text-xl font-semibold mb-3">Road Trip Example:</h4>
              <ul className="space-y-2">
                <li><strong>Distance:</strong> 300 km (one-way)</li>
                <li><strong>Fuel Efficiency:</strong> 15 km/L</li>
                <li><strong>Fuel Price:</strong> $1.50 per liter</li>
                <li><strong>Vehicle:</strong> Car</li>
                <li><strong>Trip Type:</strong> Round trip</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-700">
                <p><strong>Results:</strong></p>
                <ul className="space-y-1">
                  <li>Total Distance: 600 km (round trip)</li>
                  <li>Fuel Required: 40 liters</li>
                  <li>Total Cost: $60.00</li>
                  <li>Cost per km: $0.10</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Why Use Our Fuel Cost Calculator?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  ✓ Accurate Results
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Get precise fuel cost calculations based on real-time data and accurate formulas.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  ✓ Trip Planning
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Plan your road trips and budget accurately before you hit the road.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  ✓ Budget Management
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Track and manage your monthly fuel expenses with ease.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  ✓ Free & Easy
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  100% free to use, no registration required. Instant calculations.
                </p>
              </div>
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
                  <p className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Related Fuel Calculators
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/tools/fuel-mileage-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-primary mb-2">Fuel Mileage Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate vehicle fuel efficiency</p>
                </a>
                <a href="/tools/petrol-mileage-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-primary mb-2">Petrol Mileage Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Track petrol consumption</p>
                </a>
                <a href="/tools/mpg-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-primary mb-2">MPG Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate miles per gallon</p>
                </a>
              </div>
            </div>

            <AdSenseBlock position="mid-content" />

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Pro Tips for Saving Fuel Costs
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2"><Icon name="car" className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span><strong>Plan your route:</strong> Use GPS to avoid traffic and find the shortest route</span></li>
                <li className="flex items-start gap-2"><Icon name="zap" className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span><strong>Regular maintenance:</strong> Keep your engine tuned for optimal efficiency</span></li>
                <li className="flex items-start gap-2"><Icon name="thermometer" className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span><strong>Minimize AC use:</strong> Use it wisely to save up to 20% on fuel</span></li>
                <li className="flex items-start gap-2"><Icon name="target" className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span><strong>Smooth driving:</strong> Avoid sudden acceleration and braking</span></li>
                <li className="flex items-start gap-2"><Icon name="bar-chart" className="w-5 h-5 flex-shrink-0 mt-0.5" /> <span><strong>Track your mileage:</strong> Monitor fuel efficiency to spot problems early</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <AdSenseBlock position="mobile-sticky" />
    </ViewerLayout>
  );
}
