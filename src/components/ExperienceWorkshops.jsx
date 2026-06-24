import React from 'react';

const ExperienceWorkshops = () => {
    return (
        <div className="flex flex-col items-center justify-start p-4 lg:p-12 text-center max-w-5xl mx-auto w-full">
            <h2 className="text-3xl md:text-5xl font-light text-burgundy tracking-wide mb-12 uppercase border-b border-burgundy/10 pb-4 editorial-title">Experience & Workshops</h2>

            <div className="w-full max-w-4xl mb-4">
                <div className="relative border-l border-burgundy/15 ml-3 md:ml-6 pl-6 md:pl-8 py-2 space-y-12 text-left">
                    {[
                        {
                            title: "Lead Instructor: DSA Patterns Unlocked - I",
                            audience: "Second Year Engineering Students",
                            role: "Instructor / Mentoring",
                            topics: "Designed curriculum and taught Prefix Sum arrays, Hashmaps mapping techniques, and Sliding Window fundamentals.",
                            icon: ""
                        },
                        {
                            title: "Lead Instructor: DSA Patterns Unlocked - II",
                            audience: "Second Year Engineering Students",
                            role: "Instructor / Mentoring",
                            topics: "Broke down complex Greedy Techniques, providing real-time code reviews and algorithmic proofs.",
                            icon: ""
                        },
                        {
                            title: "Workshop Host: DSA 101",
                            audience: "First Year Engineering Students",
                            role: "Facilitator",
                            topics: "Led an interactive session teaching Binary Search implementations and edge case handling.",
                            icon: ""
                        },
                        // {
                        //     title: "Online Mentorship & Career Guidance",
                        //     audience: "First Year Engineering Students",
                        //     role: "Student Mentor",
                        //     topics: "Curated learning resources, explained rating systems across CP platforms (LeetCode, Codeforces), and provided personalized roadmaps.",
                        //     icon: ""
                        // }
                    ].map((exp, idx) => (
                        <div
                            key={idx}
                            className="relative bg-cream-soft/30 border border-burgundy/10 p-5 md:p-6 rounded-none shadow-sm hover:border-burgundy/30 hover:bg-cream-soft/60 hover:shadow-md hover:-translate-y-1 transition-[box-shadow,transform] duration-300 text-left group reveal-element"
                        >
                            {/* Dot on the timeline */}
                            <div className="absolute -left-[28px] md:-left-[41px] top-6 md:top-7 w-3 h-3 md:w-4 md:h-4 bg-cream border border-burgundy rounded-full group-hover:bg-burgundy group-hover:scale-110 transition-all duration-350"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                                <h4 className="text-lg md:text-2xl font-light text-burgundy flex items-center gap-2 leading-tight editorial-title">
                                    {exp.title}
                                </h4>
                                <span className="text-[10px] md:text-xs font-light uppercase tracking-widest text-burgundy border border-burgundy/15 bg-cream px-3 py-1 rounded-none w-fit shrink-0 text-center">
                                    {exp.role}
                                </span>
                            </div>
                            <p className="text-xs font-light text-gold mb-3 tracking-widest uppercase pb-1.5 border-b border-burgundy/5">Target Audience: {exp.audience}</p>

                            <p className="text-charcoal/85 leading-relaxed font-sans text-sm md:text-base border-l-2 border-gold/40 pl-3 mb-3">
                                {exp.topics}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceWorkshops;
