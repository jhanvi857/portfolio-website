import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectsCards from './ProjectsCards';
import SkillsTree from './SkillsTree';
import DSAVisualizer from './DSAVisualizer';
import CoreIdentity from './CoreIdentity';
import ContactForm from './ContactForm';
import ExperienceWorkshops from './ExperienceWorkshops';

const ActiveNodeContent = ({ activeNode, onClose }) => {
    const contentMap = {
        'projects': <ProjectsCards />,
        'skills': <SkillsTree />,
        'dsa': <DSAVisualizer />,
        'core': <CoreIdentity />,
        'experience': <ExperienceWorkshops />,
        'contact': <ContactForm />
    };

    const titles = {
        'core': 'CORE_IDENTITY',
        'projects': 'ALGORITHM_MODULES',
        'skills': 'TECH_DEPENDENCIES',
        'experience': 'EXPERIENCE_LOG',
        'dsa': 'COMPLEXITY_VISUALIZATION',
        'contact': 'ESTABLISH_CONNECTION'
    };

    if (!activeNode) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="absolute inset-x-0 bottom-0 top-16 md:top-20 z-40 p-2 md:p-8 flex flex-col bg-black/20 backdrop-blur-sm border-t border-cyan-500/20"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
            >
                {/* Header container */}
                <div className="flex justify-between items-center mb-6 bg-black/40 p-4 rounded-xl border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-900/20 mx-auto w-full max-w-7xl">
                    <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#00ffff] animate-pulse"></div>
                        <h2 className="text-lg md:text-2xl font-mono font-bold text-cyan-200 tracking-widest uppercase">
                            {titles[activeNode] || activeNode}
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-xs md:text-sm font-mono border-2 border-red-500/60 text-red-400 hover:text-red-400 hover:scale- px-5 py-2 md:px-6 md:py-2.5 rounded-lg transition-all font-bold shadow-[0_0_10px_rgba(239,68,68,0.2)] cursor-pointer z-50 pointer-events-auto"
                    >
                        [ TERM_EXIT ]
                    </button>
                </div>

                {/* Dynamic Content */}
                <div className="flex-1 overflow-hidden relative">
                    {contentMap[activeNode]}
                </div>

            </motion.div>
        </AnimatePresence>
    );
};

export default ActiveNodeContent;


