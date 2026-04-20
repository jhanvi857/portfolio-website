import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import DSAVisualizerImg from "../DSAVisualizer.png";
import RouteOptimizerImg from "../RouteOpt.png";
import VisualBriefImg from "../VisualBrief.png";
import CryptoTraceImg from "../cryptoTrace.png";
import GitresolveImg from "../gitresolve.png";
import NioFlow from "../NioFlow.png";
import evora from "../evora.png";
const projects = [
    {
        id: 0,
        name: 'gitresolve',
        complexity: 'Systems/Git',
        desc: 'A locally executed, safety-first Git merge conflict resolver with syntax-aware classification, structured data merging, and full decision auditability. Standard Git merge operations perform line-based text integration. gitresolve classifies conflicts into deterministic categories, applies targeted resolution strategies per conflict type, and escalates to manual review when automated resolution would be unsafe. Every decision is logged, queryable, and CI-gateable.',
        shortDesc: 'Safety-first local Git merge conflict resolver with deterministic strategies and full decision audit logs.',
        tags: ["Golang", "Concurrency", "Git", "GitHub", "Conflict Resolution"],
        codeLink: 'https://github.com/jhanvi857/gitresolve',
        demoLink: 'https://gitresolve.vercel.app/',
        image: GitresolveImg
    },
    {
        id: 1,
        name: 'NioFlow',
        complexity: 'Systems/HTTP',
        desc: 'A lightweight Java 17 HTTP micro-framework with explicit routing, middleware composition, and production-focused runtime controls. NioFlow is designed around one principle: make HTTP internals understandable without sacrificing production behavior. Instead of hiding complexity behind annotations and reflection-heavy bootstrapping, NioFlow keeps transport, parsing, routing, middleware, and error handling explicit and testable.',
        shortDesc: 'A lightweight Java 17 HTTP micro-framework with explicit routing, middleware composition, and production-focused runtime controls.',
        tags: ["Java", "HTTP", "Micro-framework", "Routing", "Middleware"],
        codeLink: 'https://github.com/jhanvi857/coreHTTP',
        demoLink: 'https://core-http.vercel.app/',
        image: NioFlow

    },
    {
        id: 2,
        name: 'Evora',
        complexity: 'Event sourcing/OMS',
        desc: 'a high-fidelity, event-sourced Order Management System (OMS) built on the NioFlow micro-framework. It demonstrates advanced distributed systems patterns including CQRS, Saga Orchestration, Event Sourcing, and Idempotent Command Handling within a unified, high-performance runtime.',
        shortDesc: 'A high-fidelity, event-sourced Order Management System built on the NioFlow micro-framework.',
        tags: ["Java", "Event Sourcing", "CQRS", "Saga Orchestration", "Idempotent Commands"],
        codeLink: 'https://github.com/jhanvi857/evora',
        demoLink: null,
        image: evora

    },
    {
        id: 2,
        name: 'Route Optimizer',
        complexity: 'Full-Stack',
        desc: 'A full-stack web application that calculates the most optimized route using Dijkstra’s Algorithm and visualizes it beautifully on an interactive map with Leaflet.js. Built with React.js, Tailwind CSS, Node.js, Express.js, and OpenRouteService, this project combines Data Structures & Algorithms with modern web development practices.',
        shortDesc: 'A web app utilizing Dijkstra\'s Algorithm to calculate and visualize optimized routes on an interactive map.',
        tags: ["React", "Node.js", "Express.js", "MongoDB", "OpenRoute API", "Dijkstra"],
        codeLink: 'https://github.com/jhanvi857/route-optimizer',
        demoLink: 'https://route-optimizer-one.vercel.app/',
        image: RouteOptimizerImg
    },
    // {
    //     id: 3,
    //     name: 'DSA Visualizer',
    //     complexity: 'Full-Stack',
    //     desc: "An interactive tool to visualize data structures like arrays, strings, Linked list, trees, graphs, maps & sets, algorithms like sorting, graph algorithms, tree algorithms and classical questions of DSA. It's built to help students, developers, and interview candidates understand how various DSA concepts work through step-by-step animations and interactive controls.",
    //     shortDesc: 'Interactive animations for visualizing data structures, algorithms, and classic DSA problems side-by-side.',
    //     tags: ["React", "TailwindCSS", "Node.js", "MongoDB", "Algorithms"],
    //     codeLink: 'https://github.com/jhanvi857/dsa-visualizer',
    //     demoLink: 'https://dsa-visualizer-gilt.vercel.app/',
    //     image: DSAVisualizerImg
    // },
    {
        id: 4,
        name: 'VisualBrief',
        complexity: 'AI/NLP',
        desc: 'A smart document analysis tool that transforms text into concise summaries and visual diagrams such as flowcharts, ER diagrams, and concept maps. It extracts entities and relationships from text using SpaCy and NLTK, then renders interactive diagrams via Mermaid.js. While diagram accuracy varies with text complexity, it effectively showcases text-to-visual translation and NLP-based diagram generation.',
        shortDesc: 'An AI-powered tool leveraging NLP to transform text into concise summaries and Mermaid.js flowcharts.',
        tags: ["React", "TailwindCSS", "Node.js", "Python", "SpaCy", "Mermaid.js"],
        codeLink: 'https://github.com/jhanvi857/VisualBrief',
        demoLink: 'https://visual-brief.vercel.app/',
        image: VisualBriefImg
    },
    // {
    //     id: 5,
    //     name: 'CryptoTrace',
    //     complexity: 'Full-Stack',
    //     desc: 'A web platform that helps users analyze blockchain wallet activity, transaction patterns, and on-chain behavior. where, my part was to integrate external crypto APIs into React components, I built secure REST APIs for search/export/saved data, and designed an interactive analytics dashboard using react-graph for visual insights.',
    //     shortDesc: 'Blockchain analytics platform featuring REST APIs and dashboards to analyze transaction patterns.',
    //     tags: ["react.js", "TailwindCSS", "Node.js", "PostgreSQL", "Express.js"],
    //     codeLink: 'https://github.com/jhanvi857/CryptoTrace',
    //     demoLink: null,
    //     image: CryptoTraceImg
    // }
];

