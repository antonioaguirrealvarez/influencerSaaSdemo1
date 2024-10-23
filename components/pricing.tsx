'use client'

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
// import Link from "next/link"
import { MainNav } from "@/components/MainNav"
import { useThemeStore } from "@/store/themeStore"
import { cn } from "@/lib/utils"

interface PricingTierProps {
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ name, price, features, recommended = false }) => {
  const { theme } = useThemeStore()
  
  return (
    <div className={cn(
      "p-8 rounded-lg shadow-md flex flex-col",
      theme === 'dark' ? "bg-gray-800 border-gray-700" : "bg-white",
      recommended && "border-2 border-purple-600"
    )}>
      {recommended && (
        <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold self-start mb-4">
          Recommended
        </span>
      )}
      <h3 className={cn(
        "text-2xl font-bold mb-2",
        theme === 'dark' && "text-white"
      )}>{name}</h3>
      <p className={cn(
        "text-4xl font-bold mb-6",
        theme === 'dark' && "text-white"
      )}>
        ${price}
        <span className={theme === 'dark' ? "text-gray-400" : "text-gray-600"}>/mo</span>
      </p>
      <ul className="mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className={cn(
            "flex items-center mb-2",
            theme === 'dark' && "text-gray-300"
          )}>
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={cn(
        recommended ? "bg-purple-600 hover:bg-purple-700 text-white" : "",
        theme === 'dark' && !recommended && "bg-gray-700 hover:bg-gray-600"
      )}>
        Choose Plan
      </Button>
    </div>
  )
}

export function Pricing() {
  const { theme } = useThemeStore()
  
  return (
    <div className={cn(
      "min-h-screen",
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50'
    )}>
      <MainNav />
      <main className="container mx-auto px-4 py-20">
        <h1 className={cn(
          "text-4xl md:text-5xl font-bold text-center mb-12",
          theme === 'dark' && "text-white"
        )}>
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

// Add the pricingTiers data
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
]
