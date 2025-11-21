import { CaseStudyConfig, MetricConfig, DEFAULT_METRICS } from '@/types/case-study';
import { generateCaseStudyId } from './defaults';

/**
 * Generates a realistic sample case study for testing
 */
export function generateSampleData(): CaseStudyConfig {
  const now = new Date().toISOString();
  
  // Initialize metrics with sample values (based on industry case study examples)
  const metrics: MetricConfig[] = DEFAULT_METRICS.map((metric) => {
    const sampleValues: Record<string, { value: string; footnote?: string }> = {
      'freight-cost-reduction': { value: '18', footnote: 'vs prior year' },
      'annual-freight-spend': { value: '45000000', footnote: 'analyzed annually' },
      'annual-savings': { value: '8100000', footnote: 'identified and recovered' },
      'invoice-accuracy': { value: '99.2', footnote: 'up from 87%' },
      'roi-timeline': { value: '< 12 months', footnote: 'payback period' },
      'fte-hours-saved': { value: '320', footnote: 'per month' },
      'modes-covered': { value: '5', footnote: 'Truckload, LTL, Parcel, Ocean, Air' },
      'invoices-audited': { value: '12500', footnote: 'per month average' },
      'carriers-vendors': { value: '450', footnote: 'active relationships' },
      'dispute-resolution': { value: '94', footnote: 'success rate' },
      'payment-compliance': { value: '98.5', footnote: 'on-time payment rate' },
    };

    const sample = sampleValues[metric.id] || { value: '', footnote: '' };
    
    return {
      ...metric,
      enabled: ['freight-cost-reduction', 'annual-savings', 'invoice-accuracy', 'roi-timeline'].includes(metric.id),
      value: sample.value,
      footnote: sample.footnote,
    };
  });

    return {
      id: generateCaseStudyId(),
      name: 'Sample Case Study - Global Manufacturing Corp',
      title: 'Global Manufacturing Corp Achieves $8.1M in Annual Savings with Orca Intelligence',
      clientName: 'Global Manufacturing Corp',
      clientLogoUrl: '',
      industry: 'Manufacturing',
      region: 'North America',
      timePeriod: '2023-2024',
      servicesUsed: [
        'Freight Audit',
        'Freight Payment',
        'Claims Processing',
        'Supply Chain Analytics',
      ],
      metrics,
      clientOverview: 'Global Manufacturing Corp is a leading manufacturer with operations across North America, shipping over 125,000 freight shipments annually. With a complex supply chain spanning multiple modes and hundreds of carriers, the company needed better visibility and control over freight costs.',
      challenge: 'The company was struggling with invoice discrepancies, overcharges, and lack of visibility into freight spending patterns. Manual audit processes were time-consuming and error-prone, resulting in millions of dollars in unclaimed savings. The finance team spent hundreds of hours each month reconciling invoices and disputing charges. Payment delays and limited invoice visibility strained carrier relationships.',
      solution: 'Orca Intelligence implemented a comprehensive freight audit and analytics solution, integrating with the company\'s TMS and carrier systems. Our automated audit engine processes every invoice in real-time, flagging discrepancies and overcharges as they occur. Advanced analytics provide deep insights into spending patterns, carrier performance, and cost optimization opportunities. The shift from reactive to proactive auditing enabled immediate dispute filing and faster resolution.',
      resultsSummary: 'Within the first year, Global Manufacturing Corp achieved significant cost savings and operational improvements. The automated audit process eliminated manual work, improved accuracy, and recovered millions in overcharges. The company transformed from delayed, manual audits to real-time visibility and proactive issue resolution.',
      outcomes: [
        'Recovered $8.1M in overcharges and billing errors in first year',
        'Improved invoice accuracy from 87% to 99.2%',
        'Reduced freight costs by 18% compared to prior year',
        'Saved 320 FTE hours per month through automation',
        'Achieved ROI in less than 12 months',
        'Resolved aging payment issues and improved carrier relationships',
      ],
      testimonial: {
        quote: 'Orca Intelligence transformed our freight audit process. We\'ve recovered millions in overcharges and gained insights we never had before. The real-time visibility and proactive support have completely changed how we work with our carriers.',
        name: 'Sarah Johnson',
        title: 'VP of Supply Chain',
        company: 'Global Manufacturing Corp',
      },
      callToAction: {
        text: 'Get a free freight analysis',
        url: 'https://orcaaudit.com',
      },
      templateVariant: 'v1',
      theme: 'dark',
      showOrcaFooter: true,
      createdAt: now,
      updatedAt: now,
    };
}

