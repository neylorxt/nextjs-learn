import { clsx, type ClassValue } from "clsx";

// Version simplifiée sans tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
