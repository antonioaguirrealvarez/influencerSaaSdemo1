'use client'

import { Button } from "@/components/ui/button"
import { BarChart2, Users, TrendingUp, Zap, Target, Globe } from "lucide-react"
import { ReactNode } from 'react'
import { MainNav } from "@/components/MainNav"
import { useThemeStore } from '@/store/themeStore'
import { cn } from '@/lib/utils'

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  const { theme } = useThemeStore()
  
  return (
    <div className={cn(
      "flex flex-col items-center text-center p-6 rounded-lg shadow-md",
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'
    )}>
      {icon}
      <h3 className={cn(
        "mt-4 text-xl font-semibold",
        theme === 'dark' && "text-white"
      )}>{title}</h3>
      <p className={cn(
        "mt-2",
        theme === 'dark' ? "text-gray-300" : "text-gray-600"
      )}>{description}</p>
    </div>
  )
}

export function Features() {
  const { theme } = useThemeStore()
  
  return (
    <div className={cn(
      "min-h-screen",
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50'
    )}>
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className={cn(
          "text-3xl font-bold mb-8",
          theme === 'dark' && "text-white"
        )}>Platform Features</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={<BarChart2 className="h-12 w-12 text-purple-600" />}
            title="Advanced Analytics"
            description="Get deep insights into your performance across all platforms with our AI-powered analytics."
          />
          <Feature
            icon={<Users className="h-12 w-12 text-teal-500" />}
            title="Audience Engagement"
            description="Understand and interact with your audience more effectively using our engagement tools."
          />
          <Feature
            icon={<TrendingUp className="h-12 w-12 text-purple-600" />}
            title="Growth Strategies"
            description="Leverage data-driven recommendations to skyrocket your influence and reach."
          />
          <Feature
            icon={<Zap className="h-12 w-12 text-yellow-500" />}
            title="Real-time Insights"
            description="Stay on top of your performance with instant updates and alerts."
          />
          <Feature
            icon={<Target className="h-12 w-12 text-red-500" />}
            title="Smart Collaborations"
            description="Find and manage brand partnerships that align with your audience and values."
          />
          <Feature
            icon={<Globe className="h-12 w-12 text-blue-500" />}
            title="Multi-platform Support"
            description="Manage all your social media accounts from a single, intuitive dashboard."
          />
        </div>
      </main>
    </div>
  )
}
