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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#2A2A2A]/70 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Backdrop click to close */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Modal Container in Pale Greige (#F2F0EC) */}
      <div className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#F2F0EC] border border-[#2A2A2A]/15 shadow-2xl shadow-[#2A2A2A]/30 flex flex-col my-auto text-left">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A]/10 bg-[#F2F0EC]/95 backdrop-blur-md">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-[#D8A56E]/20 text-[#2A2A2A] font-bold border border-[#D8A56E]/40">
              {project.category}
            </span>
            <span className="text-xs text-[#2A2A2A]/60 font-mono hidden sm:inline">
              ARCHIVE REF // {project.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-[#E1DDD4] p-1 rounded-xl border border-[#2A2A2A]/10 text-xs font-mono">
              <button
                onClick={() => setViewMode('photo')}
                className={`px-3 py-1 rounded-lg transition-colors font-semibold ${
                  viewMode === 'photo'
                    ? 'bg-[#D8A56E] text-[#2A2A2A] shadow-sm'
                    : 'text-[#2A2A2A]/70 hover:text-[#2A2A2A]'
                }`}
              >
                Photography
              </button>
              <button
                onClick={() => setViewMode('blueprint')}
                className={`px-3 py-1 rounded-lg transition-colors flex items-center space-x-1 font-semibold ${
                  viewMode === 'blueprint'
                    ? 'bg-[#2A2A2A] text-[#F2F0EC] shadow-sm'
                    : 'text-[#2A2A2A]/70 hover:text-[#2A2A2A]'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Blueprint CAD</span>
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#E1DDD4] hover:bg-[#D8A56E] text-[#2A2A2A] border border-[#2A2A2A]/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
          {/* Left Visual Gallery (7 cols) */}
          <div className="lg:col-span-7 bg-[#E1DDD4] relative flex flex-col justify-between min-h-[380px] sm:min-h-[500px] border-b lg:border-b-0 lg:border-r border-[#2A2A2A]/10">
            {/* Image display */}
            <div className="relative w-full h-[380px] sm:h-[480px] overflow-hidden flex items-center justify-center">
              {viewMode === 'photo' ? (
                <img
                  src={currentGallery[activeImageIndex]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              ) : (
                <div className="relative w-full h-full bg-[#E1DDD4] flex flex-col items-center justify-center p-6 text-center blueprint-grid">
                  <img
                    src={project.blueprintImg || project.image}
                    alt="Blueprint schematic"
                    className="w-full h-full object-contain filter contrast-150 opacity-80"
                  />
                  <div className="absolute bottom-4 left-4 bg-[#F2F0EC]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#2A2A2A]/15 text-[11px] font-mono text-[#2A2A2A] shadow-sm">
                    BIM LOD-400 CAD SCHEMATIC OVERLAY &bull; SCALE 1:100
                  </div>
                </div>
              )}

              {/* Prev / Next controls for photo gallery */}
              {viewMode === 'photo' && currentGallery.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#F2F0EC]/90 hover:bg-[#D8A56E] text-[#2A2A2A] backdrop-blur-md border border-[#2A2A2A]/15 transition-all hover:scale-110 shadow-md"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#F2F0EC]/90 hover:bg-[#D8A56E] text-[#2A2A2A] backdrop-blur-md border border-[#2A2A2A]/15 transition-all hover:scale-110 shadow-md"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnail Navigation Strip */}
            {viewMode === 'photo' && currentGallery.length > 1 && (
              <div className="p-3 bg-[#F2F0EC] border-t border-[#2A2A2A]/10 flex items-center space-x-2 overflow-x-auto">
                {currentGallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#D8A56E] scale-105 shadow-md shadow-[#D8A56E]/30'
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
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#F2F0EC]">
            <div>
              {/* Title & Location */}
              <div className="flex items-center space-x-2 text-[#2A2A2A]/70 text-xs mb-2 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#D8A56E]" />
                <span>{project.location}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-monumental font-bold text-[#2A2A2A] mb-2">
                {project.title}
              </h2>
              <p className="text-xs text-[#D8A56E] font-mono font-bold uppercase tracking-widest mb-4">
                {project.typology}
              </p>

              {/* Architectural Description */}
              <p className="text-[#2A2A2A]/80 text-sm leading-relaxed mb-6 font-light">
                {project.description}
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-[#E1DDD4] border border-[#2A2A2A]/10 text-xs mb-6">
                <div>
                  <span className="text-[#2A2A2A]/60 font-mono block">Built-Up Area</span>
                  <span className="text-[#2A2A2A] font-bold text-sm">{project.area}</span>
                </div>
                <div>
                  <span className="text-[#2A2A2A]/60 font-mono block">Year Completed</span>
                  <span className="text-[#2A2A2A] font-bold text-sm">{project.year}</span>
                </div>
                <div>
                  <span className="text-[#2A2A2A]/60 font-mono block">Client Typology</span>
                  <span className="text-[#2A2A2A] font-bold text-sm">{project.client}</span>
                </div>
                <div>
                  <span className="text-[#2A2A2A]/60 font-mono block">Status</span>
                  <span className="text-emerald-700 font-bold text-sm flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                    <span>{project.status}</span>
                  </span>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#2A2A2A]/70 mb-2.5 flex items-center space-x-1.5 font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-[#D8A56E]" />
                  <span>Key Architectural Innovations</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-[#2A2A2A]/80">
                  {project.features?.map((feat, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D8A56E] mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Materials Palette */}
              {project.materials && (
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#2A2A2A]/70 mb-2 font-bold">
                    Materiality Palette
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#E1DDD4] border border-[#2A2A2A]/10 text-[11px] text-[#2A2A2A] font-medium"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Award Recognition */}
              {project.awards && (
                <div className="p-3 rounded-xl bg-[#D8A56E]/15 border border-[#D8A56E]/30 flex items-center space-x-2.5 text-xs text-[#2A2A2A]">
                  <Award className="w-4 h-4 text-[#D8A56E] flex-shrink-0" />
                  <span className="font-semibold">{project.awards}</span>
                </div>
              )}
            </div>

            {/* Direct CTA */}
            <div className="pt-4 border-t border-[#2A2A2A]/10">
              <button
                onClick={() => {
                  onClose();
                  onInquireProject(project.title);
                }}
                className="w-full py-3.5 rounded-xl bg-[#D8A56E] hover:bg-[#BD8750] text-[#2A2A2A] font-bold text-xs tracking-wider uppercase flex items-center justify-center space-x-2 transition-all duration-300 shadow-md shadow-[#D8A56E]/20 hover:shadow-[#BD8750]/30"
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
