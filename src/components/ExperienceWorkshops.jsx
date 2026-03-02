import React from 'react';
import { motion } from 'framer-motion';

const ExperienceWorkshops = () => {
    return (
        <div className="flex flex-col items-center justify-start p-4 lg:p-12 text-center max-w-5xl mx-auto w-full">
            <h2 className="text-2xl md:text-4xl font-bold font-mono text-cyan-400 tracking-wide mb-8 uppercase tracking-widest border-b border-cyan-500/30 pb-4">Experience & Workshops</h2>

            <div className="w-full max-w-4xl mb-4">
                <div className="relative border-l-2 border-cyan-500/30 ml-3 md:ml-6 pl-6 md:pl-8 py-2 space-y-8 text-left">
                    {[
                        {
                            title: "Lead Instructor: DSA Patterns Unlocked - I",
                            audience: "2nd Year Engineering Students",
                            role: "Instructor / Mentoring",
                            // context: "Conducted an intensive offline workshop focusing on sliding window and prefix sum + hashmap techniques",
                            topics: "Designed curriculum and taught Prefix Sum arrays, Hashmaps mapping techniques, and Sliding Window fundamentals.",
                            icon: ""
                        },
                        {
                            title: "Lead Instructor: DSA Patterns Unlocked - II",
                            audience: "2nd Year Engineering Students",
                            role: "Instructor / Mentoring",
                            // context: "Delivered greedy techniques to peers to help them optimize their code efficiency.",
                            topics: "Broke down complex Greedy Techniques, providing real-time code reviews and algorithmic proofs.",
                            icon: ""
                        },
                        {
                            title: "Workshop Host: DSA 101",
                            audience: "1st Year Engineering Students",
                            role: "Facilitator",
                            // context: "Introduced incoming freshmen to the concept of binary search and its applications",
                            topics: "Led an interactive session teaching Binary Search implementations and edge case handling.",
                            icon: ""
                        },
                        {
                            title: "Online Mentorship & Career Guidance",
                            audience: "1st Year Engineering Students",
                            role: "Student Mentor",
                            // context: "Hosted a comprehensive digital session guiding juniors on starting their competitive programming journey.",
                            topics: "Curated learning resources, explained rating systems across CP platforms (LeetCode, Codeforces), and provided personalized roadmaps.",
                            icon: ""
                        }
                    ].map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15 }}
                            className="relative bg-gradient-to-r from-cyan-950/20 to-transparent border border-cyan-800/50 p-4 shrink-0 md:p-6 rounded-lg shadow-md backdrop-blur-sm hover:border-cyan-500/60 hover:bg-cyan-900/40 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] hover:-translate-y-1 transition-all duration-300 text-left group"
                        >
                            <div className="absolute -left-[28px] md:-left-[41px] top-5 md:top-6 w-3 h-3 md:w-4 md:h-4 bg-cyan-950 border-2 border-cyan-500 rounded-full group-hover:bg-cyan-500 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.4)] transition-all"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5 gap-1.5 md:gap-2">
                                <h4 className="text-base md:text-xl font-bold text-white flex items-center gap-2 leading-tight">
                                    {exp.icon && <span>{exp.icon}</span>} {exp.title}
                                </h4>
                                <span className="text-[10px] md:text-xs font-mono font-bold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 md:px-3 md:py-1 rounded border border-cyan-800 w-fit shrink-0 mt-1 sm:mt-0 text-center">
                                    {exp.role}
                                </span>
                            </div>
                            <p className="text-xs md:text-sm font-mono text-cyan-400 mb-2 tracking-wide border-b border-cyan-900/50 pb-1.5">Target Audience: {exp.audience}</p>

                            <p className="text-cyan-100/90 leading-relaxed font-mono text-xs md:text-base border-l-2 border-cyan-500/50 pl-2 md:pl-3 mb-2 md:mb-3">
                                {exp.context}
                            </p>

                            <p className="text-cyan-200/80 leading-snug md:leading-relaxed font-mono text-[11px] md:text-sm border-l-2 border-cyan-700/50 pl-2 md:pl-3">
                                <span className="text-cyan-500 font-semibold uppercase tracking-wider text-[9px] md:text-xs block mb-0.5">Execution Log:</span>
                                {exp.topics}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceWorkshops;
