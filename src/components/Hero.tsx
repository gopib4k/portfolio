import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Download, ArrowDown } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const { hero } = portfolioData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [hero.roles.length]);

  const handleScroll = (targetId: string) => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    instagram: Instagram,
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-charcoal via-gray-900 to-dark-charcoal">
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-electric-blue/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-32 w-24 h-24 bg-neon-green/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-accent-purple/10 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-8xl font-poppins font-bold text-white leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-electric-blue to-neon-green bg-clip-text text-transparent">
              {hero.name}
            </span>
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 0.5, delay: 1, repeat: 3 }}
              className="inline-block ml-4"
            >
              👋
            </motion.span>
          </motion.h1>

          {/* Dynamic role */}
          <motion.div
            className="h-16 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h2
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-roboto text-gray-300"
            >
              {hero.roles[currentRole]}
            </motion.h2>
          </motion.div>

          {/* Founder badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-electric-blue/20 to-neon-green/20 backdrop-blur-lg border border-white/10 rounded-full text-white font-roboto"
          >
            <Instagram size={20} className="mr-2 text-neon-green" />
            Founder of <strong className="ml-1">gtech_dsa</strong>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-roboto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {hero.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('projects')}
              className="px-8 py-4 bg-gradient-to-r from-electric-blue to-blue-600 text-white font-roboto font-medium rounded-lg shadow-lg hover:shadow-electric-blue/25 transition-all duration-300"
            >
              See My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScroll('contact')}
              className="px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-roboto font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              Get in Touch
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neon-green/20 backdrop-blur-lg border border-neon-green/30 text-white font-roboto font-medium rounded-lg hover:bg-neon-green/30 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {Object.entries(hero.socials).map(([platform, url]) => {
              const IconComponent = socialIcons[platform as keyof typeof socialIcons];
              return (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300"
                >
                  <IconComponent size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm font-roboto mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;