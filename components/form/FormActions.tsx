'use client';

import { useState } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import { generateSampleData } from '@/lib/sampleData';

export default function FormActions() {
  const { resetToDefault, loadConfig } = useCaseStudyConfig();
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const handleReset = () => {
    if (showResetConfirm) {
      resetToDefault();
      setShowResetConfirm(false);
    } else {
      setShowResetConfirm(true);
    }
  };

  const handleLoadSample = () => {
    if (confirm('This will replace your current case study with sample data. Continue?')) {
      const sampleData = generateSampleData();
      loadConfig(sampleData);
    }
  };

  return (
    <div className="space-y-3 pt-4 border-t border-orca-grey-1/30">
      <div className="flex flex-wrap gap-2">
        {/* Load Sample Data Button - Primary action */}
        <button
          onClick={handleLoadSample}
          className="px-4 py-2 bg-gradient-to-r from-orca-accent to-orca-accent-dark hover:from-orca-accent-dark hover:to-orca-accent text-orca-dark font-semibold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          <span>Load Sample Data</span>
        </button>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-orca-grey-1/50 hover:bg-orca-grey-1 border border-orca-grey-2/50 text-orca-light font-medium rounded-lg transition-all flex items-center justify-center space-x-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>{showResetConfirm ? 'Confirm Reset' : 'Reset'}</span>
        </button>
      </div>

      {showResetConfirm && (
        <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg animate-in">
          <div className="flex items-start space-x-2">
            <span className="inline-flex items-center justify-center w-4 h-4 flex-shrink-0 text-yellow-400 mt-0.5" style={{ width: '16px', height: '16px', minWidth: '16px', minHeight: '16px', maxWidth: '16px', maxHeight: '16px' }}>
              <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" style={{ width: '100%', height: '100%', display: 'block' }}>
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </span>
            <div className="flex-1">
              <p className="text-yellow-400 text-xs font-medium mb-2">
                Are you sure you want to reset? This will clear all form data and cannot be undone.
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-3 py-1.5 bg-orca-grey-1 hover:bg-orca-grey-2 text-orca-light rounded-lg transition-colors text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 bg-red-900/40 hover:bg-red-900/60 text-red-300 rounded-lg transition-colors text-xs font-medium"
                >
                  Yes, Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="pt-2">
        <p className="text-xs text-orca-grey-3 text-center flex items-center justify-center space-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Tip: Click "Load Sample Data" to see a complete example case study</span>
        </p>
      </div>
    </div>
  );
}

