'use client';

import { useEffect } from 'react';
import CaseStudyPreview from './CaseStudyPreview';
import ExportButtons from '@/components/export/ExportButtons';

interface PreviewLightboxProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreviewLightbox({ isOpen, onClose }: PreviewLightboxProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-orca-darker rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-orca-grey-1/30 bg-orca-dark">
          <h2 className="text-lg font-semibold text-orca-light">Case Study Preview</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-orca-grey-1 rounded-lg transition-colors text-orca-grey-3 hover:text-orca-light"
            aria-label="Close preview"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-orca-darker to-orca-dark">
          <CaseStudyPreview />
        </div>

        {/* Export Buttons Footer */}
        <div className="p-4 border-t border-orca-grey-1/30 bg-orca-dark">
          <ExportButtons />
        </div>
      </div>
    </div>
  );
}

