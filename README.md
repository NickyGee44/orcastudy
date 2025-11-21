# Orca Case Study Generator

A single-page web application for Orca Intelligence team members to generate professional, on-brand case studies from structured inputs. The tool allows users to create 1-page case studies with KPIs/metrics and text blocks, then download the result as PDF and PNG with consistent Orca branding.

## Features

- **Real-time Preview**: See your case study update as you fill out the form
- **Comprehensive Form**: Input all case study data including metrics, narratives, testimonials, and more
- **Export Options**: Download high-resolution PDF and PNG files ready for print or digital use
- **Save & Load**: Save multiple case study configurations and load them later
- **Sample Data**: Quick-start with realistic sample data
- **Responsive Design**: Works on desktop and mobile devices
- **Orca Branding**: Consistent visual design matching Orca's brand guidelines

## Tech Stack

- **Framework**: Next.js 16 (App Router) with TypeScript
- **Styling**: Tailwind CSS v3+
- **Export Libraries**: 
  - `html2canvas` for HTML to canvas conversion
  - `jspdf` for PDF generation
- **State Management**: React hooks (useState, useEffect, custom hooks)
- **Persistence**: Browser localStorage

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NickyGee44/orcastudy.git
cd orcastudy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000/case-study-generator](http://localhost:3000/case-study-generator) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
orca_case_study/
├── app/
│   ├── case-study-generator/    # Main application page
│   ├── layout.tsx               # Root layout with error boundary
│   └── globals.css              # Global styles and Tailwind imports
├── components/
│   ├── export/                  # Export functionality components
│   ├── form/                    # Form input components
│   ├── preview/                 # Preview rendering components
│   └── ErrorBoundary.tsx       # Error boundary component
├── hooks/
│   ├── useCaseStudyConfig.ts    # Main state management hook
│   └── useLocalStorage.ts       # localStorage abstraction hook
├── lib/
│   ├── canvasExport.ts          # Canvas rendering utilities
│   ├── defaults.ts              # Default state factory
│   ├── export.ts                # Export utility functions
│   ├── sampleData.ts            # Sample data generator
│   └── savedConfigs.ts         # Saved configs management
├── types/
│   └── case-study.ts           # TypeScript type definitions
└── tailwind.config.ts          # Tailwind configuration with Orca branding
```

## Usage

### Creating a Case Study

1. **Fill in Basics**: Enter case study title, client name, industry, region, and time period
2. **Configure Metrics**: Toggle metrics on/off and enter values for enabled metrics
3. **Add Narrative**: Fill in client overview, challenge, solution, and results
4. **Add Outcomes**: Create 3-5 key outcome bullet points
5. **Optional**: Add testimonial and configure call-to-action
6. **Preview**: See your case study update in real-time on the right panel
7. **Export**: Click "Download PDF" or "Download PNG" to export

### Saving and Loading

- **Save**: Use the "Save & Load" section to save your current case study configuration
- **Load**: Select a saved case study from the dropdown and click "Load"
- **Delete**: Remove saved case studies using the "Delete" button

### Sample Data

Click "Load Sample Data" to populate the form with a realistic freight audit case study example. This is useful for:
- Testing the tool
- Understanding the expected format
- Starting with a template

## Customization

### Branding Colors

Edit `tailwind.config.ts` to customize Orca brand colors:

```typescript
colors: {
  'orca-dark': '#1a1a1a',
  'orca-accent': '#00b4d8',
  // ... other colors
}
```

### Typography

The default font is Lato, loaded from Google Fonts. To change:
1. Update the font import in `app/globals.css`
2. Update the font family in `tailwind.config.ts`

### Metrics

Add or modify metrics in `types/case-study.ts`:

```typescript
export const DEFAULT_METRICS: Omit<MetricConfig, 'enabled' | 'value'>[] = [
  {
    id: 'your-metric-id',
    label: 'Your Metric Label',
    displayFormat: 'percentage', // or 'currency', 'big-number'
  },
  // ... more metrics
];
```

## Export Quality

- **Resolution**: Exports use 2x device pixel ratio for high-quality output
- **PDF Format**: Standard letter size (8.5 x 11 inches)
- **PNG Format**: High-resolution PNG suitable for print or digital use
- **Fonts**: Fonts are loaded before export to ensure accurate rendering

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: Export functionality requires modern browser support for canvas and blob APIs.

## Troubleshooting

### Export Not Working

- Ensure all required fields are filled (at least title or client name)
- Check browser console for errors
- Try refreshing the page
- Ensure fonts are loaded (wait a moment after page load)

### Preview Not Updating

- Check that form inputs are connected (should update automatically)
- Verify browser console for errors
- Try refreshing the page

### localStorage Issues

- If save/load isn't working, check browser localStorage quota
- Clear browser cache if needed
- Ensure localStorage is enabled in browser settings

## Development

### Key Files to Modify

- **Form Components**: `components/form/` - Add or modify form sections
- **Preview Components**: `components/preview/` - Modify case study layout
- **Export Logic**: `lib/canvasExport.ts` and `components/export/` - Adjust export behavior
- **State Management**: `hooks/useCaseStudyConfig.ts` - Modify state structure

### Adding New Features

1. Update TypeScript types in `types/case-study.ts` if needed
2. Modify state management in `hooks/useCaseStudyConfig.ts`
3. Add form inputs in `components/form/`
4. Update preview in `components/preview/`
5. Test export functionality

## Deployment

### Netlify

1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Environment variables: None required

### Vercel

1. Import your GitHub repository
2. Framework preset: Next.js
3. Build command and output directory are auto-detected

## License

Internal tool for Orca Intelligence Inc.

## Support

For issues or questions, contact the development team.

