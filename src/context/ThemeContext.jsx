import React, { createContext, useContext, useState, useEffect } from 'react';
import { themes } from '../data/themes';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.naruto);
  const [pendingTheme, setPendingTheme] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const switchTheme = (themeId) => {
    if (currentTheme.id === themeId || isTransitioning) return;
    
    setPendingTheme(themes[themeId]);
    setIsTransitioning(true);

    // Wait for the enter animation to cover the screen
    setTimeout(() => {
      setCurrentTheme(themes[themeId]);
      setPendingTheme(null);
      
      // Wait a bit before starting exit animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 800); // Match this with animation duration
  };

  useEffect(() => {
    // Update CSS variables when theme changes
    const root = document.documentElement;
    root.style.setProperty('--color-primary', currentTheme.colors.primary);
    root.style.setProperty('--color-secondary', currentTheme.colors.secondary);
    root.style.setProperty('--color-background', currentTheme.colors.background);
    root.style.setProperty('--color-text', currentTheme.colors.text);
    root.style.setProperty('--color-accent', currentTheme.colors.accent);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, switchTheme, isTransitioning, pendingTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
