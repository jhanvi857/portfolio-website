import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
    return (
        <div className="w-full h-full overflow-y-auto custom-scrollbar p-2 pb-24">
            <div className="max-w-4xl mx-auto w-full p-6 md:p-10 mt-6 bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl relative shadow-[0_0_30px_rgba(0,255,255,0.1)] flex flex-col lg:flex-row gap-10">
                {/* Left Side: Contact Form */}
                <div className="flex-1 relative z-10">
                    <h3 className="text-2xl font-mono text-cyan-400 mb-6 font-bold tracking-widest uppercase border-b border-cyan-500/20 pb-4">POST /api/connect</h3>
                    <form className="flex flex-col gap-5 font-mono text-sm">
                        <div className="flex flex-col gap-2">
                            <label className="text-cyan-300 text-xs uppercase tracking-widest">Client.Name</label>
                            <input type="text" placeholder="Enter string..." className="bg-black/50 border border-cyan-500/30 rounded-lg p-3 text-cyan-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-cyan-800 shadow-inner" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-cyan-300 text-xs uppercase tracking-widest">Client.Email</label>
                            <input type="email" placeholder="Enter valid format..." className="bg-black/50 border border-cyan-500/30 rounded-lg p-3 text-cyan-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-cyan-800 shadow-inner" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-cyan-300 text-xs uppercase tracking-widest">Client.Message</label>
                            <textarea placeholder="Write payload..." rows={4} className="bg-black/50 border border-cyan-500/30 rounded-lg p-3 text-cyan-100 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all placeholder-cyan-800 resize-none shadow-inner"></textarea>
                        </div>
                        <button type="submit" className="mt-2 bg-gradient-to-r from-cyan-600 to-cyan-600 hover:scale-[1.03] text-white p-3 rounded-lg tracking-widest uppercase font-bold transition-all shadow-[0_0_15px_rgba(0,255,255,0.4)] transform">
                            Execute Send()
                        </button>
                    </form>
                </div>

                {/* Right Side: Social Media Nodes */}
                <div className="flex-1 flex flex-col justify-center gap-6 relative z-10 pb-10">
                    <h3 className="text-xl font-mono text-cyan-400 mb-2 font-bold tracking-widest uppercase border-b border-cyan-500/20 pb-4 text-center lg:text-left">Network_Links</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <a href="https://github.com/jhanvi857" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-black/60 hover:scale-105 transition-all hover:bg-cyan-900/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                            <FaGithub className="text-3xl text-cyan-400" />
                            <div>
                                <h4 className="text-cyan-100 font-bold tracking-wider">GitHub</h4>
                                <p className="text-xs text-cyan-600 font-mono">@jhanvi857</p>
                            </div>
                        </a>
                        <a href="https://linkedin.com/in/jhanvi-patel-9602052ab/" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-black/60 hover:scale-105 transition-all hover:bg-cyan-900/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                            <FaLinkedin className="text-3xl text-cyan-500" />
                            <div>
                                <h4 className="text-cyan-100 font-bold tracking-wider">LinkedIn</h4>
                                <p className="text-xs text-cyan-600 font-mono">Connect</p>
                            </div>
                        </a>
                        <a href="mailto:jhanvip8507@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-black/60 hover:scale-105 transition-all hover:bg-cyan-900/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                            <FaEnvelope className="text-3xl text-cyan-400" />
                            <div>
                                <h4 className="text-cyan-100 font-bold tracking-wider">Email</h4>
                                <p className="text-xs text-cyan-600 font-mono">jhanvip8507</p>
                            </div>
                        </a>
                        <a href="https://x.com/your-twitter" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-xl border border-cyan-500/30 bg-black/60 hover:scale-105 transition-all hover:bg-cyan-900/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]">
                            <FaTwitter className="text-3xl text-cyan-400" />
                            <div>
                                <h4 className="text-cyan-100 font-bold tracking-wider">Twitter / X</h4>
                                <p className="text-xs text-cyan-600 font-mono">Follow updates</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
