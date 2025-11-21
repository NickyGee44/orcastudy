'use client';

import CaseStudyForm from '@/components/form/CaseStudyForm';
import CaseStudyPreview from '@/components/preview/CaseStudyPreview';
import ExportButtons from '@/components/export/ExportButtons';

export default function CaseStudyGenerator() {
  return (
    <div className="min-h-screen bg-orca-dark text-orca-light">
      {/* Desktop: Side-by-side layout */}
      <div className="hidden md:flex h-screen">
        {/* Left Panel - Input Form */}
        <div className="w-1/2 border-r border-orca-grey-1 overflow-hidden">
          <CaseStudyForm />
        </div>

        {/* Right Panel - Preview */}
        <div className="w-1/2 overflow-y-auto bg-orca-darker flex flex-col">
          <div className="flex-1 p-6">
            <CaseStudyPreview />
          </div>
          {/* Export Buttons - Sticky at bottom, compact toolbar */}
          <div className="sticky bottom-0 bg-orca-darker border-t border-orca-grey-1 p-2">
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

