import React from 'react';
import { MapPin, Phone, Mail, Shield, Lock, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenTenders, onOpenConsultation }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0D0D0D] text-white border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand & CoA Credentials */}
          <div className="space-y-4">
            <a href="#home" className="flex items-center space-x-3.5 group cursor-pointer">
              {/* Monogram Box [A|A] */}
              <div className="w-9 h-9 border border-[#D8A56E]/40 rounded-lg flex items-center justify-center bg-white/5 group-hover:border-[#D8A56E] transition-all duration-300">
                <svg
                  viewBox="0 0 40 40"
                  className="w-5 h-5 text-white group-hover:text-[#D8A56E] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M12 28 L18 12 L24 28" />
                  <path d="M14 23 L22 23" />
                  <line x1="20" y1="10" x2="20" y2="30" stroke="#D8A56E" strokeOpacity="0.8" strokeDasharray="2 2" />
                  <rect x="2" y="2" width="36" height="36" rx="2" stroke="#D8A56E" strokeWidth="1.2" strokeOpacity="0.4" />
                </svg>
              </div>

              <div className="flex flex-col text-left">
                <span className="font-monumental tracking-[0.22em] text-white text-sm sm:text-base font-bold uppercase">
                  ARCHITECT&apos;S
                </span>
                <span className="text-[10px] tracking-[0.35em] text-[#D8A56E] font-bold uppercase">
                  AVENUE
                </span>
              </div>
            </a>

            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Council of Architecture (CoA) Registered Practice. Specializing in landmark civic architecture, government tender consortiums, high-efficiency commercial towers, and urban infrastructure.
            </p>

            <div className="pt-2 flex items-center space-x-2 text-xs font-mono text-[#D8A56E] font-semibold">
              <Shield className="w-4 h-4 text-[#D8A56E] flex-shrink-0" />
              <span>CPWD Class-1 Empaneled Practice</span>
            </div>
          </div>

          {/* Column 2: Principal Studio (Head Office) */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold pb-2.5 border-b border-white/10">
              PRINCIPAL STUDIO (HEAD OFFICE)
            </h4>

            <div className="space-y-3 text-xs text-neutral-400 font-light leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#D8A56E] mt-0.5 flex-shrink-0" />
                <span>
                  D-2/122 Ground Floor, Sambhav Tower, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D8A56E] flex-shrink-0" />
                <span>
                  <a href="tel:05224026829" className="hover:text-white transition-colors">0522-4026829</a>
                  {' / '}
                  <a href="tel:09415089038" className="hover:text-white transition-colors font-medium text-neutral-200">094150 89038</a>
                </span>
              </div>

              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#D8A56E] flex-shrink-0" />
                <a href="tel:+919919828111" className="hover:text-white transition-colors">
                  +91 99198 28111
                </a>
              </div>

              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#D8A56E] flex-shrink-0" />
                <a href="mailto:lucknow@architectsavenue.in" className="hover:text-[#D8A56E] transition-colors font-mono text-[11px]">
                  lucknow@architectsavenue.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Liaison Studios */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold pb-2.5 border-b border-white/10">
              LIAISON STUDIOS
            </h4>

            <div className="space-y-4 text-xs font-light leading-relaxed">
              <div>
                <p className="text-white font-semibold text-xs mb-0.5">New Delhi Studio:</p>
                <p className="text-neutral-400">Avenue Tower, Barakhamba Road, Connaught Place, New Delhi</p>
                <a href="tel:+911143509000" className="text-neutral-400 hover:text-white font-mono text-[11px] transition-colors block mt-0.5">
                  +91 11 4350 9000
                </a>
              </div>

              <div>
                <p className="text-white font-semibold text-xs mb-0.5">Mumbai Studio:</p>
                <p className="text-neutral-400">Express Towers, 18th Floor, Nariman Point, Mumbai</p>
                <a href="tel:+912266204500" className="text-neutral-400 hover:text-white font-mono text-[11px] transition-colors block mt-0.5">
                  +91 22 6620 4500
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Practice Domains */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-bold pb-2.5 border-b border-white/10">
              PRACTICE DOMAINS
            </h4>

            <div className="space-y-3 text-xs text-neutral-400 font-light leading-relaxed">
              <p className="text-neutral-300">Architects &bull; Planners &bull; Engineers</p>
              <p className="text-neutral-300">Landscape &bull; Interior &bull; Vastu</p>

              <div className="pt-3 space-y-2 font-mono text-xs">
                <div>
                  <a
                    href="#portfolio"
                    className="text-neutral-300 hover:text-[#D8A56E] transition-colors block"
                  >
                    Project Portfolio
                  </a>
                </div>

                <div>
                  <button
                    onClick={onOpenTenders}
                    className="text-[#D8A56E] hover:text-[#BD8750] transition-colors flex items-center space-x-1.5 font-semibold"
                  >
                    <span>Enterprise Management Portal</span>
                    <Lock className="w-3.5 h-3.5 text-[#D8A56E]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Powered By & Statutory Metadata */}
        <div className="pt-8 flex flex-col xl:flex-row items-center justify-between text-[11px] font-mono text-neutral-400 gap-4">
          <div className="flex flex-wrap items-center justify-center xl:justify-start gap-x-2 gap-y-1 text-center xl:text-left">
            <span>&copy; {new Date().getFullYear()} Architect&apos;s Avenue. All rights reserved. Class-1 Empaneled Architectural &amp; Engineering Consultancy.</span>
            <span className="opacity-40">&bull;</span>
            <span>
              Powered By{' '}
              <a
                href="https://abnyweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold underline decoration-neutral-500 hover:text-[#D8A56E] transition-colors"
              >
                ABNY Web
              </a>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <span>GSTIN: <span className="text-neutral-300 font-medium">09AAVFA7373H1ZT</span></span>
            <span>CoA Reg. <span className="text-neutral-300 font-medium">CA/2004/31890</span></span>
            <span className="text-neutral-300">Lucknow &bull; New Delhi &bull; Mumbai</span>
            <button
              onClick={scrollToTop}
              className="ml-2 p-1.5 rounded-full border border-white/15 hover:border-[#D8A56E] text-neutral-400 hover:text-white transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
