import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ArrowUpRight, MapPin, Maximize2, Sparkles, Filter } from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function PortfolioSection({ onInquireProject }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Residential', 'Luxury Villas', 'Commercial', 'Modern Interiors'];

  // Show only the first 5 featured projects
  const FEATURED = PROJECTS_DATA.slice(0, 5);

  const filteredProjects =
    activeFilter === 'All'
      ? FEATURED
      : FEATURED.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-28 sm:py-36 bg-[#E1DDD4] text-[#2A2A2A]">
      {/* Background subtle ochre ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D8A56E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-8 border-b border-[#2A2A2A]/10">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-mono tracking-[0.25em] text-[#D8A56E] uppercase mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#D8A56E]" />
              <span>Curation &bull; Monolithic Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-monumental font-bold tracking-tight text-[#2A2A2A]">
              Selected Works
            </h2>
            <p className="text-sm sm:text-base text-[#2A2A2A]/80 font-light mt-3 max-w-xl leading-relaxed">
              A curated anthology of private residences, commercial landmarks, and biophilic sanctuaries designed with uncompromising rigor.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-3 text-xs font-mono text-[#2A2A2A]/70">
            <span>ARCHIVE VOLUME 2024–2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8A56E]"></span>
            <span className="text-[#D8A56E] font-bold">{filteredProjects.length} PORTFOLIO PIECES</span>
          </div>
        </div>

        {/* Category Filters (Pills) */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          <div className="flex items-center space-x-2 p-1.5 rounded-full bg-[#F2F0EC] border border-[#2A2A2A]/10 shadow-sm">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? FEATURED.length
                  : FEATURED.filter((p) => p.category === cat).length;
              const isActive = activeFilter === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2 rounded-full text-xs tracking-wider transition-all duration-300 flex items-center space-x-2 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#D8A56E] text-[#2A2A2A] font-bold shadow-md shadow-[#D8A56E]/20'
                      : 'text-[#2A2A2A]/70 hover:text-[#2A2A2A] hover:bg-[#E1DDD4]'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-[#2A2A2A]/15 text-[#2A2A2A] font-bold' : 'bg-[#2A2A2A]/10 text-[#2A2A2A]/70'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-[#F2F0EC] border border-[#2A2A2A]/10 hover:border-[#D8A56E] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D8A56E]/15 flex flex-col ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Image Container with Zoom */}
                <div className={`relative w-full overflow-hidden ${isFeatured ? 'h-80 sm:h-96' : 'h-80'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 group-hover:filter group-hover:brightness-95"
                    loading="lazy"
                  />

                  {/* Gradient Framing Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A]/90 via-[#2A2A2A]/35 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider bg-[#F2F0EC]/90 backdrop-blur-md text-[#2A2A2A] font-bold border border-[#D8A56E]/40 shadow-sm">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-[#F2F0EC]/90 backdrop-blur-md text-[#2A2A2A]/80 font-medium">
                      {project.year}
                    </span>
                  </div>

                  {/* Floating Expand Icon */}
                  <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#D8A56E] hover:bg-[#BD8750] text-[#2A2A2A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform transition-transform duration-300">
                    <div className="flex items-center space-x-1.5 text-xs text-[#E1DDD4] mb-1.5 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-[#D8A56E]" />
                      <span>{project.location}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <h3 className="text-xl sm:text-2xl font-monumental font-bold text-white group-hover:text-[#D8A56E] transition-colors">
                        {project.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-[#D8A56E] text-[#2A2A2A] flex items-center justify-center group-hover:bg-[#BD8750] transition-all shadow-md">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="mt-3 flex items-center justify-between text-xs text-[#E1DDD4]/80 border-t border-white/20 pt-3">
                      <span>Area: <strong className="text-white">{project.area}</strong></span>
                      <span className="text-[#D8A56E] font-bold flex items-center space-x-1 group-hover:text-[#BD8750] transition-colors">
                        <span>View Specs &amp; Blueprint</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquireProject={onInquireProject}
        />
      )}
    </section>
  );
}
