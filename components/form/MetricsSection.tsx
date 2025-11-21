'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function MetricsSection() {
  const { config, toggleMetric, updateMetric } = useCaseStudyConfig();

  return (
    <div className="space-y-4">
      <div className="p-3 bg-orca-accent/10 border border-orca-accent/20 rounded-lg mb-4">
        <p className="text-sm text-orca-light/90 flex items-start space-x-2">
          <svg className="w-5 h-5 text-orca-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Toggle metrics on/off and enter values. Enabled metrics will appear prominently in the preview.</span>
        </p>
      </div>
      
      <div className="space-y-3">
        {config.metrics.map((metric) => (
          <div
            key={metric.id}
            className={`border rounded-xl p-4 transition-all ${
              metric.enabled 
                ? 'border-orca-accent/50 bg-orca-accent/5 shadow-sm' 
                : 'border-orca-grey-1/50 bg-orca-grey-1/20'
            }`}
          >
            {/* Toggle and Label */}
            <div className="flex items-center justify-between mb-3">
              <label className="flex items-center space-x-3 cursor-pointer flex-1 group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={metric.enabled}
                    onChange={() => toggleMetric(metric.id)}
                    className="w-5 h-5 text-orca-accent bg-orca-grey-1/50 border-orca-grey-2 rounded focus:ring-2 focus:ring-orca-accent cursor-pointer transition-all"
                  />
                  {metric.enabled && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <svg className="w-3 h-3 text-orca-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <span className={`font-medium transition-colors ${metric.enabled ? 'text-orca-light' : 'text-orca-grey-3'}`}>
                  {metric.label}
                </span>
                {metric.displayFormat && (
                  <span className="text-xs px-2 py-1 rounded-md font-medium" style={{
                    backgroundColor: metric.enabled ? '#00b4d820' : '#4a4a4a',
                    color: metric.enabled ? '#00b4d8' : '#6a6a6a',
                  }}>
                    {metric.displayFormat}
                  </span>
                )}
              </label>
            </div>

            {/* Value Input - Only show if enabled */}
            {metric.enabled && (
              <div className="space-y-3 mt-4 pl-8 border-l-2 border-orca-accent animate-in">
                <div>
                  <label className="block text-sm font-semibold text-orca-light mb-2">
                    Value <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={metric.value}
                    onChange={(e) => updateMetric(metric.id, { value: e.target.value })}
                    className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent transition-all"
                    placeholder={
                      metric.displayFormat === 'percentage'
                        ? 'e.g., 18'
                        : metric.displayFormat === 'currency'
                        ? 'e.g., 8100000'
                        : 'e.g., 320'
                    }
                  />
                  {metric.enabled && !metric.value && (
                    <p className="mt-2 text-xs text-yellow-400/80 flex items-center space-x-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <span>Value is required when metric is enabled</span>
                    </p>
                  )}
                </div>

                {/* Footnote Input */}
                <div>
                  <label className="block text-sm font-semibold text-orca-light mb-2">
                    Footnote <span className="text-xs font-normal text-orca-grey-3">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={metric.footnote || ''}
                    onChange={(e) => updateMetric(metric.id, { footnote: e.target.value || undefined })}
                    className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent transition-all"
                    placeholder="e.g., vs prior year"
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-6 p-4 bg-gradient-to-r from-orca-grey-1/30 to-orca-grey-1/20 border border-orca-grey-2/50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-orca-light">
              <span className="text-orca-accent text-lg">
                {config.metrics.filter((m) => m.enabled).length}
              </span>
              {' '}of {config.metrics.length} metrics enabled
            </p>
          </div>
          {config.metrics.filter((m) => m.enabled && !m.value).length > 0 && (
            <div className="flex items-center space-x-2 text-yellow-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">
                {config.metrics.filter((m) => m.enabled && !m.value).length} missing value(s)
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

