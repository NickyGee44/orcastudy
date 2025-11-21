'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import { AVAILABLE_SERVICES } from '@/types/case-study';

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
      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-orca-light mb-2 flex items-center space-x-2">
          <span>Case Study Title</span>
          <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="title"
          value={config.title}
          onChange={(e) => updateField('title', e.target.value)}
          className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent transition-all"
          placeholder="e.g., Global Manufacturing Corp Achieves $8.1M in Annual Savings"
        />
        {!config.title && (
          <p className="mt-2 text-xs text-yellow-400/80 flex items-center space-x-1">
            <svg className="w-4 h-4 max-w-[16px] max-h-[16px] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>This field is required</span>
          </p>
        )}
        <p className="mt-1.5 text-xs text-orca-grey-3">Create a compelling headline that highlights the key achievement</p>
      </div>

      {/* Client Name */}
      <div>
        <label htmlFor="clientName" className="block text-sm font-semibold text-orca-light mb-2 flex items-center space-x-2">
          <span>Client Name</span>
          <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="clientName"
          value={config.clientName}
          onChange={(e) => updateField('clientName', e.target.value)}
          className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent transition-all"
          placeholder="e.g., Global Manufacturing Corp"
        />
        {!config.clientName && (
          <p className="mt-2 text-xs text-yellow-400/80 flex items-center space-x-1">
            <svg className="w-4 h-4 max-w-[16px] max-h-[16px] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>This field is required</span>
          </p>
        )}
      </div>

      {/* Client Logo URL */}
      <div>
        <label htmlFor="clientLogoUrl" className="block text-sm font-semibold text-orca-light mb-2">
          Client Logo URL <span className="text-xs font-normal text-orca-grey-3">(optional)</span>
        </label>
        <input
          type="url"
          id="clientLogoUrl"
          value={config.clientLogoUrl || ''}
          onChange={(e) => updateField('clientLogoUrl', e.target.value || undefined)}
          className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent transition-all"
          placeholder="https://example.com/logo.png"
        />
        {config.clientLogoUrl && !isValidUrl(config.clientLogoUrl) && (
          <p className="mt-2 text-xs text-yellow-400/80">Please enter a valid URL</p>
        )}
        <p className="mt-1.5 text-xs text-orca-grey-3">Add a direct link to the client's logo image for a professional touch</p>
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className="block text-sm font-semibold text-orca-light mb-2 flex items-center space-x-2">
          <span>Industry</span>
          <span className="text-red-400">*</span>
        </label>
        <select
          id="industry"
          value={config.industry}
          onChange={(e) => updateField('industry', e.target.value)}
          className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent transition-all cursor-pointer"
        >
          <option value="">Select an industry</option>
          {INDUSTRIES.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
        {!config.industry && (
          <p className="mt-2 text-xs text-yellow-400/80 flex items-center space-x-1">
            <svg className="w-4 h-4 max-w-[16px] max-h-[16px] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ width: '16px', height: '16px', flexShrink: 0 }}>
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>This field is required</span>
          </p>
        )}
      </div>

      {/* Region */}
      <div>
        <label htmlFor="region" className="block text-sm font-medium text-orca-light mb-2">
          Region <span className="text-red-400">*</span>
        </label>
        <select
          id="region"
          value={config.region}
          onChange={(e) => updateField('region', e.target.value)}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light focus:outline-none focus:ring-2 focus:ring-orca-accent"
        >
          <option value="">Select a region</option>
          {REGIONS.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
        {!config.region && (
          <p className="mt-1 text-sm text-yellow-400">Region is required</p>
        )}
      </div>

      {/* Time Period */}
      <div>
        <label htmlFor="timePeriod" className="block text-sm font-medium text-orca-light mb-2">
          Time Period <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="timePeriod"
          value={config.timePeriod}
          onChange={(e) => updateField('timePeriod', e.target.value)}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
          placeholder="e.g., 2023-2024"
        />
        {!config.timePeriod && (
          <p className="mt-1 text-sm text-yellow-400">Time period is required</p>
        )}
      </div>

      {/* Services Used */}
      <div>
        <label className="block text-sm font-semibold text-orca-light mb-3">
          Services Used
        </label>
        <p className="text-xs text-orca-grey-3 mb-3">Select all services that were used in this case study</p>
        <div className="space-y-2">
          {AVAILABLE_SERVICES.map((service) => (
            <label
              key={service}
              className="flex items-center space-x-3 cursor-pointer hover:bg-orca-grey-1/30 p-3 rounded-lg border border-transparent hover:border-orca-grey-2/50 transition-all group"
            >
              <input
                type="checkbox"
                checked={config.servicesUsed.includes(service)}
                onChange={() => toggleService(service)}
                className="w-5 h-5 text-orca-accent bg-orca-grey-1/50 border-orca-grey-2 rounded focus:ring-orca-accent focus:ring-2 cursor-pointer"
              />
              <span className="text-orca-light group-hover:text-orca-accent transition-colors">{service}</span>
            </label>
          ))}
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

