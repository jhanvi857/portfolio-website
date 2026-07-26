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
        {[
          { icon: <FaGithub className="text-xl" />, href: 'https://github.com/jhanvi857', title: 'GitHub' },
          { icon: <FaLinkedin className="text-xl" />, href: 'https://www.linkedin.com/in/jhanvi-patel-0a032b35a/', title: 'LinkedIn' },
          { icon: <FaTwitter className="text-xl" />, href: 'https://x.com/jhanvi_857', title: 'Twitter / X' },
          { icon: <FaEnvelope className="text-xl" />, href: 'mailto:jhanvip8507@gmail.com', title: 'Email' }
        ].map((item, idx) => (
          <motion.a 
            key={idx}
            href={item.href} 
            target={item.href.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="p-3.5 bg-zinc-900/90 border border-zinc-800 text-white hover:bg-white hover:text-black hover:border-white rounded-full transition-colors duration-300 shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            title={item.title}
          >
            {item.icon}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
