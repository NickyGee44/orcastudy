/**
 * Display format for metrics
 */
export type MetricDisplayFormat = 'big-number' | 'percentage' | 'currency';

/**
 * Configuration for a single metric/KPI
 */
export interface MetricConfig {
  id: string;
  label: string;
  enabled: boolean;
  value: string;
  footnote?: string;
  displayFormat?: MetricDisplayFormat;
}

/**
 * Default metric definitions with all available metrics
 */
export const DEFAULT_METRICS: Omit<MetricConfig, 'enabled' | 'value'>[] = [
  {
    id: 'freight-cost-reduction',
    label: '% Freight Cost Reduction',
    displayFormat: 'percentage',
  },
  {
    id: 'annual-freight-spend',
    label: '$ Annual Freight Spend Analyzed',
    displayFormat: 'currency',
  },
  {
    id: 'annual-savings',
    label: '$ Annual Savings Identified',
    displayFormat: 'currency',
  },
  {
    id: 'invoice-accuracy',
    label: '% Invoice Accuracy',
    displayFormat: 'percentage',
  },
  {
    id: 'roi-timeline',
    label: 'ROI Timeline',
    displayFormat: 'big-number',
  },
  {
    id: 'fte-hours-saved',
    label: 'FTE Hours Saved per Month',
    displayFormat: 'big-number',
  },
  {
    id: 'modes-covered',
    label: 'Modes Covered',
    displayFormat: 'big-number',
  },
  {
    id: 'invoices-audited',
    label: 'Number of Invoices Audited per Month',
    displayFormat: 'big-number',
  },
  {
    id: 'carriers-vendors',
    label: 'Number of Carriers / Vendors',
    displayFormat: 'big-number',
  },
  {
    id: 'dispute-resolution',
    label: 'Dispute Resolution Success Rate',
    displayFormat: 'percentage',
  },
  {
    id: 'payment-compliance',
    label: 'On-time Payment Compliance',
    displayFormat: 'percentage',
  },
];

/**
 * Available services that Orca provides
 */
export const AVAILABLE_SERVICES = [
  'Freight Audit',
  'Freight Payment',
  'Claims Processing',
  'Freight Rating',
  'Invoice Management',
  'Freight Accounting',
  'Supply Chain Analytics',
] as const;

export type ServiceType = typeof AVAILABLE_SERVICES[number];

/**
 * Template variant (extensible for future templates)
 */
export type TemplateVariant = 'v1';

/**
 * Theme option
 */
export type Theme = 'dark' | 'light';

/**
 * Testimonial data
 */
export interface Testimonial {
  quote: string;
  name?: string;
  title?: string;
  company?: string;
}

/**
 * Call to action configuration
 */
export interface CallToAction {
  text: string;
  url?: string;
}

/**
 * Complete case study configuration
 */
export interface CaseStudyConfig {
  id: string;
  name: string; // Internal name for saved configs
  title: string;
  clientName: string;
  clientLogoUrl?: string;
  industry: string;
  region: string;
  timePeriod: string;
  servicesUsed: ServiceType[];
  metrics: MetricConfig[];
  clientOverview: string;
  challenge: string;
  solution: string;
  resultsSummary: string;
  outcomes: string[];
  testimonial?: Testimonial;
  callToAction?: CallToAction;
  templateVariant: TemplateVariant;
  theme: Theme;
  showOrcaFooter: boolean;
  createdAt: string;
  updatedAt: string;
}

