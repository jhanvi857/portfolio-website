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
    <div
className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] shadow-[0_0_8px_4px_rgba(255,255,255,0.3)]"
      style={{
        transform: `translate(${position.x - 6}px, ${position.y - 6}px)`,
        transition: "transform 0.05s ease-out",
      }}
    />
  );
}
