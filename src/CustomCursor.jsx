// CustomCursor.jsx
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Outer crosshair */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-cyan-500/50 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(0,255,255,0.2)] flex items-center justify-center transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      >
        {/* Inner dot */}
        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-sm shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
      </div>
    </>
  );
}
