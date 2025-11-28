import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Cpu, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Skills = () => {
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Terminal className="w-6 h-6" />,
      skills: ['C', 'C++', 'Java', 'Swift', 'Objective-C', 'JavaScript', 'TypeScript'],
      color: theme.colors.primary,
      bg: theme.images.skills[0]
    },
    {
      title: theme.text.frameworksTitle,
      icon: <Code className="w-6 h-6" />,
      skills: ['React.js', 'React Native', 'Node.js', 'Express.js', 'Android Dev', 'iOS Dev'],
      color: theme.colors.secondary,
      bg: theme.images.skills[1]
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: ['MongoDB', 'MySQL'],
      color: '#10b981', // Green
      bg: theme.images.skills[2]
    },
    {
      title: 'Technologies',
      icon: <Globe className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
      color: '#8b5cf6', // Purple
      bg: theme.images.skills[3]
    },
    {
      title: 'Soft Skills',
      icon: <Cpu className="w-6 h-6" />,
      skills: ['Leadership', 'Time Management', 'Problem Solving', 'Communication', 'Adaptability'],
      color: '#ef4444', // Red
      bg: theme.images.skills[4]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--color-background)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-xl mb-2 tracking-widest uppercase" style={{ color: theme.colors.primary }}>
            {theme.text.skillsSubtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-ninja text-white">
            {theme.text.skillsTitle}
          </h3>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 p-6 rounded-lg border-t-4 hover:shadow-lg transition-shadow relative overflow-hidden group"
              style={{ borderColor: category.color }}
            >
              <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${category.bg})` }}></div>
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 bg-white/5 rounded-full mr-4 text-white">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-zinc-800 text-gray-300 text-sm rounded-full border border-zinc-700 hover:border-white hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Decorative background opacity */}
              <div className="absolute -bottom-4 -right-4 opacity-5 transform rotate-12">
                <Terminal className="w-24 h-24" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
