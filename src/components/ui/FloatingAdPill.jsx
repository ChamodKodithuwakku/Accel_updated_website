import React from 'react';
import { Gift } from 'lucide-react';
import { ADS_DATA } from '../../data/adsData';

export default function FloatingAdPill({ onOpenAd }) {
  const count = ADS_DATA.length;
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <button
        onClick={onOpenAd}
        className="btn-dtb btn-dtb-cyan btn-dtb-sm !py-2 !px-3.5 sm:!px-4 !text-[11px] sm:!text-xs border-2 border-white shadow-2xl flex items-center gap-2 group cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-amber-300 animate-ping"></span>
        <Gift className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 group-hover:rotate-12 transition-transform" />
        <span className="hidden xs:inline sm:inline">Partner Ads ({count})</span>
        <span className="xs:hidden sm:hidden">Ads ({count})</span>
        <span className="px-1.5 py-0.2 rounded-full bg-amber-400 text-slate-950 font-black text-[9px]">
          NEW
        </span>
      </button>
    </div>
  );
}
