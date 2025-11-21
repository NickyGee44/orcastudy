'use client';

import Sidebar from './components/Sidebar';
import PreviewArea from './components/PreviewArea';

export default function CaseStudyGenerator() {
  return (
    <div className="h-screen flex flex-col lg:flex-row bg-[#0D0D0D] text-white overflow-hidden">
      {/* Left Column - Form Panel */}
      <Sidebar />

      {/* Right Column - Preview Panel */}
      <PreviewArea />
    </div>
  );
}

