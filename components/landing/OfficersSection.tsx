"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const officers = [
  { role: "President", name: "John Doe", image: "https://picsum.photos/seed/president/800/1000" },
  { role: "VP Internal", name: "Juan dela Cruz", image: "https://picsum.photos/seed/vpi/800/1000" },
  { role: "VP External", name: "Alice Smith", image: "https://picsum.photos/seed/vpe/800/1000" },
  { role: "Secretary", name: "Jane Doe", image: "https://picsum.photos/seed/secretary/800/1000" },
  { role: "Treasurer", name: "Robert Fox", image: "https://picsum.photos/seed/treasurer/800/1000" },
  { role: "Auditor", name: "Maria Garcia", image: "https://picsum.photos/seed/auditor/800/1000" },
  { role: "PRO", name: "David Chen", image: "https://picsum.photos/seed/pro/800/1000" },
];

const facultyAdviser = {
  name: "Dr. Robert Smith",
  department: "College of Computer Studies",
  image: "https://picsum.photos/seed/adviser/800/1000",
};

const contactInfo = [
  { label: "Email", value: "ccs.elite@university.edu", icon: "✉" },
  { label: "Office", value: "CCS Building, Room 402", icon: "📍" },
  { label: "Social", value: "@ccs_elite_org", icon: "❖" },
];

