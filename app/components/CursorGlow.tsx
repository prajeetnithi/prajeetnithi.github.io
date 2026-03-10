 "use client";

import { useEffect, useState } from "react";

export default function CursorGlow(): React.JSX.Element | null {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Disable effect on touch devices
    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMove = (e: MouseEvent) => {
      setVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-40 hidden md:block"
      aria-hidden="true"
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-2xl transition-transform duration-75 ease-out"
        style={{
          top: position.y,
          left: position.x,
          width: 160,
          height: 160,
        }}
      />
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-300/15 blur-lg transition-transform duration-75 ease-out"
        style={{
          top: position.y,
          left: position.x,
          width: 60,
          height: 60,
        }}
      />
    </div>
  );
}

