'use client';

import { InputHTMLAttributes } from 'react';

interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  description?: string;
}

export default function Switch({
  label,
  description,
  className = '',
  id,
  ...props
}: SwitchProps) {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="flex items-start space-x-3">
      <div className="relative flex-shrink-0">
        <input
          type="checkbox"
          id={switchId}
          className="sr-only"
          {...props}
        />
        <label
          htmlFor={switchId}
          className={`
            relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 cursor-pointer
            ${props.checked ? 'bg-[#25C2D1]' : 'bg-[#2E2E2E]'}
            ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <span
            className={`
              inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200
              ${props.checked ? 'translate-x-6' : 'translate-x-1'}
            `}
          />
        </label>
      </div>
      {(label || description) && (
        <div className="flex-1 min-w-0">
          {label && (
            <label htmlFor={switchId} className="block text-[15px] font-medium text-white cursor-pointer">
              {label}
            </label>
          )}
          {description && (
            <p className="text-[13px] text-[#B3B3B3] mt-1">{description}</p>
          )}
        </div>
      )}
    </div>
  );
}