export default function OfficersSection() {
  return (
    <section id="officers" className="bg-[#121212] w-full relative overflow-hidden font-sans text-white py-32 px-6 md:px-12 lg:px-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          <div>
            <div className="text-xl md:text-2xl font-light text-white/50 mb-4 font-heading tracking-wider">
              \\ 3.3
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-light tracking-[0.15em] leading-[1] uppercase text-white">
              Officers <br /> & Advisers
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans max-w-md">
            The dedicated team leading our organization, driving innovation, and ensuring the success of our initiatives.
          </p>
        </motion.div>

        {/* Officers Constellation (Org Chart) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full relative pt-12 overflow-x-auto pb-12"
        >
          
          {/* Level 1: PRESIDENT */}
          <div className="flex flex-col items-center gap-6 relative z-10 group cursor-default shrink-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border border-emerald-500/30 group-hover:border-emerald-400 transition-colors duration-500 shadow-[0_0_30px_rgba(16,185,129,0.05)] group-hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]">
               <Image src={officers[0].image} alt={officers[0].name} fill sizes="200px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <div className="text-center">
              <div className="text-sm md:text-base uppercase tracking-[0.4em] text-emerald-400 font-heading font-bold">{officers[0].role}</div>
              <div className="text-3xl md:text-5xl font-display uppercase tracking-wider text-white mt-3 group-hover:scale-105 transition-transform duration-500">{officers[0].name}</div>
            </div>
          </div>

          {/* Connecting Line from President to Level 2 (VPs) */}
          <div className="flex flex-col items-center shrink-0 w-full relative">
             <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-emerald-500/50 to-white/20 shrink-0"></div>
          </div>

          {/* Level 2: VPs */}
          <div className="flex justify-center w-full shrink-0 relative">
            <div className="flex w-[350px] md:w-[600px]">
              {/* VP Internal */}
              <div className="flex flex-col items-center flex-1 relative">
                {/* Horizontal connection to center */}
                <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-white/20" />
                <div className="w-[1px] h-8 md:h-12 bg-white/20 shrink-0 relative z-10" />
                <div className="flex flex-col items-center gap-4 relative z-10 group mt-4 px-4 text-center">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/20 group-hover:border-emerald-400/50 transition-colors duration-500">
                     <Image src={officers[1].image} alt={officers[1].name} fill sizes="150px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="text-center w-full">
                    <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 font-heading font-bold">{officers[1].role}</div>
                    <div className="text-xl md:text-2xl font-display uppercase tracking-wider text-white mt-2 group-hover:scale-105 transition-transform duration-500">{officers[1].name}</div>
                  </div>
                </div>
                {/* Line down to Level 3 */}
                <div className="w-[1px] h-12 md:h-16 bg-white/20 mt-6 md:mt-8 shrink-0 relative z-10" />
              </div>

              {/* VP External */}
              <div className="flex flex-col items-center flex-1 relative">
                {/* Horizontal connection to center */}
                <div className="absolute top-0 left-0 w-1/2 h-[1px] bg-white/20" />
                <div className="w-[1px] h-8 md:h-12 bg-white/20 shrink-0 relative z-10" />
                <div className="flex flex-col items-center gap-4 relative z-10 group mt-4 px-4 text-center">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/20 group-hover:border-emerald-400/50 transition-colors duration-500">
                     <Image src={officers[2].image} alt={officers[2].name} fill sizes="150px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div className="text-center w-full">
                    <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50 font-heading font-bold">{officers[2].role}</div>
                    <div className="text-xl md:text-2xl font-display uppercase tracking-wider text-white mt-2 group-hover:scale-105 transition-transform duration-500">{officers[2].name}</div>
                  </div>
                </div>
                {/* Line down to Level 3 */}
                <div className="w-[1px] h-12 md:h-16 bg-white/20 mt-6 md:mt-8 shrink-0 relative z-10" />
              </div>
            </div>
          </div>

          {/* Bridge combining VPs down to Level 3 */}
          <div className="flex justify-center w-full shrink-0 relative">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[600px] flex">
               {/* Left side connects to center */}
               <div className="flex-1 relative">
                 <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-white/20" />
               </div>
               {/* Right side connects to center */}
               <div className="flex-1 relative">
                 <div className="absolute top-0 left-0 w-1/2 h-[1px] bg-white/20" />
               </div>
             </div>
             {/* Central drop down to Level 3 horizontal bridge */}
             <div className="w-[1px] h-12 md:h-16 bg-white/20 shrink-0 relative z-10" />
          </div>

          {/* Level 3: The Rest */}
          <div className="flex justify-center w-full shrink-0">
             <div className="flex w-[800px] md:w-[900px] lg:w-[1000px]">
               {[3, 4, 5, 6].map((idx, i) => (
                  <div key={idx} className="flex flex-col items-center flex-1 relative">
                    {/* Horizontal bridge segment */}
                    {i === 0 && <div className="absolute top-0 right-0 w-1/2 h-[1px] bg-white/20" />}
                    {i === 3 && <div className="absolute top-0 left-0 w-1/2 h-[1px] bg-white/20" />}
                    {(i > 0 && i < 3) && <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20" />}
                    
                    <div className="w-[1px] h-8 md:h-12 bg-white/20 shrink-0 relative z-10" />
                    <div className="flex flex-col items-center gap-3 relative z-10 group mt-4 px-4 text-center">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-white/10 group-hover:border-emerald-400/30 transition-colors duration-500">
                         <Image src={officers[idx].image} alt={officers[idx].name} fill sizes="100px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <div className="text-center w-full">
                        <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white/40 font-heading font-bold break-words">{officers[idx].role}</div>
                        <div className="text-lg md:text-xl font-display uppercase tracking-wider text-white/90 mt-1">{officers[idx].name}</div>
                      </div>
                    </div>
                  </div>
               ))}
             </div>
          </div>

        </motion.div>

        {/* Bottom Section: Adviser & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pt-20 border-t border-white/10">
          
          {/* Faculty Adviser */}
          <div className="flex flex-col gap-10">
            <h3 className="text-sm font-heading font-bold tracking-[0.3em] uppercase text-white/50">
              Faculty Adviser
            </h3>
            <div className="flex flex-col sm:flex-row items-start gap-8 group cursor-default">
              <div className="relative w-32 h-40 overflow-hidden border border-white/10 shrink-0 group-hover:border-emerald-400/30 transition-colors duration-500">
                <Image src={facultyAdviser.image} alt={facultyAdviser.name} fill sizes="150px" className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <div className="flex flex-col pt-2 gap-4">
                <div className="text-3xl md:text-4xl font-display uppercase tracking-[0.1em] text-white">
                  {facultyAdviser.name}
                </div>
                <div className="text-base font-sans text-white/60">
                  {facultyAdviser.department}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-10">
            <h3 className="text-sm font-heading font-bold tracking-[0.3em] uppercase text-white/50">
              Contact & HQ
            </h3>
            <div className="flex flex-col w-full">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="flex justify-between items-center py-6 border-b border-white/10 group cursor-default">
                  <div className="flex items-center gap-6">
                    <span className="text-white/30 text-xl group-hover:text-emerald-400 transition-colors duration-300">
                      {info.icon}
                    </span>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-heading">
                      {info.label}
                    </span>
                  </div>
                  <span className="text-base md:text-lg font-sans text-white/90">
                    {info.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
