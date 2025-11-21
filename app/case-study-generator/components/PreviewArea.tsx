'use client';

import { useState } from 'react';
import CaseStudyPreview from '@/components/preview/CaseStudyPreview';
import HeaderControls from './HeaderControls';
import FooterExportBar from './FooterExportBar';

export default function PreviewArea() {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="flex-1 h-screen lg:h-auto flex flex-col bg-[#1A1A1A] rounded-lg border border-[rgba(255,255,255,0.1)] shadow-xl overflow-hidden">
      {/* Header Controls */}
      <HeaderControls zoom={zoom} onZoomChange={setZoom} />

      {/* Preview Content - Scrollable */}
      <div className="flex-1 overflow-y-auto bg-[#0D0D0D]">
        <div className="min-h-full flex items-center justify-center p-4 md:p-8 lg:p-12">
          <div
            className="bg-[#1E1E1E] rounded-lg shadow-2xl p-4 md:p-8 lg:p-12"
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'center',
              transition: 'transform 200ms ease',
              maxWidth: '100%',
            }}
          >
            <CaseStudyPreview />
          </div>
        </div>
      </div>

      {/* Footer Export Bar - Sticky */}
      <FooterExportBar />
    </div>
  );
}

