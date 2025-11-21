'use client';

import { useEffect, useState } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function AutosaveIndicator() {
  const { config } = useCaseStudyConfig();
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    setIsSaving(true);
    const timeout = setTimeout(() => {
      setIsSaving(false);
      setLastSaved(new Date());
    }, 1000);

    return () => clearTimeout(timeout);
  }, [config]);

  return (
    <div className="mt-3 flex items-center gap-2 text-[13px] text-[#B3B3B3]">
      {isSaving ? (
        <>
          <svg 
            className="animate-spin h-3 w-3 flex-shrink-0" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            style={{ width: '12px', height: '12px', minWidth: '12px', minHeight: '12px', maxWidth: '12px', maxHeight: '12px' }}
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Saving...</span>
        </>
      ) : lastSaved ? (
        <>
          <svg 
            className="h-3 w-3 text-[#25C2D1] flex-shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            style={{ width: '12px', height: '12px', minWidth: '12px', minHeight: '12px', maxWidth: '12px', maxHeight: '12px' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Saved</span>
        </>
      ) : null}
    </div>
  );
}

