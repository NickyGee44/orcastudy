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
    <div className="space-y-5">
      {/* Client Overview */}
      <div>
        <label htmlFor="clientOverview" className="block text-sm font-semibold text-orca-light mb-2">
          Client Overview
        </label>
        <textarea
          id="clientOverview"
          value={config.clientOverview}
          onChange={(e) => updateField('clientOverview', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent resize-y transition-all"
          placeholder="2-3 sentences describing the client and their business context..."
        />
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xs text-orca-grey-3">
            {config.clientOverview.length} characters
          </p>
          {config.clientOverview.length > 0 && config.clientOverview.length < 50 && (
            <p className="text-xs text-yellow-400/80">Consider adding more detail</p>
          )}
        </div>
      </div>

      {/* Challenge */}
      <div>
        <label htmlFor="challenge" className="block text-sm font-semibold text-orca-light mb-2">
          Challenge
        </label>
        <textarea
          id="challenge"
          value={config.challenge}
          onChange={(e) => updateField('challenge', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent resize-y transition-all"
          placeholder="1 short paragraph describing the challenges the client faced..."
        />
        <p className="mt-2 text-xs text-orca-grey-3">
          {config.challenge.length} characters
        </p>
      </div>

      {/* Orca Solution */}
      <div>
        <label htmlFor="solution" className="block text-sm font-semibold text-orca-light mb-2">
          Orca Solution
        </label>
        <textarea
          id="solution"
          value={config.solution}
          onChange={(e) => updateField('solution', e.target.value)}
          rows={4}
          className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent resize-y transition-all"
          placeholder="1 short paragraph describing how Orca solved the problem..."
        />
        <p className="mt-2 text-xs text-orca-grey-3">
          {config.solution.length} characters
        </p>
      </div>

      {/* Results Summary */}
      <div>
        <label htmlFor="resultsSummary" className="block text-sm font-semibold text-orca-light mb-2">
          Results Summary
        </label>
        <textarea
          id="resultsSummary"
          value={config.resultsSummary}
          onChange={(e) => updateField('resultsSummary', e.target.value)}
          rows={3}
          className="w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light placeholder-orca-grey-3 focus:outline-none focus:ring-2 focus:ring-orca-accent focus:border-orca-accent resize-y transition-all"
          placeholder="2-3 sentences summarizing the results..."
        />
        <p className="mt-2 text-xs text-orca-grey-3">
          {config.resultsSummary.length} characters
        </p>
      </div>

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
                <button
                  onClick={() => removeOutcome(index)}
                  className="px-3 py-3 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition-all"
                  title="Remove outcome"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>
        {config.outcomes.length < 3 && (
          <div className="mt-3 p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
            <p className="text-sm text-yellow-400/90 flex items-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Add at least 3 outcomes (currently {config.outcomes.length})</span>
            </p>
          </div>
        )}
        {config.outcomes.length === 0 && (
          <button
            onClick={addOutcome}
            className="mt-3 w-full px-4 py-3 bg-orca-grey-1/50 border border-orca-grey-2/50 rounded-lg text-orca-light hover:bg-orca-grey-1 hover:border-orca-accent/50 transition-all flex items-center justify-center space-x-2 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add First Outcome</span>
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

