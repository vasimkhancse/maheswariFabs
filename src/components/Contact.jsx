import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  MessageSquare, 
  Clock, 
  Shield
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Contact = ({ preselectedProcess }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    process: preselectedProcess || 'Laser Cutting',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Maheswari Fabs, I would like to inquire about metal fabrication / laser cutting services. My name is ${formData.name || 'a customer'}.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 dark-blueprint-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sky-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white">
            Let's Build Something Precise.
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base font-normal">
            Visit our Chinnavedampatti plant or discuss your custom sheet metal fabrication requirements directly with our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Company Info, Map & Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Plant Address Card */}
            <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
              <div className="border-b border-slate-700 pb-5">
                <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider block">
                  Manufacturing Facility
                </span>
                <h3 className="text-2xl font-black font-display text-white uppercase mt-1">
                  {COMPANY_INFO.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Est. {COMPANY_INFO.foundedYear} • Chinnavedampatti Industrial Zone
                </p>
              </div>

              {/* Address Details */}
              <div className="flex items-start gap-3.5 text-sm text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center flex-shrink-0 text-sky-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Registered Works Address:</strong>
                  <p className="text-xs text-slate-300 leading-relaxed mt-1">
                    81/2, Adhavan Industrial Estate,<br />
                    Chinnavedampatti,<br />
                    Coimbatore – 641049, Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-3.5 text-sm text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center flex-shrink-0 text-sky-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Direct Engineering Line:</strong>
                  <a 
                    href={`tel:${COMPANY_INFO.phone}`} 
                    className="text-xs text-sky-400 font-mono font-semibold hover:underline block mt-0.5"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 text-sm text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center flex-shrink-0 text-sky-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Email Enquiries:</strong>
                  <a 
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="text-xs text-sky-400 font-mono hover:underline block mt-0.5"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5 text-sm text-slate-300">
                <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-white block font-semibold">Shop Floor Operating Hours:</strong>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {COMPANY_INFO.workingHours}
                  </span>
                </div>
              </div>

              {/* Buttons: Google Maps & WhatsApp */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-700 border border-slate-600 text-slate-200 hover:text-white text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleWhatsAppDirect}
                  className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </button>
              </div>

            </div>

            {/* Quick Note Card */}
            <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-xs text-slate-400 flex items-center gap-3">
              <Shield className="w-5 h-5 text-sky-400 flex-shrink-0" />
              <span>Direct manufacturing support for prototyping and production batches in Coimbatore.</span>
            </div>

          </div>

          {/* Right Column: Contact & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200">
              
              <div className="mb-6">
                <h3 className="text-2xl font-black font-display uppercase tracking-tight text-slate-900">
                  Send Us An Enquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and our technical team will contact you promptly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black font-display text-slate-900 uppercase">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our Coimbatore engineering team will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', company: '', phone: '', email: '', process: 'Laser Cutting', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Name and Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Precision Engineering Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98422 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 transition-all"
                      />
                    </div>
                  </div>

                  {/* Process Requirement */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                      Process of Interest *
                    </label>
                    <select
                      value={formData.process}
                      onChange={(e) => setFormData({ ...formData, process: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 bg-white"
                    >
                      <option value="Laser Cutting">1. Laser Cutting (Up to 12kW HSG / Mitsubishi)</option>
                      <option value="Bending">2. CNC Bending (Up to 250 Ton Hindustan / Amada)</option>
                      <option value="Power Press">3. Power Press & Hydraulic Pressing (60T / 40T)</option>
                      <option value="Welding">4. Welding (TIG, Arc, Spot 2+2mm)</option>
                      <option value="Complete Metal Fabrication">Complete Metal Fabrication</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-slate-700 mb-1">
                      Message / Project Details *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Please enter your enquiry or specifications..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none text-sm text-slate-900 transition-all resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-sm uppercase tracking-wider transition-all duration-300 shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {loading ? (
                      <span className="inline-block animate-spin font-mono">Sending...</span>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
