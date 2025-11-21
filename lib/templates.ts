import { CaseStudyConfig, MetricConfig, DEFAULT_METRICS } from '@/types/case-study';
import { generateCaseStudyId } from './defaults';

export type TemplateType = 'blank' | 'standard-freight' | 'contract-negotiation' | 'analytics-project';

export interface Template {
  id: TemplateType;
  name: string;
  description: string;
  config: Omit<CaseStudyConfig, 'id' | 'createdAt' | 'updatedAt'>;
}

/**
 * Standard Freight Audit Case Study Template
 */
function createStandardFreightTemplate(): Omit<CaseStudyConfig, 'id' | 'createdAt' | 'updatedAt'> {
  const metrics: MetricConfig[] = DEFAULT_METRICS.map((metric) => {
    const sampleValues: Record<string, { value: string; footnote?: string; enabled: boolean }> = {
      'freight-cost-reduction': { value: '18', footnote: 'vs prior year', enabled: true },
      'annual-freight-spend': { value: '45000000', footnote: 'analyzed annually', enabled: true },
      'annual-savings': { value: '8100000', footnote: 'identified and recovered', enabled: true },
      'invoice-accuracy': { value: '99.2', footnote: 'up from 87%', enabled: true },
      'roi-timeline': { value: '< 12 months', footnote: 'payback period', enabled: false },
      'fte-hours-saved': { value: '320', footnote: 'per month', enabled: false },
      'modes-covered': { value: '5', footnote: 'Truckload, LTL, Parcel, Ocean, Air', enabled: false },
      'invoices-audited': { value: '12500', footnote: 'per month average', enabled: false },
      'carriers-vendors': { value: '450', footnote: 'active relationships', enabled: false },
      'dispute-resolution': { value: '94', footnote: 'success rate', enabled: false },
      'payment-compliance': { value: '98.5', footnote: 'on-time payment rate', enabled: false },
    };

    const sample = sampleValues[metric.id] || { value: '', footnote: '', enabled: false };
    
    return {
      ...metric,
      enabled: sample.enabled,
      value: sample.value,
      footnote: sample.footnote,
    };
  });

  return {
    name: 'Standard Freight Case Study',
    title: 'How [Client Name] Achieved 18% Freight Cost Reduction with Orca Intelligence',
    clientName: '',
    clientLogoUrl: '',
    industry: 'Manufacturing',
    region: 'North America',
    timePeriod: '2023-2024',
    servicesUsed: ['Freight Audit', 'Freight Payment', 'Claims Processing'],
    metrics,
    clientOverview: 'A leading manufacturing company with complex global supply chain operations sought to optimize freight spend and improve invoice accuracy across multiple transportation modes.',
    challenge: 'The client faced significant challenges with freight invoice discrepancies, manual audit processes consuming hundreds of hours monthly, and lack of visibility into carrier performance and cost trends. Overcharges and billing errors were going undetected, resulting in unnecessary freight spend.',
    solution: 'Orca Intelligence implemented a comprehensive freight audit and payment solution, leveraging advanced analytics and automated processes to identify discrepancies, recover overcharges, and provide real-time visibility into freight operations.',
    resultsSummary: 'Within the first year, the client achieved substantial cost savings, improved invoice accuracy to 99.2%, and recovered $8.1M in identified overcharges. The automated system reduced manual audit time by 320 hours per month.',
    outcomes: [
      'Recovered $8.1M in overcharges and billing errors',
      'Improved invoice accuracy from 87% to 99.2%',
      'Reduced manual audit time by 320 hours per month',
      'Achieved 18% reduction in freight costs vs. prior year',
    ],
    testimonial: {
      quote: 'Orca Intelligence transformed our freight audit process. The automated system not only recovered significant overcharges but also provided insights that helped us optimize our carrier relationships and reduce overall freight spend.',
      name: 'John Smith',
      title: 'VP of Supply Chain',
      company: '[Client Name]',
    },
    callToAction: {
      text: 'Get a free freight analysis',
      url: 'https://orcaaudit.com',
    },
    templateVariant: 'v1',
    theme: 'dark',
    showOrcaFooter: true,
  };
}

