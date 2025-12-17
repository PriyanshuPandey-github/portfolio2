import React, { useState } from 'react';
import { Menu, X, Scroll, Anchor, Sword, Flower, Eye, Gamepad, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: theme.text.educationTitle.split(' ')[0], href: '#education' }, // "Academy" or "Log Pose"
    { name: theme.text.experienceTitle.split(' ')[0], href: '#experience' }, // "Missions" or "Adventure"
    { name: 'Skills', href: '#skills' },
    { name: theme.text.projectsTitle.split(' ')[0], href: '#projects' }, // "Forbidden" or "Bounty"
    { name: 'Summon', href: '#contact' },
  ];

  const MainIcon = theme.icons.main === 'Anchor' ? Anchor : theme.icons.main === 'Sword' ? Sword : theme.icons.main === 'Flower' ? Flower : theme.icons.main === 'Eye' ? Eye : theme.icons.main === 'Gamepad' ? Gamepad : theme.icons.main === 'Play' ? Play : Scroll;

  return (
    <nav className="fixed w-full z-50 bg-[var(--color-background)]/90 backdrop-blur-sm border-b-2" style={{ borderColor: theme.colors.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <MainIcon className="h-8 w-8 animate-pulse" style={{ color: theme.colors.primary }} />
            <span className="ml-2 text-2xl font-ninja tracking-wider" style={{ color: theme.colors.text }}>
              {theme.devTitle}
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10"
                  style={{ color: 'var(--color-text)' }}
                  onMouseEnter={(e) => e.target.style.color = theme.colors.primary}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
              style={{ color: 'var(--color-text)' }}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b"
          style={{ backgroundColor: theme.colors.background, borderColor: theme.colors.primary }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
                style={{ color: 'var(--color-text)' }}
                onMouseEnter={(e) => e.target.style.color = theme.colors.primary}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
