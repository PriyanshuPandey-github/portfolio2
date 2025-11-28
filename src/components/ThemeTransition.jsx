import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeTransition = () => {
  const { isTransitioning, pendingTheme, theme } = useTheme();
  
  // Use pendingTheme color if available (entering), otherwise current theme (exiting)
  // This ensures the circle stays the color of the NEW theme during the whole transition
  const activeTheme = pendingTheme || theme;
  const color = activeTheme.colors.primary;
  
  const getIcon = () => {
     if (activeTheme.id === 'naruto') return '🍥';
     if (activeTheme.id === 'onePiece') return '🏴‍☠️';
     return '👺';
  };

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
           className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
           initial={{ clipPath: "circle(0% at 50% 50%)" }}
           animate={{ clipPath: "circle(150% at 50% 50%)" }}
           exit={{ clipPath: "circle(0% at 50% 50%)" }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
           style={{ backgroundColor: color }}
        >
           <motion.div
             initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
             animate={{ opacity: 1, scale: 2, rotate: 0 }}
             exit={{ opacity: 0, scale: 0.5, rotate: 180 }}
             transition={{ duration: 0.8 }}
             className="w-64 h-64 flex items-center justify-center"
           >
             <img 
               src={activeTheme.images.logo} 
               alt={activeTheme.name} 
               className="w-full h-full object-contain drop-shadow-2xl"
             />
           </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThemeTransition;
