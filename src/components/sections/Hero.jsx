import React from 'react';
import { 
  ArrowUpRight, 
  Calendar, 
  MapPin, 
  Mail, 
  ChevronRight
} from 'lucide-react';
import { EVENT_DATA } from '../../data/eventData';
import AccelLogo from '../ui/AccelLogo';
import ScrollReveal from '../ui/ScrollReveal';
import HeroVideoAdPane from './HeroVideoAdPane';
import HeroCanvasAnimation from '../ui/HeroCanvasAnimation';

export default function Hero({ onOpenVideo }) {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc]">
      
      {/* Grand Cyber-Tech Hero Banner with Interactive Canvas Animation */}
      <div className="relative pt-[100px] sm:pt-[120px] pb-10 sm:pb-16 text-center text-white overflow-hidden bg-[radial-gradient(1200px_600px_at_15%_-10%,#1e5fbf_0%,transparent_55%),radial-gradient(1000px_700px_at_100%_20%,#22bccb_0%,transparent_50%),linear-gradient(160deg,#081235_0%,#0d1b4c_55%,#10275f_100%)]">
        
        {/* Interactive Neural / Eco Particle Canvas Animation */}
        <HeroCanvasAnimation />

        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-radial-glow pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Co-Branding Header Pill */}
          <ScrollReveal animation="fade-down" delay={50}>
            <div className="inline-flex items-center justify-center gap-3 sm:gap-5 py-1.5 px-4 sm:py-2.5 sm:px-7 bg-white rounded-full border border-white mb-6 sm:mb-8 shadow-xl max-w-full">

              {/* Left: SLIIT KANDY UNI Logo */}
              <img
                src="/sliit-kandy-uni.png"
                alt="SLIIT Kandy UNI"
                className="h-7 sm:h-11 object-contain shrink-0"
              />

              {/* Center Divider */}
              <div className="h-7 sm:h-10 w-px bg-slate-300 shrink-0"></div>

              {/* Right: Accel Logo */}
              <img
                src="/accel-pill-logo.png"
                alt="ACCEL"
                className="h-7 sm:h-11 object-contain shrink-0"
              />

            </div>
          </ScrollReveal>

          {/* Main Title Banner */}
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="text-center max-w-4xl mx-auto my-2">
              
              <AccelLogo size="large" showTagline={false} />

              {/* Theme & Tagline */}
              <h1 className="mt-3 sm:mt-4 text-2xl sm:text-4xl lg:text-5xl font-black font-['Space_Grotesk'] text-white tracking-tight leading-tight">
                Sustainability & Digital Transformation
              </h1>

              <div className="mt-2 inline-block">
                <span className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Space_Grotesk'] tracking-wide grad-text-gold uppercase drop-shadow-md">
                  Expo 2026
                </span>
              </div>

              {/* Meta Info Line */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-bold font-['Space_Grotesk']">
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 text-cyan-200">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>24<sup>th</sup> &ndash; 25<sup>th</sup> September 2026</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 text-cyan-200">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SLIIT Kandy UNI Premises</span>
                </span>
              </div>

              {/* Tagline */}
              <div className="mt-4 text-xs sm:text-sm text-blue-100/90 italic font-medium max-w-2xl mx-auto font-['Space_Grotesk']">
                "Accelerating Sustainable Solutions & Digital Enterprise Innovation Across Sri Lanka"
              </div>

              {/* Primary Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto sm:max-w-none">
                <a
                  href="#schedule"
                  className="btn-dtb btn-dtb-outline-white text-xs sm:text-base w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 text-center"
                >
                  View 2-Day Agenda
                </a>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* DTecBiz Bottom Transition Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
          <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="w-full h-8 sm:h-14 text-[#f8fafc] fill-current">
            <path d="M0,40 C240,80 480,0 720,24 C960,48 1200,80 1440,36 L1440,70 L0,70 Z"></path>
          </svg>
        </div>

      </div>

      {/* Daytime Expo Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-4 sm:pb-8">

        {/* Central Auto-Rotating Digital Sponsor & Event Billboard Display */}
        <ScrollReveal animation="scale-up" delay={200}>
          <HeroVideoAdPane onOpenVideo={onOpenVideo} />
        </ScrollReveal>

      </div>
    </section>
  );
}
