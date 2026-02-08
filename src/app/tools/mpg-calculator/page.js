import FuelCalculator from '@/components/tools/FuelCalculator';
import ViewerLayout from '@/components/viewer/viewer-layout';
import AdSenseBlock from '@/components/ui/AdSenseBlock';
import { FuelCalculatorSchema, FAQSchema } from '@/components/seo/SchemaMarkup';

const faqs = [
  {
    question: "How do I calculate MPG?",
    answer: "To calculate MPG, divide the number of miles driven by the gallons of fuel used. Formula: MPG = Miles Driven ÷ Gallons Used. For example, if you drove 300 miles and used 10 gallons, your MPG is 30."
  },
  {
    question: "What is considered good MPG?",
    answer: "Good MPG varies by vehicle type. Cars: 30-40 MPG is good, 40+ is excellent. SUVs: 20-30 MPG is good. Trucks: 18-25 MPG is good. Hybrids can achieve 45-60 MPG."
  },
  {
    question: "How can I improve my MPG?",
    answer: "Improve MPG by maintaining proper tire pressure, avoiding rapid acceleration/braking, reducing idle time, removing excess weight, using cruise control on highways, and keeping up with regular vehicle maintenance."
  },
  {
    question: "Does driving speed affect MPG?",
    answer: "Yes, significantly. Fuel economy peaks at 45-60 mph for most vehicles. Every 5 mph over 60 mph reduces fuel economy by about 7-14%, equivalent to paying $0.20-$0.40 more per gallon."
  }
];

export const metadata = {
  title: 'MPG Calculator – Miles Per Gallon Calculator | Calculate Gas Mileage Free',
  description: 'Free MPG calculator to calculate miles per gallon instantly. Measure your car gas mileage, fuel efficiency, and optimize fuel consumption.',
  keywords: 'mpg calculator, miles per gallon calculator, gas mileage calculator, mpg estimator, fuel economy calculator',
  openGraph: {
    title: 'MPG Calculator – Calculate Miles Per Gallon Instantly',
    description: 'Free MPG calculator to measure your vehicle gas mileage and fuel efficiency.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/mpg-calculator'
  }
};

