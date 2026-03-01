import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const nodesData = [
    { id: 'core', label: 'Core / Mind', x: 50, y: 45, size: 40, desc: 'Jhanvi Patel' },
    { id: 'projects', label: 'Projects', x: 25, y: 30, size: 30, desc: 'View Projects' },
    { id: 'skills', label: 'Skills', x: 75, y: 30, size: 30, desc: 'Tech Stack' },
    { id: 'experience', label: 'Experience', x: 20, y: 65, size: 28, desc: 'Workshops' },
    { id: 'dsa', label: 'Achievements', x: 80, y: 65, size: 35, desc: 'DSA & Positions' },
    { id: 'contact', label: 'Contact', x: 50, y: 70, size: 25, desc: 'Get in Touch' }
];

const edgesData = [
    { source: 'core', target: 'projects' },
    { source: 'core', target: 'skills' },
    { source: 'core', target: 'experience' },
    { source: 'core', target: 'dsa' },
    { source: 'core', target: 'contact' },
    { source: 'projects', target: 'dsa' },
    { source: 'skills', target: 'projects' }
];

const NetworkGraph = ({ onNodeClick, onNodeHover, hoveredNode }) => {

    const getEdgeState = (source, target) => {
        if (!hoveredNode) return 'normal';
        // highlight BFS layer 1
        if (source === hoveredNode || target === hoveredNode) return 'highlight';
        return 'dimmed';
    };

    const getNodeState = (id) => {
        if (!hoveredNode) return 'normal';
        if (id === hoveredNode) return 'active';
        const isConnected = edgesData.some(
            e => (e.source === hoveredNode && e.target === id) || (e.target === hoveredNode && e.source === id)
        );
        return isConnected ? 'highlight' : 'dimmed';
    };

    return (
        <div className="w-full h-full relative" style={{ userSelect: 'none' }}>
            {/* Edges Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
                <defs>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {edgesData.map((edge, i) => {
                    const srcNode = nodesData.find(n => n.id === edge.source);
                    const tgtNode = nodesData.find(n => n.id === edge.target);
                    const state = getEdgeState(edge.source, edge.target);

                    let color = 'rgba(0, 255, 255, 0.15)';
                    let strokeWidth = 1.5;
                    let filter = 'none';

                    if (state === 'highlight') {
                        color = 'rgba(0, 255, 255, 0.6)';
                        strokeWidth = 2;
                        filter = 'none';
                    } else if (state === 'dimmed') {
                        color = 'rgba(0, 255, 255, 0.05)';
                    }

                    return (
                        <motion.line
                            key={i}
                            x1={`${srcNode.x}%`}
                            y1={`${srcNode.y}%`}
                            x2={`${tgtNode.x}%`}
                            y2={`${tgtNode.y}%`}
                            stroke={color}
                            strokeWidth={strokeWidth}
                            filter={filter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.1, ease: "easeOut" }}
                        />
                    );
                })}
            </svg>

            {/* Nodes Layer */}
            <div className="absolute inset-0 z-20">
                {nodesData.map((node, i) => {
                    const state = getNodeState(node.id);

                    let scale = 1;
                    let opacity = 1;
                    let shadow = '0 0 15px rgba(0, 255, 255, 0.2)';
                    let borderColor = 'border-cyan-500/40';

                    if (state === 'active') {
                        scale = 1.1;
                        shadow = '0 0 30px rgba(0, 255, 255, 0.8)';
                        borderColor = 'border-cyan-400';
                    } else if (state === 'highlight') {
                        scale = 1.05;
                        shadow = '0 0 20px rgba(0, 255, 255, 0.5)';
                        borderColor = 'border-cyan-500/60';
                    } else if (state === 'dimmed') {
                        scale = 0.95;
                        opacity = 0.4;
                    }

                    return (
                        <motion.div
                            key={node.id}
                            className={`absolute flex flex-col items-center justify-center cursor-pointer transition-all duration-300`}
                            style={{
                                left: `${node.x}%`,
                                top: `${node.y}%`,
                                transform: `translate(-50%, -50%) scale(${scale})`,
                                opacity: opacity,
                            }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: scale, opacity: opacity }}
                            transition={{
                                scale: { duration: 0.1, ease: "easeOut" },
                                opacity: { duration: 0.1 }
                            }}
                            onMouseEnter={() => onNodeHover(node.id)}
                            onMouseLeave={() => onNodeHover(null)}
                            onClick={() => onNodeClick(node.id)}
                        >
                            <div
                                className={`flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border ${borderColor} relative z-20`}
                                style={{
                                    width: `${node.size * 2}px`,
                                    height: `${node.size * 2}px`,
                                    boxShadow: shadow
                                }}
                            >
                                {/* Node Core Indicator */}
                                <div className="w-1/3 h-1/3 rounded-full bg-cyan-400/80 shadow-[0_0_10px_#00ffff]" />
                            </div>

                            <div className="absolute top-[100%] mt-3 text-center pointer-events-none z-30 w-48 -ml-24 left-1/2">
                                <h3 className={`text-sm md:text-base font-bold tracking-wider drop-shadow-lg ${state === 'active' ? 'text-white' : 'text-cyan-200'}`}>
                                    {node.label}
                                </h3>
                                <p className="text-xs text-cyan-500/70 font-mono mt-0.5 break-words hidden md:block drop-shadow-lg">
                                    {node.desc}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default NetworkGraph;
