'use client';

import { useMemo } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import { MetricConfig } from '@/types/case-study';

// Priority order for metrics (first ones will be highlighted)
const METRIC_PRIORITY = [
  'freight-cost-reduction',
  'annual-savings',
  'invoice-accuracy',
  'roi-timeline',
  'annual-freight-spend',
  'fte-hours-saved',
];

export default function MetricsGrid() {
  const { config } = useCaseStudyConfig();

  // Get enabled metrics and sort by priority
  const displayedMetrics = useMemo(() => {
    const enabled = config.metrics.filter((m) => m.enabled && m.value);
    
    return enabled
      .sort((a, b) => {
        const aPriority = METRIC_PRIORITY.indexOf(a.id);
        const bPriority = METRIC_PRIORITY.indexOf(b.id);
        
        // If both in priority list, sort by priority
        if (aPriority !== -1 && bPriority !== -1) {
          return aPriority - bPriority;
        }
        // If only one in priority list, prioritize it
        if (aPriority !== -1) return -1;
        if (bPriority !== -1) return 1;
        // Otherwise maintain original order
        return 0;
      })
      .slice(0, 6); // Show max 6 metrics
  }, [config.metrics]);

  if (displayedMetrics.length === 0) {
    return null;
  }

  const formatValue = (metric: MetricConfig): string => {
    if (!metric.value) return '';
    
    switch (metric.displayFormat) {
      case 'percentage':
        return `${metric.value}%`;
      case 'currency':
        const num = parseFloat(metric.value);
        if (!isNaN(num)) {
          return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(num);
        }
        return `$${metric.value}`;
      default:
        return metric.value;
    }
  };

  // Determine grid layout based on number of metrics
  const gridCols = displayedMetrics.length <= 2 ? 'grid-cols-2' : 
                   displayedMetrics.length <= 4 ? 'grid-cols-2' : 
                   'grid-cols-3';

  return (
    <div className={`mb-8 grid ${gridCols} gap-4`}>
      {displayedMetrics.map((metric, index) => {
        const isPrimary = index === 0;
        const value = formatValue(metric);
        
        return (
          <div
            key={metric.id}
            className={`p-5 rounded-lg border-2 ${
              isPrimary
                ? 'border-orca-accent'
                : config.theme === 'dark'
                ? 'border-orca-grey-2'
                : 'border-gray-300'
            }`}
            style={{
              backgroundColor: isPrimary && config.theme === 'dark' 
                ? '#00b4d815' 
                : isPrimary 
                ? '#00b4d808'
                : config.theme === 'dark'
                ? '#2a2a2a'
                : '#f9fafb',
              boxShadow: isPrimary ? '0 4px 12px rgba(0, 180, 216, 0.2)' : 'none',
            }}
          >
            <div className="text-4xl md:text-5xl font-bold mb-2 leading-tight" style={{ 
              color: isPrimary ? '#00b4d8' : (config.theme === 'dark' ? '#ffffff' : '#1a1a1a'),
              fontWeight: 900,
            }}>
              {value || '—'}
            </div>
            <div className="text-sm font-semibold mb-2 uppercase tracking-wide" style={{ 
              color: config.theme === 'dark' ? '#cccccc' : '#4a4a4a',
              letterSpacing: '0.05em',
            }}>
              {metric.label}
            </div>
            {metric.footnote && (
              <div className="text-xs mt-2 pt-2 border-t" style={{ 
                color: config.theme === 'dark' ? '#6a6a6a' : '#6a6a6a',
                borderColor: config.theme === 'dark' ? '#4a4a4a' : '#e5e7eb',
              }}>
                {metric.footnote}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

