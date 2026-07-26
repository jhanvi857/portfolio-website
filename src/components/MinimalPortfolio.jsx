import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

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
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 15,
    },
  },
};

const sectionScrollProps = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const MinimalPortfolio = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen text-foreground font-sans overflow-x-hidden">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-zinc-500 via-white to-zinc-400 z-50 origin-left shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        style={{ scaleX }}
      />

      <motion.main 
        className="relative z-10 max-w-2xl mx-auto py-16 sm:py-24 px-6 flex flex-col space-y-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div {...sectionScrollProps}>
          <Hero variants={itemVariants} />
        </motion.div>

        <div className="divider-dotted" />
        <motion.div {...sectionScrollProps}>
          <About variants={itemVariants} />
        </motion.div>

        <div className="divider-dotted" />
        <motion.div {...sectionScrollProps}>
          <CompetitiveProgramming variants={itemVariants} />
        </motion.div>

        <div className="divider-dotted" />
        <motion.div {...sectionScrollProps}>
          <Education variants={itemVariants} />
        </motion.div>

        <div className="divider-dotted" />
        <motion.div {...sectionScrollProps}>
          <Skills variants={itemVariants} />
        </motion.div>

        <div className="divider-dotted" />
        <motion.div {...sectionScrollProps}>
          <Projects variants={itemVariants} />
        </motion.div>

        <div className="divider-dotted" />
        <motion.div {...sectionScrollProps}>
          <Achievements variants={itemVariants} />
        </motion.div>

        <div className="divider-dotted" />
        <motion.div {...sectionScrollProps}>
          <Leadership variants={itemVariants} />
        </motion.div>

        <div className="divider-dotted" />
        <motion.div {...sectionScrollProps}>
          <Workshops variants={itemVariants} />
        </motion.div>

        <div className="divider-dotted" />
        <motion.div {...sectionScrollProps}>
          <Contact variants={itemVariants} />
        </motion.div>

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
