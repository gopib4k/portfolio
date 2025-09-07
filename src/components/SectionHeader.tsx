import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const textAlign = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${textAlign}`}
    >
      <motion.h2
        className="text-3xl lg:text-5xl font-poppins font-bold text-white mb-4 relative inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
        <motion.div
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-electric-blue to-neon-green"
          initial={{ width: 0 }}
          animate={inView ? { width: '100%' } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;