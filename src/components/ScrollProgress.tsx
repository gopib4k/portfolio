import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-electric-blue/30 z-50"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    >
      <div className="h-full bg-gradient-to-r from-electric-blue to-neon-green" />
    </motion.div>
  );
};

export default ScrollProgress;