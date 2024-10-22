"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart2, Search, Filter, Users, /* Eye, ThumbsUp, MessageSquare, */ TrendingUp, BarChart, PieChart, LayoutGrid, LayoutList, Settings, User } from "lucide-react"
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
  // Bar,
  // ComposedChart
} from "recharts"
import { CompetitorProps } from '@/types'

const CompetitorCard: React.FC<CompetitorProps> = ({ name, platform, followers, engagementRate, contentFrequency, topContent }) => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <CardTitle className="text-lg">{name}</CardTitle>
      <CardDescription>{platform}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-2 text-blue-500" />
          <span className="text-sm">{followers} followers</span>
        </div>
        <div className="flex items-center">
          <TrendingUp className="h-4 w-4 mr-2 text-green-500" />
          <span className="text-sm">{engagementRate}% engagement</span>
        </div>
        <div className="flex items-center">
          <BarChart className="h-4 w-4 mr-2  text-purple-500" />
          <span className="text-sm">{contentFrequency}</span>
        </div>
        <div className="flex items-center">
          <PieChart className="h-4 w-4 mr-2 text-yellow-500" />
          <span className="text-sm">{topContent}</span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Analyze Competitor</Button>
    </CardFooter>
  </Card>
)

const competitors: CompetitorProps[] = [
  {
    name: "Fashionista123",
    platform: "Instagram",
    followers: "500K",
    engagementRate: "3.5",
    contentFrequency: "Daily",
    topContent: "Fashion Hauls",
  },
  {
    name: "TechGuru",
    platform: "YouTube",
    followers: "1M",
    engagementRate: "4.2",
    contentFrequency: "Twice Weekly",
    topContent: "Product Reviews",
  },
  {
    name: "FitnessFanatic",
    platform: "TikTok",
    followers: "2M",
    engagementRate: "5.8",
    contentFrequency: "Daily",
    topContent: "Workout Challenges",
  },
  {
    name: "CookingMaster",
    platform: "Instagram",
    followers: "750K",
    engagementRate: "4.5",
    contentFrequency: "3x Weekly",
    topContent: "Recipe Videos",
  },
  {
    name: "TravelExplorer",
    platform: "YouTube",
    followers: "800K",
    engagementRate: "3.8",
    contentFrequency: "Weekly",
    topContent: "Travel Vlogs",
  },
  {
    name: "BeautyGuru",
    platform: "TikTok",
    followers: "1.5M",
    engagementRate: "6.2",
    contentFrequency: "Daily",
    topContent: "Makeup Tutorials",
  },
]

interface CompetitorData {
  month: string;
  [key: string]: number | string;
}

const competitorData: CompetitorData[] = [
  { month: "Jan", Fashionista123: 400000, TechGuru: 900000, FitnessFanatic: 1800000 },
  { month: "Feb", Fashionista123: 420000, TechGuru: 950000, FitnessFanatic: 1850000 },
  { month: "Mar", Fashionista123: 450000, TechGuru: 980000, FitnessFanatic: 1900000 },
  { month: "Apr", Fashionista123: 470000, TechGuru: 1000000, FitnessFanatic: 1950000 },
  { month: "May", Fashionista123: 490000, TechGuru: 1050000, FitnessFanatic: 2000000 },
  { month: "Jun", Fashionista123: 500000, TechGuru: 1000000, FitnessFanatic: 2000000 },
]

export function Competitors() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")
  const [selectedCompetitors, setSelectedCompetitors] = useState<string[]>(["Fashionista123", "TechGuru", "FitnessFanatic"])

  const filteredCompetitors = activeTab === "all" ? competitors : competitors.filter(competitor => competitor.platform.toLowerCase() === activeTab)

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
            <Link href="/competitors" className="text-purple-600 font-semibold">Competitors</Link>
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
        <h1 className="text-3xl font-bold mb-8">Competitor Analysis</h1>
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search competitors..." />
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
            <TabsTrigger value="all">All Platforms</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
            <TabsTrigger value="tiktok">TikTok</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="space-y-4">
            {viewMode === "grid" ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredCompetitors.map((competitor, index) => (
                  <CompetitorCard key={index} {...competitor} />
                ))}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Followers</TableHead>
                    <TableHead>Engagement Rate</TableHead>
                    <TableHead>Content Frequency</TableHead>
                    <TableHead>Top Content</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredCompetitors.map((competitor, index) => (
                    <TableRow key={index}>
                      <TableCell>{competitor.name}</TableCell>
                      <TableCell>{competitor.platform}</TableCell>
                      <TableCell>{competitor.followers}</TableCell>
                      <TableCell>{competitor.engagementRate}%</TableCell>
                      <TableCell>{competitor.contentFrequency}</TableCell>
                      <TableCell>{competitor.topContent}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </TabsContent>
        </Tabs>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Competitor Growth Comparison</CardTitle>
            <CardDescription>Compare your growth with selected competitors</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[0, 1, 2].map((index) => (
                <Select key={index} value={selectedCompetitors[index]} onValueChange={(value) => setSelectedCompetitors(prev => {
                  const newCompetitors = [...prev];
                  newCompetitors[index] = value;
                  return newCompetitors;
                })}>
                  <SelectTrigger>
                    <SelectValue placeholder={`Select competitor ${index + 1}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {competitors.map((competitor) => (
                      <SelectItem key={competitor.name} value={competitor.name}>{competitor.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={competitorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                {selectedCompetitors.map((competitor, index) => (
                  <Line key={index} type="monotone" dataKey={competitor} stroke={`hsl(${index * 120}, 70%, 50%)`} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
