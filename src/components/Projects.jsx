import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scroll, ExternalLink, Github, X, Anchor, Sword, Flower, Eye, Gamepad, Play } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { theme } = useTheme();
  const MainIcon = theme.icons.main === 'Anchor' ? Anchor : theme.icons.main === 'Sword' ? Sword : theme.icons.main === 'Flower' ? Flower : theme.icons.main === 'Eye' ? Eye : theme.icons.main === 'Gamepad' ? Gamepad : theme.icons.main === 'Play' ? Play : Scroll;

  const projects = [
    {
      id: 1,
      title: 'PLAYRENA',
      subtitle: 'Online Game Website',
      tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
      description: 'A multiplayer gaming platform featuring responsive UI and research-led design. Contributed to both frontend and backend development.',
      features: ['Multiplayer games', 'Responsive UI', 'Research-led design'],
      role: 'Frontend & Backend'
    },
    {
      id: 2,
      title: 'Doctor Search',
      subtitle: 'Healthcare Platform',
      tech: ['HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
      description: 'A comprehensive platform for searching and filtering doctors with API integration and a future appointment system.',
      features: ['Searching', 'Filtering', 'API integration', 'Appointment system'],
      role: 'Full Stack'
    },
    {
      id: 3,
      title: 'Open Store',
      subtitle: 'UI Design',
      tech: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Figma'],
      description: 'Designed a responsive store UI with a strong focus on User Experience (UX) and modern design principles.',
      features: ['Responsive UI', 'Strong UX', 'Modern Design'],
      role: 'UI/UX Design'
    },
    {
      id: 4,
      title: 'Personal Portfolio',
      subtitle: 'This Website',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      description: 'A self-made responsive portfolio showcasing my journey as a developer with a Naruto-inspired theme.',
      features: ['Responsive', 'Animations', 'Themed Design'],
      role: 'Full Stack'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-zinc-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-xl mb-2 tracking-widest uppercase" style={{ color: theme.colors.secondary }}>
            {theme.text.projectsSubtitle}
          </h2>
          <h3 className="text-4xl md:text-5xl font-ninja text-white">
            {theme.text.projectsTitle}
          </h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={project.id}
              onClick={() => setSelectedId(project.id)}
              className="bg-[var(--color-accent)] text-[var(--color-background)] p-6 rounded-lg cursor-pointer transition-shadow relative overflow-hidden group h-64 flex flex-col justify-between transform hover:-translate-y-2 duration-300"
              style={{ backgroundColor: theme.colors.accent, color: theme.colors.background }}
              whileHover={{ boxShadow: `0 0 20px ${theme.colors.primary}66` }}
            >
              <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: theme.colors.primary }}></div>
              <div className="absolute bottom-0 left-0 w-full h-2" style={{ backgroundColor: theme.colors.primary }}></div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <MainIcon className="w-8 h-8" style={{ color: theme.colors.primary }} />
                  <span className="text-xs font-bold border px-2 py-1 rounded" style={{ borderColor: theme.colors.background }}>
                    {theme.text.projectLabel} #{project.id.toString().padStart(2, '0')}
                  </span>
                </div>
                <h4 className="text-2xl font-bold font-ninja mb-1">{project.title}</h4>
                <p className="text-sm font-semibold opacity-75">{project.subtitle}</p>
              </div>

              <div className="mt-4">
                <p className="text-sm line-clamp-3 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `${theme.colors.background}1A` }}>
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `${theme.colors.background}1A` }}>+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            >
              {projects.map((project) => (
                project.id === selectedId && (
                  <motion.div
                    layoutId={selectedId}
                    className="w-full max-w-2xl rounded-lg overflow-hidden relative shadow-2xl"
                    style={{ backgroundColor: theme.colors.accent, color: theme.colors.background }}
                    onClick={(e) => e.stopPropagation()}
                    key={project.id}
                  >
                    <div className="p-4 flex justify-between items-center text-white" style={{ backgroundColor: theme.colors.primary }}>
                      <h3 className="text-2xl font-ninja">{project.title}</h3>
                      <button onClick={() => setSelectedId(null)}>
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <MainIcon className="w-8 h-8 mr-3" style={{ color: theme.colors.primary }} />
                        <div>
                          <h4 className="text-xl font-bold">{project.subtitle}</h4>
                          <p className="text-sm opacity-75">Role: {project.role}</p>
                        </div>
                      </div>

                      <p className="text-lg mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h5 className="font-bold mb-2 flex items-center">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: theme.colors.primary }}></span>
                          Tech {theme.text.techLabel}:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span key={i} className="text-white px-3 py-1 rounded-full text-sm" style={{ backgroundColor: theme.colors.background }}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-8">
                        <h5 className="font-bold mb-2 flex items-center">
                          <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: theme.colors.secondary }}></span>
                          Key Features:
                        </h5>
                        <ul className="list-disc list-inside space-y-1">
                          {project.features.map((f, i) => (
                            <li key={i}>{f}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex gap-4">
                        <button 
                          className="flex-1 text-white py-3 rounded font-bold transition-colors flex items-center justify-center hover:opacity-90"
                          style={{ backgroundColor: theme.colors.primary }}
                        >
                          <ExternalLink className="w-5 h-5 mr-2" />
                          Live Demo
                        </button>
                        <button 
                          className="flex-1 border-2 py-3 rounded font-bold transition-colors flex items-center justify-center hover:text-white"
                          style={{ borderColor: theme.colors.background, color: theme.colors.background }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = theme.colors.background;
                            e.target.style.color = 'white';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = theme.colors.background;
                          }}
                        >
                          <Github className="w-5 h-5 mr-2" />
                          Source Code
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
