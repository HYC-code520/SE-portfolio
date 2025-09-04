'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { BackgroundScene } from '@/components/layout/BackgroundScene';
import { HeroSection } from '@/components/sections/HeroSection';
import { SideContent } from '@/components/sections/SideContent';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import { AboutContent } from '@/components/sections/AboutContent';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroContent } from '@/types';

export default function HomePage() {
  const heroContent: HeroContent = {
    title: " ",
    subtitle: " ",
    description: "",
    ctaText: "Learn More",
    ctaAction: () => {
      // Smooth scroll to about section
      document.getElementById('about')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative">
      {/* Fixed Background - stays in place while content scrolls (no text GIF) */}
      <div className="fixed inset-0 z-0">
        <BackgroundScene showTextGif={false} />
      </div>

      {/* Fixed Navigation - sticks to top of window */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="h-screen relative">
          {/* Ariel Text GIF - only on home section, scrolls with content */}
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out
                         bg-[length:500px] sm:bg-[length:600px] md:bg-[length:800px] lg:bg-[length:1000px] xl:bg-[length:1200px]"
              style={{
                backgroundImage: `url('/Ariel-text.gif')`,
                backgroundPosition: 'center'
              }}
            />
          </div>
          <div className="relative z-10">
            <HeroSection content={heroContent} />
            <SideContent 
              description={heroContent.description}
              pageNumber="20"
              totalPages="25"
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="h-screen relative">
          <AboutContent />
        </section>

        {/* Projects Section */}
        <section id="projects" className="h-screen relative">
          <ProjectGallery />
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen relative">
          <ContactSection />
        </section>
      </div>
    </div>
  );
} 