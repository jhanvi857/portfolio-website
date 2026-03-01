import React from 'react';
import { motion } from 'framer-motion';

const ExperienceWorkshops = () => {
    return (
        <div className="flex flex-col items-center justify-start p-4 lg:p-12 text-center h-full overflow-y-auto max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold font-mono text-cyan-400 tracking-wide mb-8 uppercase tracking-widest border-b border-cyan-500/30 pb-4">Experience & Workshops</h2>

            <div className="w-full max-w-4xl mb-4">
                <div className="relative border-l-2 border-cyan-500/30 ml-3 md:ml-6 pl-6 md:pl-8 py-2 space-y-8 text-left">
                    {[
                        {
                            title: "DSA patterns Unlocked workshop 1",
                            audience: "2nd Year Students",
                            type: "Offline",
                            topics: "Prefix Sum + Hashmap, Sliding Window",
                            icon: ""
                        },
                        {
                            title: "DSA patterns Unlocked workshop 2",
                            audience: "2nd Year Students",
                            type: "Offline",
                            topics: "Greedy Techniques",
                            icon: ""
                        },
                        {
                            title: "DSA 101",
                            audience: "1st Year Students",
                            type: "Offline",
                            topics: "Binary Search",
                            icon: ""
                        },
                        {
                            title: "Online Mentorship Session",
                            audience: "1st Year Students",
                            type: "Online",
                            topics: "Intro, Resources & Platforms for DSA, CP Platform Ratings & Explanations",
                            icon: ""
                        }
                    ].map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: idx * 0.15 }}
                            className="relative bg-gradient-to-r from-cyan-900/20 to-transparent border border-cyan-800/50 p-5 md:p-6 rounded-lg shadow-md backdrop-blur-sm hover:border-cyan-500/50 transition-colors text-left group"
                        >
                            <div className="absolute -left-[32px] md:-left-[41px] top-6 w-4 h-4 bg-cyan-950 border-2 border-cyan-400 rounded-full group-hover:bg-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                                <h4 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                                    <span>{exp.icon}</span> {exp.title}
                                </h4>
                                <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded border border-cyan-800 w-fit">
                                    {exp.type}
                                </span>
                            </div>
                            <p className="text-sm font-mono text-cyan-400 mb-3 tracking-wide">Target Audience: {exp.audience}</p>
                            <p className="text-cyan-100/80 leading-relaxed font-mono text-sm md:text-base border-l-2 border-cyan-500/50 pl-3">
                                <span className="text-cyan-200 font-semibold">Topics Covered:</span> {exp.topics}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceWorkshops;
