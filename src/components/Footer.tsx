import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Footer: React.FC = () => {
  const { hero } = portfolioData;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: hero.socials.github,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: hero.socials.linkedin,
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      url: hero.socials.instagram,
      icon: Instagram,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-dark-charcoal py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
            className="cursor-pointer inline-block"
          >
            <h3 className="text-3xl font-poppins font-bold text-white">
              {hero.name}<span className="text-electric-blue">.</span>
            </h3>
            <p className="text-gray-400 font-roboto mt-2">
              Full Stack Developer & Tech Content Creator
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-gray-300 hover:text-white hover:border-electric-blue/40 hover:bg-electric-blue/20 transition-all duration-300"
                title={social.name}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Special mention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-electric-blue/10 to-neon-green/10 border border-white/10 rounded-lg p-4 max-w-md mx-auto"
          >
            <p className="text-gray-300 font-roboto">
              Follow <strong className="text-neon-green">@gtech_dsa</strong> for simplified DSA tutorials and tech content!
            </p>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-white/10" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-400 font-roboto"
          >
            <p>
              © {currentYear} {hero.fullName}. All rights reserved.
            </p>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>and React</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <div className="flex justify-center gap-8 text-sm">
            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                onClick={() => {
                  const element = document.getElementById(item.toLowerCase());
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-roboto"
              >
                {item}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;