/**
 * Contract Negotiation Case Study Template
 */
function createContractNegotiationTemplate(): Omit<CaseStudyConfig, 'id' | 'createdAt' | 'updatedAt'> {
  const metrics: MetricConfig[] = DEFAULT_METRICS.map((metric) => {
    const sampleValues: Record<string, { value: string; footnote?: string; enabled: boolean }> = {
      'freight-cost-reduction': { value: '22', footnote: 'through optimized contracts', enabled: true },
      'annual-freight-spend': { value: '75000000', footnote: 'under management', enabled: true },
      'annual-savings': { value: '16500000', footnote: 'from contract optimization', enabled: true },
      'invoice-accuracy': { value: '98.5', footnote: 'contract compliance rate', enabled: true },
      'roi-timeline': { value: '< 6 months', footnote: 'payback period', enabled: false },
      'carriers-vendors': { value: '125', footnote: 'contracts optimized', enabled: false },
      'payment-compliance': { value: '99.2', footnote: 'on-time payment rate', enabled: false },
    };

    const sample = sampleValues[metric.id] || { value: '', footnote: '', enabled: false };
    
    return {
      ...metric,
      enabled: sample.enabled,
      value: sample.value,
      footnote: sample.footnote,
    };
  });

  return {
    name: 'Contract Negotiation Case Study',
    title: 'Strategic Carrier Contract Optimization Delivers 22% Cost Reduction',
    clientName: '',
    clientLogoUrl: '',
    industry: 'Retail',
    region: 'North America',
    timePeriod: '2023-2024',
    servicesUsed: ['Freight Audit', 'Freight Rating', 'Supply Chain Analytics'],
    metrics,
    clientOverview: 'A major retail chain needed to optimize carrier contracts and ensure compliance across a complex network of transportation providers.',
    challenge: 'The client struggled with inconsistent carrier pricing, lack of contract compliance monitoring, and missed opportunities for volume-based discounts. Manual contract management was inefficient and error-prone.',
    solution: 'Orca Intelligence analyzed existing carrier contracts, identified optimization opportunities, and implemented automated contract compliance monitoring with real-time rate validation.',
    resultsSummary: 'The contract optimization initiative resulted in 22% freight cost reduction, improved contract compliance to 98.5%, and $16.5M in annualized savings through better rate structures and volume discounts.',
    outcomes: [
      'Achieved 22% reduction in freight costs through contract optimization',
      'Optimized 125 carrier contracts with improved rate structures',
      'Improved contract compliance rate to 98.5%',
      'Generated $16.5M in annualized savings',
    ],
    testimonial: {
      quote: 'Orca\'s contract optimization analysis provided the data-driven insights we needed to negotiate better rates and ensure our carriers were adhering to agreed terms. The results exceeded our expectations.',
      name: 'Sarah Johnson',
      title: 'Director of Logistics',
      company: '[Client Name]',
    },
    callToAction: {
      text: 'Get a free freight analysis',
      url: 'https://orcaaudit.com',
    },
    templateVariant: 'v1',
    theme: 'dark',
    showOrcaFooter: true,
  };
}

/**
 * Analytics Project Case Study Template
 */
