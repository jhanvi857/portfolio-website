import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaArrowRight } from "react-icons/fa";
import docstream from "../docstream.png";
import VisualBriefImg from "../VisualBrief.png";
import GitresolveImg from "../gitresolve.png";
import NioFlow from "../NioFlow.png";
import arbiter from "../arbiter.png";
import evora from "../evora.png";

const projects = [
    {
        id: 0,
        index: "04.1",
        name: 'DocStream',
        complexity: 'Systems / CRDT',
        desc: 'DocStream is a highly scalable collaborative document editor backend built in Go, designed to synchronize concurrent edits in conflict-free real-time across multiple instances.',
        tags: ["Golang", "Concurrency", "Real-time", "CRDT"],
        codeLink: 'https://github.com/jhanvi857/docstream',
        demoLink: 'https://doc-stream-two.vercel.app/',
        image: docstream,
        aspect: '1918/908'
    },
    {
        id: 1,
        index: "04.2",
        name: 'gitresolve',
        complexity: 'Systems / Git',
        desc: 'A locally executed Git conflict resolver with syntax-aware classification, structured data merging, and decision audit logs, resolving conflicts deterministically.',
        tags: ["Golang", "Git", "GitHub", "Conflict Resolution"],
        codeLink: 'https://github.com/jhanvi857/gitresolve',
        demoLink: 'https://gitresolve.vercel.app/',
        image: GitresolveImg,
        aspect: '1918/907'
    },
    {
        id: 2,
        index: "04.3",
        name: 'NioFlow',
        complexity: 'Systems / HTTP',
        desc: 'A lightweight Java 17 HTTP micro-framework with explicit routing, middleware composition, and runtime controls designed to make HTTP internals explicit.',
        tags: ["Java", "HTTP", "Routing", "Middleware"],
        codeLink: 'https://github.com/jhanvi857/coreHTTP',
        demoLink: 'https://core-http.vercel.app/',
        image: NioFlow,
        aspect: '1918/910'
    },
    {
        id: 3,
        index: "04.4",
        name: 'Arbiter',
        complexity: 'Database / ML',
        desc: 'Machine Learning-assisted Database Query Optimizer estimating sqlite plan latency to suggest rewrites and optimize query execution pathing.',
        tags: ["Python", "SQLite", "Machine Learning", "Database"],
        codeLink: 'https://github.com/jhanvi857/Arbiter',
        demoLink: 'https://arbiter-neon-seven.vercel.app/',
        image: arbiter,
        aspect: '1918/911'
    },
    {
        id: 4,
        index: "04.5",
        name: 'Evora',
        complexity: 'Event Sourcing / OMS',
        desc: 'A high-fidelity distributed Job Queue system demonstrating CQRS, Saga Orchestration, and Event Sourcing patterns on a unified high-performance runtime.',
        tags: ["Java", "CQRS", "Saga Orchestration", "Event Sourcing"],
        codeLink: 'https://github.com/jhanvi857/evora',
        demoLink: null,
        image: evora,
        aspect: '1160/619'
    },
    {
        id: 5,
        index: "04.6",
        name: 'VisualBrief',
        complexity: 'AI / NLP',
        desc: 'An AI-powered document analyzer transforming text to summary sheets and rendering flowcharts/concept maps via Mermaid.',
        tags: ["React", "Python", "SpaCy", "Mermaid.js"],
        codeLink: 'https://github.com/jhanvi857/VisualBrief',
        demoLink: 'https://visual-brief.vercel.app/',
        image: VisualBriefImg,
        aspect: '1906/908'
    }
];

const ProjectsCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto w-full p-4 lg:p-8 min-h-[600px]">
            
            {/* LEFT SIDEBAR: Editorial Navigation Menu */}
            <div className="w-full lg:w-1/3 flex flex-col border-b lg:border-b-0 lg:border-r border-gold/20 pb-8 lg:pb-0 lg:pr-8 justify-between">
                <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-gold/60 font-mono">Selected Computations</span>
                    <h3 className="text-4xl font-light text-cream editorial-title mb-8">Architectures</h3>
                </div>

                {/* Vertical Text Index Links */}
                <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2 lg:gap-4 py-2 scrollbar-none">
                    {projects.map((proj, idx) => (
                        <button
                            key={proj.id}
                            onClick={() => setActiveIndex(idx)}
                            className={`flex items-center gap-4 text-left font-mono whitespace-nowrap transition-all duration-300 group py-2 px-3 lg:px-0 ${
                                activeIndex === idx 
                                ? 'text-gold pl-0 lg:pl-4 border-b-2 lg:border-b-0 lg:border-l-2 border-gold bg-burgundy-light/10 lg:bg-transparent' 
                                : 'text-cream-soft/50 hover:text-cream hover:translate-x-1'
                            }`}
                        >
                            <span className="text-[11px] font-light">{proj.index}</span>
                            <span className="text-sm font-sans tracking-wide uppercase font-light hidden sm:inline">{proj.name}</span>
                            {activeIndex === idx && <FaArrowRight className="text-xs ml-auto text-gold hidden lg:block animate-pulse" />}
                        </button>
                    ))}
                </div>

                <div className="hidden lg:block pt-8 text-[11px] font-mono text-cream-soft/30 leading-relaxed">
                    // Click through systemic structures <br />
                    // to review memory layouts and execution paths.
                </div>
            </div>

            {/* RIGHT SIDE: Dynamic Asymmetric Magazine Viewframe */}
            <div className="w-full lg:w-2/3 flex flex-col justify-between relative animate-fadeIn">
                
                {/* Active Frame Wrapper */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* Visual Segment (Spans 7 Cols) */}
                    <div className="md:col-span-7 relative group border border-gold/20 p-2 bg-burgundy-dark/40 shadow-2xl">
                        <div className="absolute top-4 left-4 z-20">
                            <span className="text-[10px] font-mono text-cream bg-burgundy-deep border border-gold/30 px-2.5 py-1 uppercase tracking-widest">
                                {projects[activeIndex].complexity}
                            </span>
                        </div>
                        <div 
                            className="w-full overflow-hidden bg-burgundy-deep/40 transition-all duration-300"
                            style={{ aspectRatio: projects[activeIndex].aspect || '16/9' }}
                        >
                            <img 
                                src={projects[activeIndex].image} 
                                alt={projects[activeIndex].name} 
                                className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105"
                            />
                        </div>
                        {/* Frame Decorative Corners */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-gold"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-gold"></div>
                    </div>

                    {/* Meta/Description Segment (Spans 5 Cols) */}
                    <div className="md:col-span-5 flex flex-col justify-between space-y-6">
                        <div>
                            <span className="text-[10px] font-mono text-gold/60 block mb-1">
                                {projects[activeIndex].index} // CONFIGURATION
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-light text-cream tracking-wide mb-4 editorial-title">
                                {projects[activeIndex].name}
                            </h2>
                            <div className="border-l-2 border-gold/30 pl-4 py-1">
                                <p className="text-sm text-cream-soft leading-relaxed text-justify font-sans">
                                    {projects[activeIndex].desc}
                                </p>
                            </div>
                        </div>

                        {/* Tech Specs Block */}
                        <div>
                            <span className="text-[10px] font-mono text-gold/40 block mb-2 uppercase tracking-widest">Dependencies</span>
                            <div className="flex flex-wrap gap-1.5">
                                {projects[activeIndex].tags.map((tag, idx) => (
                                    <span key={idx} className="text-[10px] font-mono text-gold border border-gold/15 bg-burgundy-light/10 px-2.5 py-0.5 tracking-tight">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Action Tray */}
                <div className="flex flex-col sm:flex-row gap-4 border-t border-gold/10 pt-6 mt-8">
                    {projects[activeIndex].demoLink && (
                        <a 
                            href={projects[activeIndex].demoLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex-1 text-center text-xs uppercase tracking-widest font-light text-burgundy bg-gold hover:bg-gold-light transition-all py-3.5 flex items-center justify-center gap-2 font-mono shadow-md"
                        >
                            <FaExternalLinkAlt className="text-[10px]" /> Live
                        </a>
                    )}
                    {projects[activeIndex].codeLink && (
                        <a 
                            href={projects[activeIndex].codeLink} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex-1 text-center text-xs uppercase tracking-widest font-light text-gold bg-transparent hover:bg-gold/10 transition-all border border-gold/30 py-3.5 flex items-center justify-center gap-2 font-mono"
                        >
                            <FaGithub /> Source code
                        </a>
                    )}
                </div>

            </div>
        </div>
    );
};

export default ProjectsCards;