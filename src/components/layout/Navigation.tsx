'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, Home } from 'lucide-react';
import { navItems } from '@/config/navigation';
import { navVariants } from '@/config/animations';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  className?: string;
  skipAnimation?: boolean;
}

export function Navigation({ className, skipAnimation = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Only animate on home page unless skipAnimation is explicitly set
  const shouldAnimate = isHomePage && !skipAnimation;

  return (
    <motion.nav 
      className={`relative z-50 flex justify-between items-center p-8 md:p-12 ${className}`}
      variants={shouldAnimate ? navVariants : undefined}
      initial={shouldAnimate ? "hidden" : false}
      animate={shouldAnimate ? "visible" : false}
      transition={shouldAnimate ? { duration: 0.8, ease: "easeOut" } : undefined}
    >
      {/* Home Button - Always show on left */}
      <motion.div 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/">
          <Button 
            variant="ghost" 
            size="lg"
            className="text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 font-medium tracking-wide shadow-lg transition-all duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            Home
          </Button>
        </Link>
      </motion.div>

      {/* Desktop Navigation - Always on right */}
      <div className="hidden md:flex space-x-2">
        {navItems.map((item, index) => (
          <motion.div 
            key={item.label}
            initial={shouldAnimate ? { y: -20, opacity: 0 } : false}
            animate={shouldAnimate ? { y: 0, opacity: 1 } : false}
            transition={shouldAnimate ? { delay: 0.2 + index * 0.1, duration: 0.6 } : undefined}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={item.href}>
              <Button 
                variant="ghost"
                className={`text-white hover:bg-white/20 backdrop-blur-md rounded-2xl px-8 py-3 font-medium tracking-wide transition-all duration-300 shadow-lg ${
                  index === 0 ? 'border border-white/30 bg-white/10' : 'border border-white/10 hover:border-white/20'
                }`}
              >
                {item.label}
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Menu Button - Always on right */}
      <motion.div 
        className="md:hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="ghost"
          size="lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-3 shadow-lg transition-all duration-300"
        >
          <Menu className="w-6 h-6" />
        </Button>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-24 right-8 z-40 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-6 shadow-2xl"
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20 rounded-2xl px-6 py-3 font-medium tracking-wide transition-all duration-300 justify-start w-full"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 