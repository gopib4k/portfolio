import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Trophy, Target } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import portfolioData from '../data/portfolio.json';

const About: React.FC = () => {
  const { about } = portfolioData;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies"
    },
    {
      icon: Users,
      title: "Tech Content Creation",
      description: "Sharing knowledge through simplified DSA content"
    },
    {
      icon: Trophy,
      title: "Leadership",
      description: "Class Representative with strong interpersonal skills"
    },
    {
      icon: Target,
      title: "Growth Mindset",
      description: "Teaching what I learn to grow and help others"
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-dark-charcoal to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="About Me" 
          subtitle="Get to know more about my journey, passion, and what drives me"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left side - Who am I */}
          <motion.div variants={itemVariants} className="space-y-6">
            <GlassCard className="relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-blue/20 to-neon-green/20 rounded-full blur-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-poppins font-bold text-white mb-4">Who Am I?</h3>
                <p className="text-gray-300 text-lg font-roboto leading-relaxed">
                  {about.who}
                </p>
                <motion.div 
                  className="mt-4 w-20 h-1 bg-gradient-to-r from-electric-blue to-neon-green"
                  initial={{ width: 0 }}
                  animate={inView ? { width: 80 } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </GlassCard>
          </motion.div>

          {/* Right side - What I do */}
          <motion.div variants={itemVariants} className="space-y-6">
            <GlassCard>
              <h3 className="text-2xl font-poppins font-bold text-white mb-6">What I Do</h3>
              <ul className="space-y-4">
                {about.what.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300 font-roboto"
                  >
                    <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="text-center h-full">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-electric-blue to-neon-green rounded-xl mb-4"
                >
                  <feature.icon size={28} className="text-white" />
                </motion.div>
                <h4 className="text-xl font-poppins font-semibold text-white mb-3">
                  {feature.title}
                </h4>
                <p className="text-gray-300 font-roboto text-sm leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;