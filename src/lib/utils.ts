import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getCurrentYear = () => (new Date()).getFullYear();


export function removeHttpFromUrl(url: string): string {
  const urlItem: URL = new URL(url);
  return urlItem.host + urlItem.pathname;
}
