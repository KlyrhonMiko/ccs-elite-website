"use client";

import { motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LiquidShape from "./LiquidShape";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="home" className="bg-[#121212] min-h-screen w-full relative overflow-hidden font-sans text-white flex flex-col">
      
      {/* 3D Immersive Background */}
      <div className="absolute inset-0 z-0">
        <LiquidShape />
      </div>

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-10 p-6 md:p-12 lg:p-16 flex flex-col justify-between pointer-events-none">
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-start pointer-events-auto w-full"
        >
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
        </motion.div>

        {/* Middle Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col mt-auto mb-16 md:mb-24 md:max-w-md pointer-events-auto"
        >
          <div className="text-xl md:text-2xl font-light text-white/80 mb-4 md:mb-6 font-heading tracking-wider">
            \\ 01
          </div>
          <div className="text-5xl md:text-6xl text-white mb-4 md:mb-6 leading-none tracking-widest font-heading">
            ✦ ✦ ✦
          </div>
          <p className="text-xs md:text-sm text-white/70 leading-relaxed font-sans max-w-[280px] md:max-w-sm">
            A premier organization dedicated to fostering innovation, technical excellence, and a collaborative community among students. We provide resources, workshops, and opportunities to build the future of technology together.
          </p>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-between items-end pointer-events-auto w-full"
        >
          {/* Bottom Left Links/Stats */}
          <div className="flex flex-col gap-3 font-heading text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em]">
            <a href="#about" className="flex items-center justify-between w-[260px] text-white/70 hover:text-[#121212] hover:bg-white border border-white/20 transition-all duration-300 group cursor-pointer py-3 px-5">
              <span className="font-medium">ABOUT US</span>
              <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>
            <a href="#events" className="flex items-center justify-between w-[260px] text-white/70 hover:text-[#121212] hover:bg-white border border-white/20 transition-all duration-300 group cursor-pointer py-3 px-5">
              <span className="font-medium">UPCOMING EVENTS</span>
              <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
            </a>
            <a href="#budget" className="flex items-center justify-between w-[260px] text-white/70 hover:text-[#121212] hover:bg-white border border-white/20 transition-all duration-300 group cursor-pointer py-3 px-5">
              <span className="font-medium">BUDGET & TRANSPARENCY</span>
              <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
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
        </motion.div>

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
          {[
            { name: "About Us", href: "#about" },
            { name: "Upcoming Events", href: "#events" },
            { name: "Budget", href: "#budget" }
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-4xl font-display font-light uppercase tracking-[0.2em] text-white hover:text-white/50 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}

    </div>
  );
}
