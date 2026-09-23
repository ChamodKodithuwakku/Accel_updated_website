import React from "react";
import { Quote } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Prof. Sujeewa Kodithuwakku",
      role: "Head - Department of Business",
      company: "SLIIT Kandy Uni",
      image: "/sujeewa.jpg",
      quote: "As Head of the department of business management at SLIIT Kandy University, I am proud to announce ACCEL 7.0 (2026). Building on the success of six previous editions over three years, our flagship event continues its mission to bridge academia and industry—this year focusing on Sustainability and Digital Transformation to accelerate future business growth."
    },
    {
      name: "Ms. Nilusha Ariyasena",
      role: "Main Coordinator - Industry Nexus Unit",
      company: "SLIIT Kandy UNI",
      image: "/nilusha.jpg",
      quote: "Coming from the industry, I have seen firsthand how valuable it is when academia and industry come together—turning knowledge into practical ideas and preparing students for the real world. ACCEL is one such platform which creates this bridge."
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 text-blue-800 font-bold text-xs uppercase tracking-wider mb-6">
              <Quote className="w-4 h-4 fill-current" />
              <span>Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2a59] font-['Space_Grotesk'] tracking-tight mb-4">
              What Our Leaders <span className="text-[#0052cc]">Say</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 150} className="h-full">
              <div className="bg-slate-50 rounded-3xl p-8 shadow-lg border border-slate-100 h-full flex flex-col relative transition-transform hover:-translate-y-2">
                
                <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100/60 rotate-180" />
                
                <div className="flex-grow">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic mb-8 relative z-10 font-medium">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-auto border-t border-slate-200 pt-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <h4 className="font-black text-[#0b2a59] font-['Montserrat'] leading-tight">{testimonial.name}</h4>
                    <p className="text-xs font-bold text-[#0052cc] mt-0.5">{testimonial.role}</p>
                    <p className="text-[10px] sm:text-xs font-medium text-slate-500 uppercase tracking-wide mt-0.5">{testimonial.company}</p>
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
