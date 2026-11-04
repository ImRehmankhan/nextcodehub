'use client';
import { useState, useMemo } from 'react';
import cc from 'currency-codes';

const allCurrencies = cc.data.sort((a, b) => a.code.localeCompare(b.code));

export default function GasPriceCalculator() {
  const [unit, setUnit] = useState('Imperial'); // 'Imperial' (MPG, miles) or 'Metric' (km/L, km)
  const [currency, setCurrency] = useState('USD');
  const [monthlyDistance, setMonthlyDistance] = useState('1000');
  const [efficiency, setEfficiency] = useState('25');
  const [basePrice, setBasePrice] = useState('3.50');
  const [comparePrice, setComparePrice] = useState('4.00');
  const [activePreset, setActivePreset] = useState('+0.50');
  const [result, setResult] = useState(null);

  const calculate = (e, newBase, newCompare, newDist, newEff) => {
    if (e) e.preventDefault();

    const dist = parseFloat(newDist !== undefined ? newDist : monthlyDistance);
    const ef = parseFloat(newEff !== undefined ? newEff : efficiency);
    const p1 = parseFloat(newBase !== undefined ? newBase : basePrice);
    const p2 = parseFloat(newCompare !== undefined ? newCompare : comparePrice);

    if (dist > 0 && ef > 0 && p1 > 0 && p2 > 0) {
      const monthlyFuel = dist / ef;
      const annualFuel = monthlyFuel * 12;

      const baseMonthlyCost = monthlyFuel * p1;
      const baseAnnualCost = annualFuel * p1;

      const compareMonthlyCost = monthlyFuel * p2;
      const compareAnnualCost = annualFuel * p2;

      const monthlyDiff = compareMonthlyCost - baseMonthlyCost;
      const annualDiff = compareAnnualCost - baseAnnualCost;
      const percentChange = ((p2 - p1) / p1) * 100;

      // Price steps table for sensitivity (-$0.75, -$0.50, -$0.25, base, +$0.25, +$0.50, +$1.00)
      const deltas = [-0.5, -0.25, 0, 0.25, 0.5, 0.75, 1.0];
      const sensitivityTable = deltas.map((delta) => {
        const p = Math.max(0.1, p1 + delta);
        return {
          price: p.toFixed(2),
          deltaLabel: delta === 0 ? 'Current Price' : (delta > 0 ? `+${delta.toFixed(2)}` : delta.toFixed(2)),
          isCurrent: delta === 0,
          isTarget: Math.abs(p - p2) < 0.01,
          monthlyCost: (monthlyFuel * p).toFixed(2),
          annualCost: (annualFuel * p).toFixed(2),
          diffFromBase: ((monthlyFuel * p) - baseMonthlyCost).toFixed(2),
        };
      });

      setResult({
        monthlyFuel: monthlyFuel.toFixed(1),
        annualFuel: annualFuel.toFixed(1),
        basePrice: p1.toFixed(2),
        comparePrice: p2.toFixed(2),
        baseMonthlyCost: baseMonthlyCost.toFixed(2),
        baseAnnualCost: baseAnnualCost.toFixed(2),
        compareMonthlyCost: compareMonthlyCost.toFixed(2),
        compareAnnualCost: compareAnnualCost.toFixed(2),
        monthlyDiff: Math.abs(monthlyDiff).toFixed(2),
        annualDiff: Math.abs(annualDiff).toFixed(2),
        isIncrease: monthlyDiff >= 0,
        percentChange: Math.abs(percentChange).toFixed(1),
        sensitivityTable,
      });
    }
  };

  const handleQuickDelta = (delta, label) => {
    setActivePreset(label);
    const p1 = parseFloat(basePrice) || 3.5;
    const newPrice = Math.max(0.1, p1 + delta).toFixed(2);
    setComparePrice(newPrice);
    calculate(null, basePrice, newPrice, monthlyDistance, efficiency);
  };

  const handleQuickGrade = (gradeOffset, label) => {
    setActivePreset(label);
    const p1 = parseFloat(basePrice) || 3.5;
    const newPrice = Math.max(0.1, p1 + gradeOffset).toFixed(2);
    setComparePrice(newPrice);
    calculate(null, basePrice, newPrice, monthlyDistance, efficiency);
  };

  const handleQuickDistance = (d) => {
    setMonthlyDistance(d.toString());
    calculate(null, basePrice, comparePrice, d, efficiency);
  };

  const handleReset = () => {
    setMonthlyDistance('1000');
    setEfficiency('25');
    setBasePrice('3.50');
    setComparePrice('4.00');
    setActivePreset(null);
    setResult(null);
  };

  const currencySymbol = useMemo(() => {
    try {
      const formatted = (0).toLocaleString('en-US', { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0 });
      return formatted.replace(/\d/g, '').trim();
    } catch {
      return currency;
    }
  }, [currency]);

  const distLabel = unit === 'Imperial' ? 'Miles' : 'km';
  const effLabel = unit === 'Imperial' ? 'MPG' : 'km/L';
  const volLabel = unit === 'Imperial' ? 'Gallons' : 'Liters';
  const priceLabel = unit === 'Imperial' ? 'Gallon' : 'Liter';

  return (
    <div className="bg-gradient-to-b from-[#232326] to-[#1c1c1f] rounded-3xl shadow-2xl max-w-5xl mx-auto my-8 overflow-hidden text-white border border-[#38383c]">
      {/* Top Banner Accent */}
      <div className="h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Side: Form Controls (7 cols on lg) */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-9 border-b lg:border-b-0 lg:border-r border-[#333338]">
          {/* Header */}
          <div className="flex items-center gap-3.5 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-inner flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight flex items-center gap-2">
                Gas Price Impact Calculator
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                Simulate gas price hikes, drops, and premium fuel grade costs
              </p>
            </div>
          </div>

          <form onSubmit={(e) => calculate(e)} className="space-y-5">
            {/* Unit System & Currency Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-3 bg-[#19191b] rounded-2xl border border-[#2e2e32]">
              {/* Unit System Switcher */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Unit System
                </label>
                <div className="grid grid-cols-2 gap-1 bg-[#242428] p-1 rounded-xl border border-[#3a3a40]">
                  <button
                    type="button"
                    onClick={() => {
                      setUnit('Imperial');
                      if (monthlyDistance === '1500') setMonthlyDistance('1000');
                      setResult(null);
                    }}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${
                      unit === 'Imperial' ? 'bg-amber-500 text-black shadow-md font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    US (MPG / Gallon)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setUnit('Metric');
                      if (monthlyDistance === '1000') setMonthlyDistance('1500');
                      setResult(null);
                    }}
                    className={`py-1.5 rounded-lg text-xs font-semibold transition ${
                      unit === 'Metric' ? 'bg-amber-500 text-black shadow-md font-bold' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Metric (km/L / Liter)
                  </button>
                </div>
              </div>

              {/* Currency Selector */}
              <div>
                <label htmlFor="price-currency" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                  Currency
                </label>
                <div className="relative">
                  <select
                    id="price-currency"
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full bg-[#2a2a2c] text-white px-3 py-2 rounded-xl text-sm border border-[#444] focus:outline-none focus:border-amber-500 cursor-pointer"
                  >
                    <option value="USD">USD ($) - US Dollar</option>
                    <option value="EUR">EUR (€) - Euro</option>
                    <option value="GBP">GBP (£) - British Pound</option>
                    <option value="CAD">CAD ($) - Canadian Dollar</option>
                    <option value="AUD">AUD ($) - Australian Dollar</option>
                    <option value="PKR">PKR (Rs) - Pakistani Rupee</option>
                    <option value="INR">INR (₹) - Indian Rupee</option>
                    {allCurrencies.map((c) => (
                      <option key={c.code} value={c.code}>{c.code} - {c.currency}</option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-2.5 pointer-events-none text-gray-400 text-xs">▼</div>
                </div>
              </div>
            </div>

            {/* Monthly Distance & Fuel Economy */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="monthly-dist-input" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Monthly Distance ({distLabel})
                  </label>
                  <span className="text-[11px] text-gray-500">Commute + Errands</span>
                </div>
                <div className="relative">
                  <input
                    id="monthly-dist-input"
                    type="number"
                    step="any"
                    value={monthlyDistance}
                    onChange={(e) => setMonthlyDistance(e.target.value)}
                    placeholder={unit === 'Imperial' ? '1000' : '1500'}
                    className="w-full bg-[#19191b] text-white px-4 py-3 rounded-xl border border-[#38383e] focus:outline-none focus:border-amber-500 text-sm font-semibold pr-14"
                    required
                  />
                  <span className="absolute right-3.5 top-3 text-xs font-medium text-gray-500">{distLabel}</span>
                </div>
                {/* Distance Presets */}
                <div className="flex gap-1.5 mt-2">
                  {(unit === 'Imperial' ? [500, 1000, 1500, 2000] : [800, 1500, 2000, 3000]).map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => handleQuickDistance(d)}
                      className={`flex-1 py-1 text-[11px] rounded-lg transition border ${
                        monthlyDistance === d.toString()
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                          : 'bg-[#1e1e22] text-gray-400 border-[#333] hover:text-white'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label htmlFor="price-efficiency" className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Vehicle Economy ({effLabel})
                  </label>
                  <span className="text-[11px] text-gray-500">Avg. Mileage</span>
                </div>
                <div className="relative">
                  <input
                    id="price-efficiency"
                    type="number"
                    step="any"
                    value={efficiency}
                    onChange={(e) => setEfficiency(e.target.value)}
                    placeholder={unit === 'Imperial' ? '25' : '11'}
                    className="w-full bg-[#19191b] text-white px-4 py-3 rounded-xl border border-[#38383e] focus:outline-none focus:border-amber-500 text-sm font-semibold pr-14"
                    required
                  />
                  <span className="absolute right-3.5 top-3 text-xs font-medium text-gray-500">{effLabel}</span>
                </div>
                {/* Efficiency Presets */}
                <div className="flex gap-1.5 mt-2">
                  {(unit === 'Imperial'
                    ? [{ l: 'SUV (18)', v: '18' }, { l: 'Sedan (28)', v: '28' }, { l: 'Eco (36)', v: '36' }, { l: 'Hybrid (50)', v: '50' }]
                    : [{ l: 'SUV (8)', v: '8' }, { l: 'Sedan (12)', v: '12' }, { l: 'Eco (16)', v: '16' }, { l: 'Hybrid (22)', v: '22' }]
                  ).map((item) => (
                    <button
                      key={item.v}
                      type="button"
                      onClick={() => {
                        setEfficiency(item.v);
                        calculate(null, basePrice, comparePrice, monthlyDistance, item.v);
                      }}
                      className={`flex-1 py-1 text-[10px] sm:text-[11px] rounded-lg transition border truncate ${
                        efficiency === item.v
                          ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 font-bold'
                          : 'bg-[#1e1e22] text-gray-400 border-[#333] hover:text-white'
                      }`}
                    >
                      {item.l}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Inputs: Current vs New Price */}
            <div className="p-4 bg-[#19191b] rounded-2xl border border-[#2e2e32] space-y-3.5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                  Price Comparison Setup
                </span>
                <span className="text-[11px] text-gray-500">per {priceLabel}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label htmlFor="base-price-input" className="block text-xs font-semibold text-gray-300 mb-1">
                    Current Gas Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-xs font-bold text-gray-400">{currencySymbol}</span>
                    <input
                      id="base-price-input"
                      type="number"
                      step="any"
                      value={basePrice}
                      onChange={(e) => setBasePrice(e.target.value)}
                      placeholder="3.50"
                      className="w-full bg-[#222226] text-white pl-8 pr-4 py-2.5 rounded-xl border border-[#3e3e46] focus:outline-none focus:border-amber-500 text-sm font-semibold"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="compare-price-input" className="block text-xs font-semibold text-gray-300 mb-1">
                    Comparison / New Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-xs font-bold text-amber-400">{currencySymbol}</span>
                    <input
                      id="compare-price-input"
                      type="number"
                      step="any"
                      value={comparePrice}
                      onChange={(e) => setComparePrice(e.target.value)}
                      placeholder="4.00"
                      className="w-full bg-[#222226] text-amber-300 pl-8 pr-4 py-2.5 rounded-xl border border-amber-500/40 focus:outline-none focus:border-amber-400 text-sm font-bold"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Quick Delta Chips */}
              <div>
                <p className="text-[11px] text-gray-400 font-semibold mb-2">Simulate Price Hikes or Drops:</p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                  {[
                    { label: '-25¢ Drop', delta: -0.25, badge: 'text-emerald-400' },
                    { label: '+10¢ Hike', delta: 0.1, badge: 'text-amber-300' },
                    { label: '+25¢ Hike', delta: 0.25, badge: 'text-amber-300' },
                    { label: '+50¢ Surge', delta: 0.5, badge: 'text-amber-400' },
                    { label: '+$1.00 Spike', delta: 1.0, badge: 'text-orange-400' },
                    { label: 'Premium (+75¢)', delta: 0.75, badge: 'text-purple-300' },
                  ].map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => handleQuickDelta(item.delta, item.label)}
                      className={`py-1.5 px-2 text-[11px] rounded-lg transition border font-medium truncate ${
                        activePreset === item.label
                          ? 'bg-amber-500 text-black border-amber-400 font-bold shadow'
                          : 'bg-[#222226] hover:bg-[#2c2c32] text-gray-300 border-[#3a3a40]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-1">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-extrabold py-3.5 px-6 rounded-xl transition duration-200 shadow-lg shadow-amber-600/20 text-sm flex items-center justify-center gap-2"
              >
                <span>Calculate Gas Price Impact</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#242428] hover:bg-[#2e2e34] text-gray-300 font-semibold py-3.5 px-5 rounded-xl transition text-sm border border-[#3a3a42]"
              >
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Results (5 cols on lg) */}
        <div className="lg:col-span-5 p-6 sm:p-8 lg:p-9 flex flex-col justify-between bg-[#171719]">
          {result ? (
            <div className="space-y-5">
              {/* Header result badge */}
              <div className="flex justify-between items-start pb-3 border-b border-[#2d2d33]">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-400 font-bold">Price Impact Outcome</p>
                  <p className="text-sm font-semibold text-gray-300 mt-0.5">
                    {result.isIncrease ? (
                      <span className="text-amber-400 flex items-center gap-1">
                        ▲ {currencySymbol}{result.basePrice} → {currencySymbol}{result.comparePrice} (+{result.percentChange}%)
                      </span>
                    ) : (
                      <span className="text-emerald-400 flex items-center gap-1">
                        ▼ {currencySymbol}{result.basePrice} → {currencySymbol}{result.comparePrice} (-{result.percentChange}%)
                      </span>
                    )}
                  </p>
                </div>
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${
                  result.isIncrease
                    ? 'bg-amber-950/60 text-amber-300 border-amber-700/60'
                    : 'bg-emerald-950/60 text-emerald-300 border-emerald-700/60'
                }`}>
                  {result.isIncrease ? 'Price Hike' : 'Price Drop'}
                </span>
              </div>

              {/* Main Impact Card */}
              <div className={`p-5 rounded-2xl border transition-all ${
                result.isIncrease
                  ? 'bg-gradient-to-br from-amber-950/40 via-orange-950/20 to-[#222226] border-amber-600/40 shadow-inner'
                  : 'bg-gradient-to-br from-emerald-950/40 via-teal-950/20 to-[#222226] border-emerald-600/40 shadow-inner'
              }`}>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                  {result.isIncrease ? 'Additional Fuel Expense' : 'Estimated Fuel Savings'}
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className={`text-4xl sm:text-5xl font-black tracking-tight ${
                    result.isIncrease ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {result.isIncrease ? '+' : '-'}{currencySymbol}{result.monthlyDiff}
                  </span>
                  <span className="text-sm font-semibold text-gray-400">/ month</span>
                </div>
                <div className="mt-2.5 pt-2.5 border-t border-[#3a3a40]/60 flex justify-between items-center text-xs">
                  <span className="text-gray-400">Annual Budget Impact:</span>
                  <span className={`font-bold ${result.isIncrease ? 'text-amber-300' : 'text-emerald-300'}`}>
                    {result.isIncrease ? '+' : '-'}{currencySymbol}{result.annualDiff} / year
                  </span>
                </div>
              </div>

              {/* Side-by-Side Monthly Bill Cards */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#202024] p-3.5 rounded-xl border border-[#333338]">
                  <p className="text-[11px] text-gray-400 font-semibold">Current Monthly Bill</p>
                  <p className="text-xl font-bold text-white mt-1">
                    {currencySymbol}{result.baseMonthlyCost}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{currencySymbol}{result.baseAnnualCost} / yr</p>
                </div>

                <div className={`p-3.5 rounded-xl border ${
                  result.isIncrease
                    ? 'bg-amber-950/20 border-amber-600/40'
                    : 'bg-emerald-950/20 border-emerald-600/40'
                }`}>
                  <p className="text-[11px] text-gray-400 font-semibold">New Monthly Bill</p>
                  <p className={`text-xl font-bold mt-1 ${result.isIncrease ? 'text-amber-300' : 'text-emerald-300'}`}>
                    {currencySymbol}{result.compareMonthlyCost}
                  </p>
                  <p className="text-[11px] text-gray-500 mt-0.5">{currencySymbol}{result.compareAnnualCost} / yr</p>
                </div>
              </div>

              {/* Sensitivity Matrix Table */}
              <div className="bg-[#1f1f23] p-3.5 rounded-xl border border-[#303036] space-y-2">
                <div className="flex justify-between items-center text-xs pb-1 border-b border-[#2d2d33]">
                  <span className="font-bold text-gray-300 uppercase tracking-wider text-[11px]">
                    Price Sensitivity Matrix
                  </span>
                  <span className="text-[10px] text-gray-500">Monthly Cost</span>
                </div>
                <div className="space-y-1 max-h-40 overflow-y-auto pr-1 text-xs">
                  {result.sensitivityTable.map((row) => (
                    <div
                      key={row.price}
                      className={`flex justify-between items-center py-1.5 px-2 rounded-lg transition ${
                        row.isTarget
                          ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold'
                          : row.isCurrent
                          ? 'bg-[#28282e] border border-gray-600 text-white font-semibold'
                          : 'text-gray-400 hover:bg-[#252529]'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="font-medium">{currencySymbol}{row.price}</span>
                        <span className="text-[10px] opacity-70 font-normal">({row.deltaLabel})</span>
                      </span>
                      <span className="font-mono font-semibold text-white">
                        {currencySymbol}{row.monthlyCost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Monthly fuel consumed info */}
              <div className="text-xs text-gray-400 flex justify-between px-1">
                <span>Monthly Fuel: <strong className="text-gray-200">{result.monthlyFuel} {volLabel}</strong></span>
                <span>Annual Fuel: <strong className="text-gray-200">{result.annualFuel} {volLabel}</strong></span>
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center items-center text-center p-6 text-gray-400 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-[#222226] border border-[#333338] flex items-center justify-center text-amber-400 shadow-inner">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">Instant Gas Price Impact Engine</h3>
                <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
                  Enter your monthly distance, fuel mileage, and gas prices to see your exact month-by-month and annual cost difference.
                </p>
              </div>
              <div className="text-[11px] text-amber-400/80 bg-amber-950/20 px-3 py-1.5 rounded-lg border border-amber-800/30">
                Formula: Monthly Difference = (Monthly Distance ÷ MPG) × (New Price − Old Price)
              </div>
            </div>
          )}

          <div className="mt-5 pt-3 border-t border-[#2a2a2e] flex items-center justify-between text-[11px] text-gray-500">
            <span>NextCodeHub Gas Price Simulator</span>
            <span>Live Delta Matrix</span>
          </div>
        </div>
      </div>
    </div>
  );
}
