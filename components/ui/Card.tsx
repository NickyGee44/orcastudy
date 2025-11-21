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
        bg-[#1E1E1E] rounded-card shadow-card border border-[rgba(255,255,255,0.08)]
        ${paddingClasses[padding]}
        ${hover ? 'hover:shadow-lg transition-shadow duration-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

