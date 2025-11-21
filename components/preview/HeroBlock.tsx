'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function HeroBlock() {
  const { config } = useCaseStudyConfig();

  return (
    <div className="mb-10">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-5 leading-tight" style={{ 
        color: config.theme === 'dark' ? '#ffffff' : '#000000',
        lineHeight: '1.2',
      }}>
        {config.title || 'Case Study Title'}
      </h1>

      {/* Subtitle */}
      <div className="flex items-center flex-wrap gap-2 text-body mb-5" style={{ 
        color: config.theme === 'dark' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)',
      }}>
        {config.clientName && <span className="font-medium">{config.clientName}</span>}
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
        <div className="flex flex-wrap gap-2 mt-5">
          {config.servicesUsed.map((service) => (
            <span
              key={service}
              className="text-caption px-3 py-1.5 rounded-full font-medium"
              style={{
                backgroundColor: config.theme === 'dark' ? 'rgba(37, 194, 209, 0.15)' : 'rgba(37, 194, 209, 0.1)',
                color: '#25C2D1',
                border: '1px solid rgba(37, 194, 209, 0.3)',
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

