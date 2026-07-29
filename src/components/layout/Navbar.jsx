import { useState, useEffect } from "react";
import MagneticButton from "../ui/MagneticButton";
import MenuToggle from "../ui/MenuToggle";
import FullScreenMenu from "./FullScreenMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Force dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-6 py-2 flex justify-between items-center pointer-events-none">
        
        {/* 1. LOGO - Fades out completely when menu opens */}
        <div className={`pointer-events-auto transition-all duration-700 ease-[0.65,0,0.35,1] ${isOpen ? 'opacity-0 scale-95' : 'opacity-100'}`}>
          <MagneticButton>
            <div className="flex flex-col text-[var(--text-main)] uppercase tracking-widest leading-[0.85] pl-4">
              <span>INZAMAMUL</span>

              <div className="ml-4 relative flex items-center">
                <svg
                  className="absolute -left-4 w-3 h-3 text-[var(--text-main)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                </svg>
                <span>HAQUE</span>
              </div>
            </div>
          </MagneticButton>
        </div>

        <div className="flex items-center gap-4 z-50 pointer-events-auto">
          
          {/* MENU TOGGLE 
              FIX 1: Changed transition-all to transition-colors.
              This stops the 700ms delay from applying to the physical magnetic mouse tracking.
          */}
          <MagneticButton
            onClick={() => setIsOpen(!isOpen)}
            className={`p-4 rounded-full focus:outline-none transition-colors duration-700 ease-[0.65,0,0.35,1] ${
              isOpen 
                ? 'bg-[#1e21258b]/10' // Subtle dark circular background
                : 'bg-transparent' 
            }`}
            aria-label="Toggle Menu"
          >
            {/* 
              FIX 2: Strict color definitions for Open (Black) and Closed (White).
            */}
            <div 
              className={`flex items-center justify-center transition-colors duration-700 ease-[0.65,0,0.35,1] [&_span]:transition-colors [&_span]:duration-700 [&_path]:transition-colors [&_path]:duration-700 ${
                isOpen 
                  ? 'text-[#1e2125] [&_span]:bg-[#1e2125] [&_path]:stroke-[#1e2125] [&_path]:fill-[#1e2125]' // Cross is Black
                  : 'text-[#ffff] [&_span]:bg-[#ffff] [&_path]:stroke-[#ffff] [&_path]:fill-[#ffff]' // Bars are White
              }`}
            >
              <MenuToggle isOpen={isOpen} />
            </div>
          </MagneticButton>
        </div>
      </nav>

      <FullScreenMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;