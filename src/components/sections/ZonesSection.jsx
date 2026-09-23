import React from "react";
import { Building2, Lightbulb, Rocket, Gamepad2 } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function ZonesSection() {
  const zones = [
    {
      id: "industry",
      num: "01",
      title: "INDUSTRY PAVILION",
      subtitle: "Where leaders showcase real-world solutions.",
      icon: Building2,
      gradient: "from-blue-500 to-indigo-600",
      items: ["Sustainable Manufacturing", "ESG Initiatives", "Renewable Energy", "Green Technologies", "Automation", "Smart Logistics"]
    },
    {
      id: "student",
      num: "02",
      title: "STUDENT INNOVATION",
      subtitle: "Where ideas turn into impact.",
      icon: Lightbulb,
      gradient: "from-emerald-500 to-teal-600",
      items: ["Sustainable Business Ideas", "AI & Tech Solutions", "Digital Transformation", "Research Prototypes", "Social Entrepreneurship"]
    },
    {
      id: "startup",
      num: "03",
      title: "STARTUPS & SMEs",
      subtitle: "Where innovation meets opportunity.",
      icon: Rocket,
      gradient: "from-amber-500 to-orange-500",
      items: ["Innovative Products", "Sustainable Business Models", "Entrepreneurial Journeys"]
    },
    {
      id: "interactive",
      num: "04",
      title: "INTERACTIVE EXP.",
      subtitle: "Learn by doing. Experience the future.",
      icon: Gamepad2,
      gradient: "from-purple-500 to-fuchsia-600",
      items: ["Circular Economy Games", "Live Demonstrations", "Fun & Engagement"]
    }
  ];

  return (
    <section id="zones" className="py-12 sm:py-16 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-400/5 rounded-full blur-3xl -mr-32 -mt-32 md:-mr-64 md:-mt-64 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-emerald-400/5 rounded-full blur-3xl -ml-32 -mb-32 md:-ml-64 md:-mb-64 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2a59] font-['Space_Grotesk'] tracking-tight mb-3">
              Explore Our <span className="text-[#0052cc]">Zones</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Discover four interactive pavilions designed to showcase innovation, connect talent with opportunity, and provide hands-on experiences for a sustainable future.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {zones.map((zone, index) => (
            <ScrollReveal key={zone.id} delay={index * 100} className="w-full h-full">
              {/* Set the border to be the brand blue (#0052cc) permanently by default */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border-[2px] border-[#0052cc] hover:shadow-lg hover:shadow-[#0052cc]/20 transition-all duration-300 hover:-translate-y-1 group h-full flex flex-col relative overflow-hidden">
                
                <div className="absolute -right-2 -bottom-4 text-[60px] sm:text-[80px] leading-none font-black text-slate-50 opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 font-['Space_Grotesk'] pointer-events-none z-0">
                  {zone.num}
                </div>

                <div className="relative z-10 flex-grow flex flex-col">
                  
                  <div className="flex flex-col gap-2.5 mb-3 sm:mb-4">
                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br ${zone.gradient} shadow-md shrink-0`}>
                      <zone.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-[#0b2a59] font-['Montserrat'] tracking-tight leading-tight mb-1">
                        {zone.title}
                      </h3>
                      <p className="text-xs font-bold italic text-slate-600">
                        {zone.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="pt-1">
                    <ul className="space-y-2">
                      {zone.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-900 shrink-0"></div>
                          <span className="text-slate-900 text-[13px] leading-snug font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
