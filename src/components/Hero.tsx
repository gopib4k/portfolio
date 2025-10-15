import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, MapPin } from 'lucide-react';
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
    <section id="hero" className="min-h-screen pt-20 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-charcoal via-gray-900 to-dark-charcoal">
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
          className="absolute top-20 left-20 w-32 h-32 bg-electric-blue/10 rounded-full blur-xl"
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
          className="absolute top-40 right-32 w-24 h-24 bg-neon-green/10 rounded-full blur-xl"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Profile Image and Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Circular Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl bg-gradient-to-br from-electric-blue/20 to-neon-green/20"
              >
                <img
                  src="\gopi.jpg"
                  alt="Mere Venkat Gopi Krishna"
                  // className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  className="w-full h-full object-cover duration-500"
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Name and Title */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-poppins font-bold text-white leading-tight"
              >
                {hero.name}
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
              >
                <div className="w-16 h-0.5 bg-gradient-to-r from-electric-blue to-neon-green sm:block hidden"></div>
                <div className="space-y-1">
                  <motion.p
                    key={currentRole}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg sm:text-xl font-roboto text-electric-blue font-medium"
                  >
                    {hero.roles[currentRole]}
                  </motion.p>
                  <p className="text-gray-400 font-roboto text-sm">Full Stack Developer</p>
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-gray-300 font-roboto text-base sm:text-lg leading-relaxed max-w-lg"
            >
              {hero.tagline}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex items-center gap-2 text-gray-400 text-sm sm:text-base"
            >
              <MapPin size={16} />
              <span className="font-roboto text-sm">India</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex items-center gap-6"
            >
              {Object.entries(hero.socials).map(([platform, url]) => {
                const IconComponent = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-electric-blue hover:bg-electric-blue/20 hover:border-electric-blue/40 transition-all duration-300"
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Three Professional CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('projects')}
                className="px-4 py-2.5 bg-gradient-to-r from-electric-blue to-blue-600 text-white font-roboto font-medium rounded-lg shadow-lg transition-all duration-300 text-center text-sm"
              >
                View My Work
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll('contact')}
                className="px-4 py-2.5 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-roboto font-medium rounded-lg hover:bg-white/20 transition-all duration-300 text-center text-sm"
              >
                Get in Touch
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2.5 bg-gradient-to-r from-neon-green to-green-500 text-white font-roboto font-medium rounded-lg shadow-lg transition-all duration-300 text-center text-sm"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;