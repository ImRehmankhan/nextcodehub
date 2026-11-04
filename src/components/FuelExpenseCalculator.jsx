'use client';
import { useState, useMemo } from 'react';
import cc from 'currency-codes';

const allCurrencies = cc.data.sort((a, b) => a.code.localeCompare(b.code));

export default function FuelExpenseCalculator() {
  const [unit, setUnit] = useState('Metric');
  const [currency, setCurrency] = useState('USD');
  const [commuteDistance, setCommuteDistance] = useState('');
  const [commuteType, setCommuteType] = useState('Round Trip');
  const [daysPerWeek, setDaysPerWeek] = useState('5');
  const [extraWeeklyDistance, setExtraWeeklyDistance] = useState('');
  const [efficiency, setEfficiency] = useState('');
  const [price, setPrice] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const dist = parseFloat(commuteDistance);
    const ef = parseFloat(efficiency);
    const p = parseFloat(price);
    const days = parseFloat(daysPerWeek) || 5;
    const extra = parseFloat(extraWeeklyDistance) || 0;

    if (dist > 0 && ef > 0 && p > 0) {
      const dailyCommuteDist = commuteType === 'One Way' ? dist * 2 : dist;
      const weeklyCommuteDist = dailyCommuteDist * days;
      const totalWeeklyDist = weeklyCommuteDist + extra;
      const dailyAverageDist = totalWeeklyDist / 7;
      const monthlyDist = totalWeeklyDist * 4.333; // Average weeks per month
      const annualDist = totalWeeklyDist * 52;

      // Fuel needed
      const dailyFuel = dailyCommuteDist / ef;
      const weeklyFuel = totalWeeklyDist / ef;
      const monthlyFuel = monthlyDist / ef;
      const annualFuel = annualDist / ef;

      // Expenses
      const dailyCost = dailyFuel * p;
      const weeklyCost = weeklyFuel * p;
      const monthlyCost = monthlyFuel * p;
      const annualCost = annualFuel * p;

      // Cost per unit distance
      const costPerDistance = p / ef;

      // Savings from 1 day remote / carpool
      const oneDaySavingsWeekly = (dailyCommuteDist / ef) * p;
      const oneDaySavingsMonthly = oneDaySavingsWeekly * 4.333;
      const oneDaySavingsAnnual = oneDaySavingsWeekly * 52;

      setResult({
        dailyCommuteDist: dailyCommuteDist.toFixed(1),
        weeklyDist: totalWeeklyDist.toFixed(1),
        monthlyDist: monthlyDist.toFixed(1),
        annualDist: annualDist.toFixed(0),
        dailyCost: dailyCost.toFixed(2),
        weeklyCost: weeklyCost.toFixed(2),
        monthlyCost: monthlyCost.toFixed(2),
        annualCost: annualCost.toFixed(2),
        monthlyFuel: monthlyFuel.toFixed(1),
        annualFuel: annualFuel.toFixed(1),
        costPerDistance: costPerDistance.toFixed(2),
        oneDaySavingsMonthly: oneDaySavingsMonthly.toFixed(2),
        oneDaySavingsAnnual: oneDaySavingsAnnual.toFixed(2),
      });
    }
  };

  const handleReset = () => {
    setCommuteDistance('');
    setExtraWeeklyDistance('');
    setEfficiency('');
    setPrice('');
    setDaysPerWeek('5');
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
    <div className="bg-[#222224] rounded-3xl shadow-2xl max-w-5xl mx-auto my-8 overflow-hidden text-white border border-[#333]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Form */}
        <div className="p-8 lg:p-10">
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-[#333] p-3 rounded-2xl flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <line x1="2" y1="10" x2="22" y2="10"></line>
                <line x1="12" y1="14" x2="12" y2="18"></line>
                <line x1="8" y1="18" x2="16" y2="18"></line>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                Fuel Expense &amp; Budget Calculator
              </h2>
              <p className="text-emerald-400 text-sm mt-1">
                Plan your daily, weekly, monthly &amp; annual fuel budget
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
                    onClick={() => setUnit('Metric')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${unit === 'Metric' ? 'bg-emerald-700 text-white shadow-md font-semibold' : 'text-gray-300 hover:text-white'}`}
                  >
                    Metric (km)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnit('Imperial')}
                    className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${unit === 'Imperial' ? 'bg-emerald-700 text-white shadow-md font-semibold' : 'text-gray-300 hover:text-white'}`}
                  >
                    Imperial (mi)
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="expense-currency" className="block text-sm font-semibold text-gray-300 mb-2">Currency</label>
                <select
                  id="expense-currency"
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

            {/* Daily Commute Distance & Type */}
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label htmlFor="commute-dist" className="block text-sm font-semibold text-gray-300 mb-2">
                  Commute Distance ({distLabel})
                </label>
                <input
                  id="commute-dist"
                  type="number"
                  step="any"
                  value={commuteDistance}
                  onChange={(e) => setCommuteDistance(e.target.value)}
                  placeholder="e.g., 25"
                  className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Way</label>
                <select
                  value={commuteType}
                  onChange={(e) => setCommuteType(e.target.value)}
                  className="w-full bg-[#2a2a2c] text-white px-3 py-2 rounded-xl text-sm border border-[#444] focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="Round Trip">Round Trip</option>
                  <option value="One Way">One Way</option>
                </select>
              </div>
            </div>

            {/* Commute Days per Week & Extra Driving */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="days-per-week" className="block text-sm font-semibold text-gray-300 mb-2">
                  Commute Days/Week
                </label>
                <select
                  id="days-per-week"
                  value={daysPerWeek}
                  onChange={(e) => setDaysPerWeek(e.target.value)}
                  className="w-full bg-[#2a2a2c] text-white px-3 py-2 rounded-xl text-sm border border-[#444] focus:outline-none focus:border-emerald-500 cursor-pointer"
                >
                  <option value="1">1 Day</option>
                  <option value="2">2 Days</option>
                  <option value="3">3 Days</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days (Standard)</option>
                  <option value="6">6 Days</option>
                  <option value="7">7 Days (Every Day)</option>
                </select>
              </div>

              <div>
                <label htmlFor="extra-dist" className="block text-sm font-semibold text-gray-300 mb-2">
                  Weekend / Errands ({distLabel}/wk)
                </label>
                <input
                  id="extra-dist"
                  type="number"
                  step="any"
                  value={extraWeeklyDistance}
                  onChange={(e) => setExtraWeeklyDistance(e.target.value)}
                  placeholder="e.g., 50 (optional)"
                  className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            {/* Vehicle Fuel Efficiency & Fuel Price */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="efficiency-expense" className="block text-sm font-semibold text-gray-300 mb-2">
                  Fuel Efficiency ({effLabel})
                </label>
                <input
                  id="efficiency-expense"
                  type="number"
                  step="any"
                  value={efficiency}
                  onChange={(e) => setEfficiency(e.target.value)}
                  placeholder="e.g., 15"
                  className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="price-expense" className="block text-sm font-semibold text-gray-300 mb-2">
                  Fuel Price ({currencySymbol}/{priceLabel})
                </label>
                <input
                  id="price-expense"
                  type="number"
                  step="any"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g., 1.50"
                  className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-2">
              <button
                type="submit"
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-600/30"
              >
                Calculate Fuel Budget
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-[#444] hover:bg-[#555] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300"
              >
                Reset
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
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                Enter Commute &amp; Vehicle Info
              </h3>
              <p className="text-gray-400 max-w-sm mx-auto leading-relaxed text-sm">
                Fill in your daily commute distance, weekly frequency, and fuel price to calculate your monthly and annual fuel expense budget.
              </p>
            </div>
          ) : (
            <div className="w-full transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-600 p-3 rounded-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Your Fuel Expense Budget</h3>
                  <p className="text-gray-400 text-sm">Comprehensive expense breakdown</p>
                </div>
              </div>

              {/* 4 Primary Budget Cards */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {/* Monthly Fuel Expense */}
                <div className="bg-emerald-600 rounded-2xl p-4 shadow-lg">
                  <p className="text-white/90 text-xs font-semibold uppercase tracking-wider">Monthly Fuel Budget</p>
                  <p className="text-3xl font-extrabold text-white mt-2">{currencySymbol}{result.monthlyCost}</p>
                  <p className="text-emerald-100 text-xs mt-1">~{result.monthlyFuel} {volLabel}/mo</p>
                </div>

                {/* Annual Fuel Expense */}
                <div className="bg-[#0ea5e9] rounded-2xl p-4 shadow-lg">
                  <p className="text-white/90 text-xs font-semibold uppercase tracking-wider">Annual Fuel Expense</p>
                  <p className="text-3xl font-extrabold text-white mt-2">{currencySymbol}{result.annualCost}</p>
                  <p className="text-sky-100 text-xs mt-1">~{result.annualFuel} {volLabel}/yr</p>
                </div>

                {/* Daily Commute Cost */}
                <div className="bg-[#2a2a2f] border border-gray-700 rounded-2xl p-4">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Daily Commute Cost</p>
                  <p className="text-2xl font-bold text-white mt-1">{currencySymbol}{result.dailyCost}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{result.dailyCommuteDist} {distLabel}/day</p>
                </div>

                {/* Weekly Expense */}
                <div className="bg-[#2a2a2f] border border-gray-700 rounded-2xl p-4">
                  <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Weekly Expense</p>
                  <p className="text-2xl font-bold text-white mt-1">{currencySymbol}{result.weeklyCost}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{result.weeklyDist} {distLabel}/wk</p>
                </div>
              </div>

              {/* Work-from-Home & Carpool Savings Insight */}
              <div className="bg-[#2a2a2f] rounded-2xl p-5 border border-emerald-500/30 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <p className="text-emerald-400 font-bold text-sm">Work-from-Home / Carpool Savings:</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Eliminating just <strong>1 commute day per week</strong> (via telecommuting or carpooling) saves you{' '}
                  <strong className="text-white">{currencySymbol}{result.oneDaySavingsMonthly}/month</strong> (that&apos;s{' '}
                  <strong className="text-emerald-300">{currencySymbol}{result.oneDaySavingsAnnual} per year</strong> in direct fuel savings).
                </p>
              </div>

              {/* Driving stats footer */}
              <div className="text-xs text-gray-400 flex justify-between px-1">
                <span>Annual distance: <strong>{result.annualDist} {distLabel}</strong></span>
                <span>Fuel cost: <strong>{currencySymbol}{result.costPerDistance} per {distLabel}</strong></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
