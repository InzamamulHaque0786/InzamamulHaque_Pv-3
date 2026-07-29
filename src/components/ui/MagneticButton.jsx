import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "", ...props }) => {
  // We attach the ref to the STATIC wrapper, not the moving element.
  // This completely eliminates stuttering when the button moves.
  const wrapperRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    
    // Get dimensions from the static wrapper, so the center point never shifts
    const { height, width, left, top } = wrapperRef.current.getBoundingClientRect();
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // INCREASED PULL: Changed from 0.2 to 0.4 so it travels further towards the mouse
    setPosition({ x: middleX * 0.4, y: middleY * 0.4 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      // Allows the wrapper to size exactly to the child button
      className="relative flex items-center justify-center" 
    >
      {/* 
        INVISIBLE MAGNETIC FIELD (The Sensor)
        -inset-8 expands the hover zone by 32px in every direction. 
        Change to -inset-10 for even more distance!
      */}
      <div className="absolute -inset-8 z-0 rounded-full" />

      {/* THE ACTUAL MOVING BUTTON */}
      <motion.div
        animate={{ x: position.x, y: position.y }}
        // REFINED PHYSICS: Higher stiffness for a snappy pull, more mass for a premium heavy feel
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
        className={`relative z-10 ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MagneticButton;