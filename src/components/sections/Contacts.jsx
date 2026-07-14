import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaInstagram, FaPhone } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const Contacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section 
      id="contacts" 
      // Changed py-24 to pt-32 pb-10 to clear the navbar and fit the screen
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-32 pb-10 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-[var(--brand-primary)]/20 rounded-[100%] blur-[120px] pointer-events-none" />

      {/* Added flex, flex-col, and justify-between to manage inner spacing */}
      <div className="max-w-5xl mx-auto w-full text-center z-10 flex flex-col h-full justify-between" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center mt-auto"
        >
          {/* Reduced margins on all text elements */}
          <p className="text-sm md:text-base font-bold mb-4 text-[var(--text-muted)] uppercase tracking-widest">
            What's Next
          </p>
          
          <h2 className="font-grandslang text-6xl md:text-8xl lg:text-9xl text-[var(--text-main)] uppercase tracking-tight leading-[1.1] mb-4">
            Get In Touch
          </h2>

          <p className="font-grandslang italic text-3xl md:text-4xl lg:text-5xl text-[var(--text-muted)] mb-10 max-w-3xl">
            Let's build something extraordinary together.
          </p>

          <div className="flex flex-col items-center gap-6 mb-14">
            <a 
              href="mailto:inzamamulhaque0614@gmail.com"
              className="group flex items-center gap-4 text-xl md:text-2xl font-medium text-[var(--text-main)] hover:text-[var(--brand-primary)] transition-colors duration-300"
            >
              <SiGmail className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
              <span>inzamamulhaque0614@gmail.com</span>
            </a>

            <a 
              href="tel:+916207456425"
              className="group flex items-center gap-4 text-xl md:text-2xl font-medium text-[var(--text-main)] hover:text-[var(--brand-primary)] transition-colors duration-300"
            >
              <FaPhone className="w-6 h-6 md:w-8 md:h-8 group-hover:scale-110 transition-transform" />
              <span>+91 6207456425</span>
            </a>
          </div>
        </motion.div>

        {/* Footer Icons & Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          // Reduced padding top and gap, added mt-auto to push to bottom naturally
          className="flex flex-col items-center gap-8 border-t border-[var(--border-light)] w-full pt-8 mt-auto"
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

export default Contacts;