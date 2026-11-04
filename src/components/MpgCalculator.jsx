'use client';
import { useState, useMemo } from 'react';
import cc from 'currency-codes';

const allCurrencies = cc.data.sort((a, b) => a.code.localeCompare(b.code));

export default function MpgCalculator() {
  const [mpgMode, setMpgMode] = useState('tripCost'); // 'tripCost' (distance + MPG + price) or 'findMpg' (distance + gallons)
  const [gallonStandard, setGallonStandard] = useState('US'); // 'US' or 'UK'
  const [currency, setCurrency] = useState('USD');

  // Find MPG state
  const [milesDriven, setMilesDriven] = useState('320');
  const [gallonsUsed, setGallonsUsed] = useState('10');
  const [gasPriceFind, setGasPriceFind] = useState('3.50');

  // Trip MPG Cost state
  const [tripMiles, setTripMiles] = useState('450');
  const [vehicleMpg, setVehicleMpg] = useState('30');
  const [gasPriceTrip, setGasPriceTrip] = useState('3.60');

  const [result, setResult] = useState(null);

  const calculate = (e) => {
    if (e) e.preventDefault();

    if (mpgMode === 'tripCost') {
      const miles = parseFloat(tripMiles);
      const mpg = parseFloat(vehicleMpg);
      const price = parseFloat(gasPriceTrip) || 0;

      if (miles > 0 && mpg > 0) {
        const gallonsNeeded = miles / mpg;
        const totalCost = price > 0 ? gallonsNeeded * price : null;
        const costPerMile = totalCost ? totalCost / miles : (price > 0 ? price / mpg : null);
        const milesPerDollar = price > 0 ? mpg / price : null;

        // International equivalents
        const kmL = gallonStandard === 'US' ? mpg * 0.425144 : mpg * 0.354006;
        const l100 = 100 / kmL;

        // Quick distance costs
        const cost100 = costPerMile ? costPerMile * 100 : null;
        const cost250 = costPerMile ? costPerMile * 250 : null;
        const cost500 = costPerMile ? costPerMile * 500 : null;
        const cost1000 = costPerMile ? costPerMile * 1000 : null;

        setResult({
          mode: 'tripCost',
          miles: miles.toFixed(0),
          mpg: mpg.toFixed(1),
          gallonsNeeded: gallonsNeeded.toFixed(2),
          totalCost: totalCost ? totalCost.toFixed(2) : null,
          costPerMile: costPerMile ? costPerMile.toFixed(3) : null,
          milesPerDollar: milesPerDollar ? milesPerDollar.toFixed(1) : null,
          cost100: cost100 ? cost100.toFixed(2) : null,
          cost250: cost250 ? cost250.toFixed(2) : null,
          cost500: cost500 ? cost500.toFixed(2) : null,
          cost1000: cost1000 ? cost1000.toFixed(2) : null,
          kmL: kmL.toFixed(2),
          l100: l100.toFixed(2),
          gallonLabel: gallonStandard === 'US' ? 'US Gallons' : 'UK Imperial Gallons',
        });
      }
    } else {
      // Find MPG Mode
      const miles = parseFloat(milesDriven);
      const gals = parseFloat(gallonsUsed);
      const price = parseFloat(gasPriceFind) || 0;

      if (miles > 0 && gals > 0) {
        const mpg = miles / gals;
        const totalCost = price > 0 ? gals * price : null;
        const costPerMile = totalCost ? totalCost / miles : (price > 0 ? price / mpg : null);
        const milesPerDollar = price > 0 ? mpg / price : null;

        const kmL = gallonStandard === 'US' ? mpg * 0.425144 : mpg * 0.354006;
        const l100 = 100 / kmL;

        setResult({
          mode: 'findMpg',
          miles: miles.toFixed(1),
          gallonsUsed: gals.toFixed(2),
          mpg: mpg.toFixed(1),
          totalCost: totalCost ? totalCost.toFixed(2) : null,
          costPerMile: costPerMile ? costPerMile.toFixed(3) : null,
          milesPerDollar: milesPerDollar ? milesPerDollar.toFixed(1) : null,
          cost100: costPerMile ? (costPerMile * 100).toFixed(2) : null,
          cost500: costPerMile ? (costPerMile * 500).toFixed(2) : null,
          cost1000: costPerMile ? (costPerMile * 1000).toFixed(2) : null,
          kmL: kmL.toFixed(2),
          l100: l100.toFixed(2),
          gallonLabel: gallonStandard === 'US' ? 'US Gallons' : 'UK Imperial Gallons',
        });
      }
    }
  };

  const handleReset = () => {
    setTripMiles('');
    setVehicleMpg('');
    setGasPriceTrip('');
    setMilesDriven('');
    setGallonsUsed('');
    setGasPriceFind('');
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                MPG Calculator <span className="text-emerald-400 text-base font-medium">Miles Per Gallon &amp; Cost</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Calculate vehicle MPG, gas cost per mile, and road trip fuel expenses
              </p>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="bg-[#1a1a1c] p-1.5 rounded-xl flex gap-1 mb-6 border border-[#333]">
            <button
              type="button"
              onClick={() => { setMpgMode('tripCost'); setResult(null); }}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                mpgMode === 'tripCost' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              1. Trip MPG Cost &amp; Gas Needed
            </button>
            <button
              type="button"
              onClick={() => { setMpgMode('findMpg'); setResult(null); }}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                mpgMode === 'findMpg' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              2. Calculate MPG from Fill-Up
            </button>
          </div>

          <form onSubmit={calculate} className="space-y-5">
            {/* Gallon Standard & Currency */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Gallon Standard</label>
                <div className="grid grid-cols-2 gap-1 bg-[#2a2a2c] p-1 rounded-xl border border-[#444]">
                  <button
                    type="button"
                    onClick={() => { setGallonStandard('US'); setResult(null); }}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${gallonStandard === 'US' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
                  >
                    US Gallon
                  </button>
                  <button
                    type="button"
                    onClick={() => { setGallonStandard('UK'); setResult(null); }}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${gallonStandard === 'UK' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
                  >
                    UK Gallon
                  </button>
                </div>
              </div>

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
            </div>

            {mpgMode === 'tripCost' ? (
              <>
                {/* Trip Distance */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Trip Distance (Miles)</label>
                  <input
                    type="number"
                    step="any"
                    placeholder="e.g. 450"
                    value={tripMiles}
                    onChange={(e) => setTripMiles(e.target.value)}
                    className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Vehicle Rating (MPG)</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 30"
                      value={vehicleMpg}
                      onChange={(e) => setVehicleMpg(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Gas Price per Gallon ({currencySymbol})</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 3.60"
                      value={gasPriceTrip}
                      onChange={(e) => setGasPriceTrip(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                      required
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Find MPG Inputs */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Miles Driven on Tank</label>
                  <input
                    type="number"
                    step="any"
                    placeholder="e.g. 320"
                    value={milesDriven}
                    onChange={(e) => setMilesDriven(e.target.value)}
                    className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Gallons of Gas Added</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 10"
                      value={gallonsUsed}
                      onChange={(e) => setGallonsUsed(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Gas Price per Gallon ({currencySymbol})</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 3.50 (optional)"
                      value={gasPriceFind}
                      onChange={(e) => setGasPriceFind(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-lg text-sm flex items-center justify-center gap-2"
              >
                <span>Calculate MPG &amp; Cost</span>
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
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                    {result.mode === 'tripCost' ? 'Total Trip MPG Gas Cost' : 'Calculated Gas Mileage'}
                  </p>
                  {result.mode === 'tripCost' ? (
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-4xl sm:text-5xl font-black text-emerald-400">{currencySymbol}{result.totalCost}</span>
                      <span className="text-base font-semibold text-gray-300">({result.gallonsNeeded} gal)</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-4xl sm:text-5xl font-black text-emerald-400">{result.mpg}</span>
                      <span className="text-xl font-bold text-gray-300">MPG</span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xs px-3 py-1.5 rounded-full font-bold bg-[#262628] border border-[#3a3a3c] text-emerald-300">
                    {result.gallonLabel}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{result.kmL} km/L ({result.l100} L/100km)</p>
                </div>
              </div>

              {/* Key Indicators */}
              <div className="grid grid-cols-2 gap-3">
                {result.costPerMile && (
                  <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block mb-1">Cost Per Mile</span>
                    <span className="text-xl font-bold text-white">{currencySymbol}{result.costPerMile}</span>
                    <span className="text-xs text-gray-500 block">/ mile</span>
                  </div>
                )}
                {result.milesPerDollar && (
                  <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block mb-1">Miles per $1.00</span>
                    <span className="text-xl font-bold text-emerald-400">{result.milesPerDollar} mi</span>
                    <span className="text-xs text-gray-500 block">travel distance</span>
                  </div>
                )}
              </div>

              {/* Distance Cost Lookup */}
              {result.cost100 && (
                <div className="bg-[#222225] p-4 rounded-xl border border-[#333] space-y-2">
                  <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                    MPG Cost for Standard Distances
                  </p>
                  <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                    <span className="text-gray-400">100 Miles gas cost</span>
                    <span className="font-semibold text-white">{currencySymbol}{result.cost100}</span>
                  </div>
                  {result.cost250 && (
                    <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                      <span className="text-gray-400">250 Miles road trip</span>
                      <span className="font-semibold text-white">{currencySymbol}{result.cost250}</span>
                    </div>
                  )}
                  {result.cost500 && (
                    <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                      <span className="text-gray-400">500 Miles round trip</span>
                      <span className="font-semibold text-white">{currencySymbol}{result.cost500}</span>
                    </div>
                  )}
                  {result.cost1000 && (
                    <div className="flex justify-between items-center text-sm py-1">
                      <span className="text-gray-400 font-medium text-emerald-300">1,000 Miles long distance</span>
                      <span className="font-bold text-emerald-400">{currencySymbol}{result.cost1000}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 text-gray-400 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#252528] flex items-center justify-center text-emerald-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Instant MPG &amp; Gas Cost Calculation</h3>
                <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                  Enter trip miles, vehicle MPG, and gas price to calculate total trip gas cost, cost per mile, and distance benchmarks.
                </p>
              </div>
              <div className="text-xs text-gray-500 bg-[#252528] px-4 py-2 rounded-lg border border-[#333]">
                Formula: MPG Cost = (Trip Distance ÷ MPG) × Gas Price
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#2a2a2c] flex items-center justify-between text-xs text-gray-500">
            <span>NextCodeHub MPG Engine</span>
            <span>US &amp; Imperial Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
