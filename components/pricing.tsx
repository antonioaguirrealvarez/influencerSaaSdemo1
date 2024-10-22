'use client'

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
// import Link from "next/link"
import { MainNav } from "@/components/MainNav"

interface PricingTierProps {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ name, price, features, recommended = false }) => (
  <div className={`bg-white p-8 rounded-lg shadow-md flex flex-col ${recommended ? 'border-2 border-purple-600' : ''}`}>
    {recommended && (
      <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold self-start mb-4">
        Recommended
      </span>
    )}
    <h3 className="text-2xl font-bold mb-2">{name}</h3>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl text-gray-600">/mo</span></p>
    <ul className="mb-8 flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <Check className="h-5 w-5 text-green-500 mr-2" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button className={recommended ? 'bg-purple-600 hover:bg-purple-700 text-white' : ''}>
      Choose Plan
    </Button>
  </div>
)

export function Pricing() {
  const pricingTiers: PricingTierProps[] = [
    {
      name: "Starter",
      price: 29,
      features: [
        "Basic analytics",
        "Up to 5 social accounts",
        "Weekly reports",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: 79,
      features: [
        "Advanced analytics",
        "Unlimited social accounts",
        "Daily reports",
        "Priority email support",
        "Collaboration tools"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: 199,
      features: [
        "Custom analytics",
        "Unlimited social accounts",
        "Real-time reports",
        "24/7 phone support",
        "Advanced collaboration tools",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Choose the Right Plan for
          <br />
          <span className="text-purple-600">Your Influencer Journey</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </main>
    </div>
  )
}
