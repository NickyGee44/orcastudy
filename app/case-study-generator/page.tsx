'use client';

import { useState } from 'react';
import CaseStudyForm from '@/components/form/CaseStudyForm';
import PreviewLightbox from '@/components/preview/PreviewLightbox';

export default function CaseStudyGenerator() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orca-dark via-orca-dark to-orca-darker text-orca-light">
      {/* Full-width form layout */}
      <div className="h-screen flex flex-col">
        {/* Form - Full width */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-orca-dark to-orca-darker/50">
          <CaseStudyForm />
        </div>

        {/* Preview Button - Sticky at bottom */}
        <div className="sticky bottom-0 p-3 bg-orca-dark/95 backdrop-blur-sm border-t border-orca-grey-1/30 shadow-lg">
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="w-full px-4 py-2.5 bg-gradient-to-r from-orca-accent to-orca-accent-dark hover:from-orca-accent-dark hover:to-orca-accent text-orca-dark font-semibold rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Preview Case Study</span>
            </button>
          </div>
        </div>
      </div>

      {/* Preview Lightbox */}
      <PreviewLightbox isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </div>
  );
}

