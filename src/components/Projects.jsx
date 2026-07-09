import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'DocStream',
    date: 'Systems / CRDT',
    description: 'A scalable collaborative document editor backend built in Go, designed to synchronize concurrent edits in conflict-free real-time across multiple instances.',
    tags: ['Golang', 'Concurrency', 'Real-time', 'CRDT'],
    github: 'https://github.com/jhanvi857/docstream',
    live: 'https://doc-stream-two.vercel.app/',
    image: '/docstream.png'
  },
  {
    title: 'gitresolve',
    date: 'Systems / Git',
    description: 'A locally executed Git conflict resolver with syntax-aware classification, structured data merging, and decision audit logs, resolving conflicts deterministically.',
    tags: ['Golang', 'Git', 'Conflict Resolution'],
    github: 'https://github.com/jhanvi857/gitresolve',
    live: 'https://gitresolve.vercel.app/',
    image: '/gitresolve.png'
  },
  {
    title: 'NioFlow',
    date: 'Systems / HTTP',
    description: 'A lightweight Java 17 HTTP micro-framework with explicit routing, middleware composition, and runtime controls designed to make HTTP internals explicit.',
    tags: ['Java', 'HTTP', 'Routing', 'Middleware'],
    github: 'https://github.com/jhanvi857/coreHTTP',
    live: 'https://core-http.vercel.app/',
    image: '/NioFlow.png'
  },
  {
    title : 'Vexor',
    date: 'API gateway/ Load Balancer',
    description: 'Go API gateway that loads configuration at startup, applies rate limiting and circuit breaking per route, load balances across healthy upstreams, and forwards traffic through a hardened reverse proxy with runtime metrics.',
    tags: ['Golang', 'API Gateway', 'Load Balancer', 'Reverse Proxy'],
    github: 'https://github.com/jhanvi857/vexor',
    image: '/vexor.png'
  },
  {
    title: 'Arbiter',
    date: 'Database / ML',
    description: 'Machine Learning-assisted Database Query Optimizer estimating sqlite plan latency to suggest rewrites and optimize query execution pathing.',
    tags: ['Python', 'SQLite', 'Machine Learning', 'Database'],
    github: 'https://github.com/jhanvi857/Arbiter',
    live: 'https://arbiter-neon-seven.vercel.app/',
    image: '/arbiter.png'
  },
  {
    title: 'Evora',
    date: 'Event Sourcing',
    description: 'distributed Job Queue system demonstrating CQRS, Saga Orchestration, and Event Sourcing patterns on a unified high-performance runtime.',
    tags: ['Java', 'CQRS', 'Saga Orchestration', 'Event Sourcing'],
    github: 'https://github.com/jhanvi857/evora',
    live: null,
    image: '/evora.png'
  },
  {
    title: 'VisualBrief',
    date: 'AI / NLP',
    description: 'VisualBrief is a platform that transforms natural language descriptions and documents into high-quality, interactive visual diagrams. Designed for developers, architects, and business analysts.',
    tags: ['React.js', 'Python', 'SpaCy', 'Mermaid.js'],
    github: 'https://github.com/jhanvi857/VisualBrief',
    live: 'https://visual-brief.vercel.app/',
    image: '/VisualBrief.png'
  },
  {
    title: 'Meridian',
    date : 'ML/ RMI',
    description: 'a standalone Python project that replaces a traditional B-Tree index with a 2-stage Recursive Model Index. It benchmarks lookup latency, build time, and memory footprint on three synthetic datasets of 1,000,000 keys.',
    tags: ['Python', 'Machine Learning', 'Database'],
    github: 'https://github.com/jhanvi857/Meridian',
    image: '/meridian.png'
  }
];

export default function Projects({ variants }) {
  return (
    <motion.section id="projects" className="space-y-6" variants={variants}>
      <h2 className="font-semibold tracking-tight uppercase text-white text-md px-1 text-left">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div 
            key={idx}
            className="flex flex-col bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-800 transition-all duration-300 group shadow-md"
          >
            {/* Project Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-900/60">
              <img 
                src={proj.image} 
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Details */}
            <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-white transition-colors duration-200">
                    {proj.title}
                  </h3>
                  <span className="text-[10px] text-muted-foreground font-mono bg-muted px-2 py-0.5 border border-border/20 rounded">
                    {proj.date}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground/80 leading-relaxed text-justify">
                  {proj.description}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex flex-wrap gap-1">
                  {proj.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-[9px] font-mono text-muted-foreground bg-muted/50 px-2 py-0.5 rounded border border-border/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 text-xs font-mono pt-1">
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 rounded-md text-[11px] font-mono text-zinc-300 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <FaGithub className="text-[12px]" /> Github
                  </a>
                  {proj.live && (
                    <a 
                      href={proj.live} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900/80 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 rounded-md text-[11px] font-mono text-zinc-300 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <FaExternalLinkAlt className="text-[10px]" /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
