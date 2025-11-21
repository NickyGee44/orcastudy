'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function NarrativeSection() {
  const { config } = useCaseStudyConfig();

  const hasLeftContent = config.clientOverview || config.challenge;
  const hasRightContent = config.solution || config.resultsSummary;

  if (!hasLeftContent && !hasRightContent) {
    return null;
  }

  return (
    <div className="mb-8 grid grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-6">
        {config.clientOverview && (
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ 
              color: config.theme === 'dark' ? '#ffffff' : '#1a1a1a',
            }}>
              Client Overview
            </h3>
            <p className="text-sm leading-relaxed" style={{ 
              color: config.theme === 'dark' ? '#cccccc' : '#4a4a4a',
            }}>
              {config.clientOverview}
            </p>
          </div>
        )}

        {config.challenge && (
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ 
              color: config.theme === 'dark' ? '#ffffff' : '#1a1a1a',
            }}>
              Challenge
            </h3>
            <p className="text-sm leading-relaxed" style={{ 
              color: config.theme === 'dark' ? '#cccccc' : '#4a4a4a',
            }}>
              {config.challenge}
            </p>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="space-y-6">
        {config.solution && (
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ 
              color: config.theme === 'dark' ? '#ffffff' : '#1a1a1a',
            }}>
              Orca Solution
            </h3>
            <p className="text-sm leading-relaxed" style={{ 
              color: config.theme === 'dark' ? '#cccccc' : '#4a4a4a',
            }}>
              {config.solution}
            </p>
          </div>
        )}

        {config.resultsSummary && (
          <div>
            <h3 className="text-lg font-semibold mb-2" style={{ 
              color: config.theme === 'dark' ? '#ffffff' : '#1a1a1a',
            }}>
              Results Summary
            </h3>
            <p className="text-sm leading-relaxed" style={{ 
              color: config.theme === 'dark' ? '#cccccc' : '#4a4a4a',
            }}>
              {config.resultsSummary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

