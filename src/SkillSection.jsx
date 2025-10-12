// import React from "react";

// const skills = [
//   { name: "C", level: 4 },
//   { name: "Java", level: 4 },
//   { name: "JavaScript", level: 4 },
//   { name: "Python", level: 4 },
//   { name: "HTML", level: 4 },
//   { name: "CSS", level: 4 },
//   { name: "Tailwind CSS", level: 4 },
//   { name: "React.js", level: 4 },
//   { name: "Node.js", level: 3 },
//   { name: "Express.js", level: 3 },
//   { name: "MongoDB", level: 3 },
//   { name: "Git & GitHub", level: 4 },
//   { name: "DSA ", level: 4 },
// ];

// const SkillBar = ({ name, level }) => {
//   return (
//     <div className="mb-5" data-aos="fade-up"
//               data-aos-delay="200">
//       <div className="flex justify-between text-sm font-medium text-white mb-1">
//         <span className="text-lg">{name}</span>
//         <span>{level}/5</span>
//       </div>
//       <div className="w-full h-2 rounded-full">
//         <div
//           className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
//           style={{ width: `${(level / 5) * 100}%` }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default function SkillsSection() {
//   return (
//     <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 pt-32 pb-16">
//         {/* Grid BG */}
//         <div className="absolute inset-0 pointer-events-none z-0
//           [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
//           [background-size:40px_40px]" />
          

//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-10 text-center text-white">
//           My Skills
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 text-2xl">
//           {skills.map((skill) => (
//             <SkillBar key={skill.name} name={skill.name} level={skill.level} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillCategories = [
  {
    category:"Languages",
    skills : ["Python", "Java", "C","JavaScript"]
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "Tailwind CSS", "React.js", "React Native"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "postgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Git & GitHub", "VS Code", "Postman"],
  },
  {
    category: "CS Fundamentals",
    skills: ["DSA", "OOP", "Operating Systems"],
  },
];

const SkillCard = ({ category, skills, delay }) => (
  <div
    className="bg-gradient-to-r from-black to-purple-950 border border-purple-600 rounded-2xl p-6 mb-8 hover:from-purple-950 hover:to-black shadow-lg"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <h3 className="text-2xl font-semibold mb-4 text-white">{category}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <div
          key={skill}
          className="bg-slate-800/50 rounded-lg px-3 py-2 text-sm text-slate-300"
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
      className="relative min-h-screen py-20 px-6 bg-black text-white"
    >
      {/* Background grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0
        [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
        [background-size:40px_40px]"
      />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          My Skills
        </h2>
        {skillCategories.map((cat, i) => (
          <SkillCard
            key={cat.category}
            category={cat.category}
            skills={cat.skills}
            delay={i * 100}
          />
        ))}
      </div>
    </section>
  );
}
