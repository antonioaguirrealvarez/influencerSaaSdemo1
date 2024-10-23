"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart2, Users, TrendingUp } from "lucide-react"
import Image from 'next/image'
import { MainNav } from "@/components/MainNav"
import { useThemeStore } from '@/store/themeStore'
import { cn } from "@/lib/utils"

interface DynamicBackgroundProps {
  scrollY: number;
}

const DynamicBackground: React.FC<DynamicBackgroundProps> = ({ scrollY }) => {
  // Divide scrollY by a larger number to make changes more gradual
  const xPos = (scrollY / 10) % 100
  const yPos = (scrollY / 20) % 100
  
  const { theme } = useThemeStore()
  
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${xPos}% ${yPos}%, 
                     rgba(94, 53, 177, 0.2), 
                     rgba(0, 188, 212, 0.2))`,
        transition: "background 0.5s ease",
        opacity: theme === 'dark' ? 0.5 : 1,
      }}
      aria-hidden="true"
    />
  )
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  const { theme } = useThemeStore()
  
  return (
    <div className={cn(
      "flex flex-col items-center text-center",
      theme === 'dark' ? 'text-white' : 'text-gray-900'
    )}>
      {icon}
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className={cn(
        "mt-2",
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      )}>{description}</p>
    </div>
  )
}

interface ReviewProps {
  name: string;
  role: string;
  content: string;
}

const Review: React.FC<ReviewProps> = ({ name, role, content }) => {
  const { theme } = useThemeStore()
  
  return (
    <div className={cn(
      "p-6 rounded-lg shadow-md",
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    )}>
      <p className="text-gray-600 mb-4">&quot;{content}&quot;</p>
      <div className="flex items-center">
        <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mr-4">
          <span className="text-purple-600 font-semibold">{name[0]}</span>
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  )
}

interface ProductProps {
  name: string;
  description: string;
  price: string;
}

const Product: React.FC<ProductProps> = ({ name, description, price }) => {
  const { theme } = useThemeStore()
  
  return (
    <div className={cn(
      "p-6 rounded-lg shadow-md flex flex-col",
      theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'
    )}>
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className={cn(
        "mb-4 flex-grow",
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      )}>{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold">${price}</span>
        <Button variant={theme === 'dark' ? 'secondary' : 'outline'}>Learn More</Button>
      </div>
    </div>
  )
}

export function Homepage() {
  const [scrollY, setScrollY] = useState(0)
  const { theme } = useThemeStore()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-white' : 'bg-gray-900 text-white'}`}>
      <div className="relative overflow-hidden">
        <DynamicBackground scrollY={scrollY} />
        <MainNav />
        <main className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className={cn(
            "text-5xl md:text-6xl font-bold mb-6",
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          )}>
            Amplify Your Influence,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-teal-400">
              Empower Your Growth
            </span>
          </h1>
          <p className={cn(
            "text-xl mb-10 max-w-2xl mx-auto",
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          )}>
            InfluencerPulse: Your all-in-one platform for analytics, collaborations, and growth in the influencer ecosystem.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-full text-lg">
              Watch Demo
            </Button>
          </div>
        </main>
      </div>
      <section className={cn(
        "py-20",
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      )}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Elevate Your
                <br />
                <span className="text-purple-600">Influencer Game</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Unlock powerful insights, streamline collaborations, and accelerate your growth with InfluencerPulse.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="px-6 py-2 rounded-md">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="InfluencerPulse Dashboard"
                className="rounded-lg shadow-2xl"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={<BarChart2 className="h-12 w-12 text-purple-600" />}
              title="Advanced Analytics"
              description="Get deep insights into your performance across all platforms."
            />
            <Feature
              icon={<Users className="h-12 w-12 text-teal-500" />}
              title="Audience Engagement"
              description="Understand and interact with your audience more effectively."
            />
            <Feature
              icon={<TrendingUp className="h-12 w-12 text-purple-600" />}
              title="Growth Strategies"
              description="Leverage data-driven recommendations to boost your influence."
            />
          </div>
        </div>
      </section>
      <section className={cn(
        "py-20",
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      )}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Review
              name="Sarah K."
              role="Fashion Influencer"
              content="InfluencerPulse has revolutionized the way I manage my social media presence. The insights are invaluable!"
            />
            <Review
              name="Mike R."
              role="Tech Reviewer"
              content="The collaboration features have helped me land some of my biggest sponsorships. Highly recommended!"
            />
            <Review
              name="Emily T."
              role="Travel Blogger"
              content="The analytics tools are top-notch. I've seen a significant increase in engagement since using InfluencerPulse."
            />
          </div>
        </div>
      </section>
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Product
              name="Starter"
              description="Perfect for emerging influencers looking to grow their presence."
              price="29"
            />
            <Product
              name="Pro"
              description="Ideal for established influencers seeking to optimize their performance."
              price="79"
            />
            <Product
              name="Enterprise"
              description="Tailored solutions for large-scale influencer teams and agencies."
              price="199"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
