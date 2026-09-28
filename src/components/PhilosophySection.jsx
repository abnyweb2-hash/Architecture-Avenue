import React, { useState } from 'react';
import { Sparkles, Quote, ArrowUpRight } from 'lucide-react';

export default function PhilosophySection({ onOpenConsultation }) {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "Monolithic Purity",
      subtitle: "Forms carved from singular tectonic intention",
      desc: "We reject superficial ornamentation in pursuit of bold, sculptural massing. Our structures celebrate the muscular raw dignity of board-formed concrete, volcanic stone, and expansive sheets of glass that frame the cosmos.",
    },
    {
      title: "Climate-Adaptive Orientation",
      subtitle: "Passive intelligence over mechanical brute force",
      desc: "Before a line is drafted, we trace solar trajectories, seasonal wind azimuths, and indigenous precipitation patterns. Overhangs, courtyard microclimates, and thermal mass buffer extreme temperatures naturally.",
    },
    {
      title: "Honest Materiality",
      subtitle: "Materials that patinate with transcendent age",
      desc: "Untreated teak, natural Chunar sandstone, unlacquered champagne brass, and hand-troweled lime plasters. Materials chosen not for sterile perfection, but for the graceful poetry with which they weather the decades.",
    },
    {
      title: "Vedic & Mathematical Harmony",
      subtitle: "Ancient sacred geometry aligned with modern life",
      desc: "Synthesizing classical Vastu Shastra orientation principles with Le Corbusier's Modulor golden ratios, creating spaces that engender physiological serenity, mental clarity, and profound structural groundedness.",
    },
  ];

  const stats = [
    { value: "180+", label: "Completed Masterpieces", sub: "Spanning 4 Continents" },
    { value: "$450M+", label: "Cumulative Project Value", sub: "Delivered on Schedule" },
    { value: "16", label: "Global Design Citations", sub: "WAF, IIA & Architizer" },
    { value: "100%", label: "Net-Zero Ready", sub: "Low-Carbon Footprint" },
  ];

  return (
    <section id="philosophy" className="relative py-28 sm:py-36 bg-[#0D0D0D] text-white overflow-hidden transition-colors duration-500">
      {/* Background subtle ochre ambient glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D8A56E]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#BD8750]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Section: Vertical Architecture Photo & Sleek Statement Piece */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Left: Vertical Architecture Photo (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/40 group border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1600585526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
                alt="Architecture Avenue Design Philosophy"
                className="w-full h-[520px] sm:h-[620px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/30 to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#141414]/95 backdrop-blur-md border border-white/10 shadow-2xl">
                <span className="text-[10px] font-mono tracking-widest text-[#D8A56E] uppercase block mb-1 font-bold">
                  ATELIER CREED
                </span>
                <p className="text-xs font-semibold text-white leading-snug">
                  &ldquo;A building is not an object set on the earth; it is an amplification of the landscape itself.&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] text-neutral-400 font-mono border-t border-white/10 pt-2">
                  <span>FOUNDED 2014</span>
                  <span>STUDIO LUCKNOW &bull; DUBAI</span>
                </div>
              </div>
            </div>

            {/* Decorative geometrical frame */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#D8A56E] rounded-3xl -z-10 hidden sm:block opacity-30" />
          </div>

          {/* Right: Sleek Statement Piece & Quote (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#D8A56E] uppercase mb-4 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#D8A56E]" />
              <span>Design Philosophy &bull; Ethos</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-monumental font-bold tracking-tight text-white leading-[1.1] mb-6">
              Structural Harmony &amp; Modern Living.
            </h2>

            {/* Powerful Short Quote */}
            <div className="relative pl-6 py-5 my-4 border-l-2 border-[#D8A56E] bg-[#141414] rounded-r-2xl border-y border-r border-white/10 shadow-xl">
              <Quote className="w-8 h-8 text-[#D8A56E]/20 absolute -top-3 left-4 pointer-events-none" />
              <p className="font-editorial text-lg sm:text-2xl text-neutral-100 italic leading-relaxed">
                &ldquo;Architecture is not merely the enclosing of space; it is the choreographing of light, shadow, and human emotion across time.&rdquo;
              </p>
              <span className="block mt-2 text-xs font-mono tracking-wider text-neutral-400 uppercase font-semibold">
                &mdash; Principal Architect &amp; Founding Partners, Architecture Avenue
              </span>
            </div>

            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed my-4">
              At Architecture Avenue, every project begins as an ontological dialogue between terrain, climate, and inhabitant. 
              We do not build monuments to ego; we construct serene shelters that breathe with seasonal rhythms, frame sky and water, 
              and stand resolute against the relentless passage of time.
            </p>

            {/* Pillars Interactive Selector */}
            <div className="mt-6 space-y-3">
              {pillars.map((pil, idx) => (
                <div
                  key={idx}
                  onClick={() => setActivePillar(idx)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activePillar === idx
                      ? 'bg-[#181818] border-[#D8A56E] shadow-lg shadow-[#D8A56E]/10'
                      : 'bg-[#141414] border-white/10 hover:border-[#D8A56E]/60 text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-xs font-mono font-bold text-[#D8A56E]">
                        0{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white">{pil.title}</h4>
                    </div>
                    <span className="text-xs text-neutral-500 font-mono">
                      {activePillar === idx ? '▲' : '▼'}
                    </span>
                  </div>

                  {activePillar === idx && (
                    <div className="mt-3 pt-3 border-t border-white/10 animate-in fade-in duration-200">
                      <p className="text-xs text-[#D8A56E] font-bold mb-1">{pil.subtitle}</p>
                      <p className="text-xs text-neutral-300 leading-relaxed font-light">{pil.desc}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="mt-8 flex items-center space-x-4">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded-full bg-[#D8A56E] hover:bg-[#BD8750] text-[#0D0D0D] font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#D8A56E]/20 hover:shadow-[#BD8750]/35 flex items-center space-x-2"
              >
                <span>Initiate Private Dialogue</span>
                <ArrowUpRight className="w-4 h-4 text-[#0D0D0D]" />
              </button>
            </div>
          </div>
        </div>

        {/* Metric Counters Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#141414] border border-white/10 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D8A56E]/5 via-transparent to-[#D8A56E]/5 pointer-events-none" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
            {stats.map((st, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl sm:text-5xl lg:text-6xl font-monumental font-bold text-[#D8A56E]">
                  {st.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white mt-2 tracking-wide uppercase">
                  {st.label}
                </span>
                <span className="text-[11px] text-neutral-400 font-mono mt-0.5">
                  {st.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
