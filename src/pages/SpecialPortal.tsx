import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Navbar, Footer } from '../App';
import { TrendingUp, BarChart3, PieChart, Coffee, Zap, Users, MapPin, CheckCircle2 } from 'lucide-react';

export default function SpecialPortal({ onLoginClick }: { onLoginClick: () => void }) {
  // Inputs
  const [footfall, setFootfall] = useState(3000);
  const [conversion, setConversion] = useState(3.0);
  const [avgPrice, setAvgPrice] = useState(17);
  const [days, setDays] = useState(22);
  const [cogs, setCogs] = useState(45);
  const [royalty, setRoyalty] = useState(5);
  const [rental, setRental] = useState(7);
  const [labour, setLabour] = useState(2000);
  const [investment, setInvestment] = useState(77000);

  // Derived
  const [cups, setCups] = useState(0);
  const [monthlyRev, setMonthlyRev] = useState(0);
  const [profit, setProfit] = useState(0);
  const [margin, setMargin] = useState(0);
  const [beDaily, setBeDaily] = useState(0);
  const [paybackMonths, setPaybackMonths] = useState<number | null>(null);

  useEffect(() => {
    const calculatedCups = Math.round(footfall * (conversion / 100));
    setCups(calculatedCups);

    const dailyRev = calculatedCups * avgPrice;
    const mRev = dailyRev * days;
    const cogsAmt = mRev * (cogs / 100);
    const royalAmt = mRev * (royalty / 100);
    const rentalAmt = mRev * (rental / 100);
    const calculatedProfit = mRev - cogsAmt - royalAmt - rentalAmt - labour;
    
    setMonthlyRev(mRev);
    setProfit(calculatedProfit);
    setMargin(mRev > 0 ? calculatedProfit / mRev : 0);

    const varPct = (cogs + royalty + rental) / 100;
    const contribPerCup = avgPrice * (1 - varPct);
    const calculatedBeDaily = contribPerCup > 0 ? Math.ceil(labour / (contribPerCup * days)) : 999;
    setBeDaily(calculatedBeDaily);

    if (calculatedProfit > 0) {
      setPaybackMonths(investment / calculatedProfit);
    } else {
      setPaybackMonths(null);
    }
  }, [footfall, conversion, avgPrice, days, cogs, royalty, rental, labour, investment]);

  const applyPreset = (f: number, l: number, r: number, d: number) => {
    setFootfall(f);
    setLabour(l);
    setRental(r);
    setDays(d);
    setConversion(3.0); // Reset to base conversion for presets
    setAvgPrice(17);
  };

  const rm = (n: number) => 'RM ' + Math.round(n).toLocaleString('en-MY');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLoginClick={onLoginClick} />
      
      <main className="pt-32 pb-24 px-6 max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-2 uppercase tracking-tighter">Kiosk Profit Calculator</h1>
          <p className="text-gray-500">Adjust footfall and conversion rates to project your coffee kiosk performance.</p>
        </header>

        {/* Presets */}
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Scenarios</span>
          <button onClick={() => applyPreset(1500, 1500, 7, 22)} className="px-6 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-khaki transition-all">Minimum</button>
          <button onClick={() => applyPreset(3000, 4000, 7, 22)} className="px-6 py-2 rounded-full bg-matte-black text-white text-sm font-medium shadow-lg transition-all">Ideal</button>
          <button onClick={() => applyPreset(3000, 6000, 9, 30)} className="px-6 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-khaki transition-all">Super Best</button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Revenue Drivers */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-gray-50">Revenue Drivers</h3>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>Daily Footfall</span>
                  <span className="text-khaki font-bold">{footfall.toLocaleString()} people</span>
                </div>
                <input 
                  type="range" min="100" max="10000" step="50" value={footfall}
                  onChange={(e) => setFootfall(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>Conversion Rate</span>
                  <span className="text-khaki font-bold">{conversion.toFixed(1)}%</span>
                </div>
                <input 
                  type="range" min="0.5" max="30" step="0.1" value={conversion}
                  onChange={(e) => setConversion(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>Avg Price / Cup</span>
                  <span className="text-khaki font-bold">RM {avgPrice.toFixed(2)}</span>
                </div>
                <input 
                  type="range" min="8" max="25" step="0.5" value={avgPrice}
                  onChange={(e) => setAvgPrice(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>Operating Days</span>
                  <span className="text-khaki font-bold">{days} days</span>
                </div>
                <input 
                  type="range" min="10" max="30" step="1" value={days}
                  onChange={(e) => setDays(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                />
              </div>
            </div>
          </div>

          {/* Cost Structure */}
          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-8 pb-4 border-b border-gray-50">Cost Structure</h3>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>COGS (%)</span>
                  <span className="text-khaki font-bold">{cogs}%</span>
                </div>
                <input 
                  type="range" min="20" max="70" step="1" value={cogs}
                  onChange={(e) => setCogs(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>Royalty (%)</span>
                  <span className="text-khaki font-bold">{royalty}%</span>
                </div>
                <input 
                  type="range" min="0" max="15" step="0.5" value={royalty}
                  onChange={(e) => setRoyalty(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>Rental (%)</span>
                  <span className="text-khaki font-bold">{rental}%</span>
                </div>
                <input 
                  type="range" min="0" max="25" step="1" value={rental}
                  onChange={(e) => setRental(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span>Labour & Utilities</span>
                  <span className="text-khaki font-bold">{rm(labour)}</span>
                </div>
                <input 
                  type="range" min="500" max="6000" step="100" value={labour}
                  onChange={(e) => setLabour(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-khaki"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Projected Cups</p>
            <p className="text-3xl font-bold">{cups} <span className="text-sm font-medium text-gray-400">/day</span></p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Monthly Revenue</p>
            <p className="text-3xl font-bold">{rm(monthlyRev)}</p>
          </div>
          <div className="bg-matte-black p-6 rounded-3xl shadow-xl text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Monthly Profit</p>
            <p className={`text-3xl font-bold ${profit < 0 ? 'text-red-400' : 'text-khaki'}`}>{rm(profit)}</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Net Margin</p>
            <p className={`text-3xl font-bold ${margin < 0 ? 'text-red-500' : 'text-matte-black'}`}>{(margin * 100).toFixed(1)}%</p>
          </div>
        </div>

        {/* Magic Number Banner */}
        <div className="bg-khaki/10 p-8 rounded-[2.5rem] border border-khaki/20 mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-khaki mb-1">Magic Break-Even Number</p>
            <p className="text-sm text-gray-600">Minimum cups per day needed to cover all monthly costs.</p>
          </div>
          <p className="text-4xl font-bold text-khaki">
            {beDaily < 999 ? beDaily : '—'} <span className="text-base">cups</span>
          </p>
        </div>

        {/* Payback Visualizer */}
        <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Payback Projection</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-gray-400 text-sm">Investment:</span>
                <input 
                  type="number" value={investment} 
                  onChange={(e) => setInvestment(parseInt(e.target.value) || 0)}
                  className="w-32 bg-transparent font-bold text-matte-black border-b border-gray-100 focus:border-khaki outline-none"
                />
              </div>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-matte-black">{paybackMonths ? paybackMonths.toFixed(1) : '∞'} <span className="text-base text-gray-400">months</span></p>
              <p className={`text-xs font-bold uppercase tracking-tight mt-1 ${paybackMonths && paybackMonths <= 12 ? 'text-green-500' : 'text-gray-400'}`}>
                {paybackMonths && paybackMonths <= 12 ? 'Excellent ROI (Year 1)' : paybackMonths && paybackMonths <= 24 ? 'Solid ROI (Year 2)' : 'Review Required'}
              </p>
            </div>
          </div>

          <div className="relative h-4 bg-gray-50 rounded-full overflow-hidden border border-gray-100 mb-4">
            <div 
              className={`absolute top-0 left-0 h-full transition-all duration-1000 ${paybackMonths && paybackMonths <= 12 ? 'bg-green-500' : paybackMonths && paybackMonths <= 24 ? 'bg-khaki' : 'bg-red-400'}`}
              style={{ width: `${paybackMonths ? Math.min(100, (paybackMonths / 36) * 100) : 0}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest px-1">
            <span>Start</span>
            <span>12 Mo</span>
            <span>24 Mo</span>
            <span>36 Mo (Finish)</span>
          </div>
        </div>

        {/* 3-Year Projection */}
        <div className="bg-matte-black p-12 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-khaki/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-10">3-Year Cumulative View</h3>
          
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Total Revenue</p>
              <p className="text-3xl font-bold">{rm(monthlyRev * 36)}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Total Profit</p>
              <p className="text-3xl font-bold text-khaki">{rm(profit * 36)}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Net Position</p>
              <p className="text-3xl font-bold">{rm(profit * 36 - investment)}</p>
              <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-tight">After recovering investment capital</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
