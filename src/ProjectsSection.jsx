import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import DSAVisualizer from "./DSAVisualizer.png";
import RouteOptimizer from "./RouteOpt.png";
import ChatVerse from "./ChatVerse.png";
const projects = [
  {
    image:DSAVisualizer,
    title: "DSA Visualizer",
    description: "An interactive tool to visualize data structures like arrays, strings,Linked list, trees, graphs,maps & sets, algorithms like sorting, graph algorithms, tree algorithms and classical questions of DSA.It's built to help students, developers, and interview candidates understand how various DSA concepts work through step-by-step animations and interactive controls.",
    tags: ["React", "TailwindCSS","Node.js","MongoDB", "Algorithms"],
    demoLink: "https://your-dsa-visualizer.vercel.app",
    codeLink: "https://github.com/yourusername/dsa-visualizer"
  },
  {
    image:RouteOptimizer,
    title: "Route Optimizer",
    description: "A full-stack web application that calculates the most optimized route using Dijkstra’s Algorithm and visualizes it beautifully on an interactive map with Leaflet.js.Built with React.js, Tailwind CSS, Node.js, Express.js, and OpenRouteService, this project combines Data Structures & Algorithms with modern web development practices.",
    tags: ["React", "Node.js","Express.js","MongoDB","OpenRoute API", "Dijkstra Algorithm"],
    demoLink: "https://your-route-optimizer.vercel.app",
    codeLink: "https://github.com/yourusername/route-optimizer"
  },
  {
    image:ChatVerse,
    title: "ChatVerse-AI chatbot",
    description: "Chatverse is an AI chatbot platform built to deliver accurate, context-aware responses. Whether you need assistance, casual conversation, or information, Chatverse is your go-to virtual assistant. The system leverages advanced AI models and offers an intuitive frontend for easy interaction.",
    tags: ["HTML5", "TailwindCSS", "Node.js","MongoDB","Express.js"],
    demoLink: "https://your-portfolio.vercel.app",
    codeLink: "https://github.com/yourusername/portfolio"
  }
];

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-xl p-6 shadow-md hover:shadow-lg border border-white/10 transition-all bg-gradient-to-br from-black to-purple-950">
      <img src={project.image} className="h-[450px] w-6xl rounded-lg"/>
      <h3 className="text-2xl font-semibold text-white mb-2 mt-2">{project.title}</h3>
      <p className="text-md text-gray-300 mb-3 text-justify">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs bg-purple-800/40 text-purple-300 px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm">
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white px-3 py-3 border border-purple-400 rounded-lg hover:bg-purple-700 hover:text-white flex items-center gap-1"
        >
          <FaExternalLinkAlt/>Live Demo 
        </a>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white px-3 py-3 border border-purple-400 rounded-lg hover:bg-purple-700 hover:text-white flex items-center gap-1"
        >
          <FaGithub/> GitHub 
        </a>
      </div>
    </div>
  );
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen py-20 px-6 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none z-0
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:40px_40px]" />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          My Projects
        </h2>
        <div className="flex flex-col items-center justify-center gap-y-12 max-w-7xl px-28">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
