import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FiHome, FiFileText } from 'react-icons/fi';

export function MagnifiedDockIcon({ mouseX, children, label }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Base size is 40px (size-10), scales up to 58px on hover
  const widthTransform = useTransform(distance, [-100, 0, 100], [40, 58, 40]);
  const heightTransform = useTransform(distance, [-100, 0, 100], [40, 58, 40]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <div className="relative group">
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800/80 transition-colors duration-200"
      >
        {children}
      </motion.div>
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 bg-white text-zinc-950 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-55">
        {label}
      </span>
    </div>
  );
}

export function MagnifiedDock({ children }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-14 items-end gap-3 rounded-full bg-zinc-950/80 backdrop-blur-lg border border-zinc-900 px-4 pb-2 shadow-[0_10px_30px_rgba(0,0,0,0.6)] pointer-events-auto relative"
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === MagnifiedDockIcon) {
          return React.cloneElement(child, { mouseX });
        }
        return child;
      })}
    </motion.div>
  );
}

export default function Dock() {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[90%] sm:w-auto max-w-md" style={{ transform: 'translateX(-50%)' }}>
      <MagnifiedDock>
        {/* Home */}
        <MagnifiedDockIcon label="Home">
          <a href="#hero" className="flex size-full items-center justify-center">
            <FiHome className="text-lg" />
          </a>
        </MagnifiedDockIcon>
        
        {/* View Resume */}
        <MagnifiedDockIcon label="Resume">
          <a href="Jhanvi_patel_SWE.pdf" target="_blank" rel="noopener noreferrer" className="flex size-full items-center justify-center">
            <FiFileText className="text-lg" />
          </a>
        </MagnifiedDockIcon>

        {/* Divider */}
        <div className="w-[1px] h-5 bg-zinc-850 self-center mb-2.5" />

        {/* GitHub */}
        <MagnifiedDockIcon label="GitHub">
          <a href="https://github.com/jhanvi857" target="_blank" rel="noopener noreferrer" className="flex size-full items-center justify-center">
            <FaGithub className="text-lg" />
          </a>
        </MagnifiedDockIcon>

        {/* LinkedIn */}
        <MagnifiedDockIcon label="LinkedIn">
          <a href="https://www.linkedin.com/in/jhanvi-patel-0a032b35a/" target="_blank" rel="noopener noreferrer" className="flex size-full items-center justify-center">
            <FaLinkedin className="text-lg" />
          </a>
        </MagnifiedDockIcon>

        {/* Twitter / X */}
        <MagnifiedDockIcon label="Twitter">
          <a href="https://x.com/jhanvi_857" target="_blank" rel="noopener noreferrer" className="flex size-full items-center justify-center">
            <FaTwitter className="text-lg" />
          </a>
        </MagnifiedDockIcon>

        {/* Email */}
        <MagnifiedDockIcon label="Email">
          <a href="mailto:jhanvip8507@gmail.com" className="flex size-full items-center justify-center">
            <FaEnvelope className="text-lg" />
          </a>
        </MagnifiedDockIcon>

        {/* Divider */}
        <div className="w-[1px] h-5 bg-zinc-850 self-center mb-2.5" />

        {/* Theme Indicator (Moon and Stars) */}
        {/* <MagnifiedDockIcon label="Theme">
          <div className="flex size-full items-center justify-center cursor-pointer">
            <svg className="size-4.5 sm:size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              <path d="M6 4l.15.45.45.15-.45.15-.15.45-.15-.45-.45-.15.45-.15z" className="opacity-80 text-zinc-400 group-hover:text-white" fill="currentColor" stroke="none" />
              <path d="M3 8l.1.3.3.1-.3.1-.1.3-.1-.3-.3-.1.3-.1z" className="opacity-70 text-zinc-400 group-hover:text-white" fill="currentColor" stroke="none" />
              <path d="M8 10l.1.3.3.1-.3.1-.1.3-.1-.3-.3-.1.3-.1z" className="opacity-70 text-zinc-400 group-hover:text-white" fill="currentColor" stroke="none" />
            </svg>
          </div>
        </MagnifiedDockIcon> */}
      </MagnifiedDock>
    </div>
  );
}
