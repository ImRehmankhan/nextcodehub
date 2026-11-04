'use client';
import { useState, useMemo } from 'react';

const popularCurrencies = [
  { code: 'USD', symbol: '$', name: 'USD ($) - US Dollar' },
  { code: 'CAD', symbol: '$', name: 'CAD ($) - Canadian Dollar' },
  { code: 'GBP', symbol: '£', name: 'GBP (£) - British Pound' },
  { code: 'EUR', symbol: '€', name: 'EUR (€) - Euro' },
  { code: 'AUD', symbol: '$', name: 'AUD ($) - Australian Dollar' },
  { code: 'PKR', symbol: 'Rs', name: 'PKR (Rs) - Pakistani Rupee' },
  { code: 'INR', symbol: '₹', name: 'INR (₹) - Indian Rupee' },
  { code: 'NZD', symbol: '$', name: 'NZD ($) - New Zealand Dollar' },
  { code: 'JPY', symbol: '¥', name: 'JPY (¥) - Japanese Yen' },
  { code: 'AED', symbol: 'AED', name: 'AED (د.إ) - UAE Dirham' },
  { code: 'SAR', symbol: 'SAR', name: 'SAR (﷼) - Saudi Riyal' },
  { code: 'ZAR', symbol: 'R', name: 'ZAR (R) - South African Rand' },
];

