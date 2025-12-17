import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, Send, Anchor, Sword, Flower, Eye, Gamepad, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  const MainIcon = theme.icons.main === 'Anchor' ? Anchor : theme.icons.main === 'Sword' ? Sword : theme.icons.main === 'Flower' ? Flower : theme.icons.main === 'Eye' ? Eye : theme.icons.main === 'Gamepad' ? Gamepad : theme.icons.main === 'Play' ? Play : Scroll;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 transition-all duration-500"
        style={{ backgroundImage: `url('${theme.images.heroBg}')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--color-background)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-bold text-xl mb-2 tracking-widest" style={{ color: theme.colors.primary }}>
              {theme.text.heroPrefix} {theme.text.title.toUpperCase()}
            </h2>
            <h1 className="text-5xl md:text-7xl font-ninja text-white mb-4">
              PRIYANSHU <span style={{ color: theme.colors.secondary }}>PANDEY</span>
            </h1>
            <p className="text-xl text-gray-300 mb-6 italic">
              "{theme.text.tagline}"
            </p>
            
            <div className="bg-white/5 p-6 rounded-lg border-l-4 mb-8 backdrop-blur-sm" style={{ borderColor: theme.colors.primary }}>
              <p className="text-gray-300 mb-4">
                Namaste <span className="inline-block animate-wave">👋</span><br/>
                I'm Priyanshu — a developer who believes in constant improvement, just like a {theme.text.profession} in training.
                I focus on building full-stack applications and crafting mobile experiences using modern tools and frameworks.
              </p>
              <div className="text-sm font-bold" style={{ color: theme.colors.secondary }}>
                {theme.text.nindo}: ⭐ Keep learning. ⭐ Keep building. ⭐ Never give up.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="/resume.pdf" // Placeholder
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-3 text-white font-bold rounded-full transition-all"
                style={{ backgroundColor: theme.colors.primary, boxShadow: `0 0 15px ${theme.colors.primary}80` }}
              >
                <MainIcon className="mr-2 h-5 w-5" />
                View {theme.text.resumeButtonText}
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-8 py-3 bg-transparent border-2 font-bold rounded-full transition-all hover:bg-white/10"
                style={{ borderColor: theme.colors.secondary, color: theme.colors.secondary, boxShadow: `0 0 15px ${theme.colors.secondary}40` }}
              >
                <Send className="mr-2 h-5 w-5" />
                Summon Me
              </motion.a>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Chakra Aura Effect */}
            <div className="absolute inset-0 rounded-full blur-[50px] opacity-30 animate-pulse" style={{ backgroundColor: theme.colors.secondary }}></div>
            <div className="absolute inset-0 rounded-full blur-[30px] opacity-20 animate-pulse delay-75" style={{ backgroundColor: theme.colors.primary }}></div>
            
            {/* Profile Image Placeholder */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white overflow-hidden relative z-10 shadow-2xl">
               {/* User should replace this with their actual photo */}
              <img 
                src={theme.images.profile} 
                alt="Priyanshu Pandey" 
                className="w-full h-full object-cover bg-gray-800"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 bg-[var(--color-background)] p-2 rounded-lg border"
              style={{ borderColor: theme.colors.primary }}
            >
              <span className="text-2xl">🔥</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-4 -left-4 bg-[var(--color-background)] p-2 rounded-lg border"
              style={{ borderColor: theme.colors.secondary }}
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
