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
    <section id="services" className="relative py-28 sm:py-36 bg-[#E1DDD4] text-[#2A2A2A] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#2A2A2A]/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#D8A56E] uppercase mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#D8A56E]" />
              <span>Full-Spectrum Disciplines</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-monumental font-bold tracking-tight text-[#2A2A2A]">
              Services &amp; Atelier Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#2A2A2A]/80 font-light mt-3 max-w-2xl leading-relaxed">
              From raw topography and microclimate zoning to bespoke structural engineering and high-tactile interior styling.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <button
              onClick={onOpenTenders}
              className="px-5 py-2.5 rounded-full bg-[#F2F0EC] border border-[#2A2A2A]/15 text-xs font-mono tracking-wider text-[#2A2A2A] hover:border-[#D8A56E] hover:text-[#BD8750] transition-all flex items-center space-x-2 shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#D8A56E]" />
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
                className="group relative p-8 sm:p-10 rounded-3xl bg-[#F2F0EC] border border-[#2A2A2A]/10 hover:border-[#D8A56E] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D8A56E]/15 flex flex-col justify-between"
              >
                {/* Accent top border glow on hover */}
                <div className="absolute top-0 left-10 right-10 h-1 bg-gradient-to-r from-transparent via-[#D8A56E] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Header: Number, Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-13 h-13 rounded-2xl bg-[#E1DDD4] group-hover:bg-[#D8A56E] flex items-center justify-center text-[#2A2A2A] transition-all duration-300 group-hover:scale-105 shadow-sm border border-[#2A2A2A]/5">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-2xl font-monumental font-bold text-[#2A2A2A]/30 group-hover:text-[#D8A56E] transition-colors">
                          {srv.number}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-[#E1DDD4] text-[#2A2A2A] font-semibold border border-[#2A2A2A]/10">
                      {srv.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold font-monumental text-[#2A2A2A] mb-2 leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#D8A56E] font-bold tracking-wide uppercase mb-3">
                    {srv.subtitle}
                  </p>
                  <p className="text-sm text-[#2A2A2A]/80 leading-relaxed font-light mb-6">
                    {srv.description}
                  </p>

                  {/* Deliverables Checklist (2 Columns in wider card) */}
                  <div className="border-t border-[#2A2A2A]/10 pt-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#2A2A2A]/60 block mb-3 font-semibold">
                      Core Atelier Deliverables
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {srv.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-[#2A2A2A] leading-snug">
                          <Check className="w-3.5 h-3.5 text-[#D8A56E] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-5 border-t border-[#2A2A2A]/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#2A2A2A]/60">FEASIBILITY &bull; DESIGN &bull; STAGING</span>
                  <button
                    onClick={onOpenConsultation}
                    className="px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#2A2A2A] bg-[#E1DDD4] group-hover:bg-[#D8A56E] group-hover:text-[#2A2A2A] transition-all flex items-center space-x-2 border border-[#2A2A2A]/10 shadow-sm"
                  >
                    <span>Engage Atelier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Architectural Methodology / Workflow in Pale Greige (#F2F0EC) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F2F0EC] border border-[#2A2A2A]/10 text-[#2A2A2A] relative overflow-hidden shadow-xl shadow-[#2A2A2A]/5">
          {/* Subtle ochre backlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8A56E]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 pb-6 border-b border-[#2A2A2A]/10">
              <div>
                <span className="text-xs font-mono text-[#D8A56E] tracking-[0.25em] uppercase block mb-1 font-bold">
                  Atelier Protocol
                </span>
                <h3 className="text-2xl sm:text-3xl font-monumental font-bold text-[#2A2A2A]">
                  The Four Pillars of Architectural Realization
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#2A2A2A]/70 max-w-md mt-3 md:mt-0 font-light leading-relaxed">
                Our step-by-step rigorous methodology guaranteeing execution integrity, budget predictability, and uncompromised aesthetic purity.
              </p>
            </div>

            {/* Stage Selector Buttons */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {WORKFLOW_STAGES.map((stg, i) => (
                <button
                  key={stg.step}
                  onClick={() => setActiveTab(i)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border ${
                    activeTab === i
                      ? 'bg-[#D8A56E]/20 border-[#D8A56E] shadow-md shadow-[#D8A56E]/15'
                      : 'bg-[#E1DDD4] border-[#2A2A2A]/10 hover:border-[#D8A56E]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#D8A56E]">PHASE {stg.step}</span>
                    <span className={`w-2 h-2 rounded-full ${activeTab === i ? 'bg-[#D8A56E]' : 'bg-[#2A2A2A]/30'}`} />
                  </div>
                  <h4 className="text-xs font-bold text-[#2A2A2A] uppercase tracking-wider">{stg.phase}</h4>
                </button>
              ))}
            </div>

            {/* Active Stage Detail Showcase */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#E1DDD4] border border-[#2A2A2A]/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-mono text-[#D8A56E] tracking-widest uppercase font-bold">
                  ACTIVE PHASE PROTOCOL // {WORKFLOW_STAGES[activeTab].phase}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-monumental text-[#2A2A2A]">
                  {WORKFLOW_STAGES[activeTab].title}
                </h4>
                <p className="text-sm text-[#2A2A2A]/80 leading-relaxed font-light">
                  {WORKFLOW_STAGES[activeTab].details}
                </p>
              </div>

              <div className="flex-shrink-0">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-full bg-[#D8A56E] hover:bg-[#BD8750] text-[#2A2A2A] font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#D8A56E]/20 hover:shadow-[#BD8750]/30"
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
