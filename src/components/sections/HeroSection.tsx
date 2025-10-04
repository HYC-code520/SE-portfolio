'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Sparkles } from 'lucide-react';
import { containerVariants, itemVariants, floatingVariants } from '@/config/animations';
import { HeroContent } from '@/types';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  const { isDarkMode } = useDarkMode();
  
  // Dynamic colors based on theme
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const textColorSecondary = isDarkMode ? 'text-white/90' : 'text-black/90';
  const starColor = isDarkMode ? 'text-white/60' : 'text-black/60';
  const sparkleColor = isDarkMode ? 'text-white/50' : 'text-black/50';
  const starSmallColor = isDarkMode ? 'text-white/40' : 'text-black/40';
  const buttonBg = isDarkMode ? 'from-white/20 to-white/0' : 'from-black/20 to-black/0';
  const buttonBorder = isDarkMode ? 'border-white/30' : 'border-black/30';
  const buttonText = isDarkMode ? 'text-white' : 'text-black';
  const buttonShadow = isDarkMode ? 'shadow-black/20' : 'shadow-white/20';
  const buttonBoxShadow = isDarkMode 
    ? '[box-shadow:0_0_2px_#fff_inset,_0_0_10px_#fff_inset] hover:[box-shadow:0_0_2px_#fff_inset,_0_0_15px_#fff_inset,_0_0_30px_#888]'
    : '[box-shadow:0_0_2px_#000_inset,_0_0_10px_#000_inset] hover:[box-shadow:0_0_2px_#000_inset,_0_0_15px_#000_inset,_0_0_30px_#888]';
  const reflectionGradient = isDarkMode ? 'from-white to-transparent' : 'from-black to-transparent';
  return (
    <motion.div 
      className="relative z-30 flex flex-col items-center justify-center min-h-screen pt-24 px-8 sm:px-12 md:px-16 lg:px-20 text-center"
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
        <Star className={`w-8 h-8 ${starColor} fill-current`} />
      </motion.div>
      <motion.div
        className="absolute top-24 -right-8"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Sparkles className={`w-6 h-6 ${sparkleColor}`} />
      </motion.div>
      <motion.div
        className="absolute -bottom-8 left-24"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Star className={`w-4 h-4 ${starSmallColor} fill-current`} />
      </motion.div>

      {/* Main Heading */}
      <motion.div 
        className="relative"
        variants={itemVariants}
      >
        
        <motion.h1 
          className={`text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black ${textColor} mb-4 tracking-tighter`}
          style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
          variants={itemVariants}
        >
          {content.title}
        </motion.h1>
      </motion.div>

      <motion.p 
        className={`text-xl md:text-2xl font-medium ${textColorSecondary} mb-12 tracking-[0.3em] uppercase`}
        variants={itemVariants}
      >
        {content.subtitle}
      </motion.p>

      {/* Call to Action */}
      <motion.div
      className="mt-56"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          size="lg"
          onClick={content.ctaAction}
          className={`bg-gradient-to-b ${buttonBg} ${buttonText} backdrop-blur-lg border ${buttonBorder} shadow-xl ${buttonShadow} rounded-full text-lg font-semibold tracking-wide transition-all duration-300 px-12 py-4 ${buttonBoxShadow}`}
        >
          <span className="relative">
            {content.ctaText}
            <span className={`absolute top-[100%] left-0 w-full h-full bg-clip-text text-transparent bg-gradient-to-b ${reflectionGradient} opacity-20 blur-sm scale-y-[-1]`}>
              {content.ctaText}
            </span>
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
} 