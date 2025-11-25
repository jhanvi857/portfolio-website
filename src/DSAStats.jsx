import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const dsaAchievements = [
  "Solved 400+ DSA problems on LeetCode (top 6.93%)",
  // "1200+ Hackos on HackerRank | Java 5-Star | Problem Solving silver badge",
  "Pupil on codeforces",
  "Java 5 star | problem solving silver badge on HackerRank"
];

// const academics = ["91% in 10th board", "92.66% in PCM 12th board"];

const positions = [
  "DSA & CP Team Member at Adani Student Programming and Development Club",
  "Trainer at Adani University Robotics Club",
];

const Card = ({ title, items, icon, delay }) => (
  <div
    className="relative bg-gradient-to-br from-slate-900/60 to-slate-800/30 backdrop-blur-md 
               border border-purple-500/30 rounded-2xl p-6 shadow-lg 
               hover:scale-[1.03] hover:shadow-purple-500/20 transition-all duration-300 group"
    data-aos="zoom-in-up"
    data-aos-delay={delay}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-300" />

    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>

    <ul className="list-disc list-inside text-slate-300 space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
export default function AchievementsSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60 });
  }, []);

  return (
    <section
      id="achievements"
      className="relative min-h-screen py-20 px-6 bg-black text-white overflow-hidden"
    >
      {/* Animated Background Grid */}
      {/* <div
        className="absolute inset-0 pointer-events-none z-0 animate-pulse-slow
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),
          linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:60px_60px]"
      /> */}

      {/* Floating Orbs */}
      {/* <div className="absolute -top-32 -left-32 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"></div> */}

      <div className="relative max-w-7xl mx-auto z-10">
        <h2
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r 
                     text-purple-400 via-pink-400 to-indigo-400 bg-clip-text"
        >
          Achievements & Positions
        </h2>

        {/* 3 Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <Card
            title="DSA & Problem Solving"
            // icon={<Trophy className="text-yellow-400" size={26} />}
            items={dsaAchievements}
            delay={100}
          />
          <Card
            title="Positions & Roles"
            // icon={<Briefcase className="text-pink-400" size={26} />}
            items={positions}
            delay={200}
          />
          {/* <Card
            title="Academics"
            // icon={<GraduationCap className="text-cyan-400" size={26} />}
            items={academics}
            delay={300}
          /> */}
        </div>

        {/* CP Profiles */}
        {/* <h3
          className="text-3xl font-semibold text-center mt-24 mb-10 bg-gradient-to-r 
                     from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent"
          data-aos="fade-up"
        >
          Competitive Programming Profiles
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {cpProfiles.map((profile, idx) => (
            <CPProfileCard
              key={profile.name}
              profile={profile}
              delay={400 + idx * 100}
            />
          ))}
        </div> */}
        <section className=" bg-black py-20 text-white">
          <h2 className="text-3xl font-bold text-center mb-12">CP Profiles</h2>
        
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                name: "LeetCode",
                logo: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
                stats: "400+ Problems | contest rating 1816 (top 6.93%)",
                color: "from-yellow-400 to-orange-500",
                link: "https://leetcode.com/u/jhanvi857",
              },
              {
                name: "Codeforces",
                logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3LVEIg_6x2wqlPG8pruOUnUi-wEvnw1eC0w&s",
                stats: "Pupil | max rating(1210)",
                color: "from-blue-600 to-cyan-400",
                link: "https://codeforces.com/profile/jhanvi.857",
              },
              {
                name: "HackerRank",
                logo: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png",
                stats: "Java 5 star | Problem solving silver badge",
                color: "from-green-400 to-green-500",
                link: "https://www.hackerrank.com/profile/jhanvip8507",
              },
            ].map((cp, i) => (
              <a
                key={i}
                href={cp.link}
                target="_blank"
                className={`bg-gradient-to-br ${cp.color} p-[2px] rounded-xl hover:scale-105 transition-transform`}
                data-aos="zoom-in-up">
                <div className="bg-black rounded-xl p-6 flex flex-col items-center">
                  <img src={cp.logo} alt={cp.name} className="w-12 h-12 mb-4" />
                  <h3 className="text-xl font-semibold">{cp.name}</h3>
                  <p className="text-gray-400 mt-2">{cp.stats}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
