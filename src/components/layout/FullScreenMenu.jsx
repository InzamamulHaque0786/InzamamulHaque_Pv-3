import { motion, AnimatePresence } from 'framer-motion';

const FullScreenMenu = ({ isOpen, setIsOpen }) => {
  const navLinks = ['About', 'Skills', 'Works', 'Contact'];

  const customEase = [0.65, 0, 0.35, 1];
  const driftEase = [0.22, 1, 0.36, 1]; 

  // 1. The Background Panel Animation
  const menuVariants = {
    initial: { y: '-100%' },
    animate: {
      y: 0,
      transition: { duration: 1.2, ease: customEase },
    },
    exit: {
      y: '-100%',
      // Drastically reduced delay so the panel immediately "chases" the text up
      transition: { duration: 1, ease: customEase, delay: 0.3 }, 
    },
  };

  // 2. The Text Stagger Controller
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.48, // Unchanged: The exact 40% entry you liked
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05, // Much tighter, snappier stagger on the way out
        staggerDirection: -1, 
      },
    },
  };

  // 3. The "Masked Rise" Cinematic Drift Reveal
  const linkVariants = {
    initial: { y: '150%' },
    animate: {
      y: ['150%', '10%', '0%'],
      transition: { 
        duration: 1.6, 
        times: [0, 0.45, 1], 
        ease: [ 
          customEase, 
          driftEase   
        ] 
      },
    },
    exit: {
      y: '150%',
      // Faster drop out of sight so the menu feels instantly responsive
      transition: { duration: 0.5, ease: customEase }, 
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-40 bg-[var(--bg-base)]/90 glass-panel flex flex-col justify-center items-center backdrop-blur-3xl"
        >
          <motion.ul 
            variants={containerVariants}
            className="flex flex-col items-center gap-4 md:gap-8"
          >
            {navLinks.map((link) => (
              <li key={link} className="overflow-hidden py-4 px-8 -my-4 -mx-8">
                <motion.div variants={linkVariants}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="font-grandslang italic text-center uppercase text-6xl md:text-8xl text-[var(--text-main)] hover:text-[var(--brand-primary)] transition-colors inline-block"
                  >
                    {link}
                  </a>
                </motion.div>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;