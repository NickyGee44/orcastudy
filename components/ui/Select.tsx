'use client';

import { SelectHTMLAttributes, ReactNode } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: ReactNode;
  options: Array<{ value: string; label: string }>;
}

export default function Select({
  label,
  error,
  helperText,
  icon,
  options,
  className = '',
  id,
  ...props
}: SelectProps) {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={selectId}
          className="block text-label text-orca-light font-medium tracking-wider uppercase"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orca-grey-3 pointer-events-none">
            {icon}
          </div>
        )}
        <select
          id={selectId}
          className={`
            w-full bg-white/5 border border-white/12 rounded-input
            px-4 py-2.5 text-body text-orca-light
            focus:outline-none focus:border-orca-accent focus:shadow-focus
            transition-all duration-200 cursor-pointer
            appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")] bg-no-repeat bg-[length:20px] bg-[right_12px_center]
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-orca-danger' : ''}
            ${className}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-orca-charcoal">
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <p className="text-caption text-orca-danger flex items-center space-x-1">
          <span className="inline-flex items-center justify-center w-4 h-4 flex-shrink-0" style={{ width: '16px', height: '16px', minWidth: '16px', minHeight: '16px', maxWidth: '16px', maxHeight: '16px' }}>
            <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20" style={{ width: '100%', height: '100%', display: 'block' }}>
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </span>
          <span>{error}</span>
        </p>
      )}
      {helperText && !error && (
        <p className="text-caption text-orca-grey-3">{helperText}</p>
      )}
    </div>
  );
}

