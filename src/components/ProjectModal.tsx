import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ChevronLeft, ChevronRight, Eye, Code, Lightbulb, Target, CheckCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  tech: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  live: string;
  repo: string;
  images: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-6xl max-h-[90vh] bg-dark-charcoal/95 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-white/20 transition-all duration-300"
            >
              <X size={20} />
            </motion.button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              {/* Header Section */}
              <div className="p-6 pb-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-white">
                        {project.title}
                      </h2>
                      <span className="text-xs font-fira bg-electric-blue/20 text-electric-blue px-3 py-1 rounded-full border border-electric-blue/40">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-300 font-roboto leading-relaxed">
                      {project.longDesc}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-electric-blue to-blue-600 text-white font-roboto font-medium rounded-lg shadow-lg hover:shadow-electric-blue/25 transition-all duration-300"
                  >
                    <Eye size={18} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-roboto font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Github size={18} />
                    View Code
                  </motion.a>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="px-6 mb-6">
                <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden bg-gradient-to-br from-electric-blue/20 to-neon-green/20">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  
                  {/* Image Navigation */}
                  {project.images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-black/70 transition-all duration-300"
                      >
                        <ChevronLeft size={20} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-black/70 transition-all duration-300"
                      >
                        <ChevronRight size={20} />
                      </motion.button>
                      
                      {/* Image Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentImageIndex
                                ? 'bg-electric-blue scale-125'
                                : 'bg-white/50 hover:bg-white/80'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Content Grid */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Tech Stack */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                        <Code size={20} className="text-electric-blue" />
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-electric-blue/20 to-neon-green/20 border border-electric-blue/40 text-electric-blue rounded-full text-sm font-fira"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                        <CheckCircle size={20} className="text-neon-green" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300 font-roboto text-sm">
                            <div className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Challenges */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                        <Target size={20} className="text-accent-purple" />
                        Challenges
                      </h3>
                      <ul className="space-y-2">
                        {project.challenges.map((challenge, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300 font-roboto text-sm">
                            <div className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">
                      <h3 className="text-xl font-poppins font-semibold text-white mb-4 flex items-center gap-2">
                        <Lightbulb size={20} className="text-yellow-400" />
                        Solutions
                      </h3>
                      <ul className="space-y-2">
                        {project.solutions.map((solution, index) => (
                          <li key={index} className="flex items-start gap-3 text-gray-300 font-roboto text-sm">
                            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;