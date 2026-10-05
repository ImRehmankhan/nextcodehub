import FuelCalculator from '../../components/FuelCalculator';
import Link from 'next/link';
import RelatedLinks from '../../components/RelatedLinks';

export const metadata = {
  title: "MPG Calculator - Calculate Miles Per Gallon",
  description: "Accurate MPG calculator to determine your car miles per gallon. Optimize your driving for better fuel efficiency.",
};

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          MPG Calculator
        </h1>
        <p className="text-lg text-gray-600">
          Accurate MPG calculator to determine your car miles per gallon. Optimize your driving for better fuel efficiency.
        </p>
      </div>

      <FuelCalculator />

      <div className="mt-16 prose prose-primary prose-lg max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About MPG Calculator</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          The standard metric for fuel efficiency in the US and UK. Use our MPG calculator to find out how many miles your car travels per gallon.
        </p>
        
        
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">How it works</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          This calculator uses standard mathematical formulas to estimate your fuel needs. 
          Simply input your expected driving distance, your vehicle's average fuel efficiency, and the current price of fuel.
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
          <li><strong>Distance:</strong> The total length of your journey.</li>
          <li><strong>Fuel Efficiency:</strong> How effectively your car uses fuel (e.g. 25 MPG).</li>
          <li><strong>Fuel Price:</strong> The cost per unit of fuel at the pump.</li>
        </ul>
        
        <RelatedLinks />
      </div>
    </div>
  );
}