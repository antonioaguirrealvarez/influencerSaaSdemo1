"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Eye, ThumbsUp, MessageSquare, Share2, LayoutGrid, LayoutList } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts"
import { TrendProps } from '@/types'
import { MainNav } from "@/components/MainNav"

interface TrendCardProps {
  title: string;
  platform: string;
  views: string;
  likes: string;
  shares: string;
  comments: string;
}

const TrendCard: React.FC<TrendCardProps> = ({ title, platform, views, likes, shares, comments }) => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription>{platform}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center">
          <Eye className="h-4 w-4 mr-2 text-blue-500" />
          <span className="text-sm">{views} views</span>
        </div>
        <div className="flex items-center">
          <ThumbsUp className="h-4 w-4 mr-2 text-green-500" />
          <span className="text-sm">{likes} likes</span>
        </div>
        <div className="flex items-center">
          <Share2 className="h-4 w-4 mr-2 text-purple-500" />
          <span className="text-sm">{shares} shares</span>
        </div>
        <div className="flex items-center">
          <MessageSquare className="h-4 w-4 mr-2 text-yellow-500" />
          <span className="text-sm">{comments} comments</span>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">Analyze Trend</Button>
    </CardFooter>
  </Card>
)

const trends: TrendProps[] = [
  {
    title: "#DanceChallenge2023",
    platform: "TikTok",
    views: "50M",
    likes: "5M",
    shares: "1M",
    comments: "500K",
    category: "Dance",
  },
  {
    title: "Unboxing Mystery Tech",
    platform: "YouTube",
    views: "10M",
    likes: "800K",
    shares: "200K",
    comments: "100K",
    category: "Tech",
  },
  {
    title: "30-Day Fitness Journey",
    platform: "Instagram",
    views: "20M",
    likes: "2M",
    shares: "500K",
    comments: "300K",
    category: "Fitness",
  },
  {
    title: "Viral Recipe: 5-Minute Meals",
    platform: "TikTok",
    views: "30M",
    likes: "3M",
    shares: "800K",
    comments: "400K",
    category: "Food",
  },
  {
    title: "DIY Home Makeover Challenge",
    platform: "YouTube",
    views: "15M",
    likes: "1.2M",
    shares: "300K",
    comments: "150K",
    category: "DIY",
  },
  {
    title: "Sustainable Fashion Haul",
    platform: "Instagram",
    views: "8M",
    likes: "1M",
    shares: "200K",
    comments: "100K",
    category: "Fashion",
  },
]

interface TrendData {
  date: string;
  [key: string]: number | string;
}

const trendData: TrendData[] = [
  { date: "Day 1", "#DanceChallenge2023": 100000, "Unboxing Mystery Tech": 50000, "30-Day Fitness Journey": 75000 },
  { date: "Day 2", "#DanceChallenge2023": 300000, "Unboxing Mystery Tech": 150000, "30-Day Fitness Journey": 200000 },
  { date: "Day 3", "#DanceChallenge2023": 600000, "Unboxing Mystery Tech": 300000, "30-Day Fitness Journey": 400000 },
  { date: "Day 4", "#DanceChallenge2023": 1000000, "Unboxing Mystery Tech": 500000, "30-Day Fitness Journey": 700000 },
  { date: "Day 5", "#DanceChallenge2023": 2000000, "Unboxing Mystery Tech": 1000000, "30-Day Fitness Journey": 1500000 },
  { date: "Day 6", "#DanceChallenge2023": 3500000, "Unboxing Mystery Tech": 1750000, "30-Day Fitness Journey": 2500000 },
  { date: "Day 7", "#DanceChallenge2023": 5000000, "Unboxing Mystery Tech": 2500000, "30-Day Fitness Journey": 3500000 },
]

export function ViralTrends() {
  const [activeTab, setActiveTab] = useState<string>("all")
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid")
  const [selectedTrends, setSelectedTrends] = useState<string[]>(["#DanceChallenge2023", "Unboxing Mystery Tech", "30-Day Fitness Journey"])

  const filteredTrends = activeTab === "all" ? trends : trends.filter(trend => trend.category.toLowerCase() === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Viral Trends</h1>
        <div className="flex justify-between items-center mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search trends..." />
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
            <TabsTrigger value="all">All Trends</TabsTrigger>
            <TabsTrigger value="dance">Dance</TabsTrigger>
            <TabsTrigger value="tech">Tech</TabsTrigger>
            <TabsTrigger value="fitness">Fitness</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
            <TabsTrigger value="diy">DIY</TabsTrigger>
            <TabsTrigger value="fashion">Fashion</TabsTrigger>
          </TabsList>
          <TabsContent value={activeTab} className="space-y-4">
            {viewMode === "grid" ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredTrends.map((trend, index) => (
                  <TrendCard key={index} {...trend} />
                ))}
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Likes</TableHead>
                    <TableHead>Shares</TableHead>
                    <TableHead>Comments</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTrends.map((trend, index) => (
                    <TableRow key={index}>
                      <TableCell>{trend.title}</TableCell>
                      <TableCell>{trend.platform}</TableCell>
                      <TableCell>{trend.views}</TableCell>
                      <TableCell>{trend.likes}</TableCell>
                      <TableCell>{trend.shares}</TableCell>
                      <TableCell>{trend.comments}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </TabsContent>
        </Tabs>
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Trend Growth Comparison</CardTitle>
            <CardDescription>Compare the growth of selected viral trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 mb-4">
              {[0, 1, 2].map((index) => (
                <Select key={index} value={selectedTrends[index]} onValueChange={(value) => setSelectedTrends(prev => {
                  const newTrends = [...prev];
                  newTrends[index] = value;
                  return newTrends;
                })}>
                  <SelectTrigger>
                    <SelectValue placeholder={`Select trend ${index + 1}`} />
                  </SelectTrigger>
                  <SelectContent>
                    {trends.map((trend) => (
                      <SelectItem key={trend.title} value={trend.title}>{trend.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                {selectedTrends.map((trend, index) => (
                  <Line key={index} type="monotone" dataKey={trend} stroke={`hsl(${index * 120}, 70%, 50%)`} />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
