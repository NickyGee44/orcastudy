'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function MetricsSection() {
  const { config, toggleMetric, updateMetric } = useCaseStudyConfig();

  return (
    <div className="space-y-4">
      <p className="text-sm text-orca-grey-3 mb-4">
        Toggle metrics on/off and enter values. Enabled metrics will appear in the preview.
      </p>
      
      <div className="space-y-4">
        {config.metrics.map((metric) => (
          <div
            key={metric.id}
            className="border border-orca-grey-1 rounded-lg p-4 bg-orca-grey-1/30"
          >
            {/* Toggle and Label */}
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center space-x-3 cursor-pointer flex-1">
                <input
                  type="checkbox"
                  checked={metric.enabled}
                  onChange={() => toggleMetric(metric.id)}
                  className="w-5 h-5 text-orca-accent bg-orca-grey-1 border-orca-grey-2 rounded focus:ring-orca-accent"
                />
                <span className="text-orca-light font-medium">{metric.label}</span>
                {metric.displayFormat && (
                  <span className="text-xs text-orca-grey-3 px-2 py-1 bg-orca-grey-2 rounded">
                    {metric.displayFormat}
                  </span>
                )}
              </label>
            </div>

            {/* Value Input - Only show if enabled */}
            {metric.enabled && (
              <div className="space-y-3 mt-3 pl-8 border-l-2 border-orca-accent">
                <div>
                  <label className="block text-sm font-medium text-orca-light mb-2">
                    Value
                  </label>
                  <input
                    type="text"
                    value={metric.value}
                    onChange={(e) => updateMetric(metric.id, { value: e.target.value })}
                    className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
                    placeholder={
                      metric.displayFormat === 'percentage'
                        ? 'e.g., 18'
                        : metric.displayFormat === 'currency'
                        ? 'e.g., 8100000'
                        : 'e.g., 320'
                    }
                  />
                  {metric.enabled && !metric.value && (
                    <p className="mt-1 text-sm text-yellow-400">
                      Value is required when metric is enabled
                    </p>
                  )}
                </div>

                {/* Footnote Input */}
                <div>
                  <label className="block text-sm font-medium text-orca-light mb-2">
                    Footnote (optional)
                  </label>
                  <input
                    type="text"
                    value={metric.footnote || ''}
                    onChange={(e) => updateMetric(metric.id, { footnote: e.target.value || undefined })}
                    className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
                    placeholder="e.g., vs prior year"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 p-4 bg-orca-grey-1 rounded-lg">
        <p className="text-sm text-orca-light">
          <span className="font-semibold">
            {config.metrics.filter((m) => m.enabled).length}
          </span>{' '}
          of {config.metrics.length} metrics enabled
        </p>
        {config.metrics.filter((m) => m.enabled && !m.value).length > 0 && (
          <p className="text-sm text-yellow-400 mt-2">
            ⚠️ {config.metrics.filter((m) => m.enabled && !m.value).length} enabled metric(s) missing values
          </p>
        )}
      </div>
    </div>
  );
}

