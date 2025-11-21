'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  hover?: boolean;
}

export default function Card({ 
  children, 
  className = '', 
  padding = 'md',
  hover = false 
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-5',
    lg: 'p-6',
    none: '',
  };
  
  return (
    <div
      className={`
        bg-[#1E1E1E] rounded-lg shadow-lg border border-[rgba(255,255,255,0.12)]
        ${paddingClasses[padding]}
        ${hover ? 'hover:shadow-xl hover:border-[rgba(255,255,255,0.15)] transition-all duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

