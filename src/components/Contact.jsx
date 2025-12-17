import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();

  return (
    <section id="contact" className="py-20 bg-[var(--color-background)] relative overflow-hidden">
      {/* Background Elements */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 transition-all duration-500"
        style={{ backgroundImage: `url('${theme.images.contactBg}')` }}
      ></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-xl mb-2 tracking-widest uppercase" style={{ color: theme.colors.primary }}>
            {theme.text.contactSubtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-ninja text-white">
            {theme.text.contactTitle}
          </h3>
          <p className="mt-4 text-gray-400">
            Looking for a developer who can adapt, solve, build, and grow?
            {theme.text.contactDescription}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-lg shadow-2xl relative overflow-hidden"
          style={{ backgroundColor: theme.colors.accent, color: theme.colors.background }}
        >
          {/* Scroll Ends */}
          <div className="absolute top-0 left-0 w-full h-4 bg-zinc-800"></div>
          <div className="absolute bottom-0 left-0 w-full h-4 bg-zinc-800"></div>
          
          <form className="space-y-6 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2 flex items-center">
                <User className="w-4 h-4 mr-2" />
                {theme.text.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/50 border-2 rounded focus:outline-none transition-colors"
                style={{ borderColor: `${theme.colors.background}33` }}
                onFocus={(e) => e.target.style.borderColor = theme.colors.primary}
                onBlur={(e) => e.target.style.borderColor = `${theme.colors.background}33`}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                {theme.text.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/50 border-2 rounded focus:outline-none transition-colors"
                style={{ borderColor: `${theme.colors.background}33` }}
                onFocus={(e) => e.target.style.borderColor = theme.colors.primary}
                onBlur={(e) => e.target.style.borderColor = `${theme.colors.background}33`}
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-bold mb-2 flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                {theme.text.messageLabel}
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-3 bg-white/50 border-2 rounded focus:outline-none transition-colors"
                style={{ borderColor: `${theme.colors.background}33` }}
                onFocus={(e) => e.target.style.borderColor = theme.colors.primary}
                onBlur={(e) => e.target.style.borderColor = `${theme.colors.background}33`}
                placeholder="Write your mission details here..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white font-bold py-4 rounded shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center text-lg"
              style={{ backgroundColor: theme.colors.primary }}
            >
              <span className="mr-2">{theme.emoji}</span> 
              {theme.text.submitButtonText}
            </button>
          </form>

          {/* Decorative Seal */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <div className="w-64 h-64 border-8 border-ninja-black rounded-full flex items-center justify-center">
              <div className="w-48 h-48 border-4 border-ninja-black rotate-45"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
