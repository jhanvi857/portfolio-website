import "./App.css";
import { Router, Route, Link, Routes } from "react-router-dom";
import SkillsSection from "./SkillSection";
import ProjectsSection from "./ProjectsSection";
import DSAStats from "./DSAStats";
import { ContactSection } from "./ContactAndFooter";
import About,{useScrollToHash} from "./About";
function Home() {
  useScrollToHash();
  return (
    <>
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-6 pt-32 pb-16">
        {/* Grid BG */}
        <div
          className="absolute inset-0 pointer-events-none z-0
          [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]
          [background-size:40px_40px]"
        />

        {/* Bubble BG */}
        <div
          className="absolute -top-20 -right-36 w-[400px] h-[400px] 
          rounded-full bg-gradient-to-br from-purple-700 to-violet-500 
          opacity-25 blur-3xl z-0 pointer-events-none"
        />
        <div className="absolute -top-0 -left-40 w-[300px] h-[300px] bg-purple-700 opacity-20 blur-3xl rounded-full z-0"></div>
        <div className="absolute -top-0 -left-40 w-[300px] h-[300px] bg-purple-700 opacity-20 blur-3xl rounded-full z-0"></div>
        {/* Animated line behind (optional) */}
        <div className="absolute top-1/2 left-0 w-full h-[2px] bg-purple-500 opacity-10 animate-backgroundTealLine blur-md z-0" />

        <div className="relative z-10 text-center max-w-4xl">
          <div className="relative inline-block" id="about">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
            >
              Hey there! I’m{" "}
              <span className="text-purple-400">Jhanvi Patel</span>
            </h1>
            <div className="absolute left-0 -bottom-2 w-full h-[2px] bg-purple-400 animate-lineSwipe rounded-full opacity-80" />
          </div>

          <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed">
            I’m a passionate full-stack developer and aspiring software enginner
            pursuing B.Tech in Computer Science (2024–2028) from Gujarat. I love
            solving complex problems with clean code and modern technologies
            like React, Tailwind CSS, Node.js, and MongoDB. With a keen interest
            in Data Structures & Algorithms, I enjoy solving problems and
            optimizing performance.
          </p>

          <Link
            data-aos="zoom-in"
            data-aos-delay="600"
            to="/about"
            className="inline-block mt-10 px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-md text-white font-medium shadow-md"
          >
            More about me
          </Link>
        </div>
      </section>
      <section id="skills" className="min-h-screen bg-black" data-aos="fade-up">
        <SkillsSection />
      </section>
      <section id="achievements" className="min-h-screen bg-black" data-aos="fade-up">
        <DSAStats />
      </section>
      <section id="projects" className="min-h-screen bg-black" data-aos="fade-up">
        <ProjectsSection />
      </section>

      

      <section id="contact" className="min-h-screen bg-black" data-aos="fade-up">
        <ContactSection />
      </section>
    </>
  );
}

export default Home;
