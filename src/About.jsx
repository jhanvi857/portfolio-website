import "./App.css";
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
        }, 100); 
      }
    }
  }, [location]);
};
export default function About() {
  
  return (
    <>
    <div className="snow"></div>
    <section className=" bg-black text-white flex items-center justify-center overflow-hidden px-12 pt-4 pb-16" data-aos="fade-up"
      data-aos-delay="200">
      {/* <div
          className="absolute inset-0 pointer-events-none z-0
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:40px_40px]"
        />
      <div className="absolute -top-10 -left-40 w-[300px] h-[300px] bg-purple-700 opacity-20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -bottom-20  w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0"></div> */}

    <div className="relative min-h-screen flex flex-col justify-center items-center text-white">
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-24">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
          About Me
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed p-2">
          Hello! I’m <span className="text-white font-medium">Jhanvi Patel</span>,
          a passionate and curious learner currently pursuing B.Tech in Computer Science (2024–2028) from Gujarat.
          I am building strong foundation in <span className="text-purple-400 font-semibold">Data structures and algorithms</span> and have a deep interest in 
          <span className="text-purple-400 font-semibold"> web Development</span>.
        
          My journey revolves strengthening my DSA skills through problem-solving on platforms like LeetCode and Codeforces.
          I enjoy breaking down complex logic into clear, efficient solutions.I also love to build <span className="text-white font-medium">interactive web applications</span>, 
        </p>
      </div>
        {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white mt-10 text-center px-4">
  My hobbies and interests beyond coding
</h1> */}

{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12 lg:px-48" data-aos="fade-up"
              data-aos-delay="200"> */}
  {/* Hobby 1 */}
  {/* <div className="bg-purple-800/20 p-5 rounded-lg text-center text-white hover:scale-105 transition transform delay-200 ease-in">
    <span className="text-3xl">📷</span>
    <p className="mt-2 font-semibold text-lg">Nature Photography</p>
    <p className="mt-2 text-sm text-gray-200">
      🌿 Apart from programming, I enjoy spending time outdoors and capturing the beauty of nature.
    </p>
  </div>

  <div className="bg-purple-800/20 p-5 rounded-lg text-center text-white hover:scale-105 transition transform delay-200 ease-in">
    <span className="text-3xl">🎶</span>
    <p className="mt-2 font-semibold text-lg">Singing</p>
    <p className="mt-2 text-sm text-gray-200">
      🎤 I'm also passionate about singing. Music has always been a creative outlet that keeps me refreshed and balanced.
    </p>
  </div>

  <div className="bg-purple-800/20 p-5 rounded-lg text-center text-white hover:scale-105 transition transform delay-200 ease-in">
    <span className="text-3xl">🏸</span>
    <p className="mt-2 font-semibold text-lg">Badminton</p>
    <p className="mt-2 text-sm text-gray-200">
      🏸 I love playing badminton. It's a great way for me to stay active and energized.
    </p>
  </div>
</div> */}

{/* Education Section */}
<div className="relative z-10 max-w-4xl mx-auto mt-20 px-4" data-aos="fade-up"
              data-aos-delay="200">
  <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-purple-300 text-center">
    Education
  </h2>

  <div className="space-y-6 text-left text-gray-300">
    <div className="bg-purple-800/20 p-5 rounded-lg border border-purple-800/5 shadow-md hover:scale-105 transition transform delay-200 ease-in">
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
