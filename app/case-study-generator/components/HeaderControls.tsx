'use client';

import { useCaseStudyConfig } from '@/hooks/useCaseStudyConfig';
import Switch from '@/components/ui/Switch';

interface HeaderControlsProps {
  zoom: number;
  onZoomChange: (zoom: number) => void;
}

export default function HeaderControls({ zoom, onZoomChange }: HeaderControlsProps) {
  const { config, updateField } = useCaseStudyConfig();

  return (
    <div className="sticky top-0 z-10 bg-[#1A1A1A] border-b border-[rgba(255,255,255,0.1)] px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h2 className="text-[24px] font-semibold text-white">Preview</h2>
          
          {/* Zoom Controls */}
          <div className="flex items-center gap-3">
            <span className="text-[13px] text-[#B3B3B3] uppercase tracking-wider">Zoom</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onZoomChange(90)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  zoom === 90
                    ? 'bg-[#25C2D1] text-black'
                    : 'bg-[#1E1E1E] text-white hover:bg-[#2E2E2E]'
                }`}
              >
                90%
              </button>
              <button
                onClick={() => onZoomChange(100)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  zoom === 100
                    ? 'bg-[#25C2D1] text-black'
                    : 'bg-[#1E1E1E] text-white hover:bg-[#2E2E2E]'
                }`}
              >
                100%
              </button>
              <button
                onClick={() => onZoomChange(125)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  zoom === 125
                    ? 'bg-[#25C2D1] text-black'
                    : 'bg-[#1E1E1E] text-white hover:bg-[#2E2E2E]'
                }`}
              >
                125%
              </button>
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center gap-3">
          <span className="text-[13px] text-[#B3B3B3] uppercase tracking-wider">Theme</span>
          <Switch
            checked={config.theme === 'dark'}
            onChange={(e) => updateField('theme', e.target.checked ? 'dark' : 'light')}
            label={config.theme === 'dark' ? 'Dark' : 'Light'}
          />
        </div>
      </div>
    </div>
  );
}

