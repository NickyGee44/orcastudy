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
    <div className="space-y-4">
      <div className="flex space-x-4">
        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="flex-1 px-6 py-3 bg-orca-grey-1 hover:bg-orca-grey-2 border border-orca-grey-2 text-orca-light font-medium rounded-md transition-colors"
        >
          {showResetConfirm ? 'Confirm Reset' : 'Reset Form'}
        </button>

        {/* Load Sample Data Button */}
        <button
          onClick={handleLoadSample}
          className="flex-1 px-6 py-3 bg-orca-accent hover:bg-orca-accent-dark text-orca-dark font-medium rounded-md transition-colors"
        >
          Load Sample Data
        </button>
      </div>

      {showResetConfirm && (
        <div className="p-4 bg-yellow-900/20 border border-yellow-700 rounded-md">
          <p className="text-yellow-400 text-sm mb-3">
            Are you sure you want to reset? This will clear all form data and cannot be undone.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => setShowResetConfirm(false)}
              className="px-4 py-2 bg-orca-grey-1 hover:bg-orca-grey-2 text-orca-light rounded-md transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-400 rounded-md transition-colors text-sm"
            >
              Yes, Reset
            </button>
          </div>
        </div>
      )}

      <p className="text-xs text-orca-grey-3 text-center">
        Use "Load Sample Data" to see a complete example case study
      </p>
    </div>
  );
}

