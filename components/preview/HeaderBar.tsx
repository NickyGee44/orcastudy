'use client';

import { useState } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function HeaderBar() {
  const { config } = useCaseStudyConfig();
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="flex items-center justify-between mb-8 pb-4 border-b" style={{ 
      borderColor: config.theme === 'dark' ? '#4a4a4a' : '#e5e7eb',
    }}>
      {/* Left: Orca Logo */}
      <div className="flex items-center">
        {config.clientLogoUrl && !logoError ? (
          <img
            src={config.clientLogoUrl}
            alt={config.clientName || 'Client Logo'}
            className="h-12 w-auto object-contain"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="text-2xl font-bold tracking-wider" style={{ color: config.theme === 'dark' ? '#00b4d8' : '#0096c7' }}>
            ORCA
          </div>
        )}
      </div>

      {/* Right: Badge */}
      <div className="text-xs px-3 py-1 rounded-full border" style={{ 
        borderColor: config.theme === 'dark' ? '#4a4a4a' : '#6a6a6a',
        color: config.theme === 'dark' ? '#6a6a6a' : '#4a4a4a',
      }}>
        Freight Audit & Analytics Case Study
      </div>
    </div>
  );
}

