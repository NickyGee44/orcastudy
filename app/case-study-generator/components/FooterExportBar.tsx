'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import Select from '@/components/ui/Select';
import { renderElementToCanvas, canvasToBlob, downloadBlob } from '@/lib/canvasExport';
import { generateExportFilename } from '@/lib/export';
import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import jsPDF from 'jspdf';
import { useRef, useEffect } from 'react';

export default function FooterExportBar() {
  const { config } = useCaseStudyConfig();
  const [dpi, setDpi] = useState('3');
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<'pdf' | 'png' | null>(null);
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

  const exportToPDF = async () => {
    if (!previewRef.current) {
      alert('Preview element not found. Please refresh the page.');
      return;
    }

    if (!config.title && !config.clientName) {
      alert('Please fill in at least a title or client name before exporting.');
      return;
    }

    setIsExporting(true);
    setExportType('pdf');

    try {
      const scale = parseInt(dpi);
      const canvas = await renderElementToCanvas(previewRef.current, {
        scale,
        backgroundColor: config.theme === 'dark' ? '#0D0D0D' : '#ffffff',
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdfWidth = 8.5;
      const pdfHeight = 11;
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: [pdfWidth, pdfHeight],
      });

      const imgHeight = Math.min((canvas.height / canvas.width) * pdfWidth, pdfHeight);
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, imgHeight);

      const filename = generateExportFilename(config.clientName || config.title || 'case-study', 'pdf');
      pdf.save(filename);
    } catch (error) {
      console.error('PDF export error:', error);
      alert('Failed to export PDF. Please try again.');
    } finally {
      setIsExporting(false);
      setExportType(null);
    }
  };

  const exportToPNG = async () => {
    if (!previewRef.current) {
      alert('Preview element not found. Please refresh the page.');
      return;
    }

    if (!config.title && !config.clientName) {
      alert('Please fill in at least a title or client name before exporting.');
      return;
    }

    setIsExporting(true);
    setExportType('png');

    try {
      const scale = parseInt(dpi);
      const canvas = await renderElementToCanvas(previewRef.current, {
        scale,
        backgroundColor: config.theme === 'dark' ? '#0D0D0D' : '#ffffff',
      });

      const blob = await canvasToBlob(canvas);
      const filename = generateExportFilename(config.clientName || config.title || 'case-study', 'png');
      downloadBlob(blob, filename);
    } catch (error) {
      console.error('PNG export error:', error);
      alert('Failed to export PNG. Please try again.');
    } finally {
      setIsExporting(false);
      setExportType(null);
    }
  };

  return (
    <div className="sticky bottom-0 z-10 bg-[#141414] border-t border-[rgba(255,255,255,0.08)] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-[13px] text-[#B3B3B3] uppercase tracking-wider">Export Quality</span>
          <Select
            value={dpi}
            onChange={(e) => setDpi(e.target.value)}
            options={[
              { value: '1', label: '1× (Standard)' },
              { value: '2', label: '2× (High)' },
              { value: '3', label: '3× (Premium)' },
            ]}
            className="w-40"
          />
        </div>
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={exportToPDF}
            disabled={isExporting}
            isLoading={isExporting && exportType === 'pdf'}
          >
            {isExporting && exportType === 'pdf' ? 'Exporting...' : 'Download PDF'}
          </Button>
          <Button
            variant="secondary"
            size="md"
            onClick={exportToPNG}
            disabled={isExporting}
            isLoading={isExporting && exportType === 'png'}
          >
            {isExporting && exportType === 'png' ? 'Exporting...' : 'Download PNG'}
          </Button>
        </div>
      </div>
    </div>
  );
}

