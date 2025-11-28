import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="py-8 text-center text-gray-400 text-sm relative z-10" style={{ backgroundColor: theme.colors.background }}>
      <div className="flex items-center justify-center space-x-2 mb-2">
        <span>Made with</span>
        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
        <span>and</span>
        <span className="font-bold" style={{ color: theme.colors.primary }}>
          {theme.text.powerSystem}
        </span>
      </div>
      <p>&copy; {new Date().getFullYear()} Priyanshu Pandey. {theme.text.footerQuote}</p>
    </footer>
  );
};

export default Footer;
