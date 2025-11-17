import "./App.css";
import React, { useEffect } from "react";
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
        }, 100);
      }
    }
  }, [location]);
};

export default function About() {
  return (
    <>
      <div className="snow"></div>
      <section
        className="bg-black text-white flex items-center justify-center overflow-hidden px-8 pt-10 pb-20 relative"
        data-aos="fade-up"
        data-aos-delay="200"
        id="about"
      >
        {/* Gradient background accents */}
        <div className="absolute -top-20 left-10 w-[250px] h-[250px] bg-purple-700/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-20 w-[200px] h-[200px] bg-blue-600/20 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center mt-20">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="mx-auto w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mb-8 rounded-full animate-pulse"></div>

          <p className="text-lg text-gray-300 leading-relaxed px-2">
            Hello! I’m <span className="text-white font-semibold">Jhanvi Patel</span>, 
            a passionate learner currently pursuing B.Tech in Computer Science from Adani university, Gujarat.
            I enjoy exploring how <span className="text-purple-400 font-medium">algorithms and real-world systems</span> can work together to solve practical problems.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed px-2 mt-4">
            My interests span across <span className="text-purple-400 font-medium">Data Structures & Algorithms</span> and 
            <span className="text-purple-400 font-medium"> AI </span>.
            I actively practice on LeetCode and Codeforces and love converting ideas into interactive web applications.
          </p>

          {/* Small highlight cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="bg-purple-800/10 p-6 rounded-xl border border-purple-800/20 hover:border-purple-400/40 hover:scale-105 transition transform duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">Who I Am</h3>
              <p className="text-gray-300 text-sm">
                A curious developer who believes in learning by building. I love solving complex problems and simplifying them through logic and design.
              </p>
            </div>

            <div className="bg-purple-800/10 p-6 rounded-xl border border-purple-800/20 hover:border-purple-400/40 hover:scale-105 transition transform duration-300">
              <h3 className="text-xl font-semibold mb-2 text-white">What I Do</h3>
              <p className="text-gray-300 text-sm">
                I design intelligent systems from algorithmic route optimization to AI-powered document visualization with a focus on clean, scalable architecture.
              </p>
            </div>
          </div>

          {/* Currently Exploring Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-purple-300 mb-4">
              Currently Exploring
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "System Design",
                "Advanced DSA",
                "AI-based Visualization",
                "Web development"
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-purple-800/20 border border-purple-700/30 rounded-full text-sm text-gray-300 hover:bg-purple-700/30 transition duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div
            className="relative z-10 max-w-4xl mx-auto mt-16 px-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-purple-300">
              Education
            </h2>

            <div className="bg-purple-800/10 p-5 rounded-lg border border-purple-800/20 shadow-md hover:border-purple-500/30 hover:scale-105 transition transform duration-300 ease-in">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                B.Tech in Computer Science (AI - ML)
              </h3>
              <p className="text-sm text-purple-400">
                Adani University | 2024-2028 | Gujarat
              </p>
              <p className="mt-2 text-sm sm:text-base text-gray-300">
                Currently developing strong foundations in Algorithms, AI-ML, and scalable web applications using the MERN stack.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
