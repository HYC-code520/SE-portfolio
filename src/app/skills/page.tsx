'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { BackgroundScene } from '@/components/layout/BackgroundScene';
import { SkillsContent } from '@/components/sections/SkillsContent';

export default function SkillsPage() {
  return (
    <div className="h-screen relative overflow-hidden" data-page="skills">
      <BackgroundScene showTextGif={false} />
      <Navigation />
      <SkillsContent />
    </div>
  );
}