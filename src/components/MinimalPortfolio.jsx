import React from 'react';
import { motion } from 'framer-motion';

// Import modular subcomponents
import Hero from './Hero';
import About from './About';
import CompetitiveProgramming from './CompetitiveProgramming';
import Education from './Education';
import Skills from './Skills';
import Projects from './Projects';
import Leadership from './Leadership';
import Workshops from './Workshops';
import Achievements from './Achievements';
import Contact from './Contact';
import Dock from './Dock';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const MinimalPortfolio = () => {
  return (
    <div className="relative min-h-screen text-foreground font-sans overflow-x-hidden">
      <motion.main 
        className="relative z-10 max-w-2xl mx-auto py-16 sm:py-24 px-6 flex flex-col space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Hero variants={itemVariants} />
        
        <div className="divider-dotted" />
        <About variants={itemVariants} />
        
        <div className="divider-dotted" />
        <CompetitiveProgramming variants={itemVariants} />
        
        <div className="divider-dotted" />
        <Education variants={itemVariants} />
        
        <div className="divider-dotted" />
        <Skills variants={itemVariants} />
        
        <div className="divider-dotted" />
        <Projects variants={itemVariants} />
        
        <div className="divider-dotted" />
        <Leadership variants={itemVariants} />
        
        <div className="divider-dotted" />
        <Workshops variants={itemVariants} />
        
        <div className="divider-dotted" />
        <Achievements variants={itemVariants} />
        
        <div className="divider-dotted" />
        <Contact variants={itemVariants} />

        {/* FOOTER */}
        <footer className="text-center pt-8 pb-16 text-[11px] font-mono text-muted-foreground/50 border-t border-border/10">
          <p>© {new Date().getFullYear()} Jhanvi Patel. All rights reserved.</p>
        </footer>
      </motion.main>

      {/* Floating Navigation Dock */}
      <Dock />
    </div>
  );
};

export default MinimalPortfolio;
