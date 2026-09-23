import React from "react";
import { Mic2, Award, User, Scale, Gavel } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function SpeakersSection() {
  const speakers = [
    {
      name: "Prof. Janaka Bandara Ekanayake",
      badge: "Keynote Speaker",
      badgeColor: "bg-blue-100 text-[#0052cc] border-blue-200",
      role: "Director of the University Research Council",
      company: "University of Peradeniya",
      image: "/janaka.jpg",
      bio: "Senior Professor in the Department of Electrical and Electronic Engineering at the University of Peradeniya. He obtained his BScEng with First Class Honours from the University of Peradeniya and his PhD from the University of Manchester Institute of Science and Technology, UK. He has built an extensive academic and research career, with more than 120 refereed journal publications, numerous international conference papers, and contributions to several books.",
      expertise: ["Renewable Energy", "Power Systems", "Smart Grids", "Artificial Intelligence"]
    },
    {
      name: "Mr. Arjuna Bandara",
      badge: "Guest of Honour",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      role: "Head - ICT and Production Control",
      company: "Noritake",
      image: "/arjuna.jpg",
      bio: "Distinguished industry leader serving as the Head of ICT and Production Control at Noritake. He brings extensive industrial expertise and leadership in enterprise digital systems, manufacturing automation, operational efficiency, and production management.",
      expertise: ["ICT Management", "Production Control", "Enterprise Automation", "Digital Systems"]
    }
  ];

  const judges = [
    {
      name: "Dr. Ruwan Jayakantha",
      role: "Senior Lecturer",
      department: "Dept. of Manufacturing & Industrial Engineering",
      institution: "Faculty of Engineering, University of Peradeniya",
      image: "/speakers/ruwan.jpg",
      initials: "RJ"
    },
    {
      name: "Mr. Chathura Kodikara",
      role: "Product Manager – HNB Adishtana",
      department: "Banking & Financial Product Strategy",
      institution: "Hatton National Bank PLC",
      image: "/speakers/chathura-k.jpg",
      initials: "CK"
    },
    {
      name: "Mr. A.M.A.S.M. Bandara",
      role: "Senior Lecturer Grade II",
      department: "Dept. of Operations Management",
      institution: "Faculty of Management, University of Peradeniya",
      image: "/speakers/amasm-bandara.jpg",
      initials: "AB"
    },
    {
      name: "Dr. Chathura Withanage",
      role: "Senior Lecturer",
      department: "Dept. of Manufacturing & Industrial Engineering",
      institution: "Faculty of Engineering, University of Peradeniya",
      image: "/speakers/chathura-w.jpg",
      initials: "CW"
    }
  ];

  return (
    <section id="speakers" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-800 font-bold text-xs uppercase tracking-wider mb-6">
              <Mic2 className="w-4 h-4" />
              <span>Distinguished Dignitaries</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2a59] font-['Space_Grotesk'] tracking-tight mb-4">
              Learn from the <span className="text-[#0052cc]">Best</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Gain valuable insights from distinguished academic pioneers and visionary industry leaders shaping the future of technology, innovation, and sustainability.
            </p>
          </ScrollReveal>
        </div>

        {/* Keynote & Guest of Honour Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {speakers.map((speaker, index) => (
            <ScrollReveal key={index} delay={index * 150} className="h-full">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 h-full flex flex-col transition-transform hover:-translate-y-2 relative overflow-hidden group">
                
                {/* Badge */}
                <div className="flex items-center justify-between gap-3 mb-6">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${speaker.badgeColor} uppercase tracking-wider font-['Montserrat']`}>
                    <Award className="w-3.5 h-3.5" />
                    <span>{speaker.badge}</span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 mb-6 items-center sm:items-start">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200 flex items-center justify-center">
                    {speaker.image ? (
                      <img 
                        src={speaker.image} 
                        alt={speaker.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="w-full h-full bg-gradient-to-br from-[#0b2a59] to-[#0052cc] text-white flex flex-col items-center justify-center" style={{ display: speaker.image ? 'none' : 'flex' }}>
                      <User className="w-12 h-12 text-blue-200 mb-1" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Executive</span>
                    </div>
                  </div>

                  <div className="text-center sm:text-left flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-black text-[#0b2a59] font-['Montserrat'] leading-tight mb-2">
                      {speaker.name}
                    </h3>
                    <p className="text-[#0052cc] font-bold text-sm sm:text-base mb-1">
                      {speaker.role}
                    </p>
                    <p className="text-slate-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      {speaker.company}
                    </p>
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 flex-grow">
                  {speaker.bio}
                </p>
                
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                    Areas of Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {speaker.expertise.map((tag, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-bold border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Panel of Judges Subsection */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200 font-bold text-xs uppercase tracking-wider mb-4 font-['Montserrat']">
                <Gavel className="w-3.5 h-3.5 text-amber-700" />
                <span>Evaluation Panel</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b2a59] font-['Space_Grotesk'] tracking-tight mb-3">
                Distinguished <span className="text-[#0052cc]">Panel of Judges</span>
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Esteemed industry experts and senior academics evaluating student innovations, research prototypes, and sustainable venture solutions at <span className="whitespace-nowrap font-semibold">ACCEL 7.0</span>.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {judges.map((judge, idx) => (
              <ScrollReveal key={idx} delay={idx * 100} className="h-full">
                <div className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl border border-slate-200/80 hover:border-[#0052cc] transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group relative overflow-hidden">


                  {/* Avatar / Photo */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200 mb-4 mx-auto flex items-center justify-center relative">
                    {judge.image ? (
                      <img 
                        src={judge.image} 
                        alt={judge.name} 
                        className="w-full h-full object-cover object-top"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="w-full h-full bg-gradient-to-br from-[#0b2a59] via-[#0052cc] to-indigo-600 text-white flex flex-col items-center justify-center" style={{ display: judge.image ? 'none' : 'flex' }}>
                      <span className="text-xl font-black font-['Space_Grotesk'] tracking-wider">{judge.initials}</span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center flex-grow flex flex-col">
                    <h4 className="text-base font-black text-[#0b2a59] font-['Montserrat'] leading-snug mb-1">
                      {judge.name}
                    </h4>
                    
                    <p className="text-[#0052cc] text-xs font-bold mb-1.5">
                      {judge.role}
                    </p>

                    <p className="text-slate-600 text-xs font-medium leading-relaxed mb-2">
                      {judge.department}
                    </p>

                    <div className="mt-auto pt-2.5 border-t border-slate-100">
                      <p className="text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
                        {judge.institution}
                      </p>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
