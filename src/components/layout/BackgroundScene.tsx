import React from 'react';
import { useDarkMode } from '@/contexts/DarkModeContext';

interface BackgroundSceneProps {
  imageUrl?: string;
  starImageUrl?: string;
  textGifUrl?: string;
  showTextGif?: boolean;
}

export function BackgroundScene({ 
  imageUrl = '/Background.png',
  starImageUrl = '/star-bg.png',
  textGifUrl = '/Ariel-text-light-mode.gif',
  showTextGif = true
}: BackgroundSceneProps) {
  const { isDarkMode } = useDarkMode();
  
  // Determine which text GIF to use based on theme
  const currentTextGif = isDarkMode ? '/Ariel-text-dark-mode.gif' : textGifUrl;

  return (
    <>
      {/* Original Smart Responsive Background - Hide in dark mode */}
      {!isDarkMode && (
        <div 
          className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out z-0"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            backgroundColor: '#1a1a2e',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      )}
      
      {/* Dark background for dark mode - Lower layer */}
      {isDarkMode && (
        <div 
          className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out z-0"
          style={{
            backgroundImage: `url('/Dark-Background.png')`,
            backgroundColor: '#0a0a0a',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
      )}
      
      {/* Original Responsive overlay - Hide in dark mode */}
      {!isDarkMode && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 z-10" />
      )}
      
      {/* Star Background Layer - Only visible in light mode */}
      {!isDarkMode && (
        <div 
          className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out z-20"
          style={{
            backgroundImage: `url('${starImageUrl}')`,
            backgroundPosition: 'center',
            backgroundSize: '800px'
          }}
        />
      )}
      
      {/* ARIEL Text GIF - Only show when showTextGif is true - Highest layer */}
      {showTextGif && (
        <div 
          className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out z-30
                     bg-[length:500px] sm:bg-[length:600px] md:bg-[length:800px] lg:bg-[length:1000px] xl:bg-[length:1200px]"
          style={{
            backgroundImage: `url('${currentTextGif}')`,
            backgroundPosition: 'center'
          }}
        />
      )}
    </>
  );
}