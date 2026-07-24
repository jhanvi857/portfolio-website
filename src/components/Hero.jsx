import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ variants }) {
  return (
    <motion.section id="hero" className="space-y-4" variants={variants}>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-left">
          Hi, I'm Jhanvi patel,
        </h1>
      </div>
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-justify">
        Third-year Computer Science student at Adani University with a strong interest in backend engineering, distributed systems, and developer infrastructure. I’ve solved{' '}
        <span className="text-foreground font-medium">800+ problems on LeetCode</span> and I am{' '}
        <span className="text-foreground font-medium">Specialist on Codeforces</span>.
      </p>
      <div className="pt-2 text-left">
        <a 
          href="Jhanvi_patel_SWE.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-950 font-semibold text-xs sm:text-sm rounded-lg hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_2px_8px_rgba(255,255,255,0.05)] w-fit"
        >
          <span>View Resume</span>
          <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 3h6v6" />
            <path d="M10 14 21 3" />
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          </svg>
        </a>
      </div>
    </motion.section>
  );
}
