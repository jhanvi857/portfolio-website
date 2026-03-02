import React from 'react';

const InfoMarquee = () => {
    return (
        <div className="w-full bg-cyan-950/80 border-y border-cyan-500/50 py-2 sm:py-3 overflow-hidden relative z-40 backdrop-blur-md">
            {/* Gradient masks for smooth fading at the edges */}
            <div className="absolute top-0 left-0 w-8 sm:w-16 h-full bg-gradient-to-r from-[#020008] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-8 sm:w-16 h-full bg-gradient-to-l from-[#020008] to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Content */}
            <div className="flex whitespace-nowrap animate-marquee">
                <div className="flex gap-8 sm:gap-16 pr-8 sm:pr-16 text-cyan-100 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold items-center">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Open for SDE Internships</span>
                    <span className="text-cyan-500/50"></span>
                    <span>Specialist on Codeforces</span>
                    <span className="text-cyan-500/50"></span>
                    <span>500+ Problems on LeetCode</span>
                    <span className="text-cyan-500/50"></span>
                    <span>Top 6.93% at LeetCode</span>
                    <span className="text-cyan-500/50"></span>
                    <span>B.Tech CSE under AI & ML</span>
                </div>

                {/* Duplicate block for seamless endless scrolling */}
                <div className="flex gap-8 sm:gap-16 pr-8 sm:pr-16 text-cyan-100 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold items-center">
                    <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span> Open for SDE Internships</span>
                    <span className="text-cyan-500/50">///</span>
                    <span>Specialist on Codeforces</span>
                    <span className="text-cyan-500/50">///</span>
                    <span>500+ Problems on LeetCode</span>
                    <span className="text-cyan-500/50">///</span>
                    <span>Top 6.93% at LeetCode</span>
                    <span className="text-cyan-500/50">///</span>
                    <span>B.Tech CSE under AI & ML</span>
                </div>
            </div>
        </div>
    );
};

export default InfoMarquee;
