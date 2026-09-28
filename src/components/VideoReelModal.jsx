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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/95 backdrop-blur-2xl animate-in fade-in duration-300 text-left">
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-5xl rounded-3xl bg-[#0D0D0D] border border-white/10 shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60 backdrop-blur-md">
          <div className="flex items-center space-x-2.5">
            <Film className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-mono tracking-widest text-[#D4AF37] uppercase">
              CINEMATIC ARCHITECTURAL SHOWREEL
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full glass-pill hover:bg-white/20 text-neutral-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="relative w-full h-[320px] sm:h-[480px] md:h-[520px] bg-black flex items-center justify-center overflow-hidden">
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

          {/* Letterbox Bars for cinema feel */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-black pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-black pointer-events-none" />

          {/* Video Floating HUD Overlay */}
          <div className="absolute top-8 left-8 right-8 flex items-center justify-between pointer-events-none">
            <div className="p-3 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-xs font-mono">
              <div className="text-white font-bold">{scenes[activeScene].title}</div>
              <div className="text-[#D4AF37]">{scenes[activeScene].location}</div>
            </div>

            <div className="p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-neutral-400 hidden sm:block">
              {scenes[activeScene].camera}
            </div>
          </div>

          {/* Video Controls Bar */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between p-3 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 rounded-xl glass-pill text-white hover:text-[#D4AF37] transition-colors"
                title={isMuted ? 'Unmute Ambient Sound' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-xs font-mono text-neutral-400">
                {isMuted ? 'AUDIO MUTED' : 'DOLBY AMBIENT ON'}
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs font-mono text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span>CINEMATIC ARCHIVE 4K</span>
            </div>
          </div>
        </div>

        {/* Scene Selection Carousel */}
        <div className="p-4 sm:p-6 bg-[#141414] border-t border-white/10 flex items-center space-x-3 overflow-x-auto">
          {scenes.map((scene, i) => (
            <button
              key={i}
              onClick={() => setActiveScene(i)}
              className={`p-3 rounded-xl text-left border flex-shrink-0 transition-all ${
                activeScene === i
                  ? 'bg-white/15 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 scale-102'
                  : 'bg-white/5 border-white/5 hover:border-white/20 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="text-[10px] font-mono text-[#D4AF37]">SEQUENCE 0{i + 1}</div>
              <div className="text-xs font-bold text-white whitespace-nowrap">{scene.title}</div>
              <div className="text-[10px] text-neutral-400">{scene.location}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
