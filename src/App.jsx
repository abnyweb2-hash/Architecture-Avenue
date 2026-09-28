import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PhilosophySection from './components/PhilosophySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TendersModal from './components/TendersModal';
import VideoReelModal from './components/VideoReelModal';

export default function App() {
  const [tendersOpen, setTendersOpen] = useState(false);
  const [videoReelOpen, setVideoReelOpen] = useState(false);
  const [prefilledProject, setPrefilledProject] = useState(null);

  const handleInquireProject = (projectTitle) => {
    setPrefilledProject(projectTitle);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-[#F8F9FA] selection:bg-[#D4AF37]/30 selection:text-[#F3E5AB]">
      {/* Glassmorphism Navigation */}
      <Navbar
        onOpenTenders={() => setTendersOpen(true)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Hero Section with Homage to Reference Mockup & Interactive Pins */}
      <HeroSection
        onOpenVideoReel={() => setVideoReelOpen(true)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Interactive Project Portfolio with Filters and Lightbox */}
      <PortfolioSection
        onInquireProject={handleInquireProject}
      />

      {/* Interactive Services & Atelier Methodology */}
      <ServicesSection
        onOpenConsultation={handleOpenConsultation}
        onOpenTenders={() => setTendersOpen(true)}
      />

      {/* Interactive Before & After: Concept Render vs Constructed Reality */}
      <BeforeAfterSlider />

      {/* Design Philosophy & Monolithic Ethos */}
      <PhilosophySection
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Client Consultation & Commission Form */}
      <ContactSection
        prefilledProject={prefilledProject}
        onClearPrefill={() => setPrefilledProject(null)}
      />

      {/* Minimalist Editorial Footer */}
      <Footer
        onOpenTenders={() => setTendersOpen(true)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Tenders & NIT Modal for Institutional Clients */}
      <TendersModal
        isOpen={tendersOpen}
        onClose={() => setTendersOpen(false)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Cinematic Architectural Video Reel Modal */}
      <VideoReelModal
        isOpen={videoReelOpen}
        onClose={() => setVideoReelOpen(false)}
      />
    </div>
  );
}
