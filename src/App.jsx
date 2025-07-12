import "./App.css";
import { Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Footer } from "./ContactAndFooter";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About />} />
    </Routes>
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/30 border-b border-white/10 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">Jhanvi</h1>

          <div className="hidden md:flex space-x-6 text-gray-300 font-medium">
            <Link
              to="/"
              className="relative px-2 py-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
            <a
              href="#about"
              className="relative px-2 py-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              className="relative px-2 py-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="relative px-2 py-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="relative px-2 py-1 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-purple-500 hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>
          </div>
          <a
            // href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 hidden md:inline-block bg-white text-black px-4 py-2 rounded-md hover:-translate-y-1 transition duration-300 font-semibold shadow-md"
          >
            Resume
          </a>
        </div>
      </nav>
      <Footer/>
      </>
  );
}

export default App;
