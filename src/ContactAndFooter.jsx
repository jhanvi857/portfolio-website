import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-black relative text-white overflow-hidden">

      {/* Background blobs */}
      {/* <div className="absolute -top-10 -left-40 w-[300px] h-[300px] bg-purple-700 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -top-10 -right-0 w-[300px] h-[300px] bg-purple-700 opacity-20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full pointer-events-none"></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">
          Let's Connect
        </h2>

        <p className="text-gray-300 mb-8">
          I’m open to internship opportunities, collaboration on exciting projects, or just a chat about DSA and web development.
        </p>

        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="mailto:jhanvip8507@gmail.com"
            className="hover:text-purple-400"
            title="Email"
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/jhanvi857"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jhanvi-patel-0a032b35a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
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
        <Link to="/" className="hover:text-white">Home</Link>
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/#projects" className="hover:text-white">Projects</Link>
        <Link to="/#skills" className="hover:text-white">Skills</Link>
        <Link to="/#contact" className="hover:text-white">Contact</Link>
      </div>
      <a href="#" title="Scroll to top" className="absolute right-4 bottom-4 text-purple-500 hover:text-white">
        <FaArrowUp size={20} />
      </a>
    </footer>
  );
}
