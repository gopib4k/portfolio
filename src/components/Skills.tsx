import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeader from './SectionHeader';
import SkillCard from './SkillCard';
import portfolioData from '../data/portfolio.json';

const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('All Skills');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = ['All Skills', 'Frontend', 'Backend', 'Database', 'Tools'];

  const getSkillsForCategory = () => {
    if (activeCategory === 'All Skills') {
      return Object.values(skills).flat() as Array<{name: string, level: number, icon: string}>;
    }
    return (skills[activeCategory.toLowerCase() as keyof typeof skills] || []) as Array<{name: string, level: number, icon: string}>;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-dark-charcoal to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="Technologies and tools I work with to bring ideas to life"
        />

        {/* Category Tabs */}
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
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-roboto font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-neon-green to-electric-blue text-white shadow-lg'
                  : 'bg-white/10 backdrop-blur-lg border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {getSkillsForCategory().map((skill, index) => (
              <SkillCard
                key={`${activeCategory}-${skill.name}-${index}`}
                skill={skill}
                index={index}
                inView={inView}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Category breakdown for All Skills */}
        {activeCategory === 'All Skills' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16"
          >
            {/* <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue/20 to-neon-green/20 backdrop-blur-lg border border-white/10 rounded-full text-white font-roboto"
              >
                <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span>Hover over skills to see proficiency levels</span>
              </motion.div>
            </div> */}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;