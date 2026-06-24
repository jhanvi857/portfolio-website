import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Loader from './components/Loader';
import ProjectsCards from './components/ProjectsCards';
import SkillsTree from './components/SkillsTree';
import DSAVisualizer from './components/DSAVisualizer';
import CoreIdentity from './components/CoreIdentity';
import ContactForm from './components/ContactForm';
import ExperienceWorkshops from './components/ExperienceWorkshops';

// Register GSAP ScrollTrigger and SplitText plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

// Scroll-linked Parallax Background Component using GSAP
// const ParallaxBackground = ({ src, opacity = 0.08 }) => {
//     const containerRef = useRef(null);
//     const bgRef = useRef(null);

//     useEffect(() => {
//         const container = containerRef.current;
//         const bg = bgRef.current;
//         if (!container || !bg) return;

//         const tween = gsap.fromTo(bg,
//             { yPercent: -12 },
//             {
//                 yPercent: 12,
//                 ease: "none",
//                 scrollTrigger: {
//                     trigger: container,
//                     start: "top bottom",
//                     end: "bottom top",
//                     scrub: true
//                 }
//             }
//         );

//         return () => {
//             if (tween.scrollTrigger) {
//                 tween.scrollTrigger.kill();
//             }
//             tween.kill();
//         };
//     }, []);

