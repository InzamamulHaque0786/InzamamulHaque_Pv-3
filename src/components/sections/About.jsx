import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-24"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[var(--brand-primary)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full text-center" ref={ref}>
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Small Text - Plus Jakarta Sans (Default) */}
          {/* <p className="text-sm md:text-base font-bold mb-8 text-[var(--text-muted)] uppercase tracking-widest">
            About Me
          </p> */}
          
          {/* Large Text - Grandslang */}
          <h2 className="font-grandslang text-5xl md:text-7xl lg:text-8xl text-[var(--brand-primary)] uppercase tracking-tight leading-[1.1] mb-8">
            Full Stack Developer
          </h2>

          {/* Medium Text - Ogg Italic */}
          <p className="font-grandslang italic text-3xl md:text-4xl lg:text-5xl text-[var(--text-main)] mb-10 max-w-4xl leading-tight">
            Focused on building scalable, high-performance web applications and solving real-world engineering challenges.
          </p>

          {/* Body Text - Plus Jakarta Sans (Default) */}
          <motion.div 
            className="text-sm md:text-sm text-[var(--text-muted)] max-w-3xl leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p>
              Strong software engineering fundamentals with production SaaS development experience, 700+ LeetCode problems solved, and GATE 2026 qualification in CS&IT and Data Science & AI.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;