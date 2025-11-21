'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function FooterSection() {
  const { config } = useCaseStudyConfig();

  if (!config.showOrcaFooter) {
    return null;
  }

  return (
    <div 
      className="mt-8 pt-6 border-t"
      style={{
        borderColor: config.theme === 'dark' ? '#4a4a4a' : '#e5e7eb',
      }}
    >
      <div className="text-center space-y-4">
        <p className="text-base font-medium" style={{ 
          color: config.theme === 'dark' ? '#ffffff' : '#1a1a1a',
        }}>
          {config.callToAction?.text || 'Want to save time, money and optimize your supply chain? Let\'s talk.'}
        </p>

        {config.callToAction?.url ? (
          <a
            href={config.callToAction.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-md font-medium transition-colors"
            style={{
              backgroundColor: '#00b4d8',
              color: '#ffffff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#0096c7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#00b4d8';
            }}
          >
            {config.callToAction.text || 'Get Started'}
          </a>
        ) : (
          <div className="text-sm" style={{ 
            color: config.theme === 'dark' ? '#6a6a6a' : '#4a4a4a',
          }}>
            <a
              href="https://orcaaudit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: '#00b4d8' }}
            >
              orcaaudit.com
            </a>
          </div>
        )}

        <div className="text-xs pt-4" style={{ 
          color: config.theme === 'dark' ? '#6a6a6a' : '#4a4a4a',
        }}>
          <p>Orca Intelligence Inc.</p>
          <p className="mt-1">Freight Audit & Analytics</p>
        </div>
      </div>
    </div>
  );
}

