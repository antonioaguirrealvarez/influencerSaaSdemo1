import { create } from 'zustand'
import { ThemeProps } from '@/types'

interface ThemeStore extends ThemeProps {
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: 'light',
  setTheme: (theme) => set({ theme }),
}))
