import { motion } from 'framer-motion';

const MenuToggle = ({ isOpen, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="relative w-10 h-10 flex flex-col items-center justify-center focus:outline-none z-50 text-[var(--text-main)] hover:text-[var(--brand-primary)] transition-colors group"
      aria-label="Toggle Menu"
    >
      {/* Container for the bars to control the exact spacing */}
      <div className="relative w-8 h-[12px] ">
        
        {/* Top Bar */}
        <motion.span
          // y: 5 moves it exactly to the center of the 12px container
          animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 block w-full h-[2px] bg-current rounded-full origin-center"
        />
        
        {/* Bottom Bar */}
        <motion.span
          // y: -5 moves it exactly up to the center to cross the top bar
          animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 bottom-0 block w-full h-[2px] bg-current rounded-full origin-center"
        />
        
      </div>
    </button>
  );
};

export default MenuToggle;