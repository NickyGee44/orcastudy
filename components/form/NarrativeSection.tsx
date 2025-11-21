'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';

export default function NarrativeSection() {
  const {
    config,
    updateField,
    addOutcome,
    updateOutcome,
    removeOutcome,
  } = useCaseStudyConfig();

  return (
    <div className="space-y-6">
      {/* Client Overview */}
      <div>
        <label htmlFor="clientOverview" className="block text-sm font-medium text-orca-light mb-2">
          Client Overview
        </label>
        <textarea
          id="clientOverview"
          value={config.clientOverview}
          onChange={(e) => updateField('clientOverview', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent resize-y"
          placeholder="2-3 sentences describing the client..."
        />
        <p className="mt-1 text-xs text-orca-grey-3">
          {config.clientOverview.length} characters
        </p>
      </div>

      {/* Challenge */}
      <div>
        <label htmlFor="challenge" className="block text-sm font-medium text-orca-light mb-2">
          Challenge
        </label>
        <textarea
          id="challenge"
          value={config.challenge}
          onChange={(e) => updateField('challenge', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent resize-y"
          placeholder="1 short paragraph describing the challenges the client faced..."
        />
        <p className="mt-1 text-xs text-orca-grey-3">
          {config.challenge.length} characters
        </p>
      </div>

      {/* Orca Solution */}
      <div>
        <label htmlFor="solution" className="block text-sm font-medium text-orca-light mb-2">
          Orca Solution
        </label>
        <textarea
          id="solution"
          value={config.solution}
          onChange={(e) => updateField('solution', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent resize-y"
          placeholder="1 short paragraph describing how Orca solved the problem..."
        />
        <p className="mt-1 text-xs text-orca-grey-3">
          {config.solution.length} characters
        </p>
      </div>

      {/* Results Summary */}
      <div>
        <label htmlFor="resultsSummary" className="block text-sm font-medium text-orca-light mb-2">
          Results Summary
        </label>
        <textarea
          id="resultsSummary"
          value={config.resultsSummary}
          onChange={(e) => updateField('resultsSummary', e.target.value)}
          rows={3}
          className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent resize-y"
          placeholder="2-3 sentences summarizing the results..."
        />
        <p className="mt-1 text-xs text-orca-grey-3">
          {config.resultsSummary.length} characters
        </p>
      </div>

      {/* Key Outcomes */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium text-orca-light">
            Key Outcomes (3-5 bullet points)
          </label>
          {config.outcomes.length < 5 && (
            <button
              onClick={addOutcome}
              className="text-sm text-orca-accent hover:text-orca-accent-dark"
            >
              + Add Outcome
            </button>
          )}
        </div>
        <div className="space-y-2">
          {config.outcomes.map((outcome, index) => (
            <div key={index} className="flex items-start space-x-2">
              <span className="text-orca-accent mt-2">•</span>
              <input
                type="text"
                value={outcome}
                onChange={(e) => updateOutcome(index, e.target.value)}
                className="flex-1 px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
                placeholder={`Outcome ${index + 1}...`}
              />
              {config.outcomes.length > 3 && (
                <button
                  onClick={() => removeOutcome(index)}
                  className="px-3 py-2 text-red-400 hover:text-red-300"
                  title="Remove outcome"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
        {config.outcomes.length < 3 && (
          <p className="mt-2 text-sm text-yellow-400">
            Add at least 3 outcomes (currently {config.outcomes.length})
          </p>
        )}
        {config.outcomes.length === 0 && (
          <button
            onClick={addOutcome}
            className="mt-2 px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light hover:bg-orca-grey-2 transition-colors"
          >
            Add First Outcome
          </button>
        )}
      </div>

      {/* Testimonial */}
      <div className="border-t border-orca-grey-1 pt-6">
        <h3 className="text-lg font-semibold text-orca-light mb-4">Client Testimonial</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="testimonialQuote" className="block text-sm font-medium text-orca-light mb-2">
              Quote
            </label>
            <textarea
              id="testimonialQuote"
              value={config.testimonial?.quote || ''}
              onChange={(e) =>
                updateField('testimonial', {
                  ...config.testimonial,
                  quote: e.target.value,
                } as any)
              }
              rows={3}
              className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent resize-y"
              placeholder="Client testimonial quote..."
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label htmlFor="testimonialName" className="block text-sm font-medium text-orca-light mb-2">
                Name
              </label>
              <input
                type="text"
                id="testimonialName"
                value={config.testimonial?.name || ''}
                onChange={(e) =>
                  updateField('testimonial', {
                    ...config.testimonial,
                    name: e.target.value,
                  } as any)
                }
                className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="testimonialTitle" className="block text-sm font-medium text-orca-light mb-2">
                Title
              </label>
              <input
                type="text"
                id="testimonialTitle"
                value={config.testimonial?.title || ''}
                onChange={(e) =>
                  updateField('testimonial', {
                    ...config.testimonial,
                    title: e.target.value,
                  } as any)
                }
                className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
                placeholder="VP of Supply Chain"
              />
            </div>

            <div>
              <label htmlFor="testimonialCompany" className="block text-sm font-medium text-orca-light mb-2">
                Company
              </label>
              <input
                type="text"
                id="testimonialCompany"
                value={config.testimonial?.company || ''}
                onChange={(e) =>
                  updateField('testimonial', {
                    ...config.testimonial,
                    company: e.target.value,
                  } as any)
                }
                className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
                placeholder="Company Name"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="border-t border-orca-grey-1 pt-6">
        <h3 className="text-lg font-semibold text-orca-light mb-4">Call to Action</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="ctaText" className="block text-sm font-medium text-orca-light mb-2">
              CTA Text
            </label>
            <input
              type="text"
              id="ctaText"
              value={config.callToAction?.text || ''}
              onChange={(e) =>
                updateField('callToAction', {
                  ...config.callToAction,
                  text: e.target.value,
                } as any)
              }
              className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
              placeholder="Get a free freight analysis"
            />
          </div>

          <div>
            <label htmlFor="ctaUrl" className="block text-sm font-medium text-orca-light mb-2">
              CTA URL (optional)
            </label>
            <input
              type="url"
              id="ctaUrl"
              value={config.callToAction?.url || ''}
              onChange={(e) =>
                updateField('callToAction', {
                  ...config.callToAction,
                  url: e.target.value || undefined,
                } as any)
              }
              className="w-full px-4 py-2 bg-orca-grey-1 border border-orca-grey-2 rounded-md text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent"
              placeholder="https://orcaaudit.com"
            />
            {config.callToAction?.url && !isValidUrl(config.callToAction.url) && (
              <p className="mt-1 text-sm text-yellow-400">Please enter a valid URL</p>
            )}
          </div>
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

