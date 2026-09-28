import React, { useState } from 'react';
import { SERVICES_DATA, WORKFLOW_STAGES } from '../data/portfolioData';
import { Compass, Layers, Trees, Box, Check, ArrowRight, Sparkles, Download, FileText } from 'lucide-react';

const iconMap = {
  Compass: Compass,
  Layers: Layers,
  TreePine: Trees,
  Box: Box,
};

export default function ServicesSection({ onOpenConsultation, onOpenTenders }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#F8F9FA] text-[#0D0D0D] transition-colors duration-500">
      {/* Visual divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#9b7b1b] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Spectrum Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-monumental font-bold tracking-tight text-[#0D0D0D]">
              Services &amp; Atelier Capabilities
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-light mt-3 max-w-2xl">
              From raw topography and microclimate zoning to bespoke structural engineering and high-tactile interior styling.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <button
              onClick={onOpenTenders}
              className="px-4 py-2 rounded-full border border-black/15 text-xs font-mono tracking-wider hover:border-[#D4AF37] hover:text-[#9b7b1b] transition-all flex items-center space-x-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>DSR &amp; Schedule of Rates</span>
            </button>
          </div>
        </div>

        {/* 4 Core Services Grid (2 in one row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {SERVICES_DATA.map((srv) => {
            const IconComponent = iconMap[srv.icon] || Compass;

            return (
              <div
                key={srv.id}
                className="group relative p-8 sm:p-10 rounded-3xl bg-white border border-black/5 hover:border-[#D4AF37] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10 flex flex-col justify-between"
              >
                {/* Accent top border glow on hover */}
                <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Header: Number, Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-13 h-13 rounded-2xl bg-neutral-100 group-hover:bg-[#0D0D0D] flex items-center justify-center text-[#0D0D0D] group-hover:text-[#D4AF37] transition-all duration-300 group-hover:scale-105 shadow-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-2xl font-monumental font-bold text-neutral-300 group-hover:text-[#D4AF37] transition-colors">
                          {srv.number}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-neutral-100 text-neutral-700 border border-neutral-200/60">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold font-monumental text-[#0D0D0D] mb-2 leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#9b7b1b] font-medium tracking-wide uppercase mb-3">
                    {srv.subtitle}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed font-light mb-6">
                    {srv.description}
                  </p>

                  {/* Deliverables Checklist (2 Columns in wider card) */}
                  <div className="border-t border-black/5 pt-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-3">
                      Core Atelier Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {srv.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-neutral-700 leading-snug">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-5 border-t border-black/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400">FEASIBILITY &bull; ARCHITECTURAL DESIGN &bull; STAGING</span>
                  <button
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[#0D0D0D] bg-neutral-100 group-hover:bg-[#0D0D0D] group-hover:text-white transition-all flex items-center space-x-2 border border-black/5"
                  >
                    <span>Engage Atelier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Architectural Methodology / Workflow */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0D0D] text-white relative overflow-hidden">
          {/* Subtle gold backlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-[#D4AF37] tracking-[0.25em] uppercase block mb-1">
                  Atelier Protocol
                </span>
                <h3 className="text-2xl sm:text-3xl font-monumental font-bold">
                  The Four Pillars of Architectural Realization
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-3 md:mt-0 font-light">
                Our step-by-step rigorous methodology guaranteeing execution integrity, budget predictability, and uncompromised aesthetic purity.
              </p>
            </div>

            {/* Stage Selector Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {WORKFLOW_STAGES.map((stg, i) => (
                <button
                  key={stg.step}
                  onClick={() => setActiveTab(i)}
                  className={`p-4 rounded-xl text-left transition-all duration-300 border ${
                    activeTab === i
                      ? 'bg-white/10 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/10'
                      : 'bg-white/5 border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#D4AF37]">PHASE {stg.step}</span>
                    <span className={`w-2 h-2 rounded-full ${activeTab === i ? 'bg-[#D4AF37]' : 'bg-neutral-600'}`} />
                  </div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">{stg.phase}</h4>
                </button>
              ))}
            </div>

            {/* Active Stage Detail Showcase */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
                  ACTIVE PHASE PROTOCOL // {WORKFLOW_STAGES[activeTab].phase}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-monumental text-white">
                  {WORKFLOW_STAGES[activeTab].title}
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  {WORKFLOW_STAGES[activeTab].details}
                </p>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#c49f2e] text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#D4AF37]/20"
                >
                  Schedule Feasibility Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
