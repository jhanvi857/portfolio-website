import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Delay helps after navigation
      }
    }
  }, [location]);
};
export default function About() {
  
  return (
    <>
    <section className=" bg-black text-white flex items-center justify-center overflow-hidden px-6 pt-4 pb-16">
    <div className="relative min-h-screen flex flex-col justify-center items-center bg-black text-white">
      {/* Background Bubbles (optional visual) */}
      <div className="absolute -top-10 -left-40 w-[300px] h-[300px] bg-purple-700 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-20  w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          About Me
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hello! I’m <span className="text-white font-medium">Jhanvi Patel</span>,
          a passionate and curious learner currently pursuing B.Tech in Computer Science (2024–2028) from Gujarat.
          I specialize in <span className="text-purple-300 font-semibold">Full-Stack Development</span> and have a deep interest in 
          <span className="text-purple-300 font-semibold"> Data Structures & Algorithms</span>.
        </p>

        <p className="text-lg text-gray-300 mt-6 leading-relaxed">
          My journey revolves around building <span className="text-white font-medium">interactive and optimized web applications</span>, 
          while also strengthening my DSA skills through problem-solving on platforms like LeetCode and Codeforces.
          I enjoy breaking down complex logic into clear, efficient solutions.
        </p>

        <p className="text-lg text-gray-300 mt-6 leading-relaxed">
          Some of my major projects include a <span className="text-purple-400">DSA Visualizer</span> that animates classical problems and structures,
          and a <span className="text-purple-400">Route Optimizer</span> that applies graph algorithms in real-world mapping.
        </p>

        <p className="text-lg text-gray-300 mt-6 leading-relaxed">
          I am also exploring AI and machine learning and eager to learn and innovate in the tech industry.
          I’m actively seeking opportunities to contribute to impactful projects and grow as a software engineer.
        </p>
      </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white mt-10 text-center px-4">
  My hobbies and interests beyond coding
</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12 lg:px-20">
  {/* Hobby 1 */}
  <div className="bg-purple-800/20 p-5 rounded-lg text-center text-white">
    <span className="text-3xl">📷</span>
    <p className="mt-2 font-semibold text-lg">Nature Photography</p>
    <p className="mt-2 text-sm text-gray-200">
      🌿 Apart from programming, I enjoy spending time outdoors and capturing the beauty of nature.
    </p>
  </div>

  {/* Hobby 2 */}
  <div className="bg-purple-800/20 p-5 rounded-lg text-center text-white">
    <span className="text-3xl">🎶</span>
    <p className="mt-2 font-semibold text-lg">Singing</p>
    <p className="mt-2 text-sm text-gray-200">
      🎤 I'm also passionate about singing. Music has always been a creative outlet that keeps me refreshed and balanced.
    </p>
  </div>

  {/* Hobby 3 */}
  <div className="bg-purple-800/20 p-5 rounded-lg text-center text-white">
    <span className="text-3xl">🏸</span>
    <p className="mt-2 font-semibold text-lg">Badminton</p>
    <p className="mt-2 text-sm text-gray-200">
      🏸 I love playing badminton. It's a great way for me to stay active and energized.
    </p>
  </div>
</div>

{/* Education Section */}
<div className="relative z-10 max-w-4xl mx-auto mt-20 px-4">
  <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-purple-300 text-center">
    Education
  </h2>

  <div className="space-y-6 text-left text-gray-300">
    <div className="bg-white/5 p-5 rounded-lg border border-purple-800/20 shadow-md">
      <h3 className="text-lg sm:text-xl font-semibold text-white">
        B.Tech in Computer Science (AI-ML)
      </h3>
      <p className="text-sm text-purple-400">
        Adani University | 2024 – 2028 | Gujarat
      </p>
      <p className="mt-2 text-sm sm:text-base">
        Currently pursuing Computer Science Engineering with a strong focus on Data Structures, Algorithms, and web Development.
      </p>
    </div>
  </div>
</div>
</div>
    </section>
    </>
  );
}
