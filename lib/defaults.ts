import { CaseStudyConfig, MetricConfig, DEFAULT_METRICS, TemplateVariant, Theme } from '@/types/case-study';

/**
 * Creates a default case study configuration with all fields initialized
 */
export function createDefaultConfig(name: string = 'New Case Study'): CaseStudyConfig {
  const now = new Date().toISOString();
  
  // Initialize all metrics with default enabled states
  // Priority metrics (first 4) are enabled by default
  const metrics: MetricConfig[] = DEFAULT_METRICS.map((metric, index) => ({
    ...metric,
    enabled: index < 4, // First 4 metrics enabled by default
    value: '',
    footnote: '',
  }));

  return {
    id: `case-study-${Date.now()}`,
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
    createdAt: now,
    updatedAt: now,
  };
}

/**
 * Generates a unique ID for a case study
 */
export function generateCaseStudyId(): string {
  return `case-study-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

