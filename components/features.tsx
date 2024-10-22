'use client'

import { Button } from "@/components/ui/button"
import { BarChart2, Users, TrendingUp, Zap, Target, Globe } from "lucide-react"
import Link from "next/link"
import { ReactNode } from 'react'

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md">
    {icon}
    <h3 className="mt-4 text-xl font-semibold">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
)

export function Features() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart2 className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-800">InfluencerPulse</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/features" className="text-purple-600 font-semibold">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Pricing</Link>
            <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">About</Link>
          </nav>
          <Button variant="outline">Log In</Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Powerful Features for
          <br />
          <span className="text-purple-600">Modern Influencers</span>
        </h1>
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
