'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function ProgressIndicator() {
  const { config } = useCaseStudyConfig();

  // Calculate completion percentage
  const calculateProgress = () => {
    let completed = 0;
    let total = 0;

    // Basics (5 required fields)
    total += 5;
    if (config.title) completed++;
    if (config.clientName) completed++;
    if (config.industry) completed++;
    if (config.region) completed++;
    if (config.timePeriod) completed++;

    // Metrics (at least 1 enabled with value)
    total += 1;
    if (config.metrics.some(m => m.enabled && m.value)) completed++;

    // Narrative (4 sections)
    total += 4;
    if (config.clientOverview) completed++;
    if (config.challenge) completed++;
    if (config.solution) completed++;
    if (config.resultsSummary) completed++;

    // Outcomes (at least 3)
    total += 1;
    if (config.outcomes.length >= 3) completed++;

    return Math.round((completed / total) * 100);
  };

  const progress = calculateProgress();

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-orca-grey-3">Progress</span>
        <span className="text-xs font-semibold text-orca-accent">{progress}%</span>
      </div>
      <div className="w-full bg-orca-grey-1/30 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-orca-accent to-orca-accent-dark rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

