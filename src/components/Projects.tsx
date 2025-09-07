import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Eye } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import portfolioData from '../data/portfolio.json';

const Projects: React.FC = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All Projects');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = ['All Projects', 'Frontend', 'Full Stack', 'AI/ML', 'Games'];

  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Projects" 
          subtitle="Explore my latest work and side projects that showcase my skills"
        />

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-roboto font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-electric-blue to-neon-green text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="h-full group overflow-hidden">
                  {/* Project Image */}
                  <motion.div
                    className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-electric-blue/20 to-neon-green/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-center justify-center"
                    >
                      <div className="flex gap-3">
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-electric-blue rounded-full text-white shadow-lg"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                        <motion.a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          className="p-2 bg-neon-green rounded-full text-white shadow-lg"
                        >
                          <Github size={20} />
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-poppins font-bold text-white group-hover:text-electric-blue transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-xs font-fira bg-electric-blue/20 text-electric-blue px-2 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-300 font-roboto text-sm leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs font-fira bg-white/10 text-gray-300 px-2 py-1 rounded-md border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-2">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-electric-blue/20 border border-electric-blue/40 text-electric-blue rounded-lg hover:bg-electric-blue hover:text-white transition-all duration-300 text-sm font-roboto"
                      >
                        <Eye size={16} />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-white/10 border border-white/20 text-gray-300 rounded-lg hover:bg-white/20 hover:text-white transition-all duration-300 text-sm font-roboto"
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 font-roboto">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;