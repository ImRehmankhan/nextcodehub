'use client';
import { useState, useMemo } from 'react';
import cc from 'currency-codes';

const allCurrencies = cc.data.sort((a, b) => a.code.localeCompare(b.code));

export default function FuelCalculator({ defaultMode = 'cost' }) {
  const [unit, setUnit] = useState('Metric');
  const [currency, setCurrency] = useState('USD');
  const [tripType, setTripType] = useState('One Way');
  const [distance, setDistance] = useState('');
  const [efficiency, setEfficiency] = useState('');
  const [price, setPrice] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const d = parseFloat(distance);
    const ef = parseFloat(efficiency);
    const p = parseFloat(price);
    
    if (d > 0 && ef > 0) {
      const finalDistance = tripType === 'Round Trip' ? d * 2 : d;
      const fuelNeeded = finalDistance / ef;
      const consRate = 100 / ef;
      
      const cost = p > 0 ? fuelNeeded * p : 0;
      const costPerDist = p > 0 ? cost / finalDistance : 0;
      
      setResult({ 
        fuel: fuelNeeded.toFixed(1), 
        cost: cost.toFixed(2),
        costPerDistance: costPerDist.toFixed(2),
        totalDistance: finalDistance.toFixed(1),
        consumptionRate: consRate.toFixed(1),
        efficiency: ef.toFixed(1)
      });
    }
  };

  const handleReset = () => {
    setDistance('');
    setEfficiency('');
    setPrice('');
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

  const distLabel = unit === 'Imperial' ? 'Miles' : 'km';
  const effLabel = unit === 'Imperial' ? 'MPG' : 'km/L';
  const priceLabel = unit === 'Imperial' ? 'Gallon' : 'Liter';

  return (
    <div className="bg-[#222224] rounded-3xl shadow-2xl max-w-5xl mx-auto my-8 overflow-hidden text-white border border-[#333]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Form */}
        <div className="p-8 lg:p-10">
          
          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-[#333] p-3 rounded-2xl flex-shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-300">
                <path d="M3 22v-8p2 2 0 0 1 2 2h4a2 2 0 0 1 2 2v8"></path>
                <path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5"></path>
                <rect x="7" y="5" width="10" height="6" rx="1"></rect>
                <path d="M21 16v-2a2 2 0 0 0-2-2h-3"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold flex flex-wrap items-baseline gap-2">
                Fuel Calculator <span className="text-[var(--color-primary-500)] text-xl font-medium">ایندھن کیلکولیٹر</span>
              </h2>
              <p className="text-[var(--color-primary-500)] text-sm mt-1">
                Calculate your trip costs | سفر کی لاگت کا حساب لگائیں
              </p>
            </div>
          </div>

          <form onSubmit={calculate} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Unit System */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                  Unit System | یونٹ سسٹم
                </label>
                <div className="flex bg-[#333] rounded-xl p-1">
                  <button type="button" onClick={() => setUnit('Metric')} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${unit === 'Metric' ? 'bg-[var(--color-primary-500)] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#444]'}`}>Metric</button>
                  <button type="button" onClick={() => setUnit('Imperial')} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${unit === 'Imperial' ? 'bg-[var(--color-primary-500)] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#444]'}`}>Imperial</button>
                </div>
              </div>

              {/* Currency */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                  <span className="font-serif text-lg">$</span>
                  Currency | کرنسی
                </label>
                <select 
                  value={currency} 
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] cursor-pointer appearance-none"
                >
                  {allCurrencies.map(c => (
                    <option key={c.code} value={c.code}>{c.code} - {c.currency}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Trip Type */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                Trip Type | سفر کی قسم
              </label>
              <div className="flex bg-[#333] rounded-xl p-1 gap-1">
                <button type="button" onClick={() => setTripType('One Way')} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${tripType === 'One Way' ? 'bg-[var(--color-primary-500)] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#444]'}`}>One Way</button>
                <button type="button" onClick={() => setTripType('Round Trip')} className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${tripType === 'Round Trip' ? 'bg-[var(--color-primary-500)] text-white shadow-md' : 'text-gray-400 hover:text-white hover:bg-[#444]'}`}>Round Trip</button>
              </div>
            </div>

            {/* Distance */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Distance ({distLabel}) | فاصلہ ({distLabel})
              </label>
              <input 
                type="number" 
                step="any"
                value={distance} 
                onChange={(e) => setDistance(e.target.value)} 
                placeholder="Enter distance"
                className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                required 
              />
            </div>

            {/* Fuel Efficiency */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                Fuel Efficiency ({effLabel}) | ایندھن کی کارکردگی ({effLabel})
              </label>
              <input 
                type="number" 
                step="any"
                value={efficiency} 
                onChange={(e) => setEfficiency(e.target.value)} 
                placeholder="e.g., 15"
                className="w-full px-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
                required 
              />
            </div>

            {/* Fuel Price */}
            <div>
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-300 mb-3">
                <span className="font-serif text-lg">$</span>
                Fuel Price ({currencySymbol} per {priceLabel}) | ایندھن کی قیمت ({currencySymbol} per {priceLabel})
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">{currencySymbol}</span>
                <input 
                  type="number" 
                  step="any"
                  value={price} 
                  onChange={(e) => setPrice(e.target.value)} 
                  placeholder="1.50"
                  className={`w-full ${currencySymbol.length > 2 ? 'pl-14' : 'pl-10'} pr-4 py-3 bg-white text-black font-medium rounded-xl border-none outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]`}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button 
                type="submit" 
                className="flex-1 bg-white hover:bg-gray-100 text-[var(--color-primary-500)] flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="14"></line><line x1="16" y1="18" x2="16" y2="18"></line><line x1="12" y1="14" x2="12" y2="14"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="8" y1="14" x2="8" y2="14"></line><line x1="8" y1="18" x2="8" y2="18"></line></svg>
                Calculate
              </button>
              <button 
                type="button" 
                onClick={handleReset}
                className="flex-1 bg-[#444] hover:bg-[#555] text-white flex items-center justify-center gap-2 font-bold py-3.5 px-6 rounded-xl transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                Reset
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Results Placeholder */}
        <div className="bg-[#1f1f23] p-8 lg:p-10 flex flex-col justify-center items-center border-l border-[#333]">
          {!result ? (
            <div className="text-center opacity-70">
              <div className="mb-6 inline-flex p-4 bg-[#2a2a2f] rounded-3xl">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">
                Enter Your Details | <span className="font-normal text-xl">اپنی تفصیلات درج کریں</span>
              </h3>
              <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                Fill in the form to calculate fuel costs | <br/> ایندھن کی لاگت کا حساب لگانے کے لیے فارم بھریں
              </p>
            </div>
          ) : (
            <div className="w-full transition-all duration-500">
              
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-[var(--color-primary-500)] p-3 rounded-2xl">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white flex items-baseline gap-2">
                    Your Results <span className="font-normal text-xl opacity-80">آپ کے نتائج</span>
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">Trip cost breakdown | سفر کی قیمت میں تفصیل</p>
                </div>
              </div>
              
              {/* Cards Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                
                {/* Fuel Required */}
                <div className="bg-[#4ce077] rounded-2xl p-5 shadow-lg relative overflow-hidden group">
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-white/90 text-sm font-semibold">Fuel Required<br/><span className="font-normal">وقود درکار ہے</span></p>
                    <p className="text-3xl font-bold text-white mt-4">{result.fuel} {unit === 'Imperial' ? 'Gal' : 'L'}</p>
                  </div>
                  <svg className="absolute right-4 top-4 opacity-30 group-hover:scale-110 transition-transform" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M3 22v-8p2 2 0 0 1 2 2h4a2 2 0 0 1 2 2v8"></path><path d="M3 8V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.5"></path><rect x="7" y="5" width="10" height="6" rx="1"></rect><path d="M21 16v-2a2 2 0 0 0-2-2h-3"></path></svg>
                </div>
                
                {/* Total Cost */}
                <div className="bg-[#10b981] rounded-2xl p-5 shadow-lg relative overflow-hidden group">
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-white/90 text-sm font-semibold">Total Cost<br/><span className="font-normal">کل قیمت</span></p>
                    <p className="text-3xl font-bold text-white mt-4 flex items-baseline"><span className="text-xl mr-1">{currencySymbol}</span>{result.cost}</p>
                  </div>
                  <svg className="absolute right-4 top-4 opacity-30 group-hover:scale-110 transition-transform" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                
                {/* Cost per km/mi */}
                <div className="bg-[#0ea5e9] rounded-2xl p-5 shadow-lg relative overflow-hidden group">
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-white/90 text-sm font-semibold">Cost per {distLabel}<br/><span className="font-normal">قیمت {distLabel} فی</span></p>
                    <p className="text-3xl font-bold text-white mt-4 flex items-baseline"><span className="text-xl mr-1">{currencySymbol}</span>{result.costPerDistance}</p>
                  </div>
                  <svg className="absolute right-4 top-4 opacity-30 group-hover:scale-110 transition-transform" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                
                {/* Total Distance */}
                <div className="bg-[#f59e0b] rounded-2xl p-5 shadow-lg relative overflow-hidden group">
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-white/90 text-sm font-semibold">Total Distance<br/><span className="font-normal">کل فاصلہ</span></p>
                    <p className="text-3xl font-bold text-white mt-4">{result.totalDistance} <span className="text-xl">{distLabel}</span></p>
                  </div>
                  <svg className="absolute right-4 top-4 opacity-30 group-hover:scale-110 transition-transform" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2L2 22l10-4 10 4L12 2z"></path></svg>
                </div>
                
                {/* Consumption Rate */}
                <div className="bg-[#ef4444] rounded-2xl p-5 shadow-lg relative overflow-hidden group">
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-white/90 text-sm font-semibold">Consumption Rate<br/><span className="font-normal">استعمال کی شرح</span></p>
                    <p className="text-3xl font-bold text-white mt-4 leading-tight">{result.consumptionRate} <span className="text-lg">{unit === 'Imperial' ? 'Gal/100mi' : 'L/100km'}</span></p>
                  </div>
                  <svg className="absolute right-4 top-4 opacity-30 group-hover:scale-110 transition-transform" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                
                {/* Efficiency */}
                <div className="bg-[#6366f1] rounded-2xl p-5 shadow-lg relative overflow-hidden group">
                  <div className="relative z-10 flex flex-col h-full justify-between">
                    <p className="text-white/90 text-sm font-semibold">Efficiency<br/><span className="font-normal">کارکردگی</span></p>
                    <p className="text-3xl font-bold text-white mt-4">{result.efficiency} <span className="text-xl">{effLabel}</span></p>
                  </div>
                  <svg className="absolute right-4 top-4 opacity-30 group-hover:scale-110 transition-transform" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                </div>
                
              </div>
              
              {/* Summary Box */}
              <div className="bg-[#2a2a2f] rounded-2xl p-6 text-left border border-[#3a3a3f]">
                <p className="text-[var(--color-primary-500)] font-bold mb-2">Summary | <span className="font-normal text-sm">خلاصہ:</span></p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  For a {tripType.toLowerCase()} trip of <strong className="text-white">{result.totalDistance} {distLabel}</strong>, you'll need <strong className="text-white">{result.fuel} {unit === 'Imperial' ? 'Gal' : 'L'}</strong> of fuel. 
                  {price > 0 && <span> This will cost a total of <strong className="text-white">{currencySymbol}{result.cost}</strong> at a price of {currencySymbol}{price} per {priceLabel}.</span>}
                </p>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}