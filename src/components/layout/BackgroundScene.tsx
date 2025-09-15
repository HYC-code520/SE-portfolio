import React from 'react';

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
  return (
    <>
      {/* Original Smart Responsive Background - UNCHANGED */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          backgroundColor: '#1a1a2e',
          backgroundPosition: 'center',
          backgroundSize: 'cover' // Keep background at cover size always
        }}
      />
      
      {/* Star Background Layer - UNCHANGED */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url('${starImageUrl}')`,
          backgroundPosition: 'center',
          backgroundSize: '800px' // Keep star background at fixed size always
        }}
      />
      
      {/* ARIEL Text GIF - Only show when showTextGif is true */}
      {showTextGif && (
        <div 
          className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out
                     bg-[length:500px] sm:bg-[length:600px] md:bg-[length:800px] lg:bg-[length:1000px] xl:bg-[length:1200px]"
          style={{
            backgroundImage: `url('${textGifUrl}')`,
            backgroundPosition: 'center'
          }}
        />
      )}
      
      {/* Original Responsive overlay - UNCHANGED */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10" />
    </>
  );
}