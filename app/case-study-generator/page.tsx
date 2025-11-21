'use client';

import CaseStudyForm from '@/components/form/CaseStudyForm';
import CaseStudyPreview from '@/components/preview/CaseStudyPreview';
import ExportButtons from '@/components/export/ExportButtons';

export default function CaseStudyGenerator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orca-dark via-orca-dark to-orca-darker text-orca-light">
      {/* Desktop: Side-by-side layout */}
      <div className="hidden md:flex h-screen">
        {/* Left Panel - Input Form */}
        <div className="w-1/2 border-r border-orca-grey-1/30 overflow-hidden bg-gradient-to-b from-orca-dark to-orca-darker/50">
          <CaseStudyForm />
        </div>

        {/* Right Panel - Preview */}
        <div className="w-1/2 overflow-y-auto bg-gradient-to-b from-orca-darker to-orca-dark flex flex-col">
          <div className="flex-1 p-6">
            <div className="mb-4 pb-4 border-b border-orca-grey-1/30">
              <h2 className="text-lg font-semibold text-orca-light mb-1">Live Preview</h2>
              <p className="text-xs text-orca-grey-3">See your case study update in real-time</p>
            </div>
            <CaseStudyPreview />
          </div>
          {/* Export Buttons - Sticky at bottom, compact toolbar */}
          <div className="sticky bottom-0 bg-orca-darker/95 backdrop-blur-sm border-t border-orca-grey-1/30 p-2 shadow-lg">
            <ExportButtons />
          </div>
        </div>
      </div>

      {/* Mobile: Stacked layout */}
      <div className="md:hidden flex flex-col h-screen">
        {/* Form on top */}
        <div className="flex-1 overflow-y-auto border-b border-orca-grey-1">
          <CaseStudyForm />
        </div>

        {/* Preview in middle */}
        <div className="flex-1 overflow-y-auto bg-orca-darker p-4">
          <CaseStudyPreview />
        </div>

        {/* Export Buttons - Sticky at bottom on mobile, compact toolbar */}
        <div className="sticky bottom-0 bg-orca-darker border-t border-orca-grey-1 p-1.5 shadow-lg">
          <ExportButtons />
        </div>
      </div>
    </div>
  );
}

