'use client';

import { useState } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function MetricsSection() {
  const { config, toggleMetric, updateMetric } = useCaseStudyConfig();
  const [showInputs, setShowInputs] = useState(false);

  const enabledCount = config.metrics.filter((m) => m.enabled).length;
  const hasEnabledMetrics = enabledCount > 0;

  return (
    <div className="space-y-6">
      {/* Phase 1: Metric Selection */}
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-semibold text-orca-light mb-1">Select Metrics to Include</h3>
            <p className="text-xs text-orca-grey-3">Choose which metrics will appear in your case study</p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-orca-purple/20 to-orca-blue/20 border border-orca-purple/30">
            <span className="text-sm font-semibold text-orca-light">
              {enabledCount} <span className="text-orca-grey-3 font-normal">selected</span>
            </span>
          </div>
        </div>

        {/* Metric Selection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {config.metrics.map((metric) => (
            <label
              key={metric.id}
              className={`
                relative flex items-center space-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all
                ${metric.enabled
                  ? 'border-orca-purple bg-gradient-to-br from-orca-purple/20 to-orca-blue/20 shadow-lg shadow-orca-purple/20'
                  : 'border-orca-grey-1/50 bg-orca-grey-1/10 hover:border-orca-grey-2/50 hover:bg-orca-grey-1/20'
                }
              `}
            >
              <div className="relative flex-shrink-0">
                <input
                  type="checkbox"
                  checked={metric.enabled}
                  onChange={() => toggleMetric(metric.id)}
                  className="sr-only"
                />
                <div className={`
                  w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all
                  ${metric.enabled
                    ? 'border-orca-purple bg-orca-purple shadow-md'
                    : 'border-orca-grey-2 bg-orca-grey-1/50'
                  }
                `}>
                  {metric.enabled && (
                    <svg className="w-4 h-4 text-orca-light" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className={`font-medium text-sm transition-colors ${metric.enabled ? 'text-orca-light' : 'text-orca-grey-3'}`}>
                    {metric.label}
                  </span>
                  {metric.displayFormat && (
                    <span className={`
                      text-xs px-2 py-0.5 rounded-md font-medium ml-2
                      ${metric.enabled
                        ? 'bg-orca-blue/30 text-orca-blue-light border border-orca-blue/50'
                        : 'bg-orca-grey-2/50 text-orca-grey-3'
                      }
                    `}>
                      {metric.displayFormat}
                    </span>
                  )}
                </div>
              </div>
              {metric.enabled && (
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 rounded-full bg-orca-purple animate-pulse"></div>
                </div>
              )}
            </label>
          ))}
        </div>

        {/* Action Button */}
        {hasEnabledMetrics && (
          <div className="pt-2">
            <button
              onClick={() => setShowInputs(!showInputs)}
              className="w-full px-4 py-3 bg-gradient-to-r from-orca-purple to-orca-blue hover:from-orca-purple-dark hover:to-orca-blue-dark text-orca-light font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <span>{showInputs ? 'Hide' : 'Enter Values for'} Selected Metrics</span>
              <svg className={`w-4 h-4 transition-transform ${showInputs ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

        {!hasEnabledMetrics && (
          <div className="p-4 bg-orca-grey-1/20 border border-orca-grey-2/50 rounded-xl">
            <p className="text-sm text-orca-grey-3 text-center">
              Select at least one metric above to continue
            </p>
          </div>
        )}
      </div>

      {/* Phase 2: Value Inputs (only shown when enabled metrics exist and showInputs is true) */}
      {hasEnabledMetrics && showInputs && (
        <div className="space-y-4 pt-4 border-t border-orca-grey-1/30">
          <div className="mb-4">
            <h3 className="text-base font-semibold text-orca-light mb-1">Enter Metric Values</h3>
            <p className="text-xs text-orca-grey-3">Fill in the values for your selected metrics</p>
          </div>

          <div className="space-y-4">
            {config.metrics
              .filter((metric) => metric.enabled)
              .map((metric) => (
                <div
                  key={metric.id}
                  className="p-5 rounded-xl bg-gradient-to-br from-orca-purple/10 to-orca-blue/10 border border-orca-purple/30 shadow-sm"
                >
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-orca-purple"></div>
                    <h4 className="font-semibold text-orca-light">{metric.label}</h4>
                    {metric.displayFormat && (
                      <span className="text-xs px-2 py-1 rounded-md bg-orca-blue/30 text-orca-blue-light border border-orca-blue/50">
                        {metric.displayFormat}
                      </span>
                    )}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-orca-light mb-2">
                        Value <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={metric.value}
                        onChange={(e) => updateMetric(metric.id, { value: e.target.value })}
                        className="w-full px-4 py-3 bg-orca-dark/50 border-2 border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-purple focus:border-orca-purple transition-all"
                        placeholder={
                          metric.displayFormat === 'percentage'
                            ? 'e.g., 18'
                            : metric.displayFormat === 'currency'
                            ? 'e.g., 8100000'
                            : 'e.g., 320'
                        }
                      />
                      {!metric.value && (
                        <p className="mt-2 text-xs text-yellow-400/80 flex items-center space-x-1">
                          <span className="inline-flex items-center justify-center w-4 h-4 flex-shrink-0" style={{ width: '16px', height: '16px', minWidth: '16px', minHeight: '16px', maxWidth: '16px', maxHeight: '16px' }}>
                            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" style={{ width: '100%', height: '100%', display: 'block' }}>
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <span>Value is required</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-orca-light mb-2">
                        Footnote <span className="text-xs font-normal text-orca-grey-3">(optional)</span>
                      </label>
                      <input
                        type="text"
                        value={metric.footnote || ''}
                        onChange={(e) => updateMetric(metric.id, { footnote: e.target.value || undefined })}
                        className="w-full px-4 py-3 bg-orca-dark/50 border-2 border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-purple focus:border-orca-purple transition-all"
                        placeholder="e.g., vs prior year"
                      />
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Summary */}
          <div className="mt-6 p-4 bg-gradient-to-r from-orca-purple/10 to-orca-blue/10 border border-orca-purple/30 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-orca-light">
                  <span className="text-orca-purple text-lg font-bold">{enabledCount}</span>
                  {' '}metric{enabledCount !== 1 ? 's' : ''} selected
                </p>
                <p className="text-xs text-orca-grey-3 mt-1">
                  {config.metrics.filter((m) => m.enabled && m.value).length} of {enabledCount} have values
                </p>
              </div>
              {config.metrics.filter((m) => m.enabled && !m.value).length > 0 && (
                <div className="flex items-center space-x-2 text-yellow-400">
                  <span className="inline-flex items-center justify-center w-4 h-4 flex-shrink-0" style={{ width: '16px', height: '16px', minWidth: '16px', minHeight: '16px', maxWidth: '16px', maxHeight: '16px' }}>
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" style={{ width: '100%', height: '100%', display: 'block' }}>
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-xs font-medium">
                    {config.metrics.filter((m) => m.enabled && !m.value).length} missing value{config.metrics.filter((m) => m.enabled && !m.value).length !== 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
