'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '@/config/social';
import { sideContentVariants } from '@/config/animations';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface SideContentProps {
  description: string;
  pageNumber?: string;
  totalPages?: string;
}

export function SideContent({ 
  description, 
  pageNumber = "20", 
  totalPages = "25" 
}: SideContentProps) {
  const { isDarkMode } = useDarkMode();
  
  // Dynamic colors based on theme
  const textColor = isDarkMode ? 'text-white/80' : 'text-black/80';
  const textColorBold = isDarkMode ? 'text-white' : 'text-black';
  const iconColor = isDarkMode ? 'text-white' : 'text-black';
  const bgColor = isDarkMode ? 'bg-white/10' : 'bg-black/10';
  const bgColorHover = isDarkMode ? 'hover:bg-white/20' : 'hover:bg-black/20';
  const borderColor = isDarkMode ? 'border-white/20' : 'border-black/20';
  return (
    <>
      {/* Left Side Content */}
      <motion.div 
        className="absolute bottom-8 left-8 md:left-12 z-30"
        variants={sideContentVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="mb-8">
          <p className={`${textColor} text-sm md:text-base leading-relaxed max-w-xs`}>
            {description}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={social.platform}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full ${bgColor} backdrop-blur-md border ${borderColor} flex items-center justify-center cursor-pointer transition-all duration-300 ${bgColorHover} shadow-lg`}
                >
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Right Side - Page Counter */}
      <motion.div 
        className="absolute bottom-8 right-8 md:right-12 z-30"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="text-right">
          <div className={`text-4xl md:text-5xl font-bold ${textColorBold}`}>{pageNumber}</div>
          <div className={`text-4xl md:text-5xl font-bold ${textColorBold}`}>/{totalPages}</div>
        </div>
      </motion.div>
    </>
  );
} 