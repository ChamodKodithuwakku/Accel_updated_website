import React, { useState } from "react";
import { Image as ImageIcon, ZoomIn, ChevronDown } from "lucide-react";
import { GALLERY_DATA } from "../../data/galleryData";
import LightboxModal from "../modals/LightboxModal";
import ScrollReveal from "../ui/ScrollReveal";

export default function GallerySection() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [visibleCount, setVisibleCount] = useState(18);

  const visibleItems = GALLERY_DATA.slice(0, visibleCount);

  const handleNext = () => {
    setSelectedIdx((prev) => (prev + 1) % GALLERY_DATA.length);
  };

  const handlePrev = () => {
    setSelectedIdx((prev) => (prev - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
  };

  return (
    <section id="gallery" className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0052cc] text-xs font-bold uppercase tracking-wider mb-3 font-['Montserrat']">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Visual Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-['Montserrat'] text-[#0b2a59] tracking-tight">
              Past Editions & Expo Moments
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Relive the energy of student demonstrations, VIP judging tours, and awards ceremonies from previous ACCEL editions.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid - Pure Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {visibleItems.map((item, idx) => (
            <div key={item.id} className="h-full">
              <div
                onClick={() => setSelectedIdx(idx)}
                className="group relative h-64 sm:h-72 w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 border border-slate-200 hover:border-[#0052cc] shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <img 
                  src={item.image} 
                  alt="ACCEL Expo Moment" 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Hover overlay with Zoom icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#0052cc] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < GALLERY_DATA.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 18)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0b2a59] hover:bg-[#0052cc] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 font-['Space_Grotesk']"
            >
              <span>Load More Photos ({GALLERY_DATA.length - visibleCount} remaining)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Lightbox Modal */}
        {selectedIdx !== null && GALLERY_DATA[selectedIdx] && (
          <LightboxModal 
            item={GALLERY_DATA[selectedIdx]}
            onClose={() => setSelectedIdx(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}

      </div>
    </section>
  );
}
