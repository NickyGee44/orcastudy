'use client';

import { TextareaHTMLAttributes, ReactNode } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: ReactNode;
}

export default function Textarea({
  label,
  error,
  helperText,
  icon,
  className = '',
  id,
  ...props
}: TextareaProps) {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label 
          htmlFor={textareaId}
          className="block text-[12px] text-[#CCCCCC] font-semibold tracking-wider uppercase mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-3 text-orca-grey-3">
            {icon}
          </div>
        )}
        <textarea
          id={textareaId}
          className={`
            w-full bg-[#2A2A2A] border border-[rgba(255,255,255,0.12)] rounded-lg
            px-4 py-2.5 text-[15px] text-white font-normal
            placeholder:text-[#888888]
            focus:outline-none focus:border-[#25C2D1] focus:ring-2 focus:ring-[#25C2D1]/20
            transition-all duration-200 resize-y
            ${icon ? 'pl-10' : ''}
            ${error ? 'border-orca-danger focus:border-orca-danger focus:ring-orca-danger/20' : ''}
            ${className}
          `}
          {...props}
        />
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

