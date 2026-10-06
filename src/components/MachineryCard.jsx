import React from 'react';

export const MachineryCard = ({ machine }) => {
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
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
      {/* Machinery Image Header */}
      <div className="relative h-48 bg-slate-900 overflow-hidden cursor-pointer" onClick={scrollToContact}>
        <img
          src={machine.image}
          alt={machine.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-700 text-sky-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded">
          {machine.category}
        </div>

        {/* Brand / Capacity Badge */}
        <div className="absolute top-3 right-3 bg-sky-500 text-slate-950 text-[11px] font-mono font-black px-2.5 py-1 rounded shadow">
          {machine.badge}
        </div>

        {/* Machine Name in Image */}
        <div className="absolute bottom-3 left-3 right-3">
          <span className="text-[11px] font-mono text-slate-300 block font-semibold">BRAND: {machine.brand}</span>
          <h3 className="text-lg font-bold font-display text-white group-hover:text-sky-300 transition-colors">
            {machine.name}
          </h3>
        </div>
      </div>

      {/* Machinery Specs Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Key Specs Box */}
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono font-bold text-slate-900 flex items-center justify-between">
            <span className="text-slate-500 font-sans font-medium text-[11px]">Specs:</span>
            <span className="text-sky-700">{machine.specs}</span>
          </div>

          <p className="text-xs text-slate-600 mt-3 leading-relaxed">
            {machine.details}
          </p>
        </div>

        {/* Machinery Status & Action */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] font-mono text-emerald-600 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Shop-Floor Ready
          </span>

          <button
            onClick={scrollToContact}
            className="text-xs font-bold font-mono text-sky-600 hover:text-sky-800 transition-colors uppercase"
          >
            Inquire Machine →
          </button>
        </div>
      </div>
    </div>
  );
};
export default MachineryCard;
