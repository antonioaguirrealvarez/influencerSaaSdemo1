'use client'

import { MainNav } from "./MainNav"
import { useThemeStore } from '@/store/themeStore'
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useThemeStore()

  return (
    <div className={cn(
      "min-h-screen",
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50',
      // Add transitions for smooth theme switching
      "transition-colors duration-200"
    )}>
      <MainNav />
      <main className={cn(
        "container mx-auto px-4 py-8",
        theme === 'dark' && 'text-white'
      )}>
        {children}
      </main>
    </div>
  )
}
