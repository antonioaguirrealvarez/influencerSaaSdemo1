"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BarChart2, ChevronDown } from "lucide-react"
import Link from "next/link"

const DynamicBackground = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${scrollY % 100}% ${(scrollY % 100) / 2}%, 
                     rgba(94, 53, 177, 0.3), 
                     rgba(0, 188, 212, 0.3))`,
        transition: "background 0.3s ease",
      }}
      aria-hidden="true"
    />
  )
}

export function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden">
        <DynamicBackground />
        <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart2 className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-800">InfluencerPulse</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-purple-600 transition-colors flex items-center"
              >
                Pages <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                  <Link href="/features" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Features</Link>
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About</Link>
                  <Link href="/opportunities" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Opportunities</Link>
                  <Link href="/competitors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Competitors</Link>
                  <Link href="/case-studies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Case Studies</Link>
                  <Link href="/viral-trends" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Viral Trends</Link>
                  <Link href="/video-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Video Management</Link>
                  <Link href="/pricing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pricing</Link>
                </div>
              )}
            </div>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex">
            Log In
          </Button>
        </header>
        <main className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-center mb-6">Welcome to InfluencerPulse</h1>
          <p className="text-xl text-center mb-10">Your all-in-one platform for influencer analytics and growth</p>
          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">Get Started</Button>
          </div>
        </main>
      </div>
    </div>
  )
}
