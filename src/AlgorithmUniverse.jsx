import React, { useState, useRef } from 'react';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import DataPacketsBackground from './components/DataPacketsBackground';
import NetworkGraph from './components/NetworkGraph';
import ActiveNodeContent from './components/ActiveNodeContent';
import Loader from './components/Loader';


const scrollContentMap = {
    'core': { title: 'Core Identity', desc: 'Full-stack developer with a passion for algorithms and scalable web apps.', action: 'Know More', actionColor: 'text-white' },
    'projects': { title: 'Projects', desc: 'Route Optimizer, DSA Visualizer, CryptoTrace, and more.', action: 'Explore Projects', actionColor: 'text-white' },
    'skills': { title: 'Skills', desc: 'React, Node.js, MongoDB, Java, Python, and System Design.', action: 'View Tech Stack', actionColor: 'text-white' },
    'experience': { title: 'Experience', desc: 'Workshops, Mentorships, and tech events.', action: 'View Experience', actionColor: 'text-white' },
    'dsa': { title: 'Achievements', desc: '500+ LeetCode problems, Codeforces Specialist, and competitive programming.', action: 'View Journey', actionColor: 'text-white' },
    'contact': { title: 'Contact', desc: 'Let\'s connect and build something amazing together.', action: 'Let\'s Connect', actionColor: 'text-white' }
};