//     return (
//         <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
//             <div
//                 ref={bgRef}
//                 className="absolute inset-0 bg-cover bg-center"
//                 style={{
//                     backgroundImage: `url(${src})`,
//                     opacity,
//                     scale: 1.15
//                 }}
//             />
//         </div>
//     );
// };
// Scroll-linked Parallax Background Component using GSAP
const ParallaxBackground = ({ src, opacity = 0.12 }) => {
    const containerRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const bg = bgRef.current;
        if (!container || !bg) return;

        // Set the base scale ONCE via gsap.set so GSAP "owns" the transform
        // (yPercent tweens will compose with this instead of overwriting it)
        gsap.set(bg, { scale: 1.15 });

        const tween = gsap.fromTo(bg,
            { yPercent: -12 },
            {
                yPercent: 12,
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
        );

        return () => {
            if (tween.scrollTrigger) {
                tween.scrollTrigger.kill();
            }
            tween.kill();
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div
                ref={bgRef}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${src})`,
                    opacity
                }}
            />
        </div>
    );
};

const AlgorithmUniverse = () => {
    const [loading, setLoading] = useState(true);
    const appRef = useRef(null);

    // Stable callback for Loader completion to prevent interval restart
    const handleLoadComplete = useCallback(() => {
        setLoading(false);
    }, []);

    const scrollToSection = (id) => {
        if (!id) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // GSAP Entrance, Magnetic, and Scroll Trigger Animations
    useEffect(() => {
        if (loading) return;

        const listenerCleanups = [];

        // Wrapped in gsap.context for React cleanup
        const ctx = gsap.context(() => {
            // 1. Hero Text Split Reveal using SplitText
            const heroSplit = new SplitText(".hero-title", {
                type: "words,chars",
                wordsClass: "overflow-hidden inline-block",
                charsClass: "inline-block split-char select-none"
            });

            gsap.from(heroSplit.chars, {
                yPercent: 100,
                stagger: 0.04,
                duration: 1.2,
                ease: "power4.out"
            });

            gsap.from(".hero-line", {
                scaleX: 0,
                opacity: 0,
                duration: 1.2,
                delay: 0.4,
                ease: "power3.out"
            });

            gsap.from(".hero-sub", {
                y: 40,
                opacity: 0,
                duration: 1,
                delay: 0.6,
                ease: "power3.out"
            });

            gsap.from(".hero-btn", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 0.9,
                ease: "power2.out"
            });

            // 2. Magnetic Pull Hover Effect for premium buttons/elements with listener cleanup
            const magnetics = gsap.utils.toArray(".magnetic-target");
            magnetics.forEach((item) => {
                const onMouseMove = (e) => {
                    const rect = item.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    gsap.to(item, {
                        x: x * 0.35,
                        y: y * 0.35,
                        duration: 0.35,
                        ease: "power2.out"
                    });
                };
                const onMouseLeave = () => {
                    gsap.to(item, {
                        x: 0,
                        y: 0,
                        duration: 0.8,
                        ease: "elastic.out(1.1, 0.45)"
                    });
                };
                item.addEventListener("mousemove", onMouseMove);
                item.addEventListener("mouseleave", onMouseLeave);

                // Store closures in cleanup array
                listenerCleanups.push(() => {
                    item.removeEventListener("mousemove", onMouseMove);
                    item.removeEventListener("mouseleave", onMouseLeave);
                });
            });

            // 3. Scroll progress bar animation
            gsap.to(".scroll-progress", {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true
                }
            });

            // 4. ScrollTrigger reveal animation for sections with SplitText titles and center-out staggers
            console.log("Found reveal-sections:", gsap.utils.toArray(".reveal-section").map(s => s.id));
            gsap.utils.toArray(".reveal-section").forEach((sec) => {
                const title = sec.querySelector(".reveal-title");
                const elements = sec.querySelectorAll(".reveal-element");
                console.log("Section ID:", sec.id, "Title exists:", !!title, "Elements count:", elements.length, "Elements info:", Array.from(elements).map(el => el.tagName + '.' + el.className.split(' ').filter(c => c).join('.')));

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sec,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                });

                if (title) {
                    try {
                        const titleSplit = new SplitText(title, {
                            type: "words,chars",
                            wordsClass: "overflow-hidden inline-block",
                            charsClass: "inline-block split-char"
                        });
                        
                        tl.from(titleSplit.chars, {
                            yPercent: 100,
                            stagger: 0.03,
                            duration: 0.8,
                            ease: "power4.out"
                        });
                        console.log("Successfully split and added title animation for", sec.id);
                    } catch (err) {
                        console.error("Failed SplitText on title of section", sec.id, ":", err.message);
                    }
                }

                if (elements.length > 0) {
                    tl.from(elements, {
                        y: 50,
                        opacity: 0,
                        stagger: {
                            each: 0.1,
                            from: "center"
                        },
                        duration: 0.9,
                        ease: "power3.out"
                    }, "-=0.5");
                    console.log("Successfully added reveal elements animation for", sec.id);
                }
            });

            // 5. Scroll Velocity Skew effect on titles
            ScrollTrigger.create({
                onUpdate: (self) => {
                    const velocity = self.getVelocity() / -400; // Normalized velocity
                    const skewVal = gsap.utils.clamp(-8, 8, velocity);
                    gsap.to(".split-char", { 
                        skewX: skewVal,
                        duration: 0.5,
                        ease: "power2.out",
                        overwrite: "auto"
                    });
                }
            });
        }, appRef);

        // Refresh ScrollTrigger after conditionally rendered components paint to DOM
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        return () => {
            clearTimeout(timer);
            listenerCleanups.forEach((cleanup) => cleanup());
            ctx.revert();
        };
    }, [loading]);

    return (
        <div ref={appRef} className="relative w-full bg-burgundy-deep text-cream font-sans tracking-wide min-h-screen">
            <AnimatePresence>
                {loading && <Loader onComplete={handleLoadComplete} />}
            </AnimatePresence>

            {/* Premium Scroll Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 bg-burgundy-dark/30 pointer-events-none">
                <div
                    className="scroll-progress h-full bg-gold origin-left scale-x-0"
                />
            </div>

            {/* Navbar Layer */}
            <nav className="fixed top-0 left-0 w-full z-45 backdrop-blur-xl bg-burgundy-deep/90 border-b border-gold/15 flex items-center justify-between px-6 py-4 transition-all duration-300">
                <div
                    className="text-2xl font-light tracking-widest text-cream cursor-pointer editorial-title magnetic-target"
                    onClick={() => scrollToSection(null)}
                >
                    JHANVI PATEL
                </div>

                <div className="hidden md:flex space-x-8 text-cream-soft text-sm font-light uppercase tracking-widest">
                    <button className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('home')}>Home</button>
                    <button className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('about')}>About</button>
                    <button className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('skills')}>Skills</button>
                    <button className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('achievements')}>Achievements</button>
                    <button className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('projects')}>Projects</button>
                    <button className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('experience')}>Experience</button>
                    <button className="hover:text-gold transition-colors cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</button>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="/Jhanvi_patel_SWE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-block border border-gold/40 text-gold hover:bg-gold hover:text-burgundy px-5 py-2 text-xs uppercase tracking-widest rounded-none transition-all duration-300 font-light magnetic-target"
                    >
                        Resume
                    </a>
                </div>
            </nav>

            {/* Scrollable Container - Conditional render prevents double loading/rendering */}
            {!loading && (
                <div className="w-full flex flex-col">
                    {/* HERO PANEL */}
                    <section
                        id="home"
                        className="portfolio-section bg-burgundy-deep px-6 h-screen overflow-hidden"
                    >
                        {/* <ParallaxBackground src="/image_hero.png" opacity={0.12} /> */}
                        <div className="max-w-4xl text-center z-10 flex flex-col items-center">
                            <h1 className="hero-title text-6xl sm:text-7xl md:text-9xl font-extralight tracking-tight text-cream mb-4 editorial-title select-none">
                                Jhanvi Patel
                            </h1>
                            <div className="w-24 h-px bg-gold my-6 hero-line" />
                            <p className="text-xl sm:text-2xl md:text-3xl text-cream-soft italic-serif font-light max-w-2xl leading-relaxed hero-sub select-none">
                                Building elegant software with clean algorithms and structured, premium design.
                            </p>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="mt-12 px-8 py-3.5 border border-gold/40 text-gold hover:bg-gold hover:text-burgundy text-xs uppercase tracking-widest transition-all duration-300 font-light cursor-pointer shadow-sm hover:shadow-lg hero-btn magnetic-target"
                            >
                                Explore Portfolio
                            </button>
                        </div>

                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold/60 text-[10px] tracking-widest uppercase pointer-events-none">
                            <span>Scroll Down</span>
                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-1 h-3 border border-gold/60 rounded-full flex justify-center pt-0.5"
                            >
                                <div className="w-0.5 h-1 bg-gold rounded-full" />
                            </motion.div>
                        </div>
                    </section>

                    {/* ABOUT PANEL */}
                    <section
                        id="about"
                        className="portfolio-section bg-cream text-charcoal reveal-section"
                    >
                    {/* <ParallaxBackground src="/cream_bg.png" opacity={0.12} /> */}
                        <div className="w-full max-w-7xl mx-auto px-6 z-10">
                            <div className="flex flex-col items-center mb-6 text-center">
                                <span className="text-gold font-light uppercase tracking-widest text-xs mb-2 reveal-element">01 / Profile</span>
                                <h2 className="reveal-title text-3xl md:text-5xl font-light text-burgundy tracking-wide editorial-title py-1">
                                    Core Identity
                                </h2>
                                <div className="w-12 h-[2px] bg-burgundy/20 mt-3 reveal-element" />
                            </div>
                            <div className="reveal-element">
                                <CoreIdentity />
                            </div>
                        </div>
                    </section>

                    {/* SKILLS PANEL */}
                    <section
                        id="skills"
                        className="portfolio-section bg-burgundy-deep text-cream reveal-section"
                    >
                    {/* <ParallaxBackground src="/image_flower.png" opacity={0.10} /> */}

                        <div className="w-full max-w-7xl mx-auto px-6 z-10">
                            <div className="flex flex-col items-center mb-6 text-center">
                                <span className="text-gold-light font-light uppercase tracking-widest text-xs mb-2 reveal-element">02 / Technical Dependencies</span>
                                <h2 className="reveal-title text-3xl md:text-5xl font-light text-cream tracking-wide editorial-title py-1">
                                    Skills & Knowledge
                                </h2>
                                <div className="w-12 h-[2px] bg-gold/30 mt-3 reveal-element" />
                            </div>
                            <div className="w-full">
                                <SkillsTree />
                            </div>
                        </div>
                    </section>

                    {/* ACHIEVEMENTS PANEL */}
                    <section
                        id="achievements"
                        className="portfolio-section bg-cream text-charcoal reveal-section"
                    >
                        {/* <ParallaxBackground src="/image_hero.png" opacity={0.12} /> */}

                        <div className="w-full max-w-7xl mx-auto px-6 z-10">
                            <div className="flex flex-col items-center mb-6 text-center">
                                <span className="text-gold font-light uppercase tracking-widest text-xs mb-2 reveal-element">03 / Performance Metrics</span>
                                <h2 className="reveal-title text-3xl md:text-5xl font-light text-burgundy tracking-wide editorial-title py-1">
                                    Achievements & Profiles
                                </h2>
                                <div className="w-12 h-[2px] bg-burgundy/20 mt-3 reveal-element" />
                            </div>
                            <div className="w-full">
                                <DSAVisualizer />
                            </div>
                        </div>
                    </section>

                    {/* PROJECTS PANEL */}
                    <section
                        id="projects"
                        className="portfolio-section bg-burgundy-deep text-cream reveal-section"
                    >
                        {/* <ParallaxBackground src="/image_flower.png" opacity={0.10} /> */}
                        <div className="w-full max-w-7xl mx-auto px-6 z-10 flex flex-col justify-center h-full">
                            <div className="flex flex-col items-center mb-6 text-center">
                                <span className="text-gold-light font-light uppercase tracking-widest text-xs mb-2 reveal-element">04 / Selected Work</span>
                                <h2 className="reveal-title text-3xl md:text-5xl font-light text-cream tracking-wide editorial-title py-1">
                                    Algorithm Modules
                                </h2>
                                <div className="w-12 h-[2px] bg-gold/30 mt-3 reveal-element" />
                            </div>
                            <div className="w-full">
                                <ProjectsCards />
                            </div>
                        </div>
                    </section>

                    {/* EXPERIENCE PANEL */}
                    <section
                        id="experience"
                        className="portfolio-section bg-cream text-charcoal reveal-section"
                    >
                        {/* <ParallaxBackground src="/image.png" opacity={0.12} /> */}
                        <div className="w-full max-w-7xl mx-auto px-6 z-10">
                            <div className="flex flex-col items-center mb-6 text-center">
                                <span className="text-gold font-light uppercase tracking-widest text-xs mb-2 reveal-element">05 / Experience Log</span>
                                <h2 className="reveal-title text-3xl md:text-5xl font-light text-burgundy tracking-wide editorial-title py-1">
                                    Workshops & Mentoring
                                </h2>
                                <div className="w-12 h-[2px] bg-burgundy/20 mt-3 reveal-element" />
                            </div>
                            <div className="w-full">
                                <ExperienceWorkshops />
                            </div>
                        </div>
                    </section>

                    {/* CONTACT PANEL */}
                    <section
                        id="contact"
                        className="portfolio-section bg-burgundy-deep text-cream reveal-section"
                    >
                        {/* <ParallaxBackground src="/burgundy_bg.png" opacity={0.12} /> */}
                        <div className="w-full max-w-7xl mx-auto px-6 z-10">
                            <div className="flex flex-col items-center mb-6 text-center">
                                <span className="text-gold-light font-light uppercase tracking-widest text-xs mb-2 reveal-element">06 / Connect</span>
                                <h2 className="reveal-title text-3xl md:text-5xl font-light text-cream tracking-wide editorial-title py-1">
                                    Establish Connection
                                </h2>
                                <div className="w-12 h-[2px] bg-gold/30 mt-3 reveal-element" />
                            </div>
                            <div className="reveal-element">
                                <ContactForm />
                            </div>
                        </div>
                    </section>

                    {/* Footer Layer */}
                    <footer className="relative w-full py-12 bg-burgundy-dark text-center border-t border-gold/10">
                        <p className="text-cream-soft/60 text-xs font-light tracking-widest uppercase">
                            &copy; {new Date().getFullYear()} Jhanvi Patel. Crafted with premium design & clean code.
                        </p>
                    </footer>
                </div>
            )}
        </div>
    );
};

export default AlgorithmUniverse;