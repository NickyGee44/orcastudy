'use client';

import { useState } from 'react';
import CaseStudyForm from '@/components/form/CaseStudyForm';
import PreviewLightbox from '@/components/preview/PreviewLightbox';

export default function CaseStudyGenerator() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orca-darker via-orca-dark to-orca-dark text-orca-light" style={{
      backgroundImage: 'radial-gradient(at 0% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(59, 130, 246, 0.1) 0px, transparent 50%)'
    }}>
      {/* Full-width form layout */}
      <div className="h-screen flex flex-col">
        {/* Form - Full width */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-orca-dark to-orca-darker/50">
          <CaseStudyForm />
        </div>

        {/* Preview Button - Sticky at bottom */}
        <div className="sticky bottom-0 p-4 bg-gradient-to-t from-orca-dark/98 via-orca-dark/95 to-transparent backdrop-blur-md border-t border-orca-purple/20 shadow-2xl">
          <div className="max-w-4xl mx-auto w-full flex justify-center px-4 sm:px-6 lg:px-8">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Preview button clicked');
                setIsPreviewOpen(true);
              }}
              className="w-full max-w-sm px-6 py-3.5 bg-gradient-to-r from-orca-purple via-orca-blue to-orca-purple hover:from-orca-purple-dark hover:via-orca-blue-dark hover:to-orca-purple-dark text-orca-light font-bold rounded-xl transition-all shadow-lg hover:shadow-2xl hover:scale-[1.02] flex items-center justify-center space-x-3 text-sm cursor-pointer"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5} style={{ width: '20px', height: '20px', flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="whitespace-nowrap">Preview Case Study</span>
            </button>
          </div>
        </div>
      </div>

      {/* Preview Lightbox */}
      <PreviewLightbox isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} />
    </div>
  );
}

