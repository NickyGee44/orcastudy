'use client';

import { useRef, useEffect } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import HeaderBar from './HeaderBar';
import HeroBlock from './HeroBlock';
import MetricsGrid from './MetricsGrid';
import NarrativeSection from './NarrativeSection';
import OutcomesSection from './OutcomesSection';
import TestimonialStrip from './TestimonialStrip';
import FooterSection from './FooterSection';

export default function CaseStudyPreview() {
  const { config } = useCaseStudyConfig();
  const previewRef = useRef<HTMLDivElement>(null);

  // Expose ref for export functionality
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).previewRef = previewRef;
    }
  }, []);

  const themeClasses = config.theme === 'dark' 
    ? 'bg-orca-charcoal text-orca-light' 
    : 'bg-orca-white text-orca-black';

  return (
    <div
      ref={previewRef}
      data-export-target
      className={`${themeClasses} rounded-lg shadow-2xl`}
      style={{
        width: '850px',
        height: '1100px',
        padding: '60px',
        boxSizing: 'border-box',
      }}
    >
        {/* Header Bar */}
        <HeaderBar />

        {/* Hero Block */}
        <HeroBlock />

        {/* Metrics Grid */}
        <MetricsGrid />

        {/* Two-Column Narrative Section */}
        <NarrativeSection />

        {/* Key Outcomes */}
        <OutcomesSection />

        {/* Testimonial Strip */}
        {config.testimonial?.quote && <TestimonialStrip />}

        {/* Footer / CTA */}
        {config.showOrcaFooter && <FooterSection />}
    </div>
  );
}
