import React from 'react';
import { Award, Crosshair, Cpu, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/companyData';

const iconMap = {
  Award: Award,
  Crosshair: Crosshair,
  Cpu: Cpu,
  CheckCircle2: CheckCircle2,
};

export const WhyChooseUs = () => {
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
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            Why Maheswari Fabs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-slate-900">
            Engineered for Reliability & Precision
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal">
            Four decades of customer trust backed by modern machinery, skilled craftsmanship, and single-source convenience in Coimbatore.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-7 border border-slate-200/90 shadow-metal hover:shadow-metal-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Decorative Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 text-sky-400 flex items-center justify-center mb-6 shadow-md group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors duration-300">
                    <Icon className="w-7 h-7 stroke-[2]" />
                  </div>

                  {/* Title & Checkmark */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sky-600 font-bold text-base">✓</span>
                    <h3 className="text-lg font-bold font-display uppercase tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  {/* Highlight pill */}
                  <div className="inline-block px-2.5 py-1 rounded bg-sky-50 text-sky-700 text-[11px] font-mono font-bold mb-3">
                    {item.highlight}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Tag */}
                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Advantage 0{idx + 1}</span>
                  <span className="text-sky-600 font-bold">100% Quality</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industrial Trust Bar */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-8 shadow-xl border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-xl font-bold font-display text-white uppercase">
              Ready to accelerate your sheet metal production?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Get direct engineering support and discussions directly from our manufacturing facility in Coimbatore.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="px-8 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md flex-shrink-0 flex items-center gap-2"
          >
            <span>Contact Us Directly</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
export default WhyChooseUs;
