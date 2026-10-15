import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProcessSection from './components/ProcessSection';
import About from './components/About';
import MachinerySection from './components/MachinerySection';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Phone } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

function App() {
  const [selectedProcessId, setSelectedProcessId] = React.useState(null);

  const handleSelectProcess = (processId) => {
    setSelectedProcessId(processId);
    // Smooth scroll to the specific process card or section
    setTimeout(() => {
      const target = document.getElementById(`process-${processId}`) || document.getElementById('processes');
      if (target) {
        const topOffset = 85;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-sky-500 selection:text-slate-950">
      
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero 1-by-1 Minimalist Carousel Banner */}
        <Hero onSelectProcess={handleSelectProcess} />
        
        <About />

        {/* 2. Process Section (4 Process Cards) */}
        <ProcessSection 
          activeProcessId={selectedProcessId}
          onClearActiveProcess={() => setSelectedProcessId(null)}
        />

        {/* 3. Machinery Showcase Section (Filters & Welding) */}
        <MachinerySection />

        {/* 4. Workshop & Plant Gallery Showcase */}
        <Gallery />

        {/* 5. Why Choose Us (4 Feature Cards) */}
        {/* <WhyChooseUs /> */}

        {/* 6. Workflow Timeline (01 to 07 Steps) */}
        {/* <Workflow /> */}

        {/* 7. Contact & Enquiry Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons for Quick Contact */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* WhatsApp Direct Floating Button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hello Maheswari Fabs, I have an inquiry regarding metal fabrication services.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
          title="Direct WhatsApp Chat"
        >
           {/* Real WhatsApp Vector SVG */}
            <svg
              viewBox="0 0 32 32"
              className="w-7 h-7 fill-current drop-shadow-sm"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2C8.268 2 2 8.268 2 16c0 2.766.804 5.342 2.19 7.514L2.054 29.24a1 1 0 001.218 1.218l5.86-2.128A13.916 13.916 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.644 19.38c-.32.902-1.59 1.66-2.584 1.874-.682.146-1.572.264-4.57-1.002-3.834-1.618-6.3-5.502-6.492-5.758-.186-.256-1.542-2.054-1.542-3.916 0-1.862.974-2.778 1.32-3.13.344-.352.754-.44 1.006-.44.254 0 .508.002.73.014.236.01.55-.09.86.654.32.77 1.09 2.664 1.186 2.858.096.196.16.424.032.68-.128.256-.192.416-.384.64-.192.224-.404.5-.578.672-.192.192-.394.4-.17.784.224.384.996 1.644 2.14 2.664 1.472 1.31 2.714 1.716 3.098 1.908.384.192.608.16.832-.096.224-.256.96-1.12 1.216-1.504.256-.384.512-.32.86-.192.352.128 2.234 1.054 2.618 1.246.384.192.64.288.736.448.096.16.096.93-.224 1.832z" />
            </svg>
            <span className="sr-only">Chat on WhatsApp</span>

            {/* Tooltip */}
            <span className="absolute right-full mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 border border-slate-700">
              Chat on WhatsApp
            </span>
          
        </a>

        {/* Phone Floating Quick Call Button on Mobile */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="sm:hidden flex items-center justify-center w-14 h-14 bg-sky-600 hover:bg-sky-500 text-white rounded-full shadow-2xl border-2 border-white/20"
          title="Call Maheswari Fabs"
        >
          <Phone className="w-7 h-7" />
        </a>
      </div>

    </div>
  );
}

export default App;
