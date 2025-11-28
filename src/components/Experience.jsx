import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Target, Skull, Flame } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Experience = () => {
  const { theme } = useTheme();
  const Icon = theme.icons.secondary === 'Skull' ? Skull : theme.icons.secondary === 'Flame' ? Flame : Sword;

  const missions = [
    {
      id: '01',
      role: 'Web Developer Intern',
      org: 'Hackveda Ltd.',
      timeline: 'May 2024 – July 2024',
      rank: `${theme.ranks[0]} → ${theme.ranks[1]}`,
      description: 'Worked on frontend and backend tasks, explored web development technologies, learned rapid prototyping, database design, and building full solutions.',
      teamBg: theme.images.experience[0]
    },
    {
      id: '02',
      role: 'Junior Software Developer',
      org: 'Ajjas (HPS LABS & DESIGNS)', // Placeholder as requested
      timeline: 'Sept 2024 → Present',
      rank: `${theme.ranks[1]} → ${theme.ranks[2]}`,
      description: 'Started as a trainee and leveled up to a full junior developer role. Contributed to production-level mobile and web development using React Native, Android, iOS, Java, Swift, Objective-C. Collaborated with teams, solved bugs, delivered features, and improved product performance.',
      teamBg: theme.images.experience[1]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 [background-size:20px_20px]"
        style={{ backgroundImage: `radial-gradient(${theme.colors.primary} 1px, transparent 1px)` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-xl mb-2 tracking-widest uppercase" style={{ color: theme.colors.secondary }}>
            {theme.text.experienceSubtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-ninja text-white">
            {theme.text.experienceTitle}
          </h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A {theme.text.profession} grows through {theme.text.experienceType} — each one teaching new skills, tactics, and experience.
            Here are the {theme.text.experienceType} I've completed so far.
          </p>
        </motion.div>

        <div className="space-y-12">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[var(--color-background)] border border-gray-800 rounded-lg p-8 relative hover:border-[var(--color-primary)] transition-colors shadow-lg"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
            >
              <div 
                className="absolute -top-4 -left-4 text-white font-bold py-1 px-4 rounded shadow-lg transform -rotate-2"
                style={{ backgroundColor: theme.colors.primary }}
              >
                {theme.text.missionLabel} #{mission.id}
              </div>

              <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: `url(${mission.teamBg})` }}></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 mt-2 relative z-10">
                <div>
                  <h4 className="text-2xl font-bold text-white flex items-center">
                    <Icon className="w-5 h-5 mr-2" style={{ color: theme.colors.secondary }} />
                    {mission.role}
                  </h4>
                  <p className="text-xl text-gray-400 mt-1">{mission.org}</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="inline-block bg-zinc-800 px-3 py-1 rounded text-sm font-mono mb-2" style={{ color: theme.colors.primary }}>
                    {mission.timeline}
                  </div>
                  <div className="font-bold text-sm" style={{ color: theme.colors.secondary }}>
                    Rank: {mission.rank}
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 p-4 rounded border-l-2 relative z-10" style={{ borderColor: theme.colors.secondary }}>
                <p className="text-gray-300 leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