const AlgorithmUniverse = () => {
    const [loading, setLoading] = useState(true);
    const [activeNode, setActiveNode] = useState(null); // For the full, giant overlay
    const [scrollNode, setScrollNode] = useState(null); // For the minimal scroll indicator
    const [hoveredNode, setHoveredNode] = useState(null);

    // Scroll driven setup
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const nodesSequence = ['home', 'core', 'projects', 'skills', 'experience', 'dsa', 'contact'];

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Only trigger scroll updates if no modal is active
        if (activeNode) return;

        const threshold = 1 / nodesSequence.length;
        const index = Math.min(Math.floor(latest / threshold), nodesSequence.length - 1);
        const nextNode = nodesSequence[index];

        const nodeToSet = nextNode === 'home' ? null : nextNode;
        if (scrollNode !== nodeToSet) {
            setScrollNode(nodeToSet);
            setHoveredNode(nodeToSet);
        }
    });

    // Handle clicks from navigation or graph directly without scrolling viewport
    const openFullNode = (id) => {
        setActiveNode(id);
    };

    return (
        <div ref={containerRef} className="relative w-full h-[700vh] bg-[#020008]">
            <div className="sticky top-0 w-screen h-screen overflow-hidden text-cyan-100 font-sans tracking-wide">
                <AnimatePresence>
                    {loading && <Loader onComplete={() => setLoading(false)} />}
                </AnimatePresence>

                <DataPacketsBackground />

                {/* Navbar Layer */}
                <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-cyan-500/20 shadow-md flex items-center justify-between px-6 py-4 pointer-events-auto transition-all duration-300">
                    <div
                        className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500 cursor-pointer"
                        onClick={() => openFullNode(null)}
                    >
                        Jhanvi
                    </div>

                    <div className="hidden md:flex space-x-6 text-cyan-100 text-lg font-mono">
                        <button className="hover:text-cyan-400 transition-colors" onClick={() => openFullNode(null)}>Home</button>
                        <button className="hover:text-cyan-400 transition-colors" onClick={() => openFullNode('core')}>About</button>
                        <button className="hover:text-cyan-400 transition-colors" onClick={() => openFullNode('skills')}>Skills</button>
                        <button className="hover:text-cyan-400 transition-colors" onClick={() => openFullNode('experience')}>Experience</button>
                        <button className="hover:text-cyan-400 transition-colors" onClick={() => openFullNode('dsa')}>Achievements</button>
                        <button className="hover:text-cyan-400 transition-colors" onClick={() => openFullNode('projects')}>Projects</button>
                        <button className="hover:text-cyan-400 transition-colors" onClick={() => openFullNode('contact')}>Contact</button>
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href="/Jhanvi_patel_resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:inline-block border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/40 px-4 py-2 rounded-md transition-all font-mono text-md font-bold shadow-[0_0_10px_rgba(168,85,247,0.2)]"
                        >
                            Resume
                        </a>
                    </div>
                </nav>

                {/* Main Graph Interface */}
                <div className={`absolute inset-0 transition-all duration-500 ${loading ? 'opacity-0 scale-95 pointer-events-none' : activeNode ? 'scale-[1.03] pointer-events-none opacity-40 blur-[2px]' : scrollNode ? 'scale-[0.98] pb-40 md:pb-0 md:mr-80 opacity-90' : 'scale-100 opacity-100'}`}>
                    <NetworkGraph
                        onNodeClick={(id) => openFullNode(id)}
                        onNodeHover={(id) => setHoveredNode(id)}
                        hoveredNode={activeNode ? null : hoveredNode}
                    />
                </div>

                {/* Minimal Scroll Overlay */}
                <AnimatePresence>
                    {scrollNode && !activeNode && !loading && (
                        <motion.div
                            key={scrollNode}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-6 lg:right-16 top-auto bottom-20 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-[90vw] md:w-auto md:max-w-sm bg-black/80 backdrop-blur-xl border border-cyan-500/40 p-6 md:p-8 rounded-2xl shadow-[0_0_40px_rgba(0,255,255,0.15)] z-30 pointer-events-auto"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 font-mono mb-4 uppercase tracking-wider">{scrollContentMap[scrollNode].title}</h3>
                            <p className="text-base text-cyan-100/90 font-mono mb-8 leading-relaxed">
                                {scrollContentMap[scrollNode].desc}
                            </p>
                            <button
                                onClick={() => openFullNode(scrollNode)}
                                className={`w-full bg-cyan-950/80 border-2 border-cyan-500 ${scrollContentMap[scrollNode].actionColor || 'text-cyan-300'} hover:bg-cyan-400 hover:text-white hover:scale-[1.02] transition-all px-6 py-4 rounded-lg uppercase tracking-widest font-bold shadow-[0_0_20px_rgba(0,255,255,0.2)]`}
                            >
                                {scrollContentMap[scrollNode].action}
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Scroll Helper Indicator */}
                <AnimatePresence>
                    {!loading && !activeNode && !scrollNode && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                            className="absolute top-[90%] left-1/2 transform -translate-x-1/2 flex flex-col items-center text-cyan-500/70 pointer-events-none"
                        >
                            <span className="text-lg text-cyan-400 font-bold font-mono mb-2 uppercase tracking-widest drop-shadow-md">Scroll to Explore</span>
                            <div className="w-[1px] h-10 bg-gradient-to-b from-cyan-500 to-transparent"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Deep Dive Content Container (Full Size) */}
                {activeNode && (
                    <ActiveNodeContent
                        activeNode={activeNode}
                        onClose={() => setActiveNode(null)}
                    />
                )}

                {/* Info Hud */}
                <div className={`absolute bottom-6 left-6 text-xs font-mono text-cyan-500/50 pointer-events-none hidden md:block transition-opacity duration-500 ${activeNode ? 'opacity-0' : 'opacity-100'}`}>
                    <p>GRAVITY: 0.0g</p>
                    <p>NODE_MODE: INTERACTIVE & SCROLL</p>
                    <p>INIT_SEQ: COMPLETE</p>
                </div>

                {/* Footer Layer */}
                <footer className="absolute bottom-0 left-0 w-full py-3 bg-black/60 backdrop-blur-md border-t border-cyan-500/10 text-center z-20 pointer-events-auto">
                    <p className="text-cyan-500/50 text-xs font-mono tracking-widest uppercase">
                        &copy; {new Date().getFullYear()} Jhanvi Patel. Crafted with <span className="text-cyan-400">Algorithms</span>.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default AlgorithmUniverse;
