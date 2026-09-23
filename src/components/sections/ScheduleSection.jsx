import React, { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";

export default function ScheduleSection() {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: {
      date: "Thursday, 24th September 2026",
      items: [
        { time: "08:30 – 09:00", activity: "Registration", type: "break" },
        { time: "09:00 – 09:15", activity: "Arrival of the Chief Guest", type: "keynote" },
        { time: "09:15 – 09:20", activity: "Ceremonial Lighting of the Oil Lamp", type: "keynote" },
        { time: "09:25 – 09:35", activity: "Welcome Dance", type: "fun" },
        { time: "09:35 – 09:40", activity: "Welcome Address by the Head of the Department", type: "keynote" },
        { time: "09:40 – 09:50", activity: "Address by the Dean, Kandy UNI", type: "keynote" },
        { time: "09:50 – 10:20", activity: "Guest of Honor's Address", type: "keynote" },
        { time: "10:20 – 10:30", activity: "Entertainment Item", type: "fun" },
        { time: "10:30 – 11:00", activity: "Chief Guest Speech", type: "keynote" },
        { time: "11:00 – 11:05", activity: "Token of Appreciation to Guests", type: "keynote" },
        { time: "11:05 – 11:15", activity: "Vote of Thanks by the ACCEL Coordinator", type: "keynote" },
        { time: "11:15 – 11:30", activity: "Expo Opening and Continuation", type: "session" },
        { time: "11:30 – 12:30", activity: "Morning Refreshment", type: "break" },
        { time: "12:30 – 13:30", activity: "Entertainment Item", type: "fun" },
        { time: "15:30 – 16:30", activity: "Evening Refreshment", type: "break" },
        { time: "16:30 – 17:00", activity: "Day 01 Wrap Up & Vote of Thanks", type: "keynote" },
      ]
    },
    2: {
      date: "Friday, 25th September 2026",
      items: [
        { time: "09:00", activity: "Expo Opening", type: "session" },
        { time: "10:30 – 10:40", activity: "Entertainment Item", type: "fun" },
        { time: "11:00 – 11:15", activity: "Welcome the Judges", type: "keynote" },
        { time: "11:15 – 12:00", activity: "School Innovation Judging", type: "session" },
        { time: "12:00 – 13:00", activity: "Lunch & Refreshments", type: "break" },
        { time: "13:00 – 13:30", activity: "Entertainment Item", type: "fun" },
        { time: "13:30 – 14:30", activity: "University Innovation Judging", type: "session" },
        { time: "14:45 – 14:50", activity: "Gathering for Closing Ceremony", type: "keynote" },
        { time: "14:50 – 15:00", activity: "Welcome Speech", type: "keynote" },
        { time: "15:03 – 15:10", activity: "Entertainment Item", type: "fun" },
        { time: "15:10 – 15:15", activity: "Judge's Comment", type: "keynote" },
        { time: "15:15 – 15:25", activity: "Symbolic Certificate Presentation for SME's", type: "keynote" },
        { time: "15:25 – 15:45", activity: "Certificate Presentation for Winners", type: "keynote" },
        { time: "15:45 – 15:55", activity: "Token of Appreciation for Judges", type: "keynote" },
        { time: "15:55 – 16:00", activity: "Vote of Thanks by the ACCEL Coordinator", type: "keynote" },
        { time: "16:00 – 16:05", activity: "National Anthem", type: "keynote" },
      ]
    }
  };

  const getStyleForType = (type) => {
    switch (type) {
      case "keynote": return "border-blue-500 bg-blue-50/50";
      case "break": return "border-slate-300 bg-slate-50";
      case "fun": return "border-amber-400 bg-amber-50/50";
      default: return "border-emerald-400 bg-emerald-50/50";
    }
  };

  return (
    <section id="schedule" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0b2a59] font-['Space_Grotesk'] tracking-tight mb-4">
              The <span className="text-[#0052cc]">Programme</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-medium">
              Plan your visit and make the most out of the two-day event.
            </p>
          </ScrollReveal>
        </div>

        {/* Day Toggles */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                activeDay === 1 
                  ? "bg-[#0b2a59] text-white shadow-lg scale-105" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Day 1 - Sep 24
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                activeDay === 2 
                  ? "bg-[#0052cc] text-white shadow-lg scale-105" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Day 2 - Sep 25
            </button>
          </div>
        </ScrollReveal>

        {/* Day Info Header */}
        <ScrollReveal delay={150}>
          <div className="bg-[#0b2a59] text-white rounded-t-3xl py-5 px-6 text-center border-b-4 border-[#ffcc00]">
            <h3 className="text-xl sm:text-2xl font-black font-['Montserrat'] tracking-wide">{scheduleData[activeDay].date}</h3>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="bg-white border-x border-b border-slate-200 rounded-b-3xl p-6 sm:p-8 shadow-xl">
          <div className="space-y-6">
            {scheduleData[activeDay].items.map((item, index) => (
              <ScrollReveal key={index} delay={50 * index} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <div className="shrink-0 w-full sm:w-36 pt-1">
                  <div className="inline-flex sm:flex items-center gap-2 text-[#0052cc] font-black text-sm font-['Space_Grotesk']">
                    <Clock className="w-4 h-4" />
                    <span>{item.time}</span>
                  </div>
                </div>
                
                <div className={`flex-grow p-4 rounded-xl border-l-4 ${getStyleForType(item.type)}`}>
                  <p className="font-bold text-slate-800 text-sm sm:text-base">{item.activity}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
