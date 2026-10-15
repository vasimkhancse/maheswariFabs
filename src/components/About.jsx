import React from 'react';
import { ShieldCheck, MapPin, Users, Award, CheckCircle, Factory, ArrowRight, Compass } from 'lucide-react';

export const About = () => {
  const [activePhoto, setActivePhoto] = React.useState('bay');

  const stats = [
    { value: "40+", label: "Years of Experience", sub: "Since 1983 in Coimbatore", icon: Award },
    { value: "4", label: "Core Processes", sub: "Laser, Bending, Press & Welding", icon: Factory },
    { value: "3,000+", label: "Sq. Ft. Facility", sub: "Adhavan Industrial Estate", icon: Compass },
    { value: "8", label: "Skilled Employees", sub: "Experienced Craftsmen & QC", icon: Users },
  ];

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
    <section id="about" className="py-24 bg-white relative overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Story and Experience */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-mono font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              Engineering Legacy Since 1983
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-slate-900 leading-tight">
              Built on Experience. <br />
              <span className="text-sky-600">Driven by Precision.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Since 1983, <strong>Maheswari Fabs</strong> has been providing reliable metal fabrication solutions in Coimbatore. With our dedicated 3,000 sq. ft. manufacturing facility and experienced team, we deliver quality components through precision CNC laser cutting, press brake bending, power pressing, and welding.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-sky-500 border border-slate-200/80 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span>Prime Industrial Hub in Chinnavedampatti</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Located at 81/2, Adhavan Industrial Estate, Chinnavedampatti, Coimbatore – 641049, our workshop is strategically connected to transport routes across Tamil Nadu and South India.
              </p>
            </div>

            {/* Industrial Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Strict Micron Dimensional Tolerances</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Rapid Prototyping to Mass Batch Run</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">Multi-Process Single-Vendor Sourcing</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700">In-House Quality Assurance & Inspection</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md"
              >
                <span>Contact Our Works</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase + Stats Card */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visual Photo Card with Real Facility Photos */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group bg-slate-950">
              <img
                src={activePhoto === 'bay' ? '/images/facility-exterior-gate.jpg' : '/images/plant-interior-shopfloor.jpg'}
                alt={activePhoto === 'bay' ? 'Maheswari Fabs Plant Interior Shop Floor Chinnavedampatti' : 'Maheswari Fabs Facility Exterior Works Entrance'}
                className="w-full h-80 sm:h-96 object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              
              {/* Photo View Switcher Toggle */}
              <div className="absolute top-4 right-4 z-10 flex bg-slate-900/80 backdrop-blur-md p-1 rounded-lg border border-slate-700/80 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setActivePhoto('bay')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activePhoto === 'bay' 
                      ? 'bg-sky-500 text-slate-950 font-bold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Works Entrance
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto('exterior')}
                  className={`px-3 py-1 rounded transition-colors ${
                    activePhoto === 'exterior' 
                      ? 'bg-sky-500 text-slate-950 font-bold' 
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  Shop Floor
                </button>
              </div>
            </div>

            {/* 4 Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-sky-300 transition-all hover:shadow-md text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1 font-mono">
                      {stat.sub}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default About;
