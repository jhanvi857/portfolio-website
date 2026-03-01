import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => onComplete(), 500); // Small delay before unmounting
                    return 100;
                }
                // Random jumps for a "tech/downloading" feel
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 300);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-[#1C1E22] flex flex-col items-center justify-center font-mono overflow-hidden"
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)", transition: { duration: 0.6, ease: "easeInOut" } }}
        >
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent opacity-50"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center w-full max-w-md px-6"
            >
                {/* Spinning Core */}
                <div className="relative w-32 h-32 mb-12">
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-t-2 border-r-2 border-cyan-500/30 rounded-full"
                    />
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 border-b-2 border-l-2 border-cyan-400/50 rounded-full"
                    />
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 border-t-2 border-cyan-300/80 rounded-full shadow-[0_0_15px_rgba(217,199,163,0.5)]"
                    />
                    {/* Inner pulse */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-[38%] bg-cyan-100/90 rounded-full shadow-[0_0_20px_#F2F2F2]"
                    />
                </div>

                <div className="w-full text-center mb-2">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-cyan-100 uppercase mb-2"
                    >
                        Initializing
                    </motion.h1>
                    <p className="text-cyan-500/70 text-xs tracking-widest uppercase mb-8 h-4">
                        {progress < 30 && "Establishing Secure Connection..."}
                        {progress >= 30 && progress < 60 && "Loading Algorithm Modules..."}
                        {progress >= 60 && progress < 90 && "Compiling Neural Graph..."}
                        {progress >= 90 && "System Ready."}
                    </p>
                </div>

                {/* Progress Bar Container */}
                <div className="w-full h-1 bg-cyan-950/50 rounded-full overflow-hidden mb-4 border border-cyan-900/30">
                    <motion.div
                        className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(217,199,163,0.8)]"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut" }}
                    />
                </div>

                <div className="flex justify-between w-full text-cyan-600/60 text-[10px] tracking-widest font-mono">
                    <span>SYS.BOOT</span>
                    <span>{progress >= 100 ? '100' : progress}%</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Loader;
