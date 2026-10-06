import React, { useState } from 'react';
import { Layers, ShieldCheck, X, CheckCircle2, ArrowRight } from 'lucide-react';
import ProcessCard from './ProcessCard';
import { PROCESSES } from '../data/companyData';

export const ProcessSection = ({ activeProcessId, onClearActiveProcess }) => {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [highlightedId, setHighlightedId] = useState(null);

  React.useEffect(() => {
    if (activeProcessId) {
      setHighlightedId(activeProcessId);
      const timer = setTimeout(() => {
        setHighlightedId(null);
        if (onClearActiveProcess) onClearActiveProcess();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeProcessId]);

  const handleClose = () => {
    setSelectedProcess(null);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="processes" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blueprint subtle mesh */}
      <div className="absolute inset-0 blueprint-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-mono font-bold tracking-wider uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight uppercase">
            Our Manufacturing Processes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Complete metal fabrication solutions under one roof. From raw sheet cutting to formed assemblies and certified welding.
          </p>
        </div>

        {/* Process Cards Grid (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROCESSES.map((process, index) => (
            <ProcessCard
              key={process.id}
              process={process}
              index={index}
              isSelected={highlightedId === process.id}
              onLearnMore={(proc) => setSelectedProcess(proc)}
            />
          ))}
        </div>

        {/* Quality Guarantee Callout */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display text-white">Need Custom Fabrication or Batch Production?</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Send us your drawings or job requirements. Our Coimbatore workshop delivers high accuracy and rapid turnaround.
              </p>
            </div>
          </div>
          <button
            onClick={scrollToContact}
            className="flex-shrink-0 px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md flex items-center gap-2"
          >
            <span>Contact Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Process Deep Dive Modal */}
      {selectedProcess && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
          onClick={handleClose}
        >
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Modal Header */}
            <div className="relative h-48 bg-slate-900 flex-shrink-0">
              <img
                src={selectedProcess.image}
                alt={selectedProcess.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/80 text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider block">
                  Maheswari Fabs Capability
                </span>
                <h3 className="text-2xl font-black font-display uppercase text-white">
                  {selectedProcess.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider mb-2">Overview</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedProcess.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider mb-2">Machinery & Specifications</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProcess.specs.map((spec, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs flex justify-between">
                      <span className="text-slate-600 font-medium">{spec.label}</span>
                      <span className="font-mono font-bold text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider mb-2">Key Advantages</h4>
                <div className="space-y-2">
                  {selectedProcess.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl flex items-center justify-between text-xs">
                <span className="font-semibold text-sky-900">Standard Tolerances: <strong className="font-mono text-sky-700">{selectedProcess.tolerances}</strong></span>
                <span className="text-slate-500 font-mono">Chinnavedampatti Plant</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3 flex-shrink-0">
              <button
                onClick={handleClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  handleClose();
                  scrollToContact();
                }}
                className="px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow"
              >
                Inquire For {selectedProcess.title}
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
export default ProcessSection;
