import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Scroll, Anchor, Sword } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Education = () => {
  const { theme } = useTheme();
  const MainIcon = theme.icons.main === 'Anchor' ? Anchor : theme.icons.main === 'Sword' ? Sword : Scroll;

  const educationData = [
    {
      year: '2021–2025',
      institute: 'Bansal Institute of Research Technology & Science, Bhopal',
      program: 'B.Tech CSE',
      description: '"Completed formal shinobi-tech academy training. Built strong foundations in CS, development, and logic."',
      instituteBg: theme.images.education[0]
    },
    {
      year: '2024',
      institute: 'Scaler Academy',
      program: 'DSA in C++',
      description: '"Sharpened logic and algorithmic combat — like unlocking Sharingan-level precision."',
      instituteBg: theme.images.education[1]
    }
  ];

  return (
    <section id="education" className="py-20 bg-[var(--color-background)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-xl mb-2 tracking-widest uppercase" style={{ color: theme.colors.primary }}>
            {theme.text.educationSubtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-ninja text-white">
            {theme.text.educationTitle}
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Like every {theme.text.profession}, my journey began with formal training and discipline.
            These milestones shaped my foundation in technology and problem-solving.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-900 border-l-4 p-6 rounded-r-lg hover:bg-zinc-800 transition-colors relative overflow-hidden group"
              style={{ borderColor: theme.colors.primary }}
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${edu.instituteBg})` }}></div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <GraduationCap className="w-24 h-24 text-white" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <MainIcon className="w-6 h-6 mr-2" style={{ color: theme.colors.primary }} />
                  <span className="font-bold" style={{ color: theme.colors.secondary }}>{edu.year}</span>
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{edu.institute}</h4>
                <h5 className="text-xl text-gray-300 mb-4">{edu.program}</h5>
                <p className="text-gray-400 italic border-l-2 border-gray-600 pl-4">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
