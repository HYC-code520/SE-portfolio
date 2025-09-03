'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { BackgroundScene } from '@/components/layout/BackgroundScene';
import { AboutContent } from '@/components/sections/AboutContent';

export default function AboutPage() {
  return (
    <div className="h-screen relative overflow-hidden" data-page="about">
      <BackgroundScene showTextGif={false} />
      <Navigation />
      <AboutContent />
    </div>
  );
}