"use client";

import Image from "next/image";

const upcomingEvents = [
  {
    date: "OCT 15",
    title: "Tech Horizon Summit 2026",
    location: "Main Auditorium",
    time: "09:00 AM - 05:00 PM"
  },
  {
    date: "NOV 02",
    title: "HackTheFuture 48h Hackathon",
    location: "Innovation Hub",
    time: "Starts at 6:00 PM"
  },
  {
    date: "NOV 20",
    title: "AI & Ethics Panel Discussion",
    location: "Virtual Event",
    time: "02:00 PM - 04:00 PM"
  }
];

export default function EventsSection() {
  return (
    <section id="events" className="bg-[#121212] w-full relative overflow-hidden font-sans text-white py-24 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="text-xl md:text-2xl font-light text-white/80 mb-4 font-heading tracking-wider">
              \\ 03
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-light tracking-[0.15em] leading-[1] uppercase text-white">
              Events &<br />Gallery
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans max-w-md">
            Discover our latest gatherings, from competitive hackathons to insightful technical summits, designed to elevate your skills.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="flex flex-col gap-12">
          <div className="flex justify-between items-end">
            <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
              Upcoming Events
            </h3>
            <div className="hidden md:flex gap-2 text-white/40">
              ✦ ✦ ✦
            </div>
          </div>
          
          <div className="flex flex-col border-t border-white/10">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index} 
                className="group flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300 px-4 md:px-8 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-16 items-start md:items-center mb-4 md:mb-0">
                  <div className="text-2xl md:text-3xl font-display uppercase tracking-[0.1em] text-white/40 group-hover:text-white transition-colors duration-300 w-32">
                    {event.date}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-xl md:text-2xl font-heading font-light tracking-wide text-white group-hover:text-white/90">
                      {event.title}
                    </div>
                    <div className="text-sm text-white/50 tracking-wider uppercase font-sans">
                      {event.location} • {event.time}
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M13 1H3.4M13 1V10.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Gallery */}
        <div className="flex flex-col gap-12">
          <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
            Event Gallery
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Image 1 */}
            <div className="group relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image 
                src="/events/gallery_1.png" 
                alt="Hackathon Event" 
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 font-heading mb-1">2025</div>
                <div className="text-lg font-display uppercase tracking-wide text-white">Spring Hackathon</div>
              </div>
            </div>

            {/* Gallery Image 2 */}
            <div className="group relative aspect-[4/3] overflow-hidden border border-white/10 lg:translate-y-8">
              <Image 
                src="/events/gallery_2.png" 
                alt="Tech Conference" 
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 font-heading mb-1">2025</div>
                <div className="text-lg font-display uppercase tracking-wide text-white">Innovation Summit</div>
              </div>
            </div>

            {/* Gallery Image 3 */}
            <div className="group relative aspect-[4/3] overflow-hidden border border-white/10">
              <Image 
                src="/events/gallery_3.png" 
                alt="Robotics Workshop" 
                fill 
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 grayscale-[20%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-xs uppercase tracking-[0.2em] text-white/70 font-heading mb-1">2026</div>
                <div className="text-lg font-display uppercase tracking-wide text-white">Robotics Workshop</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
