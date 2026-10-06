import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp, 
  MessageSquare, 
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO, PROCESSES } from '../data/companyData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
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
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Logo & Company Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="lg" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal pt-2">
              Established in {COMPANY_INFO.foundedYear}, <strong className="text-white font-semibold">Maheswari Fabs</strong> is a premier metal fabrication and precision engineering facility based in Coimbatore, specializing in laser cutting, CNC bending, power press forming, and certified welding.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-sky-400 font-bold">
                SINCE {COMPANY_INFO.foundedYear}
              </span>
              <span>•</span>
              <span className="text-slate-300">Coimbatore, Tamil Nadu</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button 
                  onClick={() => scrollTo('home')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('about')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('processes')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  <span>Our Processes</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('machinery')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  <span>Machinery Fleet</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('why-us')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  <span>Why Choose Us</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('workflow')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  <span>Workflow & QC</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('contact')}
                  className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-sky-500" />
                  <span>Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Processes (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold border-b border-slate-800 pb-2">
              Manufacturing Processes
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PROCESSES.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => scrollTo('processes')}
                    className="text-left group flex items-start gap-2 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 group-hover:scale-125 transition-transform flex-shrink-0"></span>
                    <div>
                      <span className="font-bold text-slate-300 group-hover:text-sky-400">{p.title}</span>
                      <span className="block text-[11px] text-slate-500 font-mono">{p.subtitle}</span>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold border-b border-slate-800 pb-2">
              Facility Address
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300 leading-relaxed">
                  <strong>Maheswari Fabs</strong><br />
                  81/2, Adhavan Industrial Estate,<br />
                  Chinnavedampatti,<br />
                  Coimbatore – 641049, Tamil Nadu
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-300 hover:text-white font-mono">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white font-mono">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-emerald-700/80 hover:bg-emerald-600 text-white text-[11px] font-mono font-bold flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-[11px] font-mono font-bold flex items-center gap-1.5 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-slate-900 bg-slate-950/90 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500 text-center sm:text-left">
            © 2026 Maheswari Fabs. All Rights Reserved. Precision Metal Fabrication, Coimbatore.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-600 font-mono">Precision • Strength • Quality</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
              <span className="text-[10px] font-mono uppercase">Top</span>
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
export default Footer;
