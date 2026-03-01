import React from 'react';
import { motion } from 'framer-motion';

const CoreIdentity = () => {
    return (
        <div className="flex flex-col items-center justify-start p-4 lg:p-12 text-center h-full overflow-y-auto max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 tracking-wide mb-6 group-hover:text-cyan-300 transition-colors">Jhanvi Patel</h2>

            <div className="w-full max-w-4xl text-cyan-100/90 leading-loose text-base md:text-lg font-mono mt-4 border-l-4 border-r-4 border-cyan-500/50 px-6 md:px-10 py-8 text-justify bg-black/60 backdrop-blur-md rounded-2xl shadow-xl shadow-cyan-900/20">
                <p className="mb-6">
                    I’m an aspiring software engineer pursuing B.Tech in Computer Science (2024–2028) from Adani University, Gujarat.
                </p>
                <p className="mb-6">
                    I love solving complex problems with clean code and modern technologies like <span className="text-cyan-400 font-bold">React, Tailwind CSS, Node.js, and MongoDB</span>.
                </p>
                <p>
                    With a keen interest in <span className="text-cyan-400 font-bold">Data Structures & Algorithms</span>, I build highly optimized, scalable architectures and constantly push my limits to write performant software. Welcome to my digital cortex.
                </p>
            </div>

            <div className="w-full max-w-4xl mt-12 mb-4">
                <h3 className="text-2xl font-bold font-mono text-center text-cyan-400 mb-8 border-b border-cyan-500/30 pb-4 tracking-widest uppercase">Education</h3>
                <div className="bg-gradient-to-r from-cyan-900/20 to-transparent border border-cyan-800/50 p-6 rounded-lg text-left shadow-md backdrop-blur-sm hover:border-cyan-500/50 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-1">B.Tech in Computer Science (AI - ML)</h4>
                    <p className="text-sm font-mono text-cyan-400 mb-4 tracking-wide">Adani University | 2024-2028 | Gujarat</p>
                    <p className="text-cyan-100/80 leading-relaxed font-mono text-sm md:text-base">
                        Currently developing strong foundations in Algorithms, AI-ML, and scalable web applications using the MERN stack.
                    </p>
                </div>
            </div>

            {/* <div className="mt-8 flex flex-col sm:flex-row gap-6 pb-20">
                <a href="/Jhanvi_patel_resume.pdf" target="_blank" rel="noreferrer" className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:scale-105 px-8 py-3 rounded uppercase tracking-widest font-bold transition-all shadow-[0_0_15px_rgba(0,255,255,0.2)]">Download Resume</a>
                <button onClick={() => window.open('https://github.com/jhanvi857')} className="bg-cyan-500/20 border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black hover:scale-105 px-8 py-3 rounded uppercase tracking-widest font-bold transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]">GitHub Profile</button>
            </div> */}
        </div>
    );
};

export default CoreIdentity;
