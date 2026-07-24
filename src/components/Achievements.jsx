import React from 'react';
import { motion } from 'framer-motion';
import adaniLogo from '../assets/adani-logo.png';
import breachLogo from '../assets/breach-logo.png';

const achievements = [
  {
    title: 'Backend Competition Winner',
    organization: 'Adani University',
    period: 'April 2026',
    description: 'First place in the university-wide Backend Development Competition, focused on designing secure REST APIs, authentication protocols, HTTP methods, and token-based state management.',
    image: adaniLogo,
    link: 'https://www.adaniuni.ac.in/'
  },
  {
    title: 'Breach Fintech Hackathon - Top 5 Finalist',
    organization: 'Anirveda PDEU',
    period: 'March 2026',
    description: 'Finished Top 5 out of 750+ teams. Co-built Phishlytics, a phishing simulation and timestamped behavior analytics MVP platform in 36 hours.',
    image: breachLogo,
    link: 'https://anirvedapdeu.in/'
  }
];

export default function Achievements({ variants }) {
  return (
    <motion.section id="achievements" className="space-y-4" variants={variants}>
      <h2 className="font-semibold tracking-tight uppercase text-white text-md px-1 text-left">Achievements</h2>
      <div className="space-y-3">
        {achievements.map((ach, idx) => (
          <a 
            key={idx}
            href={ach.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-start gap-4 -mx-4 px-4 py-3.5 hover:bg-zinc-900/40 border border-transparent hover:border-zinc-800/50 rounded-xl transition-all duration-300 shadow-sm"
          >
            <div 
              className="relative flex shrink-0 overflow-hidden rounded-full border border-zinc-200 size-12 bg-white flex-none items-center justify-center p-1.5 group-hover:scale-110 group-hover:border-zinc-400 group-hover:shadow-[0_0_12px_rgba(255,255,255,0.08)] transition-all duration-300"
            >
              <img 
                src={ach.image} 
                alt={ach.organization} 
                className="w-full h-auto object-contain rounded-full" 
              />
            </div>
            <div className="space-y-1 flex-grow text-left">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-foreground group-hover:text-white transition-colors duration-200">
                    {ach.title}
                  </h3>
                  <span 
                    className="text-xs sm:text-sm text-muted-foreground font-medium group-hover:text-zinc-200 group-hover:underline transition-all duration-200"
                  >
                    {ach.organization}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground/75 group-hover:text-zinc-200 transition-colors duration-200 font-mono sm:text-right shrink-0">
                  {ach.period}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground/70 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed text-justify mt-1.5">
                {ach.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
