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
    <Card padding="none" className="overflow-hidden border-[rgba(255,255,255,0.08)]">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between text-left group hover:bg-[#1E1E1E] transition-colors duration-200"
      >
        <div className="flex-1">
          <h3 className="text-[18px] font-semibold text-white mb-0.5">{title}</h3>
          {subtitle && (
            <p className="text-[13px] text-[#B3B3B3] uppercase tracking-wider">{subtitle}</p>
          )}
        </div>
        <span className={`text-lg transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-6 py-6 bg-[#1E1E1E] animate-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </Card>
  );
}

