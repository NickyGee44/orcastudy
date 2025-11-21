'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  isLoading?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  isLoading = false,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-button transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-[#25C2D1] text-black hover:bg-[#1A99A5] hover:shadow-button-hover active:scale-[0.98] h-[42px]',
    secondary: 'border border-[rgba(255,255,255,0.1)] bg-transparent text-white hover:bg-[#1E1E1E] hover:border-[rgba(255,255,255,0.15)] h-[42px]',
    destructive: 'bg-orca-danger text-white hover:bg-[#C0392B] h-[42px]',
    ghost: 'bg-transparent text-white hover:bg-[rgba(255,255,255,0.05)] h-[42px]',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm h-[36px]',
    md: 'px-4 py-2.5 text-[15px] h-[42px]',
    lg: 'px-6 py-3.5 text-base h-[48px]',
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <svg 
            className="animate-spin h-4 w-4 flex-shrink-0" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
            style={{ width: '16px', height: '16px', minWidth: '16px', minHeight: '16px', maxWidth: '16px', maxHeight: '16px' }}
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

