'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/layout/Navigation';
import { BackgroundScene } from '@/components/layout/BackgroundScene';
import { HeroSection } from '@/components/sections/HeroSection';
import { SideContent } from '@/components/sections/SideContent';
import { HeroContent } from '@/types';

export default function HomePage() {
  const router = useRouter();

  const heroContent: HeroContent = {
    title: " ",
    subtitle: " ",
    description: "",
    ctaText: "View Portfolio",
    ctaAction: () => {
      router.push('/projects');
    }
  };

  return (
    <div className="h-screen relative overflow-hidden" data-page="home">
      <BackgroundScene />
      <Navigation />
      <HeroSection content={heroContent} />
      <SideContent 
        description={heroContent.description}
        pageNumber="20"
        totalPages="25"
      />
    </div>
  );
} 