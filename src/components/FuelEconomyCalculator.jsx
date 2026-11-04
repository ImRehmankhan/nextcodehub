'use client';
import { useState, useMemo } from 'react';
import cc from 'currency-codes';

const allCurrencies = cc.data.sort((a, b) => a.code.localeCompare(b.code));

export default function FuelEconomyCalculator() {
  const [inputUnit, setInputUnit] = useState('mpgUS'); // 'mpgUS', 'kmL', 'l100km', 'mpgUK'
  const [economyValue, setEconomyValue] = useState('28');
  const [annualDistance, setAnnualDistance] = useState('12000');
  const [distUnit, setDistUnit] = useState('miles'); // 'miles' or 'km'
  const [fuelPrice, setFuelPrice] = useState('3.50');
  const [currency, setCurrency] = useState('USD');

  const [result, setResult] = useState(null);

  const calculate = (e) => {
    if (e) e.preventDefault();
    const val = parseFloat(economyValue);
    const annualDist = parseFloat(annualDistance);
    const price = parseFloat(fuelPrice) || 0;

    if (val > 0) {
      // Normalize everything to km/L first
      let kmL = 0;
      if (inputUnit === 'mpgUS') {
        kmL = val * 0.425144;
      } else if (inputUnit === 'mpgUK') {
        kmL = val * 0.354006;
      } else if (inputUnit === 'kmL') {
        kmL = val;
      } else if (inputUnit === 'l100km') {
        kmL = 100 / val;
      }

      const mpgUS = kmL * 2.35215;
      const mpgUK = kmL * 2.82481;
      const lPer100 = 100 / kmL;

      // Fuel economy rating
      let stars = '⭐⭐⭐⭐';
      let ratingLabel = 'Good Fuel Economy';
      let ratingColor = 'text-emerald-400';
      let ratingDesc = 'Above average efficiency for standard passenger vehicles.';

      if (mpgUS >= 45) {
        stars = '⭐⭐⭐⭐⭐';
        ratingLabel = 'Ultra Efficient (Hybrid / Eco)';
        ratingColor = 'text-green-400';
        ratingDesc = 'Exceptional fuel economy. Minimal environmental footprint.';
      } else if (mpgUS >= 32) {
        stars = '⭐⭐⭐⭐';
        ratingLabel = 'Great Fuel Economy';
        ratingColor = 'text-emerald-400';
        ratingDesc = 'Very competitive efficiency for modern sedans and crossovers.';
      } else if (mpgUS >= 22) {
        stars = '⭐⭐⭐';
        ratingLabel = 'Average Fuel Economy';
        ratingColor = 'text-yellow-400';
        ratingDesc = 'Standard performance for compact SUVs and mid-sized vehicles.';
      } else {
        stars = '⭐⭐';
        ratingLabel = 'Low Fuel Economy (Heavy Consumer)';
        ratingColor = 'text-red-400';
        ratingDesc = 'Below average. Common in large trucks, V8 engines, and heavy 4x4s.';
      }

      // Annual projections
      let annualFuel = 0;
      let annualCost = 0;
      let benchmarkSavings = 0;

      if (annualDist > 0) {
        if (distUnit === 'miles') {
          annualFuel = annualDist / mpgUS; // gallons
          annualCost = price > 0 ? annualFuel * price : 0;
          
          // Benchmark against a 24 MPG average vehicle
          const benchmarkFuel = annualDist / 24;
          const benchmarkCost = benchmarkFuel * price;
          benchmarkSavings = benchmarkCost - annualCost;
        } else {
          annualFuel = (annualDist / 100) * lPer100; // liters
          annualCost = price > 0 ? annualFuel * price : 0;

          // Benchmark against a 9.5 L/100km average vehicle
          const benchmarkFuel = (annualDist / 100) * 9.5;
          const benchmarkCost = benchmarkFuel * price;
          benchmarkSavings = benchmarkCost - annualCost;
        }
      }

      setResult({
        mpgUS: mpgUS.toFixed(1),
        mpgUK: mpgUK.toFixed(1),
        kmL: kmL.toFixed(2),
        lPer100: lPer100.toFixed(2),
        stars,
        ratingLabel,
        ratingColor,
        ratingDesc,
        annualDist: annualDist.toLocaleString(),
        distUnit,
        annualFuel: annualFuel > 0 ? annualFuel.toFixed(1) : null,
        fuelVolumeLabel: distUnit === 'miles' ? 'Gallons' : 'Liters',
        annualCost: annualCost > 0 ? annualCost.toFixed(2) : null,
        benchmarkSavings: price > 0 ? benchmarkSavings.toFixed(2) : null,
      });
    }
  };

  const handleReset = () => {
    setEconomyValue('');
    setAnnualDistance('12000');
    setFuelPrice('');
    setResult(null);
  };

  const currencySymbol = useMemo(() => {
    try {
      const formatted = (0).toLocaleString('en-US', { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0 });
      return formatted.replace(/\d/g, '').trim();
    } catch (e) {
      return currency;
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
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                Fuel Economy Calculator <span className="text-emerald-400 text-base font-medium">Ratings &amp; Conversions</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Evaluate vehicle fuel economy, compare international units, and project annual savings
              </p>
            </div>
          </div>

          <form onSubmit={calculate} className="space-y-5">
            {/* Input Metric Type */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Input Fuel Economy Format</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 bg-[#2a2a2c] p-1.5 rounded-xl border border-[#444]">
                <button
                  type="button"
                  onClick={() => setInputUnit('mpgUS')}
                  className={`py-2 rounded-lg text-xs font-semibold transition ${inputUnit === 'mpgUS' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
                >
                  US MPG
                </button>
                <button
                  type="button"
                  onClick={() => setInputUnit('kmL')}
                  className={`py-2 rounded-lg text-xs font-semibold transition ${inputUnit === 'kmL' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
                >
                  km / Liter
                </button>
                <button
                  type="button"
                  onClick={() => setInputUnit('l100km')}
                  className={`py-2 rounded-lg text-xs font-semibold transition ${inputUnit === 'l100km' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
                >
                  L / 100km
                </button>
                <button
                  type="button"
                  onClick={() => setInputUnit('mpgUK')}
                  className={`py-2 rounded-lg text-xs font-semibold transition ${inputUnit === 'mpgUK' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'}`}
                >
                  UK MPG
                </button>
              </div>
            </div>

            {/* Economy Value Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Vehicle Fuel Economy Value (
                {inputUnit === 'mpgUS' && 'Miles per US Gallon'}
                {inputUnit === 'kmL' && 'Kilometers per Liter'}
                {inputUnit === 'l100km' && 'Liters per 100 Kilometers'}
                {inputUnit === 'mpgUK' && 'Miles per Imperial Gallon'}
                )
              </label>
              <input
                type="number"
                step="any"
                placeholder="e.g. 28"
                value={economyValue}
                onChange={(e) => setEconomyValue(e.target.value)}
                className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                required
              />
            </div>

            {/* Annual Driving Distance & Fuel Price */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-gray-300">Annual Distance</label>
                  <div className="flex gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setDistUnit('miles')}
                      className={`font-medium ${distUnit === 'miles' ? 'text-emerald-400 underline' : 'text-gray-400'}`}
                    >
                      Miles
                    </button>
                    <span className="text-gray-600">|</span>
                    <button
                      type="button"
                      onClick={() => setDistUnit('km')}
                      className={`font-medium ${distUnit === 'km' ? 'text-emerald-400 underline' : 'text-gray-400'}`}
                    >
                      km
                    </button>
                  </div>
                </div>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 12000"
                  value={annualDistance}
                  onChange={(e) => setAnnualDistance(e.target.value)}
                  className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Fuel Price ({currencySymbol} / {distUnit === 'miles' ? 'gal' : 'liter'})
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 3.50 (optional)"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(e.target.value)}
                  className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                />
              </div>
            </div>

            {/* Currency */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-[#2a2a2c] text-white px-3 py-2 rounded-xl text-sm border border-[#444] focus:outline-none focus:border-emerald-500"
              >
                <option value="USD">USD ($) - US Dollar</option>
                <option value="GBP">GBP (£) - British Pound</option>
                <option value="EUR">EUR (€) - Euro</option>
                <option value="CAD">CAD ($) - Canadian Dollar</option>
                <option value="AUD">AUD ($) - Australian Dollar</option>
                <option value="PKR">PKR (Rs) - Pakistani Rupee</option>
                <option value="INR">INR (₹) - Indian Rupee</option>
                {allCurrencies.map((c) => (
                  <option key={c.code} value={c.code}>{c.code} - {c.currency}</option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-lg text-sm flex items-center justify-center gap-2"
              >
                <span>Analyze Fuel Economy</span>
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
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Fuel Economy Rating</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-black">{result.stars}</span>
                    <span className={`text-base font-bold ${result.ratingColor}`}>{result.ratingLabel}</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">{result.ratingDesc}</p>
                </div>
              </div>

              {/* Universal Equivalent Grid */}
              <div>
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2.5">
                  Universal Equivalent Ratings
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-[#252528] p-3 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block">US MPG</span>
                    <span className="text-xl font-black text-emerald-400">{result.mpgUS}</span>
                    <span className="text-xs text-gray-500 block">miles / gallon</span>
                  </div>
                  <div className="bg-[#252528] p-3 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block">Metric km/L</span>
                    <span className="text-xl font-black text-white">{result.kmL}</span>
                    <span className="text-xs text-gray-500 block">km / liter</span>
                  </div>
                  <div className="bg-[#252528] p-3 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block">Liters / 100 km</span>
                    <span className="text-xl font-black text-white">{result.lPer100}</span>
                    <span className="text-xs text-gray-500 block">L / 100km</span>
                  </div>
                  <div className="bg-[#252528] p-3 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block">UK Imperial MPG</span>
                    <span className="text-xl font-black text-white">{result.mpgUK}</span>
                    <span className="text-xs text-gray-500 block">UK MPG</span>
                  </div>
                </div>
              </div>

              {/* Annual Projections */}
              {result.annualFuel && (
                <div className="bg-[#222225] p-4 rounded-xl border border-[#333] space-y-2">
                  <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    Annual Projections ({result.annualDist} {result.distUnit}/yr)
                  </p>
                  <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                    <span className="text-gray-400">Annual Fuel Consumed</span>
                    <span className="font-semibold text-white">{result.annualFuel} {result.fuelVolumeLabel}</span>
                  </div>
                  {result.annualCost && (
                    <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                      <span className="text-gray-400">Annual Fuel Bill</span>
                      <span className="font-bold text-emerald-400">{currencySymbol}{result.annualCost}</span>
                    </div>
                  )}
                  {result.benchmarkSavings && (
                    <div className="flex justify-between items-center text-sm py-1">
                      <span className="text-gray-400">
                        {parseFloat(result.benchmarkSavings) >= 0 ? 'Annual Savings vs Average Car' : 'Extra Cost vs Average Car'}
                      </span>
                      <span className={`font-bold ${parseFloat(result.benchmarkSavings) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {parseFloat(result.benchmarkSavings) >= 0 ? '+' : ''}{currencySymbol}{result.benchmarkSavings} / yr
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 text-gray-400 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#252528] flex items-center justify-center text-emerald-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Fuel Economy Rating Engine</h3>
                <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                  Enter your car&apos;s fuel economy in MPG, km/L, or L/100km to see full unit conversions, efficiency score, and annual cost projections.
                </p>
              </div>
              <div className="text-xs text-gray-500 bg-[#252528] px-4 py-2 rounded-lg border border-[#333]">
                Converts: US MPG ↔ UK MPG ↔ km/L ↔ L/100km
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#2a2a2c] flex items-center justify-between text-xs text-gray-500">
            <span>NextCodeHub Fuel Economy Hub</span>
            <span>EPA &amp; WLTP Compatible</span>
          </div>
        </div>
      </div>
    </div>
  );
}
