import React from 'react';
import { motion } from 'framer-motion';

const SkillsTree = () => {
    return (
        <div className="flex flex-col items-center justify-start p-2 lg:p-8 rounded-xl bg-black/20 relative overflow-y-auto h-full w-full mx-auto">
            <h3 className="text-xl md:text-3xl font-bold text-center text-cyan-400 mb-8 font-mono border-b border-cyan-500/30 pb-4 inline-block tracking-widest uppercase">My Skills Dependency Tree</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto pb-10">
                {[
                    { title: "Languages", nodes: ["Python", "Java", "C", "JavaScript"] },
                    { title: "CS Fundamentals", nodes: ["DSA", "OOP", "OS", "CN"] },
                    { title: "Frontend", nodes: ["HTML", "CSS", "Tailwind CSS", "React.js", "React Native"] },
                    { title: "Backend", nodes: ["Node.js", "Express.js", "FastAPI"] },
                    { title: "Database", nodes: ["MongoDB", "PostgreSQL"] },
                    { title: "Tools", nodes: ["Git & GitHub", "VS Code", "Postman"] }
                ].map((group, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="flex flex-col items-center bg-gradient-to-br from-cyan-950/40 to-black p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-colors shadow-lg shadow-cyan-900/10"
                    >
                        <div className="text-cyan-300 font-bold mb-6 tracking-widest uppercase text-lg border-b border-cyan-500/30 w-full text-center pb-2">{group.title}</div>
                        <div className="flex flex-col gap-3 w-full">
                            {group.nodes.map((node, j) => (
                                <div key={j} className="text-center py-3 bg-cyan-900/20 border-l-4 border-cyan-500 text-cyan-100 font-mono text-sm hover:bg-cyan-900/50 hover:text-white transition-all hover:scale-[1.02] rounded-r-md cursor-crosshair">
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
