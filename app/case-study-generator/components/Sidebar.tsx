'use client';

import { useState } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import FormSection from './FormSection';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import BasicsSection from '@/components/form/BasicsSection';
import MetricsSection from '@/components/form/MetricsSection';
import NarrativeSection from '@/components/form/NarrativeSection';
import SettingsSection from '@/components/form/SettingsSection';
import PersistenceControls from '@/components/form/PersistenceControls';
import TemplateSelector from '@/components/form/TemplateSelector';
import AutosaveIndicator from './AutosaveIndicator';

interface SectionState {
  basics: boolean;
  metrics: boolean;
  narrative: boolean;
  settings: boolean;
  persistence: boolean;
}

export default function Sidebar() {
  const { config, resetToDefault } = useCaseStudyConfig();
  const [sections, setSections] = useState<SectionState>({
    basics: true,
    metrics: true,
    narrative: true,
    settings: false,
    persistence: false,
  });

  const toggleSection = (section: keyof SectionState) => {
    setSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="w-full lg:w-[420px] h-screen lg:h-auto lg:flex-shrink-0 flex flex-col bg-[#1A1A1A] rounded-lg border border-[rgba(255,255,255,0.1)] shadow-xl overflow-hidden">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-[#1A1A1A] border-b border-[rgba(255,255,255,0.1)] px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[28px] font-bold text-white leading-tight">Case Study Builder</h1>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={resetToDefault}
            className="flex-1"
          >
            Reset
          </Button>
        </div>
        {/* Autosave Indicator */}
        <AutosaveIndicator />
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-6 py-6 space-y-5">
          {/* Template Selector */}
          <div className="mb-6">
            <TemplateSelector />
          </div>

          {/* Case Study Info */}
          <FormSection
            title="Case Study Info"
            subtitle="Client details and overview"
            isOpen={sections.basics}
            onToggle={() => toggleSection('basics')}
          >
            <BasicsSection />
          </FormSection>

          {/* Metrics */}
          <FormSection
            title="Metrics & KPIs"
            subtitle="Select and configure key performance indicators"
            isOpen={sections.metrics}
            onToggle={() => toggleSection('metrics')}
          >
            <MetricsSection />
          </FormSection>

          {/* Narrative Sections */}
          <FormSection
            title="Narrative Content"
            subtitle="Story, challenges, and outcomes"
            isOpen={sections.narrative}
            onToggle={() => toggleSection('narrative')}
          >
            <NarrativeSection />
          </FormSection>

          {/* Settings */}
          <FormSection
            title="Settings"
            subtitle="Theme and display options"
            isOpen={sections.settings}
            onToggle={() => toggleSection('settings')}
          >
            <SettingsSection />
          </FormSection>

          {/* Save & Load */}
          <FormSection
            title="Save & Load"
            subtitle="Manage your case study templates"
            isOpen={sections.persistence}
            onToggle={() => toggleSection('persistence')}
          >
            <PersistenceControls />
          </FormSection>
        </div>
      </div>
    </div>
  );
}

