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
    <div className="h-full overflow-y-auto bg-gradient-to-b from-orca-dark via-orca-dark to-orca-darker">
      <div className="max-w-4xl mx-auto p-6 space-y-5">
        {/* Welcome Header */}
        <div className="mb-6 pb-6 border-b border-gradient-to-r from-orca-purple/30 via-orca-blue/30 to-transparent bg-gradient-to-r from-orca-purple/5 via-orca-blue/5 to-transparent rounded-xl p-5">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orca-purple/30 to-orca-blue/30 flex items-center justify-center flex-shrink-0 shadow-lg">
              <span className="inline-flex items-center justify-center w-5 h-5 flex-shrink-0 text-orca-light" style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', maxWidth: '20px', maxHeight: '20px' }}>
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} style={{ width: '100%', height: '100%', display: 'block' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orca-light to-orca-grey-3 bg-clip-text text-transparent">
                Case Study Generator
              </h1>
              <p className="text-orca-grey-3 text-sm mt-1">
                Create professional case studies in minutes
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gradient-to-r from-orca-purple/10 to-orca-blue/10 border border-orca-purple/30 rounded-lg">
            <p className="text-sm text-orca-light/90 flex items-start space-x-2">
              <svg className="w-4 h-4 text-orca-purple mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span><strong className="text-orca-purple-light">Tip:</strong> Fill out the form sections below. Start with basics, select your metrics, then add narrative content. Click "Preview Case Study" when ready.</span>
            </p>
          </div>
          <div className="mt-4">
            <ProgressIndicator />
          </div>
        </div>

        {/* Case Study Basics Section */}
        <div className="border-2 border-orca-grey-1/30 rounded-xl overflow-hidden bg-gradient-to-br from-orca-grey-1/10 to-orca-grey-1/5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-orca-purple/30 transition-all">
          <button
            onClick={() => toggleSection('basics')}
            className={`w-full px-5 py-4 bg-gradient-to-r transition-all flex items-center justify-between text-left group ${
              sections.basics 
                ? 'from-orca-purple/20 to-orca-blue/20 border-b-2 border-orca-purple/30' 
                : 'from-orca-grey-1/30 to-orca-grey-1/20 hover:from-orca-grey-1/40 hover:to-orca-grey-1/30'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                sections.basics 
                  ? 'bg-gradient-to-br from-orca-purple to-orca-blue shadow-lg' 
                  : 'bg-orca-grey-1/50 group-hover:bg-orca-purple/20'
              }`}>
                <svg className={`w-4 h-4 ${sections.basics ? 'text-orca-light' : 'text-orca-grey-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-orca-light">Case Study Basics</h2>
                <p className="text-xs text-orca-grey-3 mt-0.5">Client information and overview</p>
              </div>
            </div>
            <span className={`text-lg transition-colors ${sections.basics ? 'text-orca-purple' : 'text-orca-grey-3 group-hover:text-orca-blue'}`}>
              {sections.basics ? '▼' : '▶'}
            </span>
          </button>
          {sections.basics && (
            <div className="p-6 bg-orca-dark/30 animate-in slide-in-from-top-2 duration-200">
              <BasicsSection />
            </div>
          )}
        </div>

        {/* Metrics & KPIs Section */}
        <div className="border-2 border-orca-grey-1/30 rounded-xl overflow-hidden bg-gradient-to-br from-orca-grey-1/10 to-orca-grey-1/5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-orca-purple/30 transition-all">
          <button
            onClick={() => toggleSection('metrics')}
            className={`w-full px-5 py-4 bg-gradient-to-r transition-all flex items-center justify-between text-left group ${
              sections.metrics 
                ? 'from-orca-purple/20 to-orca-blue/20 border-b-2 border-orca-purple/30' 
                : 'from-orca-grey-1/30 to-orca-grey-1/20 hover:from-orca-grey-1/40 hover:to-orca-grey-1/30'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                sections.metrics 
                  ? 'bg-gradient-to-br from-orca-purple to-orca-blue shadow-lg' 
                  : 'bg-orca-grey-1/50 group-hover:bg-orca-purple/20'
              }`}>
                <svg className={`w-4 h-4 ${sections.metrics ? 'text-orca-light' : 'text-orca-grey-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-orca-light">Metrics & KPIs</h2>
                <p className="text-xs text-orca-grey-3 mt-0.5">Select and configure key performance indicators</p>
              </div>
            </div>
            <span className={`text-lg transition-colors ${sections.metrics ? 'text-orca-purple' : 'text-orca-grey-3 group-hover:text-orca-blue'}`}>
              {sections.metrics ? '▼' : '▶'}
            </span>
          </button>
          {sections.metrics && (
            <div className="p-6 bg-orca-dark/30 animate-in slide-in-from-top-2 duration-200">
              <MetricsSection />
            </div>
          )}
        </div>

        {/* Narrative Sections */}
        <div className="border-2 border-orca-grey-1/30 rounded-xl overflow-hidden bg-gradient-to-br from-orca-grey-1/10 to-orca-grey-1/5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-orca-purple/30 transition-all">
          <button
            onClick={() => toggleSection('narrative')}
            className={`w-full px-5 py-4 bg-gradient-to-r transition-all flex items-center justify-between text-left group ${
              sections.narrative 
                ? 'from-orca-purple/20 to-orca-blue/20 border-b-2 border-orca-purple/30' 
                : 'from-orca-grey-1/30 to-orca-grey-1/20 hover:from-orca-grey-1/40 hover:to-orca-grey-1/30'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                sections.narrative 
                  ? 'bg-gradient-to-br from-orca-purple to-orca-blue shadow-lg' 
                  : 'bg-orca-grey-1/50 group-hover:bg-orca-purple/20'
              }`}>
                <svg className={`w-4 h-4 ${sections.narrative ? 'text-orca-light' : 'text-orca-grey-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-orca-light">Narrative Content</h2>
                <p className="text-xs text-orca-grey-3 mt-0.5">Story, challenges, and outcomes</p>
              </div>
            </div>
            <span className={`text-lg transition-colors ${sections.narrative ? 'text-orca-purple' : 'text-orca-grey-3 group-hover:text-orca-blue'}`}>
              {sections.narrative ? '▼' : '▶'}
            </span>
          </button>
          {sections.narrative && (
            <div className="p-6 bg-orca-dark/30 animate-in slide-in-from-top-2 duration-200">
              <NarrativeSection />
            </div>
          )}
        </div>

        {/* Settings Section */}
        <div className="border-2 border-orca-grey-1/30 rounded-xl overflow-hidden bg-gradient-to-br from-orca-grey-1/10 to-orca-grey-1/5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-orca-purple/30 transition-all">
          <button
            onClick={() => toggleSection('settings')}
            className={`w-full px-5 py-4 bg-gradient-to-r transition-all flex items-center justify-between text-left group ${
              sections.settings 
                ? 'from-orca-purple/20 to-orca-blue/20 border-b-2 border-orca-purple/30' 
                : 'from-orca-grey-1/30 to-orca-grey-1/20 hover:from-orca-grey-1/40 hover:to-orca-grey-1/30'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                sections.settings 
                  ? 'bg-gradient-to-br from-orca-purple to-orca-blue shadow-lg' 
                  : 'bg-orca-grey-1/50 group-hover:bg-orca-purple/20'
              }`}>
                <svg className={`w-4 h-4 ${sections.settings ? 'text-orca-light' : 'text-orca-grey-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-orca-light">Settings</h2>
                <p className="text-xs text-orca-grey-3 mt-0.5">Theme and display options</p>
              </div>
            </div>
            <span className={`text-lg transition-colors ${sections.settings ? 'text-orca-purple' : 'text-orca-grey-3 group-hover:text-orca-blue'}`}>
              {sections.settings ? '▼' : '▶'}
            </span>
          </button>
          {sections.settings && (
            <div className="p-6 bg-orca-dark/30 animate-in slide-in-from-top-2 duration-200">
              <SettingsSection />
            </div>
          )}
        </div>

        {/* Persistence Controls */}
        <div className="border-2 border-orca-grey-1/30 rounded-xl overflow-hidden bg-gradient-to-br from-orca-grey-1/10 to-orca-grey-1/5 backdrop-blur-sm shadow-lg hover:shadow-xl hover:border-orca-purple/30 transition-all">
          <button
            onClick={() => toggleSection('persistence')}
            className={`w-full px-5 py-4 bg-gradient-to-r transition-all flex items-center justify-between text-left group ${
              sections.persistence 
                ? 'from-orca-purple/20 to-orca-blue/20 border-b-2 border-orca-purple/30' 
                : 'from-orca-grey-1/30 to-orca-grey-1/20 hover:from-orca-grey-1/40 hover:to-orca-grey-1/30'
            }`}
          >
            <div className="flex items-center space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0 ${
                sections.persistence 
                  ? 'bg-gradient-to-br from-orca-purple to-orca-blue shadow-lg' 
                  : 'bg-orca-grey-1/50 group-hover:bg-orca-purple/20'
              }`}>
                <svg className={`w-4 h-4 ${sections.persistence ? 'text-orca-light' : 'text-orca-grey-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold text-orca-light">Save & Load</h2>
                <p className="text-xs text-orca-grey-3 mt-0.5">Manage your case study templates</p>
              </div>
            </div>
            <span className={`text-lg transition-colors ${sections.persistence ? 'text-orca-purple' : 'text-orca-grey-3 group-hover:text-orca-blue'}`}>
              {sections.persistence ? '▼' : '▶'}
            </span>
          </button>
          {sections.persistence && (
            <div className="p-6 bg-orca-dark/30 animate-in slide-in-from-top-2 duration-200">
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

