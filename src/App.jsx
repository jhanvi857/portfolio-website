import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from "react";
import { FaBars,FaTimes } from "react-icons/fa";
import Home from "./Home";
import About from "./About";
import { Footer } from "./ContactAndFooter";
import CustomCursor from "./CustomCursor";
function App() {
  useEffect(() => {
  AOS.init({
    duration: 800,     // animation duration
    once: true,        // only animate once
    easing: 'ease-out',
  });
}, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        <CustomCursor/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About />} />
    </Routes>
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10 shadow-md" data-aos="fade-down">
        <div className="hidden sm:max-w-7xl mx-auto px-6 py-4 sm:flex items-center justify-between">
          <h1 className="hidden sm:inline text-2xl font-bold text-white">Jhanvi</h1>

          <div className="hidden md:flex space-x-6 text-gray-300 font-medium">
            <Link
              to="/"
              className="relative px-2 py-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="relative px-2 py-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </Link>
            <Link
              to="/#projects"
              className="relative px-2 py-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Projects
            </Link>
            <Link
              to="/#skills"
              className="relative px-2 py-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Skills
            </Link>
            <Link
              to="/#contact"
              className="relative px-2 py-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </Link>
          </div>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vS4swmzdcXeSdUXUmOqURPi3R6W5wBDg5RJwhRcHLG0KJW-CT1F0ymdIWAvmTvVwt4qWEpGg_25TpFH/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 hidden cursor-pointer md:inline-block border border-white text-white hover:text-purple-500 px-4 py-2 rounded-md hover:-translate-y-1 transition duration-300 font-semibold shadow-md"
          >
            Resume
          </a>
        </div>
        {/* Mobile Menu Icon */}
        <div className="flex items-center justify-between w-full content-center px-4 py-4 sm:hidden">
        <h1 className="text-2xl font-bold text-white">Jhanvi</h1>
        <div className="md:hidden text-white text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes/> : <FaBars/>}
        </div>
      </div>

      {/* </div> */}

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white px-6 pb-4 pt-2 space-y-3">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) =>
            item === "Home" ? (
              <Link
                to="/"
                key={item}
                className="block text-lg font-medium hover:text-purple-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ) : (
              <Link
                to={`/#${item.toLowerCase()}`}
                key={item}
                className="block text-lg font-medium hover:text-purple-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            )
          )}
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vS4swmzdcXeSdUXUmOqURPi3R6W5wBDg5RJwhRcHLG0KJW-CT1F0ymdIWAvmTvVwt4qWEpGg_25TpFH/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-4 py-2 rounded-md font-semibold shadow-md"
          >
            Resume
          </a>
        </div>
      )}
      </nav>
      <Footer/>
      </>
  );
}

export default App;
