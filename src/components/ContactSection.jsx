import React, { useState, useEffect } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, Sparkles, Calendar, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection({ prefilledProject, onClearPrefill }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Luxury Villa',
    budget: '$1.5M - $5M',
    timeline: '3-6 Months',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  // Handle prefilled project from portfolio lightbox
  useEffect(() => {
    if (prefilledProject) {
      setFormData((prev) => ({
        ...prev,
        message: `I am interested in designing a project inspired by "${prefilledProject}". Please contact me for a private consultation and site feasibility study.`,
      }));
    }
  }, [prefilledProject]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Trigger celebratory gold confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#FFFFFF', '#AA820A'],
      });
    } catch {
      // fallback
    }

    const genId = 'AA-' + Math.floor(100000 + Math.random() * 900000);
    setInquiryId(genId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Luxury Villa',
      budget: '$1.5M - $5M',
      timeline: '3-6 Months',
      date: '',
      message: ''
    });
    if (onClearPrefill) onClearPrefill();
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#0D0D0D] text-white overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Private Consultation &bull; Commission Atelier</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-monumental font-bold tracking-tight text-white">
              Initiate Your Commission
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light mt-3 max-w-xl">
              Connect directly with our Principal Architects. We welcome private residential commissions, boutique commercial developments, and institutional masterplans.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-2 text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>ACCEPTING COMMISSIONS Q3/Q4 2026</span>
          </div>
        </div>

        {/* Main Grid: Form (7 cols) + Direct Studio Details (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase block mb-1">
                  COMMISSION INQUIRY CONFIRMED
                </span>
                <h3 className="text-2xl sm:text-3xl font-monumental font-bold text-white mb-3">
                  Thank You, {formData.name}
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Your project dossier has been assigned reference ID{' '}
                  <strong className="text-[#D4AF37] font-mono">{inquiryId}</strong>. Our senior partner will review your site specifics and reach out within 24 hours.
                </p>

                <div className="p-4 rounded-xl bg-black/50 border border-white/10 max-w-md mx-auto text-xs text-neutral-400 mb-8 space-y-1 text-left">
                  <div className="flex justify-between">
                    <span>Project Typology:</span>
                    <strong className="text-white">{formData.projectType}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Budget:</span>
                    <strong className="text-[#D4AF37]">{formData.budget}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Timeline:</span>
                    <strong className="text-white">{formData.timeline}</strong>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="https://wa.me/919415889038"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Direct WhatsApp Atelier</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 rounded-full glass-pill text-neutral-300 hover:text-white text-xs tracking-wider uppercase transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <h3 className="text-lg font-monumental font-bold text-white">
                    Consultation Request Form
                  </h3>
                  <span className="text-xs font-mono text-[#D4AF37]">* Confidential Atelier Brief</span>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Vikramaditya Singhania"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Corporate / Private Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="vikram@singh-holdings.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-neutral-600"
                    />
                  </div>
                </div>

                {/* Phone & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-neutral-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Project Typology
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="Luxury Villa">Luxury Villa / Private Estate</option>
                      <option value="Modern Residence">Bespoke Urban Residence</option>
                      <option value="Commercial HQ">Commercial Corporate HQ / Tech Park</option>
                      <option value="Modern Interior">Haute Interior Architecture</option>
                      <option value="Hospitality Resort">Luxury Eco-Resort &amp; Spa</option>
                      <option value="Government / NIT Tender">Government / Institutional Tender</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Estimated Investment Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="< $500K">&lt; $500K (Under ₹4 Crores)</option>
                      <option value="$500K - $1.5M">$500K - $1.5M (₹4 - ₹12 Crores)</option>
                      <option value="$1.5M - $5M">$1.5M - $5M (₹12 - ₹40 Crores)</option>
                      <option value="$5M+">$5M+ (Ultra-Luxury / Institutional)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Desired Groundbreaking Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                      <option value="3-6 Months">3 to 6 Months</option>
                      <option value="6-12 Months">6 to 12 Months</option>
                      <option value="Concept Exploratory Phase">Concept Exploratory Phase</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Project Vision / Site Details
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your site coordinates, plot area, architectural style preference, or specific structural requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors placeholder:text-neutral-600 resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2e] text-black font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Submit Commission Dossier</span>
                </button>

                <p className="text-[11px] text-neutral-500 text-center font-mono">
                  All blueprints, client identities, and site survey records are protected under bilateral Non-Disclosure Agreements (NDA).
                </p>
              </form>
            )}
          </div>

          {/* Right Direct Studio Information & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Flagship Studio Card */}
            <div className="p-8 rounded-3xl bg-[#141414] border border-white/10 relative overflow-hidden">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-4">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Primary Design Atelier</span>
              </div>
              <h3 className="text-xl font-bold font-monumental text-white mb-2">
                Lucknow Headquarters
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light mb-4">
                Sambhav Tower, 4th Floor<br />
                Vibhuti Khand, Gomti Nagar<br />
                Lucknow, Uttar Pradesh 226010, India
              </p>
              <div className="text-xs font-mono text-neutral-400 space-y-1.5 border-t border-white/10 pt-4">
                <div>Direct Phone: <span className="text-white font-bold">+91 94158 89038</span></div>
                <div>GSTIN Registered: <span className="text-neutral-300">09AAVFA7373H1ZT</span></div>
                <div>Inquiries: <span className="text-[#D4AF37]">studio@architectureavenue.com</span></div>
              </div>
            </div>

            {/* Global Representative Studio */}
            <div className="p-8 rounded-3xl bg-[#141414] border border-white/10">
              <div className="flex items-center space-x-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-4">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>Middle East Representative Studio</span>
              </div>
              <h3 className="text-xl font-bold font-monumental text-white mb-2">
                Dubai Atelier
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-light mb-4">
                DIFC Gate Village, Building 03, Level 07<br />
                Dubai International Financial Centre<br />
                Dubai, United Arab Emirates
              </p>
              <div className="text-xs font-mono text-neutral-400 space-y-1.5 border-t border-white/10 pt-4">
                <div>Direct Phone: <span className="text-white font-bold">+971 4 398 2100</span></div>
                <div>Inquiries: <span className="text-[#D4AF37]">uae@architectureavenue.com</span></div>
              </div>
            </div>

            {/* Studio Hours */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#D4AF37] flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-white block uppercase tracking-wider">Studio Operating Hours</span>
                <span className="text-neutral-400">Monday &ndash; Saturday: 09:30 AM &ndash; 07:30 PM (IST)</span>
                <span className="text-neutral-500 block">Private site viewings by appointment only</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