export default function GasMileageCalculator() {
  const [calcMode, setCalcMode] = useState('calculate'); // 'calculate' (odometer/fill-up) or 'estimate' (trip/mpg)
  const [inputStyle, setInputStyle] = useState('tripDistance'); // 'tripDistance' or 'odometer'
  const [currency, setCurrency] = useState('USD');
  const [gallonType, setGallonType] = useState('US'); // 'US' or 'UK'

  // Tab 1: Fill-up / Calculate MPG state
  const [milesDriven, setMilesDriven] = useState('350');
  const [startOdo, setStartOdo] = useState('');
  const [endOdo, setEndOdo] = useState('');
  const [gallonsUsed, setGallonsUsed] = useState('11.5');
  const [gasPrice, setGasPrice] = useState('3.50');

  // Tab 2: Trip Cost state
  const [tripDistance, setTripDistance] = useState('450');
  const [vehicleMpg, setVehicleMpg] = useState('28');
  const [tripGasPrice, setTripGasPrice] = useState('3.50');
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [commuteDaysPerMonth, setCommuteDaysPerMonth] = useState('22');

  const [result, setResult] = useState(null);

  const calculateMileage = (e) => {
    if (e) e.preventDefault();

    if (calcMode === 'calculate') {
      let distance = 0;
      if (inputStyle === 'tripDistance') {
        distance = parseFloat(milesDriven);
      } else {
        const start = parseFloat(startOdo);
        const end = parseFloat(endOdo);
        if (end > start) distance = end - start;
      }

      const gals = parseFloat(gallonsUsed);
      const price = parseFloat(gasPrice) || 0;

      if (distance > 0 && gals > 0) {
        const mpg = distance / gals;
        const ukMpg = gallonType === 'US' ? mpg * 1.20095 : mpg;
        const kmPerLiter = mpg * 0.425144;
        const lPer100km = 235.215 / mpg;

        const totalCost = price > 0 ? gals * price : null;
        const costPerMile = totalCost ? totalCost / distance : (price > 0 ? price / mpg : null);
        const milesPerDollar = price > 0 ? mpg / price : null;
        const galsPer100Miles = (100 / mpg);

        // Efficiency rating
        let rating = { label: 'Good MPG', color: 'text-emerald-400', badge: 'bg-emerald-900/40 text-emerald-300' };
        if (mpg >= 40) {
          rating = { label: 'Exceptional (Hybrid / Compact)', color: 'text-green-400', badge: 'bg-green-900/40 text-green-300' };
        } else if (mpg >= 30) {
          rating = { label: 'Great Gas Mileage', color: 'text-emerald-400', badge: 'bg-emerald-900/40 text-emerald-300' };
        } else if (mpg >= 22) {
          rating = { label: 'Average Gas Mileage', color: 'text-yellow-400', badge: 'bg-yellow-900/40 text-yellow-300' };
        } else {
          rating = { label: 'Low Gas Mileage (Truck/SUV)', color: 'text-orange-400', badge: 'bg-orange-900/40 text-orange-300' };
        }

        setResult({
          mode: 'calculate',
          distance: distance.toFixed(1),
          gallons: gals.toFixed(2),
          mpg: mpg.toFixed(1),
          ukMpg: ukMpg.toFixed(1),
          kmPerLiter: kmPerLiter.toFixed(2),
          lPer100km: lPer100km.toFixed(2),
          totalCost: totalCost ? totalCost.toFixed(2) : null,
          costPerMile: costPerMile ? costPerMile.toFixed(3) : null,
          costPer100Miles: costPerMile ? (costPerMile * 100).toFixed(2) : null,
          milesPerDollar: milesPerDollar ? milesPerDollar.toFixed(1) : null,
          galsPer100Miles: galsPer100Miles.toFixed(2),
          rating,
        });
      }
    } else {
      // Tab 2: Trip Cost & Budget Mode
      const oneWayDist = parseFloat(tripDistance);
      const mpg = parseFloat(vehicleMpg);
      const price = parseFloat(tripGasPrice);
      const days = parseInt(commuteDaysPerMonth, 10) || 22;

      if (oneWayDist > 0 && mpg > 0 && price > 0) {
        const effectiveDist = isRoundTrip ? oneWayDist * 2 : oneWayDist;
        const galsNeeded = effectiveDist / mpg;
        const totalTripCost = galsNeeded * price;
        const costPerMile = totalTripCost / effectiveDist;
        const costPer100 = costPerMile * 100;

        // Monthly and Yearly Projections
        const monthlyMiles = effectiveDist * days;
        const monthlyGallons = monthlyMiles / mpg;
        const monthlyCost = monthlyGallons * price;
        const yearlyCost = monthlyCost * 12;

        setResult({
          mode: 'estimate',
          oneWayDist: oneWayDist.toFixed(1),
          effectiveDist: effectiveDist.toFixed(1),
          isRoundTrip,
          mpg: mpg.toFixed(1),
          galsNeeded: galsNeeded.toFixed(2),
          totalCost: totalTripCost.toFixed(2),
          costPerMile: costPerMile.toFixed(3),
          costPer100: costPer100.toFixed(2),
          monthlyMiles: monthlyMiles.toFixed(0),
          monthlyCost: monthlyCost.toFixed(2),
          yearlyCost: yearlyCost.toFixed(2),
          galsPer100Miles: (100 / mpg).toFixed(2),
        });
      }
    }
  };

  const handleReset = () => {
    setMilesDriven('');
    setStartOdo('');
    setEndOdo('');
    setGallonsUsed('');
    setGasPrice('');
    setTripDistance('');
    setVehicleMpg('');
    setTripGasPrice('');
    setResult(null);
  };

  const currencySymbol = useMemo(() => {
    const found = popularCurrencies.find((c) => c.code === currency);
    return found ? found.symbol : '$';
  }, [currency]);

  return (
    <div id="calculator" className="bg-[#222224] rounded-3xl shadow-2xl max-w-5xl mx-auto my-8 overflow-hidden text-white border border-[#333] scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Form */}
        <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#333]">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-[#333] p-3 rounded-2xl flex-shrink-0 text-emerald-400">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                Gas Mileage Calculator <span className="text-emerald-400 text-base font-medium">MPG &amp; Cost Estimator</span>
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                Calculate vehicle MPG, gas cost per mile, and road trip gas budget
              </p>
            </div>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="bg-[#1a1a1c] p-1.5 rounded-xl flex gap-1 mb-6 border border-[#333]">
            <button
              type="button"
              onClick={() => { setCalcMode('calculate'); setResult(null); }}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                calcMode === 'calculate' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Tab 1: Calculate MPG
            </button>
            <button
              type="button"
              onClick={() => { setCalcMode('estimate'); setResult(null); }}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition ${
                calcMode === 'estimate' ? 'bg-emerald-600 text-white shadow' : 'text-gray-400 hover:text-white'
              }`}
            >
              Tab 2: Trip &amp; Monthly Cost
            </button>
          </div>

          <form onSubmit={calculateMileage} className="space-y-5">
            {/* Currency & Gallon System */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">Gallon Standard</label>
                <div className="grid grid-cols-2 gap-1 bg-[#2a2a2c] p-1 rounded-xl border border-[#444]">
                  <button
                    type="button"
                    onClick={() => setGallonType('US')}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${gallonType === 'US' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
                  >
                    US Gallon
                  </button>
                  <button
                    type="button"
                    onClick={() => setGallonType('UK')}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${gallonType === 'UK' ? 'bg-emerald-600 text-white' : 'text-gray-400'}`}
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
                  className="w-full bg-[#2a2a2c] text-white px-3 py-2 rounded-xl text-sm border border-[#444] focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  {popularCurrencies.map((c) => (
                    <option key={c.code} value={c.code}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {calcMode === 'calculate' ? (
              <>
                {/* Distance Entry Style */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-gray-300">Distance Input Method</label>
                    <div className="flex gap-2 text-xs">
                      <button
                        type="button"
                        onClick={() => setInputStyle('tripDistance')}
                        className={`font-medium ${inputStyle === 'tripDistance' ? 'text-emerald-400 underline' : 'text-gray-400'}`}
                      >
                        Trip Miles
                      </button>
                      <span className="text-gray-600">|</span>
                      <button
                        type="button"
                        onClick={() => setInputStyle('odometer')}
                        className={`font-medium ${inputStyle === 'odometer' ? 'text-emerald-400 underline' : 'text-gray-400'}`}
                      >
                        Odometer Reading
                      </button>
                    </div>
                  </div>

                  {inputStyle === 'tripDistance' ? (
                    <div>
                      <input
                        type="number"
                        step="any"
                        placeholder="e.g. 350"
                        value={milesDriven}
                        onChange={(e) => setMilesDriven(e.target.value)}
                        className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                        required
                      />
                      <span className="text-xs text-gray-400 mt-1 block">Miles driven since your last full tank</span>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <input
                          type="number"
                          step="any"
                          placeholder="Start Odometer (e.g. 45000)"
                          value={startOdo}
                          onChange={(e) => setStartOdo(e.target.value)}
                          className="w-full bg-[#1e1e20] text-white px-3 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="number"
                          step="any"
                          placeholder="End Odometer (e.g. 45350)"
                          value={endOdo}
                          onChange={(e) => setEndOdo(e.target.value)}
                          className="w-full bg-[#1e1e20] text-white px-3 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm"
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Gallons Pumped & Gas Price */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Gallons of Gas Pumped</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 11.5"
                      value={gallonsUsed}
                      onChange={(e) => setGallonsUsed(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                      required
                    />
                    <span className="text-xs text-gray-400 mt-1 block">Gallons required to refill to full</span>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Price per Gallon ({currencySymbol})</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 3.50 (optional)"
                      value={gasPrice}
                      onChange={(e) => setGasPrice(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                    />
                    <span className="text-xs text-gray-400 mt-1 block">To calculate cost per mile &amp; total cost</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Tab 2: Trip & Commute Cost Inputs */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold text-gray-300">Trip Distance (Miles)</label>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">Round Trip?</span>
                      <button
                        type="button"
                        onClick={() => setIsRoundTrip(!isRoundTrip)}
                        className={`px-2.5 py-1 rounded-md text-xs font-bold transition ${
                          isRoundTrip ? 'bg-emerald-600 text-white' : 'bg-[#333] text-gray-400'
                        }`}
                      >
                        {isRoundTrip ? '✓ 2-Way' : '1-Way'}
                      </button>
                    </div>
                  </div>
                  <input
                    type="number"
                    step="any"
                    placeholder="e.g. 450"
                    value={tripDistance}
                    onChange={(e) => setTripDistance(e.target.value)}
                    className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                    required
                  />
                  {isRoundTrip && (
                    <span className="text-xs text-emerald-400 mt-1 block">
                      Total round trip distance: {(parseFloat(tripDistance) || 0) * 2} miles
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Vehicle Rating (MPG)</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 28"
                      value={vehicleMpg}
                      onChange={(e) => setVehicleMpg(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                      required
                    />
                    <span className="text-xs text-gray-400 mt-1 block">Your car&apos;s average MPG</span>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Gas Price per Gallon ({currencySymbol})</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="e.g. 3.50"
                      value={tripGasPrice}
                      onChange={(e) => setTripGasPrice(e.target.value)}
                      className="w-full bg-[#1e1e20] text-white px-4 py-3 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm font-semibold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Monthly Driving Frequency (Days/Month for commute budget)
                  </label>
                  <input
                    type="number"
                    step="1"
                    placeholder="22"
                    value={commuteDaysPerMonth}
                    onChange={(e) => setCommuteDaysPerMonth(e.target.value)}
                    className="w-full bg-[#1e1e20] text-white px-4 py-2.5 rounded-xl border border-[#444] focus:outline-none focus:border-emerald-500 text-sm"
                  />
                  <span className="text-xs text-gray-400 mt-1 block">Defaults to 22 working days for monthly commuting</span>
                </div>
              </>
            )}

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl transition shadow-lg text-sm flex items-center justify-center gap-2"
              >
                <span>{calcMode === 'calculate' ? 'Calculate Gas Mileage' : 'Estimate Trip & Monthly Cost'}</span>
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
                    {result.mode === 'calculate' ? 'Gas Mileage (MPG) Result' : 'Estimated Trip Gas Cost'}
                  </p>
                  {result.mode === 'calculate' ? (
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-4xl sm:text-5xl font-black text-emerald-400">{result.mpg}</span>
                      <span className="text-xl font-bold text-gray-300">MPG</span>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-3 mt-1">
                      <span className="text-4xl sm:text-5xl font-black text-emerald-400">{currencySymbol}{result.totalCost}</span>
                      <span className="text-sm font-semibold text-gray-300">
                        {result.isRoundTrip ? '(Round Trip)' : '(One Way)'}
                      </span>
                    </div>
                  )}
                </div>
                {result.rating && (
                  <span className={`text-xs px-3 py-1.5 rounded-full font-bold ${result.rating.badge}`}>
                    {result.rating.label}
                  </span>
                )}
              </div>

              {/* Key Metric Grid */}
              <div className="grid grid-cols-2 gap-3">
                {result.costPerMile && (
                  <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block mb-1">Cost Per Mile</span>
                    <span className="text-xl font-bold text-white">{currencySymbol}{result.costPerMile}</span>
                    <span className="text-xs text-gray-500 block">/ mile driven</span>
                  </div>
                )}
                {result.mode === 'calculate' ? (
                  <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block mb-1">Miles per $1.00</span>
                    <span className="text-xl font-bold text-emerald-400">{result.milesPerDollar || '—'}</span>
                    <span className="text-xs text-gray-500 block">miles per dollar</span>
                  </div>
                ) : (
                  <div className="bg-[#252528] p-4 rounded-xl border border-[#333]">
                    <span className="text-xs text-gray-400 block mb-1">Gas Needed</span>
                    <span className="text-xl font-bold text-white">{result.galsNeeded} gal</span>
                    <span className="text-xs text-gray-500 block">for {result.effectiveDist} miles</span>
                  </div>
                )}
              </div>

              {/* Cost Per Mile & Milestones Table */}
              <div className="bg-[#222225] p-4 rounded-xl border border-[#333] space-y-2.5">
                <p className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                  {result.mode === 'calculate' ? 'Gas Mileage Breakdown & Conversions' : 'Trip & Monthly Budget Forecast'}
                </p>

                {result.mode === 'calculate' ? (
                  <>
                    <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                      <span className="text-gray-400">Gas per 100 Miles</span>
                      <span className="font-semibold text-white">{result.galsPer100Miles} Gallons</span>
                    </div>
                    {result.costPer100Miles && (
                      <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                        <span className="text-gray-400">Cost for 100 Miles</span>
                        <span className="font-bold text-emerald-400">{currencySymbol}{result.costPer100Miles}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                      <span className="text-gray-400">Metric Equivalent (km/L)</span>
                      <span className="font-medium text-gray-200">{result.kmPerLiter} km/L</span>
                    </div>
                    <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                      <span className="text-gray-400">European Rating (L/100km)</span>
                      <span className="font-medium text-gray-200">{result.lPer100km} L/100km</span>
                    </div>
                    <div className="flex justify-between items-center text-sm py-1">
                      <span className="text-gray-400">UK Imperial MPG</span>
                      <span className="font-medium text-gray-200">{result.ukMpg} UK MPG</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                      <span className="text-gray-400">Cost for 100 Miles</span>
                      <span className="font-semibold text-white">{currencySymbol}{result.costPer100}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm py-1 border-b border-[#333]">
                      <span className="text-gray-400">Monthly Gas Bill ({result.monthlyMiles} mi)</span>
                      <span className="font-bold text-emerald-400">{currencySymbol}{result.monthlyCost} / mo</span>
                    </div>
                    <div className="flex justify-between items-center text-sm py-1">
                      <span className="text-gray-400">Yearly Fuel Expense</span>
                      <span className="font-bold text-emerald-300">{currencySymbol}{result.yearlyCost} / yr</span>
                    </div>
                  </>
                )}
              </div>

              {result.mode === 'estimate' && (
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/50 rounded-xl text-xs text-emerald-200">
                  💡 <strong>Commute Insight:</strong> Driving {result.effectiveDist} miles regularly costs approximately{' '}
                  <strong className="text-emerald-300">{currencySymbol}{result.monthlyCost} every month</strong> and{' '}
                  <strong className="text-emerald-300">{currencySymbol}{result.yearlyCost} per year</strong> at {currencySymbol}{tripGasPrice}/gal.
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 text-gray-400 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#252528] flex items-center justify-center text-emerald-400">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-1">Instant Gas Mileage Analysis</h3>
                <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                  Calculate vehicle MPG from your latest fill-up, or forecast trip fuel costs with monthly and yearly commute budgets.
                </p>
              </div>
              <div className="text-xs text-gray-500 bg-[#252528] px-4 py-2 rounded-lg border border-[#333]">
                Formula: Gas Mileage (MPG) = Miles Driven ÷ Gallons Used
              </div>
            </div>
          )}

          <div className="mt-6 pt-4 border-t border-[#2a2a2c] flex items-center justify-between text-xs text-gray-500">
            <span>NextCodeHub Gas Mileage Estimator</span>
            <span>Real-time Formulas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
