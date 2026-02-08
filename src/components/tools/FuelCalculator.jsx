'use client';

import { useState, useEffect } from 'react';

// Currency configurations
const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar' },
  EUR: { symbol: '€', name: 'Euro' },
  GBP: { symbol: '£', name: 'British Pound' },
  INR: { symbol: '₹', name: 'Indian Rupee' },
  AUD: { symbol: 'A$', name: 'Australian Dollar' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar' },
  JPY: { symbol: '¥', name: 'Japanese Yen' },
  CNY: { symbol: '¥', name: 'Chinese Yuan' },
  AED: { symbol: 'د.إ', name: 'UAE Dirham' },
  SAR: { symbol: 'ر.س', name: 'Saudi Riyal' },
  BRL: { symbol: 'R$', name: 'Brazilian Real' },
  MXN: { symbol: 'Mex$', name: 'Mexican Peso' },
  ZAR: { symbol: 'R', name: 'South African Rand' },
  CHF: { symbol: 'CHF', name: 'Swiss Franc' },
  SGD: { symbol: 'S$', name: 'Singapore Dollar' },
  KRW: { symbol: '₩', name: 'South Korean Won' },
  RUB: { symbol: '₽', name: 'Russian Ruble' },
  TRY: { symbol: '₺', name: 'Turkish Lira' },
  PKR: { symbol: '₨', name: 'Pakistani Rupee' },
  NGN: { symbol: '₦', name: 'Nigerian Naira' },
};

// Reusable calculation logic exported for use anywhere
export function calculateFuelMetrics(distance, efficiency, fuelPrice, unit = 'metric', tripType = 'oneway') {
  const totalDistance = tripType === 'roundtrip' ? distance * 2 : distance;
  
  // Calculate fuel required based on unit system
  const fuelRequired = totalDistance / efficiency;
  
  // Calculate costs
  const totalCost = fuelRequired * fuelPrice;
  const costPerUnit = totalCost / totalDistance;
  const fuelConsumptionRate = 100 / efficiency; // Fuel per 100 units

  return {
    fuelRequired: parseFloat(fuelRequired.toFixed(2)),
    totalCost: parseFloat(totalCost.toFixed(2)),
    costPerUnit: parseFloat(costPerUnit.toFixed(4)),
    totalDistance: parseFloat(totalDistance.toFixed(2)),
    fuelConsumptionRate: parseFloat(fuelConsumptionRate.toFixed(2)),
    unit: unit === 'metric' ? 'L' : 'gallons',
    distanceUnit: unit === 'metric' ? 'km' : 'miles',
    efficiencyUnit: unit === 'metric' ? 'km/L' : 'MPG'
  };
}

