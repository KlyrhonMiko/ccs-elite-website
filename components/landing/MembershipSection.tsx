"use client";

import { motion } from "framer-motion";

export default function MembershipSection() {
  return (
    <section id="membership" className="bg-[#121212] w-full relative font-sans text-white py-24 px-6 md:px-12 lg:px-16 border-t border-white/10">
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
            <div className="text-xl md:text-2xl font-light text-white/80 mb-4 font-heading tracking-wider">
              \\ 04
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-display font-light tracking-[0.15em] leading-[1] uppercase text-white">
              Membership
            </h2>
          </div>
          <p className="text-sm md:text-base text-white/70 leading-relaxed font-sans max-w-md">
            Join the elite circle of student developers, designers, and innovators. Unlock exclusive resources, mentorship, and opportunities.
          </p>
        </motion.div>

        {/* Membership Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Information & Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-12"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
                Information
              </h3>
              <p className="text-white/60 leading-relaxed font-sans">
                Membership in the Elite Computer Science Society is more than just a title. It grants you access to premium workshops, specialized tech summits, networking events with industry leaders, and our private community discord where collaboration thrives.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
                Requirements
              </h3>
              <ul className="flex flex-col gap-4 text-white/60 font-sans border-t border-white/10 pt-6">
                <li className="flex items-start gap-4">
                  <span className="text-white/40 mt-1">✦</span>
                  <span>Currently enrolled as a student in a recognized computing or engineering program.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white/40 mt-1">✦</span>
                  <span>A strong passion for technology, coding, or digital design.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white/40 mt-1">✦</span>
                  <span>Willingness to actively participate in society events and contribute to the community.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Instructions & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex flex-col gap-12 bg-white/[0.02] border border-white/10 p-8 md:p-12 h-full justify-between"
          >
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl md:text-3xl font-heading font-light tracking-[0.2em] uppercase text-white/90">
                How to Join
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-6 items-start">
                  <div className="text-2xl font-display text-white/30">01</div>
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-heading tracking-wider uppercase">Submit Application</div>
                    <div className="text-sm text-white/50 font-sans">Fill out the membership form with your details and background.</div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-2xl font-display text-white/30">02</div>
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-heading tracking-wider uppercase">Review Process</div>
                    <div className="text-sm text-white/50 font-sans">Our executive board will review your application within 5-7 business days.</div>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="text-2xl font-display text-white/30">03</div>
                  <div className="flex flex-col gap-2">
                    <div className="text-lg font-heading tracking-wider uppercase">Orientation</div>
                    <div className="text-sm text-white/50 font-sans">Attend the welcome orientation to finalize your onboarding.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <a 
                href="#join-form"
                className="group relative inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white text-black font-sans font-semibold tracking-widest uppercase hover:bg-white/90 transition-colors duration-300 overflow-hidden"
              >
                <span className="relative z-10">Apply Now</span>
                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
