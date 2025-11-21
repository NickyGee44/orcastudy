import { CaseStudyConfig, MetricConfig, DEFAULT_METRICS, TemplateVariant, Theme } from '@/types/case-study';

/**
 * Creates a default case study configuration with all fields initialized
 * Uses stable timestamps to prevent hydration mismatches
 */
export function createDefaultConfig(name: string = 'New Case Study'): CaseStudyConfig {
  // Use a stable timestamp for hydration - will be updated on client
  const stableTimestamp = '2000-01-01T00:00:00.000Z';
  
  // Initialize all metrics with default enabled states
  // Priority metrics (first 4) are enabled by default
  const metrics: MetricConfig[] = DEFAULT_METRICS.map((metric, index) => ({
    ...metric,
    enabled: index < 4, // First 4 metrics enabled by default
    value: '',
    footnote: '',
  }));

  return {
    id: `case-study-default`,
    name,
    title: '',
    clientName: '',
    clientLogoUrl: '',
    industry: '',
    region: '',
    timePeriod: '',
    servicesUsed: [],
    metrics,
    clientOverview: '',
    challenge: '',
    solution: '',
    resultsSummary: '',
    outcomes: [],
    testimonial: undefined,
    callToAction: {
      text: 'Get a free freight analysis',
      url: 'https://orcaaudit.com',
    },
    templateVariant: 'v1' as TemplateVariant,
    theme: 'dark' as Theme,
    showOrcaFooter: true,
    createdAt: stableTimestamp,
    updatedAt: stableTimestamp,
  };
}

/**
 * Generates a unique ID for a case study
 */
export function generateCaseStudyId(): string {
  return `case-study-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

