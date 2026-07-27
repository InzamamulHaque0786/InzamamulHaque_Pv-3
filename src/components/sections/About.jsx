import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const About = () => {
  const ref = useRef(null);

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
      <div className="max-w-5xl mx-auto w-full" ref={ref}>
        <div className="flex flex-col items-center">
          
          {/* HEADING: ONLY ONCE */}
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }} 
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-center font-grandslang py-8 text-5xl md:text-7xl lg:text-8xl text-[var(--brand-primary)] uppercase tracking-tight leading-[.7] mb-12"
          >
            About 
            <br />
            <span className="font-grandslang italic lowercase font-normal text-[var(--text-main)]">
              me
            </span>
          </motion.h2>

          {/* 
            CHANGED: Increased mobile gap to gap-40 (160px) to absorb the 150px drop.
            Desktop remains completely unaffected with lg:gap-12.
          */}
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-40 lg:gap-12">
            
            {/* BIO TEXT */}
            <motion.p 
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              // CHANGED: Margin reduced to -10% so it triggers much earlier and smoother on mobile screens
              viewport={{ once: false, margin: "10000px 0px -10% 0px" }} 
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans text-1xl md:text-2xl lg:text-2xl text-[var(--text-main)] max-w-3xl"
            >
              Hi, I'm Inzamamul Haque. I build full-stack applications that solve
              real-world problems. I enjoy turning complex ideas into reliable
              software through clean code, thoughtful design, and practical
              engineering. Whether I'm developing backend services, crafting
              responsive user interfaces, or improving existing systems, I strive
              to build applications that are efficient, maintainable, and deliver
              a great user experience.
            </motion.p>

            {/* BADGE: ONLY ONCE */}
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex-shrink-0 self-center lg:self-center"
            >
              <a
                href="https://drive.google.com/file/d/1qFGxCJUR_QD6amhWaP4ehub8r8G1Fn_n/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-52 h-52 select-none cursor-pointer group"
                aria-label="View Resume"
              >
                {/* Rotating Text Ring */}
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
                          className="absolute text-2xl md:text-lg font-grandslang tracking-widest text-[var(--text-main)]"
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

                {/* Central Button */}
                <div className="w-28 h-28 rounded-full border border-[var(--border-light)] glass-panel bg-[var(--bg-base)]/80 flex flex-col items-center justify-center text-center shadow-lg group-hover:border-[var(--brand-primary)] group-hover:scale-105 transition-all duration-300 z-10">
                  <span className="font-grandslang font-bold text-2xl md:text-base tracking-wider uppercase text-[var(--text-main)] leading-tight">
                    Push
                  </span>
                  <span className="font-grandslang font-bold text-2xl md:text-base tracking-wider uppercase text-[var(--text-main)] leading-tight">
                    Me!
                  </span>
                </div>
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;