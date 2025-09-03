'use client';

import { BackgroundScene } from '@/components/layout/BackgroundScene';
import { Navigation } from '@/components/layout/Navigation';
import { ProjectGallery } from '@/components/sections/ProjectGallery';

export default function ProjectsPage() {
  return (
    <div className="h-screen relative overflow-hidden" data-page="projects">
      <BackgroundScene showTextGif={false} />
      <Navigation />
      <ProjectGallery />
    </div>
  );
}