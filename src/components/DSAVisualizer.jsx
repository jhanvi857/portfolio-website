import React from 'react';
import { motion } from 'framer-motion';

const DSAVisualizer = () => {
    return (
        <div className="flex flex-col h-full rounded-xl p-2 lg:p-8 overflow-y-auto w-full max-w-5xl mx-auto">
            <h3 className="text-xl md:text-3xl font-bold font-mono text-center text-cyan-400 mb-10 border-b border-cyan-500/30 pb-4 tracking-widest uppercase">Achievements & Positions</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full">
                <div className="flex flex-col gap-4">
                    <h4 className="text-cyan-300 font-bold text-lg mb-2 tracking-wide border-l-2 border-cyan-500 pl-3">DSA & Problem Solving</h4>
                    {[
                        "Solved 500+ DSA problems on LeetCode (top 6.93%)",
                        "Specialist on Codeforces (Max rating: 1500)",
                        "Java 5 star | Problem solving silver badge on HackerRank",
                    ].map((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.15 }}
                            key={i} className="bg-gradient-to-r from-cyan-900/20 to-transparent border border-cyan-800/50 p-5 rounded-lg text-sm md:text-base text-cyan-100 flex items-start gap-4 shadow-md backdrop-blur-none"
                        >
                            <span className="text-cyan-400 text-xl mt-[-2px]">◈</span>
                            <span className="leading-relaxed">{item}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-cyan-300 font-bold text-lg mb-2 tracking-wide border-l-2 border-cyan-500 pl-3">Positions & Roles</h4>
                    {[
                        "DSA & CP Team Member at Adani Student Programming and Development Club",
                        "Trainer at Adani University Robotics Club",
                    ].map((item, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (i * 0.15) }}
                            key={i} className="bg-gradient-to-r from-cyan-900/20 to-transparent border border-cyan-800/50 p-5 rounded-lg text-sm md:text-base text-cyan-100 flex items-start gap-4 shadow-md backdrop-blur-none"
                        >
                            <span className="text-cyan-400 text-xl mt-[-2px]">◈</span>
                            <span className="leading-relaxed">{item}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <h4 className="text-center font-bold text-cyan-400 text-xl uppercase tracking-widest mb-8 border-b-2 border-cyan-900 pb-3 w-fit mx-auto">CP Profiles</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-auto pb-10">
                {[
                    { name: "LeetCode", stats: "500+ Problems", extra: "Top 6.93%", url: "https://leetcode.com/u/jhanvi857", img: "https://leetcode.com/static/images/LeetCode_logo_rvs.png" },
                    { name: "Codeforces", stats: "Specialist", extra: "Max Rating: 1500", url: "https://codeforces.com/profile/jhanvi.857", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3LVEIg_6x2wqlPG8pruOUnUi-wEvnw1eC0w&s" },
                    { name: "HackerRank", stats: "Java 5 Star", extra: "Silver Badge", url: "https://www.hackerrank.com/profile/jhanvip8507", img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" }
                ].map((cp, j) => (
                    <motion.a
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + (j * 0.1) }}
                        key={j} href={cp.url} target="_blank" rel="noreferrer"
                        className="group bg-gradient-to-b from-black/80 to-cyan-950/30 border border-cyan-500/30 p-8 rounded-xl hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all flex flex-col items-center gap-4 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                        <img src={cp.img} alt={cp.name} className="w-16 h-16 object-contain filter group-hover:brightness-125 transition-all" />
                        <div className="text-center">
                            <h4 className="text-cyan-300 font-bold text-xl mb-2 group-hover:text-cyan-100">{cp.name}</h4>
                            <p className="text-sm text-cyan-300 font-mono tracking-wide">{cp.stats}</p>
                            <p className="text-xs text-cyan-500/80 font-mono mt-1">{cp.extra}</p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default DSAVisualizer;
