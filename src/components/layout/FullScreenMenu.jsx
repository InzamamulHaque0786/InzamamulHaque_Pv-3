import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const FullScreenMenu = ({ isOpen, setIsOpen }) => {
  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com/InzamamulHaque0786", label: "GitHub" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/inzamamulhaque786/", label: "LinkedIn" },
    { Icon: FaInstagram, href: "https://www.instagram.com/inzamam_1409/", label: "Instagram" },
  ];

  const customEase = [0.65, 0, 0.35, 1];
  const driftEase = [0.22, 1, 0.36, 1]; 

  // 1. The Masked Curtain Animation
  const menuVariants = {
    initial: { clipPath: 'inset(0% 0% 100% 0%)' },
    animate: {
      clipPath: 'inset(0% 0% 0% 0%)',
      transition: { duration: 1.2, ease: customEase },
    },
    exit: {
      clipPath: 'inset(0% 0% 100% 0%)',
      transition: { duration: 1, ease: customEase, delay: 0.3 }, 
    },
  };

  // 2. The Text Stagger Controller
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.48, 
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.05, 
        staggerDirection: -1, 
      },
    },
  };

  // 3. The "Masked Rise" Cinematic Drift Reveal for Links
  const linkVariants = {
    initial: { y: '150%' },
    animate: {
      y: ['150%', '10%', '0%'],
      transition: { 
        duration: 1.6, 
        times: [0, 0.45, 1], 
        ease: [ customEase, driftEase ] 
      },
    },
    exit: {
      y: '150%',
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
          className="fixed inset-0 z-40 bg-[#efeae1] text-[#1e2125] flex flex-col justify-center items-center px-6"
        >
          <motion.ul 
            variants={containerVariants}
            // CHANGED HERE: h-[75vh] and justify-evenly to fill mobile space, reverts to normal on desktop
            className="flex flex-col items-center justify-evenly h-[75vh] md:h-auto md:justify-center md:gap-8 pb-20 md:pb-0 w-full mt-4 md:mt-0"
          >

            {/* WORKS */}
            <li className="overflow-hidden py-4 px-8 -my-4 -mx-8">
              <motion.div variants={linkVariants}>
                <a 
                  href="#works"
                  onClick={() => setIsOpen(false)}
                  className="font-grandslang  text-center uppercase text-7xl md:text-8xl text-[#1e2125] hover:text-[#716a5c] transition-colors inline-block"
                >
                  <span className='italic'>W</span>ork<span className='italic'>s</span>
                </a>
              </motion.div>
            </li>

            {/* ABOUT */}
            <li className="overflow-hidden py-4 px-8 -my-4 -mx-8">
              <motion.div variants={linkVariants}>
                <a 
                  href="#about"
                  onClick={() => setIsOpen(false)}
                  className="font-grandslang  text-center uppercase text-7xl md:text-8xl text-[#1e2125] hover:text-[#716a5c] transition-colors inline-block"
                >
                  <span className='italic'>A</span>bou<span className='italic'>t</span>
                </a>
              </motion.div>
            </li>
          
             {/* Experience */}
           <li className="overflow-hidden py-4 px-8 -my-4 -mx-8">
              <motion.div variants={linkVariants}>
                <a 
                  href="#experience"
                  onClick={() => setIsOpen(false)}
                  className="font-grandslang  text-center uppercase text-7xl md:text-8xl text-[#1e2125] hover:text-[#716a5c] transition-colors inline-block"
                >
                  c<span className='italic'>a</span>r<span className='italic'></span>eer
                </a>
              </motion.div>
            </li>
          

            {/* SKILLS */}
            <li className="overflow-hidden py-4 px-8 -my-4 -mx-8">
              <motion.div variants={linkVariants}>
                <a 
                  href="#skills"
                  onClick={() => setIsOpen(false)}
                  className="font-grandslang  text-center uppercase text-7xl md:text-8xl text-[#1e2125] hover:text-[#716a5c] transition-colors inline-block"
                >
                  ski<span className='italic'>ll</span>s
                </a>
              </motion.div>
            </li>

            

            {/* CONTACT */}
            <li className="overflow-hidden py-4 px-8 -my-4 -mx-8">
              <motion.div variants={linkVariants}>
                <a 
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="font-grandslang text-center uppercase text-7xl md:text-8xl text-[#1e2125] hover:text-[#716a5c] transition-colors inline-block"
                >
                  <span className='italic'>Conta</span>c<span className='italic'>t</span>
                </a>
              </motion.div>
            </li>
          </motion.ul>
           
           

          {/* Static Icons Container */}
          <div className="absolute bottom-8 left-0 w-full flex md:hidden justify-center items-center gap-8">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center text-[#1e2125] hover:text-[#716a5c] transition-colors"
              >
                <Icon className="text-2xl" />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;