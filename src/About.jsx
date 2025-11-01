// import "./App.css";
// import React from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// export const useScrollToHash = () => {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const id = location.hash.replace("#", "");
//       const element = document.getElementById(id);
//       if (element) {
//         setTimeout(() => {
//           element.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100); 
//       }
//     }
//   }, [location]);
// };
// export default function About() {
  
//   return (
//     <>
//     <div className="snow"></div>
//     <section className=" bg-black text-white flex items-center justify-center overflow-hidden px-12 pt-4 pb-16" data-aos="fade-up"
//       data-aos-delay="200">
//       {/* <div
//           className="absolute inset-0 pointer-events-none z-0
//           [background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
//           [background-size:40px_40px]"
//         />
//       <div className="absolute -top-10 -left-40 w-[300px] h-[300px] bg-purple-700 opacity-20 blur-3xl rounded-full z-0"></div>
//       <div className="absolute -bottom-20  w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0"></div> */}

//     <div className="relative min-h-screen flex flex-col justify-center items-center text-white">
      
//       {/* Content */}
//       <div className="relative z-10 max-w-4xl mx-auto text-center mt-24">
//         <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
//           About Me
//         </h1>
//         <p className="text-lg text-gray-300 leading-relaxed p-2">
//           Hello! I’m <span className="text-white font-medium">Jhanvi Patel</span>,
//           a passionate and curious learner currently pursuing B.Tech in Computer Science (2024–2028) from Gujarat.
//           I am building strong foundation in <span className="text-purple-400 font-semibold">Data structures and algorithms</span> and have a deep interest in 
//           <span className="text-purple-400 font-semibold"> web Development</span>.
        
//           My journey revolves strengthening my DSA skills through problem-solving on platforms like LeetCode and Codeforces.
//           I enjoy breaking down complex logic into clear, efficient solutions.I also love to build <span className="text-white font-medium">interactive web applications</span>, 
//         </p>
//       </div>
//         {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white mt-10 text-center px-4">
//   My hobbies and interests beyond coding
// </h1> */}

// {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-12 lg:px-48" data-aos="fade-up"
//               data-aos-delay="200"> */}
//   {/* Hobby 1 */}
//   {/* <div className="bg-purple-800/20 p-5 rounded-lg text-center text-white hover:scale-105 transition transform delay-200 ease-in">
//     <span className="text-3xl">📷</span>
//     <p className="mt-2 font-semibold text-lg">Nature Photography</p>
//     <p className="mt-2 text-sm text-gray-200">
//       🌿 Apart from programming, I enjoy spending time outdoors and capturing the beauty of nature.
//     </p>
//   </div>

//   <div className="bg-purple-800/20 p-5 rounded-lg text-center text-white hover:scale-105 transition transform delay-200 ease-in">
//     <span className="text-3xl">🎶</span>
//     <p className="mt-2 font-semibold text-lg">Singing</p>
//     <p className="mt-2 text-sm text-gray-200">
//       🎤 I'm also passionate about singing. Music has always been a creative outlet that keeps me refreshed and balanced.
//     </p>
//   </div>

//   <div className="bg-purple-800/20 p-5 rounded-lg text-center text-white hover:scale-105 transition transform delay-200 ease-in">
//     <span className="text-3xl">🏸</span>
//     <p className="mt-2 font-semibold text-lg">Badminton</p>
//     <p className="mt-2 text-sm text-gray-200">
//       🏸 I love playing badminton. It's a great way for me to stay active and energized.
//     </p>
//   </div>
// </div> */}

// {/* Education Section */}
// <div className="relative z-10 max-w-4xl mx-auto mt-20 px-4" data-aos="fade-up"
//               data-aos-delay="200">
//   <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-purple-300 text-center">
//     Education
//   </h2>

//   <div className="space-y-6 text-left text-gray-300">
//     <div className="bg-purple-800/20 p-5 rounded-lg border border-purple-800/5 shadow-md hover:scale-105 transition transform delay-200 ease-in">
//       <h3 className="text-lg sm:text-xl font-semibold text-white">
//         B.Tech in Computer Science (AI-ML)
//       </h3>
//       <p className="text-sm text-purple-400">
//         Adani University | 2024 – 2028 | Gujarat
//       </p>
//       <p className="mt-2 text-sm sm:text-base">
//         Currently pursuing Computer Science Engineering with a strong focus on Data Structures, Algorithms, and web Development.
//       </p>
//     </div>
//   </div>
// </div>
// </div>
//     </section>
//     </>
//   );
// }
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
