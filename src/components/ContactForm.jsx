import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
    return (
        <div className="w-full flex-1 p-2 pb-10">
            <div className="max-w-4xl mx-auto w-full p-6 md:p-10 mt-6 bg-burgundy-dark/45 border border-gold/15 hover:border-gold/30 rounded-none relative shadow-sm hover:shadow-md transition-all duration-500 flex flex-col lg:flex-row gap-10">
                {/* Left Side: Contact Form */}
                <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-light text-cream mb-6 tracking-widest uppercase border-b border-gold/10 pb-4 editorial-title">Send a Message</h3>
                    <form className="flex flex-col gap-5 font-sans text-sm">
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gold text-xs uppercase tracking-widest group-hover:text-gold-light transition-colors">Your Name</label>
                            <input type="text" placeholder="Enter name" className="bg-burgundy-dark/25 border border-gold/20 rounded-none p-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300 placeholder-gold/40 shadow-inner group-hover:border-gold/45" />
                        </div>
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gold text-xs uppercase tracking-widest group-hover:text-gold-light transition-colors">Email Address</label>
                            <input type="email" placeholder="Enter email" className="bg-burgundy-dark/25 border border-gold/20 rounded-none p-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300 placeholder-gold/40 shadow-inner group-hover:border-gold/45" />
                        </div>
                        <div className="flex flex-col gap-2 group">
                            <label className="text-gold text-xs uppercase tracking-widest group-hover:text-gold-light transition-colors">Message</label>
                            <textarea placeholder="Write message" rows={4} className="bg-burgundy-dark/25 border border-gold/20 rounded-none p-3 text-cream focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30 transition-all duration-300 placeholder-gold/40 resize-none shadow-inner group-hover:border-gold/45"></textarea>
                        </div>
                        <button type="submit" className="mt-2 bg-gold hover:bg-gold-light hover:-translate-y-0.5 text-burgundy p-3.5 rounded-none tracking-widest uppercase font-light transition-all duration-300 border border-gold cursor-pointer shadow-sm hover:shadow-md">
                            Submit Message
                        </button>
                    </form>
                </div>

                {/* Right Side: Social Media Nodes */}
                <div className="flex-1 flex flex-col justify-center gap-6 relative z-10 pb-10">
                    <h3 className="text-2xl font-light text-cream mb-2 tracking-widest uppercase border-b border-gold/10 pb-4 text-center lg:text-left editorial-title">Social Links</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a href="https://github.com/jhanvi857" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-none border border-gold/15 bg-burgundy-dark/20 hover:-translate-y-0.5 transition-all duration-300 hover:bg-burgundy-dark/40 hover:border-gold/40 hover:shadow-sm">
                            <FaGithub className="text-3xl text-gold group-hover:text-gold-light transition-colors duration-300" />
                            <div>
                                <h4 className="text-cream font-light tracking-wider transition-colors duration-300">GitHub</h4>
                                <p className="text-xs text-gold/60 font-sans group-hover:text-gold transition-colors duration-300">@jhanvi857</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/jhanvi-patel-0a032b35a/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-none border border-gold/15 bg-burgundy-dark/20 hover:-translate-y-0.5 transition-all duration-300 hover:bg-burgundy-dark/40 hover:border-gold/40 hover:shadow-sm">
                            <FaLinkedin className="text-3xl text-gold group-hover:text-gold-light transition-colors duration-300" />
                            <div>
                                <h4 className="text-cream font-light tracking-wider transition-colors duration-300">LinkedIn</h4>
                                <p className="text-xs text-gold/60 font-sans group-hover:text-gold transition-colors duration-300">Jhanvi Patel</p>
                            </div>
                        </a>
                        <a href="mailto:jhanvip8507@gmail.com" className="group flex items-center gap-4 p-4 rounded-none border border-gold/15 bg-burgundy-dark/20 hover:-translate-y-0.5 transition-all duration-300 hover:bg-burgundy-dark/40 hover:border-gold/40 hover:shadow-sm">
                            <FaEnvelope className="text-3xl text-gold group-hover:text-gold-light transition-colors duration-300" />
                            <div>
                                <h4 className="text-cream font-light tracking-wider transition-colors duration-300">Email</h4>
                                <p className="text-xs text-gold/60 font-sans group-hover:text-gold transition-colors duration-300">jhanvip8507</p>
                            </div>
                        </a>
                        <a href="https://x.com/jhanvi_857" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-none border border-gold/15 bg-burgundy-dark/20 hover:-translate-y-0.5 transition-all duration-300 hover:bg-burgundy-dark/40 hover:border-gold/40 hover:shadow-sm">
                            <FaTwitter className="text-3xl text-gold group-hover:text-gold-light transition-colors duration-300" />
                            <div>
                                <h4 className="text-cream font-light tracking-wider transition-colors duration-300">Twitter / X</h4>
                                <p className="text-xs text-gold/60 font-sans group-hover:text-gold transition-colors duration-300">jhanvi_857</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;

