'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Sparkles } from 'lucide-react';
import { containerVariants, itemVariants, floatingVariants } from '@/config/animations';
import { HeroContent } from '@/types';

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
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
      <motion.div
        className="absolute -bottom-8 left-24"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Star className="w-4 h-4 text-white/40 fill-current" />
      </motion.div>

      {/* Main Heading */}
      <motion.div 
        className="relative"
        variants={itemVariants}
      >
        
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-4 tracking-tighter"
          style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
          variants={itemVariants}
        >
          {content.title}
        </motion.h1>
      </motion.div>

      <motion.p 
        className="text-xl md:text-2xl font-medium text-white/90 mb-12 tracking-[0.3em] uppercase"
        variants={itemVariants}
      >
        {content.subtitle}
      </motion.p>

      {/* Decorative Star */}
      <motion.div
        className="mb-40"
        variants={itemVariants}
      >
        <Star className="w-12 h-12 text-white fill-current mx-auto" />
      </motion.div>

      {/* Call to Action */}
      <motion.div
      className="mt-36"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          size="lg"
          onClick={content.ctaAction}
          className="bg-gradient-to-b from-white/20 to-white/0 text-white backdrop-blur-lg border border-white/30 shadow-xl shadow-black/20 rounded-full text-lg font-semibold tracking-wide transition-all duration-300 px-12 py-4 [box-shadow:0_0_2px_#fff_inset,_0_0_10px_#fff_inset] hover:[box-shadow:0_0_2px_#fff_inset,_0_0_15px_#fff_inset,_0_0_30px_#888]"
        >
          <span className="relative">
            {content.ctaText}
            <span className="absolute top-[100%] left-0 w-full h-full bg-clip-text text-transparent bg-gradient-to-b from-white to-transparent opacity-20 blur-sm scale-y-[-1]">
              {content.ctaText}
            </span>
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
} 