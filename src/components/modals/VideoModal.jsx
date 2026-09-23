import React, { useEffect } from 'react';
import { X, Play, Sparkles } from 'lucide-react';
import { getYouTubeEmbedUrl } from '../../utils/youtube';

export default function VideoModal({ isOpen, onClose, videoData }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoData) return null;

  const embedUrl = getYouTubeEmbedUrl(videoData.youtubeUrl);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 flex-shrink-0">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <div className="truncate">
              <div className="text-[10px] font-black uppercase tracking-wider text-amber-400 flex items-center gap-1 font-['Space_Grotesk']">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{videoData.sponsor || 'ACCEL 7.0 Video Preview'}</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white truncate font-['Space_Grotesk']">
                {videoData.title || 'Official Video Stream'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ml-3 flex-shrink-0"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Responsive Video Frame */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={videoData.title || 'YouTube Video Player'}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="text-center p-8 text-slate-400 text-sm">
              Invalid or missing YouTube link.
            </div>
          )}
        </div>

        {/* Bottom Metadata Bar */}
        {videoData.highlight && (
          <div className="px-5 py-3.5 bg-slate-950/90 border-t border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center justify-between">
            <p className="truncate mr-4">{videoData.highlight}</p>
            <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/60 flex-shrink-0">
              HD 1080p
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
