import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Send, Github, Linkedin, Instagram, MapPin, Phone } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import portfolioData from '../data/portfolio.json';

const Contact: React.FC = () => {
  const { contact, hero } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (in a real app, you'd handle this properly)
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: hero.socials.github,
      icon: Github,
      color: 'hover:text-white hover:bg-gray-800',
    },
    {
      name: 'LinkedIn',
      url: hero.socials.linkedin,
      icon: Linkedin,
      color: 'hover:text-white hover:bg-blue-600',
    },
    {
      name: 'Instagram',
      url: hero.socials.instagram,
      icon: Instagram,
      color: 'hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500',
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-dark-charcoal to-gray-900 relative overflow-hidden">
      {/* Background decorations */}
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
          className="absolute top-20 right-20 w-32 h-32 bg-electric-blue/10 rounded-full blur-2xl"
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
          className="absolute bottom-40 left-32 w-40 h-40 bg-neon-green/10 rounded-full blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Get In Touch" 
          subtitle={contact.message}
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
            <GlassCard>
              <h3 className="text-2xl font-poppins font-bold text-white mb-6">
                Let's Connect
              </h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-neon-green rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-roboto">Email</p>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-white font-roboto hover:text-electric-blue transition-colors duration-300"
                    >
                      {contact.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-accent-purple rounded-lg flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-roboto">Location</p>
                    <p className="text-white font-roboto">India</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-purple to-electric-blue rounded-lg flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-roboto">Response Time</p>
                    <p className="text-white font-roboto">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </GlassCard>

            {/* Social Links */}
            <GlassCard>
              <h4 className="text-lg font-poppins font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-gray-300 transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
              
              {/* Special mention for gtech_dsa */}
              <motion.div 
                className="mt-4 p-3 bg-gradient-to-r from-electric-blue/10 to-neon-green/10 border border-electric-blue/20 rounded-lg"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-sm text-gray-300 font-roboto">
                  Follow <strong className="text-neon-green">@gtech_dsa</strong> for DSA content and tutorials!
                </p>
              </motion.div>
            </GlassCard>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <GlassCard>
              <h3 className="text-2xl font-poppins font-bold text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-roboto text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white font-roboto placeholder-gray-400 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-roboto text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white font-roboto placeholder-gray-400 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-roboto text-gray-300 mb-2">
                    Subject *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white font-roboto placeholder-gray-400 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none transition-all duration-300"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-roboto text-gray-300 mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white font-roboto placeholder-gray-400 focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, collaboration idea, or just say hello!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-green text-white font-roboto font-medium rounded-lg shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <Send size={20} />
                  )}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;