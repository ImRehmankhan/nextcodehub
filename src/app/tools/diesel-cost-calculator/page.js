import FuelCalculator from '@/components/tools/FuelCalculator';
import AdSenseBlock from '@/components/ui/AdSenseBlock';
import { FuelCalculatorSchema, FAQSchema } from '@/components/seo/SchemaMarkup';
import ViewerLayout from '@/components/viewer/viewer-layout';
import Icon from '@/components/icon';


export const metadata = {
  title: 'Diesel Cost Calculator – Calculate Diesel Fuel Expenses & Mileage',
  description: 'Free diesel cost calculator to estimate diesel fuel expenses, consumption, and mileage. Compare diesel vs petrol costs and optimize your diesel vehicle budget.',
  keywords: 'diesel cost calculator, diesel fuel calculator, diesel mileage calculator, diesel vs petrol cost, diesel consumption',
  openGraph: {
    title: 'Diesel Cost Calculator – Calculate Diesel Fuel Expenses & Mileage',
    description: 'Calculate diesel fuel costs, mileage, and compare with petrol expenses.',
    type: 'website',
  },
  alternates: {
    canonical: '/tools/diesel-cost-calculator'
  }
};

const faqs = [
  {
    question: "Is diesel cheaper than petrol per mile?",
    answer: "Diesel vehicles typically achieve 20-30% better fuel economy than petrol vehicles, offsetting higher fuel prices. On average, diesel costs 10-25% less per mile despite being $0.20-$0.50 more expensive per gallon."
  },
  {
    question: "What is good diesel mileage?",
    answer: "Good diesel mileage varies by vehicle: Cars (45-60 MPG), SUVs (30-40 MPG), Pickup trucks (25-35 MPG), and Commercial trucks (8-12 MPG). Modern diesel engines are significantly more efficient than older models."
  },
  {
    question: "When does diesel make sense over petrol?",
    answer: "Diesel is economical if you drive 15,000+ miles annually, do frequent highway driving, haul heavy loads regularly, or plan to keep the vehicle 5+ years. The higher purchase price is offset by fuel savings and longevity."
  },
  {
    question: "How much does diesel maintenance cost compared to petrol?",
    answer: "Diesel maintenance costs 10-15% more due to expensive oil changes, fuel filters, and DEF fluid. However, diesel engines last 2-3x longer (200,000-500,000 miles), making long-term costs competitive."
  }
];

export default function DieselCostCalculatorPage() {
  return (
    <ViewerLayout>
      <FuelCalculatorSchema 
        pageName="Diesel Cost Calculator"
        description="Calculate diesel fuel costs, consumption, and compare with petrol expenses"
        url="https://nextcodehub.com/tools/diesel-cost-calculator"
      />
      <FAQSchema faqs={faqs} />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Diesel Cost Calculator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate diesel fuel costs, track diesel mileage, and compare diesel vs petrol expenses. 
              Optimize your diesel vehicle budget and make informed fuel decisions.
            </p>
          </div>

          <FuelCalculator variant="diesel" />
          <AdSenseBlock position="after-calculator" />

          <div className="mt-16 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Understanding Diesel Fuel Costs
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Diesel engines offer superior fuel efficiency and torque, making them popular for trucks, SUVs, 
              and commercial vehicles. While diesel fuel typically costs more per gallon than petrol, the 
              improved mileage often results in lower cost per mile. Our calculator helps you understand the 
              true cost of diesel operation and compare it with petrol alternatives.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-green-700 dark:text-green-300 flex items-center gap-2">
                  <Icon name="check-circle" className="w-5 h-5" /> Diesel Advantages
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• 20-30% better fuel economy</li>
                  <li>• Lower CO₂ emissions per mile</li>
                  <li>• Higher torque for towing</li>
                  <li>• Engines last 2-3x longer</li>
                  <li>• Better resale value</li>
                  <li>• Ideal for high mileage drivers</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-700 dark:text-red-300 flex items-center gap-2">
                  <Icon name="alert-triangle" className="w-5 h-5" /> Diesel Disadvantages
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Higher purchase price ($3,000-$5,000)</li>
                  <li>• More expensive maintenance</li>
                  <li>• Higher fuel price per gallon</li>
                  <li>• DEF fluid costs ($5-$15 per fill)</li>
                  <li>• Fewer gas stations offer diesel</li>
                  <li>• Cold weather starting issues</li>
                </ul>
              </div>
            </div>

            <AdSenseBlock position="mid-content" />

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              Diesel vs Petrol Cost Comparison
            </h2>

            <div className="bg-muted p-6 rounded-lg mb-8">
              <h4 className="text-xl font-semibold mb-4">Example: 30,000 Miles Annual Driving</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-2">Diesel Vehicle:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• MPG: 40</li>
                    <li>• Gallons: 750</li>
                    <li>• Price/gal: $4.00</li>
                    <li>• <strong>Annual Cost: $3,000</strong></li>
                    <li>• Cost/mile: $0.100</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Petrol Vehicle:</h5>
                  <ul className="text-sm space-y-1">
                    <li>• MPG: 28</li>
                    <li>• Gallons: 1,071</li>
                    <li>• Price/gal: $3.50</li>
                    <li>• <strong>Annual Cost: $3,749</strong></li>
                    <li>• Cost/mile: $0.125</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 font-semibold text-green-700 dark:text-green-300 flex items-center gap-2">
                <Icon name="dollar-sign" className="w-5 h-5" /> Diesel Savings: $749/year or $3,745 over 5 years
              </p>
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
                  <h4 className="font-semibold text-primary mb-2">Fuel Cost Calculator</h4>
                  <p className="text-sm text-gray-600">Universal fuel calculations</p>
                </a>
                <a href="/tools/ev-vs-petrol-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-primary mb-2">EV vs Petrol Calculator</h4>
                  <p className="text-sm text-gray-600">Compare electric and fuel costs</p>
                </a>
                <a href="/tools/fuel-expense-calculator" className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-primary mb-2">Fuel Expense Calculator</h4>
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
