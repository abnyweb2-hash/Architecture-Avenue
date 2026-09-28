import React, { useState } from 'react';
import { ArrowUp, ArrowUpRight, Check } from 'lucide-react';

export default function Footer({ onOpenTenders, onOpenConsultation }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F2F0EC] text-[#2A2A2A] border-t border-[#2A2A2A]/10 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#2A2A2A]/10">
          {/* Col 1: Brand & Atelier Vision (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center space-x-3.5">
              <div className="w-9 h-9 border border-[#2A2A2A]/20 rounded-lg flex items-center justify-center bg-[#E1DDD4]">
                <svg
                  viewBox="0 0 40 40"
                  className="w-5 h-5 text-[#2A2A2A]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M12 28 L18 12 L24 28" />
                  <path d="M14 23 L22 23" />
                  <line x1="20" y1="10" x2="20" y2="30" stroke="#D8A56E" strokeOpacity="0.8" strokeDasharray="2 2" />
                  <rect x="2" y="2" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.25" />
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="font-monumental tracking-[0.22em] text-[#2A2A2A] text-base font-bold uppercase">
                  ARCHITECT&apos;S
                </span>
                <span className="text-[10px] tracking-[0.35em] text-[#D8A56E] font-bold uppercase">
                  AVENUE
                </span>
              </div>
            </div>

            <p className="text-[#2A2A2A]/80 text-xs sm:text-sm font-light leading-relaxed max-w-sm">
              Architecture Avenue is an elite architectural atelier creating monolithic residences, luxury villas, and sustainable commercial landmarks across India and the Middle East.
            </p>

            {/* Licensure details */}
            <div className="text-[11px] font-mono text-[#2A2A2A]/60 space-y-1">
              <p>Council of Architecture (CoA) Reg: CA/2014/68903</p>
              <p>Indian Institute of Architects (IIA) Corporate Fellow</p>
              <p>GSTIN: 09AAVFA7373H1ZT</p>
            </div>
          </div>

          {/* Col 2: Directory Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8A56E] font-bold">
              Directory
            </h4>
            <ul className="space-y-2 text-xs text-[#2A2A2A]/75 font-medium">
              <li>
                <a href="#home" className="hover:text-[#BD8750] transition-colors">
                  Main Atelier
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#BD8750] transition-colors">
                  Selected Works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#BD8750] transition-colors">
                  Services &amp; DSR
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-[#BD8750] transition-colors">
                  Concept vs Reality
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#BD8750] transition-colors">
                  Design Philosophy
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#BD8750] transition-colors">
                  Client Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Institutional & Tenders (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8A56E] font-bold">
              Enterprise
            </h4>
            <ul className="space-y-2 text-xs text-[#2A2A2A]/75 font-medium">
              <li>
                <button onClick={onOpenTenders} className="hover:text-[#BD8750] transition-colors text-left">
                  Tenders &amp; NIT Notices
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="hover:text-[#BD8750] transition-colors text-left">
                  Enterprise Portal ↗
                </button>
              </li>
              <li>
                <a href="#services" className="hover:text-[#BD8750] transition-colors">
                  Schedule of Rates (DSR)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#BD8750] transition-colors">
                  Quarry &amp; Material Audits
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Monograph (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D8A56E] font-bold">
              Atelier Monograph
            </h4>
            <p className="text-xs text-[#2A2A2A]/80 font-light leading-relaxed">
              Subscribe to receive our annual hardcover monograph on contemporary Indian minimalism and biophilic engineering.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your.email@domain.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#E1DDD4] border border-[#2A2A2A]/15 text-xs text-[#2A2A2A] placeholder:text-[#2A2A2A]/40 focus:outline-none focus:border-[#D8A56E]"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3.5 rounded-lg bg-[#D8A56E] hover:bg-[#BD8750] text-[#2A2A2A] text-xs font-bold transition-colors shadow-sm"
              >
                Join
              </button>
            </form>
            {subscribed && (
              <span className="text-[11px] text-emerald-700 flex items-center space-x-1 font-semibold">
                <Check className="w-3.5 h-3.5" />
                <span>Subscribed to Monograph Edition.</span>
              </span>
            )}
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-[#2A2A2A]/60 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Architecture Avenue Studio. All Rights Reserved. Designed for monumental living.
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-4">
            {/* Instagram SVG */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2A2A2A]/70 hover:text-[#BD8750] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* LinkedIn SVG */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2A2A2A]/70 hover:text-[#BD8750] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* Behance */}
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2A2A2A]/70 hover:text-[#BD8750] transition-colors text-xs font-bold"
              aria-label="Behance"
            >
              Bē
            </a>

            {/* Pinterest */}
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2A2A2A]/70 hover:text-[#BD8750] transition-colors text-xs font-bold"
              aria-label="Pinterest"
            >
              Pinterest
            </a>

            <span className="w-px h-4 bg-[#2A2A2A]/15 mx-2" />

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 text-[#2A2A2A]/70 hover:text-[#BD8750] transition-colors font-medium"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
