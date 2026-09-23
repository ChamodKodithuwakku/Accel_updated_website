import React, { useState, useEffect, useRef } from 'react';
import { 
  ChevronRight, 
  ChevronLeft
} from 'lucide-react';
import { ADS_DATA } from '../../data/adsData';

export default function HeroVideoAdPane({ onOpenVideo }) {
  const ads = ADS_DATA;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const touchStartX = useRef(null);

  const DURATION = 3000; // 3s per ad
  const INTERVAL = 50;

  useEffect(() => {
    if (isPaused || ads.length === 0) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentIndex((curr) => (curr + 1) % ads.length);
          return 0;
        }
        return prev + (INTERVAL / DURATION) * 100;
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, ads.length]);

  const currentAd = ads[currentIndex] || ads[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ads.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ads.length) % ads.length);
    setProgress(0);
  };

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 45) {
      handleNext();
    } else if (diffX < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full max-w-5xl mx-auto my-6 px-1 sm:px-0">
      <div 
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-400/40 bg-slate-950 group select-none transition-all duration-500 hover:shadow-blue-500/25"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-black/50 z-30 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 via-emerald-400 to-[#0052cc] transition-all duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Ambient Blurred Background matching current ad */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img 
            key={`bg-${currentAd.id}`}
            src={currentAd.image} 
            alt=""
            className="w-full h-full object-cover blur-3xl opacity-35 scale-125 transition-opacity duration-700"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-slate-950/60" />
        </div>

        {/* Ad Flyer Display Area - Fixed height prevents 3-second layout shifts on the page */}
        <div className="relative z-20 flex items-center justify-center p-2 sm:p-6 h-[320px] sm:h-[460px] w-full overflow-hidden">
          <img 
            src={currentAd.image} 
            alt={`ACCEL 7.0 Partner Ad ${currentIndex + 1}`}
            className="h-full w-full object-contain rounded-xl sm:rounded-2xl shadow-2xl transition-opacity duration-300"
            loading="eager"
          />

          {/* Left Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-slate-900/85 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
            aria-label="Previous Ad"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2 sm:p-3 rounded-full bg-slate-900/85 hover:bg-blue-600 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl cursor-pointer"
            aria-label="Next Ad"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

      </div>
    </div>
  );
}
