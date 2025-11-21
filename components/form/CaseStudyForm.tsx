'use client';

import { useState } from 'react';
import BasicsSection from './BasicsSection';
import MetricsSection from './MetricsSection';
import NarrativeSection from './NarrativeSection';
import SettingsSection from './SettingsSection';
import PersistenceControls from './PersistenceControls';
import FormActions from './FormActions';
import ProgressIndicator from './ProgressIndicator';

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
    <div className="h-full overflow-y-auto bg-gradient-to-b from-orca-dark to-orca-darker">
      <div className="p-6 space-y-4">
        {/* Welcome Header */}
        <div className="mb-6 pb-6 border-b border-orca-grey-1/50">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-orca-accent/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-orca-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-orca-light">Case Study Generator</h1>
              <p className="text-orca-grey-3 text-sm mt-1">
                Create professional case studies in minutes
              </p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-orca-accent/10 border border-orca-accent/20 rounded-lg">
            <p className="text-sm text-orca-light/90 flex items-start space-x-2">
              <svg className="w-5 h-5 text-orca-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span><strong>Tip:</strong> Fill out the form on the left and watch your case study come to life in real-time on the right. Start with the basics, then add metrics and narrative content.</span>
            </p>
          </div>
          <ProgressIndicator />
        </div>

        {/* Case Study Basics Section */}
        <div className="border border-orca-grey-1/50 rounded-xl overflow-hidden bg-orca-grey-1/20 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
          <button
            onClick={() => toggleSection('basics')}
            className="w-full px-5 py-4 bg-gradient-to-r from-orca-grey-1/50 to-orca-grey-1/30 hover:from-orca-grey-1/70 hover:to-orca-grey-1/50 transition-all flex items-center justify-between text-left group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-orca-accent/20 flex items-center justify-center group-hover:bg-orca-accent/30 transition-colors">
                <svg className="w-4 h-4 text-orca-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-orca-light">Case Study Basics</h2>
            </div>
            <span className="text-orca-grey-3 group-hover:text-orca-accent transition-colors">
              {sections.basics ? '▼' : '▶'}
            </span>
          </button>
          {sections.basics && (
            <div className="p-6 bg-orca-dark/50 animate-in slide-in-from-top-2 duration-200">
              <BasicsSection />
            </div>
          )}
        </div>

        {/* Metrics & KPIs Section */}
        <div className="border border-orca-grey-1/50 rounded-xl overflow-hidden bg-orca-grey-1/20 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
          <button
            onClick={() => toggleSection('metrics')}
            className="w-full px-5 py-4 bg-gradient-to-r from-orca-grey-1/50 to-orca-grey-1/30 hover:from-orca-grey-1/70 hover:to-orca-grey-1/50 transition-all flex items-center justify-between text-left group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-orca-accent/20 flex items-center justify-center group-hover:bg-orca-accent/30 transition-colors">
                <svg className="w-4 h-4 text-orca-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-orca-light">Metrics & KPIs</h2>
            </div>
            <span className="text-orca-grey-3 group-hover:text-orca-accent transition-colors">
              {sections.metrics ? '▼' : '▶'}
            </span>
          </button>
          {sections.metrics && (
            <div className="p-6 bg-orca-dark/50 animate-in slide-in-from-top-2 duration-200">
              <MetricsSection />
            </div>
          )}
        </div>

        {/* Narrative Sections */}
        <div className="border border-orca-grey-1/50 rounded-xl overflow-hidden bg-orca-grey-1/20 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
          <button
            onClick={() => toggleSection('narrative')}
            className="w-full px-5 py-4 bg-gradient-to-r from-orca-grey-1/50 to-orca-grey-1/30 hover:from-orca-grey-1/70 hover:to-orca-grey-1/50 transition-all flex items-center justify-between text-left group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-orca-accent/20 flex items-center justify-center group-hover:bg-orca-accent/30 transition-colors">
                <svg className="w-4 h-4 text-orca-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-orca-light">Narrative Content</h2>
            </div>
            <span className="text-orca-grey-3 group-hover:text-orca-accent transition-colors">
              {sections.narrative ? '▼' : '▶'}
            </span>
          </button>
          {sections.narrative && (
            <div className="p-6 bg-orca-dark/50 animate-in slide-in-from-top-2 duration-200">
              <NarrativeSection />
            </div>
          )}
        </div>

        {/* Settings Section */}
        <div className="border border-orca-grey-1/50 rounded-xl overflow-hidden bg-orca-grey-1/20 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
          <button
            onClick={() => toggleSection('settings')}
            className="w-full px-5 py-4 bg-gradient-to-r from-orca-grey-1/50 to-orca-grey-1/30 hover:from-orca-grey-1/70 hover:to-orca-grey-1/50 transition-all flex items-center justify-between text-left group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-orca-accent/20 flex items-center justify-center group-hover:bg-orca-accent/30 transition-colors">
                <svg className="w-4 h-4 text-orca-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-orca-light">Settings</h2>
            </div>
            <span className="text-orca-grey-3 group-hover:text-orca-accent transition-colors">
              {sections.settings ? '▼' : '▶'}
            </span>
          </button>
          {sections.settings && (
            <div className="p-6 bg-orca-dark/50 animate-in slide-in-from-top-2 duration-200">
              <SettingsSection />
            </div>
          )}
        </div>

        {/* Persistence Controls */}
        <div className="border border-orca-grey-1/50 rounded-xl overflow-hidden bg-orca-grey-1/20 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
          <button
            onClick={() => toggleSection('persistence')}
            className="w-full px-5 py-4 bg-gradient-to-r from-orca-grey-1/50 to-orca-grey-1/30 hover:from-orca-grey-1/70 hover:to-orca-grey-1/50 transition-all flex items-center justify-between text-left group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-orca-accent/20 flex items-center justify-center group-hover:bg-orca-accent/30 transition-colors">
                <svg className="w-4 h-4 text-orca-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-orca-light">Save & Load</h2>
            </div>
            <span className="text-orca-grey-3 group-hover:text-orca-accent transition-colors">
              {sections.persistence ? '▼' : '▶'}
            </span>
          </button>
          {sections.persistence && (
            <div className="p-6 bg-orca-dark/50 animate-in slide-in-from-top-2 duration-200">
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

