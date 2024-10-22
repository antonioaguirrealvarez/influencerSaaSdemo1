'use client'

import { MainNav } from "@/components/MainNav"
// import { Button } from "@/components/ui/button"
import { Users, TrendingUp, Award } from "lucide-react"
// import Link from "next/link"
import Image from 'next/image'

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image }) => (
  <div className="flex flex-col items-center">
    <Image src={image} alt={name} width={128} height={128} className="rounded-full mb-4" />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
)

export function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-purple-600">InfluencerPulse</span>
        </h1>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-600 mb-8">
            InfluencerPulse was born from a vision to empower creators and influencers with the tools they need to thrive in the digital age. Our platform combines cutting-edge analytics, smart collaboration features, and growth strategies to help influencers of all sizes reach their full potential.
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-purple-600 mb-2" />
              <span className="text-2xl font-bold">100,000+</span>
              <span className="text-gray-600">Active Users</span>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-teal-500 mb-2" />
              <span className="text-2xl font-bold">500M+</span>
              <span className="text-gray-600">Insights Generated</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="h-12 w-12 text-yellow-500 mb-2" />
              <span className="text-2xl font-bold">#1</span>
              <span className="text-gray-600">Influencer Platform</span>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <TeamMember
            name="Alex Johnson"
            role="CEO & Founder"
            image="/placeholder.svg?height=128&width=128"
          />
          <TeamMember
            name="Sarah Lee"
            role="CTO"
            image="/placeholder.svg?height=128&width=128"
          />
          <TeamMember
            name="Michael Chen"
            role="Head of Product"
            image="/placeholder.svg?height=128&width=128"
          />
          <TeamMember
            name="Emily Rodriguez"
            role="Head of Marketing"
            image="/placeholder.svg?height=128&width=128"
          />
        </div>
      </main>
    </div>
  )
}
