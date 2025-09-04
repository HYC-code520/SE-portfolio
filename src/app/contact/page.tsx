'use client';

import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { BackgroundScene } from '@/components/layout/BackgroundScene';
import { ContactSection } from '@/components/sections/ContactSection';

export default function ContactPage() {
  return (
    <div className="h-screen relative overflow-hidden" data-page="contact">
      <BackgroundScene showTextGif={false} />
      <Navigation />
      <ContactSection />
    </div>
  );
}