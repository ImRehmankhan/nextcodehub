'use client';
import { useState, useMemo } from 'react';
import cc from 'currency-codes';

const allCurrencies = cc.data.sort((a, b) => a.code.localeCompare(b.code));

export default function FuelEfficiencyCalculator() {
  const [unit, setUnit] = useState('Imperial'); // 'Imperial' (MPG, Miles, Gallons) or 'Metric' (km/L, km, Liters)
  const [currency, setCurrency] = useState('USD');

  const [currentEff, setCurrentEff] = useState('24');
  const [targetEff, setTargetEff] = useState('32');
  const [annualDistance, setAnnualDistance] = useState('12000');
  const [fuelPrice, setFuelPrice] = useState('3.50');

  const [result, setResult] = useState(null);

  const calculate = (e) => {
    if (e) e.preventDefault();
    const curr = parseFloat(currentEff);
    const target = parseFloat(targetEff);
    const dist = parseFloat(annualDistance);
    const price = parseFloat(fuelPrice) || 0;

    if (curr > 0 && target > 0 && dist > 0) {
      // Calculate fuel needed under current vs target
      const currentFuel = dist / curr;
      const targetFuel = dist / target;
      const fuelSaved = currentFuel - targetFuel;
      const percentGain = ((target - curr) / curr) * 100;

      const annualCurrentCost = price > 0 ? currentFuel * price : null;
      const annualTargetCost = price > 0 ? targetFuel * price : null;
      const annualMoneySaved = price > 0 ? fuelSaved * price : null;
      const fiveYearSavings = annualMoneySaved ? annualMoneySaved * 5 : null;

      // Carbon savings (approx 8.887 kg CO2 / gal gasoline, 2.31 kg / liter)
      const co2KgSaved = unit === 'Imperial' ? fuelSaved * 8.887 : fuelSaved * 2.31;

      // Status
      let status = 'Modest Improvement';
      if (percentGain >= 30) status = 'Huge Efficiency Gain! 🚀';
      else if (percentGain >= 15) status = 'Significant Savings 💡';
      else if (percentGain > 0) status = 'Positive Improvement 👍';
      else status = 'Lower Efficiency';

      setResult({
        currentEff: curr.toFixed(1),
        targetEff: target.toFixed(1),
        effUnit: unit === 'Imperial' ? 'MPG' : 'km/L',
        distUnit: unit === 'Imperial' ? 'miles' : 'km',
        fuelUnit: unit === 'Imperial' ? 'Gallons' : 'Liters',
        percentGain: percentGain.toFixed(1),
        fuelSaved: fuelSaved.toFixed(1),
        annualMoneySaved: annualMoneySaved ? annualMoneySaved.toFixed(2) : null,
        fiveYearSavings: fiveYearSavings ? fiveYearSavings.toFixed(2) : null,
        co2KgSaved: co2KgSaved.toFixed(0),
        status,
        isPositive: percentGain > 0,
      });
    }
  };

  const handleReset = () => {
    setCurrentEff('');
    setTargetEff('');
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
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                Fuel Efficiency Calculator <span className="text-emerald-400 text-base font-medium">Efficiency &amp; Upgrade Analyzer</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Calculate fuel efficiency improvements, annual fuel reduction, and financial savings
              </p>
            </div>
          </div>

          <form onSubmit={calculate} className="space-y-5">
            {/* Unit & Currency */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Efficiency Unit</label>
                <div className="grid grid-cols-2 gap-1 bg-[#2a2a2c] p-1 rounded-xl border border-[#444]">
                  <button
                    type="button"
                    onClick={() => { setUnit('Imperial'); setResult(null); }}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'Imperial' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
                  >
                    MPG (US)
                  </button>
                  <button
                    type="button"
                    onClick={() => { setUnit('Metric'); setResult(null); }}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'Metric' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
                  >
                    km / Liter
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

            {/* Current vs Target Efficiency */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Current Efficiency ({unit === 'Imperial' ? 'MPG' : 'km/L'})
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 24"
                  value={currentEff}
                  onChange={(e) => setCurrentEff(e.target.value)}
                  className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                  required
                />
                <span className="text-xs text-gray-400 mt-1 block">Your vehicle current average</span>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Target / Upgraded Efficiency ({unit === 'Imperial' ? 'MPG' : 'km/L'})
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 32"
                  value={targetEff}
                  onChange={(e) => setTargetEff(e.target.value)}
                  className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                  required
                />
                <span className="text-xs text-gray-400 mt-1 block">After tuning or new car upgrade</span>
              </div>
            </div>

            {/* Annual Driving Distance & Fuel Price */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Annual Driving Distance ({unit === 'Imperial' ? 'Miles' : 'km'})
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 12000"
                  value={annualDistance}
                  onChange={(e) => setAnnualDistance(e.target.value)}
                  className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Fuel Price per {unit === 'Imperial' ? 'Gallon' : 'Liter'} ({currencySymbol})
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

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-lg text-sm flex items-center justify-center gap-2"
              >
                <span>Calculate Efficiency Gains</span>
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
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Efficiency Improvement</p>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-400">
                      {result.isPositive ? `+${result.percentGain}%` : `${result.percentGain}%`}
                    </span>
                    <span className="text-base font-bold text-gray-300">Efficiency Gain</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs px-3 py-1.5 rounded-full font-bold bg-[#262628] border border-[#3a3a3c] text-emerald-300">
                    {result.status}
                  </span>
                  <p className="text-xs text-gray-400 mt-1">
                    {result.currentEff} → {result.targetEff} {result.effUnit}
                  </p>
                </div>
              </div>

              {/* Key Indicators */}
              <div className="grid grid-cols-2 gap-3">
                {result.annualMoneySaved && (
                  <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block mb-1">Annual Money Saved</span>
                    <span className="text-xl font-bold text-emerald-400">{currencySymbol}{result.annualMoneySaved}</span>
                    <span className="text-xs text-gray-500 block">per year in fuel</span>
                  </div>
                )}
                <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                  <span className="text-xs text-gray-400 block mb-1">Fuel Saved per Year</span>
                  <span className="text-xl font-bold text-white">{result.fuelSaved}</span>
                  <span className="text-xs text-gray-500 block">{result.fuelUnit} saved</span>
                </div>
              </div>

              {/* Long-Term Savings & Environmental Matrix */}
              <div className="bg-[#222225] p-4 rounded-xl border border-[#333] space-y-2.5">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Long-Term Impact &amp; Environmental Benefits
                </p>
                {result.fiveYearSavings && (
                  <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                    <span className="text-gray-400">5-Year Cumulative Savings</span>
                    <span className="font-bold text-emerald-400">{currencySymbol}{result.fiveYearSavings}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                  <span className="text-gray-400">CO₂ Carbon Emissions Prevented</span>
                  <span className="font-semibold text-green-300">{result.co2KgSaved} kg CO₂ / year</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1">
                  <span className="text-gray-400">Equivalent to planting</span>
                  <span className="font-semibold text-white">{Math.round(result.co2KgSaved / 22)} trees / year</span>
                </div>
              </div>

              {result.annualMoneySaved && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-xs text-emerald-200">
                  💡 <strong>Efficiency Insight:</strong> Upgrading by {result.percentGain}% reduces fuel consumption by {result.fuelSaved} {result.fuelUnit} annually, saving {currencySymbol}{result.annualMoneySaved} every 12 months.
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 text-gray-400 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#252528] flex items-center justify-center text-emerald-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                  <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Fuel Efficiency Gain Engine</h3>
                <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                  Enter your current and upgraded fuel efficiency to see annual fuel saved, dollar savings, and 5-year cumulative gains.
                </p>
              </div>
              <div className="text-xs text-gray-500 bg-[#252528] px-4 py-2 rounded-lg border border-[#333]">
                Formula: Fuel Saved = (Annual Miles ÷ Current MPG) − (Annual Miles ÷ Target MPG)
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#2a2a2c] flex items-center justify-between text-xs text-gray-500">
            <span>NextCodeHub Efficiency Engine</span>
            <span>Accurate ROI &amp; Emissions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
