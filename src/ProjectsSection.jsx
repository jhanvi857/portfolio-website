import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import DSAVisualizer from "./DSAVisualizer.png";
import RouteOptimizer from "./RouteOpt.png";
import ChatVerse from "./ChatVerse.png";
import TextCruncher from "./TextCruncher.png";
const projects = [
  {
    image:DSAVisualizer,
    title: "DSA Visualizer",
    description: "An interactive tool to visualize data structures like arrays, strings,Linked list, trees, graphs,maps & sets, algorithms like sorting, graph algorithms, tree algorithms and classical questions of DSA.It's built to help students, developers, and interview candidates understand how various DSA concepts work through step-by-step animations and interactive controls.",
    tags: ["React", "TailwindCSS","Node.js","MongoDB", "Algorithms"],
    demoLink: "https://dsa-visualizer-gilt.vercel.app/",
    codeLink: "https://github.com/jhanvi857/dsa-visualizer"
  },
  {
    image:RouteOptimizer,
    title: "Route Optimizer",
    description: "A full-stack web application that calculates the most optimized route using Dijkstra’s Algorithm and visualizes it beautifully on an interactive map with Leaflet.js.Built with React.js, Tailwind CSS, Node.js, Express.js, and OpenRouteService, this project combines Data Structures & Algorithms with modern web development practices.",
    tags: ["React", "Node.js","Express.js","MongoDB","OpenRoute API", "Dijkstra Algorithm"],
    demoLink: "https://route-optimizer-one.vercel.app/",
    codeLink: "https://github.com/jhanvi857/route-optimizer"
  },
  {
    image:ChatVerse,
    title: "ChatVerse-AI chatbot",
    description: "Chatverse is an AI chatbot platform built to deliver accurate, context-aware responses. Whether you need assistance, casual conversation, or information, Chatverse is your go-to virtual assistant. The system leverages advanced AI models and offers an intuitive frontend for easy interaction.",
    tags: ["HTML5", "TailwindCSS", "Node.js","MongoDB","Express.js"],
    demoLink: "",
    codeLink: "https://github.com/jhanvi857/chatVerse-bot"
  },
  {
    image:TextCruncher,
    title:"TextCruncher",
    description:"TextCruncher is a fast, privacy-friendly text summarization tool that runs entirely offline. It uses extractive techniques like TextRank and frequency analysis to summarize plain text or PDFs — no internet or AI APIs required.",
    tags: ["React","TailwindCSS","Node.js","node-summarizer","pdf-parser"],
    demoLink:"https://text-cruncher.vercel.app/",
    codeLink:"https://github.com/jhanvi857/TextCruncher-"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl p-6 shadow-md hover:shadow-purple-500/20 border border-white/10 transition-all duration-300 bg-gradient-to-br from-black to-purple-950 hover:scale-[1.02]">
    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 mt-2">
        {project.title}
      </h3>

      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[300px] sm:max-h-[400px] md:max-h-[450px] object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      <p className="text-sm sm:text-base text-gray-300 mb-4 text-justify">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full hover:bg-purple-700/50 transition duration-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm mt-4">
  {project.demoLink && (
    <a
      href={project.demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white px-4 py-2 border border-purple-500/50 bg-white/5 backdrop-blur-md hover:bg-purple-700/60 hover:text-white rounded-md transition flex items-center gap-2"
    >
      <FaExternalLinkAlt />
      Live Demo
    </a>
  )}

  <a
    href={project.codeLink}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white px-4 py-2 border border-purple-500/50 bg-white/5 backdrop-blur-md hover:bg-purple-700/60 hover:text-white rounded-md transition flex items-center gap-2"
  >
    <FaGithub />
    GitHub
  </a>
</div>

    </div>
  );
};


export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-6 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none z-0
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:40px_40px]" />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          My Projects
        </h2>
        <div className="flex flex-col items-center justify-center gap-y-12 max-w-7xl px-4 sm:px-6 md:px-10 lg:px-28">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
