import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // Increased rotation speed by multiplying scroll progression factor
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1080]);

  // Text loop for the rotating circle badge
const textString = "View Resume - View Resume - ";
  const characters = textString.split("");

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[var(--brand-primary)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full" ref={ref}>
        <motion.div
          className="flex flex-col items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Heading */}
          <h2 className="font-grandslang text-5xl md:text-7xl lg:text-8xl text-[var(--brand-primary)] uppercase tracking-tight leading-[1.1] mb-12">
            About Me
          </h2>

          {/* Desktop: Text on Left, Rotating Button on Right | Mobile: Stacked */}
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            
            {/* Left Side: Bio Text */}
            <p className="font-sans text-1xl md:text-2xl lg:text-2xl text-[var(--text-main)] max-w-3xl ">
              Hi, I'm Inzamamul Haque. I build full-stack applications that solve
              real-world problems. I enjoy turning complex ideas into reliable
              software through clean code, thoughtful design, and practical
              engineering. Whether I'm developing backend services, crafting
              responsive user interfaces, or improving existing systems, I strive
              to build applications that are efficient, maintainable, and deliver
              a great user experience.
            </p>

            {/* Right Side: Rotating Badge Button linking to Google Drive Resume */}
            <div className="flex-shrink-0 self-center lg:self-center">
              <a
                href="https://drive.google.com/file/d/1qFGxCJUR_QD6amhWaP4ehub8r8G1Fn_n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-52 h-52 select-none cursor-pointer group"
                aria-label="View Resume"
              >
                {/* Rotating Text Ring - Perfectly concentric with adjusted radius matching exact container center */}
                <motion.div 
                  style={{ rotate }}
                  className="absolute inset-0 w-full h-full rounded-full flex items-center justify-center pointer-events-none"
                >
                  <div className="w-full h-full relative flex items-center justify-center">
                    {characters.map((char, i) => {
                      const angle = (i / characters.length) * 360;
                      return (
                        <span
                          key={i}
                          className="absolute  text-2xl md:text-lg font-grandslang  tracking-widest text-[var(--text-main)] "
                          style={{
                            transform: `rotate(${angle}deg) translateY(-84px)`,
                            transformOrigin: "center center",
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Central Button - Perfectly centered & sized */}
                <div className="w-28 h-28 rounded-full border border-[var(--border-light)] glass-panel bg-[var(--bg-base)]/80 flex flex-col items-center justify-center text-center shadow-lg group-hover:border-[var(--brand-primary)] group-hover:scale-105 transition-all duration-300 z-10">
                  <span className="font-grandslang font-bold text-2xl md:text-base tracking-wider uppercase text-[var(--text-main)] leading-tight">
                    Push
                  </span>
                  <span className="font-grandslang font-bold text-2xl md:text-base tracking-wider uppercase text-[var(--text-main)] leading-tight">
                    Me!
                  </span>
                </div>
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;