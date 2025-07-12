import React from "react";
// import { FaCode, FaMedal, FaGithub, FaTrophy } from "react-icons/fa";

export default function DSAStats() {
  return (
    <section id="stats" className="bg-black relative min-h-screen py-20 px-6 text-white">
        <div className="absolute inset-0 pointer-events-none z-0
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:40px_40px]" />
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          Problem Solving & Achievements
        </h2>

        {/* Problem Solving Stats */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
               DSA Problem Solving
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Solved <span className="text-white font-semibold">160+</span> problems on LeetCode</li>
              <li>990 hackos on HackerRank</li>
              <li>Strong grip on Graphs, Trees, DP & Greedy</li>
              <li>Built 2 major projects focused on DSA</li>
            </ul>
          </div>

          {/* Achievements */}
          <div className="bg-[#1a1a1a] border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
               Achievements & Highlights
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Scored 91% in 10th board</li>
                <li>Scored 92.66% in PCM in 12th boards</li>
                <li>Contributed to open source projects on GitHub</li>
                <li>5-Star in java and bronze problem solving badge on HackerRank</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
