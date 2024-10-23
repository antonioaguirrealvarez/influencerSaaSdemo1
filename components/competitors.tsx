"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Users, TrendingUp, BarChart, PieChart, LayoutGrid, LayoutList } from "lucide-react"
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
import { CompetitorProps } from '@/types'
import { MainNav } from "@/components/MainNav"
import { useThemeStore } from '@/store/themeStore'
import { cn } from "@/lib/utils"
import { ActionButton } from "@/components/ui/action-button"

const CompetitorCard: React.FC<CompetitorProps> = ({ name, platform, followers, engagementRate, contentFrequency, topContent }) => {
  const { theme } = useThemeStore()
  
  return (
    <Card className={cn(
      "flex flex-col h-full",
      theme === 'dark' && "bg-gray-800 border-gray-700"
    )}>
      <CardHeader>
        <CardTitle className={cn(
          "text-lg",
          theme === 'dark' && "text-white"
        )}>{name}</CardTitle>
        <CardDescription className={theme === 'dark' ? "text-gray-400" : "text-gray-500"}>
          {platform}
        </CardDescription>
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
}

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
  const { theme } = useThemeStore()  // Add this line to get theme

  const filteredCompetitors = activeTab === "all" ? competitors : competitors.filter(competitor => competitor.platform.toLowerCase() === activeTab)

  return (
    <div className={cn(
      "min-h-screen",
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50'
    )}>
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Competitor Analysis</h1>
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search competitors..." />
          </div>
          <div className="flex space-x-2">
            <ActionButton
              icon={viewMode === "grid" ? <LayoutList className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
              label={viewMode === "grid" ? "See as Table" : "See as Grid"}
              onClick={() => setViewMode(viewMode === "grid" ? "table" : "grid")}
            />
            <ActionButton
              icon={<Filter className="h-4 w-4" />}
              label="Filter"
            />
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
