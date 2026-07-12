import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const customEase = [0.76, 0, 0.24, 1];

  // The Background Curve Math
  const curveVariants = {
    initial: {
      d: "M0 0 L100 0 L100 100 Q50 100 0 100 Z",
    },
    exit: {
      d: "M0 0 L100 0 L100 0 Q50 -30 0 0 Z",
      transition: { duration: 1.2, ease: customEase, delay: 0.15 }, 
    },
  };

  // The Logo Math
  const logoVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.3, ease: 'easeOut' }, 
    },
    exit: {
      // Moves completely off the top of the screen
      y: "-100vh", 
      // Opacity stays solid. Timing is strictly locked to match the background curve perfectly
      transition: { duration: 1.2, ease: customEase, delay: 0.15 },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0, delay: 1.5 } }}
          className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
        >
          {/* The Morphing SVG Background */}
          <svg
            className="absolute inset-0 w-[100vw] h-[100vh] text-[#050505]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.path
              fill="currentColor"
              variants={curveVariants}
              initial="initial"
              exit="exit"
            />
          </svg>

          {/* The Logo Image */}
          <motion.div
            variants={logoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative z-10"
          >
            <img 
              src="/image.png" 
              alt="Logo" 
              className="w-10 md:w-10 lg:w-10 h-auto object-contain rounded-full" 
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;