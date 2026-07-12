import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Default curve depth for desktop (-50)
  const [curveDepth, setCurveDepth] = useState(-50);

  useEffect(() => {
    // Detect mobile view on load and soften the curve so it doesn't get too sharp
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setCurveDepth(-20); 
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50); 
    return () => clearTimeout(timer);
  }, []);

  const customEase = [0.76, 0, 0.24, 1];

  const curveVariants = {
    initial: {
      d: "M0 0 L100 0 L100 100 Q50 100 0 100 Z",
    },
    exit: {
      // Injects the dynamic curveDepth variable (-50 for desktop, -20 for mobile)
      d: `M0 0 L100 0 L100 0 Q50 ${curveDepth} 0 0 Z`,
      transition: { duration: 1, ease: customEase }, 
    },
  };

  const logoVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.2, ease: 'easeOut' }, 
    },
    exit: {
      y: "-100vh", 
      transition: { duration: 1, ease: customEase },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0, delay: 1 } }}
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