import html2canvas from 'html2canvas';
import { calculateCanvasDimensions, waitForFonts } from './export';

/**
 * Render an HTML element to a canvas using html2canvas
 * Supports high-DPI exports with configurable scale (default 3x for premium quality)
 */
export async function renderElementToCanvas(
  element: HTMLElement,
  options?: {
    scale?: number; // Default 3 for premium quality (was 2)
    backgroundColor?: string;
    dpi?: number; // Alternative to scale, calculates scale based on target DPI
  }
): Promise<HTMLCanvasElement> {
  // Wait for fonts to load
  await waitForFonts();

  // Calculate optimal scale - default to 3x for premium quality
  // For print quality (300 DPI), we want scale of ~3 on standard displays (96 DPI)
  let finalScale = options?.scale || 3;
  
  if (options?.dpi) {
    // Calculate scale based on target DPI
    // Standard screen DPI is ~96, so for 300 DPI we need ~3.125x scale
    const screenDPI = 96;
    finalScale = Math.max(options.dpi / screenDPI, 2); // Minimum 2x
  }

  const { width, height, scale } = calculateCanvasDimensions(
    element.offsetWidth,
    element.offsetHeight,
    finalScale
  );

  const canvas = await html2canvas(element, {
    scale: finalScale,
    width: element.offsetWidth,
    height: element.offsetHeight,
    useCORS: true,
    allowTaint: true,
    logging: false,
    backgroundColor: options?.backgroundColor || '#ffffff',
    windowWidth: element.offsetWidth,
    windowHeight: element.offsetHeight,
    // Enable better quality rendering
    removeContainer: false,
    imageTimeout: 15000,
    onclone: (clonedDoc) => {
      // Ensure fonts are loaded in cloned document
      const clonedElement = clonedDoc.querySelector('[data-export-target]') || 
                           clonedDoc.body.querySelector('[style*="850px"]');
      if (clonedElement) {
        const elementStyle = (clonedElement as HTMLElement).style;
        elementStyle.fontFamily = 'Lato, system-ui, sans-serif';
        // Ensure crisp rendering
        elementStyle.imageRendering = 'crisp-edges';
        (elementStyle as any).webkitFontSmoothing = 'antialiased';
        (elementStyle as any).mozOsxFontSmoothing = 'grayscale';
      }
      
      // Handle image errors gracefully - hide broken images
      const images = clonedDoc.querySelectorAll('img');
      images.forEach((img) => {
        (img as HTMLImageElement).onerror = function() {
          this.style.display = 'none';
        };
        // Ensure images render at high quality
        (img as HTMLImageElement).style.imageRendering = 'high-quality';
      });
    },
    ignoreElements: (element) => {
      // Ignore elements that might cause issues
      return element.classList?.contains('no-export');
    },
  });

  return canvas;
}

/**
 * Convert canvas to blob
 */
export function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to convert canvas to blob'));
        }
      },
      'image/png',
      1.0
    );
  });
}

/**
 * Download a blob as a file
 */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

