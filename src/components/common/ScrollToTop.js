
// components/ScrollToTop.jsx
"use client";

import { useState, useEffect, useCallback } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? scrollY / docHeight : 0;
    setProgress(pct);
    setIsVisible(scrollY > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  if (!isVisible) return null;

  // SVG circle params
  const size = 48;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-22 z-50 cursor-pointer right-10 w-12 h-12 rounded-full shadow-lg bg-secondary flex items-center justify-center"
    >
      <svg
        width={size}
        height={size}
        className="absolute top-0 left-0"
      >
        {/* background ring */}
        <circle
          cx={size/2}
          cy={size/2}
          r={radius}
          stroke="#fff"      /* gray-200 */
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* progress ring */}
        <circle
          cx={size/2}
          cy={size/2}
          r={radius}
          stroke="#f50963"      /* pink */
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
          transform={`rotate(-90 ${size/2} ${size/2})`}
        />
      </svg>

      {/* arrow icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white relative"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
