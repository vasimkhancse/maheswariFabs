import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import MachineryCard from './MachineryCard';
import { MACHINERY_LIST } from '../data/companyData';

export const MachinerySection = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Laser Cutting', 'Bending', 'Power Press', 'Welding'];

  const filteredMachinery = filter === 'All' 
    ? MACHINERY_LIST 
    : MACHINERY_LIST.filter(m => m.category === filter);

  return (
    <section id="machinery" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background blueprint subtle pattern */}
      <div className="absolute inset-0 dark-blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Cpu className="w-3.5 h-3.5" />
              Heavy Industrial Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white">
              Machinery & Equipment Showcase
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
              Precision-driven Japanese & European standard machinery capable of handling heavy plate thickness, complex geometry, and volume manufacturing.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 ${
                  filter === cat
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Machinery Grid (8 Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMachinery.map((machine) => (
            <MachineryCard
              key={machine.id}
              machine={machine}
            />
          ))}
        </div>

        {/* Technical Capacity Summary Bar */}
        <div className="mt-12 bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-3 border-r border-slate-700/50 last:border-0">
            <span className="text-xs font-mono text-slate-400 block uppercase">Max Laser Power</span>
            <span className="text-xl sm:text-2xl font-black font-display text-sky-400">12 kW Fiber</span>
          </div>
          <div className="p-3 border-r border-slate-700/50 last:border-0">
            <span className="text-xs font-mono text-slate-400 block uppercase">Max Bending Force</span>
            <span className="text-xl sm:text-2xl font-black font-display text-white">250 Tonnes</span>
          </div>
          <div className="p-3 border-r border-slate-700/50 last:border-0">
            <span className="text-xs font-mono text-slate-400 block uppercase">Max Bed Length</span>
            <span className="text-xl sm:text-2xl font-black font-display text-sky-400">3000 mm</span>
          </div>
          <div className="p-3">
            <span className="text-xs font-mono text-slate-400 block uppercase">Spot Welding</span>
            <span className="text-xl sm:text-2xl font-black font-display text-white">2 + 2 mm</span>
          </div>
        </div>

      </div>
    </section>
  );
};
export default MachinerySection;
