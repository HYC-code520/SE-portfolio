'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, Home, Moon, Sun } from 'lucide-react';
import { navItems } from '@/config/navigation';
import { navVariants } from '@/config/animations';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface NavigationProps {
  className?: string;
  skipAnimation?: boolean;
}

export function Navigation({ className, skipAnimation = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Dynamic text colors based on theme
  const textColor = isDarkMode ? 'text-white' : 'text-black';
  const textColorHover = isDarkMode ? 'hover:bg-white/20' : 'hover:bg-black/20';
  const borderColor = isDarkMode ? 'border-white/20' : 'border-black/20';
  const borderColorActive = isDarkMode ? 'border-white/30' : 'border-black/30';
  const bgColor = isDarkMode ? 'bg-white/10' : 'bg-black/10';
  const bgColorHover = isDarkMode ? 'hover:bg-white/20' : 'hover:bg-black/20';
  const iconColor = isDarkMode ? 'text-white' : 'text-black';

  // Only animate on home page unless skipAnimation is explicitly set
  const shouldAnimate = isHomePage && !skipAnimation;

  // Scroll spy effect - detect which section is currently visible
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // No need for custom events anymore - using DarkModeContext

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links with snap scrolling
      const element = document.getElementById(href.substring(1));
      if (element) {
        // Use scrollIntoView with smooth behavior for compatibility with snap scrolling
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update active section immediately for better UX
        setActiveSection(href.substring(1));
      }
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (isHomePage) {
      // If already on home page, scroll to top with snap scrolling
      document.getElementById('home')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update active section immediately for better UX
      setActiveSection('home');
    }
  };

  const handleDarkModeClick = () => {
    toggleDarkMode();
  };

  return (
    <motion.nav
      className={`relative z-50 flex justify-between items-center p-4 md:p-6 ${className}`}
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
        {isHomePage ? (
          <Button
            variant="ghost"
            size="lg"
            onClick={handleHomeClick}
            className={`${textColor} ${textColorHover} backdrop-blur-md border rounded-2xl px-6 py-3 font-medium tracking-wide shadow-lg transition-all duration-300 ${activeSection === 'home' ? `${borderColorActive} ${bgColor}` : `${borderColor} ${bgColor}`
              }`}
          >
            <Home className={`w-5 h-5 mr-2 ${iconColor}`} />
            Home
          </Button>
        ) : (
          <Link href="/">
            <Button
              variant="ghost"
              size="lg"
              className={`${textColor} ${bgColor} ${bgColorHover} backdrop-blur-md border ${borderColor} rounded-2xl px-6 py-3 font-medium tracking-wide shadow-lg transition-all duration-300`}
            >
              <Home className={`w-5 h-5 mr-2 ${iconColor}`} />
              Home
            </Button>
          </Link>
        )}
      </motion.div>

      {/* Desktop Navigation - Always on right */}
      <div className="hidden md:flex space-x-2">
        {navItems.map((item, index) => {
          // Determine if this nav item should be active
          const isActive = isHomePage
            ? activeSection === item.href.substring(1) // On home page, check if current section matches
            : pathname === item.href.replace('#', '/'); // On other pages, check if pathname matches

          return (
            <motion.div
              key={item.label}
              initial={shouldAnimate ? { y: -20, opacity: 0 } : false}
              animate={shouldAnimate ? { y: 0, opacity: 1 } : false}
              transition={shouldAnimate ? { delay: 0.2 + index * 0.1, duration: 0.6 } : undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isHomePage && item.href.startsWith('#') ? (
                <Button
                  variant="ghost"
                  onClick={() => handleNavClick(item.href)}
                  className={`${textColor} ${textColorHover} backdrop-blur-md rounded-2xl px-8 py-3 font-medium tracking-wide transition-all duration-300 shadow-lg ${isActive ? `border ${borderColorActive} ${bgColor}` : `border ${borderColor} hover:${borderColor}`
                    }`}
                >
                  {item.label}
                </Button>
              ) : (
                <Link href={item.href.startsWith('#') ? '/' + item.href : item.href}>
                  <Button
                    variant="ghost"
                    className={`${textColor} ${textColorHover} backdrop-blur-md rounded-2xl px-8 py-3 font-medium tracking-wide transition-all duration-300 shadow-lg ${isActive ? `border ${borderColorActive} ${bgColor}` : `border ${borderColor} hover:${borderColor}`
                      }`}
                  >
                    {item.label}
                  </Button>
                </Link>
              )}
            </motion.div>
          );
        })}

        {/* Dark Mode Button */}
        <motion.div
          initial={shouldAnimate ? { y: -20, opacity: 0 } : false}
          animate={shouldAnimate ? { y: 0, opacity: 1 } : false}
          transition={shouldAnimate ? { delay: 0.2 + navItems.length * 0.1, duration: 0.6 } : undefined}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            onClick={handleDarkModeClick}
            className={`${textColor} ${textColorHover} backdrop-blur-md rounded-2xl p-3 font-medium tracking-wide transition-all duration-300 shadow-lg ${isDarkMode ? `border ${borderColorActive} ${bgColor}` : `border ${borderColor} hover:${borderColor}`
              }`}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? <Sun className={`w-5 h-5 ${iconColor}`} /> : <Moon className={`w-5 h-5 ${iconColor}`} />}
          </Button>
        </motion.div>
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
          className={`${textColor} ${bgColor} ${bgColorHover} backdrop-blur-md border ${borderColor} rounded-2xl p-3 shadow-lg transition-all duration-300`}
        >
          <Menu className={`w-6 h-6 ${iconColor}`} />
        </Button>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`md:hidden absolute top-24 right-8 z-40 ${bgColor} backdrop-blur-xl rounded-3xl border ${borderColor} p-6 shadow-2xl`}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              // Determine if this nav item should be active
              const isActive = isHomePage
                ? activeSection === item.href.substring(1) // On home page, check if current section matches
                : pathname === item.href.replace('#', '/'); // On other pages, check if pathname matches

              return (
                <div key={item.label}>
                  {isHomePage && item.href.startsWith('#') ? (
                    <Button
                      variant="ghost"
                      onClick={() => handleNavClick(item.href)}
                      className={`${textColor} ${textColorHover} rounded-2xl px-6 py-3 font-medium tracking-wide transition-all duration-300 justify-start w-full ${isActive ? `${bgColor} border ${borderColor}` : ''
                        }`}
                    >
                      {item.label}
                    </Button>
                  ) : (
                    <Link href={item.href.startsWith('#') ? '/' + item.href : item.href}>
                      <Button
                        variant="ghost"
                        className={`${textColor} ${textColorHover} rounded-2xl px-6 py-3 font-medium tracking-wide transition-all duration-300 justify-start w-full ${isActive ? `${bgColor} border ${borderColor}` : ''
                          }`}
                      >
                        {item.label}
                      </Button>
                    </Link>
                  )}
                </div>
              );
            })}

            {/* Dark Mode Button in Mobile Menu */}
            <Button
              variant="ghost"
              onClick={handleDarkModeClick}
              className={`${textColor} ${textColorHover} rounded-2xl px-6 py-3 font-medium tracking-wide transition-all duration-300 justify-start w-full ${isDarkMode ? `${bgColor} border ${borderColor}` : ''
                }`}
            >
              {isDarkMode ? <Sun className={`w-5 h-5 mr-2 ${iconColor}`} /> : <Moon className={`w-5 h-5 mr-2 ${iconColor}`} />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}