import React, { useState } from 'react';
import { Share2, Film, Check, Layers, ChevronDown, ArrowUpRight } from 'lucide-react';
import BlueprintCanvas from './ArchitecturalCanvas';

export default function HeroSection({ onOpenVideoReel, onOpenConsultation }) {
  const [copiedShare, setCopiedShare] = useState(false);
  const [gridOverlay, setGridOverlay] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      {/* ── Full-screen blueprint canvas background ── */}
      <div className="absolute inset-0 z-0">
        <BlueprintCanvas />

        {/* Vignette — strong dark shield for text, fades out before right model */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to right, rgba(13,13,13,0.97) 0%, rgba(13,13,13,0.92) 28%, rgba(13,13,13,0.55) 48%, rgba(13,13,13,0.05) 68%, rgba(13,13,13,0.0) 100%)',
          }}
        />
        {/* Top & bottom fade */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,13,13,0.80) 0%, transparent 16%, transparent 80%, rgba(13,13,13,0.92) 100%)',
          }}
        />
      </div>

      {/* ── Spacer under navbar ── */}
      <div className="pt-24 sm:pt-28" />

      {/* ── Left-aligned Minimal Hero Content ── */}
      <div className="relative z-20 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-md lg:max-w-lg">

            {/* Eyebrow line */}
            <div className="flex items-center space-x-3 mb-5">
              <span className="w-8 h-px bg-[#D4AF37]" />
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#D4AF37] uppercase font-bold">
                Est. 2014 · Lucknow · Dubai
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-monumental font-bold text-white leading-[1.12] mb-4">
              Architecting<br />
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, #D4AF37 0%, #F3E5AB 55%, #D4AF37 100%)',
                }}
              >
                Timeless Spaces.
              </span>
            </h1>

            {/* Short subline */}
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm mb-8">
              Elite residential &amp; luxury architectural atelier crafting monolithic living with mathematical precision.
            </p>

            {/* CTAs */}
            <div className="flex items-center space-x-3">
              <a
                href="#portfolio"
                className="group inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#D8A56E] hover:bg-[#BD8750] text-[#0D0D0D] text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#D8A56E]/25 hover:shadow-[#BD8750]/40"
              >
                <span>View Projects</span>
                <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase text-neutral-200 hover:text-[#D8A56E] transition-colors border border-white/15 hover:border-[#D8A56E]/60 backdrop-blur-sm bg-white/5"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Micro stats row */}
            <div className="mt-10 flex items-center space-x-6 text-[11px] font-mono text-neutral-400">
              <div>
                <span className="text-white font-bold text-sm block">180+</span>
                <span>Projects Completed</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="text-white font-bold text-sm block">16</span>
                <span>Global Awards</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="text-white font-bold text-sm block">12 Yrs</span>
                <span>Atelier Pedigree</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Hero Bottom Bar ── */}
      <div className="relative z-20 w-full border-t border-white/10 bg-[#0B1420]/90 backdrop-blur-xl py-4 sm:py-5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-5">
          {/* Left action buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3 w-full xl:w-auto justify-center sm:justify-start">
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#D8A56E] transition-all"
              title="View on Behance"
            >
              <span className="font-bold text-sm">Bē</span>
            </a>

            <button
              onClick={handleShare}
              className="w-9 h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-neutral-300 hover:text-white hover:border-[#D8A56E] transition-all relative"
              title="Share"
            >
              {copiedShare ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Share2 className="w-3.5 h-3.5" />
              )}
              {copiedShare && (
                <span className="absolute -top-8 px-2 py-1 bg-emerald-500 text-black text-[10px] font-bold rounded shadow-lg whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>

            <button
              onClick={() => setGridOverlay(!gridOverlay)}
              className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                gridOverlay ? 'border-[#D8A56E] text-[#D8A56E] bg-white/10' : 'border-white/15 bg-white/5 text-neutral-400 hover:text-white'
              }`}
              title="Toggle Grid"
            >
              <Layers className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenVideoReel}
              className="group flex items-center space-x-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 hover:border-[#D8A56E] transition-all"
            >
              <Film className="w-3.5 h-3.5 text-[#D8A56E]" />
              <span className="text-xs tracking-wider font-semibold uppercase text-neutral-200 group-hover:text-white">
                Video Reel
              </span>
            </button>
          </div>

          {/* Center studio info */}
          <div className="text-center xl:text-left flex-1 max-w-lg">
            <p className="text-[11px] font-mono font-medium tracking-wider text-[#D8A56E] uppercase">
              SAMBHAV TOWER, VIBHUTI KHAND, GOMTI NAGAR, LUCKNOW
            </p>
            <p className="text-[10px] text-neutral-400 tracking-wide mt-0.5">
              Ph: <span className="text-neutral-300">+91 94158 89038</span>
              <span className="mx-2 opacity-30">·</span>
              GSTIN: <span className="text-neutral-300">09AAVFA7373H1ZT</span>
            </p>
          </div>

          {/* Right — blueprint tag */}
          <div className="hidden xl:flex items-center space-x-2 text-[10px] font-mono text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8A56E] animate-pulse" />
            <span>LIVE BLUEPRINT · DWG-AA-2026-001 · SCALE 1:100</span>
          </div>
        </div>
      </div>
    </section>
  );
}
