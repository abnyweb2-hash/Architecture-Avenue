import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Sparkles, Film } from 'lucide-react';

export default function VideoReelModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeScene, setActiveScene] = useState(0);

  if (!isOpen) return null;

  const scenes = [
    {
      title: "The Obsidian Pavilion & Basalt Horizon",
      location: "Alibaug Coastline",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-living-room-and-terrace-42790-large.mp4",
      poster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
      time: "0:42",
      camera: "8K Red V-Raptor / 24mm Anamorphic"
    },
    {
      title: "Villa Solarium & Vedic Courtyard Waters",
      location: "Gomti Nagar, Lucknow",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-living-room-with-a-modern-interior-design-42784-large.mp4",
      poster: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
      time: "1:15",
      camera: "ARRI Alexa Mini LF / 35mm Prime"
    },
    {
      title: "The Travertine Sanctuary at Sunset",
      location: "Emirates Hills, Dubai",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-luxurious-modern-house-42788-large.mp4",
      poster: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1800&q=85",
      time: "2:04",
      camera: "Sony FX9 / 50mm T1.5 Cine Lens"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#2A2A2A]/85 backdrop-blur-2xl animate-in fade-in duration-300 text-left">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-5xl rounded-3xl bg-[#F2F0EC] border border-[#2A2A2A]/15 shadow-2xl overflow-hidden flex flex-col text-[#2A2A2A]">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2A2A2A]/10 bg-[#F2F0EC]/95 backdrop-blur-md">
          <div className="flex items-center space-x-2.5">
            <Film className="w-4 h-4 text-[#D8A56E]" />
            <span className="text-xs font-mono tracking-widest text-[#D8A56E] uppercase font-bold">
              CINEMATIC ARCHITECTURAL SHOWREEL
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#E1DDD4] hover:bg-[#D8A56E] text-[#2A2A2A] border border-[#2A2A2A]/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="relative w-full h-[320px] sm:h-[480px] md:h-[520px] bg-[#2A2A2A] flex items-center justify-center overflow-hidden">
          <video
            key={scenes[activeScene].videoUrl}
            src={scenes[activeScene].videoUrl}
            poster={scenes[activeScene].poster}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Letterbox Bars */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-[#2A2A2A] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#2A2A2A] pointer-events-none" />

          {/* Video Floating HUD Overlay */}
          <div className="absolute top-8 left-8 right-8 flex items-center justify-between pointer-events-none">
            <div className="p-3.5 rounded-2xl bg-[#F2F0EC]/90 backdrop-blur-md border border-[#2A2A2A]/15 text-xs font-mono shadow-md">
              <div className="text-[#2A2A2A] font-bold">{scenes[activeScene].title}</div>
              <div className="text-[#D8A56E] font-semibold">{scenes[activeScene].location}</div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#F2F0EC]/90 backdrop-blur-md border border-[#2A2A2A]/15 text-[10px] font-mono text-[#2A2A2A]/80 hidden sm:block shadow-md">
              {scenes[activeScene].camera}
            </div>
          </div>

          {/* Video Controls Bar */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between p-3 rounded-2xl bg-[#F2F0EC]/90 backdrop-blur-md border border-[#2A2A2A]/15 shadow-xl">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-xl bg-[#E1DDD4] text-[#2A2A2A] hover:bg-[#D8A56E] transition-colors border border-[#2A2A2A]/10"
                title={isMuted ? 'Unmute Ambient Sound' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-xs font-mono text-[#2A2A2A]/80 font-medium">
                {isMuted ? 'AUDIO MUTED' : 'DOLBY AMBIENT ON'}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-[#2A2A2A]/80 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#D8A56E] animate-ping"></span>
              <span>CINEMATIC ARCHIVE 4K</span>
            </div>
          </div>
        </div>

        {/* Scene Selection Carousel */}
        <div className="p-4 sm:p-6 bg-[#E1DDD4] border-t border-[#2A2A2A]/10 flex items-center space-x-3 overflow-x-auto">
          {scenes.map((scene, i) => (
            <button
              key={i}
              onClick={() => setActiveScene(i)}
              className={`p-3.5 rounded-2xl text-left border flex-shrink-0 transition-all ${
                activeScene === i
                  ? 'bg-[#F2F0EC] border-[#D8A56E] shadow-md shadow-[#D8A56E]/20 scale-102'
                  : 'bg-[#F2F0EC]/60 border-[#2A2A2A]/10 hover:border-[#D8A56E]'
              }`}
            >
              <div className="text-[10px] font-mono text-[#D8A56E] font-bold">SEQUENCE 0{i + 1}</div>
              <div className="text-xs font-bold text-[#2A2A2A] whitespace-nowrap">{scene.title}</div>
              <div className="text-[10px] text-[#2A2A2A]/70">{scene.location}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
