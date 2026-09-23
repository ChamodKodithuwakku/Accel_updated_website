import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SponsorAdPane({ onOpenAd }) {
  const partnerLogos = [
    { name: "Celogen Lanka Pvt Ltd", role: "Valued Sponsor" },
    { name: "Senkadagala Finance", role: "Valued Sponsor" },
    { name: "Seetha Holdings", role: "Valued Sponsor" },
    { name: "Black Hawk" },
    { name: "Elements.lk" },
    { name: "GBCSL" },
    { name: "OrbitX Digital" },
    { name: "Epson Service Centre" },
    { name: "SMK Shalitha Auto Parts" },
    { name: "AYN Apparels" },
    { name: "Singhe Super" },
    { name: "MacLine Devices" },
    { name: "Royal Paint House" },
    { name: "The Chill Kandy" },
    { name: "Roobinzz Food" },
    { name: "Millennium Jewellers" },
    { name: "S.K. Fabrication & Construction" },
    { name: "Manikhinna Sweet House" },
    { name: "Kandy Bag Center" },
    { name: "Aura Auto Imports" },
    { name: "Liyora Colour Centre" },
    { name: "Champa Cashew & Spice Lanka" },
    { name: "Udadumbara Traders" },
    { name: "Sena Souvenirs" },
    { name: "Sri Kewth Professional Kitchen" },
  ];

  return (
    <section className="py-8 bg-slate-100 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Special Valued Sponsors Section */}
        <div className="mb-8">
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Special Valued Sponsors</span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight font-display text-slate-800">
              Official Valued Sponsors of{" "}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-600 bg-clip-text text-transparent font-extrabold whitespace-nowrap">
                ACCEL 7.0
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Celogen Lanka */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-full h-24 flex items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 group-hover:bg-amber-50/40 transition-colors">
                <img
                  src="/sponsors/celogen-logo.png"
                  alt="Celogen Lanka (Pvt) Ltd"
                  className="max-h-16 max-w-[80%] object-contain filter drop-shadow-sm"
                />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
                Celogen Lanka (Pvt) Ltd
              </h4>
              <p className="text-xs text-slate-500 italic mt-auto leading-relaxed">
                "In recognition and sincere appreciation of Celogen Lanka (Pvt) Ltd as a Valued Sponsor for <span className="whitespace-nowrap font-semibold">ACCEL 7.0</span>"
              </p>
            </div>

            {/* Card 2: Senkadagala Finance */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-full h-24 flex items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 group-hover:bg-amber-50/40 transition-colors">
                <img
                  src="/sponsors/senkadagala-logo.png"
                  alt="Senkadagala Finance"
                  className="max-h-16 max-w-[80%] object-contain filter drop-shadow-sm"
                />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
                Senkadagala Finance
              </h4>
              <p className="text-xs text-slate-500 italic mt-auto leading-relaxed">
                "In recognition and sincere appreciation of Senkadagala Finance as a Valued Sponsor for <span className="whitespace-nowrap font-semibold">ACCEL 7.0</span>"
              </p>
            </div>

            {/* Card 3: Seetha Holdings */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-full h-24 flex items-center justify-center p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 group-hover:bg-amber-50/40 transition-colors">
                <img
                  src="/sponsors/seetha-logo.png"
                  alt="Seetha Holdings Groups of Companies"
                  className="max-h-16 max-w-[80%] object-contain filter drop-shadow-sm"
                />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 font-display">
                Seetha Holdings Groups of Companies
              </h4>
              <p className="text-xs text-slate-500 italic mt-auto leading-relaxed">
                "In recognition and sincere appreciation of Seetha Holdings Groups of Companies as a Valued Sponsor for <span className="whitespace-nowrap font-semibold">ACCEL 7.0</span>"
              </p>
            </div>
          </div>
        </div>

        {/* Running Marquee of Official Partners */}
        <div>
          <div className="text-center mb-3">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-500">
              Official Partners, Sponsors & Brands of <span className="whitespace-nowrap">ACCEL 7.0</span>
            </span>
          </div>

          <div className="flex overflow-x-hidden space-x-4 relative group py-2">
            <div className="flex space-x-4 animate-marquee whitespace-nowrap hover-pause">
              {partnerLogos.concat(partnerLogos).map((logo, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-400 transition-all text-xs font-semibold shadow-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-[#0b2a59] font-bold">{logo.name}</span>
                  {logo.role && (
                    <span className="text-slate-500 text-[10px]">({logo.role})</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
