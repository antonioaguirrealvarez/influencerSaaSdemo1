'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { BarChart2, ChevronDown } from "lucide-react"

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

  const filteredNavItems = navItems.filter(item => item.path !== pathname)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <BarChart2 className="h-8 w-8 text-purple-600" />
          <span className="text-2xl font-bold text-gray-800">InfluencerPulse</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-purple-600 transition-colors flex items-center"
            >
              Pages <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30">
                {filteredNavItems.map((item) => (
                  <Link 
                    key={item.path} 
                    href={item.path} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Button variant="outline">Log Out</Button>
        </nav>
      </div>
    </header>
  )
}
