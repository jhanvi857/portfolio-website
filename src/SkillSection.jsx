import React from "react";

const skills = [
  { name: "C", level: 4 },
  { name: "Java", level: 4 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 4 },
  { name: "HTML", level: 4 },
  { name: "CSS", level: 4 },
  { name: "Tailwind CSS", level: 4 },
  { name: "React.js", level: 4 },
  { name: "Node.js", level: 3 },
  { name: "Express.js", level: 3 },
  { name: "MongoDB", level: 3 },
  { name: "Git & GitHub", level: 4 },
  { name: "DSA ", level: 4 },
];

const SkillBar = ({ name, level }) => {
  return (
    <div className="mb-5" data-aos="fade-up"
              data-aos-delay="200">
      <div className="flex justify-between text-sm font-medium text-white mb-1">
        <span className="text-lg">{name}</span>
        <span>{level}/5</span>
      </div>
      <div className="w-full h-2 rounded-full">
        <div
          className="h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
          style={{ width: `${(level / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 pt-32 pb-16">
        {/* Grid BG */}
        <div className="absolute inset-0 pointer-events-none z-0
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:40px_40px]" />
          

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 text-2xl">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </section>
  );
}
