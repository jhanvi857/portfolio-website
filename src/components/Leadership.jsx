import React from 'react';
import { motion } from 'framer-motion';
import aspdcLogo from '../assets/aspdc-logo.png';
import roboticsLogo from '../assets/robotics-logo.png';

const leadership = [
  {
    title: 'DSA Domain Lead',
    organization: 'Adani Student Programming & Dev Club',
    period: 'Aug 2025 - Present',
    description: 'Coordinated competitive programming contests, curated algorithmic problem sets, and guided students on optimization techniques.',
    image: aspdcLogo,
    link: 'https://aspdc.vercel.app/'
  },
  {
    title: 'Robotics Trainer',
    organization: 'Adani University Robotics Club',
    period: 'Aug 2025 - Present',
    description: 'Conducted hands-on robotics workshops, taught microcontroller programming, and mentored student hardware-software projects.',
    image: roboticsLogo,
    link: 'https://aurc.in/'
  }
];

export default function Leadership({ variants }) {
  return (
    <motion.section id="leadership" className="space-y-4" variants={variants}>
      <h2 className="font-semibold tracking-tight uppercase text-white text-md px-1 text-left">Leadership & Experience</h2>
      <div className="space-y-3">
        {leadership.map((exp, idx) => (
          <a 
            key={idx}
            href={exp.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-start gap-4 -mx-4 px-4 py-3.5 hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/50 rounded-xl transition-all duration-300 shadow-sm"
          >
            <div 
              className="relative flex shrink-0 overflow-hidden rounded-full border border-zinc-200 size-12 bg-white flex-none items-center justify-center p-1.5 group-hover:scale-110 group-hover:border-zinc-400 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.08)] transition-all duration-300"
            >
              <img 
                src={exp.image} 
                alt={exp.organization} 
                className="w-full h-auto object-contain rounded-full" 
              />
            </div>
            <div className="space-y-1 flex-grow text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-white transition-colors duration-200">
                    {exp.title}
                  </h3>
                  <span 
                    className="text-xs sm:text-sm text-muted-foreground font-medium group-hover:text-zinc-200 group-hover:underline transition-all duration-200"
                  >
                    {exp.organization}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground/75 group-hover:text-zinc-200 transition-colors duration-200 font-mono sm:text-right shrink-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground/70 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed text-justify mt-1.5">
                {exp.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
