import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaInstagram, FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  // 1. Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 2. Map the scroll progress to horizontal movement (Parallax effect)
  // "something" moves Left to Right
  const somethingX = useTransform(scrollYProgress, [0, 1], [-30, 50]); 
  // "TOGETHER" moves Right to Left
  const togetherX = useTransform(scrollYProgress, [0, 1], [60, -50]);

  return (
    <section 
      id="contact" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-32 pb-10 overflow-hidden"
    >
      {/* Background ambient glow removed completely */}

      <div className="max-w-5xl mx-auto w-full text-center z-10 flex flex-col h-full justify-between" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mt-auto"
        >
          
          {/* 
            =========================================
            NEW TYPOGRAPHY LAYOUT 
            Replicated exactly from the provided design inspiration
            =========================================
          */}
          <div className="flex flex-col items-center justify-center mb-14 w-full">
            
            {/* Top Row: Let's create something */}
            <div className="flex items-center justify-center gap-3 md:gap-5">
              <div className="flex  flex-col text-right font-cardo italic text-3xl md:text-4xl lg:text-6xl leading-[0.7] text-[var(--text-main)] pt-4">
                <span>Let's</span>
                <span>create</span>
              </div>
              
              {/* ANIMATED: something (Left to Right) */}
              <motion.span 
                style={{ x: somethingX, display: "inline-block" }}
                className="font-cardo italic lowercase text-7xl md:text-8xl lg:text-[9.5rem] text-[var(--text-main)] leading-none tracking-tight"
              >
                something
              </motion.span>
            </div>

            {/* Middle Row: MEANINGFUL (Static) */}
            <h2 className="font-cardo italic uppercase text-5xl md:text-[6.5rem] lg:text-[9.5rem] text-[var(--text-main)] leading-[0.9] tracking-tight mt-2 md:mt-4">
              MEANINGFUL
            </h2>

            {/* Bottom Row: TOGETHER (but not Forever) */}
            <div className="flex items-baseline justify-center gap-2 md:gap-4 mt-4 md:mt-6">
              
              {/* ANIMATED: TOGETHER (Right to Left) */}
              <motion.span 
                style={{ x: togetherX, display: "inline-block" }}
                className="font-cardo italic font-extrabold uppercase text-4xl md:text-5xl lg:text-6xl text-[var(--text-main)] tracking-wider"
              >
                TOGETHER
              </motion.span>
            
            </div>
            
          </div>

          {/* 
            =========================================
            CONTACT DETAILS (UNCHANGED)
            =========================================
          */}
          <div className="flex flex-col items-center gap-6 md:gap-3 mb-14">
            <a 
              href="mailto:inzamamulhaque0614@gmail.com"
              className="group flex items-center gap-4 text-sm md:text-xl font-medium text-[var(--text-main)] hover:text-[var(--brand-primary)] transition-colors duration-300"
            >
              <SiGmail className="w-6 h-6 md:w-8 md:h-8 transition-transform" />
              <span>inzamamulhaque0614@gmail.com</span>
            </a>

            <a 
              href="tel:+916207456425"
              className="group flex items-center gap-4 text-sm md:text-xl font-medium text-[var(--text-main)] hover:text-[var(--brand-primary)] transition-colors duration-300"
            >
              <FaPhone className="w-6 h-6 md:w-8 md:h-8 transition-transform" />
              <span>+91 6207456425</span>
            </a>
          </div>
        </motion.div>

        {/* 
          =========================================
          FOOTER (UNCHANGED)
          =========================================
        */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center gap-2 border-t border-[var(--border-light)] w-full pt-8 mt-auto"
        >
          <div className="flex gap-8 md:gap-12">
            <a 
              href="https://github.com/InzamamulHaque0786" 
              aria-label="GitHub" 
              className="text-[var(--text-main)] hover:text-[var(--brand-primary)] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/inzamamulhaque786/" 
              aria-label="LinkedIn" 
              className="text-[var(--text-main)] hover:text-[var(--brand-primary)] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <FaLinkedinIn size={32} />
            </a>
            <a 
              href="https://www.instagram.com/inzamam_1409/" 
              aria-label="Instagram" 
              className="text-[var(--text-main)] hover:text-[var(--brand-primary)] hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <FaInstagram size={32} />
            </a>
          </div>
          
          <p className="text-sm md:text-base text-[var(--text-muted)] font-medium">
            © {new Date().getFullYear()} Inzamamul Haque. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;