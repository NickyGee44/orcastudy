'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function OutcomesSection() {
  const { config } = useCaseStudyConfig();

  if (config.outcomes.length === 0) {
    return null;
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4" style={{ 
        color: config.theme === 'dark' ? '#ffffff' : '#1a1a1a',
      }}>
        Key Outcomes
      </h3>
      <div className="space-y-3">
        {config.outcomes.map((outcome, index) => (
          <div key={index} className="flex items-start">
            <div 
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5"
              style={{
                backgroundColor: '#00b4d820',
                color: '#00b4d8',
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm flex-1 leading-relaxed" style={{ 
              color: config.theme === 'dark' ? '#cccccc' : '#4a4a4a',
            }}>
              {outcome}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

