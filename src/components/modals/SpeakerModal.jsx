import React from 'react';
import { X, ExternalLink, Globe, BookOpen } from 'lucide-react';

export default function SpeakerModal({ speaker, onClose }) {
  if (!speaker) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
          
          {/* Speaker Avatar & Badge */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-md">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
              {speaker.badge}
            </span>
          </div>

          {/* Speaker Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0052cc] mb-1">
              {speaker.category}
            </div>
            <h3 className="text-2xl font-black font-display text-[#0b2a59] mb-1">
              {speaker.name}
            </h3>
            <p className="text-sm font-bold text-emerald-700 mb-0.5">
              {speaker.role}
            </p>
            <p className="text-xs text-slate-500 mb-4 font-medium">
              {speaker.organization}
            </p>

            {/* Speaking Topic */}
            <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 mb-4">
              <div className="text-[11px] font-bold text-blue-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                <span>Featured Topic / Evaluation Area</span>
              </div>
              <p className="text-xs font-semibold text-slate-800">
                "{speaker.topic}"
              </p>
            </div>

            {/* Bio */}
            <div className="text-xs text-slate-600 leading-relaxed mb-6">
              {speaker.bio}
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <a
                href={speaker.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0052cc] border border-blue-200 text-xs font-bold transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>LinkedIn / Profile</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
