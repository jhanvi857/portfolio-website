import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Layers, Server, Network, Brain, Bot } from 'lucide-react';

const projects = [
  {
    title: 'CloudWeave',
    date: 'object storage, golang',
    description: 'A local, S3-compatible distributed object store for learning and prototyping distributed storage.',
    tags: ['Golang', 'S3 compatibility', 'Object storage'],
    categories: ['backend', 'distributed'],
    github: 'https://github.com/jhanvi857/CloudWeave',
    live: 'https://cloudweave-omega.vercel.app/',
    image: '/cloudweave.png'
  },
  {
    title: 'NioFlow',
    date: 'Systems / HTTP',
    description: 'A lightweight Java 17 HTTP micro-framework with explicit routing, middleware composition, and runtime controls designed to make HTTP internals explicit.',
    tags: ['Java', 'HTTP', 'Routing', 'Middleware'],
    categories: ['backend'],
    github: 'https://github.com/jhanvi857/coreHTTP',
    live: 'https://core-http.vercel.app/',
    image: '/NioFlow.png'
  },
  {
    title: 'gitresolve',
    date: 'Systems / Git',
    description: 'A locally executed Git conflict resolver with syntax-aware classification, structured data merging, and decision audit logs, resolving conflicts deterministically.',
    tags: ['Golang', 'Git', 'Conflict Resolution'],
    categories: ['backend', 'automation'],
    github: 'https://github.com/jhanvi857/gitresolve',
    live: 'https://gitresolve.vercel.app/',
    image: '/gitresolve.png'
  },
  {
    title: 'Argus',
    date: 'Automation/AI',
    description: 'Autonomous ATS career monitor & hallucination-free JD-to-portfolio matcher with community interview intelligence. Built with LangGraph, n8n, FastAPI & React.',
    tags: ['Python', 'LangGraph', 'n8n', 'FastAPI', 'React'],
    categories: ['automation'],
    github: 'https://github.com/jhanvi857/Argus',
    live: 'https://argus-nine-steel.vercel.app',
    image: '/Argus.png'
  },
  {
    title: 'DocStream',
    date: 'Systems / CRDT',
    description: 'A scalable collaborative document editor backend built in Go, designed to synchronize concurrent edits in conflict-free real-time across multiple instances.',
    tags: ['Golang', 'Concurrency', 'Real-time', 'CRDT'],
    categories: ['backend', 'distributed'],
    github: 'https://github.com/jhanvi857/docstream',
    live: 'https://doc-stream-two.vercel.app/',
    image: '/docstream.png'
  },
  {
    title: 'Streamify',
    date: 'Video processing',
    description: 'distributed video streaming and processing platform designed to simulate modern media pipeline architecture.',
    tags: ['Golang', 'Next.js', 'PostgreSQL', 'Redis', 'object storage'],
    categories: ['backend', 'distributed'],
    github: 'https://github.com/jhanvi857/Streamify',
    live: 'https://streamify-opal-theta.vercel.app/',
    image: '/Streamify.png'
  },
  {
    title: 'Evora',
    date: 'Event Sourcing',
    description: 'distributed Job Queue system demonstrating CQRS, Saga Orchestration, and Event Sourcing patterns on a unified high-performance runtime.',
    tags: ['Java', 'CQRS', 'Saga Orchestration', 'Event Sourcing'],
    categories: ['backend', 'distributed'],
    github: 'https://github.com/jhanvi857/evora',
    live: "https://evora-gray-six.vercel.app/",
    image: '/evora.png'
  },
  {
    title: 'Arbiter',
    date: 'Database / ML',
    description: 'Machine Learning-assisted Database Query Optimizer estimating sqlite plan latency to suggest rewrites and optimize query execution pathing.',
    tags: ['Python', 'SQLite', 'Machine Learning', 'Database'],
    categories: ['ml'],
    github: 'https://github.com/jhanvi857/Arbiter',
    live: 'https://arbiter-neon-seven.vercel.app/',
    image: '/arbiter.png'
  },

  {
    title: 'Vexor',
    date: 'API gateway/ Load Balancer',
    description: 'Go API gateway that loads configuration at startup, applies rate limiting and circuit breaking per route, load balances across healthy upstreams, and forwards traffic through a hardened reverse proxy with runtime metrics.',
    tags: ['Golang', 'API Gateway', 'Load Balancer', 'Reverse Proxy'],
    categories: ['backend', 'distributed'],
    github: 'https://github.com/jhanvi857/vexor',
    live: null,
    image: '/vexor.png'
  },
  {
    title: 'VisualBrief',
    date: 'AI / NLP',
    description: 'VisualBrief is a platform that transforms natural language descriptions and documents into high-quality, interactive visual diagrams. Designed for developers, architects, and business analysts.',
    tags: ['React.js', 'Python', 'SpaCy', 'Mermaid.js'],
    categories: ['ml', 'automation'],
    github: 'https://github.com/jhanvi857/VisualBrief',
    live: 'https://visual-brief.vercel.app/',
    image: '/VisualBrief.png'
  },
  // {
  //   title: 'Meridian',
  //   date: 'ML/ RMI',
  //   description: 'a standalone Python project that replaces a traditional B-Tree index with a 2-stage Recursive Model Index. It benchmarks lookup latency, build time, and memory footprint on three synthetic datasets of 1,000,000 keys.',
  //   tags: ['Python', 'Machine Learning', 'Database'],
  //   categories: ['ml', 'backend'],
  //   github: 'https://github.com/jhanvi857/Meridian',
  //   image: '/meridian.png'
  // }
];

