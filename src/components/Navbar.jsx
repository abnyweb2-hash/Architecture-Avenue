import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, ChevronDown, ArrowRight, ArrowUpRight, 
  Sparkles, Layers, ShieldCheck, Compass, MapPin, 
  Building2, Home, Landmark, Palette, SlidersHorizontal
} from 'lucide-react';

export default function Navbar({ onOpenTenders, onOpenConsultation }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'works' | 'atelier' | 'enterprise' | null
  const megaMenuTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName) => {
    if (megaMenuTimeoutRef.current) clearTimeout(megaMenuTimeoutRef.current);
    setActiveMegaMenu(menuName);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  const closeMegaMenu = () => {
    setActiveMegaMenu(null);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-black/80'
          : 'bg-gradient-to-b from-[#0D0D0D]/90 via-[#0D0D0D]/50 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* 1. Left: Monogram Logo */}
          <a
            href="#home"
            onClick={closeMegaMenu}
            className="flex items-center space-x-3.5 group cursor-pointer focus:outline-none flex-shrink-0"
          >
            {/* Minimalist Monogram Box [A|A] */}
            <div className="relative w-9 h-9 border border-[#D4AF37]/80 rounded flex items-center justify-center bg-black/60 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
              <svg
                viewBox="0 0 40 40"
                className="w-5 h-5 text-[#D4AF37]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M12 28 L18 12 L24 28" />
                <path d="M14 23 L22 23" />
                <line x1="20" y1="10" x2="20" y2="30" strokeOpacity="0.4" strokeDasharray="2 2" />
                <rect x="2" y="2" width="36" height="36" rx="2" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.3" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-monumental tracking-[0.22em] text-white text-sm sm:text-base font-bold uppercase">
                ARCHITECT&apos;S
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] font-semibold uppercase">
                AVENUE
              </span>
            </div>
          </a>

          {/* 2. Center: Spacious Uncluttered Navigation with Mega Menus */}
          <nav className="hidden lg:flex items-center space-x-10 relative">
            {/* Mega Menu Trigger: WORKS */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('works')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center space-x-1.5 text-xs font-medium tracking-[0.2em] uppercase transition-colors py-2 ${
                  activeMegaMenu === 'works' ? 'text-[#D4AF37]' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>Works</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMegaMenu === 'works' ? 'rotate-180 text-[#D4AF37]' : 'text-neutral-500'
                  }`}
                />
              </button>

              {/* Works Mega Dropdown Panel */}
              {activeMegaMenu === 'works' && (
                <div
                  className="absolute top-full -left-24 w-[640px] pt-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50 text-left"
                  onMouseEnter={() => handleMouseEnter('works')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-2xl p-6 bg-[#121212]/95 backdrop-blur-2xl border border-white/10 shadow-2xl grid grid-cols-12 gap-6">
                    {/* Typology links (7 cols) */}
                    <div className="col-span-7 space-y-4">
                      <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                        Curation by Typology
                      </span>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <a
                          href="#portfolio"
                          onClick={closeMegaMenu}
                          className="group p-2.5 rounded-xl hover:bg-white/5 transition-all block"
                        >
                          <div className="flex items-center space-x-2 text-white font-semibold group-hover:text-[#D4AF37] transition-colors mb-0.5">
                            <Home className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Luxury Villas</span>
                          </div>
                          <p className="text-[11px] text-neutral-400 font-light">Cantilevered coastal &amp; desert compounds</p>
                        </a>

                        <a
                          href="#portfolio"
                          onClick={closeMegaMenu}
                          className="group p-2.5 rounded-xl hover:bg-white/5 transition-all block"
                        >
                          <div className="flex items-center space-x-2 text-white font-semibold group-hover:text-[#D4AF37] transition-colors mb-0.5">
                            <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Residential</span>
                          </div>
                          <p className="text-[11px] text-neutral-400 font-light">Bioclimatic urban &amp; hillside homes</p>
                        </a>

                        <a
                          href="#portfolio"
                          onClick={closeMegaMenu}
                          className="group p-2.5 rounded-xl hover:bg-white/5 transition-all block"
                        >
                          <div className="flex items-center space-x-2 text-white font-semibold group-hover:text-[#D4AF37] transition-colors mb-0.5">
                            <Landmark className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Commercial</span>
                          </div>
                          <p className="text-[11px] text-neutral-400 font-light">Corporate headquarters &amp; towers</p>
                        </a>

                        <a
                          href="#portfolio"
                          onClick={closeMegaMenu}
                          className="group p-2.5 rounded-xl hover:bg-white/5 transition-all block"
                        >
                          <div className="flex items-center space-x-2 text-white font-semibold group-hover:text-[#D4AF37] transition-colors mb-0.5">
                            <Palette className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Interiors</span>
                          </div>
                          <p className="text-[11px] text-neutral-400 font-light">Haute minimalist sky residences</p>
                        </a>
                      </div>

                      {/* Interactive Comparison Quick Link */}
                      <div className="pt-3 border-t border-white/5">
                        <a
                          href="#comparison"
                          onClick={closeMegaMenu}
                          className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-neutral-300 hover:text-white transition-all"
                        >
                          <div className="flex items-center space-x-2">
                            <SlidersHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
                            <span>Interactive Feature: Concept vs Reality</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                        </a>
                      </div>
                    </div>

                    {/* Featured project highlight (5 cols) */}
                    <div className="col-span-5 bg-black/60 rounded-xl p-4 border border-white/5 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-neutral-400 uppercase block mb-1">
                          FEATURED REVELATION
                        </span>
                        <h4 className="text-xs font-bold text-white mb-1">The Obsidian Pavilion</h4>
                        <p className="text-[10px] text-neutral-400 font-light leading-relaxed">
                          14,800 sq.ft cantilevered basalt compound on the Alibaug coastline.
                        </p>
                      </div>
                      <a
                        href="#portfolio"
                        onClick={closeMegaMenu}
                        className="mt-3 text-[11px] font-mono text-[#D4AF37] hover:underline flex items-center space-x-1"
                      >
                        <span>View Portfolio Archive</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mega Menu Trigger: ATELIER */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('atelier')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center space-x-1.5 text-xs font-medium tracking-[0.2em] uppercase transition-colors py-2 ${
                  activeMegaMenu === 'atelier' ? 'text-[#D4AF37]' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>Atelier</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMegaMenu === 'atelier' ? 'rotate-180 text-[#D4AF37]' : 'text-neutral-500'
                  }`}
                />
              </button>

              {/* Atelier Mega Dropdown Panel */}
              {activeMegaMenu === 'atelier' && (
                <div
                  className="absolute top-full -left-28 w-[580px] pt-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50 text-left"
                  onMouseEnter={() => handleMouseEnter('atelier')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-2xl p-6 bg-[#121212]/95 backdrop-blur-2xl border border-white/10 shadow-2xl grid grid-cols-2 gap-6">
                    {/* Left: Disciplines */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                        Core Disciplines
                      </span>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <a
                            href="#services"
                            onClick={closeMegaMenu}
                            className="block p-1.5 rounded hover:bg-white/5 text-neutral-300 hover:text-white transition-colors"
                          >
                            <span className="font-semibold text-white block">Architectural Design</span>
                            <span className="text-[11px] text-neutral-400 font-light">Solar analysis, massing &amp; permits</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#services"
                            onClick={closeMegaMenu}
                            className="block p-1.5 rounded hover:bg-white/5 text-neutral-300 hover:text-white transition-colors"
                          >
                            <span className="font-semibold text-white block">Haute Interior Styling</span>
                            <span className="text-[11px] text-neutral-400 font-light">Custom millwork &amp; tactile finishes</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#services"
                            onClick={closeMegaMenu}
                            className="block p-1.5 rounded hover:bg-white/5 text-neutral-300 hover:text-white transition-colors"
                          >
                            <span className="font-semibold text-white block">Biophilic Landscape</span>
                            <span className="text-[11px] text-neutral-400 font-light">Water basins, negative edges &amp; native flora</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#services"
                            onClick={closeMegaMenu}
                            className="block p-1.5 rounded hover:bg-white/5 text-neutral-300 hover:text-white transition-colors"
                          >
                            <span className="font-semibold text-white block">BIM LOD 400 &amp; VR</span>
                            <span className="text-[11px] text-neutral-400 font-light">Clash-detection &amp; real-time raytracing</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Right: Philosophy & Locations */}
                    <div className="space-y-4 border-l border-white/5 pl-6 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block mb-2">
                          Philosophy &amp; Ethos
                        </span>
                        <a
                          href="#philosophy"
                          onClick={closeMegaMenu}
                          className="block p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs"
                        >
                          <div className="font-bold text-white mb-0.5">Monolithic &amp; Vedic Harmony</div>
                          <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                            Crafting architecture aligned with cardinal solar paths and authentic material integrity.
                          </p>
                        </a>
                      </div>

                      <div className="text-[11px] font-mono text-neutral-400 space-y-1">
                        <div className="text-white font-bold flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-[#D4AF37]" />
                          <span>Global Presence</span>
                        </div>
                        <div>HQ: Sambhav Tower, Gomti Nagar, Lucknow</div>
                        <div>Representative: DIFC Gate Village, Dubai</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mega Menu Trigger: ENTERPRISE */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('enterprise')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center space-x-1.5 text-xs font-medium tracking-[0.2em] uppercase transition-colors py-2 ${
                  activeMegaMenu === 'enterprise' ? 'text-[#D4AF37]' : 'text-neutral-300 hover:text-white'
                }`}
              >
                <span>Enterprise</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMegaMenu === 'enterprise' ? 'rotate-180 text-[#D4AF37]' : 'text-neutral-500'
                  }`}
                />
              </button>

              {/* Enterprise Mega Dropdown Panel */}
              {activeMegaMenu === 'enterprise' && (
                <div
                  className="absolute top-full -left-16 w-[440px] pt-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50 text-left"
                  onMouseEnter={() => handleMouseEnter('enterprise')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="rounded-2xl p-6 bg-[#121212]/95 backdrop-blur-2xl border border-white/10 shadow-2xl space-y-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                      Institutional &amp; Statutory Sector
                    </span>

                    <div className="space-y-2.5">
                      <button
                        onClick={() => {
                          closeMegaMenu();
                          onOpenTenders();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-xs font-bold text-white flex items-center space-x-2">
                            <span>Notice Inviting Tenders (NIT)</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] font-mono">
                              ACTIVE
                            </span>
                          </div>
                          <p className="text-[11px] text-neutral-400 font-light mt-0.5">
                            Public infrastructure, civic centers &amp; institutional RFPs
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>

                      <a
                        href="#services"
                        onClick={closeMegaMenu}
                        className="block p-3 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="text-xs font-bold text-white">Schedule of Rates (DSR)</div>
                        <p className="text-[11px] text-neutral-400 font-light mt-0.5">
                          Standard specifications &amp; statutory BOQ schedules
                        </p>
                      </a>
                    </div>

                    <div className="p-3 rounded-lg bg-black/40 border border-white/5 text-[10px] font-mono text-neutral-400 flex items-center space-x-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Class-A Empanelled Architecture Consultant</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* 3. Right: Clean Contacts & Single CTA Button */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            <a
              href="#contact"
              onClick={closeMegaMenu}
              className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-300 hover:text-white transition-colors"
            >
              Contact
            </a>

            <button
              onClick={() => {
                closeMegaMenu();
                onOpenConsultation();
              }}
              className="px-6 py-2.5 rounded-full text-xs tracking-wider font-semibold bg-[#D4AF37] hover:bg-[#c49f2e] text-[#0D0D0D] transition-all duration-300 shadow-md shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40"
            >
              BOOK CONSULTATION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 text-[11px] rounded-full bg-[#D4AF37] text-black font-semibold tracking-wider"
            >
              INQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-300 hover:text-white glass-pill focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-white/10 mt-3 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 text-left">
          <div className="flex flex-col space-y-3">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-wider text-neutral-200 hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>SELECTED WORKS</span>
              <span className="text-[10px] text-neutral-400 font-mono">8 PROJECTS</span>
            </a>

            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-wider text-neutral-200 hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>SERVICES &amp; DISCIPLINES</span>
              <span className="text-[10px] text-neutral-400 font-mono">ATELIER</span>
            </a>

            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-wider text-neutral-200 hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>CONCEPT VS REALITY</span>
              <span className="text-[10px] text-[#D4AF37] font-mono">INTERACTIVE</span>
            </a>

            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-wider text-neutral-200 hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>DESIGN PHILOSOPHY</span>
              <span className="text-[10px] text-neutral-400 font-mono">ABOUT</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTenders();
              }}
              className="text-sm font-medium tracking-wider text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between text-left"
            >
              <span>TENDERS &amp; NIT NOTICES</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] font-mono">
                RFP OPEN
              </span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium tracking-wider text-neutral-200 hover:text-[#D4AF37] py-2 border-b border-white/5 flex items-center justify-between"
            >
              <span>CONTACT &amp; STUDIOS</span>
              <span className="text-[10px] text-neutral-400 font-mono">LKO / DXB</span>
            </a>
          </div>

          <div className="pt-3 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-full text-center text-xs tracking-wider font-bold bg-[#D4AF37] text-[#0D0D0D] shadow-lg shadow-[#D4AF37]/20"
            >
              BOOK PRIVATE CONSULTATION
            </button>
            <div className="text-center pt-2">
              <span className="text-[11px] text-neutral-400 font-mono">
                Sambhav Tower, Vibhuti Khand, Lucknow
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
