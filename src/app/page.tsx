'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { BackgroundScene } from '@/components/layout/BackgroundScene';
import { HeroSection } from '@/components/sections/HeroSection';
import { SideContent } from '@/components/sections/SideContent';
import { AboutContent } from '@/components/sections/AboutContent';
import { SkillsContent } from '@/components/sections/SkillsContent';
import { ContactSection } from '@/components/sections/ContactSection';
import { HeroContent } from '@/types';
import { useDarkMode } from '@/contexts/DarkModeContext';

// Dynamically import components that have client-side logic
const Navigation = dynamic(() => import('@/components/layout/Navigation').then(mod => ({ default: mod.Navigation })), {
  ssr: false
});

const ProjectGallery = dynamic(() => import('@/components/sections/ProjectGallery').then(mod => ({ default: mod.ProjectGallery })), {
  ssr: false
});

export default function HomePage() {
  const { isDarkMode } = useDarkMode();

  const heroContent: HeroContent = {
    title: " ",
    subtitle: " ",
    description: "",
    ctaText: "Discover My Story",
    ctaAction: () => {
      // Scroll to about section with snap scrolling
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
      <div className="relative z-10 snap-scroll-container">
        {/* Hero Section */}
        <section id="home" className="h-screen relative">
          {/* Ariel Text GIF - only on home section, scrolls with content */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-center bg-no-repeat transition-all duration-500 ease-in-out
                         bg-[length:500px] sm:bg-[length:600px] md:bg-[length:800px] lg:bg-[length:1000px] xl:bg-[length:1200px]"
              style={{
                backgroundImage: `url('${isDarkMode ? '/Ariel-text-dark-mode.gif' : '/Ariel-text-light-mode.gif'}')`,
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
        <section id="about" className="min-h-screen py-8 relative">
          <AboutContent />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-8 relative">
          <SkillsContent />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-[90vh] py-8 mb-32 relative">
          <ProjectGallery />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-8 mt-32 relative">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}