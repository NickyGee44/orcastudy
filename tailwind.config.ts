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
        // Orca brand colors
        'orca-dark': '#1a1a1a',
        'orca-darker': '#0f0f0f',
        'orca-light': '#ffffff',
        'orca-accent': '#00b4d8',
        'orca-accent-dark': '#0096c7',
        'orca-grey-1': '#2a2a2a',
        'orca-grey-2': '#4a4a4a',
        'orca-grey-3': '#6a6a6a',
      },
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