export default function FuelCalculator({ variant = 'general' }) {
  const [inputs, setInputs] = useState({
    distance: '',
    efficiency: '',
    fuelPrice: '',
    unit: 'metric', // metric (km/l) or imperial (mpg)
    vehicleType: 'car',
    tripType: 'oneway',
    currency: 'USD'
  });

  const [results, setResults] = useState(null);
  const [exchangeRates, setExchangeRates] = useState(null);
  const [loadingRates, setLoadingRates] = useState(true);
  const [ratesError, setRatesError] = useState(null);

  // Fetch currency exchange rates
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        setLoadingRates(true);
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        const data = await response.json();
        
        if (data.result === 'success') {
          setExchangeRates(data.rates);
          setRatesError(null);
        } else {
          throw new Error('Failed to fetch rates');
        }
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setRatesError('Unable to load exchange rates');
        // Set default rates as fallback
        setExchangeRates({ USD: 1 });
      } finally {
        setLoadingRates(false);
      }
    };

    fetchExchangeRates();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Auto-calculate on input change for better interactivity
  useEffect(() => {
    const distance = parseFloat(inputs.distance);
    const efficiency = parseFloat(inputs.efficiency);
    const fuelPrice = parseFloat(inputs.fuelPrice);

    if (distance > 0 && efficiency > 0 && fuelPrice > 0) {
      const calculatedResults = calculateFuelMetrics(
        distance,
        efficiency,
        fuelPrice,
        inputs.unit,
        inputs.tripType
      );

      setResults({
        ...calculatedResults,
        currencySymbol: CURRENCIES[inputs.currency].symbol,
        vehicleType: inputs.vehicleType,
        tripType: inputs.tripType
      });
    } else {
      setResults(null);
    }
  }, [inputs]);

  const resetCalculator = () => {
    setInputs({
      distance: '',
      efficiency: '',
      fuelPrice: '',
      unit: 'metric',
      vehicleType: 'car',
      tripType: 'oneway',
      currency: 'USD'
    });
    setResults(null);
  };

  return (
    <div className="fuel-calculator">
      <div className="w-full max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border-2 border-sky-100 dark:border-slate-700">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Left Panel - Inputs */}
          <div className="p-8 lg:p-10 overflow-y-auto bg-gradient-to-br from-sky-500 via-blue-600 to-cyan-600 dark:from-blue-900 dark:to-cyan-900">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl shadow-lg">
                ⛽
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Fuel Calculator</h2>
                <p className="text-blue-100 text-sm">Calculate your trip costs</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Unit & Currency Selection Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-3 text-white flex items-center gap-2">
                    <span>🌍</span>
                    Unit System
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setInputs(prev => ({ ...prev, unit: 'metric' }))}
                      className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                        inputs.unit === 'metric'
                          ? 'bg-white text-sky-600 shadow-xl scale-105'
                          : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                      }`}
                    >
                      Metric
                    </button>
                    <button
                      onClick={() => setInputs(prev => ({ ...prev, unit: 'imperial' }))}
                      className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                        inputs.unit === 'imperial'
                          ? 'bg-white text-sky-600 shadow-xl scale-105'
                          : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                      }`}
                    >
                      Imperial
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-white flex items-center gap-2">
                    <span>💱</span>
                    Currency {loadingRates && '⏳'}
                  </label>
                  <select
                    name="currency"
                    value={inputs.currency}
                    onChange={handleInputChange}
                    disabled={loadingRates}
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-4 focus:ring-white/50 transition-all disabled:opacity-50 shadow-lg"
                  >
                    {Object.entries(CURRENCIES).map(([code, { symbol, name }]) => (
                      <option key={code} value={code}>
                        {symbol} {code}
                      </option>
                    ))}
                  </select>
                  {ratesError && (
                    <p className="text-xs text-yellow-200 mt-2 flex items-center gap-1">
                      <span>⚠️</span> Using offline rates
                    </p>
                  )}
                </div>
              </div>

              {/* Trip Type */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white flex items-center gap-2">
                  <span>🔄</span>
                  Trip Type
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setInputs(prev => ({ ...prev, tripType: 'oneway' }))}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      inputs.tripType === 'oneway'
                        ? 'bg-white text-sky-600 shadow-xl scale-105'
                        : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    One Way
                  </button>
                  <button
                    onClick={() => setInputs(prev => ({ ...prev, tripType: 'roundtrip' }))}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      inputs.tripType === 'roundtrip'
                        ? 'bg-white text-sky-600 shadow-xl scale-105'
                        : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    Round Trip
                  </button>
                </div>
              </div>

              {/* Distance Input */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white flex items-center gap-2">
                  <span>📏</span>
                  Distance ({inputs.unit === 'metric' ? 'km' : 'miles'})
                </label>
                <input
                  type="number"
                  name="distance"
                  value={inputs.distance}
                  onChange={handleInputChange}
                  placeholder="Enter distance"
                  className="w-full px-5 py-4 rounded-xl bg-white/95 dark:bg-slate-700 text-slate-900 dark:text-white text-lg font-semibold focus:ring-4 focus:ring-white/50 transition-all shadow-lg placeholder:text-slate-400"
                />
              </div>

              {/* Fuel Efficiency */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white flex items-center gap-2">
                  <span>⚙️</span>
                  Fuel Efficiency ({inputs.unit === 'metric' ? 'km/L' : 'MPG'})
                </label>
                <input
                  type="number"
                  name="efficiency"
                  value={inputs.efficiency}
                  onChange={handleInputChange}
                  placeholder={inputs.unit === 'metric' ? 'e.g., 15' : 'e.g., 25'}
                  className="w-full px-5 py-4 rounded-xl bg-white/95 dark:bg-slate-700 text-slate-900 dark:text-white text-lg font-semibold focus:ring-4 focus:ring-white/50 transition-all shadow-lg placeholder:text-slate-400"
                />
              </div>

              {/* Fuel Price */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white flex items-center gap-2">
                  <span>💰</span>
                  Fuel Price ({CURRENCIES[inputs.currency]?.symbol || '$'} per {inputs.unit === 'metric' ? 'Liter' : 'Gallon'})
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 dark:text-slate-400 font-bold text-lg">
                    {CURRENCIES[inputs.currency]?.symbol || '$'}
                  </span>
                  <input
                    type="number"
                    name="fuelPrice"
                    value={inputs.fuelPrice}
                    onChange={handleInputChange}
                    placeholder={inputs.unit === 'metric' ? '1.50' : '3.50'}
                    step="0.01"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-white/95 dark:bg-slate-700 text-slate-900 dark:text-white text-lg font-semibold focus:ring-4 focus:ring-white/50 transition-all shadow-lg placeholder:text-slate-400"
                  />
                </div>
                {exchangeRates && inputs.currency !== 'USD' && inputs.fuelPrice && (
                  <p className="text-sm text-blue-100 mt-2 flex items-center gap-1">
                    <span>💱</span>
                    ≈ ${(parseFloat(inputs.fuelPrice) / exchangeRates[inputs.currency]).toFixed(2)} USD
                  </p>
                )}
              </div>

              {/* Vehicle Type */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white flex items-center gap-2">
                  <span>🚗</span>
                  Vehicle Type
                </label>
                <select
                  name="vehicleType"
                  value={inputs.vehicleType}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-xl bg-white/95 dark:bg-slate-700 text-slate-900 dark:text-white text-lg font-semibold focus:ring-4 focus:ring-white/50 transition-all shadow-lg"
                >
                  <option value="car">🚗 Car</option>
                  <option value="bike">🏍️ Motorcycle</option>
                  <option value="truck">🚚 Truck</option>
                  <option value="suv">🚙 SUV</option>
                </select>
              </div>

              {/* Reset Button */}
              <button
                onClick={resetCalculator}
                className="w-full bg-white/20 hover:bg-white/40 text-white font-bold py-4 rounded-xl transition-all duration-300 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span>🔄</span>
                <span>Reset Calculator</span>
              </button>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="p-8 lg:p-10 overflow-y-auto bg-gradient-to-br from-slate-50 to-sky-50 dark:from-slate-900 dark:to-slate-800">
            {results ? (
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-4xl shadow-xl">
                    📊
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Your Results</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">Trip cost breakdown</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-br from-sky-500 to-blue-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold opacity-90">Fuel Required</p>
                      <span className="text-2xl">⛽</span>
                    </div>
                    <p className="text-3xl font-extrabold">
                      {results.fuelRequired} {results.unit}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-emerald-500 to-green-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold opacity-90">Total Cost</p>
                      <span className="text-2xl">💰</span>
                    </div>
                    <p className="text-3xl font-extrabold">
                      {results.currencySymbol}{results.totalCost}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-violet-500 to-purple-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold opacity-90">Cost per {results.distanceUnit}</p>
                      <span className="text-2xl">📍</span>
                    </div>
                    <p className="text-3xl font-extrabold">
                      {results.currencySymbol}{results.costPerUnit}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold opacity-90">Total Distance</p>
                      <span className="text-2xl">📏</span>
                    </div>
                    <p className="text-3xl font-extrabold">
                      {results.totalDistance} {results.distanceUnit}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-rose-500 to-red-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold opacity-90">Consumption Rate</p>
                      <span className="text-2xl">⚡</span>
                    </div>
                    <p className="text-2xl font-extrabold">
                      {results.fuelConsumptionRate} {results.unit}/100{results.distanceUnit}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold opacity-90">Efficiency</p>
                      <span className="text-2xl">⚙️</span>
                    </div>
                    <p className="text-2xl font-extrabold">
                      {inputs.efficiency} {results.efficiencyUnit}
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-xl border-l-4 border-blue-500">
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong className="text-blue-600 dark:text-blue-400">Summary:</strong> For a {results.tripType === 'roundtrip' ? 'round trip' : 'one-way trip'} 
                    of <strong>{results.totalDistance} {results.distanceUnit}</strong> in your <strong>{results.vehicleType}</strong>, 
                    you'll need <strong>{results.fuelRequired} {results.unit}</strong> of fuel, 
                    costing <strong>{results.currencySymbol}{results.totalCost}</strong> at {results.currencySymbol}{inputs.fuelPrice} per {results.unit}.
                  </p>
                  {exchangeRates && inputs.currency !== 'USD' && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                      💱 Equivalent to <strong>${(results.totalCost / exchangeRates[inputs.currency]).toFixed(2)} USD</strong>
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📝</div>
                  <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-2">
                    Enter Your Details
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500">
                    Fill in the form to calculate fuel costs
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
