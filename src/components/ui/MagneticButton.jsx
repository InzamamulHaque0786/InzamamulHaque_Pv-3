import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = "", ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    
    // Get the button's exact dimensions and position on the screen
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate the distance from the mouse to the center of the button
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Multiply by a decimal (like 0.2) to dampen the pull. 
    // Higher number = stronger magnetic pull.
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    // Snap back to original position when the mouse leaves
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      // Spring physics make it feel bouncy and organic rather than robotic
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;