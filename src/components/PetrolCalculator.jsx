'use client';
import { useState, useMemo } from 'react';
import cc from 'currency-codes';

const allCurrencies = cc.data.sort((a, b) => a.code.localeCompare(b.code));

export default function PetrolCalculator() {
  const [unit, setUnit] = useState('Metric');
  const [currency, setCurrency] = useState('USD');
  const [tankCapacity, setTankCapacity] = useState('50');
  const [currentLevel, setCurrentLevel] = useState('25'); // percent remaining
  const [price, setPrice] = useState('1.50');
  const [efficiency, setEfficiency] = useState('14');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    if (e) e.preventDefault();
    const capacity = parseFloat(tankCapacity);
    const levelPct = parseFloat(currentLevel);
    const p = parseFloat(price);
    const ef = parseFloat(efficiency);

    if (capacity > 0 && p > 0 && ef > 0 && levelPct >= 0 && levelPct <= 100) {
      const remainingFuel = (capacity * levelPct) / 100;
      const fuelNeeded = capacity - remainingFuel;
      const refillCost = fuelNeeded * p;
      const fullTankCost = capacity * p;
      const fullRange = capacity * ef;
      const remainingRange = remainingFuel * ef;
      const costPer100 = (100 / ef) * p;

      setResult({
        fuelNeeded: fuelNeeded.toFixed(1),
        remainingFuel: remainingFuel.toFixed(1),
        refillCost: refillCost.toFixed(2),
        fullTankCost: fullTankCost.toFixed(2),
        fullRange: fullRange.toFixed(0),
        remainingRange: remainingRange.toFixed(0),
        costPer100: costPer100.toFixed(2),
        levelPct: levelPct.toFixed(0),
      });
    }
  };

  const currencySymbol = useMemo(() => {
    try {
      const formatted = (0).toLocaleString('en-US', { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0 });
      return formatted.replace(/\d/g, '').trim();
    } catch {
      return currency;
    }
  }, [currency]);

  const volLabel = unit === 'Imperial' ? 'Gallons' : 'Liters';
  const distLabel = unit === 'Imperial' ? 'Miles' : 'km';
  const effLabel = unit === 'Imperial' ? 'MPG' : 'km/L';
  const priceLabel = unit === 'Imperial' ? 'Gallon' : 'Liter';

  return (
    <div className="bg-[#222224] rounded-3xl shadow-2xl max-w-5xl mx-auto my-8 overflow-hidden text-white border border-[#333]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Form */}
        <div className="p-8 lg:p-10">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-[#333] p-3 rounded-2xl flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
                <path d="M3 22v-8p2 2 0 0 1 2 2h4a2 2 0 0 1 2 2v8"></path>
                <path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5"></path>
                <rect x="7" y="5" width="10" height="6" rx="1"></rect>
                <path d="M21 16v-2a2 2 0 0 0-2-2h-3"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                Petrol Tank Refuel &amp; Range Calculator
              </h2>
              <p className="text-teal-400 text-sm mt-1">
                Calculate full tank refill cost &amp; estimated driving range
              </p>
            </div>
          </div>

          <form onSubmit={calculate} className="space-y-5">
            {/* Units & Currency */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Unit System</label>
                <div className="flex bg-[#333] rounded-xl p-1">
                  <button
                    type="button"
                    onClick={() => { setUnit('Metric'); if (tankCapacity === '14') setTankCapacity('50'); }}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${unit === 'Metric' ? 'bg-teal-700 text-white shadow-md font-semibold' : 'text-gray-300 hover:text-white'}`}
                  >
                    Metric (Liters)
                  </button>
                  <button
                    type="button"
                    onClick={() => { setUnit('Imperial'); if (tankCapacity === '50') setTankCapacity('14'); }}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${unit === 'Imperial' ? 'bg-teal-700 text-white shadow-md font-semibold' : 'text-gray-300 hover:text-white'}`}
                  >
                    Imperial (Gal)
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="petrol-currency" className="block text-sm font-semibold text-gray-300 mb-2">Currency</label>
                <select
                  id="petrol-currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full bg-[#2a2a2c] text-white px-3 py-2 rounded-xl text-sm border border-[#444] focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  {allCurrencies.map((c) => (
                    <option key={c.code} value={c.code}>{c.code} - {c.currency}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Tank Capacity & Current Fuel Level */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="tank-capacity-input" className="block text-sm font-semibold text-gray-300 mb-2">
                  Tank Capacity ({volLabel})
                </label>
                <input
                  id="tank-capacity-input"
                  type="number"
                  step="any"
                  value={tankCapacity}
                  onChange={(e) => setTankCapacity(e.target.value)}
                  placeholder="e.g., 50"
                  className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="fuel-level-input" className="block text-sm font-semibold text-gray-300 mb-2">
                  Fuel Gauge Level: <span className="text-teal-400 font-bold">{currentLevel}%</span>
                </label>
                <input
                  id="fuel-level-input"
                  type="range"
                  min="0"
                  max="90"
                  step="5"
                  value={currentLevel}
                  onChange={(e) => setCurrentLevel(e.target.value)}
                  className="w-full accent-teal-500 mt-3 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                  <button type="button" onClick={() => setCurrentLevel('0')} className="hover:text-teal-400">Empty (0%)</button>
                  <button type="button" onClick={() => setCurrentLevel('25')} className="hover:text-teal-400">1/4 (25%)</button>
                  <button type="button" onClick={() => setCurrentLevel('50')} className="hover:text-teal-400">1/2 (50%)</button>
                  <button type="button" onClick={() => setCurrentLevel('75')} className="hover:text-teal-400">3/4 (75%)</button>
                </div>
              </div>
            </div>

            {/* Petrol Price & Petrol Average */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="petrol-price-input" className="block text-sm font-semibold text-gray-300 mb-2">
                  Petrol Price ({currencySymbol}/{priceLabel})
                </label>
                <input
                  id="petrol-price-input"
                  type="number"
                  step="any"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="1.50"
                  className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="petrol-eff-input" className="block text-sm font-semibold text-gray-300 mb-2">
                  Petrol Average ({effLabel})
                </label>
                <input
                  id="petrol-eff-input"
                  type="number"
                  step="any"
                  value={efficiency}
                  onChange={(e) => setEfficiency(e.target.value)}
                  placeholder="e.g., 14"
                  className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
            </div>

            {/* Common Vehicle & Bike Presets */}
            <div>
              <p className="text-xs text-gray-400 font-semibold mb-2">Quick Presets (Cars &amp; Bikes):</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: '🏍️ 70cc Bike (9L, 55 km/L)', cap: 9, eff: 55 },
                  { label: '🏍️ 125cc Bike (11L, 45 km/L)', cap: 11, eff: 45 },
                  { label: '🚗 Small Car (35L, 18 km/L)', cap: 35, eff: 18 },
                  { label: '🚗 Sedan (50L, 14 km/L)', cap: 50, eff: 14 },
                  { label: '🚙 SUV (65L, 10 km/L)', cap: 65, eff: 10 },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => {
                      if (unit === 'Imperial') {
                        setTankCapacity((item.cap * 0.264172).toFixed(1));
                        setEfficiency((item.eff * 2.35215).toFixed(1));
                      } else {
                        setTankCapacity(item.cap.toString());
                        setEfficiency(item.eff.toString());
                      }
                    }}
                    className="px-2.5 py-1 text-xs bg-[#333] hover:bg-teal-600/30 hover:border-teal-500 text-gray-300 border border-gray-700 rounded-lg transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 bg-teal-600 hover:bg-teal-500 text-white flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-teal-600/30"
              >
                Calculate Petrol Fill-Up
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Results */}
        <div className="bg-[#1f1f23] p-8 lg:p-10 flex flex-col justify-center items-center border-l border-[#333]">
          {!result ? (
            <div className="text-center opacity-70">
              <div className="mb-6 inline-flex p-4 bg-[#2a2a2f] rounded-3xl">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 22v-8p2 2 0 0 1 2 2h4a2 2 0 0 1 2 2v8"></path>
                  <path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5"></path>
                  <rect x="7" y="5" width="10" height="6" rx="1"></rect>
                  <path d="M21 16v-2a2 2 0 0 0-2-2h-3"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                Check Tank Refill &amp; Range
              </h3>
              <p className="text-gray-400 max-w-sm mx-auto leading-relaxed text-sm">
                Enter your tank size, fuel gauge position, and petrol price to calculate how much petrol you need to fill up and your maximum range.
              </p>
            </div>
          ) : (
            <div className="w-full transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-teal-600 p-3 rounded-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M3 22v-8p2 2 0 0 1 2 2h4a2 2 0 0 1 2 2v8"></path>
                    <path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5"></path>
                    <rect x="7" y="5" width="10" height="6" rx="1"></rect>
                    <path d="M21 16v-2a2 2 0 0 0-2-2h-3"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Tank Refuel Estimate</h3>
                  <p className="text-gray-400 text-sm">With tank currently at {result.levelPct}%</p>
                </div>
              </div>

              {/* 4 Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-teal-600 rounded-2xl p-4 shadow-lg">
                  <p className="text-white/90 text-xs font-semibold uppercase tracking-wider">Refill Cost to Full</p>
                  <p className="text-3xl font-extrabold text-white mt-1">{currencySymbol}{result.refillCost}</p>
                  <p className="text-teal-100 text-xs mt-1">Requires {result.fuelNeeded} {volLabel}</p>
                </div>

                <div className="bg-[#0ea5e9] rounded-2xl p-4 shadow-lg">
                  <p className="text-white/90 text-xs font-semibold uppercase tracking-wider">Total Range (Full Tank)</p>
                  <p className="text-3xl font-extrabold text-white mt-1">{result.fullRange} <span className="text-lg font-normal">{distLabel}</span></p>
                  <p className="text-sky-100 text-xs mt-1">~{result.remainingRange} {distLabel} left now</p>
                </div>

                <div className="bg-[#2a2a2f] border border-gray-700 rounded-2xl p-4">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Full Tank Cost (0-100%)</p>
                  <p className="text-2xl font-bold text-white mt-1">{currencySymbol}{result.fullTankCost}</p>
                  <p className="text-gray-400 text-xs mt-0.5">For {tankCapacity} {volLabel}</p>
                </div>

                <div className="bg-[#2a2a2f] border border-gray-700 rounded-2xl p-4">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Cost per 100 {distLabel}</p>
                  <p className="text-2xl font-bold text-white mt-1">{currencySymbol}{result.costPer100}</p>
                  <p className="text-gray-400 text-xs mt-0.5">Driving benchmark</p>
                </div>
              </div>

              {/* Refuel Advice Banner */}
              <div className="bg-[#2a2a2f] rounded-2xl p-4 border border-teal-500/30">
                <p className="text-teal-400 font-bold text-sm mb-1">Petrol Refueling Advice:</p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Your tank currently holds approximately <strong>{result.remainingFuel} {volLabel}</strong> of petrol, giving you about <strong>{result.remainingRange} {distLabel}</strong> of remaining driving range before empty. Refueling now before the reserve light turns on helps protect your petrol fuel pump from overheating.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
