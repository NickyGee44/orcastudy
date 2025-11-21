import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Orca Brand Palette (V2)
        // Primary Colors
        'orca-black': '#000000',
        'orca-charcoal': '#0D0D0D',
        'orca-deep-grey': '#1A1A1A',
        'orca-mid-grey': '#2E2E2E',
        'orca-light-grey': '#F2F2F2',
        'orca-white': '#FFFFFF',
        
        // Accent Colors
        'orca-accent': '#25C2D1', // Primary Orca Blue/Teal
        'orca-accent-secondary': '#69D2E7', // Secondary Accent
        'orca-accent-dark': '#1A9BA8', // Darker variant
        
        // Functional Colors
        'orca-success': '#2ECC71',
        'orca-warning': '#F1C40F',
        'orca-danger': '#E74C3C',
        
        // Legacy support (keeping for compatibility)
        'orca-dark': '#1A1A1A',
        'orca-darker': '#0D0D0D',
        'orca-light': '#FFFFFF',
        'orca-grey-1': '#2E2E2E',
        'orca-grey-2': '#4A4A4A',
        'orca-grey-3': '#6A6A6A',
        
        // Enhanced accent colors (purple and blue for UI elements)
        'orca-purple': '#8b5cf6',
        'orca-purple-dark': '#7c3aed',
        'orca-purple-light': '#a78bfa',
        'orca-blue': '#3b82f6',
        'orca-blue-dark': '#2563eb',
        'orca-blue-light': '#60a5fa',
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'label': ['12px', { lineHeight: '1.5', fontWeight: '400', letterSpacing: '0.02em', textTransform: 'uppercase' }],
        'caption': ['11px', { lineHeight: '1.5', fontWeight: '300' }],
      },
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
      },
      borderRadius: {
        'card': '12px',
        'button': '8px',
        'input': '8px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.18)',
        'button': '0 2px 8px rgba(0, 0, 0, 0.15)',
        'button-hover': '0 4px 12px rgba(37, 194, 209, 0.3)',
        'focus': '0 0 0 2px rgba(37, 194, 209, 0.25)',
      },
      transitionDuration: {
        '200': '200ms',
        '250': '250ms',
      },
    },
  },
  plugins: [],
};
export default config;

