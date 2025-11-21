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
    <div className="space-y-6">
      {/* Case Study Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-orca-light mb-2">
          Case Study Title <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="title"
          value={config.title}
          onChange={(e) => updateField('title', e.target.value)}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
          placeholder="e.g., Global Manufacturing Corp Achieves 18% Freight Cost Reduction"
        />
        {!config.title && (
          <p className="mt-1 text-sm text-yellow-400">Title is required</p>
        )}
      </div>

      {/* Client Name */}
      <div>
        <label htmlFor="clientName" className="block text-sm font-medium text-orca-light mb-2">
          Client Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="clientName"
          value={config.clientName}
          onChange={(e) => updateField('clientName', e.target.value)}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
          placeholder="e.g., Global Manufacturing Corp"
        />
        {!config.clientName && (
          <p className="mt-1 text-sm text-yellow-400">Client name is required</p>
        )}
      </div>

      {/* Client Logo URL */}
      <div>
        <label htmlFor="clientLogoUrl" className="block text-sm font-medium text-orca-light mb-2">
          Client Logo URL (optional)
        </label>
        <input
          type="url"
          id="clientLogoUrl"
          value={config.clientLogoUrl || ''}
          onChange={(e) => updateField('clientLogoUrl', e.target.value || undefined)}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
          placeholder="https://example.com/logo.png"
        />
        {config.clientLogoUrl && !isValidUrl(config.clientLogoUrl) && (
          <p className="mt-1 text-sm text-yellow-400">Please enter a valid URL</p>
        )}
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-orca-light mb-2">
          Industry <span className="text-red-400">*</span>
        </label>
        <select
          id="industry"
          value={config.industry}
          onChange={(e) => updateField('industry', e.target.value)}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light focus:outline-none focus:ring-2 focus:ring-orca-accent"
        >
          <option value="">Select an industry</option>
          {INDUSTRIES.map((industry) => (
            <option key={industry} value={industry}>
              {industry}
            </option>
          ))}
        </select>
        {!config.industry && (
          <p className="mt-1 text-sm text-yellow-400">Industry is required</p>
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
        <label className="block text-sm font-medium text-orca-light mb-3">
          Services Used
        </label>
        <div className="space-y-2">
          {AVAILABLE_SERVICES.map((service) => (
            <label
              key={service}
              className="flex items-center space-x-3 cursor-pointer hover:bg-orca-grey-1 p-2 rounded"
            >
              <input
                type="checkbox"
                checked={config.servicesUsed.includes(service)}
                onChange={() => toggleService(service)}
                className="w-4 h-4 text-orca-accent bg-orca-grey-1 border-orca-grey-2 rounded focus:ring-orca-accent"
              />
              <span className="text-orca-light">{service}</span>
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

