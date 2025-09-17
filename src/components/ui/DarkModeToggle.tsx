'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext';

export function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-white" />
      ) : (
        <Moon className="w-6 h-6 text-white" />
      )}
    </motion.button>
  );
}
