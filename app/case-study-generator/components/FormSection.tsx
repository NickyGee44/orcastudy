'use client';

import { ReactNode } from 'react';
import Card from '@/components/ui/Card';

interface FormSectionProps {
  title: string;
  subtitle?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: ReactNode;
}

export default function FormSection({
  title,
  subtitle,
  isOpen,
  onToggle,
  children,
}: FormSectionProps) {
  return (
    <Card padding="none" className="overflow-hidden border-[rgba(255,255,255,0.12)] bg-[#1E1E1E]">
      <button
        onClick={onToggle}
        className="w-full px-5 py-4 flex items-center justify-between text-left group hover:bg-[#252525] transition-colors duration-200 border-b border-[rgba(255,255,255,0.05)]"
      >
        <div className="flex-1">
          <h3 className="text-[16px] font-semibold text-white mb-1 leading-tight">{title}</h3>
          {subtitle && (
            <p className="text-[12px] text-[#A0A0A0] uppercase tracking-wider">{subtitle}</p>
          )}
        </div>
        <span className={`text-[14px] text-[#B3B3B3] transition-transform duration-200 flex-shrink-0 ml-3 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-5 py-5 bg-[#252525] animate-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </Card>
  );
}

