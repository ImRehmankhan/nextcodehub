import FuelCalculator from '@/components/tools/FuelCalculator';
import ViewerLayout from '@/components/viewer/viewer-layout';
import AdSenseBlock from '@/components/ui/AdSenseBlock';
import { FuelCalculatorSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import Icon from '@/components/icon';

const faqs = [
  {
    question: "How do I calculate fuel mileage?",
    answer: "Divide distance traveled by fuel consumed. For MPG: miles ÷ gallons. For km/L: kilometers ÷ liters. Our calculator does this automatically with real-time results."
  },
  {
    question: "What is the difference between MPG and km/L?",
    answer: "MPG (Miles Per Gallon) is used in the US, while km/L (kilometers per liter) is used in metric countries. 1 MPG ≈ 0.425 km/L. Higher numbers indicate better fuel efficiency."
  },
  {
    question: "What affects fuel mileage?",
    answer: "Key factors: driving speed (45-60 mph optimal), acceleration habits, vehicle maintenance, tire pressure, air conditioning use, vehicle weight, and road conditions. Proper maintenance can improve mileage by 10-25%."
  },
  {
    question: "How can I track my fuel mileage over time?",
    answer: "Record odometer readings and fuel purchases regularly. Calculate mileage for each tank and average over several fill-ups for accuracy. Apps and spreadsheets help track long-term trends."
  }
];

export const metadata = {
  title: 'Fuel Mileage Calculator – Calculate Car Mileage & Fuel Efficiency Instantly',
  description: 'Free fuel mileage calculator to measure your vehicle fuel efficiency, MPG, km/L, and average mileage. Optimize your fuel consumption today.',
  keywords: 'fuel mileage calculator, mileage calculator, fuel efficiency calculator, car mileage calculator, average mileage calculator',
  openGraph: {
    title: 'Fuel Mileage Calculator – Calculate Car Mileage Instantly',
    description: 'Free fuel mileage calculator to measure your vehicle fuel efficiency and MPG.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/fuel-mileage-calculator'
  }
};

export default function FuelMileageCalculatorPage() {
  return (
    <ViewerLayout>
      <FuelCalculatorSchema 
        pageName="Fuel Mileage Calculator"
        description="Calculate fuel mileage, MPG, and fuel efficiency for any vehicle"
        url="https://nextcodehub.com/tools/fuel-mileage-calculator"
      />
      <FAQSchema faqs={faqs} />
      
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Fuel Mileage Calculator
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your vehicle's fuel mileage and efficiency. Track MPG, km/L, and optimize your 
            fuel consumption with our free mileage calculator.
          </p>
        </div>

        {/* Calculator Component */}
        <FuelCalculator variant="fuel-mileage" />

        <AdSenseBlock position="after-calculator" />

        {/* Content Section */}
        <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Understanding Fuel Mileage
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Fuel mileage (also called fuel efficiency or fuel economy) measures how far your vehicle can travel 
            per unit of fuel consumed. It's typically expressed as kilometers per liter (km/L) or miles per 
            gallon (MPG).
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            What is Good Fuel Mileage?
          </h3>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Excellent</h4>
              <p className="text-sm">20+ km/L (47+ MPG)</p>
              <p className="text-xs mt-2">Hybrid & Electric vehicles</p>
            </div>
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Good</h4>
              <p className="text-sm">15-20 km/L (35-47 MPG)</p>
              <p className="text-xs mt-2">Efficient cars & sedans</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg">
              <h4 className="font-bold text-lg mb-2">Average</h4>
              <p className="text-sm">10-15 km/L (23-35 MPG)</p>
              <p className="text-xs mt-2">Standard cars & small SUVs</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            How to Calculate Fuel Mileage
          </h2>

          <div className="bg-muted p-6 rounded-lg mb-6">
            <h4 className="text-xl font-semibold mb-3">Manual Calculation Method:</h4>
            <ol className="space-y-2">
              <li><strong>Step 1:</strong> Fill your tank completely</li>
              <li><strong>Step 2:</strong> Record the odometer reading</li>
              <li><strong>Step 3:</strong> Drive normally until you need to refuel</li>
              <li><strong>Step 4:</strong> Fill tank again and note the fuel amount</li>
              <li><strong>Step 5:</strong> Record new odometer reading</li>
              <li><strong>Step 6:</strong> Calculate: (Distance traveled) ÷ (Fuel used) = Mileage</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Factors Affecting Fuel Mileage
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Driving Habits
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Aggressive acceleration reduces mileage by 15-30%</li>
                <li>• Excessive idling wastes fuel</li>
                <li>• Speeding decreases efficiency</li>
                <li>• Smooth driving improves mileage</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Vehicle Condition
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Low tire pressure reduces mileage by 3%</li>
                <li>• Dirty air filters decrease efficiency</li>
                <li>• Poor engine maintenance affects performance</li>
                <li>• Extra weight reduces fuel economy</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Environmental Factors
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Cold weather reduces mileage by 12-20%</li>
                <li>• Hilly terrain increases fuel consumption</li>
                <li>• Stop-and-go traffic lowers efficiency</li>
                <li>• Headwinds impact fuel economy</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">
                Usage Patterns
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Short trips lower average mileage</li>
                <li>• Highway driving is more efficient</li>
                <li>• AC usage reduces mileage by up to 20%</li>
                <li>• Roof racks increase air resistance</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Tips to Improve Fuel Mileage
          </h2>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Immediate Actions (0-5% improvement):</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Check and maintain proper tire pressure weekly</li>
              <li>✓ Remove unnecessary weight from vehicle</li>
              <li>✓ Use cruise control on highways</li>
              <li>✓ Avoid excessive idling</li>
              <li>✓ Close windows at high speeds</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900 dark:to-purple-900 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Regular Maintenance (5-15% improvement):</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✓ Replace air filters regularly</li>
              <li>✓ Use recommended motor oil grade</li>
              <li>✓ Keep engine properly tuned</li>
              <li>✓ Replace spark plugs on schedule</li>
              <li>✓ Fix any check engine light issues promptly</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                What's the difference between MPG and km/L?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                MPG (Miles Per Gallon) is used in the US, while km/L (Kilometers Per Liter) is used in most 
                other countries. To convert: 1 MPG ≈ 0.425 km/L, and 1 km/L ≈ 2.35 MPG.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Why is my actual mileage lower than advertised?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Manufacturer ratings are tested under ideal conditions. Real-world mileage varies based on 
                driving habits, terrain, weather, vehicle load, and maintenance. Expect 10-20% lower than 
                advertised ratings in normal conditions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                How often should I check my fuel mileage?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Check your mileage every few fill-ups to establish a baseline. Sudden decreases can indicate 
                mechanical problems. Regular monitoring helps you spot issues early and track improvements 
                from better driving habits.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Does premium fuel improve mileage?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Unless your vehicle specifically requires premium fuel, using it won't improve mileage. 
                Use the octane rating recommended in your owner's manual for optimal performance and efficiency.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Track Your Mileage Regularly
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Monitoring your fuel mileage helps you understand your vehicle's performance and identify 
              potential issues early. Use our calculator to:
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2"><Icon name="bar-chart" className="w-5 h-5 text-sky-500" /> Track changes in fuel efficiency over time</li>
              <li className="flex items-center gap-2"><Icon name="wrench" className="w-5 h-5 text-sky-500" /> Detect maintenance needs before they become expensive</li>
              <li className="flex items-center gap-2"><Icon name="dollar-sign" className="w-5 h-5 text-sky-500" /> Optimize your driving habits to save money</li>
              <li className="flex items-center gap-2"><Icon name="sparkles" className="w-5 h-5 text-sky-500" /> Reduce your environmental impact</li>
              <li className="flex items-center gap-2"><Icon name="trending-up" className="w-5 h-5 text-sky-500" /> Compare different vehicles or fuel types</li>
            </ul>
          </div>
        </div>
      </div>
      </div>

    <AdSenseBlock position="mobile-sticky" />
    </ViewerLayout>
    

  );
}
