'use client';

import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export default function SectionHeader({ title, subtitle, icon, action }: SectionHeaderProps) {
  return (
    <div className="mb-6 pb-4 border-b border-white/6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="text-orca-accent">
              {icon}
            </div>
          )}
          <div>
            <h2 className="text-h2 font-bold text-orca-light">{title}</h2>
            {subtitle && (
              <p className="text-caption text-orca-grey-3 mt-1">{subtitle}</p>
            )}
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  );
}

