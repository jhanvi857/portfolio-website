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
      {/* Outer gold ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-gold/60 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(197,168,128,0.2)] flex items-center justify-center transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      >
        {/* Inner gold dot */}
        <div className="w-1.5 h-1.5 bg-gold rounded-full shadow-[0_0_8px_rgba(197,168,128,0.6)]" />
      </div>
    </>
  );
}

