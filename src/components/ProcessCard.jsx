import React from 'react';
import { ArrowRight, Zap, Layers, Flame, Gauge, Wrench, Shield } from 'lucide-react';

const iconMap = {
  'laser-cutting': Zap,
  'bending': Layers,
  'power-press': Gauge,
  'welding': Flame,
};

export const ProcessCard = ({ process, index, onLearnMore, isSelected }) => {
  const IconComponent = iconMap[process.id] || Wrench;

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
    <div 
      id={`process-${process.id}`}
      className={`group relative bg-white rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between scroll-mt-28 ${
        isSelected 
          ? 'border-sky-500 ring-2 ring-sky-500 shadow-2xl shadow-sky-500/20 scale-[1.02]' 
          : 'border-slate-200/90 shadow-metal hover:shadow-metal-hover hover:-translate-y-1'
      }`}
    >
      {/* Top Image Box with Zoom Effect */}
      <div className="relative h-64 overflow-hidden bg-slate-900 cursor-pointer" onClick={() => onLearnMore(process)}>
        <img
          src={process.image}
          alt={`Maheswari Fabs ${process.title}`}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

       

        {/* Process Title Overlay on Image Bottom */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-black font-display uppercase tracking-tight text-white group-hover:text-sky-300 transition-colors">
            {process.title}
          </h3>
          <p className="text-xs font-mono text-slate-300 font-medium tracking-wide">
            {process.subtitle}
          </p>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div>
          {/* Short Description */}
          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            {process.shortDesc}
          </p>

          {/* Equipment & Capabilities Section */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-sky-500" />
              Equipment & Machine Specs:
            </h4>

            <div className="space-y-2">
              {process.specs.map((spec, i) => (
                <div 
                  key={i} 
                  className="bg-slate-50 hover:bg-sky-50/60 transition-colors border border-slate-200/70 rounded-lg px-3 py-2 text-xs flex items-start justify-between gap-2"
                >
                  <span className="text-slate-600 font-medium">{spec.label}</span>
                  <span className="font-mono font-bold text-slate-900 text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-2 flex items-center gap-3">
          <button
            onClick={() => onLearnMore(process)}
            className="flex-1 py-2.5 px-4 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group/btn"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1 text-sky-400" />
          </button>
          
          <button
            onClick={scrollToContact}
            className="py-2.5 px-4 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-500 hover:text-slate-950 text-xs font-bold uppercase tracking-wider transition-all duration-200 border border-sky-200 hover:border-sky-500"
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProcessCard;
