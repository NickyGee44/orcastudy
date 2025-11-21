'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function HeroBlock() {
  const { config } = useCaseStudyConfig();

  return (
    <div className="mb-8">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 leading-tight" style={{ 
        color: config.theme === 'dark' ? '#ffffff' : '#1a1a1a',
      }}>
        {config.title || 'Case Study Title'}
      </h1>

      {/* Subtitle */}
      <div className="flex items-center flex-wrap gap-2 text-sm mb-4" style={{ 
        color: config.theme === 'dark' ? '#6a6a6a' : '#4a4a4a',
      }}>
        {config.clientName && <span>{config.clientName}</span>}
        {config.industry && (
          <>
            <span>·</span>
            <span>{config.industry}</span>
          </>
        )}
        {config.region && (
          <>
            <span>·</span>
            <span>{config.region}</span>
          </>
        )}
        {config.timePeriod && (
          <>
            <span>·</span>
            <span>{config.timePeriod}</span>
          </>
        )}
      </div>

      {/* Service Tags */}
      {config.servicesUsed.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {config.servicesUsed.map((service) => (
            <span
              key={service}
              className="text-xs px-3 py-1 rounded-full"
              style={{
                backgroundColor: config.theme === 'dark' ? '#00b4d820' : '#00b4d810',
                color: '#00b4d8',
                border: '1px solid #00b4d840',
              }}
            >
              {service}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

