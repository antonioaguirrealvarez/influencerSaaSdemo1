"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart2, Search, Filter, Users, Eye, TrendingUp, BarChart, PieChart, LayoutGrid, LayoutList, Settings, User } from "lucide-react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { CaseStudyProps } from '@/types'

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, platform, influencer, followers, engagement, revenue, duration }) => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription>{platform}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-2 text-blue-500" />
          <span className="text-sm">{influencer}</span>
        </div>
        <div className="flex items-center">
          <Eye className="h-4 w-4 mr-2 text-green-500" />
          <span className="text-sm">{followers} followers</span>
        </div>
        <div className="flex items-center">
          <TrendingUp className="h-4 w-4 mr-2 text-purple-500" />
          <span className="text-sm">{engagement}% engagement</span>
        </div>
        <div className="flex items-center">
          <BarChart className="h-4 w-4 mr-2 text-yellow-500" />
          <span className="text-sm">${revenue} revenue</span>
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <PieChart className="h-4 w-4 mr-2 text-indigo-500" />
        <span className="text-sm">{duration} campaign duration</span>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Read Case Study</Button>
    </CardFooter>
  </Card>
)

const caseStudies: CaseStudyProps[] = [
  {
    title: "Fashion Brand Collaboration",
    platform: "Instagram",
    influencer: "StyleQueen",
    followers: "1M",
    engagement: "4.5",
    revenue: "50K",
    duration: "3 months",
    category: "Fashion",
  },
  {
    title: "Tech Product Launch",
    platform: "YouTube",
    influencer: "TechReviewer",
    followers: "2M",
    engagement: "3.8",
    revenue: "100K",
    duration: "1 month",
    category: "Technology",
  },
  {
    title: "Fitness Challenge",
    platform: "TikTok",
    influencer: "FitnessPro",
    followers: "5M",
    engagement: "7.2",
    revenue: "75K",
    duration: "2 months",
    category: "Fitness",
  },
  {
    title: "Cooking Show Sponsorship",
    platform: "Instagram",
    influencer: "ChefMaster",
    followers: "800K",
    engagement: "5.1",
    revenue: "30K",
    duration: "6 months",
    category: "Food",
  },
  {
    title: "Travel Vlog Series",
    platform: "YouTube",
    influencer: "Wanderlust",
    followers: "1.5M",
    engagement: "4.2",
    revenue: "80K",
    duration: "4 months",
    category: "Travel",
  },
  {
    title: "Beauty Product Review",
    platform: "TikTok",
    influencer: "GlamGuru",
    followers: "3M",
    engagement: "6.5",
    revenue: "60K",
    duration: "2 weeks",
    category: "Beauty",
  },
]

const revenueData = [
  { month: "Jan", Fashion: 10000, Technology: 15000, Fitness: 12000 },
  { month: "Feb", Fashion: 12000, Technology: 18000, Fitness: 14000 },
  { month: "Mar", Fashion: 15000, Technology: 22000, Fitness: 18000 },
  { month: "Apr", Fashion: 18000, Technology: 25000, Fitness: 22000 },
  { month: "May", Fashion: 22000, Technology: 30000, Fitness: 28000 },
  { month: "Jun", Fashion: 25000, Technology: 35000, Fitness: 32000 },
]

export function CaseStudies() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["Fashion", "Technology", "Fitness"])

  const filteredCaseStudies = activeTab === "all" ? caseStudies : caseStudies.filter(study => study.category.toLowerCase() === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <BarChart2 className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-gray-800">InfluencerPulse</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/analytics" className="text-gray-600 hover:text-purple-600 transition-colors">Analytics</Link>
            <Link href="/opportunities" className="text-gray-600 hover:text-purple-600 transition-colors">Opportunities</Link>
            <Link href="/viral-trends" className="text-gray-600 hover:text-purple-600 transition-colors">Viral Trends</Link>
            <Link href="/competitors" className="text-gray-600 hover:text-purple-600 transition-colors">Competitors</Link>
            <Link href="/case-studies" className="text-purple-600 font-semibold">Case Studies</Link>
            <Link href="/video-management" className="text-gray-600 hover:text-purple-600 transition-colors">Video Management</Link>
            <Link href="/settings" className="text-gray-600 hover:text-purple-600 transition-colors">
              <Settings className="h-5 w-5" />
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-purple-600 transition-colors">
              <User className="h-5 w-5" />
            </Link>
          </nav>
          <Button variant="outline">Log Out</Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Case Studies</h1>
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search case studies..." />
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => setViewMode(viewMode === "grid" ? "table" : "grid")}>
              {viewMode === "grid" ? <LayoutList className="h-4 w-4 mr-2" /> : <LayoutGrid className="h-4 w-4 mr-2" />}
              {viewMode === "grid" ? "See as Table" : "See as Grid"}
            </Button>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" /> Filter
            </Button>
          </div>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All Categories</TabsTrigger>
            <TabsTrigger value="fashion">Fashion</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="travel">Travel</TabsTrigger>
            <TabsTrigger value="beauty">Beauty</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="space-y-4">
            {viewMode === "grid" ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredCaseStudies.map((study, index) => (
                  <CaseStudyCard key={index} {...study} />
                ))}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Influencer</TableHead>
                    <TableHead>Followers</TableHead>
                    <TableHead>Engagement</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCaseStudies.map((study, index) => (
                    <TableRow key={index}>
                      <TableCell>{study.title}</TableCell>
                      <TableCell>{study.platform}</TableCell>
                      <TableCell>{study.influencer}</TableCell>
                      <TableCell>{study.followers}</TableCell>
                      <TableCell>{study.engagement}%</TableCell>
                      <TableCell>${study.revenue}</TableCell>
                      <TableCell>{study.duration}</TableCell>
                      <TableCell>
                        <Button size="sm">Read</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </TabsContent>
        </Tabs>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Revenue Comparison by Category</CardTitle>
            <CardDescription>Compare revenue trends across different influencer categories</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[0, 1, 2].map((index) => (
                <Select key={index} value={selectedCategories[index]} onValueChange={(value) => setSelectedCategories(prev => {
                  const newCategories = [...prev];
                  newCategories[index] = value;
                  return newCategories;
                })}>
                  <SelectTrigger>
                    <SelectValue placeholder={`Select category ${index + 1}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from(new Set(caseStudies.map(study => study.category))).map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                {selectedCategories.map((category, index) => (
                  <Line key={index} type="monotone" dataKey={category} stroke={`hsl(${index * 120}, 70%, 50%)`} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
