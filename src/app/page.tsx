'use client';

import ContentSection from '@/components/sections/ContentSection'; // Remove HeroSection, if needed

export default function Home() {
  return (
    <div className="pt-16"> {/* Add padding top for fixed header */}
      <ContentSection />
    </div>
  );
}
