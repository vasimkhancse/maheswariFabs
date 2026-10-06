import React from 'react';

export const Logo = ({ 
  variant = 'default', // 'default', 'dark', 'light' 
  size = 'md', // 'sm', 'md', 'lg'
  showTagline = true 
}) => {
  const isDark = variant === 'dark';
  
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', title: 'text-base font-bold tracking-wider', sub: 'text-[9px] tracking-widest' },
    md: { icon: 'w-9 h-9', title: 'text-xl font-extrabold tracking-wider', sub: 'text-[10px] tracking-widest font-medium' },
    lg: { icon: 'w-12 h-12', title: 'text-2xl font-black tracking-widest', sub: 'text-xs tracking-widest font-semibold' }
  }[size] || { icon: 'w-9 h-9', title: 'text-xl font-extrabold tracking-wider', sub: 'text-[10px] tracking-widest font-medium' };

  return (
    <div className="flex items-center gap-3 select-none group cursor-pointer">
      {/* Industrial Geometric Logo Mark */}
      <div className={`relative ${sizeClasses.icon} flex-shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Base Metal Plate */}
          <rect x="2" y="2" width="44" height="44" rx="8" className={isDark ? "fill-slate-900 stroke-slate-700" : "fill-slate-900 stroke-slate-800"} strokeWidth="2" />
          
          {/* Subtle Grid / Machine Alignment Marks */}
          <line x1="2" y1="24" x2="6" y2="24" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
          <line x1="42" y1="24" x2="46" y2="24" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
          <line x1="24" y1="2" x2="24" y2="6" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
          <line x1="24" y1="42" x2="24" y2="46" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
          
          {/* Geometric 'M' Fabrication & Bending Profile */}
          <path 
            d="M12 36V14L24 27L36 14V36" 
            stroke="#ffffff" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Precision Laser Cut Beam (Sky Blue) */}
          <path 
            d="M12 25H36" 
            stroke="#38bdf8" 
            strokeWidth="2.5" 
            strokeDasharray="2 3"
            strokeLinecap="round" 
          />
          
          {/* Laser Focal Point Spark */}
          <circle cx="24" cy="25" r="3.5" fill="#f59e0b" className="animate-pulse" />
          <circle cx="24" cy="25" r="1.5" fill="#ffffff" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center leading-tight">
        <span className={`font-display uppercase ${sizeClasses.title} ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-brand-blue transition-colors`}>
          MAHESWARI <span className="text-sky-500">FABS</span>
        </span>
        {showTagline && (
          <span className={`uppercase font-sans ${sizeClasses.sub} ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Precision Metal Engineering
          </span>
        )}
      </div>
    </div>
  );
};
export default Logo;
