'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import { AVAILABLE_SERVICES } from '@/types/case-study';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

const INDUSTRIES = [
  'Manufacturing',
  'Retail',
  'Healthcare',
  'Food & Beverage',
  'Automotive',
  'Technology',
  'Consumer Goods',
  'Other',
] as const;

const REGIONS = [
  'North America',
  'EMEA',
  'Asia Pacific',
  'Latin America',
  'Global',
] as const;

export default function BasicsSection() {
  const { config, updateField, toggleService } = useCaseStudyConfig();

  return (
    <div className="space-y-5">
      {/* Case Study Title */}
      <Input
        label="Case Study Title"
        id="title"
        type="text"
        value={config.title}
        onChange={(e) => updateField('title', e.target.value)}
        placeholder="e.g., Global Manufacturing Corp Achieves $8.1M in Annual Savings"
        error={!config.title ? 'This field is required' : undefined}
        helperText="Create a compelling headline that highlights the key achievement"
        required
      />

      {/* Client Name */}
      <Input
        label="Client Name"
        id="clientName"
        type="text"
        value={config.clientName}
        onChange={(e) => updateField('clientName', e.target.value)}
        placeholder="e.g., Global Manufacturing Corp"
        error={!config.clientName ? 'This field is required' : undefined}
        required
      />

      {/* Client Logo URL */}
      <Input
        label="Client Logo URL"
        id="clientLogoUrl"
        type="url"
        value={config.clientLogoUrl || ''}
        onChange={(e) => updateField('clientLogoUrl', e.target.value || undefined)}
        placeholder="https://example.com/logo.png"
        error={config.clientLogoUrl && !isValidUrl(config.clientLogoUrl) ? 'Please enter a valid URL' : undefined}
        helperText="Add a direct link to the client's logo image for a professional touch"
      />

      {/* Industry */}
      <Select
        label="Industry"
        id="industry"
        value={config.industry}
        onChange={(e) => updateField('industry', e.target.value)}
        options={[
          { value: '', label: 'Select an industry' },
          ...INDUSTRIES.map((industry) => ({ value: industry, label: industry })),
        ]}
        error={!config.industry ? 'This field is required' : undefined}
        required
      />

      {/* Region */}
      <Select
        label="Region"
        id="region"
        value={config.region}
        onChange={(e) => updateField('region', e.target.value)}
        options={[
          { value: '', label: 'Select a region' },
          ...REGIONS.map((region) => ({ value: region, label: region })),
        ]}
        error={!config.region ? 'This field is required' : undefined}
        required
      />

      {/* Time Period */}
      <Input
        label="Time Period"
        id="timePeriod"
        type="text"
        value={config.timePeriod}
        onChange={(e) => updateField('timePeriod', e.target.value)}
        placeholder="e.g., 2023-2024"
        error={!config.timePeriod ? 'This field is required' : undefined}
        required
      />

      {/* Services Used */}
      <div>
        <label className="block text-sm font-semibold text-orca-light mb-3">
          Services Used
        </label>
        <p className="text-xs text-orca-grey-3 mb-3">Select all services that were used in this case study</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {AVAILABLE_SERVICES.map((service) => {
            const isSelected = config.servicesUsed.includes(service);
            return (
              <label
                key={service}
                className={`
                  flex items-center space-x-3 cursor-pointer p-4 rounded-xl border-2 transition-all
                  ${isSelected
                    ? 'border-orca-purple bg-gradient-to-br from-orca-purple/20 to-orca-blue/20 shadow-md'
                    : 'border-orca-grey-1/50 bg-orca-grey-1/10 hover:border-orca-grey-2/50 hover:bg-orca-grey-1/20'
                  }
                `}
              >
                <div className="relative flex-shrink-0">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleService(service)}
                    className="sr-only"
                  />
                  <div className={`
                    w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                    ${isSelected
                      ? 'border-orca-purple bg-orca-purple shadow-md'
                      : 'border-orca-grey-2 bg-orca-grey-1/50'
                    }
                  `}>
                    {isSelected && (
                      <svg 
                        className="w-4 h-4 text-orca-light flex-shrink-0" 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                        style={{ width: '16px', height: '16px', minWidth: '16px', minHeight: '16px', maxWidth: '16px', maxHeight: '16px' }}
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </div>
                <span className={`font-medium text-sm transition-colors ${isSelected ? 'text-orca-light' : 'text-orca-grey-3'}`}>
                  {service}
                </span>
                {isSelected && (
                  <div className="ml-auto">
                    <div className="w-2 h-2 rounded-full bg-orca-purple animate-pulse"></div>
                  </div>
                )}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

