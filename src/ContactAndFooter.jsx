import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-black relative text-white">
      <div className="absolute -top-10 -left-40 w-[300px] h-[300px] bg-purple-700 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -top-10 -right-0 w-[300px] h-[300px] bg-purple-700 opacity-20 blur-3xl rounded-full z-0"></div>

        <div className="absolute inset-0 pointer-events-none z-0
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:40px_40px]" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">Let's Connect</h2>
        <p className="text-gray-300 mb-8">
          I’m open to internship opportunities, collaboration on exciting projects, or just a chat about DSA and web development. Drop me a message!
        </p>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="mailto:jhanvip8507@gmail.com" className="hover:text-purple-400" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/jhanvi857" target="_blank" rel="noreferrer" className="hover:text-purple-400" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jhanvi-patel-0a032b35a/" target="_blank" rel="noreferrer" className="hover:text-purple-400" title="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
          <div className="absolute -bottom-20  w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0"></div>
      </div>
      <div className="absolute -top-20 -left-36 w-[400px] h-[400px] 
          rounded-full bg-gradient-to-br from-black to-purple-900 
          opacity-25 blur-3xl z-0 pointer-events-none" />
    </section>
  );
}
export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 text-center relative">
      <div className="mb-2">
        &copy; {new Date().getFullYear()} Jhanvi Patel. All rights reserved.
      </div>
      <div className="flex justify-center gap-6 text-lg mb-2">
        <a href="#home" className="hover:text-white">Home</a>
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#skills" className="hover:text-white">Skills</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
      <a href="#" title="Scroll to top" className="absolute right-4 bottom-4 text-purple-500 hover:text-white">
        <FaArrowUp size={20} />
      </a>
    </footer>
  );
}
