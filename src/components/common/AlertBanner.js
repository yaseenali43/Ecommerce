
"use client";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const alerts = [
  "⚡️ Flash Sale: Up to 50% off on Smartphones! Shop Now!",
  "🔥 Hurry Up New Arrivals: Latest Gadgets Await You!",
  "🎁 Get a Free Charger with Every Laptop Purchase!",
];

export default function AlertBanner() {
  const [currentAlert, setCurrentAlert] = useState(0);
  const [isVisible,   setIsVisible]   = useState(true);

  useEffect(() => {
    if (!isVisible) return;
    const iv = setInterval(
      () => setCurrentAlert((prev) => (prev + 1) % alerts.length),
      5000
    );
    return () => clearInterval(iv);
  }, [isVisible]);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    // <-- broadcast that the banner closed
    if (typeof window !== "undefined"){
window.dispatchEvent(new Event("alertClosed"));
    }
    
  };

  return (
    <div className="w-full bg-gradient-to-r from-secondary via-[#283041] to-secondary py-1.5 px-4 shadow-lg z-50">
      <div className="mx-auto flex justify-between items-center">
        <div
          className="animate-fadeInOut text-center  tracking-wide flex-1 "
          key={currentAlert}
        >
          <span className="text-white text-xs md:text-sm  font-medium">
            {alerts[currentAlert]}
          </span>
        </div>
        <button
          onClick={handleClose}
          className="text-white hover:text-primary transition-colors"
          aria-label="Close alert banner"
        >
          <FontAwesomeIcon icon={faTimes} className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
