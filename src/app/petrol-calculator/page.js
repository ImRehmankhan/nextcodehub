import FuelCalculator from '../../components/FuelCalculator';
import RelatedLinks from '../../components/RelatedLinks';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': 'https://www.nextcodehub.com/petrol-calculator',
      name: 'Petrol Calculator',
      url: 'https://www.nextcodehub.com/petrol-calculator',
      description: 'Free petrol calculator for petrol cost, petrol mileage, and petrol expense calculations. Track petrol average and budget your fuel expenses.',
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
          name: 'How do I calculate my petrol cost?',
          acceptedAnswer: { '@type': 'Answer', text: 'To calculate petrol cost: divide your distance by petrol mileage (km/L) to get liters needed, then multiply by the petrol price per liter. Example: 200km ÷ 15 km/L × $1.50/L = $20 petrol cost.' },
        },
        {
          '@type': 'Question',
          name: 'What is petrol average and how is it calculated?',
          acceptedAnswer: { '@type': 'Answer', text: 'Petrol average is the fuel efficiency of your vehicle, expressed as km per liter (km/L). Calculate it by dividing total distance driven by total liters of petrol consumed over that distance.' },
        },
        {
          '@type': 'Question',
          name: 'How much petrol do I need for a trip?',
          acceptedAnswer: { '@type': 'Answer', text: 'Divide your trip distance by your vehicle\'s petrol average (km/L) to get liters needed. Our petrol calculator does this automatically — just enter distance, mileage, and petrol price.' },
        },
      ],
    },
  ],
};

export const metadata = {
  title: "Petrol Calculator - Petrol Cost, Mileage & Expense Calculator",
  description: "Free petrol calculator to calculate petrol cost, petrol mileage, petrol average, and petrol expense for any trip. Budget your petrol expenses accurately.",
  keywords: [
    "petrol calculator",
    "petrol cost calculator",
    "petrol mileage calculator",
    "petrol average calculator",
    "petrol expense calculator",
    "petrol price calculator",
    "petrol consumption calculator",
    "calculate petrol cost",
  ],
  alternates: {
    canonical: 'https://www.nextcodehub.com/petrol-calculator',
  },
  openGraph: {
    title: "Petrol Calculator - Petrol Cost & Mileage Calculator",
    description: "Calculate petrol cost, petrol mileage, petrol average, and petrol expense with our free petrol calculator.",
    url: 'https://www.nextcodehub.com/petrol-calculator',
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
            Petrol Calculator
          </h1>
          <p className="text-lg text-gray-600">
            Calculate petrol cost, petrol mileage, and petrol expense for any journey. Our dedicated petrol calculator gives you accurate petrol average and budgeting figures instantly.
          </p>
        </div>

        <FuelCalculator />

        <div className="mt-16 max-w-4xl mx-auto space-y-12">

          {/* Petrol cost explained */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Petrol Cost</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Knowing your petrol cost before you drive saves you from surprise fuel bills. Whether you&apos;re planning a road trip or budgeting your daily commute, our petrol calculator gives you the exact petrol expense in seconds.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              The formula for calculating <strong>petrol cost</strong> is simple: divide your trip distance by your vehicle&apos;s petrol mileage (km/L), then multiply the result by the current petrol price per liter.
            </p>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Petrol Cost Formula</h3>
              <div className="font-mono text-sm bg-gray-900 text-green-400 p-4 rounded-lg space-y-1">
                <p>Petrol Required (L) = Distance (km) ÷ Petrol Average (km/L)</p>
                <p>Petrol Cost = Petrol Required (L) × Petrol Price ($/L)</p>
                <p className="text-gray-400 mt-2">Example: 200 km ÷ 15 km/L × $1.50/L = <span className="text-yellow-400">$20.00</span></p>
              </div>
            </div>
          </section>

          {/* Petrol average guide */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Your Petrol Average</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Your <strong>petrol average</strong> — also known as fuel efficiency or mileage — is the number of kilometers your vehicle travels per liter of petrol. It&apos;s the most critical factor in your petrol expense calculations. Here&apos;s what typical petrol averages look like:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { vehicle: 'Motorcycle', avg: '40 – 60 km/L', color: 'green' },
                { vehicle: 'Small Hatchback', avg: '16 – 20 km/L', color: 'blue' },
                { vehicle: 'Sedan / Saloon', avg: '12 – 16 km/L', color: 'indigo' },
                { vehicle: 'SUV / 4x4', avg: '8 – 12 km/L', color: 'orange' },
                { vehicle: 'Pickup Truck', avg: '6 – 10 km/L', color: 'red' },
                { vehicle: 'Petrol Hybrid', avg: '18 – 25 km/L', color: 'teal' },
              ].map(({ vehicle, avg }) => (
                <div key={vehicle} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="font-medium text-gray-900">{vehicle}</span>
                  <span className="text-sm font-semibold text-primary-700 bg-primary-50 px-3 py-1 rounded-full">{avg}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Tips to reduce petrol expense */}
          <section className="bg-gray-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Tips to Reduce Your Petrol Expense</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Maintain steady speed', detail: 'Constant speed on highways reduces petrol consumption by up to 20%.' },
                { tip: 'Keep tires inflated', detail: 'Under-inflated tires can reduce petrol mileage by 3% per PSI drop.' },
                { tip: 'Reduce AC usage', detail: 'Air conditioning can increase petrol consumption by 10–20%.' },
                { tip: 'Avoid idling', detail: 'Idling uses 0.5–1 liter per hour. Turn off your engine when parked.' },
                { tip: 'Service regularly', detail: 'A well-tuned engine can improve petrol average by up to 15%.' },
                { tip: 'Drive smoothly', detail: 'Aggressive acceleration and braking waste up to 30% more petrol.' },
              ].map(({ tip, detail }) => (
                <div key={tip} className="flex gap-3 items-start">
                  <svg className="flex-shrink-0 text-green-400 mt-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>
                    <p className="font-semibold">{tip}</p>
                    <p className="text-gray-400 text-sm">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-5">
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">How do I calculate my petrol cost?</h3>
                <p className="text-gray-600">Divide distance by petrol mileage (km/L) to get liters, then multiply by the price per liter. Example: 200km ÷ 15 km/L × $1.50 = $20. Use our petrol calculator above.</p>
              </div>
              <div className="border-b border-gray-100 pb-5">
                <h3 className="font-bold text-gray-900 mb-2">What is petrol average and how is it calculated?</h3>
                <p className="text-gray-600">Petrol average is km driven per liter of petrol consumed. Calculate it: Total km ÷ Total liters used = km/L petrol average.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">How much petrol do I need for a trip?</h3>
                <p className="text-gray-600">Divide trip distance by your petrol average (km/L). For 300km at 15 km/L = 20 liters needed. Enter your values above for an instant calculation.</p>
              </div>
            </div>
          </section>

          <RelatedLinks />
        </div>
      </div>
    </>
  );
}