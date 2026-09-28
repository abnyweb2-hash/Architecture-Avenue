import React, { useState, useRef, useCallback } from 'react';
import { Layers, Sparkles, Sliders, Eye, Compass, MoveHorizontal } from 'lucide-react';
import SliderBlueprintCanvas from './SliderBlueprintCanvas';

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="comparison" className="relative py-28 sm:py-36 bg-[#0D0D0D] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#D4AF37] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Visual Comparative Study</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-monumental font-bold tracking-tight text-white mb-4">
            Concept Render vs. Constructed Reality
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Drag the interactive divider to witness the seamless continuity between our preliminary 3D volumetric schematics and the finished architectural marvel.
          </p>

          {/* Quick presets */}
          <div className="flex items-center justify-center space-x-3 mt-6">
            <button
              onClick={() => setSliderPos(0)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                sliderPos === 0
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              100% Concept BIM
            </button>
            <button
              onClick={() => setSliderPos(50)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                sliderPos === 50
                  ? 'bg-[#D4AF37] text-black font-bold'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              50 / 50 Hybrid View
            </button>
            <button
              onClick={() => setSliderPos(100)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                sliderPos === 100
                  ? 'bg-emerald-600 text-white font-bold'
                  : 'bg-white/5 text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              100% Reality
            </button>
          </div>
        </div>

        {/* Draggable Slider Container */}
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[380px] sm:h-[540px] md:h-[620px] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/15 shadow-2xl shadow-black/80"
        >
          {/* Right Image: Finished Constructed Reality (Underneath) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/comparison-house.jpg"
              alt="Final constructed luxury architecture"
              className="w-full h-full object-cover"
            />
            {/* Tag indicator */}
            <div className="absolute bottom-6 right-6 z-10 bg-black/85 backdrop-blur-md px-4 py-2 rounded-xl border border-emerald-500/40 text-xs font-mono text-emerald-400 flex items-center space-x-2 shadow-xl shadow-black/60 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>FINAL CONSTRUCTED RESIDENCE (1:1 REALITY)</span>
            </div>
          </div>

          {/* Left Panel: Identical House Golden Architectural Blueprint (Clipped by slider) */}
          <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
          >
            <div className="relative w-full h-full bg-[#0D0D0D]">
              {/* Actual Golden Blueprint of the exact identical house */}
              <SliderBlueprintCanvas />

              {/* Tag indicator */}
              <div className="absolute bottom-6 left-6 z-20 bg-black/85 backdrop-blur-md px-4 py-2 rounded-xl border border-[#D4AF37]/50 text-xs font-mono text-[#D4AF37] flex items-center space-x-2 shadow-xl shadow-black/60 pointer-events-none">
                <Layers className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>GOLDEN BIM BLUEPRINT · 1:1 CAD ALIGNMENT</span>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle with Golden Aura */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#D4AF37] z-30 cursor-ew-resize flex items-center justify-center -translate-x-1/2 shadow-[0_0_20px_rgba(212,175,55,0.9)]"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Vertical glow line extending top to bottom */}
            <div className="absolute inset-y-0 -left-1 -right-1 bg-[#D4AF37]/20 blur-sm pointer-events-none" />

            {/* Center Circular Knob */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#0D0D0D] text-[#D4AF37] shadow-2xl shadow-black flex items-center justify-center border-2 border-[#D4AF37] hover:scale-110 active:scale-95 transition-transform">
              <MoveHorizontal className="w-5 h-5 text-[#D4AF37]" />
            </div>

            {/* Position Percentage Badge */}
            <div className="absolute top-6 px-2.5 py-1 rounded bg-black/90 text-[#D4AF37] font-mono text-[10px] tracking-wider border border-[#D4AF37]/40 shadow-lg whitespace-nowrap">
              {Math.round(sliderPos)}%
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs font-mono text-[#D4AF37] block mb-1">01 / STRUCTURAL FIDELITY</span>
            <h4 className="text-base font-bold text-white mb-2">99.8% As-Built Geometric Conformance</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Every post-tensioned cantilever slab and steel node aligns with sub-millimeter laser scans taken during high-rise staging.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs font-mono text-[#D4AF37] block mb-1">02 / THERMAL SHADING</span>
            <h4 className="text-base font-bold text-white mb-2">Passive Solar Glare Mitigation</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Preliminary computational shadow simulations ensured interior living areas receive 0% harsh direct infrared penetration during midday.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-xs font-mono text-[#D4AF37] block mb-1">03 / HYDROLOGICAL CALM</span>
            <h4 className="text-base font-bold text-white mb-2">Infinity Perimeter Acoustic Water Mirror</h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Hydraulic recirculating overflow channels maintain a glassy mirror surface that cools incoming southwest ambient breezes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
