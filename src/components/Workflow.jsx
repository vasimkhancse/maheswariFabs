import React, { useState } from 'react';
import { 
  ClipboardList, 
  FileCode2, 
  Zap, 
  Layers, 
  Flame, 
  ShieldCheck, 
  Truck, 
  GitCommit,
  CheckCircle2
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/companyData';

const stepIcons = {
  ClipboardList: ClipboardList,
  FileCode2: FileCode2,
  Zap: Zap,
  Layers: Layers,
  Flame: Flame,
  ShieldCheck: ShieldCheck,
  Truck: Truck
};

export const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="workflow" className="py-24 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <GitCommit className="w-3.5 h-3.5 text-sky-600" />
            End-To-End Manufacturing Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-slate-900">
            Our Production Workflow
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
            A streamlined 7-stage engineering pipeline engineered for zero-defect output and on-time delivery.
          </p>
        </div>

        {/* Desktop Horizontal Workflow Timeline */}
        <div className="relative hidden xl:block mb-12">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-7 h-1 bg-slate-200 z-0">
            <div 
              className="h-full bg-gradient-to-r from-sky-400 to-blue-600 transition-all duration-500 rounded-full"
              style={{ width: `${(activeStep / (WORKFLOW_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-7 gap-4 relative z-10">
            {WORKFLOW_STEPS.map((item, idx) => {
              const Icon = stepIcons[item.icon] || Zap;
              const isPassed = idx <= activeStep;
              const isCurrent = idx === activeStep;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center text-center cursor-pointer group transition-all duration-300 p-2 rounded-xl ${
                    isCurrent ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  {/* Step Circle */}
                  <div 
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 shadow-md ${
                      isCurrent
                        ? 'bg-sky-500 text-slate-950 ring-4 ring-sky-200 shadow-lg'
                        : isPassed
                        ? 'bg-slate-900 text-sky-400'
                        : 'bg-white text-slate-400 border-2 border-slate-200 group-hover:border-sky-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Step Number */}
                  <span className={`text-[11px] font-mono font-bold mt-4 mb-1 transition-colors ${
                    isCurrent ? 'text-sky-600' : 'text-slate-400'
                  }`}>
                    STAGE {item.step}
                  </span>

                  {/* Title */}
                  <h4 className={`text-xs font-bold font-display uppercase tracking-tight ${
                    isCurrent ? 'text-slate-900 font-extrabold' : 'text-slate-700'
                  }`}>
                    {item.title}
                  </h4>

                  {/* Short description */}
                  <p className="text-[11px] text-slate-500 leading-tight mt-1.5 line-clamp-3">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Responsive Timeline */}
        <div className="xl:hidden relative pl-6 border-l-2 border-sky-400 space-y-8 my-8 ml-4">
          {WORKFLOW_STEPS.map((item, idx) => {
            const Icon = stepIcons[item.icon] || Zap;
            return (
              <div key={idx} className="relative group">
                {/* Timeline Dot / Icon */}
                <div className="absolute -left-[37px] top-0 w-8 h-8 rounded-full bg-slate-900 text-sky-400 border-2 border-sky-400 flex items-center justify-center text-xs font-bold shadow">
                  <Icon className="w-4 h-4" />
                </div>

                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-mono font-bold text-sky-600">STEP {item.step}</span>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Maheswari Quality Track</span>
                  </div>
                  <h4 className="text-base font-bold font-display uppercase text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Highlight Box (For interactive deep focus) */}
        <div className="hidden xl:block mt-8 p-5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse"></span>
            <span className="text-xs font-mono text-slate-600">
              Active Focus: <strong className="text-slate-900 font-bold uppercase">{WORKFLOW_STEPS[activeStep].step} — {WORKFLOW_STEPS[activeStep].title}</strong>
            </span>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            Full In-House QA Inspection at every stage
          </span>
        </div>

      </div>
    </section>
  );
};
export default Workflow;
