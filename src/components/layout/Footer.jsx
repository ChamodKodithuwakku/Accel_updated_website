import React from 'react';
import { 
  MapPin, 
  Mail, 
  ArrowUp, 
  History, 
} from 'lucide-react';
import { EVENT_DATA } from '../../data/eventData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const accelEditions = [
    { name: 'ACCEL 1.0', date: 'January 2024' },
    { name: 'ACCEL 2.0', date: 'March 2024' },
    { name: 'ACCEL 3.0', date: 'December 2024' },
    { name: 'ACCEL 4.0', date: 'March 2025' },
    { name: 'ACCEL 5.0', date: 'October 2025' },
    { name: 'ACCEL 6.0', date: 'February 2026' },
    { name: 'ACCEL 7.0', date: 'September 2026', current: true },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 text-xs sm:text-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl px-2 py-1 shadow-sm">
                <img 
                  src="/sliit-kandy-logo.png" 
                  alt="SLIIT KANDY UNI" 
                  className="h-8 object-contain"
                />
              </div>

              <div className="bg-white rounded-xl px-2.5 py-1 shadow-sm">
                <img 
                  src="/accel-navbar-logo.png" 
                  alt="ACCEL - Accelerating Business" 
                  className="h-8 object-contain"
                />
              </div>
            </div>

            <p className="text-sm font-semibold text-slate-300 tracking-wide">
              Accelerating Business
            </p>

            <div className="text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>SLIIT Kandy UNI, Pallekele, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <a 
                  href="mailto:accel@kandyuni.lk" 
                  className="hover:text-white hover:underline transition-colors"
                >
                  accel@kandyuni.lk
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm font-display mb-3 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About <span className="whitespace-nowrap">ACCEL 7.0</span></a></li>
              <li><a href="#zones" className="hover:text-white transition-colors">4 Pavilions</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">2-Day Agenda</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Speakers & Judges</a></li>
              <li><a href="#sponsors" className="hover:text-white transition-colors">Sponsors & Partners</a></li>
            </ul>
          </div>

          {/* Exhibition Pavilions */}
          <div>
            <h4 className="font-bold text-white text-sm font-display mb-3 uppercase tracking-wider">
              Pavilions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#zones" className="hover:text-white transition-colors">Industry Pavilion</a></li>
              <li><a href="#zones" className="hover:text-white transition-colors">Student Innovation Zone</a></li>
              <li><a href="#zones" className="hover:text-white transition-colors">SMEs & Startups Zone</a></li>
              <li><a href="#zones" className="hover:text-white transition-colors">Interactive Experience Zone</a></li>
            </ul>
          </div>

          {/* ACCEL Editions */}
          <div>
            <h4 className="font-bold text-white text-sm font-display mb-3 uppercase tracking-wider flex items-center gap-1.5">
              <History className="w-3.5 h-3.5 text-blue-400" />
              <span>ACCEL Editions</span>
            </h4>
            <div className="space-y-1">
              {accelEditions.map((edition) => (
                <div 
                  key={edition.name}
                  className={`flex items-center justify-between text-xs px-2.5 py-1 rounded-lg transition-colors ${
                    edition.current 
                      ? 'bg-blue-900/60 border border-blue-500/40 text-white font-bold shadow-xs' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                >
                  <span className={edition.current ? 'text-blue-300 font-black' : 'font-medium text-slate-300'}>
                    {edition.name}
                  </span>
                  <span className="flex items-center gap-1 text-[11px]">
                    {edition.current && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    )}
                    <span className={edition.current ? 'text-emerald-300 font-semibold' : 'text-slate-500'}>
                      {edition.date}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

                {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 <strong>SLIIT Kandy Uni</strong> - <span className="whitespace-nowrap">ACCEL 7.0</span> Organizing Committee.
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700/50">
              <span className="text-slate-400">Website created by</span>
              <a 
                href="https://www.linkedin.com/in/theekshana-prageeth-1a07233a2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 group transition-colors"
              >
                <svg className="w-4 h-4 mr-1 text-[#0A66C2] bg-white rounded-sm" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>Theekshana Prageeth</span>
                <svg className="w-3 h-3 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
