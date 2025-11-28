import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { themes } from '../data/themes';

const ThemeSwitcher = () => {
  const { theme, switchTheme } = useTheme();

  return (
    <div className="fixed top-24 right-4 z-50 flex flex-col gap-2">
      {Object.values(themes).map((t) => (
        <motion.button
          key={t.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => switchTheme(t.id)}
          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center overflow-hidden shadow-lg transition-all duration-300 ${
            theme.id === t.id ? 'border-white scale-110 ring-2 ring-offset-2 ring-offset-black ring-white' : 'border-transparent opacity-70 hover:opacity-100'
          }`}
          style={{ backgroundColor: t.colors.primary }}
          title={`Switch to ${t.name} Theme`}
        >
          <div className="w-full h-full p-2 flex items-center justify-center">
            <img 
              src={t.images.logo} 
              alt={t.name} 
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