const ProjectsCards = () => (
    <div className="flex flex-col gap-8 lg:gap-16 p-4 lg:p-8 max-w-6xl mx-auto w-full">
        {projects.map((proj, i) => {
            const isEven = i % 2 === 0;
            return (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                    className={`group relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center bg-black/40 backdrop-blur-md border border-cyan-500/20 p-6 lg:p-8 rounded-2xl hover:border-cyan-500/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,255,255,0.1)]`}
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-700 rounded-t-xl"></div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative overflow-hidden rounded-xl border border-white/5 group-hover:border-cyan-500/30 transition-colors shadow-2xl shrink-0">
                        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                        <img src={proj.image} alt={proj.name} className="w-full h-44 sm:h-56 md:h-80 object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" />
                        <div className="absolute top-4 right-4 z-20">
                            <span className="text-[10px] md:text-xs font-mono font-bold text-cyan-300 bg-black/60 backdrop-blur-md px-3 md:px-4 py-1.5 rounded border border-cyan-500/50 shadow-lg uppercase tracking-widest">
                                {proj.complexity}
                            </span>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 flex flex-col h-full flex-1">
                        <h4 className="text-xl sm:text-2xl md:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-400 tracking-wide mb-4 md:mb-6 group-hover:text-cyan-300 transition-colors mt-2 md:mt-0">
                            {proj.name}
                        </h4>

                        <div className="bg-cyan-950/20 border border-cyan-900/50 p-4 md:p-5 rounded-xl mb-4 md:mb-6 shadow-inner relative z-10 hover:border-cyan-500/40 transition-colors">
                            <p className="text-sm md:text-base text-cyan-50 leading-relaxed font-mono text-justify">
                                <span className="block md:hidden">{proj.shortDesc}</span>
                                <span className="hidden md:block">{proj.desc}</span>
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {proj.tags.map((tag, idx) => (
                                <span key={idx} className="text-xs font-mono text-cyan-200 border border-cyan-700/60 bg-black/40 px-3 py-1.5 rounded-sm whitespace-nowrap shadow-sm hover:border-cyan-400 hover:text-cyan-100 transition-colors cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4 mt-auto">
                            {proj.demoLink && (
                                <a href={proj.demoLink} target="_blank" rel="noreferrer" className="flex-1 text-center text-xs md:text-sm uppercase tracking-widest font-bold text-cyan-50 bg-cyan-900/60 hover:bg-cyan-800/80 hover:-translate-y-1 transition-all border border-cyan-500/50 hover:border-cyan-400 px-4 py-3 rounded flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,255,255,0.15)] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                            {proj.codeLink && (
                                <a href={proj.codeLink} target="_blank" rel="noreferrer" className="flex-1 text-center text-xs md:text-sm uppercase tracking-widest font-bold text-cyan-400 hover:text-white bg-black/50 hover:bg-cyan-900/40 hover:scale-[1.02] transition-all border border-cyan-500/50 px-4 py-3 rounded flex items-center justify-center gap-2">
                                    <FaGithub /> GitHub
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            );
        })}
    </div>
);

export default ProjectsCards;
