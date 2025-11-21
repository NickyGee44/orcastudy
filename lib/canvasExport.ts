import html2canvas from 'html2canvas';
import { calculateCanvasDimensions, waitForFonts } from './export';

/**
 * Render an HTML element to a canvas using html2canvas
 */
export async function renderElementToCanvas(
  element: HTMLElement,
  options?: {
    scale?: number;
    backgroundColor?: string;
  }
): Promise<HTMLCanvasElement> {
  // Wait for fonts to load
  await waitForFonts();

  const { width, height, scale } = calculateCanvasDimensions(
    element.offsetWidth,
    element.offsetHeight,
    options?.scale || 2
  );

  const canvas = await html2canvas(element, {
    scale,
    width: element.offsetWidth,
    height: element.offsetHeight,
    useCORS: true,
    allowTaint: true,
    logging: false,
    backgroundColor: options?.backgroundColor || '#ffffff',
    windowWidth: element.offsetWidth,
    windowHeight: element.offsetHeight,
    onclone: (clonedDoc) => {
      // Ensure fonts are loaded in cloned document
      const clonedElement = clonedDoc.querySelector('[data-export-target]') || 
                           clonedDoc.body.querySelector('[style*="850px"]');
      if (clonedElement) {
        (clonedElement as HTMLElement).style.fontFamily = 'Lato, system-ui, sans-serif';
      }
      
      // Handle image errors gracefully - hide broken images
      const images = clonedDoc.querySelectorAll('img');
      images.forEach((img) => {
        (img as HTMLImageElement).onerror = function() {
          this.style.display = 'none';
        };
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

