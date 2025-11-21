'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import Switch from '@/components/ui/Switch';
import Select from '@/components/ui/Select';

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
      <Switch
        checked={config.showOrcaFooter}
        onChange={(e) => updateField('showOrcaFooter', e.target.checked)}
        label="Show Orca Footer"
        description="Display the Orca contact information and CTA footer in the case study"
      />

      {/* Template Variant */}
      <Select
        label="Template Variant"
        id="templateVariant"
        value={config.templateVariant}
        onChange={(e) => updateField('templateVariant', e.target.value as 'v1')}
        options={[{ value: 'v1', label: 'Version 1 (Default)' }]}
        helperText="Additional template variants will be available in future updates"
        disabled
      />
    </div>
  );
}

