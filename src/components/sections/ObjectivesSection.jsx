import React from "react";
import { Target, Leaf, Network, Lightbulb, ShieldCheck } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function ObjectivesSection() {
  const objectives = [
    {
      id: "obj-1",
      icon: Leaf,
      title: "Sustainable Solutions",
      description: "Emphasize the urgent need for adopting sustainable solutions across diverse sectors to ensure a greener future.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100",
      borderColor: "border-emerald-200"
    },
    {
      id: "obj-2",
      icon: Network,
      title: "Bridge the Gap",
      description: "Connect visionary students, innovative thinkers, established enterprises, and small-to-medium businesses.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      borderColor: "border-blue-200"
    },
    {
      id: "obj-3",
      icon: Lightbulb,
      title: "Nurture Innovation",
      description: "Nurture a culture of innovation among youth, encouraging them to create solutions that address future challenges.",
      color: "text-amber-600",
      bgColor: "bg-amber-100",
      borderColor: "border-amber-200"
    },
    {
      id: "obj-4",
      icon: ShieldCheck,
      title: "ESG Principles",
      description: "Discuss and demonstrate the role of ESG (Environmental, Social, and Governance) principles in shaping the future of businesses.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section id="objectives" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-800 font-bold text-xs uppercase tracking-wider mb-6">
              <Target className="w-4 h-4" />
              <span>Event Objectives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2a59] font-['Space_Grotesk'] tracking-tight mb-4">
              Why We Created <span className="text-[#0052cc] whitespace-nowrap">ACCEL 7.0</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Our core mission revolves around building a sustainable tomorrow through innovation, collaboration, and youth empowerment.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {objectives.map((obj, index) => (
            <ScrollReveal key={obj.id} delay={index * 100} className="h-full">
              <div className={`bg-white rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group`}>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-transform group-hover:scale-110 ${obj.bgColor}`}>
                  <obj.icon className={`w-7 h-7 ${obj.color}`} />
                </div>
                
                <h3 className="text-lg sm:text-xl font-black text-[#0b2a59] font-['Montserrat'] leading-tight mb-3">
                  {obj.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {obj.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
