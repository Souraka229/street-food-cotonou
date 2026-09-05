import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build a stable Unsplash URL for a known photo id. */
export function unsplash(id: string, w = 1200, q = 80) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

/** Format an integer price in West-African CFA francs. */
export function formatFcfa(value: number) {
  return `${value.toLocaleString("fr-FR")} FCFA`;
}
