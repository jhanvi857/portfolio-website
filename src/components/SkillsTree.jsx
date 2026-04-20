import React from 'react';
import { motion } from 'framer-motion';

const SkillsTree = () => {
    return (
        <div className="flex flex-col items-center justify-start p-2 lg:p-8 rounded-xl bg-black/20 relative w-full flex-1 mx-auto">
            <h3 className="text-xl md:text-3xl font-bold text-center text-cyan-400 mb-8 font-mono border-b border-cyan-500/30 pb-4 inline-block tracking-widest uppercase">My Skills Dependency Tree</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto pb-10">
                {[
                    { title: "Languages", nodes: ["Python", "Java","Golang", "C", "JavaScript"] },
                    { title: "CS Fundamentals", nodes: ["DSA", "OOP", "OS", "CN","System design"] },
                    { title: "Frontend", nodes: ["HTML", "CSS", "Tailwind CSS", "React.js", "React Native"] },
                    { title: "Backend", nodes: ["Node.js", "Express.js", "FastAPI"] },
                    { title: "Database", nodes: ["MongoDB", "PostgreSQL"] },
                    { title: "Tools", nodes: ["Git & GitHub", "VS Code", "Postman","Docker"] }
                ].map((group, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="flex flex-col items-center bg-gradient-to-br from-cyan-950/40 to-black p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/80 hover:bg-cyan-900/40 transition-all duration-300 shadow-lg shadow-cyan-900/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)] hover:-translate-y-1 group"
                    >
                        <div className="text-cyan-300 font-bold mb-6 tracking-widest uppercase text-lg border-b border-cyan-500/30 w-full text-center pb-2 group-hover:text-cyan-100 group-hover:border-cyan-500/80 transition-colors duration-300">{group.title}</div>
                        <div className="flex flex-col gap-3 w-full">
                            {group.nodes.map((node, j) => (
                                <div key={j} className="text-center py-3 bg-cyan-900/20 border-l-4 border-cyan-500 text-cyan-100 font-mono text-sm hover:bg-cyan-800/80 hover:text-cyan-50 transition-all duration-300 hover:scale-[1.02] rounded-r-md cursor-crosshair shadow-sm hover:shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                                    {node}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
        </div>
    );
};

export default SkillsTree;
