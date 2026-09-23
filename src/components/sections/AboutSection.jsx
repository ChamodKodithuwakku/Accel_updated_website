import React from "react";
import { Users, TrendingUp, Cpu, Leaf, GraduationCap, Target, Building2 } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function AboutSection() {
  const stats = [
    { value: "500+", label: "School Students", icon: GraduationCap },
    { value: "500+", label: "Uni Students", icon: Users },
    { value: "750+", label: "General Public", icon: Users },
    { value: "50+", label: "Startups", icon: TrendingUp },
    { value: "80+", label: "SMEs & MSMEs", icon: Building2 },
  ];

  return (
    <section id="about" className="py-10 sm:py-16 bg-white relative">
      <div className="absolute inset-0 bg-blue-50/50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Vision & About */}
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-800 font-bold text-xs uppercase tracking-wider mb-6">
                <Target className="w-4 h-4" />
                <span className="whitespace-nowrap">About ACCEL 7.0</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2a59] font-['Space_Grotesk'] leading-tight mb-6">
                Innovating for a <br />
                <span className="text-[#0052cc]">Sustainable Tomorrow</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
                The Department of Business, SLIIT Kandy UNI proudly presents the 7th edition of Accelerating Businesses – <strong className="whitespace-nowrap">ACCEL 7.0</strong>. Building on six successful industry forums, <span className="whitespace-nowrap font-bold text-slate-800">ACCEL 7.0</span> brings together industry leaders, entrepreneurs, startups, students, and the wider community through a two-day, multi-zone Expo.
              </p>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                The Expo creates an interactive space to discover sustainability, ESG, circular economy, renewable energy, green technology, AI, automation, smart logistics, and entrepreneurship. With a keynote address by <strong>Prof. Janaka Ekanayake</strong> and in collaboration with the <strong>Green Building Council of Sri Lanka (GBCSL)</strong>, <span className="whitespace-nowrap font-bold text-slate-800">ACCEL 7.0</span> connects industry knowledge, academic expertise, and real-world innovation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-gradient-to-br from-[#0b2a59] to-[#0052cc] p-6 sm:p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#ffcc00]/10 rounded-full blur-xl -ml-10 -mb-10 pointer-events-none"></div>
                
                <h3 className="text-xl font-black mb-4 flex items-center gap-2 font-['Montserrat']">
                  <span className="w-1.5 h-6 bg-[#ffcc00] rounded-full inline-block"></span>
                  Our Vision
                </h3>
                <p className="text-blue-50 text-sm sm:text-base leading-relaxed font-medium italic">
                  "To create a practical platform that connects students, industry, entrepreneurs, startups and the public to explore sustainability, digital transformation, innovation and entrepreneurship for a better future."
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Key Themes & Target Audience */}
          <div>
            <ScrollReveal delay={200}>
              <h3 className="text-xl sm:text-2xl font-black text-[#0b2a59] font-['Space_Grotesk'] mb-6 flex items-center gap-2">
                Expected Audience Reach
                <span className="text-xs font-bold bg-[#ffcc00] text-[#0b2a59] px-2 py-0.5 rounded-full uppercase">1,880+ Total</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12">
                {stats.map((stat, idx) => (
                  <div key={idx} className={`bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1 hover:shadow-md ${idx === stats.length - 1 ? 'col-span-2 sm:col-span-1' : ''}`}>
                    <stat.icon className="w-6 h-6 text-[#0052cc] mb-3" />
                    <h4 className="text-2xl sm:text-3xl font-black text-[#0b2a59] font-['Space_Grotesk']">{stat.value}</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wide mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="space-y-4">
                <h3 className="text-lg font-black text-[#0b2a59] font-['Montserrat']">What to Expect</h3>
                <div className="flex flex-col gap-3">
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-emerald-900 text-sm">Sustainability & ESG</h4>
                      <p className="text-xs text-emerald-700/80 mt-1 font-medium">Circular economy, green tech, and renewable energy solutions for the future.</p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-blue-900 text-sm">Digital Transformation</h4>
                      <p className="text-xs text-blue-700/80 mt-1 font-medium">AI, automation, smart logistics, and cutting-edge tech innovations.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
