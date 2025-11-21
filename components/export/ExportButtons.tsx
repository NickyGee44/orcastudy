'use client';

import { useState, useRef, useEffect } from 'react';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import { renderElementToCanvas, canvasToBlob, downloadBlob } from '@/lib/canvasExport';
import { generateExportFilename } from '@/lib/export';
import jsPDF from 'jspdf';

export default function ExportButtons() {
  const { config } = useCaseStudyConfig();
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<'pdf' | 'png' | null>(null);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const previewRef = useRef<HTMLDivElement | null>(null);

  // Get preview element ref from window (set by CaseStudyPreview)
  useEffect(() => {
    const checkForRef = () => {
      if (typeof window !== 'undefined' && (window as any).previewRef?.current) {
        previewRef.current = (window as any).previewRef.current;
      }
    };
    
    checkForRef();
    const interval = setInterval(checkForRef, 100);
    
    return () => clearInterval(interval);
  }, []);

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 3000);
  };

  const exportToPDF = async () => {
    if (!previewRef.current) {
      showMessage('error', 'Preview element not found. Please refresh the page.');
      return;
    }

    // Validate that there's content to export
    if (!config.title && !config.clientName) {
      showMessage('error', 'Please fill in at least a title or client name before exporting.');
      return;
    }

    setIsExporting(true);
    setExportType('pdf');

    try {
      // Render preview to canvas with error handling
      let canvas: HTMLCanvasElement;
      try {
        canvas = await renderElementToCanvas(previewRef.current, {
          scale: 2,
          backgroundColor: config.theme === 'dark' ? '#0f0f0f' : '#ffffff',
        });
      } catch (renderError) {
        console.error('Canvas rendering error:', renderError);
        throw new Error('Failed to render preview. Please ensure all content is loaded.');
      }

      // Convert canvas to image
      let imgData: string;
      try {
        imgData = canvas.toDataURL('image/png', 1.0);
        if (!imgData || imgData === 'data:,') {
          throw new Error('Failed to convert canvas to image');
        }
      } catch (imgError) {
        console.error('Image conversion error:', imgError);
        throw new Error('Failed to process image for export.');
      }

      // Create PDF
      const pdfWidth = 8.5;
      const pdfHeight = 11;
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: [pdfWidth, pdfHeight],
      });

      // Calculate image dimensions to fit PDF
      const imgWidth = pdfWidth;
      const imgHeight = Math.min((canvas.height / canvas.width) * pdfWidth, pdfHeight);

      // Add image to PDF
      try {
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      } catch (pdfError) {
        console.error('PDF addImage error:', pdfError);
        throw new Error('Failed to add image to PDF. The image may be too large.');
      }

      // Generate filename and download
      const filename = generateExportFilename(config.clientName || config.title || 'case-study', 'pdf');
      pdf.save(filename);

      showMessage('success', 'PDF exported successfully!');
    } catch (error) {
      console.error('PDF export error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to export PDF. Please try again.';
      showMessage('error', errorMessage);
    } finally {
      setIsExporting(false);
      setExportType(null);
    }
  };

  const exportToPNG = async () => {
    if (!previewRef.current) {
      showMessage('error', 'Preview element not found. Please refresh the page.');
      return;
    }

    // Validate that there's content to export
    if (!config.title && !config.clientName) {
      showMessage('error', 'Please fill in at least a title or client name before exporting.');
      return;
    }

    setIsExporting(true);
    setExportType('png');

    try {
      // Render preview to canvas with error handling
      let canvas: HTMLCanvasElement;
      try {
        canvas = await renderElementToCanvas(previewRef.current, {
          scale: 2,
          backgroundColor: config.theme === 'dark' ? '#0f0f0f' : '#ffffff',
        });
      } catch (renderError) {
        console.error('Canvas rendering error:', renderError);
        throw new Error('Failed to render preview. Please ensure all content is loaded.');
      }

      // Convert canvas to blob and download
      let blob: Blob;
      try {
        blob = await canvasToBlob(canvas);
      } catch (blobError) {
        console.error('Blob conversion error:', blobError);
        throw new Error('Failed to process image for export.');
      }

      const filename = generateExportFilename(config.clientName || config.title || 'case-study', 'png');
      downloadBlob(blob, filename);

      showMessage('success', 'PNG exported successfully!');
    } catch (error) {
      console.error('PNG export error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to export PNG. Please try again.';
      showMessage('error', errorMessage);
    } finally {
      setIsExporting(false);
      setExportType(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Message Display */}
      {message && (
        <div
          className={`p-3 rounded-md ${
            message.type === 'success'
              ? 'bg-green-900/30 text-green-400 border border-green-700'
              : 'bg-red-900/30 text-red-400 border border-red-700'
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Export Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={exportToPDF}
          disabled={isExporting}
          className="flex-1 px-6 py-3 bg-orca-accent hover:bg-orca-accent-dark disabled:bg-orca-grey-2 disabled:text-orca-grey-3 text-orca-dark font-medium rounded-md transition-colors flex items-center justify-center space-x-2"
        >
          {isExporting && exportType === 'pdf' ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Exporting PDF...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <span>Download PDF</span>
            </>
          )}
        </button>

        <button
          onClick={exportToPNG}
          disabled={isExporting}
          className="flex-1 px-6 py-3 bg-orca-grey-1 hover:bg-orca-grey-2 disabled:bg-orca-grey-2 disabled:text-orca-grey-3 text-orca-light font-medium rounded-md transition-colors flex items-center justify-center space-x-2 border border-orca-grey-2"
        >
          {isExporting && exportType === 'png' ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Exporting PNG...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Download PNG</span>
            </>
          )}
        </button>
      </div>

      <p className="text-xs text-orca-grey-3 text-center">
        Exports are high-resolution and ready for print or digital use
      </p>
    </div>
  );
}

