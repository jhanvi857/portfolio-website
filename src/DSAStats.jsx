// import React from "react";
// // import { FaCode, FaMedal, FaGithub, FaTrophy } from "react-icons/fa";

// export default function DSAStats() {
//   return (
//     <section id="stats" className="bg-black relative min-h-screen py-20 px-6 text-white">
//         <div className="absolute inset-0 pointer-events-none z-0
//           [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
//           [background-size:40px_40px]" />
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center text-white mb-10">
//           Problem Solving & Achievements
//         </h2>

//         {/* Problem Solving Stats */}
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
//             <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
//                DSA Problem Solving
//             </h3>
//             <ul className="list-disc list-inside text-gray-300 space-y-2">
//               <li>Solved <span className="text-white font-semibold">200+</span> problems on LeetCode.</li>
//               <li>1000+ hackos on HackerRank</li>
//               <li>Built 2 major projects focused on DSA</li>
//             </ul>
//           </div>

//           {/* Achievements */}
//           <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
//             <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
//                Achievements & Highlights
//             </h3>
//             <ul className="list-disc list-inside text-gray-300 space-y-2">
//                 <li>91% in 10th board</li>
//                 <li>92.66% in PCM in 12th boards</li>
//                 {/* <li>Contributed to open source projects on GitHub</li> */}
//                 <li>5-Star in java and silver problem solving badge on HackerRank</li>
//             </ul>
//           </div>
          
//         </div>
//       </div>
//     </section>
//   );
// }
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const dsaAchievements = [
  "Solved 300+ DSA problems on LeetCode (top 14%)",
  "1200+ Hackos on HackerRank | Java 5-Star | Problem Solving badges",
  "Built 2 major projects focused on DSA",
];

const academics = [
  "90% in 10th board",
  "92% in PCM 12th board",
];

const positions = [
  "DSA & CP Team Member at Adani Student Programming & development Club(ASPDC)",
  "Trainer at Adani university robotics Club(AURC)",
];

const cpProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/u/jhanvi857/", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" },
  { name: "HackerRank", url: "https://www.hackerrank.com/profile/jhanvip8507", logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" },
  { name: "Codeforces", url: "https://codeforces.com/profile/jhanvi.857", logo: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-svg-download-png-2944796.png" },
];

// const Card = ({ title, items, delay }) => (
//   <div
//     className="bg-gradient-to-r from-black to-purple-950 border border-purple-600 rounded-2xl p-6 mb-8  hover:from-purple-950 hover:to-black
// transition-all duration-300 ease-in-out
//  shadow-lg"
//     data-aos="fade-up"
//     data-aos-delay={delay}
//   >
//     <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
//     <ul className="list-disc list-inside text-slate-300 space-y-2">
//       {items.map((item, idx) => (
//         <li key={idx}>{item}</li>
//       ))}
//     </ul>
//   </div>
// );
// Card (replace your current Card)
const Card = ({ title, items, delay }) => (
  <div
    className="w-full bg-gradient-to-r from-black to-purple-950 border border-purple-600
      rounded-2xl p-4 sm:p-6 mb-6
      transform hover:-translate-y-1 hover:from-purple-950 hover:to-black shadow-lg"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 text-white text-center sm:text-left">
      {title}
    </h3>

    <ul className="list-disc list-inside text-sm sm:text-base text-slate-300 space-y-2 leading-relaxed">
      {items.map((item, idx) => (
        <li key={idx} className="break-words">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const CPProfileCard = ({ profile, delay }) => (
  <a
    href={profile.url}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-gradient-to-r max-w-7xl mt-6 from-black to-purple-950 border border-purple-600 rounded-2xl p-4 flex flex-col items-center gap-2 transform hover:scale-[1.03] transition-transform duration-300 shadow-lg"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="w-[200px] h-[200px] rounded-full flex items-center justify-center">
      <img src={profile.logo} alt={profile.name} className="w-[150px] h-[150px] object-cover rounded-xl" />
    </div>
    <span className="text-white font-medium">{profile.name}</span>
  </a>
);

export default function AchievementsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60 });
  }, []);

  return (
    <section id="achievements" className="relative min-h-screen py-20 px-6 bg-black text-white">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0
        [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
        [background-size:40px_40px]"
      />

      <div className="max-w-7xl mx-auto space-y-16">
        
        <h2 className="text-3xl font-bold text-center mb-12">Achievements & positions</h2>

        {/* DSA Achievements */}
        <Card title="DSA & Problem Solving" items={dsaAchievements} delay={100} />

        {/* Positions / Roles */}
        <Card title="Positions & Roles" items={positions} delay={200} />

        {/* Academics */}
        <Card title="Academics" items={academics} delay={300} />

        {/* CP Profiles */}
          <h3 className="text-2xl font-bold text-white text-center mb-6 mt-36">Competitive Programming Profiles</h3>
          
          <div className="w-full sm:flex flex-wrap justify-between items-center gap-6 ">
            {cpProfiles.map((profile, idx) => (
              <CPProfileCard key={profile.name} profile={profile} delay={400 + idx * 100} />
            ))}
          </div>
        </div>
            </section>
  );
}
