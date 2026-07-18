"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LiquidShape from "./LiquidShape";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#121212] min-h-screen w-full relative overflow-hidden font-sans text-white flex flex-col">
      
      {/* 3D Immersive Background */}
      <div className="absolute inset-0 z-0">
        <LiquidShape />
      </div>

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-10 p-6 md:p-12 lg:p-16 flex flex-col justify-between pointer-events-none">
        
        {/* Top Header */}
        <div className="flex justify-between items-start pointer-events-auto w-full">
          {/* Main Title Area */}
          <div className="flex flex-col">
            <h1 className="text-[clamp(3rem,8vw,8rem)] font-display font-light tracking-[0.15em] leading-[0.9] uppercase text-white">
               COMPUTER<br />SOCIETY
            </h1>
            <a
              href="https://www.facebook.com/PLPCOMSOC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl lg:text-3xl font-heading font-light tracking-[0.2em] text-white/70 mt-2 md:mt-4 flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="font-heading font-medium">@</span> college_of_computer_studies
            </a>
          </div>
          
          {/* Top Right Logo / Text */}
          <div className="hidden md:flex items-center gap-1">
            <Image
              src="/ccs-elite-logo.png"
              alt="CCS Elite Logo"
              width={48}
              height={48}
              className="object-contain"
            />
            <div className="text-xs uppercase tracking-[0.3em] text-white/80 leading-snug font-heading font-bold text-left">
              ccs elite
            </div>
          </div>
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white pointer-events-auto" onClick={() => setMenuOpen(!menuOpen)}>
             <Menu className="w-8 h-8" />
          </button>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col mt-auto mb-16 md:mb-24 md:max-w-md pointer-events-auto">
          <div className="text-xl md:text-2xl font-light text-white/80 mb-4 md:mb-6 font-heading tracking-wider">
            \\ 01
          </div>
          <div className="text-5xl md:text-6xl text-white mb-4 md:mb-6 leading-none tracking-widest font-heading">
            ✦ ✦ ✦
          </div>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-sans max-w-[280px] md:max-w-sm">
            A premier organization dedicated to fostering innovation, technical excellence, and a collaborative community among students. We provide resources, workshops, and opportunities to build the future of technology together.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end pointer-events-auto w-full">
          {/* Bottom Left Links/Stats */}
          <div className="flex flex-col gap-4 font-heading text-xs md:text-sm uppercase tracking-[0.3em] text-white">
            <a href="#initiatives" className="flex items-center gap-4 hover:text-white/60 transition-colors group">
              <span className="w-8 md:w-12 h-[1px] bg-white group-hover:w-16 transition-all duration-300"></span> 30+ INITIATIVES
            </a>
            <a href="#events" className="flex items-center gap-4 hover:text-white/60 transition-colors group">
              <span className="w-8 md:w-12 h-[1px] bg-white group-hover:w-16 transition-all duration-300"></span> UPCOMING EVENTS
            </a>
          </div>

          {/* Bottom Right Barcode */}
          <div className="hidden md:flex flex-col items-center gap-2">
            <div className="flex h-16 items-end gap-[2px] md:gap-[3px] opacity-100">
              {[3, 1, 4, 2, 1, 5, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2, 4, 1, 2, 5, 1, 3, 2, 4, 2, 1, 3].map((w, i) => (
                <div key={i} className="bg-white h-full" style={{ width: `${w * 2}px` }} />
              ))}
            </div>
            <div className="flex justify-between w-full text-[10px] md:text-xs tracking-[0.4em] font-heading uppercase font-bold px-1">
              <span>COM</span>
              <span>SOC</span>
            </div>
          </div>
        </div>

      </div>
      
      {/* Mobile nav overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#121212]/95 backdrop-blur-xl pointer-events-auto"
        >
          <button className="absolute top-8 right-8 text-white" onClick={() => setMenuOpen(false)}>
            <X className="w-8 h-8" />
          </button>
          {["About", "Initiatives", "Events", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-4xl font-display font-light uppercase tracking-[0.2em] text-white hover:text-white/50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </motion.div>
      )}

    </div>
  );
}
