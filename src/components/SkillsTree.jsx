import React from 'react';

const SkillsTree = () => {
    return (
        <div className="flex flex-col items-center justify-start p-2 lg:p-8 rounded-none bg-transparent relative w-full flex-1 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto pb-10">
                {[
                    { title: "Languages", nodes: ["Python", "Java", "Golang", "C", "JavaScript"] },
                    { title: "CS Fundamentals", nodes: ["DSA", "OOP", "OS", "CN", "System Design"] },
                    { title: "Frontend", nodes: ["HTML", "CSS", "Tailwind CSS", "React.js", "React Native"] },
                    { title: "Backend", nodes: ["Node.js", "Express.js", "FastAPI"] },
                    { title: "Database", nodes: ["MongoDB", "PostgreSQL","SQLite"] },
                    { title: "Tools", nodes: ["Git & GitHub", "VS Code", "Postman", "Docker"] }
                ].map((group, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center bg-burgundy-dark p-6 rounded-none border border-gold/25 hover:border-gold/50 hover:bg-burgundy-dark/65 transition-[box-shadow,transform] duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 group reveal-element"
                    >
                        <div className="text-gold font-light mb-6 tracking-widest uppercase text-base border-b border-gold/10 w-full text-center pb-2 group-hover:text-gold-light group-hover:border-gold/30 transition-colors duration-300">{group.title}</div>
                        <div className="flex flex-col gap-3 w-full">
                            {group.nodes.map((node, j) => (
                                <div key={j} className="text-center py-2.5 bg-burgundy-dark/20 border-l-2 border-gold text-cream-soft font-sans text-sm hover:bg-burgundy-light/30 hover:text-cream transition-all duration-300 hover:scale-[1.01] rounded-none cursor-default shadow-sm">
                                    {node}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
        </div>
    );
};

export default SkillsTree;
