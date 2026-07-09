import React from 'react';
import { motion } from 'framer-motion';
import adaniLogo from '../assets/adani-logo.png';

export default function Education({ variants }) {
  return (
    <motion.section id="education" className="space-y-4" variants={variants}>
      <h2 className="font-semibold tracking-tight uppercase text-white text-md px-1 text-left">Education</h2>
      <a 
        href="https://www.adaniuni.ac.in/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-4 -mx-4 px-4 py-3 hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/50 rounded-xl transition-all duration-300 shadow-sm"
      >
        <div className="flex items-start gap-4 text-left">
          <div 
            className="relative flex shrink-0 overflow-hidden rounded-full border border-zinc-200 size-12 bg-white flex-none items-center justify-center p-1.5 group-hover:scale-110 group-hover:border-zinc-400 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.08)] transition-all duration-300"
          >
            <img 
              src={adaniLogo} 
              alt="Adani University" 
              className="w-full h-auto object-contain rounded-full" 
            />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-white transition-colors duration-200">
              B.Tech in Computer Science (AI-ML)
            </h3>
            <div className="flex flex-col">
              <span 
                className="text-xs sm:text-sm text-muted-foreground font-medium group-hover:text-zinc-200 group-hover:underline transition-all duration-200"
              >
                Adani University
              </span>
              <span className="text-[11px] sm:text-xs text-muted-foreground/65 font-medium mt-0.5">
                CGPA: 8.89
              </span>
            </div>
          </div>
        </div>
        <span className="text-xs text-muted-foreground/75 group-hover:text-zinc-200 transition-colors duration-200 font-mono text-right shrink-0">
          2024 - 2028
        </span>
      </a>
    </motion.section>
  );
}
