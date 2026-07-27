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
          
          {/* MENU TOGGLE - Now adds a subtle dark circular background when open */}
          <MagneticButton
            onClick={() => setIsOpen(!isOpen)}
            className={`p-4 rounded-full focus:outline-none transition-all duration-700 ease-[0.65,0,0.35,1] ${
              isOpen 
                ? 'bg-[#1e2125]/10 hover:bg-[#1e2125]/20' // Creates a beautifully subtle darker shade on the light menu
                : 'bg-transparent hover:bg-[#efeae1]/10' 
            }`}
            aria-label="Toggle Menu"
          >
            {/* 
              This wrapper reaches INSIDE the MenuToggle component. 
              It forces any spans (CSS lines) or paths (SVG lines) to transition 
              smoothly between white and dark over 700ms.
            */}
            <div 
              className={`flex items-center justify-center transition-colors duration-700 ease-[0.65,0,0.35,1] [&_span]:transition-colors [&_span]:duration-700 [&_path]:transition-colors [&_path]:duration-700 ${
                isOpen 
                  ? 'text-[#1e2125] [&_span]:bg-[#1e2125] [&_path]:stroke-[#1e2125] [&_path]:fill-[#1e2125]' 
                  : 'text-[#efeae1] [&_span]:bg-[#efeae1] [&_path]:stroke-[#efeae1] [&_path]:fill-[#efeae1]'
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