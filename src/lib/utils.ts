import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


const hexToRgb = (hex: string) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
};
export function getTextColorForBackground(background: string): string {
  const isGradient = background.includes("radial-gradient") || background.includes("linear-gradient");
  if (isGradient) {
    // Handle gradient background
    const colorStops = background.match(/#[0-9A-Fa-f]{6}/g) || [];
    if (colorStops.length === 0) {
      // No color stops found, default to a text color (e.g., black or white)
      return "black"; // Use black text by default
    }
    const totalLuminance = colorStops.reduce((acc, color) => {
      const [r, g, b] = hexToRgb(color);
      return acc + (0.299 * r + 0.587 * g + 0.114 * b);
    }, 0);
    const averageLuminance = totalLuminance / colorStops.length;
    if (averageLuminance > 128) {
      return "black"; // Use black text for light gradients
    } else {
      return "white"; // Use white text for dark gradients
    }
  } else {
    // Handle solid background color
    const [r, g, b] = hexToRgb(background);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    if (luminance > 128) {
      return "black"; // Use black text for light backgrounds
    } else {
      return "white"; // Use white text for dark backgrounds
    }
  }
}