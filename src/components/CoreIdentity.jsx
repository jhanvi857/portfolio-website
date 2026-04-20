import React from 'react';
import { motion } from 'framer-motion';

const CoreIdentity = () => {
    return (
        <div className="flex flex-col items-center justify-start p-4 lg:p-12 text-center max-w-5xl mx-auto w-full">
            <h2 className="text-2xl md:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 tracking-wide mb-6 group-hover/section:text-cyan-300 transition-colors">Jhanvi Patel</h2>

            <div className="w-full max-w-4xl text-cyan-100/90 leading-loose text-base md:text-lg font-mono mt-4 border-l-4 border-r-4 border-cyan-500/50 px-6 md:px-10 py-8 text-justify bg-black/60 backdrop-blur-md rounded-2xl shadow-xl shadow-cyan-900/20 hover:shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:border-cyan-500/80 hover:bg-black/80 transition-all duration-500 hover:-translate-y-1 group cursor-default">
                <p className="mb-4">
                    I’m an aspiring software engineer pursuing B.Tech in Computer Science (2024–2028) from Adani University, Gujarat.
                    I love solving complex problems with clean code and modern technologies like <span className="text-cyan-400 font-bold group-hover:text-cyan-200 transition-colors">React, Tailwind CSS, Node.js, and MongoDB</span>.
                    With a keen interest in <span className="text-cyan-400 font-bold group-hover:text-cyan-200 transition-colors">Data Structures & Algorithms.</span>
                </p>
            </div>

            <div className="w-full max-w-4xl mt-12 mb-4">
                <h3 className="text-2xl font-bold font-mono text-center text-cyan-400 mb-8 border-b border-cyan-500/30 pb-4 tracking-widest uppercase">Education</h3>
                <div className="bg-gradient-to-r from-cyan-900/20 to-transparent border border-cyan-800/50 p-6 rounded-lg text-left shadow-md backdrop-blur-sm hover:border-cyan-500/60 hover:bg-cyan-900/30 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500 hover:-translate-y-1 group cursor-default">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1">
                        <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-100 transition-colors">B.Tech in Computer Science (AI - ML)</h4>
                        <span className="text-sm font-mono text-cyan-300 font-bold tracking-widest mt-1 sm:mt-0">2024-2028</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <p className="text-sm font-mono text-cyan-400 tracking-wide group-hover:text-cyan-300 transition-colors">Adani University | Gujarat</p>
                        <span className="text-sm font-mono text-cyan-200 tracking-widest font-bold mt-1 sm:mt-0">CGPA : 8.89</span>
                    </div>
                </div>
            </div>

            {/* <div className="mt-8 flex flex-col sm:flex-row gap-6 pb-20">
                <a href="/Jhanvi_patel_resume.pdf" target="_blank" rel="noreferrer" className="bg-cyan-900/40 border border-cyan-500/50 text-cyan-100 hover:bg-cyan-800 hover:text-cyan-50 hover:-translate-y-1 hover:border-cyan-400 px-8 py-3 rounded uppercase tracking-widest font-bold transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.15)]">Download Resume</a>
                <button onClick={() => window.open('https://github.com/jhanvi857')} className="bg-cyan-900/40 border border-cyan-500/50 text-cyan-100 hover:bg-cyan-800 hover:text-cyan-50 hover:-translate-y-1 hover:border-cyan-400 px-8 py-3 rounded uppercase tracking-widest font-bold transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.15)]">GitHub Profile</button>
            </div> */}
        </div>
    );
};

export default CoreIdentity;
