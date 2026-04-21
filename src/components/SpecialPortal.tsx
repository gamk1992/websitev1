import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function SpecialPortal() {
  const [cups, setCups] = useState(90);
  const [price, setPrice] = useState(15);
  const [rent, setRent] = useState(2500);
  const [labor, setLabor] = useState(3500);
  
  const days = 26;
  const cogsPct = 0.35;
  const royaltyPct = 0.05;
  const setupCost = 85000;

  const monthlyRev = cups * price * days;
  const totalCOGS = monthlyRev * cogsPct;
  const totalRoyalty = monthlyRev * royaltyPct;
  const monthlyProfit = monthlyRev - (rent + labor + totalCOGS + totalRoyalty);
  const margin = monthlyRev > 0 ? (monthlyProfit / monthlyRev) * 100 : 0;
  const beCups = Math.ceil((rent + labor) / (price * (1 - cogsPct - royaltyPct) * days));
  const payback = monthlyProfit > 0 ? (setupCost / monthlyProfit).toFixed(1) : "∞";

  return (
    <div className="min-h-screen bg-[#FDFCFB] p-8 pt-32">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-[#634832] italic serif">Monti Partner Dashboard</h1>
          <p className="text-xs uppercase tracking-widest opacity-50">Growth & Simulation Intelligence</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inputs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
              <h2 className="text-xs font-bold uppercase mb-6 opacity-40">Revenue Drivers</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2 text-sm"><span>Daily Cups</span><span className="font-bold">{cups}</span></div>
                  <input type="range" min="30" max="300" value={cups} onChange={(e) => setCups(parseInt(e.target.value))} className="w-full accent-[#634832]" />
                </div>
                <div>
                  <div className="flex justify-between mb-2 text-sm"><span>Price/Cup (RM)</span><span className="font-bold">{price}</span></div>
                  <input type="range" min="8" max="25" step="0.5" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))} className="w-full accent-[#634832]" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
              <h2 className="text-xs font-bold uppercase mb-6 opacity-40">Fixed Costs</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span>Monthly Rent</span>
                  <input type="number" value={rent} onChange={(e) => setRent(parseInt(e.target.value))} className="bg-stone-50 rounded px-2 py-1 w-24 text-right outline-none border border-stone-100" />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Staff & Utilities</span>
                  <input type="number" value={labor} onChange={(e) => setLabor(parseInt(e.target.value))} className="bg-stone-50 rounded px-2 py-1 w-24 text-right outline-none border border-stone-100" />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#634832] text-white p-8 rounded-3xl col-span-2">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">Estimated Monthly Profit</p>
                <h3 className="text-5xl font-bold">RM {Math.round(monthlyProfit).toLocaleString()}</h3>
              </div>
              <div className="bg-[#F4F1EE] p-6 rounded-3xl">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Net Margin</p>
                <h3 className="text-3xl font-bold text-[#634832]">{Math.round(margin)}%</h3>
              </div>
              <div className="bg-[#F4F1EE] p-6 rounded-3xl">
                <p className="text-[10px] uppercase tracking-widest opacity-60 mb-1">Break-Even Point</p>
                <h3 className="text-3xl font-bold text-[#634832]">{beCups}</h3>
                <p className="text-[10px] opacity-40">cups per day</p>
              </div>
            </div>

            <div className="bg-white border border-stone-100 p-6 rounded-2xl flex justify-between items-center shadow-sm">
              <div>
                <h4 className="text-sm font-bold">Capital Payback Period</h4>
                <p className="text-[10px] opacity-50 uppercase tracking-tighter">Based on RM {setupCost.toLocaleString()} initial investment</p>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-[#634832]">{payback}</span>
                <span className="text-xs ml-1 opacity-50 font-bold uppercase">Months</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
