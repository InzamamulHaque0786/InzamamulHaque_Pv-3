import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      if (target instanceof Element) {
        const isClickable = 
          target.closest('a') || 
          target.closest('button') || 
          window.getComputedStyle(target).cursor === 'pointer';
          
        setIsHovering(isClickable);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Base size is 12px. Hover size is 72px (which is exactly scale: 6)
  const cursorSize = isHovering ? 72 : 12;

  return (
    <motion.div
      // We use transition-colors here so Tailwind handles the background fade, 
      // but leaves the size (width/height) for Framer Motion to handle smoothly.
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-colors duration-500 ${
        isHovering 
          ? 'bg-[var(--brand-primary-cursor)]/15 border-[0.5px] border-[var(--brand-primar-cursor)]' 
          : 'bg-[var(--brand-primar-cursor)] border-[0.5px] border-transparent'
      }`}
      animate={{
        // We dynamically subtract half the size so the mouse stays perfectly dead-center
        x: mousePosition.x - (cursorSize / 2), 
        y: mousePosition.y - (cursorSize / 2),
        width: cursorSize,
        height: cursorSize,
      }}
      transition={{
        x: {
          type: "spring",
          stiffness: 150, 
          damping: 24,    
          mass: 0.2,      
        },
        y: {
          type: "spring",
          stiffness: 150,
          damping: 24,
          mass: 0.2,
        },
        width: {
          type: "tween",
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1], 
        },
        height: {
          type: "tween",
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1], 
        }
      }}
    />
  );
};

export default CustomCursor;