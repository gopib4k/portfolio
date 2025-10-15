import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, GraduationCap, Star } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import portfolioData from '../data/portfolio.json';

const Achievements: React.FC = () => {
  const { achievements } = portfolioData;
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const sections = [
    {
      title: 'Certifications',
      icon: Award,
      items: achievements.certifications,
      color: 'from-electric-blue to-blue-600',
    },
    {
      title: 'Achievements',
      icon: Trophy,
      items: achievements.awards,
      color: 'from-neon-green to-green-500',
    },
    {
      title: 'Education',
      icon: GraduationCap,
      items: achievements.education,
      color: 'from-accent-purple to-purple-600',
    },
    {
      title: 'Skills & Extras',
      icon: Star,
      items: achievements.extras,
      color: 'from-pink-500 to-rose-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-900 to-dark-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Achievements & Education" 
          subtitle="My journey of continuous learning and growth"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {sections.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="h-full">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl mb-6`}
                >
                  <section.icon size={28} className="text-white" />
                </motion.div>
                
                <h3 className="text-xl font-poppins font-bold text-white mb-6">
                  {section.title}
                </h3>
                
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 + itemIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        className="w-2 h-2 bg-gradient-to-r from-electric-blue to-neon-green rounded-full mt-2 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                      />
                      <p className="text-gray-300 font-roboto text-sm leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-poppins font-bold text-white text-center mb-12">
            Journey Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-electric-blue via-neon-green to-accent-purple origin-top"
            />

            <div className="relative space-y-12">
              {[
                {
                  year: '2022',
                  title: 'Started B.Tech CSE',
                  description: 'Began my journey in Computer Science Engineering',
                },
                {
                  year: '2023',
                  title: 'Class Representative',
                  description: 'Elected as Class Representative, developing leadership skills',
                },
                {
                  year: '2024',
                  title: 'Full Stack Projects',
                  description: 'Built multiple real-world applications and gained industry experience',
                },
                {
                  year: '2025',
                  title: 'Founded gtech_dsa',
                  description: 'Started creating tech content and teaching DSA concepts',
                },
                
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <GlassCard className="relative">
                      <motion.div
                        className="absolute top-4 right-4 text-xs font-fira bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent font-bold"
                        whileHover={{ scale: 1.1 }}
                      >
                        {milestone.year}
                      </motion.div>
                      <h4 className="text-lg font-poppins font-semibold text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-300 font-roboto text-sm">
                        {milestone.description}
                      </p>
                    </GlassCard>
                  </div>
                  
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-electric-blue to-neon-green rounded-full border-4 border-dark-charcoal shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;