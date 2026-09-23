import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';
import { ADS_DATA } from '../../data/adsData';

export default function PopupAdModal({ isOpen, onClose }) {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const ads = ADS_DATA;
  const currentAd = ads[currentAdIndex] || ads[0];

  // Pick a random starting ad whenever the modal opens
  useEffect(() => {
    if (isOpen && ads.length > 0) {
      setCurrentAdIndex(Math.floor(Math.random() * ads.length));
    }
  }, [isOpen]);

  // Auto rotate ads every 3 seconds if not hovered/paused
  useEffect(() => {
    if (!isOpen || paused || ads.length === 0) return;
    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % ads.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen, paused, ads.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setCurrentAdIndex((prev) => (prev + 1) % ads.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentAdIndex((prev) => (prev - 1 + ads.length) % ads.length);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, ads.length, onClose]);

  if (!isOpen || ads.length === 0) return null;

  const handleNext = () => {
    setCurrentAdIndex((prev) => (prev + 1) % ads.length);
  };

  const handlePrev = () => {
    setCurrentAdIndex((prev) => (prev - 1 + ads.length) % ads.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900/95 border border-slate-700/60 rounded-3xl shadow-2xl overflow-hidden animate-scaleUp flex flex-col"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-40 p-2 rounded-full bg-slate-950/80 hover:bg-slate-900 text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-xl cursor-pointer"
          aria-label="Close Ad"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Ad Image Viewer */}
        <div className="relative bg-slate-950 flex items-center justify-center p-3 sm:p-5 min-h-[320px] max-h-[78vh] overflow-hidden select-none">
          <img 
            key={currentAd.id}
            src={currentAd.image} 
            alt={`ACCEL 7.0 Partner Ad ${currentAdIndex + 1}`}
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-opacity duration-300"
            loading="eager"
          />

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous Ad"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 shadow-xl transition-all hover:scale-110 cursor-pointer"
            aria-label="Next Ad"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>
    </div>
  );
}
