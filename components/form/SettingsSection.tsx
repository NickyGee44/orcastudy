'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function SettingsSection() {
  const { config, updateField } = useCaseStudyConfig();

  return (
    <div className="space-y-6">
      {/* Theme Toggle */}
      <div>
        <label className="block text-sm font-medium text-orca-light mb-3">
          Theme
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={config.theme === 'dark'}
              onChange={(e) => updateField('theme', e.target.value as 'dark' | 'light')}
              className="w-4 h-4 text-orca-accent bg-orca-grey-1 border-orca-grey-2 focus:ring-orca-accent"
            />
            <span className="text-orca-light">Dark</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={config.theme === 'light'}
              onChange={(e) => updateField('theme', e.target.value as 'dark' | 'light')}
              className="w-4 h-4 text-orca-accent bg-orca-grey-1 border-orca-grey-2 focus:ring-orca-accent"
            />
            <span className="text-orca-light">Light</span>
          </label>
        </div>
        <p className="mt-2 text-xs text-orca-grey-3">
          Choose the color theme for the case study preview and export
        </p>
      </div>

      {/* Show Orca Footer Toggle */}
      <div>
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={config.showOrcaFooter}
            onChange={(e) => updateField('showOrcaFooter', e.target.checked)}
            className="w-5 h-5 text-orca-accent bg-orca-grey-1 border-orca-grey-2 rounded focus:ring-orca-accent"
          />
          <div>
            <span className="text-orca-light font-medium">Show Orca Footer</span>
            <p className="text-xs text-orca-grey-3 mt-1">
              Display the Orca contact information and CTA footer in the case study
            </p>
          </div>
        </label>
      </div>

      {/* Template Variant */}
      <div>
        <label htmlFor="templateVariant" className="block text-sm font-medium text-orca-light mb-2">
          Template Variant
        </label>
        <select
          id="templateVariant"
          value={config.templateVariant}
          onChange={(e) => updateField('templateVariant', e.target.value as 'v1')}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light focus:outline-none focus:ring-2 focus:ring-orca-accent"
          disabled
        >
          <option value="v1">Version 1 (Default)</option>
        </select>
        <p className="mt-2 text-xs text-orca-grey-3">
          Additional template variants will be available in future updates
        </p>
      </div>
    </div>
  );
}

