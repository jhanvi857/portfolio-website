import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code, Layout, Server, Database, Wrench, Cpu } from "lucide-react";

const skillCategories = [
  {
    category: "Languages",
    icon: <Code className="text-purple-400" size={28} />,
    skills: ["Python", "Java", "C", "JavaScript"],
  },
  {
    category: "CS Fundamentals",
    icon: <Cpu className="text-green-400" size={28} />,
    skills: ["DSA", "OOP"],
  },
  {
    category: "Frontend",
    icon: <Layout className="text-pink-400" size={28} />,
    skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "React Native"],
  },
  {
    category: "Backend",
    icon: <Server className="text-indigo-400" size={28} />,
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    icon: <Database className="text-cyan-400" size={28} />,
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools",
    icon: <Wrench className="text-yellow-400" size={28} />,
    skills: ["Git & GitHub", "VS Code", "Postman"],
  }
];

const SkillCard = ({ category, icon, skills, delay }) => (
  <div
    className="relative bg-gradient-to-br from-slate-900/60 to-slate-800/30 backdrop-blur-md 
               border border-purple-500/30 rounded-2xl p-6 shadow-lg 
               hover:scale-[1.03] hover:shadow-purple-500/20 transition-all duration-300 group"
    data-aos="zoom-in-up"
    data-aos-delay={delay}
  >
    {/* Glow effect on hover */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-300" />

    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-white">{category}</h3>
    </div>

    <div className="flex flex-wrap gap-3 mt-3">
      {skills.map((skill) => (
        <div
          key={skill}
          className="px-3 py-1.5 text-sm font-medium text-slate-200 bg-slate-800/40 
                     border border-purple-500/20 rounded-lg hover:bg-purple-700/30 
                     hover:text-white transition-all duration-200"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
);

export default function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60 });
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* Animated Background Grid */}
      {/* <div
        className="absolute inset-0 pointer-events-none z-0 animate-pulse-slow
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:60px_60px]"
      /> */}

      {/* Floating gradient orbs */}
      {/* <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div> */}

      <div className="relative max-w-7xl mx-auto z-10">
        <h2
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r text-purple-400 bg-clip-text "
        >
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {skillCategories.map((cat, i) => (
            <SkillCard
              key={cat.category}
              category={cat.category}
              // icon={cat.icon}
              skills={cat.skills}
              delay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