const TAB_CONFIG = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'backend', label: 'Backend', icon: Server },
  { id: 'distributed', label: 'Distributed Systems', icon: Network },
  { id: 'ml', label: 'ML', icon: Brain },
  { id: 'automation', label: 'Automation', icon: Bot },
];

export default function Projects({ variants }) {
  const [activeTab, setActiveTab] = useState('all');

  const tabsWithCounts = useMemo(() => {
    return TAB_CONFIG.map(tab => {
      const count = tab.id === 'all'
        ? projects.length
        : projects.filter(p => p.categories.includes(tab.id)).length;
      return { ...tab, count };
    });
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects;
    return projects.filter(proj => proj.categories.includes(activeTab));
  }, [activeTab]);

  return (
    <motion.section id="projects" className="space-y-6" variants={variants}>
      <div className="space-y-3">
        <h2 className="font-semibold tracking-tight uppercase text-white text-md px-1 text-left">
          My Projects
        </h2>

        {/* Section Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-zinc-950/80 backdrop-blur-md border border-zinc-900 rounded-xl overflow-x-auto no-scrollbar w-fit max-w-full">
          {tabsWithCounts.map((tab) => {
            const isActive = activeTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg transition-colors duration-200 cursor-pointer select-none whitespace-nowrap shrink-0 ${isActive
                  ? 'text-white font-medium'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeProjectTab"
                    className="absolute inset-0 bg-zinc-800/90 border border-zinc-700/60 rounded-lg shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  <Icon className="size-3.5" />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono transition-colors ${isActive
                      ? 'bg-zinc-700/90 text-zinc-100'
                      : 'bg-zinc-900 text-zinc-500'
                      }`}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((proj) => (
            <motion.div
              layout
              key={proj.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="flex flex-col bg-zinc-950/90 border border-zinc-900 rounded-2xl overflow-hidden hover:border-zinc-700/80 transition-all duration-300 group shadow-md hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
            >
              {/* Project Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border-b border-zinc-900/60">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Details */}
              <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2 text-left">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-white transition-colors duration-200">
                      {proj.title}
                    </h3>
                    <span className="text-[10px] text-muted-foreground font-mono bg-muted/80 px-2 py-0.5 border border-border/20 rounded">
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
                      <span
                        key={tagIdx}
                        className="text-[9px] font-mono text-muted-foreground bg-muted/50 px-2 py-0.5 rounded border border-border/10"
                      >
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
}
