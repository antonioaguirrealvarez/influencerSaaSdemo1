import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getThemeClass = (theme: string, darkClass: string, lightClass: string) => {
  return theme === 'dark' ? darkClass : lightClass
}
