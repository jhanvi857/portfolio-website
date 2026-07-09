import React from 'react';
import { motion } from 'framer-motion';
import aspdcLogo from '../assets/aspdc-logo.png';
import roboticsLogo from '../assets/robotics-logo.png';

const workshops = [
  {
    title: 'DSA Competition Judge',
    organization:'ASPDC',
    period:'Apr 2026',
    description:'Evaluated participants across debugging, coding, and technical interview (Q&A) rounds, ensuring fair assessment based on problem-solving, coding quality, and technical understanding.',
    image: aspdcLogo,
    link: 'https://aspdc.vercel.app/'
  },
  {
    title: 'Workshop Instructor: DSA 101',
    organization: 'ASPDC',
    period: 'Feb 2026',
    description: 'Led an interactive session teaching Binary Search implementations and edge case handling to 1st year engineering students.',
    image: aspdcLogo,
    link: 'https://aspdc.vercel.app/'
  },
  {
    title: 'Lead Instructor: DSA Patterns Unlocked II',
    organization: 'ASPDC',
    period: 'Nov 2025',
    description: 'Designed curriculum and taught Greedy Techniques, Two Pointers, Stacks, Queues, and Recursion edge cases to 2nd year engineering students.',
    image: aspdcLogo,
    link: 'https://aspdc.vercel.app/'
  },
  {
    title: 'Lead Instructor: DSA Patterns Unlocked I',
    organization: 'ASPDC',
    period: 'Nov 2025',
    description: 'Designed curriculum and taught Prefix Sum arrays, Hashmaps, and Sliding Window fundamentals to 2nd year engineering students.',
    image: aspdcLogo,
    link: 'https://aspdc.vercel.app/'
  },
  {
    title: 'Trainer : Robotics workshop',
    organization: 'AURC',
    period: 'Nov 2025',
    description: 'Explained bit masking and taught bitwise operations for sensor and motor state control to second year engineering students.',
    image: roboticsLogo,
    link: 'https://aurc.in/'
  }
];

export default function Workshops({ variants }) {
  return (
    <motion.section id="workshops" className="space-y-4" variants={variants}>
      <h2 className="font-semibold tracking-tight uppercase text-white text-md px-1 text-left">Workshops & Competitions</h2>
      <div className="space-y-3">
        {workshops.map((exp, idx) => (
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
