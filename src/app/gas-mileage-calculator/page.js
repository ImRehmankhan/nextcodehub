import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/gas-mileage-calculator',
      name: 'Gas Mileage Calculator',
      url: 'https://www.nextcodehub.com/gas-mileage-calculator',
      description: 'Free gas mileage calculator and gas mileage estimator. Calculate your car\'s MPG and estimate gas costs for any trip.',
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
          name: 'How do I calculate my gas mileage?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate gas mileage (MPG), fill your tank, note the odometer reading, drive until you need to refuel, fill the tank again and note gallons used and miles driven. Divide miles by gallons to get your MPG.' },
        },
        {
          '@type': 'Question',
          name: 'What is a good gas mileage for a car?',
          acceptedAnswer: { '@type': 'Answer', text: 'A good gas mileage is 30–40 MPG for a passenger car. Fuel-efficient cars get 40+ MPG, while trucks and large SUVs typically get 15–20 MPG. Hybrids can achieve 50+ MPG.' },
        },
        {
          '@type': 'Question',
          name: 'How can I estimate my gas cost for a road trip?',
          acceptedAnswer: { '@type': 'Answer', text: 'Use our gas mileage calculator: enter your trip distance, your vehicle\'s MPG, and current gas price per gallon. The calculator will instantly show your estimated gas cost.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Gas Mileage Calculator - Free MPG & Gas Mileage Estimator",
  description: "Free gas mileage calculator and gas mileage estimator. Calculate your car's MPG, estimate gas costs for trips, and track your vehicle's gas and mileage performance.",
  keywords: [
    "gas mileage calculator",
    "gas mileage estimator",
    "gas and mileage calculator",
    "mpg calculator",
    "calculate gas mileage",
    "car gas mileage",
    "road trip gas calculator",
    "miles per gallon estimator",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/gas-mileage-calculator',
  },
  openGraph: {
    title: "Gas Mileage Calculator - Free MPG & Gas Mileage Estimator",
    description: "Calculate your car's gas mileage (MPG) and estimate gas costs for any trip with our free gas mileage calculator.",
    url: 'https://www.nextcodehub.com/gas-mileage-calculator',
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
            Gas Mileage Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate your car&apos;s gas mileage (MPG) and estimate gas costs for any journey. Our free gas mileage estimator helps you track fuel efficiency and plan road trips smarter.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Gas Mileage (MPG)</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gas mileage — measured in miles per gallon (MPG) — tells you how far your vehicle travels on one gallon of gas. Knowing your gas mileage is essential for budgeting fuel costs on road trips and daily commutes.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Step-by-Step Gas Mileage Calculation</h3>
              <ol className="space-y-3 text-gray-600">
                <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">1</span><span>Fill your gas tank completely and note the odometer reading</span></li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">2</span><span>Drive normally until you need to refuel</span></li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">3</span><span>Fill the tank again and note gallons added and new odometer reading</span></li>
                <li className="flex gap-3"><span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">4</span><span>Divide miles driven by gallons used = your MPG</span></li>
              </ol>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg mt-4">
                <p>Gas Mileage (MPG) = Miles Driven ÷ Gallons Used</p>
                <p className="text-gray-400 mt-1">Example: 350 miles ÷ 11.5 gallons = <span className="text-yellow-400">30.4 MPG</span></p>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Gas Mileage by Vehicle Type</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { v: 'Economy/Compact Car', mpg: '30–45 MPG', label: '✅ Excellent' },
                { v: 'Midsize Sedan', mpg: '24–35 MPG', label: '✅ Good' },
                { v: 'Full-Size Sedan', mpg: '20–28 MPG', label: '⚠️ Average' },
                { v: 'Small SUV', mpg: '23–32 MPG', label: '⚠️ Average' },
                { v: 'Large SUV / Truck', mpg: '14–20 MPG', label: '❌ Below Avg' },
                { v: 'Hybrid Car', mpg: '42–60 MPG', label: '🌟 Best' },
              ].map(({ v, mpg, label }) => (
                <div key={v} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{v}</p>
                    <p className="text-xs text-gray-500">{label}</p>
                  </div>
                  <span className="font-bold text-primary-700">{mpg}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate my gas mileage?</h3>
                <p className="text-gray-600">Fill up your tank, drive until you need gas, refill and note gallons added. Divide miles driven by gallons = MPG. Or just use our gas mileage calculator above.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What is a good gas mileage?</h3>
                <p className="text-gray-600">30–40 MPG is good for a standard car. Above 40 MPG is excellent. Hybrids achieve 50+ MPG. SUVs and trucks get 15–22 MPG.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">How can I estimate gas cost for a road trip?</h3>
                <p className="text-gray-600">Enter your distance, MPG, and gas price in the calculator above. It instantly shows total gallons needed and total gas cost.</p>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}
