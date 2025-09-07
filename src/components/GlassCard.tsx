import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-electric-blue/10 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;