import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, ArrowRight, Shield, Clock } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyData';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'processes', 'about', 'machinery', 'why-us', 'workflow', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 160 && rect.bottom >= 160;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Processes', href: '#processes' },
    { name: 'Machinery', href: '#machinery' },
    // { name: 'Why Us', href: '#why-us' },
    // { name: 'Workflow', href: '#workflow' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Industrial Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800 py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <Shield className="w-3.5 h-3.5" />
              Serving Precision Engineering Since {COMPANY_INFO.foundedYear} ({COMPANY_INFO.experienceYears} Exp.)
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              Chinnavedampatti, Coimbatore, Tamil Nadu
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-mono">{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 flex items-center gap-1">
              <Clock className="w-3 h-3 text-emerald-400" />
              Facility Open
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-3 border-b border-slate-800/80' 
            : 'bg-slate-900/90 backdrop-blur-sm py-4 border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
              <Logo variant="dark" size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-semibold tracking-wide transition-all relative py-1 ${
                      isActive 
                        ? 'text-sky-400 font-bold' 
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400 rounded-full shadow-glow-sky" />
                    )}
                  </a>
                );
              })}
            </div>

            {/* Right Action Button - Direct Contact */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                id="navbar-contact-btn"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-3">
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/80 focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-sky-400 hover:bg-slate-800/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800 mt-2 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2"
                >
                  <span>Contact Our Works</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="text-xs text-slate-400 text-center flex items-center justify-center gap-2 mt-1">
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call: {COMPANY_INFO.phone}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Navbar;
