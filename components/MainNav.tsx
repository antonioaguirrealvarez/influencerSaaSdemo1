'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { BarChart2, ChevronDown, Sun, Moon } from "lucide-react"
import { useThemeStore } from '@/store/themeStore'
import { cn } from "@/lib/utils"

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Analytics', path: '/analytics' },
  { name: 'Opportunities', path: '/opportunities' },
  { name: 'Viral Trends', path: '/viral-trends' },
  { name: 'Competitors', path: '/competitors' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Video Management', path: '/video-management' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
]

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme } = useThemeStore()

  const filteredNavItems = navItems.filter(item => item.path !== pathname)

  return (
    <header className={`shadow-sm ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'}`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <BarChart2 className={`h-8 w-8 ${theme === 'light' ? 'text-purple-600' : 'text-purple-400'}`} />
          <span className="text-2xl font-bold">InfluencerPulse</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`hover:text-purple-600 transition-colors flex items-center ${theme === 'light' ? 'text-gray-600' : 'text-white'}`}
            >
              Pages <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isMenuOpen && (
              <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 z-30 ${theme === 'light' ? 'bg-white' : 'bg-gray-700'}`}>
                {filteredNavItems.map((item) => (
                  <Link 
                    key={item.path} 
                    href={item.path} 
                    className={`block px-4 py-2 text-sm hover:bg-gray-100 ${theme === 'light' ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-gray-600'}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <ThemeToggle />
          <Button 
            variant={theme === 'dark' ? 'secondary' : 'outline'} 
            className={cn(
              "transition-colors",
              theme === 'dark' ? 
                "bg-gray-700 text-white border-gray-600 hover:bg-gray-600" : 
                "border-gray-300 hover:bg-gray-100"
            )}
          >
            Log Out
          </Button>
        </nav>
      </div>
    </header>
  )
}

const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore()
  
  return (
    <Button 
      variant="ghost" 
      size="icon"
      className={cn(
        "hover:bg-transparent",
        theme === 'dark' ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-gray-900'
      )}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
