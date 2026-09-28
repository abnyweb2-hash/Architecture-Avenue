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
    <section id="comparison" className="relative py-28 sm:py-36 bg-[#E1DDD4] text-[#2A2A2A] overflow-hidden">
      {/* Background subtle ochre ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#D8A56E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#BD8750]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#D8A56E] uppercase mb-3 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A56E]" />
            <span>Interactive Visual Comparative Study</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-monumental font-bold tracking-tight text-[#2A2A2A] mb-4">
            Concept Render vs. Constructed Reality
          </h2>
          <p className="text-sm sm:text-base text-[#2A2A2A]/80 font-light leading-relaxed">
            Drag the interactive divider to witness the seamless continuity between our preliminary 3D volumetric schematics and the finished architectural marvel.
          </p>

          {/* Quick presets */}
          <div className="flex items-center justify-center space-x-3 mt-6">
            <button
              onClick={() => setSliderPos(0)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                sliderPos === 0
                  ? 'bg-[#2A2A2A] text-[#F2F0EC] font-bold border-[#2A2A2A]'
                  : 'bg-[#F2F0EC] text-[#2A2A2A]/70 hover:text-[#2A2A2A] border-[#2A2A2A]/15 hover:border-[#D8A56E]'
              }`}
            >
              100% Concept BIM
            </button>
            <button
              onClick={() => setSliderPos(50)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                sliderPos === 50
                  ? 'bg-[#D8A56E] text-[#2A2A2A] font-bold border-[#BD8750] shadow-md shadow-[#D8A56E]/20'
                  : 'bg-[#F2F0EC] text-[#2A2A2A]/70 hover:text-[#2A2A2A] border-[#2A2A2A]/15 hover:border-[#D8A56E]'
              }`}
            >
              50 / 50 Hybrid View
            </button>
            <button
              onClick={() => setSliderPos(100)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                sliderPos === 100
                  ? 'bg-[#2A2A2A] text-[#F2F0EC] font-bold border-[#2A2A2A]'
                  : 'bg-[#F2F0EC] text-[#2A2A2A]/70 hover:text-[#2A2A2A] border-[#2A2A2A]/15 hover:border-[#D8A56E]'
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
          className="relative w-full h-[380px] sm:h-[540px] md:h-[620px] rounded-3xl overflow-hidden cursor-ew-resize select-none border border-[#2A2A2A]/15 shadow-2xl shadow-[#2A2A2A]/15"
        >
          {/* Right Image: Finished Constructed Reality (Underneath) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src="/comparison-house.jpg"
              alt="Final constructed luxury architecture"
              className="w-full h-full object-cover"
            />
            {/* Tag indicator */}
            <div className="absolute bottom-6 right-6 z-10 bg-[#F2F0EC]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#2A2A2A]/15 text-xs font-mono text-[#2A2A2A] flex items-center space-x-2 shadow-xl shadow-[#2A2A2A]/20 pointer-events-none font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
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
              <div className="absolute bottom-6 left-6 z-20 bg-[#F2F0EC]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-[#D8A56E]/50 text-xs font-mono text-[#2A2A2A] flex items-center space-x-2 shadow-xl shadow-[#2A2A2A]/20 pointer-events-none font-semibold">
                <Layers className="w-3.5 h-3.5 text-[#D8A56E]" />
                <span>STRUCTURAL OCHRE BIM · 1:1 CAD ALIGNMENT</span>
              </div>
            </div>
          </div>

          {/* Draggable Divider Handle with Warm Ochre Aura */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#D8A56E] z-30 cursor-ew-resize flex items-center justify-center -translate-x-1/2 shadow-[0_0_20px_rgba(216,165,110,0.9)]"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Vertical glow line extending top to bottom */}
            <div className="absolute inset-y-0 -left-1 -right-1 bg-[#D8A56E]/25 blur-sm pointer-events-none" />

            {/* Center Circular Knob */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-[#F2F0EC] text-[#2A2A2A] shadow-2xl shadow-[#2A2A2A]/40 flex items-center justify-center border-2 border-[#D8A56E] hover:border-[#BD8750] hover:scale-110 active:scale-95 transition-transform">
              <MoveHorizontal className="w-5 h-5 text-[#2A2A2A]" />
            </div>

            {/* Position Percentage Badge */}
            <div className="absolute top-6 px-2.5 py-1 rounded-lg bg-[#F2F0EC] text-[#2A2A2A] font-mono text-[10px] tracking-wider border border-[#D8A56E]/50 shadow-lg whitespace-nowrap font-bold">
              {Math.round(sliderPos)}%
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="p-6 rounded-3xl bg-[#F2F0EC] border border-[#2A2A2A]/10 hover:border-[#D8A56E] transition-all shadow-sm">
            <span className="text-xs font-mono text-[#D8A56E] block mb-1 font-bold">01 / STRUCTURAL FIDELITY</span>
            <h4 className="text-base font-bold text-[#2A2A2A] mb-2">99.8% As-Built Geometric Conformance</h4>
            <p className="text-xs text-[#2A2A2A]/80 font-light leading-relaxed">
              Every post-tensioned cantilever slab and steel node aligns with sub-millimeter laser scans taken during high-rise staging.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F2F0EC] border border-[#2A2A2A]/10 hover:border-[#D8A56E] transition-all shadow-sm">
            <span className="text-xs font-mono text-[#D8A56E] block mb-1 font-bold">02 / THERMAL SHADING</span>
            <h4 className="text-base font-bold text-[#2A2A2A] mb-2">Passive Solar Glare Mitigation</h4>
            <p className="text-xs text-[#2A2A2A]/80 font-light leading-relaxed">
              Preliminary computational shadow simulations ensured interior living areas receive 0% harsh direct infrared penetration during midday.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#F2F0EC] border border-[#2A2A2A]/10 hover:border-[#D8A56E] transition-all shadow-sm">
            <span className="text-xs font-mono text-[#D8A56E] block mb-1 font-bold">03 / HYDROLOGICAL CALM</span>
            <h4 className="text-base font-bold text-[#2A2A2A] mb-2">Infinity Perimeter Acoustic Water Mirror</h4>
            <p className="text-xs text-[#2A2A2A]/80 font-light leading-relaxed">
              Hydraulic recirculating overflow channels maintain a glassy mirror surface that cools incoming southwest ambient breezes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
