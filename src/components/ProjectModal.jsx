import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Maximize2, Calendar, Award, Layers, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose, onInquireProject }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [viewMode, setViewMode] = useState('photo'); // 'photo' or 'blueprint'

  if (!project) return null;

  const currentGallery = project.gallery || [project.image];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % currentGallery.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + currentGallery.length) % currentGallery.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
      {/* Backdrop click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#121212] border border-white/10 shadow-2xl flex flex-col my-auto text-left">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121212]/95 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30">
              {project.category}
            </span>
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
              ARCHIVE REF // {project.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {/* View Mode Switcher (Photo vs Blueprint) */}
            <div className="flex items-center bg-black/50 p-1 rounded-lg border border-white/10 text-xs font-mono">
              <button
                onClick={() => setViewMode('photo')}
                className={`px-3 py-1 rounded transition-colors ${
                  viewMode === 'photo'
                    ? 'bg-[#D4AF37] text-black font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Photography
              </button>
              <button
                onClick={() => setViewMode('blueprint')}
                className={`px-3 py-1 rounded transition-colors flex items-center space-x-1 ${
                  viewMode === 'blueprint'
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Blueprint CAD</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full glass-pill hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
          {/* Left Visual Gallery (7 cols) */}
          <div className="lg:col-span-7 bg-black relative flex flex-col justify-between min-h-[380px] sm:min-h-[500px]">
            {/* Image display */}
            <div className="relative w-full h-[380px] sm:h-[480px] overflow-hidden flex items-center justify-center">
              {viewMode === 'photo' ? (
                <img
                  src={currentGallery[activeImageIndex]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              ) : (
                <div className="relative w-full h-full bg-[#0a192f] flex flex-col items-center justify-center p-6 text-center blueprint-grid-dense">
                  <img
                    src={project.blueprintImg || project.image}
                    alt="Blueprint schematic"
                    className="w-full h-full object-contain filter invert contrast-200 hue-rotate-180 opacity-80"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded border border-blue-400/40 text-[11px] font-mono text-blue-300">
                    BIM LOD-400 CAD SCHEMATIC OVERLAY &bull; SCALE 1:100
                  </div>
                </div>
              )}

              {/* Prev / Next controls for photo gallery */}
              {viewMode === 'photo' && currentGallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation Strip */}
            {viewMode === 'photo' && currentGallery.length > 1 && (
              <div className="p-3 bg-[#0d0d0d] border-t border-white/10 flex items-center space-x-2 overflow-x-auto">
                {currentGallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#D4AF37] scale-105 shadow-md shadow-[#D4AF37]/30'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Information & Architectural Specifications (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#161616]">
            <div>
              {/* Title & Location */}
              <div className="flex items-center space-x-2 text-neutral-400 text-xs mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{project.location}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-monumental font-bold text-white mb-2">
                {project.title}
              </h2>
              <p className="text-xs text-[#D4AF37] font-mono uppercase tracking-widest mb-4">
                {project.typology}
              </p>

              {/* Architectural Description */}
              <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-light">
                {project.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-black/40 border border-white/5 text-xs mb-6">
                <div>
                  <span className="text-neutral-500 font-mono block">Built-Up Area</span>
                  <span className="text-white font-semibold text-sm">{project.area}</span>
                </div>
                <div>
                  <span className="text-neutral-500 font-mono block">Year Completed</span>
                  <span className="text-white font-semibold text-sm">{project.year}</span>
                </div>
                <div>
                  <span className="text-neutral-500 font-mono block">Client Typology</span>
                  <span className="text-white font-semibold text-sm">{project.client}</span>
                </div>
                <div>
                  <span className="text-neutral-500 font-mono block">Status</span>
                  <span className="text-emerald-400 font-semibold text-sm flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{project.status}</span>
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2.5 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Key Architectural Innovations</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-neutral-300">
                  {project.features?.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials Palette */}
              {project.materials && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Materiality Palette
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-neutral-300"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Award Recognition */}
              {project.awards && (
                <div className="p-3 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center space-x-2.5 text-xs text-[#F3E5AB]">
                  <Award className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                  <span className="font-medium">{project.awards}</span>
                </div>
              )}
            </div>

            {/* Direct CTA */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  onClose();
                  onInquireProject(project.title);
                }}
                className="w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#c49f2e] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40"
              >
                <span>Inquire About This Design</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
