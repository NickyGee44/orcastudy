'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function TestimonialStrip() {
  const { config } = useCaseStudyConfig();

  if (!config.testimonial?.quote) {
    return null;
  }

  return (
    <div 
      className="mb-8 p-6 rounded-lg"
      style={{
        backgroundColor: config.theme === 'dark' ? '#2a2a2a' : '#f9fafb',
        borderLeft: '4px solid #00b4d8',
      }}
    >
      <div className="mb-4">
        <svg
          className="w-8 h-8 mb-2"
          fill="currentColor"
          viewBox="0 0 24 24"
          style={{ color: '#00b4d8' }}
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      
      <p 
        className="text-base italic mb-4 leading-relaxed"
        style={{ 
          color: config.theme === 'dark' ? '#ffffff' : '#1a1a1a',
        }}
      >
        "{config.testimonial.quote}"
      </p>

      {config.testimonial.name && (
        <div className="text-sm font-medium" style={{ 
          color: config.theme === 'dark' ? '#00b4d8' : '#0096c7',
        }}>
          — {config.testimonial.name}
          {config.testimonial.title && `, ${config.testimonial.title}`}
          {config.testimonial.company && `, ${config.testimonial.company}`}
        </div>
      )}
    </div>
  );
}

