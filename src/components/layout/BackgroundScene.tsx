import React, { useState, useEffect } from 'react';

interface BackgroundSceneProps {
  imageUrl?: string;
  starImageUrl?: string;
  textGifUrl?: string;
  showTextGif?: boolean;
}

export function BackgroundScene({ 
  imageUrl = '/Background.png',
  starImageUrl = '/star-bg.png',
  textGifUrl = '/Ariel-text.gif',
  showTextGif = true
}: BackgroundSceneProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Listen for dark mode changes from Navigation component
  useEffect(() => {
    const handleDarkModeChange = (event: CustomEvent) => {
      setIsDarkMode(event.detail);
    };

    window.addEventListener('darkModeChange', handleDarkModeChange as EventListener);
    
    return () => {
      window.removeEventListener('darkModeChange', handleDarkModeChange as EventListener);
    };
  }, []);

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
        <div className="absolute inset-0 bg-black/80 transition-all duration-500 ease-in-out z-0" />
      )}
      
      {/* Original Responsive overlay - Hide in dark mode */}
      {!isDarkMode && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 z-10" />
      )}
      
      {/* Star Background Layer - Always visible and on top */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out z-20"
        style={{
          backgroundImage: `url('${starImageUrl}')`,
          backgroundPosition: 'center',
          backgroundSize: '800px'
        }}
      />
      
      {/* ARIEL Text GIF - Only show when showTextGif is true - Highest layer */}
      {showTextGif && (
        <div 
          className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out z-30
                     bg-[length:500px] sm:bg-[length:600px] md:bg-[length:800px] lg:bg-[length:1000px] xl:bg-[length:1200px]"
          style={{
            backgroundImage: `url('${textGifUrl}')`,
            backgroundPosition: 'center'
          }}
        />
      )}
    </>
  );
}