import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/mpg-calculator',
      name: 'MPG Calculator - Miles Per Gallon Calculator',
      url: 'https://www.nextcodehub.com/mpg-calculator',
      description: 'Free MPG calculator to calculate miles per gallon for any vehicle. Accurate miles per gallon calculator for US and UK drivers.',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Web Browser',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      provider: { '@type': 'Organization', name: 'NextCodeHub', url: 'https://www.nextcodehub.com' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How do I calculate miles per gallon (MPG)?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate MPG, divide the miles driven by the gallons of gas used. For example, 300 miles on 10 gallons = 30 MPG. Our MPG calculator automates this for you.' },
        },
        {
          '@type': 'Question',
          name: 'What is a good MPG for a car?',
          acceptedAnswer: { '@type': 'Answer', text: 'A good MPG for a standard car is 30–40 MPG for highway driving. Cars getting above 40 MPG are considered fuel efficient. Hybrids can achieve 50+ MPG.' },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between US MPG and UK MPG?',
          acceptedAnswer: { '@type': 'Answer', text: 'US MPG uses the US gallon (3.785 liters), while UK MPG uses the imperial gallon (4.546 liters). A car rated at 30 US MPG is about 36 UK MPG. Our calculator handles both.' },
        },
        {
          '@type': 'Question',
          name: 'How do I improve my MPG?',
          acceptedAnswer: { '@type': 'Answer', text: 'You can improve your miles per gallon by maintaining proper tire pressure, reducing highway speed, avoiding rapid acceleration, removing unnecessary weight, and keeping up with regular vehicle maintenance.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "MPG Calculator - Miles Per Gallon Calculator Free Online",
  description: "Free MPG calculator to calculate miles per gallon for any vehicle. Use our miles per gallon calculator for accurate fuel efficiency tracking and gas mileage estimation.",
  keywords: [
    "mpg calculator",
    "miles per gallon calculator",
    "gas mileage calculator",
    "gas mileage estimator",
    "fuel efficiency calculator",
    "mpg calculator free",
    "calculate miles per gallon",
    "car mpg calculator",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/mpg-calculator',
  },
  openGraph: {
    title: "MPG Calculator - Free Miles Per Gallon Calculator",
    description: "Calculate miles per gallon (MPG) for any vehicle with our free MPG calculator. Track fuel efficiency and estimate gas costs.",
    url: 'https://www.nextcodehub.com/mpg-calculator',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            MPG Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your vehicle&apos;s miles per gallon (MPG) accurately. Track fuel efficiency, compare vehicles, and estimate gas costs with our free miles per gallon calculator.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          {/* What is MPG */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is MPG (Miles Per Gallon)?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Miles per gallon (MPG)</strong> is the standard measure of fuel efficiency used in the United States and United Kingdom. It tells you how many miles your vehicle can travel on one gallon of fuel. A higher MPG means your car is more fuel efficient and costs less to run.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The EPA (Environmental Protection Agency) tests every new car sold in the US and provides city and highway MPG ratings. Our <strong>MPG calculator</strong> lets you measure your real-world miles per gallon based on actual fuel fill-ups.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-4">
              <h3 className="font-bold text-gray-900 mb-3">MPG Formula</h3>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg">
                <p>MPG = Miles Driven ÷ Gallons of Gas Used</p>
                <p className="mt-2 text-gray-400">Example: 300 miles ÷ 10 gallons = 30 MPG</p>
              </div>
            </div>
          </section>

          {/* MPG Benchmarks */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">MPG Benchmarks by Vehicle Class</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-semibold">
                    <th className="text-left p-3 rounded-tl-lg">Vehicle Class</th>
                    <th className="text-left p-3">City MPG</th>
                    <th className="text-left p-3">Highway MPG</th>
                    <th className="text-left p-3 rounded-tr-lg">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    ['Electric Vehicle', 'N/A', 'N/A', '⭐⭐⭐⭐⭐ Excellent'],
                    ['Hybrid Car', '40 – 55', '45 – 60', '⭐⭐⭐⭐⭐ Excellent'],
                    ['Compact Car', '28 – 35', '35 – 45', '⭐⭐⭐⭐ Great'],
                    ['Midsize Sedan', '22 – 30', '30 – 40', '⭐⭐⭐ Average'],
                    ['SUV / Crossover', '18 – 25', '25 – 32', '⭐⭐ Below Avg'],
                    ['Full-Size Truck', '14 – 20', '18 – 26', '⭐ Poor'],
                  ].map(([cls, city, hwy, rating]) => (
                    <tr key={cls} className="hover:bg-gray-50">
                      <td className="p-3 font-medium text-gray-900">{cls}</td>
                      <td className="p-3 text-gray-600">{city}</td>
                      <td className="p-3 text-gray-600">{hwy}</td>
                      <td className="p-3 text-gray-600 text-xs">{rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* US vs UK MPG */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">US MPG vs UK MPG Explained</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="font-bold text-blue-900 mb-2">🇺🇸 US Gallon (3.785 L)</h3>
                <p className="text-blue-800 text-sm mb-3">Standard US MPG uses the US liquid gallon. Most American cars, trucks, and gas stations use this measurement.</p>
                <p className="font-mono text-xs text-blue-900 bg-blue-100 p-2 rounded">30 US MPG = 36.04 UK MPG</p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h3 className="font-bold text-green-900 mb-2">🇬🇧 UK Imperial Gallon (4.546 L)</h3>
                <p className="text-green-800 text-sm mb-3">UK MPG uses the larger imperial gallon. British fuel economy figures are typically higher than US MPG for the same vehicle.</p>
                <p className="font-mono text-xs text-green-900 bg-green-100 p-2 rounded">30 UK MPG = 24.95 US MPG</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate miles per gallon (MPG)?</h3>
                <p className="text-gray-600">Divide miles driven by gallons used: 300 miles ÷ 10 gallons = 30 MPG. Or simply use our MPG calculator above.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What is a good MPG for a car?</h3>
                <p className="text-gray-600">30–40 MPG is considered good for highway driving in a regular car. Above 40 MPG is fuel efficient. Hybrids achieve 50+ MPG.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I improve my MPG?</h3>
                <p className="text-gray-600">Maintain proper tire pressure, reduce highway speed to 60 mph, avoid rapid acceleration, remove unnecessary weight, and service your engine regularly.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">What is the difference between US MPG and UK MPG?</h3>
                <p className="text-gray-600">US MPG uses a 3.785L gallon; UK MPG uses a 4.546L imperial gallon. A car at 30 US MPG equals ~36 UK MPG.</p>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}