function createAnalyticsProjectTemplate(): Omit<CaseStudyConfig, 'id' | 'createdAt' | 'updatedAt'> {
  const metrics: MetricConfig[] = DEFAULT_METRICS.map((metric) => {
    const sampleValues: Record<string, { value: string; footnote?: string; enabled: boolean }> = {
      'annual-freight-spend': { value: '120000000', footnote: 'analyzed and optimized', enabled: true },
      'annual-savings': { value: '24000000', footnote: 'identified opportunities', enabled: true },
      'invoice-accuracy': { value: '99.5', footnote: 'through automation', enabled: true },
      'fte-hours-saved': { value: '480', footnote: 'per month', enabled: true },
      'modes-covered': { value: '6', footnote: 'All transportation modes', enabled: false },
      'invoices-audited': { value: '25000', footnote: 'per month', enabled: false },
    };

    const sample = sampleValues[metric.id] || { value: '', footnote: '', enabled: false };
    
    return {
      ...metric,
      enabled: sample.enabled,
      value: sample.value,
      footnote: sample.footnote,
    };
  });

  return {
    name: 'Analytics Project Case Study',
    title: 'Advanced Analytics Unlocks $24M in Supply Chain Optimization Opportunities',
    clientName: '',
    clientLogoUrl: '',
    industry: 'Consumer Goods',
    region: 'Global',
    timePeriod: '2023-2024',
    servicesUsed: ['Supply Chain Analytics', 'Freight Audit', 'Invoice Management'],
    metrics,
    clientOverview: 'A global consumer goods company leveraged Orca Intelligence\'s advanced analytics platform to gain deep insights into freight operations and identify optimization opportunities across their entire supply chain.',
    challenge: 'The client lacked visibility into freight cost drivers, carrier performance patterns, and optimization opportunities. Manual reporting was time-consuming and didn\'t provide actionable insights for strategic decision-making.',
    solution: 'Orca Intelligence deployed a comprehensive analytics platform that provided real-time dashboards, predictive insights, and automated reporting. The system analyzed $120M in annual freight spend across all transportation modes.',
    resultsSummary: 'The analytics initiative identified $24M in optimization opportunities, improved invoice accuracy to 99.5%, and saved 480 FTE hours per month through automation. Strategic insights enabled better carrier selection and route optimization.',
    outcomes: [
      'Identified $24M in supply chain optimization opportunities',
      'Improved invoice accuracy to 99.5% through automation',
      'Saved 480 FTE hours per month with automated reporting',
      'Gained real-time visibility into $120M annual freight spend',
    ],
    testimonial: {
      quote: 'Orca\'s analytics platform transformed how we understand and optimize our supply chain. The insights we gained have been instrumental in making data-driven decisions that directly impact our bottom line.',
      name: 'Michael Chen',
      title: 'Chief Supply Chain Officer',
      company: '[Client Name]',
    },
    callToAction: {
      text: 'Get a free freight analysis',
      url: 'https://orcaaudit.com',
    },
    templateVariant: 'v1',
    theme: 'dark',
    showOrcaFooter: true,
  };
}

/**
 * Blank Template
 */
function createBlankTemplate(): Omit<CaseStudyConfig, 'id' | 'createdAt' | 'updatedAt'> {
  const metrics: MetricConfig[] = DEFAULT_METRICS.map((metric, index) => ({
    ...metric,
    enabled: index < 4,
    value: '',
    footnote: '',
  }));

  return {
    name: 'Blank Case Study',
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
    templateVariant: 'v1',
    theme: 'dark',
    showOrcaFooter: true,
  };
}

/**
 * Get all available templates
 */
export function getTemplates(): Template[] {
  return [
    {
      id: 'blank',
      name: 'Blank Template',
      description: 'Start with an empty case study',
      config: createBlankTemplate(),
    },
    {
      id: 'standard-freight',
      name: 'Standard Freight Case Study',
      description: 'Comprehensive freight audit and payment case study',
      config: createStandardFreightTemplate(),
    },
    {
      id: 'contract-negotiation',
      name: 'Contract Negotiation',
      description: 'Focus on carrier contract optimization and compliance',
      config: createContractNegotiationTemplate(),
    },
    {
      id: 'analytics-project',
      name: 'Analytics Project',
      description: 'Emphasize data analytics and supply chain insights',
      config: createAnalyticsProjectTemplate(),
    },
  ];
}

/**
 * Get a template by ID
 */
export function getTemplate(id: TemplateType): Template | undefined {
  return getTemplates().find((t) => t.id === id);
}

/**
 * Apply a template to create a new case study config
 */
export function applyTemplate(templateId: TemplateType): CaseStudyConfig {
  const template = getTemplate(templateId);
  if (!template) {
    throw new Error(`Template ${templateId} not found`);
  }

  const now = new Date().toISOString();
  return {
    ...template.config,
    id: generateCaseStudyId(),
    createdAt: now,
    updatedAt: now,
  };
}

