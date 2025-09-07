import React from 'react';
import { motion } from 'framer-motion';
import TechIcon from './TechIcon';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
  inView: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, inView }) => {
  const getLevelColor = (level: number) => {
    if (level >= 90) return 'from-neon-green to-green-400';
    if (level >= 80) return 'from-electric-blue to-blue-400';
    if (level >= 70) return 'from-accent-purple to-purple-400';
    return 'from-yellow-500 to-orange-400';
  };

  const getLevelText = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
      }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg hover:shadow-xl hover:shadow-electric-blue/10 transition-all duration-300 group cursor-pointer"
    >
      {/* Icon and Name */}
      <div className="flex items-center gap-4 mb-4">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-12 h-12 bg-gradient-to-br from-electric-blue/20 to-neon-green/20 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-electric-blue/40"
        >
          <TechIcon icon={skill.icon} size={28} />
        </motion.div>
        <div className="flex-1">
          <h4 className="text-lg font-poppins font-semibold text-white group-hover:text-electric-blue transition-colors duration-300">
            {skill.name}
          </h4>
          <p className="text-xs font-fira text-gray-400">
            {getLevelText(skill.level)}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-roboto text-gray-300">Proficiency</span>
          <span className="text-sm font-fira text-electric-blue font-semibold">
            {skill.level}%
          </span>
        </div>
        
        <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
            className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full relative`}
          >
            {/* Shimmer effect */}
            <motion.div
              animate={{ x: [-100, 200] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-20 skew-x-12"
            />
          </motion.div>
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-r from-electric-blue/5 to-neon-green/5 rounded-xl pointer-events-none"
      />
    </motion.div>
  );
};

export default SkillCard;