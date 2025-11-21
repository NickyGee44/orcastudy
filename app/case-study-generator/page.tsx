'use client';

import Sidebar from './components/Sidebar';
import PreviewArea from './components/PreviewArea';

export default function CaseStudyGenerator() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Container with margins */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="h-screen flex flex-col lg:flex-row gap-4 lg:gap-6 overflow-hidden">
          {/* Left Column - Form Panel */}
          <Sidebar />

          {/* Right Column - Preview Panel */}
          <PreviewArea />
        </div>
      </div>
    </div>
  );
}