export default function MPGCalculatorPage() {
  return (
    <ViewerLayout>
      <FuelCalculatorSchema 
        pageName="MPG Calculator"
        description="Calculate miles per gallon and optimize fuel efficiency"
        url="https://nextcodehub.com/tools/mpg-calculator"
      />
      <FAQSchema faqs={faqs} />
      
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            MPG Calculator – Miles Per Gallon
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Calculate your vehicle's miles per gallon (MPG) instantly. Track gas mileage, optimize fuel 
            efficiency, and save money on gas with our free MPG calculator.
          </p>
        </div>

        {/* Calculator Component */}
        <FuelCalculator variant="mpg" />

        <AdSenseBlock position="after-calculator" />

        {/* Content Section */}
        <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What is MPG (Miles Per Gallon)?
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            MPG (Miles Per Gallon) is a measurement of how many miles your vehicle can travel using one gallon 
            of gasoline. It's the standard measure of fuel efficiency in the United States and helps you 
            understand how economical your vehicle is.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-3">MPG Formula:</h3>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <p className="text-2xl font-bold">MPG = Miles Driven ÷ Gallons Used</p>
            </div>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              For example: If you drive 300 miles and use 10 gallons of gas, your MPG is 30 (300 ÷ 10 = 30 MPG)
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            MPG Ratings by Vehicle Type
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">
                Excellent MPG (40+ MPG)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Hybrid vehicles: 45-60 MPG</li>
                <li>• Plug-in hybrids: 50-70 MPG equivalent</li>
                <li>• Small economy cars: 40-50 MPG (highway)</li>
                <li>• Diesel cars: 42-55 MPG</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">
                Good MPG (30-40 MPG)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Compact cars: 32-38 MPG</li>
                <li>• Mid-size sedans: 30-36 MPG</li>
                <li>• Small crossovers: 28-35 MPG</li>
                <li>• Efficient SUVs: 30-34 MPG</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-orange-600 dark:text-orange-400">
                Average MPG (20-30 MPG)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Standard sedans: 25-30 MPG</li>
                <li>• Mid-size SUVs: 22-28 MPG</li>
                <li>• Minivans: 20-28 MPG</li>
                <li>• Small pickup trucks: 22-27 MPG</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">
                Below Average MPG (Below 20 MPG)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Large SUVs: 15-19 MPG</li>
                <li>• Full-size pickup trucks: 14-20 MPG</li>
                <li>• Sports cars: 16-22 MPG</li>
                <li>• Luxury vehicles: 17-23 MPG</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            How to Calculate Your Vehicle's MPG
          </h2>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-4">Step-by-Step Guide:</h3>
            <ol className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>
                <strong>1. Fill Your Tank:</strong> Fill your gas tank completely until the pump automatically 
                stops. Reset your trip odometer to zero.
              </li>
              <li>
                <strong>2. Drive Normally:</strong> Drive your vehicle as you normally would. Don't change your 
                driving habits just for the test.
              </li>
              <li>
                <strong>3. Record Distance:</strong> When you're ready to refuel, note the miles traveled on 
                your trip odometer.
              </li>
              <li>
                <strong>4. Refuel & Record:</strong> Fill your tank again completely and note how many gallons 
                it took to fill.
              </li>
              <li>
                <strong>5. Calculate:</strong> Divide miles driven by gallons used to get your MPG.
              </li>
            </ol>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            MPG Calculation Example:
          </h3>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-8">
            <p className="mb-2"><strong>Starting odometer:</strong> 10,000 miles</p>
            <p className="mb-2"><strong>Ending odometer:</strong> 10,350 miles</p>
            <p className="mb-2"><strong>Miles driven:</strong> 350 miles</p>
            <p className="mb-2"><strong>Gallons to refill:</strong> 12.5 gallons</p>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
              <p className="text-lg"><strong>Calculation:</strong> 350 miles ÷ 12.5 gallons = 28 MPG</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            City vs Highway MPG
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900 dark:to-red-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">City MPG</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                City driving involves frequent stops, starts, and idling which uses more fuel.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Frequent acceleration/braking</li>
                <li>• Stop lights and traffic</li>
                <li>• Lower average speeds</li>
                <li>• Typically 20-30% lower than highway MPG</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Highway MPG</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Highway driving is more efficient with constant speeds and less braking.
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Steady cruising speed</li>
                <li>• Minimal braking</li>
                <li>• Engine operates efficiently</li>
                <li>• Generally 20-30% better than city MPG</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            10 Ways to Improve Your MPG
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
              <span className="text-2xl mr-4">🚗</span>
              <div>
                <h4 className="font-semibold mb-1">1. Maintain Steady Speed</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use cruise control on highways to maintain consistent speed and improve MPG by up to 14%.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
              <span className="text-2xl mr-4">⚙️</span>
              <div>
                <h4 className="font-semibold mb-1">2. Keep Tires Properly Inflated</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Under-inflated tires can lower MPG by 0.2% for every 1 PSI drop in pressure.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
              <span className="text-2xl mr-4">🏋️</span>
              <div>
                <h4 className="font-semibold mb-1">3. Remove Excess Weight</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Every 100 pounds of extra weight reduces MPG by about 1%. Clean out your trunk!
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
              <span className="text-2xl mr-4">🌡️</span>
              <div>
                <h4 className="font-semibold mb-1">4. Limit AC Usage</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Air conditioning can reduce MPG by up to 25%. Use it wisely or open windows at low speeds.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
              <span className="text-2xl mr-4">🔧</span>
              <div>
                <h4 className="font-semibold mb-1">5. Regular Maintenance</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Keep your engine tuned, change oil regularly, and replace air filters to maintain optimal MPG.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
              <span className="text-2xl mr-4">🚦</span>
              <div>
                <h4 className="font-semibold mb-1">6. Avoid Aggressive Driving</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Rapid acceleration and hard braking can lower MPG by 15-30% at highway speeds.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
              <span className="text-2xl mr-4">⏱️</span>
              <div>
                <h4 className="font-semibold mb-1">7. Minimize Idling</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Idling gets 0 MPG. Turn off engine if stopped for more than 30 seconds.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
              <span className="text-2xl mr-4">🏔️</span>
              <div>
                <h4 className="font-semibold mb-1">8. Reduce Aerodynamic Drag</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Remove roof racks when not in use. They can reduce MPG by up to 25% at highway speeds.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
              <span className="text-2xl mr-4">🗺️</span>
              <div>
                <h4 className="font-semibold mb-1">9. Plan Your Routes</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Combine errands into one trip and avoid rush hour traffic to improve efficiency.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md flex items-start">
              <span className="text-2xl mr-4">⛽</span>
              <div>
                <h4 className="font-semibold mb-1">10. Use Recommended Fuel Grade</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Use the octane rating recommended in your owner's manual. Higher octane won't improve MPG.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Frequently Asked Questions About MPG
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                What is a good MPG for a car?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                A good MPG depends on the vehicle type. For sedans, 30+ MPG is good. For SUVs, 25+ MPG is 
                considered good. Hybrids achieving 50+ MPG are excellent. Compare within your vehicle class 
                for accurate assessment.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Why is my MPG lower than the EPA rating?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                EPA ratings are tested under controlled laboratory conditions. Real-world factors like driving 
                style, terrain, weather, cargo weight, and vehicle maintenance affect actual MPG. Expect 
                10-20% lower MPG in normal driving conditions.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Does speed affect MPG?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Yes, significantly. MPG typically peaks at 50-60 mph. Above 60 mph, fuel economy drops rapidly 
                due to increased air resistance. Driving at 70 mph instead of 60 mph can reduce MPG by up to 17%.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                How much money can I save by improving MPG?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                If you drive 12,000 miles/year and improve from 20 MPG to 25 MPG, at $3.50/gallon, you'll save 
                $420 annually. The savings increase with more miles driven and higher gas prices.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Can cold weather affect MPG?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Yes, cold weather can reduce MPG by 12-20%. Engine and transmission take longer to reach optimal 
                temperature, fuel is denser, tire pressure drops, and battery efficiency decreases. Short trips 
                in winter are especially inefficient.
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Start Tracking Your MPG Today
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Use our free MPG calculator to monitor your vehicle's fuel efficiency. Regular tracking helps you:
            </p>
            <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
              <li>💰 Save hundreds of dollars annually on fuel costs</li>
              <li>🔍 Detect mechanical issues before they become expensive repairs</li>
              <li>📊 Compare different driving routes and habits</li>
              <li>🌱 Reduce your carbon footprint and environmental impact</li>
              <li>🚗 Make informed decisions when buying your next vehicle</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <AdSenseBlock position="mobile-sticky" />
    </ViewerLayout>
  );
}
