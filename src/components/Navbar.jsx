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
          ? 'glass-nav py-3.5 shadow-md shadow-[#2A2A2A]/5'
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
            <div className={`relative w-9 h-9 border rounded-lg flex items-center justify-center transition-all duration-300 ${
              isScrolled
                ? 'border-[#2A2A2A]/20 bg-[#F2F0EC] group-hover:border-[#D8A56E] group-hover:shadow-[0_0_15px_rgba(216,165,110,0.3)]'
                : 'border-white/15 bg-white/5 group-hover:border-[#D8A56E] group-hover:shadow-[0_0_15px_rgba(216,165,110,0.3)]'
            }`}>
              <svg
                viewBox="0 0 40 40"
                className={`w-5 h-5 transition-colors ${
                  isScrolled ? 'text-[#2A2A2A] group-hover:text-[#D8A56E]' : 'text-white group-hover:text-[#D8A56E]'
                }`}
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
              <span className={`font-monumental tracking-[0.22em] text-sm sm:text-base font-bold uppercase transition-colors ${
                isScrolled ? 'text-[#2A2A2A]' : 'text-white'
              }`}>
                ARCHITECT&apos;S
              </span>
              <span className="text-[10px] tracking-[0.35em] text-[#D8A56E] font-bold uppercase">
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
                className={`flex items-center space-x-1.5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors py-2 ${
                  activeMegaMenu === 'works'
                    ? 'text-[#D8A56E]'
                    : isScrolled
                      ? 'text-[#2A2A2A] hover:text-[#BD8750]'
                      : 'text-white/85 hover:text-[#D8A56E]'
                }`}
              >
                <span>Works</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMegaMenu === 'works'
                      ? 'rotate-180 text-[#D8A56E]'
                      : isScrolled
                        ? 'text-[#2A2A2A]/50'
                        : 'text-white/40'
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
                  <div className="rounded-2xl p-6 bg-[#F2F0EC] border border-[#2A2A2A]/12 shadow-2xl shadow-[#2A2A2A]/10 grid grid-cols-12 gap-6">
                    {/* Typology links (7 cols) */}
                    <div className="col-span-7 space-y-4">
                      <span className="text-[10px] font-mono tracking-widest text-[#D8A56E] uppercase block font-semibold">
                        Curation by Typology
                      </span>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <a
                          href="#portfolio"
                          onClick={closeMegaMenu}
                          className="group p-2.5 rounded-xl hover:bg-[#E1DDD4] transition-all block"
                        >
                          <div className="flex items-center space-x-2 text-[#2A2A2A] font-semibold group-hover:text-[#BD8750] transition-colors mb-0.5">
                            <Home className="w-3.5 h-3.5 text-[#D8A56E]" />
                            <span>Luxury Villas</span>
                          </div>
                          <p className="text-[11px] text-[#2A2A2A]/70 font-light">Cantilevered coastal &amp; desert compounds</p>
                        </a>

                        <a
                          href="#portfolio"
                          onClick={closeMegaMenu}
                          className="group p-2.5 rounded-xl hover:bg-[#E1DDD4] transition-all block"
                        >
                          <div className="flex items-center space-x-2 text-[#2A2A2A] font-semibold group-hover:text-[#BD8750] transition-colors mb-0.5">
                            <Building2 className="w-3.5 h-3.5 text-[#D8A56E]" />
                            <span>Residential</span>
                          </div>
                          <p className="text-[11px] text-[#2A2A2A]/70 font-light">Bioclimatic urban &amp; hillside homes</p>
                        </a>

                        <a
                          href="#portfolio"
                          onClick={closeMegaMenu}
                          className="group p-2.5 rounded-xl hover:bg-[#E1DDD4] transition-all block"
                        >
                          <div className="flex items-center space-x-2 text-[#2A2A2A] font-semibold group-hover:text-[#BD8750] transition-colors mb-0.5">
                            <Landmark className="w-3.5 h-3.5 text-[#D8A56E]" />
                            <span>Commercial</span>
                          </div>
                          <p className="text-[11px] text-[#2A2A2A]/70 font-light">Corporate headquarters &amp; towers</p>
                        </a>

                        <a
                          href="#portfolio"
                          onClick={closeMegaMenu}
                          className="group p-2.5 rounded-xl hover:bg-[#E1DDD4] transition-all block"
                        >
                          <div className="flex items-center space-x-2 text-[#2A2A2A] font-semibold group-hover:text-[#BD8750] transition-colors mb-0.5">
                            <Palette className="w-3.5 h-3.5 text-[#D8A56E]" />
                            <span>Interiors</span>
                          </div>
                          <p className="text-[11px] text-[#2A2A2A]/70 font-light">Haute minimalist sky residences</p>
                        </a>
                      </div>

                      {/* Interactive Comparison Quick Link */}
                      <div className="pt-3 border-t border-[#2A2A2A]/10">
                        <a
                          href="#comparison"
                          onClick={closeMegaMenu}
                          className="flex items-center justify-between p-2 rounded-lg bg-[#E1DDD4] hover:bg-[#E1DDD4]/80 text-xs text-[#2A2A2A] hover:text-[#BD8750] transition-all"
                        >
                          <div className="flex items-center space-x-2">
                            <SlidersHorizontal className="w-3.5 h-3.5 text-[#D8A56E]" />
                            <span className="font-medium">Interactive Feature: Concept vs Reality</span>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-[#D8A56E]" />
                        </a>
                      </div>
                    </div>

                    {/* Featured project highlight (5 cols) */}
                    <div className="col-span-5 bg-[#E1DDD4] rounded-xl p-4 border border-[#2A2A2A]/10 flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-mono tracking-widest text-[#2A2A2A]/60 uppercase block mb-1 font-semibold">
                          FEATURED REVELATION
                        </span>
                        <h4 className="text-xs font-bold text-[#2A2A2A] mb-1">The Obsidian Pavilion</h4>
                        <p className="text-[10px] text-[#2A2A2A]/80 font-light leading-relaxed">
                          14,800 sq.ft cantilevered basalt compound on the Alibaug coastline.
                        </p>
                      </div>
                      <a
                        href="#portfolio"
                        onClick={closeMegaMenu}
                        className="mt-3 text-[11px] font-mono text-[#D8A56E] hover:text-[#BD8750] hover:underline flex items-center space-x-1 font-semibold"
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
                className={`flex items-center space-x-1.5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors py-2 ${
                  activeMegaMenu === 'atelier'
                    ? 'text-[#D8A56E]'
                    : isScrolled
                      ? 'text-[#2A2A2A] hover:text-[#BD8750]'
                      : 'text-white/85 hover:text-[#D8A56E]'
                }`}
              >
                <span>Atelier</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMegaMenu === 'atelier'
                      ? 'rotate-180 text-[#D8A56E]'
                      : isScrolled
                        ? 'text-[#2A2A2A]/50'
                        : 'text-white/40'
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
                  <div className="rounded-2xl p-6 bg-[#F2F0EC] border border-[#2A2A2A]/12 shadow-2xl shadow-[#2A2A2A]/10 grid grid-cols-2 gap-6">
                    {/* Left: Disciplines */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono tracking-widest text-[#D8A56E] uppercase block font-semibold">
                        Core Disciplines
                      </span>
                      <ul className="space-y-2 text-xs">
                        <li>
                          <a
                            href="#services"
                            onClick={closeMegaMenu}
                            className="block p-1.5 rounded hover:bg-[#E1DDD4] text-[#2A2A2A] hover:text-[#BD8750] transition-colors"
                          >
                            <span className="font-semibold block text-[#2A2A2A]">Architectural Design</span>
                            <span className="text-[11px] text-[#2A2A2A]/70 font-light">Solar analysis, massing &amp; permits</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#services"
                            onClick={closeMegaMenu}
                            className="block p-1.5 rounded hover:bg-[#E1DDD4] text-[#2A2A2A] hover:text-[#BD8750] transition-colors"
                          >
                            <span className="font-semibold block text-[#2A2A2A]">Haute Interior Styling</span>
                            <span className="text-[11px] text-[#2A2A2A]/70 font-light">Custom millwork &amp; tactile finishes</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#services"
                            onClick={closeMegaMenu}
                            className="block p-1.5 rounded hover:bg-[#E1DDD4] text-[#2A2A2A] hover:text-[#BD8750] transition-colors"
                          >
                            <span className="font-semibold block text-[#2A2A2A]">Biophilic Landscape</span>
                            <span className="text-[11px] text-[#2A2A2A]/70 font-light">Water basins, negative edges &amp; native flora</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#services"
                            onClick={closeMegaMenu}
                            className="block p-1.5 rounded hover:bg-[#E1DDD4] text-[#2A2A2A] hover:text-[#BD8750] transition-colors"
                          >
                            <span className="font-semibold block text-[#2A2A2A]">BIM LOD 400 &amp; VR</span>
                            <span className="text-[11px] text-[#2A2A2A]/70 font-light">Clash-detection &amp; real-time raytracing</span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Right: Philosophy & Locations */}
                    <div className="space-y-4 border-l border-[#2A2A2A]/10 pl-6 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#D8A56E] uppercase block mb-2 font-semibold">
                          Philosophy &amp; Ethos
                        </span>
                        <a
                          href="#philosophy"
                          onClick={closeMegaMenu}
                          className="block p-2 rounded-lg bg-[#E1DDD4] hover:bg-[#E1DDD4]/80 transition-colors text-xs"
                        >
                          <div className="font-bold text-[#2A2A2A] mb-0.5">Monolithic &amp; Vedic Harmony</div>
                          <p className="text-[11px] text-[#2A2A2A]/80 font-light leading-relaxed">
                            Crafting architecture aligned with cardinal solar paths and authentic material integrity.
                          </p>
                        </a>
                      </div>

                      <div className="text-[11px] font-mono text-[#2A2A2A]/70 space-y-1">
                        <div className="text-[#2A2A2A] font-bold flex items-center space-x-1">
                          <MapPin className="w-3 h-3 text-[#D8A56E]" />
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
                className={`flex items-center space-x-1.5 text-xs font-semibold tracking-[0.2em] uppercase transition-colors py-2 ${
                  activeMegaMenu === 'enterprise'
                    ? 'text-[#D8A56E]'
                    : isScrolled
                      ? 'text-[#2A2A2A] hover:text-[#BD8750]'
                      : 'text-white/85 hover:text-[#D8A56E]'
                }`}
              >
                <span>Enterprise</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    activeMegaMenu === 'enterprise'
                      ? 'rotate-180 text-[#D8A56E]'
                      : isScrolled
                        ? 'text-[#2A2A2A]/50'
                        : 'text-white/40'
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
                  <div className="rounded-2xl p-6 bg-[#F2F0EC] border border-[#2A2A2A]/12 shadow-2xl shadow-[#2A2A2A]/10 space-y-4">
                    <span className="text-[10px] font-mono tracking-widest text-[#D8A56E] uppercase block font-semibold">
                      Institutional &amp; Statutory Sector
                    </span>

                    <div className="space-y-2.5">
                      <button
                        onClick={() => {
                          closeMegaMenu();
                          onOpenTenders();
                        }}
                        className="w-full text-left p-3 rounded-xl bg-[#E1DDD4] hover:bg-[#E1DDD4]/80 transition-colors flex items-center justify-between group"
                      >
                        <div>
                          <div className="text-xs font-bold text-[#2A2A2A] flex items-center space-x-2">
                            <span>Notice Inviting Tenders (NIT)</span>
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#D8A56E]/20 text-[#2A2A2A] font-mono font-bold">
                              ACTIVE
                            </span>
                          </div>
                          <p className="text-[11px] text-[#2A2A2A]/70 font-light mt-0.5">
                            Public infrastructure, civic centers &amp; institutional RFPs
                          </p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#D8A56E] group-hover:text-[#BD8750] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>

                      <a
                        href="#services"
                        onClick={closeMegaMenu}
                        className="block p-3 rounded-xl hover:bg-[#E1DDD4] transition-colors"
                      >
                        <div className="text-xs font-bold text-[#2A2A2A]">Schedule of Rates (DSR)</div>
                        <p className="text-[11px] text-[#2A2A2A]/70 font-light mt-0.5">
                          Standard specifications &amp; statutory BOQ schedules
                        </p>
                      </a>
                    </div>

                    <div className="p-3 rounded-lg bg-[#E1DDD4] border border-[#2A2A2A]/10 text-[10px] font-mono text-[#2A2A2A]/80 flex items-center space-x-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D8A56E]" />
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
              className={`text-xs font-semibold tracking-[0.2em] uppercase transition-colors ${
                isScrolled ? 'text-[#2A2A2A] hover:text-[#BD8750]' : 'text-white/85 hover:text-[#D8A56E]'
              }`}
            >
              Contact
            </a>

            <button
              onClick={() => {
                closeMegaMenu();
                onOpenConsultation();
              }}
              className="px-6 py-2.5 rounded-full text-xs tracking-wider font-bold bg-[#D8A56E] hover:bg-[#BD8750] text-[#0D0D0D] transition-all duration-300 shadow-md shadow-[#D8A56E]/20 hover:shadow-[#BD8750]/30"
            >
              BOOK CONSULTATION
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 text-[11px] rounded-full bg-[#D8A56E] hover:bg-[#BD8750] text-[#0D0D0D] font-bold tracking-wider"
            >
              INQUIRE
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled
                  ? 'text-[#2A2A2A] hover:text-[#BD8750] glass-pill'
                  : 'text-white hover:text-[#D8A56E] border border-white/15 bg-white/5'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F2F0EC] border-t border-[#2A2A2A]/10 mt-3 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300 text-left shadow-2xl">
          <div className="flex flex-col space-y-3">
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-[#2A2A2A] hover:text-[#BD8750] py-2 border-b border-[#2A2A2A]/10 flex items-center justify-between"
            >
              <span>SELECTED WORKS</span>
              <span className="text-[10px] text-[#2A2A2A]/60 font-mono">5 PROJECTS</span>
            </a>

            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-[#2A2A2A] hover:text-[#BD8750] py-2 border-b border-[#2A2A2A]/10 flex items-center justify-between"
            >
              <span>SERVICES &amp; DISCIPLINES</span>
              <span className="text-[10px] text-[#2A2A2A]/60 font-mono">ATELIER</span>
            </a>

            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-[#2A2A2A] hover:text-[#BD8750] py-2 border-b border-[#2A2A2A]/10 flex items-center justify-between"
            >
              <span>CONCEPT VS REALITY</span>
              <span className="text-[10px] text-[#D8A56E] font-mono font-bold">INTERACTIVE</span>
            </a>

            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-[#2A2A2A] hover:text-[#BD8750] py-2 border-b border-[#2A2A2A]/10 flex items-center justify-between"
            >
              <span>DESIGN PHILOSOPHY</span>
              <span className="text-[10px] text-[#2A2A2A]/60 font-mono">ABOUT</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTenders();
              }}
              className="text-sm font-semibold tracking-wider text-[#D8A56E] hover:text-[#BD8750] py-2 border-b border-[#2A2A2A]/10 flex items-center justify-between text-left"
            >
              <span>TENDERS &amp; NIT NOTICES</span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#D8A56E]/20 text-[#2A2A2A] font-mono font-bold">
                RFP OPEN
              </span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-wider text-[#2A2A2A] hover:text-[#BD8750] py-2 border-b border-[#2A2A2A]/10 flex items-center justify-between"
            >
              <span>CONTACT &amp; STUDIOS</span>
              <span className="text-[10px] text-[#2A2A2A]/60 font-mono">LKO / DXB</span>
            </a>
          </div>

          <div className="pt-3 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-full text-center text-xs tracking-wider font-bold bg-[#D8A56E] hover:bg-[#BD8750] text-[#2A2A2A] shadow-md shadow-[#D8A56E]/20 transition-all"
            >
              BOOK PRIVATE CONSULTATION
            </button>
            <div className="text-center pt-2">
              <span className="text-[11px] text-[#2A2A2A]/60 font-mono">
                Sambhav Tower, Vibhuti Khand, Lucknow
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
