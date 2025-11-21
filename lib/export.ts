/**
 * Get the device pixel ratio for high-resolution exports
 */
export function getDevicePixelRatio(): number {
  if (typeof window === 'undefined') {
    return 1;
  }
  return window.devicePixelRatio || 1;
}

/**
 * Calculate optimal canvas dimensions based on element size and pixel ratio
 */
export function calculateCanvasDimensions(
  elementWidth: number,
  elementHeight: number,
  scale: number = 2
): { width: number; height: number; scale: number } {
  const pixelRatio = getDevicePixelRatio();
  const finalScale = Math.max(scale, pixelRatio);
  
  return {
    width: elementWidth * finalScale,
    height: elementHeight * finalScale,
    scale: finalScale,
  };
}

/**
 * Generate a filename slug from a string
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Generate filename for exports
 */
export function generateExportFilename(
  clientName: string,
  extension: 'pdf' | 'png'
): string {
  const slug = slugify(clientName || 'case-study');
  const timestamp = new Date().toISOString().split('T')[0];
  return `orca-case-study-${slug}-${timestamp}.${extension}`;
}

/**
 * Wait for fonts to load before exporting
 */
export async function waitForFonts(): Promise<void> {
  if (typeof document === 'undefined') {
    return;
  }

  try {
    // Wait for document fonts to be ready
    await document.fonts.ready;
    
    // Additional small delay to ensure rendering is complete
    await new Promise((resolve) => setTimeout(resolve, 100));
  } catch (error) {
    console.warn('Error waiting for fonts:', error);
    // Continue anyway if font loading check fails
  }
}

