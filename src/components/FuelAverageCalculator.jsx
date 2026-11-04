'use client';
import { useState, useMemo } from 'react';
import cc from 'currency-codes';

const allCurrencies = cc.data.sort((a, b) => a.code.localeCompare(b.code));

export default function FuelAverageCalculator() {
  const [inputMode, setInputMode] = useState('trip'); // 'trip' or 'odometer'
  const [currency, setCurrency] = useState('PKR');
  
  // Inputs
  const [tripKm, setTripKm] = useState('380');
  const [startOdo, setStartOdo] = useState('');
  const [endOdo, setEndOdo] = useState('');
  const [litersFilled, setLitersFilled] = useState('25');
  const [petrolPrice, setPetrolPrice] = useState('280');
  const [tankCapacity, setTankCapacity] = useState('40');

  const [result, setResult] = useState(null);

  const calculate = (e) => {
    if (e) e.preventDefault();

    let km = 0;
    if (inputMode === 'trip') {
      km = parseFloat(tripKm);
    } else {
      const s = parseFloat(startOdo);
      const end = parseFloat(endOdo);
      if (end > s) km = end - s;
    }

    const liters = parseFloat(litersFilled);
    const price = parseFloat(petrolPrice) || 0;
    const tank = parseFloat(tankCapacity) || 0;

    if (km > 0 && liters > 0) {
      const kmPerLiter = km / liters;
      const litersPer100 = (100 / kmPerLiter);
      const costPerKm = price > 0 ? (price / kmPerLiter) : null;
      const totalFillCost = price > 0 ? liters * price : null;
      const fullTankRange = tank > 0 ? (tank * kmPerLiter) : null;

      // Road trip fuel needs (100 km, 500 km, 1000 km)
      const fuel100 = (100 / kmPerLiter);
      const cost100 = price > 0 ? fuel100 * price : null;

      const fuel500 = (500 / kmPerLiter);
      const cost500 = price > 0 ? fuel500 * price : null;

      const fuel1000 = (1000 / kmPerLiter);
      const cost1000 = price > 0 ? fuel1000 * price : null;

      // Average assessment
      let assessment = { label: 'Good Average | بہترین ایوریج', color: 'text-emerald-400' };
      if (kmPerLiter >= 18) {
        assessment = { label: 'Excellent Average (Hybrid / Small Car)', color: 'text-green-400' };
      } else if (kmPerLiter >= 13) {
        assessment = { label: 'Good Petrol Average (Standard Sedan)', color: 'text-emerald-400' };
      } else if (kmPerLiter >= 9) {
        assessment = { label: 'Moderate Average (1.6L - 2.0L / Crossover)', color: 'text-yellow-400' };
      } else {
        assessment = { label: 'Low Average / Heavy Consumption', color: 'text-orange-400' };
      }

      setResult({
        kmPerLiter: kmPerLiter.toFixed(2),
        litersPer100: litersPer100.toFixed(2),
        mpgUS: (kmPerLiter * 2.35215).toFixed(1),
        costPerKm: costPerKm ? costPerKm.toFixed(2) : null,
        totalFillCost: totalFillCost ? totalFillCost.toFixed(2) : null,
        fullTankRange: fullTankRange ? fullTankRange.toFixed(0) : null,
        tankCapacity: tank > 0 ? tank.toFixed(0) : null,
        distanceDriven: km.toFixed(1),
        litersUsed: liters.toFixed(1),
        fuel100: fuel100.toFixed(1),
        cost100: cost100 ? cost100.toFixed(0) : null,
        fuel500: fuel500.toFixed(1),
        cost500: cost500 ? cost500.toFixed(0) : null,
        fuel1000: fuel1000.toFixed(1),
        cost1000: cost1000 ? cost1000.toFixed(0) : null,
        assessment,
      });
    }
  };

  const handleReset = () => {
    setTripKm('');
    setStartOdo('');
    setEndOdo('');
    setLitersFilled('');
    setPetrolPrice('');
    setResult(null);
  };

  const currencySymbol = useMemo(() => {
    if (currency === 'PKR') return 'Rs. ';
    if (currency === 'INR') return '₹';
    if (currency === 'USD') return '$';
    if (currency === 'GBP') return '£';
    if (currency === 'EUR') return '€';
    try {
      const formatted = (0).toLocaleString('en-US', { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0 });
      return formatted.replace(/\d/g, '').trim() + ' ';
    } catch (e) {
      return currency + ' ';
    }
  }, [currency]);

  return (
    <div className="bg-[#222224] rounded-3xl shadow-2xl max-w-5xl mx-auto my-8 overflow-hidden text-white border border-[#333]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Form */}
        <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#333]">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#333] p-3 rounded-2xl flex-shrink-0 text-emerald-400">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                Fuel Average Calculator <span className="text-emerald-400 text-base font-medium">پیٹرول ایوریج</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Tank-to-tank petrol average (km/L), cost per km &amp; distance fuel lookup
              </p>
            </div>
          </div>

          {/* Input Mode Selector */}
          <div className="bg-[#1a1a1c] p-1.5 rounded-xl flex gap-1 mb-6 border border-[#333]">
            <button
              type="button"
              onClick={() => { setInputMode('trip'); setResult(null); }}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                inputMode === 'trip' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Trip Meter (km)
            </button>
            <button
              type="button"
              onClick={() => { setInputMode('odometer'); setResult(null); }}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                inputMode === 'odometer' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Start &amp; End Odometer
            </button>
          </div>

          <form onSubmit={calculate} className="space-y-5">
            {/* Currency Selector */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Currency (کرنسی)</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-[#2a2a2c] text-white px-3 py-2 rounded-xl text-sm border border-[#444] focus:outline-none focus:border-emerald-500"
              >
                <option value="PKR">PKR (Rs.) - Pakistani Rupee</option>
                <option value="INR">INR (₹) - Indian Rupee</option>
                <option value="USD">USD ($) - US Dollar</option>
                <option value="GBP">GBP (£) - British Pound</option>
                <option value="AED">AED (د.إ) - UAE Dirham</option>
                <option value="SAR">SAR (﷼) - Saudi Riyal</option>
                <option value="EUR">EUR (€) - Euro</option>
                <option value="CAD">CAD ($) - Canadian Dollar</option>
                {allCurrencies.map((c) => (
                  <option key={c.code} value={c.code}>{c.code} - {c.currency}</option>
                ))}
              </select>
            </div>

            {/* Distance Inputs */}
            {inputMode === 'trip' ? (
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Trip Distance Driven (Kilometers | طے شدہ فاصلہ)
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 380 km"
                  value={tripKm}
                  onChange={(e) => setTripKm(e.target.value)}
                  className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                  required
                />
              </div>
            ) : (
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Odometer Readings (اوڈومیٹر ریڈنگ)</label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="number"
                    step="any"
                    placeholder="Previous (e.g. 15400)"
                    value={startOdo}
                    onChange={(e) => setStartOdo(e.target.value)}
                    className="w-full bg-[#1e1e20] text-white px-3 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm"
                    required
                  />
                  <input
                    type="number"
                    step="any"
                    placeholder="Current (e.g. 15780)"
                    value={endOdo}
                    onChange={(e) => setEndOdo(e.target.value)}
                    className="w-full bg-[#1e1e20] text-white px-3 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm"
                    required
                  />
                </div>
              </div>
            )}

            {/* Petrol Filled & Price */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Petrol Filled (Liters | پیٹرول کی مقدار)
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 25 L"
                  value={litersFilled}
                  onChange={(e) => setLitersFilled(e.target.value)}
                  className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Petrol Price per Liter ({currencySymbol})
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 280"
                  value={petrolPrice}
                  onChange={(e) => setPetrolPrice(e.target.value)}
                  className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                />
              </div>
            </div>

            {/* Tank Capacity (Optional) */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Vehicle Fuel Tank Capacity (Liters - اختیاری)
              </label>
              <input
                type="number"
                step="any"
                placeholder="e.g. 40 L (Car) or 9 L (Bike)"
                value={tankCapacity}
                onChange={(e) => setTankCapacity(e.target.value)}
                className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
              />
              <span className="text-xs text-gray-400 mt-1 block">Calculates total driving range on full tank</span>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-lg text-sm flex items-center justify-center gap-2"
              >
                <span>Calculate Petrol Average</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#2a2a2c] hover:bg-[#333] text-gray-300 font-semibold py-3.5 px-5 rounded-xl transition text-sm"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Results */}
        <div className="p-8 lg:p-10 flex flex-col justify-between bg-[#1b1b1d]">
          {result ? (
            <div className="space-y-6">
              <div className="border-b border-[#333] pb-4 flex justify-between items-start">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Fuel Average Result | پیٹرول ایوریج</p>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-400">{result.kmPerLiter}</span>
                    <span className="text-xl font-bold text-gray-300">km/L</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-3 py-1.5 rounded-full font-bold bg-[#262628] border border-[#3a3a3c] ${result.assessment.color}`}>
                    {result.assessment.label}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">{result.litersPer100} L/100km ({result.mpgUS} MPG)</p>
                </div>
              </div>

              {/* Key Indicators */}
              <div className="grid grid-cols-2 gap-3">
                {result.costPerKm && (
                  <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block mb-1">Cost Per Kilometer</span>
                    <span className="text-xl font-bold text-white">{currencySymbol}{result.costPerKm}</span>
                    <span className="text-xs text-gray-500 block">per 1 km driven</span>
                  </div>
                )}
                {result.fullTankRange && (
                  <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block mb-1">Full Tank Range</span>
                    <span className="text-xl font-bold text-emerald-400">{result.fullTankRange} km</span>
                    <span className="text-xs text-gray-500 block">on {result.tankCapacity}L tank</span>
                  </div>
                )}
              </div>

              {/* Distance Fuel Lookup (Direct answers to search queries) */}
              <div className="bg-[#222225] p-4 rounded-xl border border-[#333] space-y-2.5">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Trip Petrol Requirement &amp; Expense
                </p>
                <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                  <span className="text-gray-400">100 km me kitna petrol lagta hai?</span>
                  <span className="font-semibold text-white">
                    {result.fuel100} L {result.cost100 && `(${currencySymbol}${result.cost100})`}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                  <span className="text-gray-400">500 km trip petrol &amp; cost:</span>
                  <span className="font-semibold text-white">
                    {result.fuel500} L {result.cost500 && `(${currencySymbol}${result.cost500})`}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm py-1">
                  <span className="text-gray-400 font-medium text-emerald-300">1000 km me kitna petrol lagta hai?</span>
                  <span className="font-bold text-emerald-400">
                    {result.fuel1000} L {result.cost1000 && `(${currencySymbol}${result.cost1000})`}
                  </span>
                </div>
              </div>

              {result.totalFillCost && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-xs text-emerald-200">
                  🚗 <strong>Tank Summary:</strong> {result.distanceDriven} km traveled on {result.litersUsed} Liters total ({currencySymbol}{result.totalFillCost}).
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 text-gray-400 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#252528] flex items-center justify-center text-emerald-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Instant Petrol Average Finder</h3>
                <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                  Enter your distance driven in km and liters filled to find out your exact petrol average (km/L) and cost per kilometer.
                </p>
              </div>
              <div className="text-xs text-gray-500 bg-[#252528] px-4 py-2 rounded-lg border border-[#333]">
                Formula: Petrol Average = Distance (km) ÷ Petrol (Liters)
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#2a2a2c] flex items-center justify-between text-xs text-gray-500">
            <span>NextCodeHub Petrol Average Engine</span>
            <span>Tank-to-Tank Method</span>
          </div>
        </div>
      </div>
    </div>
  );
}
