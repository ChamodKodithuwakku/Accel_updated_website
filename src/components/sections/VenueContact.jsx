import React from "react";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function VenueContact() {
  return (
    <section id="venue" className="py-16 sm:py-24 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <ScrollReveal>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2a59] font-['Space_Grotesk'] tracking-tight mb-6">
                Venue & <span className="text-[#0052cc]">Contact</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#0052cc]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0b2a59] font-['Montserrat']">SLIIT Kandy UNI</h3>
                    <p className="text-slate-600 font-medium text-sm">Pallekele, Kandy, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0b2a59] font-['Montserrat']">Dates & Time</h3>
                    <p className="text-slate-600 font-medium text-sm">24th & 25th September 2026</p>
                    <p className="text-slate-600 font-medium text-sm">9.00 a.m. - 5.00 p.m.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0b2a59] font-['Montserrat']">Contact Person</h3>
                    <p className="text-slate-600 font-medium text-sm"><strong>Ms. Nilusha Ariyasena</strong></p>
                    <p className="text-slate-500 font-medium text-xs mb-1">Senior Lecturer / Main Coordinator - Industry Nexus Unit</p>
                    <a href="tel:0775899522" className="text-[#0052cc] hover:underline font-bold text-sm block">077 589 9522</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#0b2a59] font-['Montserrat']">Email Us</h3>
                    <a href="mailto:accel@kandyuni.lk" className="text-[#0052cc] hover:underline font-bold text-sm block">accel@kandyuni.lk</a>
                    <a href="mailto:nilusha.a@kandyuni.lk" className="text-[#0052cc] hover:underline font-bold text-sm block">nilusha.a@kandyuni.lk</a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.0090888981!2d80.70244795!3d7.2882894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3671239c0bb15%3A0x67e8c13fcc5edcd!2sSLIIT%20Kandy%20UNI!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SLIIT Kandy UNI Location"
            ></iframe>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
