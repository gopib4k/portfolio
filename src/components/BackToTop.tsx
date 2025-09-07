import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1, backgroundColor: '#3B82F6' }}
      whileTap={{ scale: 0.95 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3 bg-electric-blue/20 backdrop-blur-lg border border-electric-blue/30 rounded-full text-white shadow-lg hover:shadow-electric-blue/25 transition-all duration-300"
    >
      <ChevronUp size={24} />
    </motion.button>
  );
};

export default BackToTop;