import { motion } from "framer-motion";

const PortfolioMarquee = () => {
  // We use 6 items per block to ensure it fully covers even ultra-wide monitors.
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-24 md:p-64 overflow-hidden bg-[#1e2125] flex items-center relative">
      
      {/* 
        Optional Edge Fades: 
        These create a smooth fade-in/fade-out effect at the edges of the screen. 
        If you want the text to touch the very edge, just delete these two divs!
      */}
      {/* <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-[#1e2125] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-[#1e2125] to-transparent z-10 pointer-events-none" /> */}

      {/* 
        The Marquee Container
      */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 200, // Slowed down from 35 for a premium feel
        }}
      >
        {/* ===================== SET 1 ===================== */}
        <div className="flex gap-8 md:gap-16 pr-8 md:pr-16 items-center">
          {items.map((item, i) => (
            <div key={`set1-${i}`} className="flex items-center gap-8 md:gap-16">
              <span className="font-grandslang italic text-[35vw] md:text-[22vw] leading-none uppercase text-[var(--text-main)]">
                Portfolio
              </span>
              <span className="font-grandslang text-[35vw] md:text-[22vw] leading-none text-[var(--text-main)]">
                .
              </span>
            </div>
          ))}
        </div>

        {/* ===================== SET 2 (Duplicate) ===================== */}
        <div className="flex gap-8 md:gap-16 pr-8 md:pr-16 items-center">
          {items.map((item, i) => (
            <div key={`set2-${i}`} className="flex items-center gap-8 md:gap-16">
              <span className="font-grandslang italic text-[35vw] md:text-[22vw] leading-none uppercase text-[var(--text-main)]">
                Portfolio
              </span>
              <span className="font-grandslang text-[35vw] md:text-[22vw] leading-none text-[var(--text-main)]">
                .
              </span>
            </div>
          ))}
        </div>
      </motion.div>
      
    </section>
  );
};

export default PortfolioMarquee;