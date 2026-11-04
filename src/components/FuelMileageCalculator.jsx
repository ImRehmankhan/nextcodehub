'use client';
import { useState, useMemo } from 'react';
import cc from 'currency-codes';

const allCurrencies = cc.data.sort((a, b) => a.code.localeCompare(b.code));

export default function FuelMileageCalculator() {
  const [unit, setUnit] = useState('Metric'); // Metric (km, L, km/L) or Imperial (Miles, Gal, MPG)
  const [vehicleType, setVehicleType] = useState('car'); // 'car', 'bike', 'suv'
  const [currency, setCurrency] = useState('USD');

  const [distance, setDistance] = useState('420');
  const [fuelUsed, setFuelUsed] = useState('28');
  const [fuelPrice, setFuelPrice] = useState('1.40');

  const [result, setResult] = useState(null);

  const calculate = (e) => {
    if (e) e.preventDefault();
    const dist = parseFloat(distance);
    const fuel = parseFloat(fuelUsed);
    const price = parseFloat(fuelPrice) || 0;

    if (dist > 0 && fuel > 0) {
      // Primary mileage
      const mileage = dist / fuel; // km/L or MPG
      
      let kmL = 0;
      let mpgUS = 0;
      let mpgUK = 0;
      let lPer100 = 0;

      if (unit === 'Metric') {
        kmL = mileage;
        mpgUS = mileage * 2.35215;
        mpgUK = mileage * 2.82481;
        lPer100 = 100 / mileage;
      } else {
        mpgUS = mileage;
        mpgUK = mileage * 1.20095;
        kmL = mileage * 0.425144;
        lPer100 = 235.215 / mileage;
      }

      const totalCost = price > 0 ? fuel * price : null;
      const costPerUnit = totalCost ? totalCost / dist : (price > 0 ? price / mileage : null);

      // Benchmark analysis based on vehicle type
      let benchmark = { status: 'Normal', note: 'Standard efficiency for this vehicle class.', color: 'text-emerald-400' };
      if (vehicleType === 'bike') {
        if (kmL >= 50) benchmark = { status: 'Excellent Bike Mileage', note: 'Far exceeds standard motorcycle average (40–45 km/L).', color: 'text-green-400' };
        else if (kmL >= 35) benchmark = { status: 'Normal Bike Mileage', note: 'Within typical 70cc–150cc commuter bike range.', color: 'text-emerald-400' };
        else benchmark = { status: 'Low Bike Mileage', note: 'Check carburetor, spark plugs, or tire pressure.', color: 'text-orange-400' };
      } else if (vehicleType === 'car') {
        if (kmL >= 18) benchmark = { status: 'Outstanding Car Mileage', note: 'Hybrid or top-tier compact car efficiency.', color: 'text-green-400' };
        else if (kmL >= 12) benchmark = { status: 'Good Car Mileage', note: 'Healthy sedan / hatchback fuel economy.', color: 'text-emerald-400' };
        else benchmark = { status: 'Heavy Fuel Consumer', note: 'Lower than standard 12–15 km/L petrol car average.', color: 'text-orange-400' };
      } else {
        // SUV / Truck
        if (kmL >= 12) benchmark = { status: 'Great SUV Mileage', note: 'Excellent for crossover or midsize SUV.', color: 'text-green-400' };
        else if (kmL >= 8) benchmark = { status: 'Standard SUV Mileage', note: 'Typical 8–11 km/L for 4x4 / full-size SUV.', color: 'text-emerald-400' };
        else benchmark = { status: 'High Fuel Consumption', note: 'Heavy consumption; consider tuning or lighter throttle.', color: 'text-red-400' };
      }

      setResult({
        primaryMileage: mileage.toFixed(2),
        unitLabel: unit === 'Metric' ? 'km/L' : 'MPG',
        distance: dist.toFixed(1),
        distLabel: unit === 'Metric' ? 'km' : 'miles',
        fuel: fuel.toFixed(1),
        fuelLabel: unit === 'Metric' ? 'Liters' : 'Gallons',
        kmL: kmL.toFixed(2),
        mpgUS: mpgUS.toFixed(1),
        mpgUK: mpgUK.toFixed(1),
        lPer100: lPer100.toFixed(2),
        totalCost: totalCost ? totalCost.toFixed(2) : null,
        costPerUnit: costPerUnit ? costPerUnit.toFixed(3) : null,
        costUnitLabel: unit === 'Metric' ? 'per km' : 'per mile',
        distPer10Units: (mileage * 10).toFixed(1),
        tenUnitLabel: unit === 'Metric' ? '10 Liters' : '10 Gallons',
        benchmark,
      });
    }
  };

  const handleReset = () => {
    setDistance('');
    setFuelUsed('');
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
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                Fuel Mileage Calculator <span className="text-emerald-400 text-base font-medium">km/L &amp; MPG</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Enter distance and fuel used to calculate exact vehicle petrol/fuel mileage
              </p>
            </div>
          </div>

          <form onSubmit={calculate} className="space-y-5">
            {/* Units & Vehicle Type */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Measurement Unit</label>
                <div className="grid grid-cols-2 gap-1 bg-[#2a2a2c] p-1 rounded-xl border border-[#444]">
                  <button
                    type="button"
                    onClick={() => { setUnit('Metric'); setResult(null); }}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'Metric' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
                  >
                    km &amp; Liters
                  </button>
                  <button
                    type="button"
                    onClick={() => { setUnit('Imperial'); setResult(null); }}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${unit === 'Imperial' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
                  >
                    Miles &amp; Gal
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Vehicle Type</label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full bg-[#2a2a2c] text-white px-3 py-2 rounded-xl text-sm border border-[#444] focus:outline-none focus:border-emerald-500"
                >
                  <option value="car">Car (Sedan / Hatchback)</option>
                  <option value="bike">Motorcycle / Bike (70-150cc)</option>
                  <option value="suv">SUV / Pickup / Van</option>
                </select>
              </div>
            </div>

            {/* Distance Traveled */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                Distance Traveled ({unit === 'Metric' ? 'Kilometers' : 'Miles'})
              </label>
              <input
                type="number"
                step="any"
                placeholder={unit === 'Metric' ? 'e.g. 420 km' : 'e.g. 260 miles'}
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                required
              />
              <span className="text-xs text-gray-400 mt-1 block">Odometer trip distance since previous fill-up</span>
            </div>

            {/* Fuel Consumed & Price */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Fuel Consumed ({unit === 'Metric' ? 'Liters' : 'Gallons'})
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder={unit === 'Metric' ? 'e.g. 28 L' : 'e.g. 8.5 gal'}
                  value={fuelUsed}
                  onChange={(e) => setFuelUsed(e.target.value)}
                  className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Fuel Price per {unit === 'Metric' ? 'Liter' : 'Gallon'} ({currencySymbol})
                </label>
                <input
                  type="number"
                  step="any"
                  placeholder="e.g. 1.40 (optional)"
                  value={fuelPrice}
                  onChange={(e) => setFuelPrice(e.target.value)}
                  className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                />
              </div>
            </div>

            {/* Currency Picker */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1.5">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="w-full bg-[#2a2a2c] text-white px-3 py-2 rounded-xl text-sm border border-[#444] focus:outline-none focus:border-emerald-500"
              >
                <option value="USD">USD ($) - US Dollar</option>
                <option value="GBP">GBP (£) - British Pound</option>
                <option value="PKR">PKR (Rs) - Pakistani Rupee</option>
                <option value="INR">INR (₹) - Indian Rupee</option>
                <option value="EUR">EUR (€) - Euro</option>
                <option value="CAD">CAD ($) - Canadian Dollar</option>
                <option value="AUD">AUD ($) - Australian Dollar</option>
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
                <span>Calculate Fuel Mileage</span>
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
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">Calculated Fuel Mileage</p>
                  <div className="flex items-baseline gap-3 mt-1">
                    <span className="text-4xl sm:text-5xl font-black text-emerald-400">{result.primaryMileage}</span>
                    <span className="text-xl font-bold text-gray-300">{result.unitLabel}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-3 py-1.5 rounded-full font-bold bg-[#262628] border border-[#3a3a3c] ${result.benchmark.color}`}>
                    {result.benchmark.status}
                  </span>
                  <p className="text-xs text-gray-400 mt-1 max-w-[180px]">{result.benchmark.note}</p>
                </div>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 gap-3">
                {result.costPerUnit && (
                  <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block mb-1">Fuel Running Cost</span>
                    <span className="text-xl font-bold text-white">{currencySymbol}{result.costPerUnit}</span>
                    <span className="text-xs text-gray-500 block">{result.costUnitLabel}</span>
                  </div>
                )}
                <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                  <span className="text-xs text-gray-400 block mb-1">Range per {result.tenUnitLabel}</span>
                  <span className="text-xl font-bold text-white">{result.distPer10Units}</span>
                  <span className="text-xs text-gray-500 block">{result.distLabel} distance</span>
                </div>
              </div>

              {/* Conversion Matrix */}
              <div className="bg-[#222225] p-4 rounded-xl border border-[#333] space-y-2.5">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  Universal Mileage Conversions
                </p>
                <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                  <span className="text-gray-400">Kilometers per Liter (km/L)</span>
                  <span className="font-semibold text-emerald-400">{result.kmL} km/L</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                  <span className="text-gray-400">Miles per Gallon (US MPG)</span>
                  <span className="font-semibold text-white">{result.mpgUS} MPG</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                  <span className="text-gray-400">Imperial Gallon (UK MPG)</span>
                  <span className="font-semibold text-white">{result.mpgUK} MPG (UK)</span>
                </div>
                <div className="flex justify-between items-center text-sm py-1">
                  <span className="text-gray-400">Liters per 100 km (L/100km)</span>
                  <span className="font-semibold text-gray-300">{result.lPer100} L/100km</span>
                </div>
              </div>

              {result.totalCost && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-xs text-emerald-200">
                  ⛽ <strong>Total Fill-Up Cost:</strong> {currencySymbol}{result.totalCost} for {result.distance} {result.distLabel}.
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 text-gray-400 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#252528] flex items-center justify-center text-emerald-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Instant Fuel Mileage Calculation</h3>
                <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                  Enter your journey distance and fuel filled to see exact km/L, US/UK MPG, and running cost per kilometer or mile.
                </p>
              </div>
              <div className="text-xs text-gray-500 bg-[#252528] px-4 py-2 rounded-lg border border-[#333]">
                Formula: Fuel Mileage = Distance Traveled ÷ Fuel Consumed
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#2a2a2c] flex items-center justify-between text-xs text-gray-500">
            <span>NextCodeHub Fuel Mileage Engine</span>
            <span>Accurate km/L &amp; MPG</span>
          </div>
        </div>
      </div>
    </div>
  );
}
