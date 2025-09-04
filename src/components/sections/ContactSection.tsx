'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Mail, MapPin } from 'lucide-react';
import { containerVariants, itemVariants, floatingVariants } from '@/config/animations';
import { socialLinks } from '@/config/social';
import { ContactForm } from '@/components/ContactForm';

export function ContactSection() {
  // You can customize this handler to integrate with your preferred service
  const handleFormSubmit = async (formData: { name: string; email: string; message: string }) => {
    // Example: integrate with EmailJS, Formspree, Netlify Forms, etc.
    console.log('Form submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return true for success, false for error
    return true;
  };

  return (
    <motion.div 
      className="relative z-30 flex flex-col items-center justify-center min-h-screen pt-24 px-8 sm:px-12 md:px-16 lg:px-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative Stars */}
      <motion.div
        className="absolute -top-12 -left-12"
        variants={floatingVariants}
        animate="animate"
      >
        <Star className="w-8 h-8 text-white/60 fill-current" />
      </motion.div>
      <motion.div
        className="absolute top-24 -right-8"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Sparkles className="w-6 h-6 text-white/50" />
      </motion.div>

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Contact Information */}
        <motion.div 
          className="space-y-8"
          variants={itemVariants}
        >
          <div>
            <motion.h1 
              className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter"
              variants={itemVariants}
            >
              Get In Touch
            </motion.h1>
            <motion.p 
              className="text-xl text-white/80 mb-8"
              variants={itemVariants}
            >
              Ready to bring your ideas to life? Let's start a conversation.
            </motion.p>
          </div>

          {/* Contact Methods */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="flex items-center space-x-4 text-white/90">
              <Mail className="w-6 h-6" />
              <span className="text-lg">houyu_chen@fitnyc.edu</span>
            </div>
            <div className="flex items-center space-x-4 text-white/90">
              <MapPin className="w-6 h-6" />
              <span className="text-lg">New York, USA</span>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex space-x-6"
            variants={itemVariants}
          >
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8"
          variants={itemVariants}
        >
          <ContactForm onSubmit={handleFormSubmit} />
        </motion.div>
      </div>

      {/* Decorative Star */}
      <motion.div
        className="absolute -bottom-8 left-24"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Star className="w-4 h-4 text-white/40 fill-current" />
      </motion.div>
    </motion.div>
  );
}