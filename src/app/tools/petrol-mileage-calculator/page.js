import FuelCalculator from '@/components/tools/FuelCalculator';
import AdSenseBlock from '@/components/ui/AdSenseBlock';
import { FuelCalculatorSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import ViewerLayout from '@/components/viewer/viewer-layout';
import Icon from '@/components/icon';

export const metadata = {
  title: 'Petrol Mileage Calculator – Calculate Petrol Cost & Efficiency Instantly',
  description: 'Free petrol mileage calculator to calculate petrol consumption, cost per km, fuel efficiency, and mileage. Get accurate petrol expense calculations for cars, bikes & vehicles.',
  keywords: 'petrol mileage calculator, petrol cost calculator, petrol consumption calculator, petrol efficiency, fuel mileage, km per liter calculator',
  openGraph: {
    title: 'Petrol Mileage Calculator – Calculate Petrol Cost & Efficiency Instantly',
    description: 'Calculate petrol consumption, mileage, and cost per km with our free online tool.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/petrol-mileage-calculator'
  }
};

const faqs = [
  {
    question: "How do I calculate petrol mileage for my car?",
    answer: "Fill your tank completely, reset your trip meter, drive until you need to refuel, note the distance traveled and liters filled. Divide distance by liters to get your petrol mileage (km/L). Example: 450 km ÷ 30 L = 15 km/L."
  },
  {
    question: "What is the average petrol mileage for cars in 2026?",
    answer: "Average petrol mileage varies by vehicle type: Small cars (14-18 km/L), Sedans (12-15 km/L), SUVs (8-12 km/L), and Luxury cars (10-14 km/L). Hybrid vehicles can achieve 20-25 km/L or higher."
  },
  {
    question: "Why is my petrol mileage decreasing?",
    answer: "Common causes include: dirty air filters, worn spark plugs, low tire pressure, aggressive driving, excessive idling, poor quality fuel, engine problems, or carrying excess weight. Regular maintenance can restore efficiency."
  },
  {
    question: "How can I improve my petrol mileage?",
    answer: "Maintain proper tire pressure, drive smoothly without sudden acceleration, reduce vehicle weight, use quality petrol, service your engine regularly, minimize AC usage, avoid excessive idling, and maintain steady speeds on highways."
  },
  {
    question: "What's the difference between petrol and diesel mileage?",
    answer: "Diesel engines typically provide 20-30% better mileage than petrol engines due to higher energy density and better thermal efficiency. However, diesel vehicles usually cost more upfront and require different maintenance."
  },
  {
    question: "How do I calculate cost per km for petrol?",
    answer: "Divide your petrol price per liter by your vehicle's mileage (km/L). Example: If petrol costs $1.50/L and your car gives 15 km/L, cost per km = $1.50 ÷ 15 = $0.10 per km."
  }
];

export default function PetrolMileageCalculatorPage() {
  return (
    <ViewerLayout>
      <FuelCalculatorSchema 
        pageName="Petrol Mileage Calculator"
        description="Calculate petrol consumption, mileage, and cost efficiency for any vehicle"
        url="https://nextcodehub.com/tools/petrol-mileage-calculator"
      />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Petrol Mileage Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate your vehicle's petrol mileage, consumption rate, and cost per kilometer. 
              Track fuel efficiency, optimize petrol expenses, and save money on every trip.
            </p>
          </div>

          {/* Calculator Component */}
          <FuelCalculator variant="petrol-mileage" />

          {/* AdSense After Calculator */}
          <AdSenseBlock position="after-calculator" />

          {/* Content Section */}
          <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Complete Guide to Petrol Mileage Calculation
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Petrol mileage, measured in kilometers per liter (km/L), is one of the most important metrics for 
              vehicle owners. It directly impacts your monthly fuel budget, environmental footprint, and can 
              indicate your vehicle's health and performance. Understanding and optimizing your petrol mileage 
              can save you thousands of dollars annually while reducing emissions.
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our advanced petrol mileage calculator provides instant, accurate calculations for fuel consumption, 
              total costs, and efficiency metrics. Whether you're planning a road trip, tracking daily commute 
              expenses, or monitoring vehicle performance, this tool gives you the insights you need.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How to Calculate Petrol Mileage Manually:
            </h3>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                <li><strong>Step 1:</strong> Fill your petrol tank to full capacity</li>
                <li><strong>Step 2:</strong> Reset your trip meter to zero</li>
                <li><strong>Step 3:</strong> Drive normally until you need to refuel (preferably 100+ km for accuracy)</li>
                <li><strong>Step 4:</strong> Note the distance traveled from trip meter</li>
                <li><strong>Step 5:</strong> Fill tank again and record the liters required</li>
                <li><strong>Step 6:</strong> Divide distance by liters: Mileage (km/L) = Distance (km) ÷ Petrol Used (L)</li>
              </ol>
            </div>

            <AdSenseBlock position="mid-content" />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Petrol Mileage Standards by Vehicle Category
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Icon name="car" className="w-5 h-5" /> Small & Compact Cars
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>City Driving:</strong> 14-18 km/L</li>
                  <li><strong>Highway Driving:</strong> 18-22 km/L</li>
                  <li><strong>Average:</strong> 16-20 km/L</li>
                  <li><strong>Best Performers:</strong> 20-25 km/L</li>
                  <li><strong>Examples:</strong> Honda City, Maruti Suzuki Swift, Toyota Yaris</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Icon name="car" className="w-5 h-5" /> Mid-Size Sedans
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>City Driving:</strong> 11-14 km/L</li>
                  <li><strong>Highway Driving:</strong> 15-18 km/L</li>
                  <li><strong>Average:</strong> 12-16 km/L</li>
                  <li><strong>Best Performers:</strong> 16-19 km/L</li>
                  <li><strong>Examples:</strong> Toyota Camry, Honda Accord, Hyundai Sonata</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Icon name="car" className="w-5 h-5" /> SUVs & Crossovers
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Compact SUV:</strong> 10-14 km/L</li>
                  <li><strong>Mid-size SUV:</strong> 8-12 km/L</li>
                  <li><strong>Full-size SUV:</strong> 6-10 km/L</li>
                  <li><strong>Performance SUV:</strong> 7-11 km/L</li>
                  <li><strong>Examples:</strong> Honda CR-V, Toyota RAV4, Ford Explorer</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400 flex items-center gap-2">
                  <Icon name="zap" className="w-5 h-5" /> Hybrid & Eco Vehicles
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>Mild Hybrid:</strong> 18-22 km/L</li>
                  <li><strong>Full Hybrid:</strong> 22-28 km/L</li>
                  <li><strong>Plug-in Hybrid:</strong> 30-50 km/L (with electric)</li>
                  <li><strong>Top Performers:</strong> 25-35 km/L</li>
                  <li><strong>Examples:</strong> Toyota Prius, Honda Insight, Hyundai Ioniq</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Factors Affecting Petrol Mileage
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="alert-triangle" className="w-5 h-5" /> Driving Conditions (Impact: 20-40%)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  City driving with frequent stops reduces mileage by 30-40% compared to highway driving. 
                  Traffic congestion, traffic lights, and stop-and-go patterns significantly increase fuel consumption.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900 dark:to-cyan-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="trending-up" className="w-5 h-5" /> Driving Behavior (Impact: 15-30%)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Aggressive acceleration, hard braking, and speeding can reduce mileage by 33%. Smooth, 
                  predictive driving with gradual acceleration improves efficiency significantly.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="wrench" className="w-5 h-5" /> Vehicle Maintenance (Impact: 10-25%)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Dirty air filters, worn spark plugs, incorrect tire pressure, and old engine oil can reduce 
                  mileage by 25%. Regular maintenance ensures optimal performance.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="snowflake" className="w-5 h-5" /> Weather & AC Usage (Impact: 10-20%)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Air conditioning can reduce mileage by 20% in city driving. Cold weather also decreases 
                  efficiency by 10-15% as engines take longer to reach optimal temperature.
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900 dark:to-amber-900 p-5 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2"><Icon name="scale" className="w-5 h-5" /> Vehicle Load (Impact: 5-15%)</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Every 50 kg of extra weight reduces mileage by 1-2%. Roof racks and cargo carriers increase 
                  aerodynamic drag, reducing highway mileage by up to 25%.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              15 Expert Tips to Maximize Petrol Mileage
            </h2>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 p-6 rounded-lg mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Driving Techniques:</h4>
                  <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>1. Accelerate gradually and smoothly</li>
                    <li>2. Maintain steady speeds (60-80 km/h optimal)</li>
                    <li>3. Use cruise control on highways</li>
                    <li>4. Anticipate traffic to avoid sudden braking</li>
                    <li>5. Coast to decelerate when safe</li>
                    <li>6. Avoid excessive idling (&gt;60 seconds)</li>
                    <li>7. Use highest gear appropriate for speed</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">Maintenance & Care:</h4>
                  <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>8. Check tire pressure monthly (add 2-3 PSI)</li>
                    <li>9. Replace air filter every 15,000 km</li>
                    <li>10. Use recommended motor oil grade</li>
                    <li>11. Service engine as per schedule</li>
                    <li>12. Replace spark plugs when needed</li>
                    <li>13. Keep fuel injectors clean</li>
                    <li>14. Ensure proper wheel alignment</li>
                    <li>15. Use quality petrol from reputable stations</li>
                  </ol>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Real-World Petrol Mileage Example
            </h2>

            <div className="bg-indigo-50 dark:bg-indigo-900 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold mb-3">Monthly Commute Calculation:</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">Input Parameters:</h5>
                  <ul className="space-y-1">
                    <li>• Daily Distance: 50 km (round trip)</li>
                    <li>• Working Days: 22 days/month</li>
                    <li>• Vehicle Mileage: 13 km/L</li>
                    <li>• Petrol Price: $1.55/liter</li>
                    <li>• Vehicle: Mid-size sedan</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Calculated Results:</h5>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2"><Icon name="map" className="w-4 h-4" /> Monthly Distance: 1,100 km</li>
                    <li className="flex items-center gap-2"><Icon name="fuel" className="w-4 h-4" /> Petrol Required: 84.6 liters</li>
                    <li className="flex items-center gap-2"><Icon name="dollar-sign" className="w-4 h-4" /> Monthly Cost: $131.13</li>
                    <li className="flex items-center gap-2"><Icon name="bar-chart" className="w-4 h-4" /> Cost per km: $0.119</li>
                    <li className="flex items-center gap-2"><Icon name="trending-up" className="w-4 h-4" /> Annual Fuel Cost: $1,573.56</li>
                    <li className="flex items-center gap-2"><Icon name="gauge" className="w-4 h-4" /> Consumption: 7.69 L/100km</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-indigo-200 dark:border-indigo-700">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Potential Savings:</strong> By improving mileage from 13 to 16 km/L through better 
                  driving habits and maintenance, you could save $32.05/month or $384.60/year!
                </p>
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
                Related Fuel Calculators
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <a href="/tools/fuel-cost-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Fuel Cost Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate total trip fuel expenses</p>
                </a>
                <a href="/tools/fuel-mileage-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Fuel Mileage Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Track vehicle fuel efficiency</p>
                </a>
                <a href="/tools/mpg-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">MPG Calculator</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Calculate miles per gallon</p>
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
