import React from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import docstream from "../docstream.png";
import RouteOptimizerImg from "../RouteOpt.png";
import VisualBriefImg from "../VisualBrief.png";
import GitresolveImg from "../gitresolve.png";
import NioFlow from "../NioFlow.png";
import arbiter from "../arbiter.png";
import evora from "../evora.png";

const projects = [
    {
        id: 0,
        name: 'DocStream',
        complexity: 'Systems / CRDT',
        desc: 'DocStream is a highly scalable collaborative document editor backend built in Go, designed to synchronize concurrent edits in conflict-free real-time across multiple instances.',
        tags: ["Golang", "Concurrency", "Real-time", "CRDT"],
        codeLink: 'https://github.com/jhanvi857/docstream',
        demoLink: 'https://doc-stream-two.vercel.app/',
        image: docstream
    },
    {
        id: 1,
        name: 'gitresolve',
        complexity: 'Systems / Git',
        desc: 'A locally executed Git conflict resolver with syntax-aware classification, structured data merging, and decision audit logs, resolving conflicts deterministically.',
        tags: ["Golang", "Git", "GitHub", "Conflict Resolution"],
        codeLink: 'https://github.com/jhanvi857/gitresolve',
        demoLink: 'https://gitresolve.vercel.app/',
        image: GitresolveImg
    },
    {
        id: 2,
        name: 'NioFlow',
        complexity: 'Systems / HTTP',
        desc: 'A lightweight Java 17 HTTP micro-framework with explicit routing, middleware composition, and runtime controls designed to make HTTP internals explicit.',
        tags: ["Java", "HTTP", "Routing", "Middleware"],
        codeLink: 'https://github.com/jhanvi857/coreHTTP',
        demoLink: 'https://core-http.vercel.app/',
        image: NioFlow
    },
    {
        id: 3,
        name: 'Arbiter',
        complexity: 'Database / ML',
        desc: 'Machine Learning-assisted Database Query Optimizer estimating sqlite plan latency to suggest rewrites and optimize query execution pathing.',
        tags: ["Python", "SQLite", "Machine Learning", "Database"],
        codeLink: 'https://github.com/jhanvi857/Arbiter',
        demoLink: 'https://arbiter-neon-seven.vercel.app/',
        image: arbiter
    },
    {
        id: 4,
        name: 'Evora',
        complexity: 'Event sourcing / OMS',
        desc: 'A high-fidelity distributed Job Queue system demonstrating CQRS, Saga Orchestration, and Event Sourcing patterns on a unified high-performance runtime.',
        tags: ["Java", "CQRS", "Saga Orchestration", "Event Sourcing"],
        codeLink: 'https://github.com/jhanvi857/evora',
        demoLink: null,
        image: evora
    },
    // {
    //     id: 5,
    //     name: 'Route Optimizer',
    //     complexity: 'Full-Stack',
    //     desc: 'A web application calculating optimized route utilizing Dijkstra’s Algorithm and visualizing it dynamically on maps with Leaflet.',
    //     tags: ["React", "Node.js", "MongoDB", "Dijkstra"],
    //     codeLink: 'https://github.com/jhanvi857/route-optimizer',
    //     demoLink: 'https://route-optimizer-one.vercel.app/',
    //     image: RouteOptimizerImg
    // },
    {
        id: 6,
        name: 'VisualBrief',
        complexity: 'AI / NLP',
        desc: 'An AI-powered document analyzer transforming text to summary sheets and rendering flowcharts/concept maps via Mermaid.',
        tags: ["React", "Python", "SpaCy", "Mermaid.js"],
        codeLink: 'https://github.com/jhanvi857/VisualBrief',
        demoLink: 'https://visual-brief.vercel.app/',
        image: VisualBriefImg
    }
];

const ProjectsCards = () => (
    <div className="flex flex-col gap-12 lg:gap-16 p-4 lg:p-8 max-w-6xl mx-auto w-full">
        {projects.map((proj, i) => {
            const isEven = i % 2 === 0;
            return (
                <div
                    key={i}
                    className={`group relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center bg-burgundy-light/20 border border-gold/25 shadow-2xl p-6 lg:p-8 rounded-none hover:border-gold/50 transition-[box-shadow,transform] duration-500 hover:-translate-y-1 hover:shadow-lg reveal-element`}
                >
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-700"></div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative overflow-hidden rounded-none border border-gold/10 group-hover:border-gold/20 transition-colors shadow-sm shrink-0">
                        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                        <img src={proj.image} alt={proj.name} className="w-full h-44 sm:h-56 md:h-80 object-fill object-top transform group-hover:scale-[1.02] transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100" />
                        <div className="absolute top-4 right-4 z-20">
                            <span className="text-[10px] font-light text-burgundy-deep bg-cream px-3 py-1.5 border border-burgundy-deep/20 shadow-sm uppercase tracking-widest">
                                {proj.complexity}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col h-full flex-1">
                        <h4 className="text-2xl sm:text-3xl md:text-4xl font-light text-cream tracking-wide mb-4 group-hover:text-gold transition-colors mt-2 md:mt-0 editorial-title">
                            {proj.name}
                        </h4>

                        <div className="bg-burgundy-dark/20 border border-gold/10 p-4 md:p-5 rounded-none mb-4 md:mb-6 shadow-inner relative z-10 hover:border-gold/20 transition-colors">
                            <p className="text-sm md:text-base text-cream-soft leading-relaxed font-sans text-justify">
                                {proj.desc}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {proj.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs font-light text-gold border border-gold/15 bg-burgundy-dark/20 px-3 py-1 rounded-none whitespace-nowrap shadow-sm hover:border-gold/40 transition-all cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-auto">
                            {proj.demoLink && (
                                <a href={proj.demoLink} target="_blank" rel="noreferrer" className="flex-1 text-center text-xs uppercase tracking-widest font-light text-burgundy bg-gold hover:bg-gold-light hover:-translate-y-0.5 transition-all border border-gold/40 py-3.5 rounded-none flex items-center justify-center gap-2 shadow-sm hover:shadow-md magnetic-target">
                                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                                </a>
                            )}
                            {proj.codeLink && (
                                <a href={proj.codeLink} target="_blank" rel="noreferrer" className="flex-1 text-center text-xs uppercase tracking-widest font-light text-gold bg-transparent hover:bg-gold hover:text-burgundy hover:-translate-y-0.5 transition-all border border-gold/20 hover:border-gold py-3.5 rounded-none flex items-center justify-center gap-2 magnetic-target">
                                    <FaGithub /> GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
);

export default ProjectsCards;
