import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
    return (
        <div className="w-full flex-1 p-2 pb-10">
            <div className="max-w-4xl mx-auto w-full p-6 md:p-10 mt-6 bg-black/60 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-500/80 rounded-2xl relative shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] transition-all duration-500 flex flex-col lg:flex-row gap-10">
                {/* Left Side: Contact Form */}
                <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-mono text-cyan-400 mb-6 font-bold tracking-widest uppercase border-b border-cyan-500/20 pb-4">POST /api/connect</h3>
                    <form className="flex flex-col gap-5 font-mono text-sm">
                        <div className="flex flex-col gap-2 group">
                            <label className="text-cyan-300 text-xs uppercase tracking-widest group-hover:text-cyan-100 transition-colors">Client.Name</label>
                            <input type="text" placeholder="Enter string..." className="bg-black/50 border border-cyan-500/30 rounded-lg p-3 text-cyan-100 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all duration-300 placeholder-cyan-800 shadow-inner group-hover:border-cyan-500/80" />
                        </div>
                        <div className="flex flex-col gap-2 group">
                            <label className="text-cyan-300 text-xs uppercase tracking-widest group-hover:text-cyan-100 transition-colors">Client.Email</label>
                            <input type="email" placeholder="Enter valid format..." className="bg-black/50 border border-cyan-500/30 rounded-lg p-3 text-cyan-100 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all duration-300 placeholder-cyan-800 shadow-inner group-hover:border-cyan-500/80" />
                        </div>
                        <div className="flex flex-col gap-2 group">
                            <label className="text-cyan-300 text-xs uppercase tracking-widest group-hover:text-cyan-100 transition-colors">Client.Message</label>
                            <textarea placeholder="Write payload..." rows={4} className="bg-black/50 border border-cyan-500/30 rounded-lg p-3 text-cyan-100 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/80 transition-all duration-300 placeholder-cyan-800 resize-none shadow-inner group-hover:border-cyan-500/80"></textarea>
                        </div>
                        <button type="submit" className="mt-2 bg-gradient-to-r from-cyan-900 to-cyan-700 hover:from-cyan-600 hover:to-cyan-400 hover:-translate-y-1 hover:scale-[1.02] text-white p-3 rounded-lg tracking-widest uppercase font-bold transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transform border border-cyan-500 hover:border-white">
                            Execute Send()
                        </button>
                    </form>
                </div>

                {/* Right Side: Social Media Nodes */}
                <div className="flex-1 flex flex-col justify-center gap-6 relative z-10 pb-10">
                    <h3 className="text-xl font-mono text-cyan-400 mb-2 font-bold tracking-widest uppercase border-b border-cyan-500/20 pb-4 text-center lg:text-left">Network_Links</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a href="https://github.com/jhanvi857" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-black/60 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:bg-cyan-900/40 hover:border-cyan-500/80 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                            <FaGithub className="text-3xl text-cyan-500 group-hover:text-cyan-100 transition-colors duration-300" />
                            <div>
                                <h4 className="text-cyan-100 font-bold tracking-wider group-hover:text-white transition-colors duration-300">GitHub</h4>
                                <p className="text-xs text-cyan-600 font-mono group-hover:text-cyan-400 transition-colors duration-300">@jhanvi857</p>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/jhanvi-patel-0a032b35a/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-black/60 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:bg-cyan-900/40 hover:border-cyan-500/80 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                            <FaLinkedin className="text-3xl text-cyan-600 group-hover:text-cyan-100 transition-colors duration-300" />
                            <div>
                                <h4 className="text-cyan-100 font-bold tracking-wider group-hover:text-white transition-colors duration-300">LinkedIn</h4>
                                <p className="text-xs text-cyan-600 font-mono group-hover:text-cyan-400 transition-colors duration-300">jhanvi patel</p>
                            </div>
                        </a>
                        <a href="mailto:jhanvip8507@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-black/60 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:bg-cyan-900/40 hover:border-cyan-500/80 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                            <FaEnvelope className="text-3xl text-cyan-500 group-hover:text-cyan-100 transition-colors duration-300" />
                            <div>
                                <h4 className="text-cyan-100 font-bold tracking-wider group-hover:text-white transition-colors duration-300">Email</h4>
                                <p className="text-xs text-cyan-600 font-mono group-hover:text-cyan-400 transition-colors duration-300">jhanvip8507</p>
                            </div>
                        </a>
                        <a href="https://x.com/jhanvi_857" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-black/60 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:bg-cyan-900/40 hover:border-cyan-500/80 hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]">
                            <FaTwitter className="text-3xl text-cyan-500 group-hover:text-cyan-100 transition-colors duration-300" />
                            <div>
                                <h4 className="text-cyan-100 font-bold tracking-wider group-hover:text-white transition-colors duration-300">Twitter / X</h4>
                                <p className="text-xs text-cyan-600 font-mono group-hover:text-cyan-400 transition-colors duration-300">jhanvi_857</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
