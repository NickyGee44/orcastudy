'use client';

import { useState } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function HeaderBar() {
  const { config } = useCaseStudyConfig();
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="flex items-center justify-between mb-10 pb-5 border-b" style={{ 
      borderColor: config.theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    }}>
      {/* Left: Orca Logo */}
      <div className="flex items-center">
        {config.clientLogoUrl && !logoError ? (
          <img
            src={config.clientLogoUrl}
            alt={config.clientName || 'Client Logo'}
            className="h-14 w-auto object-contain"
            onError={() => setLogoError(true)}
          />
        ) : (
          <div className="text-2xl font-bold tracking-wider" style={{ 
            color: config.theme === 'dark' ? '#25C2D1' : '#1A9BA8',
            letterSpacing: '0.1em',
          }}>
            ORCA
          </div>
        )}
      </div>

      {/* Right: Badge */}
      <div className="text-caption px-4 py-1.5 rounded-full border font-medium tracking-wider uppercase" style={{ 
        borderColor: config.theme === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)',
        color: config.theme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
        backgroundColor: config.theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
      }}>
        Freight Audit & Analytics Case Study
      </div>
    </div>
  );
}

