import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        // Cut in half: Starts moving while the preloader is still sweeping up
        delayChildren: 0.5,
      },
    },
  };

  // 100% pushes the element exactly outside the boundaries of its overflow wrapper
  const maskedRise = {
    hidden: { y: "100%" },
    show: {
      y: "0%",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      // FIX: Changed from 100dvh to 100svh to completely eliminate mobile scroll jitter
      className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 pt-16"
    >
      {/* Restored Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-[var(--brand-primary)]/40 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 md:w-[30rem] md:h-[30rem] bg-[var(--text-muted)]/30 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center select-none"
      >
        {/* Line 1: Small Tag */}
        <div className="overflow-hidden mb-4 md:mb-2">
          <motion.div variants={maskedRise}>
            <p className="text-xs font-bold tracking-[0.25em] text-[var(--text-muted)] uppercase">
              Full Stack Developer
            </p>
          </motion.div>
        </div>

        {/* Line 2: CRAFTING */}
        <div className="overflow-hidden">
          <motion.div variants={maskedRise}>
            <h1 className="font-grandslang  text-6xl md:text-9xl lg:text-[11.5rem] uppercase  text-[var(--text-main)] leading-[1]">
              CReating
            </h1>
          </motion.div>
        </div>

        {/* Line 3: Digital - Pulled up with negative margin */}
        <div className="overflow-hidden -mt-0 md:-mt-8 lg:-mt-6">
          <motion.div variants={maskedRise}>
            <h1 className="font-grandslang text-6xl md:text-9xl lg:text-[11.5rem] uppercase  text-[var(--text-main)] leading-[1]">
              Digital
            </h1>
          </motion.div>
        </div>

        {/* Line 4: EXPERIENCES - Pulled up with negative margin */}
        <div className="overflow-hidden -mt-2 md:-mt-6 lg:-mt-8">
          <motion.div variants={maskedRise}>
            <h2 className="font-grandslang lowercase italic text-6xl md:text-7xl lg:text-9xl text-[var(--brand-primary)] leading-[1]">
              EXPERIENCES
            </h2>
          </motion.div>
        </div>

        {/* Line 5: Mixed Structural Line - Pulled up with negative margin */}
        <div className="overflow-hidden -mt-1 md:-mt-3 lg:-mt-5">
          <motion.div 
            variants={maskedRise}
            className="flex items-baseline justify-center gap-3 leading-[1]"
          >
            <span className="font-grandslang lowercase font-extralight  text-xl md:text-3xl lg:text-4xl text-[var(--text-main)]">
              that
            </span>
            <span className="font-grandslang lowercase italic text-6xl md:text-6xl lg:text-8xl font-extrabold text-[var(--text-main)]">
              inspire
            </span>
          </motion.div>
        </div>

        {/* Animated Down Arrow Button */}
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 20 },
            // Pulled forward so it gracefully fades in as the last text finishes moving
            show: { opacity: 1, y: 0, transition: { delay: 1.5, duration: 0.6 } }
          }}
          className="mt-16 md:mt-6"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border border-[var(--border-light)] text-[var(--text-main)] hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] transition-colors duration-300 group shadow-md"
            aria-label="Scroll down to projects"
          >
            <motion.svg 
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </motion.svg>
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;