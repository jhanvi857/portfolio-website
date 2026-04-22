import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import DataPacketsBackground from './components/DataPacketsBackground';
import NetworkGraph from './components/NetworkGraph';
import Loader from './components/Loader';
import ProjectsCards from './components/ProjectsCards';
import SkillsTree from './components/SkillsTree';
import DSAVisualizer from './components/DSAVisualizer';
import CoreIdentity from './components/CoreIdentity';
import ContactForm from './components/ContactForm';
import ExperienceWorkshops from './components/ExperienceWorkshops';

const AlgorithmUniverse = () => {
    const [loading, setLoading] = useState(true);
    const [hoveredNode, setHoveredNode] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const activeSection = location.pathname.split('/')[1] || null;

    const scrollToSection = (id) => {
        if (id) {
            navigate(`/${id}`);
        } else {
            navigate('/');
            setHoveredNode(null);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative w-full bg-[#020008] text-cyan-100 font-sans tracking-wide min-h-screen">
            <AnimatePresence>
                {loading && <Loader onComplete={() => setLoading(false)} />}
            </AnimatePresence>

            {/* Static background for the entire page */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <DataPacketsBackground />
            </div>

            {/* Navbar Layer */}
            <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-cyan-500/20 shadow-md flex items-center justify-between px-6 py-4 transition-all duration-300">
                <div
                    className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500 cursor-pointer"
                    onClick={() => scrollToSection(null)}
                >
                    Jhanvi
                </div>

                <div className="hidden md:flex space-x-6 text-cyan-100 text-lg font-mono">
                    <button className="hover:text-cyan-400 transition-colors" onClick={() => scrollToSection(null)}>Home</button>
                    <button className="hover:text-cyan-400 transition-colors" onClick={() => scrollToSection('core')}>About</button>
                    <button className="hover:text-cyan-400 transition-colors" onClick={() => scrollToSection('skills')}>Skills</button>
                    <button className="hover:text-cyan-400 transition-colors" onClick={() => scrollToSection('experience')}>Experience</button>
                    <button className="hover:text-cyan-400 transition-colors" onClick={() => scrollToSection('dsa')}>Achievements</button>
                    <button className="hover:text-cyan-400 transition-colors" onClick={() => scrollToSection('projects')}>Projects</button>
                    <button className="hover:text-cyan-400 transition-colors" onClick={() => scrollToSection('contact')}>Contact</button>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="/Jhanvi_patel_SWE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-block border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/40 px-4 py-2 rounded-md transition-all font-mono text-md font-bold shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                    >
                        Resume
                    </a>
                </div>
            </nav>

            {/* Hero / Main Graph Interface */}
            {!activeSection && (
                <section id="home" className="relative z-10 w-full h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
                    <NetworkGraph
                        onNodeClick={(id) => scrollToSection(id)}
                        onNodeHover={(id) => setHoveredNode(id)}
                        hoveredNode={hoveredNode}
                    />
                </section>
            )}

            {/* <InfoMarquee /> */}

            {/* Content Sections */}
            {activeSection && (
                <div className="relative z-10 w-full bg-gradient-to-b from-transparent via-black/90 to-black flex flex-col items-center pb-20 min-h-screen">

                    {activeSection === 'core' && (
                        <section id="core" className="w-full max-w-7xl mx-auto pt-28 pb-10 px-4 group/section">
                            <div className="flex justify-between items-center mb-6 bg-black/40 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-900/20 w-full group-hover/section:border-cyan-500/80 group-hover/section:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover/section:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#00ffff] group-hover/section:bg-cyan-200 group-hover/section:shadow-[0_0_10px_#00ffff] transition-all duration-300 animate-pulse"></div>
                                    <h2 className="text-sm md:text-xl font-mono font-bold text-cyan-200 group-hover/section:text-cyan-50 tracking-widest uppercase transition-colors duration-300">CORE_IDENTITY</h2>
                                </div>
                                <button
                                    onClick={() => scrollToSection(null)}
                                    className="text-[10px] sm:text-xs md:text-sm shrink-0 whitespace-nowrap font-mono border-2 border-red-500/60 text-red-400 hover:text-red-300 hover:scale-105 px-3 py-1.5 md:px-6 md:py-2.5 rounded-lg transition-all font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)] cursor-pointer"
                                >
                                    [ TERM_EXIT ]
                                </button>
                            </div>
                            <CoreIdentity />
                        </section>
                    )}

                    {activeSection === 'skills' && (
                        <section id="skills" className="w-full max-w-7xl mx-auto pt-28 pb-10 px-4 border-t border-cyan-900/30 group/section">
                            <div className="flex justify-between items-center mb-6 bg-black/40 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-900/20 w-full group-hover/section:border-cyan-500/80 group-hover/section:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover/section:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#00ffff] group-hover/section:bg-cyan-200 group-hover/section:shadow-[0_0_10px_#00ffff] transition-all duration-300 animate-pulse"></div>
                                    <h2 className="text-sm md:text-xl font-mono font-bold text-cyan-200 group-hover/section:text-cyan-50 tracking-widest uppercase transition-colors duration-300">TECH_DEPENDENCIES</h2>
                                </div>
                                <button
                                    onClick={() => scrollToSection(null)}
                                    className="text-[10px] sm:text-xs md:text-sm shrink-0 whitespace-nowrap font-mono border-2 border-red-500/60 text-red-400 hover:text-red-300 hover:scale-105 px-3 py-1.5 md:px-6 md:py-2.5 rounded-lg transition-all font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)] cursor-pointer"
                                >
                                    [ TERM_EXIT ]
                                </button>
                            </div>
                            <SkillsTree />
                        </section>
                    )}

                    {activeSection === 'dsa' && (
                        <section id="dsa" className="w-full max-w-7xl mx-auto pt-28 pb-10 px-4 border-t border-cyan-900/30 group/section">
                            <div className="flex justify-between items-center mb-6 bg-black/40 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-900/20 w-full group-hover/section:border-cyan-500/80 group-hover/section:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover/section:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#00ffff] group-hover/section:bg-cyan-200 group-hover/section:shadow-[0_0_10px_#00ffff] transition-all duration-300 animate-pulse"></div>
                                    <h2 className="text-sm md:text-xl font-mono font-bold text-cyan-200 group-hover/section:text-cyan-50 tracking-widest uppercase transition-colors duration-300">COMPLEXITY_VISUALIZATION</h2>
                                </div>
                                <button
                                    onClick={() => scrollToSection(null)}
                                    className="text-[10px] sm:text-xs md:text-sm shrink-0 whitespace-nowrap font-mono border-2 border-red-500/60 text-red-400 hover:text-red-300 hover:scale-105 px-3 py-1.5 md:px-6 md:py-2.5 rounded-lg transition-all font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)] cursor-pointer"
                                >
                                    [ TERM_EXIT ]
                                </button>
                            </div>
                            <DSAVisualizer />
                        </section>
                    )}

                    {activeSection === 'projects' && (
                        <section id="projects" className="w-full max-w-7xl mx-auto pt-28 pb-10 px-4 border-t border-cyan-900/30 group/section">
                            <div className="flex justify-between items-center mb-6 bg-black/40 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-900/20 w-full group-hover/section:border-cyan-500/80 group-hover/section:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover/section:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#00ffff] group-hover/section:bg-cyan-200 group-hover/section:shadow-[0_0_10px_#00ffff] transition-all duration-300 animate-pulse"></div>
                                    <h2 className="text-sm md:text-xl font-mono font-bold text-cyan-200 group-hover/section:text-cyan-50 tracking-widest uppercase transition-colors duration-300">ALGORITHM_MODULES</h2>
                                </div>
                                <button
                                    onClick={() => scrollToSection(null)}
                                    className="text-[10px] sm:text-xs md:text-sm shrink-0 whitespace-nowrap font-mono border-2 border-red-500/60 text-red-400 hover:text-red-300 hover:scale-105 px-3 py-1.5 md:px-6 md:py-2.5 rounded-lg transition-all font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)] cursor-pointer"
                                >
                                    [ TERM_EXIT ]
                                </button>
                            </div>
                            <ProjectsCards />
                        </section>
                    )}

                    {activeSection === 'experience' && (
                        <section id="experience" className="w-full max-w-7xl mx-auto pt-28 pb-10 px-4 border-t border-cyan-900/30 group/section">
                            <div className="flex justify-between items-center mb-6 bg-black/40 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-900/20 w-full group-hover/section:border-cyan-500/80 group-hover/section:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover/section:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#00ffff] group-hover/section:bg-cyan-200 group-hover/section:shadow-[0_0_10px_#00ffff] transition-all duration-300 animate-pulse"></div>
                                    <h2 className="text-sm md:text-xl font-mono font-bold text-cyan-200 group-hover/section:text-cyan-50 tracking-widest uppercase transition-colors duration-300">EXPERIENCE_LOG</h2>
                                </div>
                                <button
                                    onClick={() => scrollToSection(null)}
                                    className="text-[10px] sm:text-xs md:text-sm shrink-0 whitespace-nowrap font-mono border-2 border-red-500/60 text-red-400 hover:text-red-300 hover:scale-105 px-3 py-1.5 md:px-6 md:py-2.5 rounded-lg transition-all font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)] cursor-pointer"
                                >
                                    [ TERM_EXIT ]
                                </button>
                            </div>
                            <ExperienceWorkshops />
                        </section>
                    )}

                    {activeSection === 'contact' && (
                        <section id="contact" className="w-full max-w-7xl mx-auto pt-28 pb-10 px-4 border-t border-cyan-900/30 group/section">
                            <div className="flex justify-between items-center mb-6 bg-black/40 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-900/20 w-full group-hover/section:border-cyan-500/80 group-hover/section:shadow-[0_0_15px_rgba(0,255,255,0.15)] transition-all duration-500 group-hover/section:-translate-y-1">
                                <div className="flex items-center gap-4">
                                    <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#00ffff] group-hover/section:bg-cyan-200 group-hover/section:shadow-[0_0_10px_#00ffff] transition-all duration-300 animate-pulse"></div>
                                    <h2 className="text-sm md:text-xl font-mono font-bold text-cyan-200 group-hover/section:text-cyan-50 tracking-widest uppercase transition-colors duration-300">ESTABLISH_CONNECTION</h2>
                                </div>
                                <button
                                    onClick={() => scrollToSection(null)}
                                    className="text-[10px] sm:text-xs md:text-sm shrink-0 whitespace-nowrap font-mono border-2 border-red-500/60 text-red-400 hover:text-red-300 hover:scale-105 px-3 py-1.5 md:px-6 md:py-2.5 rounded-lg transition-all font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)] cursor-pointer"
                                >
                                    [ TERM_EXIT ]
                                </button>
                            </div>
                            <ContactForm />
                        </section>
                    )}
                </div>
            )}

            {/* Info Hud */}
            <div className="fixed bottom-6 left-6 text-xs font-mono text-cyan-500/50 pointer-events-none hidden md:block z-40">
                <p>GRAVITY: 0.0g</p>
                <p>NODE_MODE: SCROLLABLE</p>
                <p>INIT_SEQ: COMPLETE</p>
            </div>

            {/* Footer Layer */}
            <footer className="relative w-full py-6 bg-black/60 backdrop-blur-md border-t border-cyan-500/10 text-center z-20">
                <p className="text-cyan-500/50 text-xs font-mono tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} Jhanvi Patel. Crafted with <span className="text-cyan-400">Algorithms</span>.
                </p>
            </footer>
        </div>
    );
};

export default AlgorithmUniverse;

