import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ item, onClose, onNext, onPrev }) {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full bg-transparent rounded-3xl overflow-hidden flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-red-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Prev / Next */}
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-[#0052cc] transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:bg-[#0052cc] transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image - Pure photo only */}
        <div className="max-h-[85vh] w-full flex items-center justify-center overflow-hidden rounded-2xl shadow-2xl">
          <img 
            src={item.image} 
            alt="ACCEL Expo Gallery" 
            className="w-auto h-auto max-h-[85vh] max-w-full object-contain rounded-2xl"
          />
        </div>

      </div>
    </div>
  );
}
