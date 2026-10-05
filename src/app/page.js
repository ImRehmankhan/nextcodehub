import FuelCalculator from '../components/FuelCalculator';
import Link from 'next/link';
import RelatedLinks from '../components/RelatedLinks';

export const metadata = {
  title: "FuelCalc - Free Fuel Cost & Mileage Calculators",
  description: "Calculate your fuel expenses, mpg, and vehicle efficiency with our free suite of fuel calculators. Plan your journey intelligently.",
};

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700 tracking-tight mb-6">
          Smart Fuel Calculations for Every Trip
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Accurately estimate your fuel costs, check your gas mileage, and optimize your vehicle's fuel consumption with our suite of free tools.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#calculator" className="px-8 py-4 rounded-full bg-primary-500 text-white font-bold hover:bg-primary-600 hover:shadow-lg transition-all duration-300">
            Use Calculator Now
          </a>
          <Link href="/fuel-cost-calculator" className="px-8 py-4 rounded-full bg-white text-primary-500 font-bold border border-primary-100 hover:border-primary-300 hover:shadow-sm transition-all duration-300">
            Explore All Tools
          </Link>
        </div>
      </div>

      <div id="calculator" className="scroll-mt-24">
        <FuelCalculator />
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Cost Estimator', desc: 'Predict exact expenses for your road trips.', link: '/fuel-cost-calculator' },
          { title: 'Mileage Tracker', desc: 'Calculate your exact MPG or km/L.', link: '/fuel-mileage-calculator' },
          { title: 'Consumption Check', desc: 'Monitor how much fuel you burn.', link: '/fuel-consumption-calculator' },
        ].map((feature, i) => (
          <Link key={i} href={feature.link} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-primary-300 hover:shadow-md transition-all duration-300 group">
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-16">
        <RelatedLinks />
      </div>
    </div>
  );
}