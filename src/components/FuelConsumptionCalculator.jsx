'use client';
import { useState, useMemo } from 'react';
import cc from 'currency-codes';

const allCurrencies = cc.data.sort((a, b) => a.code.localeCompare(b.code));

export default function FuelConsumptionCalculator() {
  const [calcMode, setCalcMode] = useState('rate'); // 'rate' (calculate L/100km) or 'trip' (calculate total gas consumed)
  const [unit, setUnit] = useState('Metric'); // 'Metric' (km, L) or 'Imperial' (Miles, Gal)
  const [currency, setCurrency] = useState('USD');

  // Rate calculation state
  const [distanceTraveled, setDistanceTraveled] = useState('500');
  const [fuelConsumed, setFuelConsumed] = useState('38');
  const [fuelPriceRate, setFuelPriceRate] = useState('1.50');

  // Trip gas consumption estimate state
  const [tripDist, setTripDist] = useState('650');
  const [knownRate, setKnownRate] = useState('7.5'); // L/100km or MPG
  const [fuelPriceTrip, setFuelPriceTrip] = useState('1.50');

  const [result, setResult] = useState(null);

  const calculate = (e) => {
    if (e) e.preventDefault();

    if (calcMode === 'rate') {
      const d = parseFloat(distanceTraveled);
      const f = parseFloat(fuelConsumed);
      const p = parseFloat(fuelPriceRate) || 0;

      if (d > 0 && f > 0) {
        let l100 = 0;
        let kmL = 0;
        let mpgUS = 0;
        let gals100Mi = 0;
        let perDistBurn = 0;

        if (unit === 'Metric') {
          // d in km, f in Liters
          l100 = (f / d) * 100;
          kmL = d / f;
          mpgUS = 235.215 / l100;
          gals100Mi = 100 / mpgUS;
          perDistBurn = f / d; // Liters per km
        } else {
          // d in Miles, f in Gallons
          mpgUS = d / f;
          l100 = 235.215 / mpgUS;
          kmL = mpgUS * 0.425144;
          gals100Mi = (f / d) * 100;
          perDistBurn = f / d; // Gallons per mile
        }

        const totalCost = p > 0 ? f * p : null;
        const costPerDist = totalCost ? totalCost / d : (p > 0 ? p * perDistBurn : null);
        // Approx 2.31 kg CO2 per liter of gasoline, 8.887 kg per gallon
        const co2Kg = unit === 'Metric' ? f * 2.31 : f * 8.887;

        setResult({
          mode: 'rate',
          l100: l100.toFixed(2),
          gals100Mi: gals100Mi.toFixed(2),
          kmL: kmL.toFixed(2),
          mpgUS: mpgUS.toFixed(1),
          perDistBurn: perDistBurn.toFixed(3),
          perDistBurnUnit: unit === 'Metric' ? 'Liters / km' : 'Gallons / mile',
          totalCost: totalCost ? totalCost.toFixed(2) : null,
          costPerDist: costPerDist ? costPerDist.toFixed(3) : null,
          costDistLabel: unit === 'Metric' ? 'per km' : 'per mile',
          co2Kg: co2Kg.toFixed(1),
          distance: d.toFixed(0),
          distUnit: unit === 'Metric' ? 'km' : 'miles',
          fuelUsed: f.toFixed(1),
          fuelUnit: unit === 'Metric' ? 'Liters' : 'Gallons',
        });
      }
    } else {
      // Trip Gas Consumption Estimate Mode
      const d = parseFloat(tripDist);
      const r = parseFloat(knownRate);
      const p = parseFloat(fuelPriceTrip) || 0;

      if (d > 0 && r > 0) {
        let gasBurned = 0;
        let l100 = 0;
        let mpg = 0;

        if (unit === 'Metric') {
          // r is L/100km
          gasBurned = (d / 100) * r;
          l100 = r;
          mpg = 235.215 / r;
        } else {
          // r is MPG
          gasBurned = d / r;
          mpg = r;
          l100 = 235.215 / r;
        }

        const totalCost = p > 0 ? gasBurned * p : null;
        const costPerDist = totalCost ? totalCost / d : null;
        const co2Kg = unit === 'Metric' ? gasBurned * 2.31 : gasBurned * 8.887;

        setResult({
          mode: 'trip',
          gasBurned: gasBurned.toFixed(1),
          gasBurnedUnit: unit === 'Metric' ? 'Liters' : 'Gallons',
          l100: l100.toFixed(2),
          mpg: mpg.toFixed(1),
          totalCost: totalCost ? totalCost.toFixed(2) : null,
          costPerDist: costPerDist ? costPerDist.toFixed(3) : null,
          costDistLabel: unit === 'Metric' ? 'per km' : 'per mile',
          co2Kg: co2Kg.toFixed(1),
          tripDist: d.toFixed(0),
          distUnit: unit === 'Metric' ? 'km' : 'miles',
        });
      }
    }
  };

  const handleReset = () => {
    setDistanceTraveled('');
    setFuelConsumed('');
    setFuelPriceRate('');
    setTripDist('');
    setKnownRate('');
    setFuelPriceTrip('');
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
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                Fuel Consumption Calculator <span className="text-emerald-400 text-base font-medium">L/100km &amp; Gas per Mile</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Measure consumption rates, total gas burned, and carbon output
              </p>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="bg-[#1a1a1c] p-1.5 rounded-xl flex gap-1 mb-6 border border-[#333]">
            <button
              type="button"
              onClick={() => { setCalcMode('rate'); setResult(null); }}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                calcMode === 'rate' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              1. Calculate Consumption (L/100km)
            </button>
            <button
              type="button"
              onClick={() => { setCalcMode('trip'); setResult(null); }}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                calcMode === 'trip' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              2. Total Gas Burned for Trip
            </button>
          </div>

          <form onSubmit={calculate} className="space-y-5">
            {/* Unit & Currency */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Unit System</label>
                <div className="grid grid-cols-2 gap-1 bg-[#2a2a2c] p-1 rounded-xl border border-[#444]">
                  <button
                    type="button"
                    onClick={() => { setUnit('Metric'); setResult(null); }}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'Metric' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
                  >
                    Metric (L/km)
                  </button>
                  <button
                    type="button"
                    onClick={() => { setUnit('Imperial'); setResult(null); }}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'Imperial' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
                  >
                    US (gal/mi)
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

            {calcMode === 'rate' ? (
              <>
                {/* Distance & Fuel Used */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Distance Driven ({unit === 'Metric' ? 'Kilometers' : 'Miles'})
                  </label>
                  <input
                    type="number"
                    step="any"
                    placeholder={unit === 'Metric' ? 'e.g. 500 km' : 'e.g. 310 miles'}
                    value={distanceTraveled}
                    onChange={(e) => setDistanceTraveled(e.target.value)}
                    className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Fuel Used ({unit === 'Metric' ? 'Liters' : 'Gallons'})
                    </label>
                    <input
                      type="number"
                      step="any"
                      placeholder={unit === 'Metric' ? 'e.g. 38 L' : 'e.g. 10.5 gal'}
                      value={fuelConsumed}
                      onChange={(e) => setFuelConsumed(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Fuel Price ({currencySymbol} / {unit === 'Metric' ? 'L' : 'gal'})
                    </label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 1.50 (optional)"
                      value={fuelPriceRate}
                      onChange={(e) => setFuelPriceRate(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Trip Gas Burn Mode */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Planned Journey Distance ({unit === 'Metric' ? 'Kilometers' : 'Miles'})
                  </label>
                  <input
                    type="number"
                    step="any"
                    placeholder={unit === 'Metric' ? 'e.g. 650 km' : 'e.g. 400 miles'}
                    value={tripDist}
                    onChange={(e) => setTripDist(e.target.value)}
                    className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Consumption Rate ({unit === 'Metric' ? 'Liters / 100km' : 'Vehicle MPG'})
                    </label>
                    <input
                      type="number"
                      step="any"
                      placeholder={unit === 'Metric' ? 'e.g. 7.5 L/100km' : 'e.g. 31 MPG'}
                      value={knownRate}
                      onChange={(e) => setKnownRate(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Fuel Price ({currencySymbol} / {unit === 'Metric' ? 'L' : 'gal'})
                    </label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 1.50 (optional)"
                      value={fuelPriceTrip}
                      onChange={(e) => setFuelPriceTrip(e.target.value)}
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
                <span>Calculate Consumption</span>
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
                    {result.mode === 'rate' ? 'Fuel Consumption Rate' : 'Total Fuel Burned'}
                  </p>
                  {result.mode === 'rate' ? (
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-4xl sm:text-5xl font-black text-emerald-400">{result.l100}</span>
                      <span className="text-xl font-bold text-gray-300">L / 100km</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-4xl sm:text-5xl font-black text-emerald-400">{result.gasBurned}</span>
                      <span className="text-xl font-bold text-gray-300">{result.gasBurnedUnit}</span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-xs px-3 py-1.5 rounded-full font-bold bg-[#262628] border border-[#3a3a3c] text-emerald-300">
                    {result.co2Kg} kg CO₂
                  </span>
                  <p className="text-xs text-gray-500 mt-1">Estimated emissions</p>
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {result.mode === 'rate' ? (
                  <>
                    <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                      <span className="text-xs text-gray-400 block mb-1">Burn per Unit Distance</span>
                      <span className="text-xl font-bold text-white">{result.perDistBurn}</span>
                      <span className="text-xs text-gray-500 block">{result.perDistBurnUnit}</span>
                    </div>
                    <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                      <span className="text-xs text-gray-400 block mb-1">Fuel Economy</span>
                      <span className="text-xl font-bold text-emerald-400">{result.mpgUS} MPG</span>
                      <span className="text-xs text-gray-500 block">({result.kmL} km/L)</span>
                    </div>
                  </>
                ) : (
                  <>
                    {result.totalCost && (
                      <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                        <span className="text-xs text-gray-400 block mb-1">Total Fuel Cost</span>
                        <span className="text-xl font-bold text-emerald-400">{currencySymbol}{result.totalCost}</span>
                        <span className="text-xs text-gray-500 block">for {result.tripDist} {result.distUnit}</span>
                      </div>
                    )}
                    {result.costPerDist && (
                      <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                        <span className="text-xs text-gray-400 block mb-1">Cost Per Distance</span>
                        <span className="text-xl font-bold text-white">{currencySymbol}{result.costPerDist}</span>
                        <span className="text-xs text-gray-500 block">{result.costDistLabel}</span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Consumption Conversions & Lookup */}
              <div className="bg-[#222225] p-4 rounded-xl border border-[#333] space-y-2.5">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Standard Consumption Metrics
                </p>
                <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                  <span className="text-gray-400">Liters per 100 Kilometers</span>
                  <span className="font-bold text-emerald-400">{result.l100} L/100km</span>
                </div>
                {result.mode === 'rate' && (
                  <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                    <span className="text-gray-400">Gallons per 100 Miles</span>
                    <span className="font-semibold text-white">{result.gals100Mi} gal/100 mi</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                  <span className="text-gray-400">Equivalent US MPG</span>
                  <span className="font-semibold text-white">{result.mode === 'rate' ? result.mpgUS : result.mpg} MPG</span>
                </div>
                {result.costPerDist && (
                  <div className="flex justify-between items-center text-sm py-1">
                    <span className="text-gray-400">Running Cost ({result.costDistLabel})</span>
                    <span className="font-bold text-emerald-400">{currencySymbol}{result.costPerDist}</span>
                  </div>
                )}
              </div>

              {result.mode === 'rate' && result.totalCost && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-xs text-emerald-200">
                  ⚡ <strong>Summary:</strong> Used {result.fuelUsed} {result.fuelUnit} over {result.distance} {result.distUnit} ({currencySymbol}{result.totalCost} total expense).
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 text-gray-400 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#252528] flex items-center justify-center text-emerald-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Instant Gas &amp; Fuel Consumption</h3>
                <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                  Calculate your vehicle&apos;s liters per 100 km, gas per mile, and estimate total fuel burned for any planned trip distance.
                </p>
              </div>
              <div className="text-xs text-gray-500 bg-[#252528] px-4 py-2 rounded-lg border border-[#333]">
                Formula: Fuel Consumption (L/100km) = (Liters ÷ Kilometers) × 100
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#2a2a2c] flex items-center justify-between text-xs text-gray-500">
            <span>NextCodeHub Consumption Engine</span>
            <span>Accurate L/100km &amp; CO₂</span>
          </div>
        </div>
      </div>
    </div>
  );
}
