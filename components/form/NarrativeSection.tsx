'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import Textarea from '@/components/ui/Textarea';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function NarrativeSection() {
  const {
    config,
    updateField,
    addOutcome,
    updateOutcome,
    removeOutcome,
  } = useCaseStudyConfig();

  return (
    <div className="space-y-5">
      {/* Client Overview */}
      <div>
        <Textarea
          label="Client Overview"
          id="clientOverview"
          value={config.clientOverview}
          onChange={(e) => updateField('clientOverview', e.target.value)}
          rows={3}
          placeholder="2-3 sentences describing the client and their business context..."
          helperText={
            config.clientOverview.length > 0 && config.clientOverview.length < 50
              ? `Consider adding more detail (${config.clientOverview.length} characters)`
              : `${config.clientOverview.length} characters`
          }
        />
      </div>

      {/* Challenge */}
      <Textarea
        label="Challenge"
        id="challenge"
        value={config.challenge}
        onChange={(e) => updateField('challenge', e.target.value)}
        rows={4}
        placeholder="1 short paragraph describing the challenges the client faced..."
        helperText={`${config.challenge.length} characters`}
      />

      {/* Orca Solution */}
      <Textarea
        label="Orca Solution"
        id="solution"
        value={config.solution}
        onChange={(e) => updateField('solution', e.target.value)}
        rows={4}
        placeholder="1 short paragraph describing how Orca solved the problem..."
        helperText={`${config.solution.length} characters`}
      />

      {/* Results Summary */}
      <Textarea
        label="Results Summary"
        id="resultsSummary"
        value={config.resultsSummary}
        onChange={(e) => updateField('resultsSummary', e.target.value)}
        rows={3}
        placeholder="2-3 sentences summarizing the results..."
        helperText={`${config.resultsSummary.length} characters`}
      />

      {/* Key Outcomes */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-sm font-semibold text-orca-light">
            Key Outcomes <span className="text-xs font-normal text-orca-grey-3">(3-5 bullet points)</span>
          </label>
          {config.outcomes.length < 5 && (
            <button
              onClick={addOutcome}
              className="text-sm text-orca-accent hover:text-orca-accent-dark font-medium flex items-center space-x-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Add Outcome</span>
            </button>
          )}
        </div>
        <div className="space-y-2">
          {config.outcomes.map((outcome, index) => (
            <div key={index} className="flex items-start space-x-3 group">
              <div className="w-6 h-6 rounded-full bg-orca-accent/20 flex items-center justify-center mt-1 flex-shrink-0">
                <span className="text-orca-accent text-sm font-bold">{index + 1}</span>
              </div>
              <input
                type="text"
                value={outcome}
                onChange={(e) => updateOutcome(index, e.target.value)}
                className="flex-1 px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent transition-all"
                placeholder={`Outcome ${index + 1}...`}
              />
              {config.outcomes.length > 3 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeOutcome(index)}
                  className="px-2 py-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 flex-shrink-0"
                  title="Remove outcome"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </Button>
              )}
            </div>
          ))}
        </div>
        {config.outcomes.length < 3 && (
          <div className="mt-2 p-2.5 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
            <p className="text-xs text-yellow-400/90 flex items-center space-x-2">
              <span className="inline-flex items-center justify-center w-3.5 h-3.5 flex-shrink-0" style={{ width: '14px', height: '14px', minWidth: '14px', minHeight: '14px', maxWidth: '14px', maxHeight: '14px' }}>
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" style={{ width: '100%', height: '100%', display: 'block' }}>
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </span>
              <span>Add at least 3 outcomes (currently {config.outcomes.length})</span>
            </p>
          </div>
        )}
        {config.outcomes.length === 0 && (
          <Button
            variant="secondary"
            size="sm"
            onClick={addOutcome}
            className="mt-3 w-full max-w-xs"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add First Outcome</span>
          </Button>
        )}
      </div>

      {/* Testimonial */}
      <div className="border-t border-white/6 pt-6">
        <h3 className="text-h3 font-bold text-orca-light mb-4">Client Testimonial</h3>
        
        <div className="space-y-4">
          <Textarea
            label="Quote"
            id="testimonialQuote"
            value={config.testimonial?.quote || ''}
            onChange={(e) =>
              updateField('testimonial', {
                ...config.testimonial,
                quote: e.target.value,
              } as any)
            }
            rows={3}
            placeholder="Client testimonial quote..."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Input
              label="Name"
              id="testimonialName"
              type="text"
              value={config.testimonial?.name || ''}
              onChange={(e) =>
                updateField('testimonial', {
                  ...config.testimonial,
                  name: e.target.value,
                } as any)
              }
              placeholder="John Doe"
            />
            <Input
              label="Title"
              id="testimonialTitle"
              type="text"
              value={config.testimonial?.title || ''}
              onChange={(e) =>
                updateField('testimonial', {
                  ...config.testimonial,
                  title: e.target.value,
                } as any)
              }
              placeholder="VP of Supply Chain"
            />
            <Input
              label="Company"
              id="testimonialCompany"
              type="text"
              value={config.testimonial?.company || ''}
              onChange={(e) =>
                updateField('testimonial', {
                  ...config.testimonial,
                  company: e.target.value,
                } as any)
              }
              placeholder="Company Name"
            />
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="border-t border-white/6 pt-6">
        <h3 className="text-h3 font-bold text-orca-light mb-4">Call to Action</h3>
        
        <div className="space-y-4">
          <Input
            label="CTA Text"
            id="ctaText"
            type="text"
            value={config.callToAction?.text || ''}
            onChange={(e) =>
              updateField('callToAction', {
                ...config.callToAction,
                text: e.target.value,
              } as any)
            }
            placeholder="Get a free freight analysis"
          />
          <Input
            label="CTA URL"
            id="ctaUrl"
            type="url"
            value={config.callToAction?.url || ''}
            onChange={(e) =>
              updateField('callToAction', {
                ...config.callToAction,
                url: e.target.value || undefined,
              } as any)
            }
            placeholder="https://orcaaudit.com"
            error={config.callToAction?.url && !isValidUrl(config.callToAction.url) ? 'Please enter a valid URL' : undefined}
            helperText="Optional URL for the call to action button"
          />
        </div>
      </div>
    </div>
  );
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

