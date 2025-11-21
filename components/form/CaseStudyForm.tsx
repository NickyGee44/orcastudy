'use client';

import { useState } from 'react';
import BasicsSection from './BasicsSection';
import MetricsSection from './MetricsSection';
import NarrativeSection from './NarrativeSection';
import SettingsSection from './SettingsSection';
import PersistenceControls from './PersistenceControls';
import FormActions from './FormActions';

interface SectionState {
  basics: boolean;
  metrics: boolean;
  narrative: boolean;
  settings: boolean;
  persistence: boolean;
}

export default function CaseStudyForm() {
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
    <div className="h-full overflow-y-auto bg-orca-dark">
      <div className="p-6 space-y-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-orca-light mb-2">Case Study Generator</h1>
          <p className="text-orca-grey-3 text-sm">
            Fill in the form below to generate your case study. Changes update the preview in real-time.
          </p>
        </div>

        {/* Case Study Basics Section */}
        <div className="border border-orca-grey-1 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('basics')}
            className="w-full px-6 py-4 bg-orca-grey-1 hover:bg-orca-grey-2 transition-colors flex items-center justify-between text-left"
          >
            <h2 className="text-xl font-semibold text-orca-light">Case Study Basics</h2>
            <span className="text-orca-grey-3">
              {sections.basics ? '▼' : '▶'}
            </span>
          </button>
          {sections.basics && (
            <div className="p-6">
              <BasicsSection />
            </div>
          )}
        </div>

        {/* Metrics & KPIs Section */}
        <div className="border border-orca-grey-1 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('metrics')}
            className="w-full px-6 py-4 bg-orca-grey-1 hover:bg-orca-grey-2 transition-colors flex items-center justify-between text-left"
          >
            <h2 className="text-xl font-semibold text-orca-light">Metrics & KPIs</h2>
            <span className="text-orca-grey-3">
              {sections.metrics ? '▼' : '▶'}
            </span>
          </button>
          {sections.metrics && (
            <div className="p-6">
              <MetricsSection />
            </div>
          )}
        </div>

        {/* Narrative Sections */}
        <div className="border border-orca-grey-1 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('narrative')}
            className="w-full px-6 py-4 bg-orca-grey-1 hover:bg-orca-grey-2 transition-colors flex items-center justify-between text-left"
          >
            <h2 className="text-xl font-semibold text-orca-light">Narrative Content</h2>
            <span className="text-orca-grey-3">
              {sections.narrative ? '▼' : '▶'}
            </span>
          </button>
          {sections.narrative && (
            <div className="p-6">
              <NarrativeSection />
            </div>
          )}
        </div>

        {/* Settings Section */}
        <div className="border border-orca-grey-1 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('settings')}
            className="w-full px-6 py-4 bg-orca-grey-1 hover:bg-orca-grey-2 transition-colors flex items-center justify-between text-left"
          >
            <h2 className="text-xl font-semibold text-orca-light">Settings</h2>
            <span className="text-orca-grey-3">
              {sections.settings ? '▼' : '▶'}
            </span>
          </button>
          {sections.settings && (
            <div className="p-6">
              <SettingsSection />
            </div>
          )}
        </div>

        {/* Persistence Controls */}
        <div className="border border-orca-grey-1 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleSection('persistence')}
            className="w-full px-6 py-4 bg-orca-grey-1 hover:bg-orca-grey-2 transition-colors flex items-center justify-between text-left"
          >
            <h2 className="text-xl font-semibold text-orca-light">Save & Load</h2>
            <span className="text-orca-grey-3">
              {sections.persistence ? '▼' : '▶'}
            </span>
          </button>
          {sections.persistence && (
            <div className="p-6">
              <PersistenceControls />
            </div>
          )}
        </div>

        {/* Form Actions */}
        <div className="pt-4">
          <FormActions />
        </div>
      </div>
    </div>
  );
}

