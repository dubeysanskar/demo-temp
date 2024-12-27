'use client';

import { HeroSection } from '@/components/hero-section';
import { GuidelinesSection } from '@/components/sections/guidelines-section';
import { ThemesSection } from '@/components/sections/themes-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { PrizesSection } from '@/components/sections/prizes-section';
import { GallerySection } from '@/components/sections/gallery-section';
import { SponsorsSection } from '@/components/sections/sponsors-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <PrizesSection />
      <GuidelinesSection />
      <ThemesSection />
      <TimelineSection />
      <GallerySection />
      <SponsorsSection />
      <ContactSection />
    </main>
  );
}