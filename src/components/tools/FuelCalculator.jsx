'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/icon';

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

  const handleCalculate = () => {
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
      alert('Please fill in all required fields with valid values');
      setResults(null);
    }
  };

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
      <div className="w-full max-w-7xl mx-auto bg-surface dark:bg-background rounded-3xl shadow-2xl overflow-hidden border-2 border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Left Panel - Inputs */}
          <div className="p-8 lg:p-10 overflow-y-auto bg-primary dark:bg-background">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Icon name="fuel" className="w-10 h-10 text-white dark:text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Fuel Calculator <span className="text-sm text-accent">ایندھن کیلکولیٹر</span></h2>
                <p className="text-accent text-sm">Calculate your trip costs | سفر کی لاگت کا حساب لگائیں</p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Unit & Currency Selection Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-3 text-white dark:text-white flex items-center gap-2">
                    <Icon name="gauge" className="w-4 h-4 text-white" />
                    Unit System | یونٹ سسٹم
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setInputs(prev => ({ ...prev, unit: 'metric' }))}
                      className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                        inputs.unit === 'metric'
                          ? 'bg-white text-primary shadow-xl scale-105'
                          : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                      }`}
                    >
                      Metric
                    </button>
                    <button
                      onClick={() => setInputs(prev => ({ ...prev, unit: 'imperial' }))}
                      className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                        inputs.unit === 'imperial'
                          ? 'bg-white text-primary shadow-xl scale-105'
                          : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                      }`}
                    >
                      Imperial
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-3 text-white dark:text-white flex items-center gap-2">
                    <Icon name="dollar-sign" className="w-4 h-4 text-white" />
                    Currency {loadingRates && <Icon name="clock" className="w-4 h-4 animate-spin text-white" />} | کرینسی
                  </label>
                  <select
                    name="currency"
                    value={inputs.currency}
                    onChange={handleInputChange}
                    disabled={loadingRates}
                    className="w-full px-4 py-3 rounded-xl text-sm font-medium bg-white dark:bg-surface text-gray-900 dark:text-foreground focus:ring-4 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background transition-all disabled:opacity-50 shadow-lg"
                  >
                    {Object.entries(CURRENCIES).map(([code, { symbol, name }]) => (
                      <option key={code} value={code}>
                        {symbol} {code}
                      </option>
                    ))}
                  </select>
                  {ratesError && (
                    <p className="text-xs text-yellow-200 mt-2 flex items-center gap-1">
                      <Icon name="alert-triangle" className="w-4 h-4" /> Using offline rates
                    </p>
                  )}
                </div>
              </div>

              {/* Trip Type */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white dark:text-white flex items-center gap-2">
                  <Icon name="route" className="w-4 h-4 text-white" />
                  Trip Type | سفر کی قسم
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setInputs(prev => ({ ...prev, tripType: 'oneway' }))}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      inputs.tripType === 'oneway'
                        ? 'bg-white text-primary shadow-xl scale-105'
                        : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    One Way
                  </button>
                  <button
                    onClick={() => setInputs(prev => ({ ...prev, tripType: 'roundtrip' }))}
                    className={`flex-1 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                      inputs.tripType === 'roundtrip'
                        ? 'bg-white text-primary shadow-xl scale-105'
                        : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                    }`}
                  >
                    Round Trip
                  </button>
                </div>
              </div>

              {/* Distance Input */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white dark:text-white flex items-center gap-2">
                  <Icon name="route" className="w-4 h-4 text-white" />
                  Distance ({inputs.unit === 'metric' ? 'km' : 'miles'}) | فاصلہ
                </label>
                <input
                  type="number"
                  name="distance"
                  value={inputs.distance}
                  onChange={handleInputChange}
                  placeholder="Enter distance"
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-surface text-gray-900 dark:text-foreground text-lg font-semibold focus:ring-4 focus:ring-primary dark:focus:ring-primary transition-all shadow-lg placeholder:text-gray-500 dark:placeholder:text-secondary-foreground"
                />
              </div>

              {/* Fuel Efficiency */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white dark:text-white flex items-center gap-2">
                  <Icon name="gauge" className="w-4 h-4 text-white" />
                  Fuel Efficiency ({inputs.unit === 'metric' ? 'km/L' : 'MPG'}) | ایندھن کی کارکردگی
                </label>
                <input
                  type="number"
                  name="efficiency"
                  value={inputs.efficiency}
                  onChange={handleInputChange}
                  placeholder={inputs.unit === 'metric' ? 'e.g., 15' : 'e.g., 25'}
                  className="w-full px-5 py-4 rounded-xl bg-white dark:bg-surface text-gray-900 dark:text-foreground text-lg font-semibold focus:ring-4 focus:ring-primary dark:focus:ring-primary transition-all shadow-lg placeholder:text-gray-500 dark:placeholder:text-secondary-foreground"
                />
              </div>

              {/* Fuel Price */}
              <div>
                <label className="block text-sm font-bold mb-3 text-white dark:text-white flex items-center gap-2">
                  <Icon name="dollar-sign" className="w-4 h-4 text-white" />
                  Fuel Price ({CURRENCIES[inputs.currency]?.symbol || '$'} per {inputs.unit === 'metric' ? 'Liter' : 'Gallon'}) | ایندھن کی قیمت
                </label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-700 dark:text-secondary-foreground font-bold text-lg">
                    {CURRENCIES[inputs.currency]?.symbol || '$'}
                  </span>
                  <input
                    type="number"
                    name="fuelPrice"
                    value={inputs.fuelPrice}
                    onChange={handleInputChange}
                    placeholder={inputs.unit === 'metric' ? '1.50' : '3.50'}
                    step="0.01"
                    className="w-full pl-12 pr-5 py-4 rounded-xl bg-white dark:bg-surface text-gray-900 dark:text-foreground text-lg font-semibold focus:ring-4 focus:ring-primary dark:focus:ring-primary transition-all shadow-lg placeholder:text-gray-500 dark:placeholder:text-secondary-foreground"
                  />
                </div>
                {exchangeRates && inputs.currency !== 'USD' && inputs.fuelPrice && (
                  <p className="text-sm text-accent mt-2 flex items-center gap-1">
                    <Icon name="dollar-sign" className="w-4 h-4" />
                    ≈ ${(parseFloat(inputs.fuelPrice) / exchangeRates[inputs.currency]).toFixed(2)} USD
                  </p>
                )}
              </div>

             
              {/* Calculate and Reset Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleCalculate}
                  className="w-full bg-white hover:bg-gray-100 text-primary font-bold py-4 rounded-xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2 hover:shadow-2xl"
                >
                  <Icon name="calculator" className="w-5 h-5" />
                  <span>Calculate</span>
                </button>
                <button
                  onClick={resetCalculator}
                  className="w-full bg-white/20 hover:bg-white/40 text-white font-bold py-4 rounded-xl transition-all duration-300 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  <Icon name="x" className="w-5 h-5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - Results */}
          <div className="p-8 lg:p-10 overflow-y-auto bg-surface dark:bg-background">
            {results ? (
              <div className="h-full flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-green-500 flex items-center justify-center shadow-xl">
                    <Icon name="bar-chart" className="w-10 h-10 text-white dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-foreground">Your Results <span className="text-sm text-secondary-foreground">آپ کے نتائج</span></h3>
                    <p className="text-secondary-foreground text-sm">Trip cost breakdown | سفر کی قیمت میں تفصیل</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-primary p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-bold opacity-90">Fuel Required</p>
                        <p className="text-xs opacity-75">وقود درکار ہے</p>
                      </div>
                      <Icon name="fuel" className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-3xl font-extrabold">
                      {results.fuelRequired} {results.unit}
                    </p>
                  </div>

                  <div className="bg-green-500 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-bold opacity-90">Total Cost</p>
                        <p className="text-xs opacity-75">کل قیمت</p>
                      </div>
                      <Icon name="dollar-sign" className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-3xl font-extrabold">
                      {results.currencySymbol}{results.totalCost}
                    </p>
                  </div>

                  <div className="bg-cyan-500 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-bold opacity-90">Cost per {results.distanceUnit}</p>
                        <p className="text-xs opacity-75">فی {results.distanceUnit} قیمت</p>
                      </div>
                      <Icon name="map-pin" className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-3xl font-extrabold">
                      {results.currencySymbol}{results.costPerUnit}
                    </p>
                  </div>

                  <div className="bg-amber-500 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-bold opacity-90">Total Distance</p>
                        <p className="text-xs opacity-75">کل فاصلہ</p>
                      </div>
                      <Icon name="route" className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-3xl font-extrabold">
                      {results.totalDistance} {results.distanceUnit}
                    </p>
                  </div>

                  <div className="bg-red-500 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-bold opacity-90">Consumption Rate</p>
                        <p className="text-xs opacity-75">استعمال کی شرح</p>
                      </div>
                      <Icon name="zap" className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-2xl font-extrabold">
                      {results.fuelConsumptionRate} {results.unit}/100{results.distanceUnit}
                    </p>
                  </div>

                  <div className="bg-indigo-500 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-sm font-bold opacity-90">Efficiency</p>
                        <p className="text-xs opacity-75">کارکردگی</p>
                      </div>
                      <Icon name="gauge" className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-2xl font-extrabold">
                      {inputs.efficiency} {results.efficiencyUnit}
                    </p>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-4 p-4 bg-muted rounded-xl border-l-4 border-primary">
                  <p className="text-sm text-foreground leading-relaxed">
                   
                    <strong className="text-primary">Summary | خلاصہ: </strong> <br/>For a {results.tripType === 'roundtrip' ? 'round trip ' : 'one-way trip '} 
                    of <strong>{results.totalDistance} {results.distanceUnit}</strong> in your <strong>{results.vehicleType}</strong>, 
                    you'll need <strong>{results.fuelRequired} {results.unit}</strong> of fuel, 
                    costing <strong>{results.currencySymbol}{results.totalCost}</strong> at {results.currencySymbol}{inputs.fuelPrice} per {results.unit}.
                  </p>
                
                  {exchangeRates && inputs.currency !== 'USD' && (
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 flex items-center gap-1">
                      <Icon name="dollar-sign" className="w-3 h-3" /> Equivalent to <strong>${(results.totalCost / exchangeRates[inputs.currency]).toFixed(2)} USD</strong>
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <Icon name="pencil" className="w-24 h-24 text-gray-300 dark:text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-500 mb-2">
                    Enter Your Details | اپنی تفصیلات درج کریں
                  </h3>
                  <p className="text-gray-400 dark:text-gray-500">
                    Fill in the form to calculate fuel costs | ایندھن کی لاگت کا حساب لگانے کے لیے فارم بھریں
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
