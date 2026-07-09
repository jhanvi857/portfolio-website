import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contact({ variants }) {
  return (
    <motion.section id="contact" className="space-y-4 text-center py-6" variants={variants}>
      <div className="space-y-2 max-w-lg mx-auto">
        <h2 className="text-lg font-semibold tracking-tight uppercase text-muted-foreground/60">Contact</h2>
        <h3 className="text-2xl font-bold tracking-tight">Get in touch</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Have an interesting problem, a role, or want to collaborate? Feel free to drop me a message on LinkedIn or send an email. Let's create something impact-driven!
        </p>
      </div>

      <div className="flex justify-center gap-4 pt-4">
        <a 
          href="https://github.com/jhanvi857" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3.5 bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-500 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.06)]"
          title="GitHub"
        >
          <FaGithub className="text-xl" />
        </a>
        <a 
          href="https://www.linkedin.com/in/jhanvi-patel-0a032b35a/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3.5 bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-500 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.06)]"
          title="LinkedIn"
        >
          <FaLinkedin className="text-xl" />
        </a>
        <a 
          href="https://x.com/jhanvi_857" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3.5 bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-500 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.06)]"
          title="Twitter / X"
        >
          <FaTwitter className="text-xl" />
        </a>
        <a 
          href="mailto:jhanvip8507@gmail.com" 
          className="p-3.5 bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 hover:border-zinc-500 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.06)]"
          title="Email"
        >
          <FaEnvelope className="text-xl" />
        </a>
      </div>
    </motion.section>
  );
}
