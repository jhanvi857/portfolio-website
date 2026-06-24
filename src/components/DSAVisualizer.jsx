import React from 'react';

const DSAVisualizer = () => {
    return (
        <div className="flex flex-col rounded-none p-1 lg:p-4 w-full flex-1 max-w-5xl mx-auto justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 w-full">
                <div className="flex flex-col gap-3">
                    <h4 className="text-burgundy font-light text-base mb-1 tracking-widest uppercase border-l-2 border-burgundy pl-3 editorial-title">DSA & Problem Solving</h4>
                    {[
                        "Solved 700+ DSA problems on LeetCode (top 6.93%)",
                        "Specialist on Codeforces (Max rating: 1500)",
                        "Java 5 star | Problem solving silver badge on HackerRank",
                    ].map((item, i) => (
                        <div
                            key={i} 
                            className="bg-cream-soft/40 border border-burgundy-deep/10 p-4 rounded-none text-xs md:text-sm text-charcoal/90 flex items-start gap-3 shadow-sm hover:border-burgundy-deep/25 hover:bg-cream-soft/65 hover:-translate-y-0.5 transition-[box-shadow,transform] duration-300 group reveal-element"
                        >
                            <span className="text-burgundy text-base mt-[-2px] group-hover:text-burgundy-light transition-colors duration-300">◈</span>
                            <span className="leading-relaxed group-hover:text-charcoal transition-colors duration-300">{item}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-burgundy font-light text-base mb-1 tracking-widest uppercase border-l-2 border-burgundy pl-3 editorial-title">Positions & Roles</h4>
                    {[
                        "DSA & CP Team Member at Adani Student Programming and Development Club",
                        "Trainer at Adani University Robotics Club",
                    ].map((item, i) => (
                        <div
                            key={i} 
                            className="bg-cream-soft/40 border border-burgundy-deep/10 p-4 rounded-none text-xs md:text-sm text-charcoal/90 flex items-start gap-3 shadow-sm hover:border-burgundy-deep/25 hover:bg-cream-soft/65 hover:-translate-y-0.5 transition-[box-shadow,transform] duration-300 group reveal-element"
                        >
                            <span className="text-burgundy text-base mt-[-2px] group-hover:text-burgundy-light transition-colors duration-300">◈</span>
                            <span className="leading-relaxed group-hover:text-charcoal transition-colors duration-300">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            <h4 className="text-center mt-12 font-light text-burgundy text-lg uppercase tracking-widest mb-4 border-b border-burgundy-deep/10 pb-2 w-fit mx-auto editorial-title reveal-element">Competitive Programming Profiles</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-auto pb-4">
                {[
                    { name: "LeetCode", stats: "700+ Problems", extra: "Top 6.93%", url: "https://leetcode.com/u/jhanvi857", img: "https://leetcode.com/static/images/LeetCode_logo_rvs.png" },
                    { name: "Codeforces", stats: "Specialist", extra: "Max Rating: 1500", url: "https://codeforces.com/profile/jhanvi.857", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3LVEIg_6x2wqlPG8pruOUnUi-wEvnw1eC0w&s" },
                    { name: "HackerRank", stats: "Java 5 Star", extra: "Silver Badge", url: "https://www.hackerrank.com/profile/jhanvip8507", img: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/160_Hackerrank_logo_logos-512.png" }
                ].map((cp, j) => (
                    <a
                        key={j} href={cp.url} target="_blank" rel="noreferrer"
                        className="group bg-cream-soft/40 border border-burgundy-deep/10 p-5 rounded-none hover:border-burgundy-deep/25 hover:-translate-y-1 hover:shadow-md transition-[box-shadow,transform] duration-500 flex flex-col items-center gap-3 relative overflow-hidden reveal-element"
                    >
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-burgundy-deep to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-500"></div>
                        <img src={cp.img} alt={cp.name} className="w-12 h-12 object-contain filter group-hover:brightness-125 group-hover:scale-105 transition-all duration-300" />
                        <div className="text-center">
                            <h4 className="text-burgundy font-light text-lg mb-1 group-hover:text-burgundy-light transition-colors editorial-title">{cp.name}</h4>
                            <p className="text-xs text-charcoal/80 font-sans tracking-wide group-hover:text-charcoal transition-colors">{cp.stats}</p>
                            <p className="text-[10px] text-burgundy/60 font-sans mt-0.5 group-hover:text-burgundy transition-colors">{cp.extra}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default DSAVisualizer;
