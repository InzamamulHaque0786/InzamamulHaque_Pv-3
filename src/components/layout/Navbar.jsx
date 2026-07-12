import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import MagneticButton from "../ui/MagneticButton";
import MenuToggle from "../ui/MenuToggle";
import FullScreenMenu from "./FullScreenMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const applyTheme = (willBeDark) => {
    if (willBeDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    }
  };

  const toggleTheme = (e) => {
    const willBeDark = !isDark;

    if (!document.startViewTransition) {
      applyTheme(willBeDark);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      applyTheme(willBeDark);
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];

      if (willBeDark) {
        document.documentElement.animate(
          { clipPath: [...clipPath].reverse() },
          {
            duration: 600,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-old(root)",
            fill: "forwards",
          }
        );
      } else {
        document.documentElement.animate(
          { clipPath: clipPath },
          {
            duration: 600,
            easing: "ease-in-out",
            pseudoElement: "::view-transition-new(root)",
            fill: "forwards",
          }
        );
      }
    });
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-6 py-2 flex justify-between items-center">
        
        {/* 1. LOGO - Fades out completely when menu opens */}
        <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'}`}>
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

        <div className="flex items-center gap-4 z-50">
          
          {/* 2. DARK MODE TOGGLE - Fades out completely when menu opens */}
          <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0 pointer-events-none scale-95' : 'opacity-100'}`}>
            <MagneticButton>
              <button
                onClick={toggleTheme}
                className="relative w-10 h-10 flex items-center justify-center rounded-full text-[var(--text-main)] hover:text-[var(--brand-primary)] transition-all duration-300 focus:outline-none overflow-hidden"
                aria-label="Toggle Dark Mode"
              >
                <motion.div
                  initial={false}
                  animate={{
                    scale: isDark ? 0 : 1,
                    rotate: isDark ? 90 : 0,
                    opacity: isDark ? 0 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute flex items-center justify-center"
                >
                  <Sun size={20} />
                </motion.div>

                <motion.div
                  initial={false}
                  animate={{
                    scale: isDark ? 1 : 0,
                    rotate: isDark ? 0 : -90,
                    opacity: isDark ? 1 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="absolute flex items-center justify-center"
                >
                  <Moon size={20} />
                </motion.div>
              </button>
            </MagneticButton>
          </div>

          {/* 3. MENU TOGGLE - Stays visible so you can close the menu */}
          <MagneticButton
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[var(--text-main)] focus:outline-none hover:text-[var(--brand-primary)] transition-colors"
            aria-label="Toggle Menu"
          >
            <MenuToggle isOpen={isOpen} />
          </MagneticButton>
        </div>
      </nav>

      <FullScreenMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;