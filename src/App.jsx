import React, { useState, useEffect } from 'react';
// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';

// Section Components
import Hero from './components/sections/Hero';
import IntroVideoSection from './components/sections/IntroVideoSection';
import SponsorAdPane from './components/sections/SponsorAdPane';
import AboutSection from './components/sections/AboutSection';
import ObjectivesSection from './components/sections/ObjectivesSection';
import ZonesSection from './components/sections/ZonesSection';
import ScheduleSection from './components/sections/ScheduleSection';
import SpeakersSection from './components/sections/SpeakersSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import GallerySection from './components/sections/GallerySection';
import VenueContact from './components/sections/VenueContact';

// Modal Components
import PopupAdModal from './components/modals/PopupAdModal';
import VideoModal from './components/modals/VideoModal';

// UI Helper Components
import FloatingAdPill from './components/ui/FloatingAdPill';

export default function App() {
  
  // Popup Ad State
  const [isPopupAdOpen, setIsPopupAdOpen] = useState(false);

  // Video Lightbox Modal State
  const [activeVideo, setActiveVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Check for stored ticket in localStorage on load
  useEffect(() => {
    // Trigger Popup Ad automatically after 2.5 seconds on page load
    const timer = setTimeout(() => {
      setIsPopupAdOpen(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Trigger popup ad randomly while scrolling the page
  useEffect(() => {
    let lastShownTime = Date.now();
    let lastScrollY = window.scrollY;
    let accumulatedScroll = 0;

    const handleScroll = () => {
      // Don't trigger if already open or video modal is active
      if (isPopupAdOpen || isVideoModalOpen) return;

      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      accumulatedScroll += delta;
      lastScrollY = currentScrollY;

      const now = Date.now();
      const timeSinceLastShow = now - lastShownTime;

      // When user has scrolled a notable distance (> 700px) and cooldown of 15s has elapsed
      if (accumulatedScroll > 700 && timeSinceLastShow > 15000) {
        // Random chance (40%) to trigger popup
        if (Math.random() < 0.4) {
          setIsPopupAdOpen(true);
          lastShownTime = now;
          accumulatedScroll = 0;
        } else {
          // Reset partial scroll so it checks again on next scroll movement
          accumulatedScroll = 300;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPopupAdOpen, isVideoModalOpen]);



  const handleOpenVideo = (videoData) => {
    setActiveVideo(videoData);
    setIsVideoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col selection:bg-[#0052cc] selection:text-white font-sans relative overflow-x-hidden">
      
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onOpenVideo={handleOpenVideo}
        />

        <AboutSection />

        <IntroVideoSection />

        <ObjectivesSection />

        <SponsorAdPane onOpenAd={() => setIsPopupAdOpen(true)} />

        <ZonesSection 
        />

        <ScheduleSection />

        <SpeakersSection />

        <TestimonialsSection />

        <GallerySection />

        <VenueContact />
      </main>

      {/* Footer */}
      <Footer 
      />

      {/* Floating Bottom Action for Popup Ads */}
      <FloatingAdPill onOpenAd={() => setIsPopupAdOpen(true)} />

      {/* Automatic & Triggerable Popup Ad Modal with YouTube Support */}
      <PopupAdModal 
        isOpen={isPopupAdOpen} 
        onClose={() => setIsPopupAdOpen(false)}
        onOpenVideo={handleOpenVideo}
      />

      {/* High-Definition Responsive YouTube Video Modal Player */}
      <VideoModal 
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoData={activeVideo}
      />





    </div>
  );
}
