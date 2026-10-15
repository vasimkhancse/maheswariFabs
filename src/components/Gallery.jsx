import React, { useState, useEffect } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/galleryData';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = ['All', 'Laser Cutting', 'CNC Bending', 'Power Press', 'Facility'];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => {
        if (activeCategory === 'CNC Bending') {
          return item.category === 'CNC Bending' || item.category === 'Shearing & Cutting';
        }
        return item.category === activeCategory;
      });

  // Handle keyboard navigation for modal lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') setSelectedImageIndex(null);
      if (e.key === 'ArrowRight') {
        setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, filteredItems.length]);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 dark-blueprint-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-sky-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Camera className="w-3.5 h-3.5" />
              Shop Floor & Plant Archive
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white">
              Workshop & Facility Gallery
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl font-normal">
              Authentic on-site photographs of our CNC machinery, pressing equipment, and 3,000 sq. ft. fabrication works in Coimbatore.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setSelectedImageIndex(null);
                }}
                className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 shadow-lg hover:border-sky-500/50 hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                
              </div>

             
            </div>
          ))}
        </div>

        {/* Plant Transparency Guarantee */}
        <div className="mt-12 text-center border-t border-slate-800/80 pt-8">
          <p className="text-xs font-mono text-slate-400">
            All photographs displayed are taken directly on the shop floor of <strong className="text-sky-400 font-semibold">Maheswari Fabs</strong> at Chinnavedampatti, Coimbatore.
          </p>
        </div>

      </div>

      {/* Lightbox Fullscreen Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn select-none"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-sky-500/20 border border-sky-400/30 text-sky-400 text-xs font-mono font-bold uppercase">
                  {currentItem.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Photo {selectedImageIndex + 1} of {filteredItems.length}
                </span>
              </div>
              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Lightbox Image Container */}
            <div className="relative flex-1 bg-slate-950 flex items-center justify-center p-2 sm:p-4 overflow-hidden min-h-[320px] sm:min-h-[460px]">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[60vh] sm:max-h-[68vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
              />

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-sky-500 hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center transition-all shadow-xl"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-sky-500 hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center transition-all shadow-xl"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Modal Bar */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold font-display text-white">
                  {currentItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  {currentItem.desc}
                </p>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2">
                <a
                  href="#contact"
                  onClick={() => {
                    closeLightbox();
                    const el = document.getElementById('contact');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  Inquire Machine Specs
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
