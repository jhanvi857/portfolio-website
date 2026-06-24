import React from 'react';
import { motion } from 'framer-motion';

const CoreIdentity = () => {
    return (
        <div className="flex flex-col items-center justify-start p-4 lg:p-12 text-center max-w-5xl mx-auto w-full">
            {/* <h2 className="text-3xl md:text-5xl font-light text-burgundy tracking-wide mb-6 editorial-title">Jhanvi Patel</h2> */}

            <div className="w-full max-w-4xl text-charcoal leading-loose text-base md:text-lg font-light mt-4 border-l-4 border-r-4 border-gold/40 px-6 md:px-4 py-4 text-justify bg-cream-soft/60 backdrop-blur-md rounded-none shadow-md hover:shadow-xl hover:border-gold transition-all duration-500 hover:-translate-y-1 group cursor-default">
                <p>
        I build systems-level software — distributed queues, CRDT-based collaboration engines, AST-aware tooling — and back it with a{' '}
        <span className="text-burgundy font-medium group-hover:text-burgundy-light transition-colors">
            700+ problems at leetcode and specialist at codeforces.
        </span>{' '}
        Currently pursuing B.Tech in Computer Science (AI-ML) at Adani University, with one library published on{' '}
        <span className="text-burgundy font-medium group-hover:text-burgundy-light transition-colors">
            Maven Central
        </span>{' '}
        and a focus on infrastructure that holds up under real load.
    </p>
            </div>

            <div className="w-full max-w-4xl mt-16 mb-4">
                <h3 className="text-2xl font-light tracking-widest uppercase text-center text-burgundy mb-8 border-b border-burgundy/10 pb-4 editorial-title">Education</h3>
                <div className="bg-cream-soft/40 border border-burgundy/10 p-6 rounded-none text-left shadow-sm hover:border-burgundy/40 hover:bg-cream-soft/75 hover:shadow-md transition-all duration-500 hover:-translate-y-1 group cursor-default">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                        <h4 className="text-xl font-light text-burgundy group-hover:text-burgundy-dark transition-colors editorial-title">B.Tech in Computer Science (AI - ML)</h4>
                        <span className="text-xs font-light uppercase tracking-widest text-gold mt-1 sm:mt-0">2024 - 2028</span>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                        <p className="text-sm text-charcoal/70 tracking-wide font-light">Adani University, Gujarat</p>
                        <span className="text-sm font-light text-burgundy mt-1 sm:mt-0">CGPA: 8.89</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreIdentity;

