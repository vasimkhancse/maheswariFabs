import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Pause, Play } from 'lucide-react';

const BANNER_SLIDES = [
  {
    id: 'laser-cutting',
    title: 'LASER CUTTING',
    targetId: 'processes',
    image: '/images/laser-cutting.jpg',
    tag: 'Process 01'
  },
  {
    id: 'bending',
    title: 'BENDING',
    targetId: 'processes',
    image: '/images/bending.jpg',
    tag: 'Process 02'
  },
  {
    id: 'power-press',
    title: 'POWER PRESS',
    targetId: 'processes',
    image: '/images/power-press.jpg',
    tag: 'Process 03'
  },
  {
    id: 'welding',
    title: 'WELDING',
    targetId: 'processes',
    image: '/images/welding.jpg',
    tag: 'Process 04'
  }
];

export const Hero = ({ onSelectProcess }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const totalSlides = BANNER_SLIDES.length;

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }, 2000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides, currentSlide]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleProcessClick = (processId) => {
    if (onSelectProcess) {
      onSelectProcess(processId);
    } else {
      const el = document.getElementById('processes');
      if (el) {
        const topOffset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const current = BANNER_SLIDES[currentSlide];

  return (
    <section 
      id="home" 
      className="relative w-full h-[70vh] sm:h-[78vh] md:h-[84vh] bg-slate-950 text-white overflow-hidden mt-16 sm:mt-20 group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images Carousel */}
      {BANNER_SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          onClick={() => handleProcessClick(slide.id)}
          className={`absolute inset-0 cursor-pointer transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          {/* Full-width Realistic Industrial Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-[6000ms] ease-out group-hover:scale-105"
          />

          {/* Dark Vignette and Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/60" />

          {/* Clean Overlay Content: Only Process Name & Tag */}
          <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-end pb-16 sm:pb-24">
            <div className="space-y-2 max-w-3xl">
              
             

              {/* Only Process Name */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display uppercase tracking-tight text-white drop-shadow-lg leading-none hover:text-sky-300 transition-colors flex items-center gap-4">
                <span>{slide.title}</span>
                <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 text-sky-400 opacity-80 group-hover:translate-x-3 transition-transform" />
              </h1>
              
              <p className="text-xs sm:text-sm font-mono text-slate-300 uppercase tracking-widest pt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Click banner to view <strong>{slide.title}</strong> manufacturing specs & machinery</span>
              </p>

            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Carousel Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-950/60 hover:bg-sky-500 hover:text-slate-950 text-white border border-slate-700/80 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-slate-950/60 hover:bg-sky-500 hover:text-slate-950 text-white border border-slate-700/80 backdrop-blur-md flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-xl"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

    </section>
  );
};
export default Hero;
