'use client';

import { useEffect } from 'react';
import CaseStudyPreview from './CaseStudyPreview';
import ExportButtons from '@/components/export/ExportButtons';

interface PreviewLightboxProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PreviewLightbox({ isOpen, onClose }: PreviewLightboxProps) {
  // Debug logging
  useEffect(() => {
    console.log('PreviewLightbox isOpen:', isOpen);
  }, [isOpen]);

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
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      style={{ zIndex: 9999 }}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-orca-darker rounded-xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-orca-grey-1/30 bg-orca-dark">
          <h2 className="text-lg font-semibold text-orca-light">Case Study Preview</h2>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onClose();
            }}
            className="p-2 hover:bg-orca-grey-1 rounded-lg transition-colors text-orca-grey-3 hover:text-orca-light cursor-pointer"
            aria-label="Close preview"
          >
            <span className="inline-flex items-center justify-center w-5 h-5 flex-shrink-0" style={{ width: '20px', height: '20px', minWidth: '20px', minHeight: '20px', maxWidth: '20px', maxHeight: '20px' }}>
              <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} style={{ width: '100%', height: '100%', display: 'block' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
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

