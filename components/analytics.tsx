"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, TrendingUp, Eye, ThumbsUp, MessageSquare, Video, DollarSign, Share2, Clock, Zap, Award, Percent, Hash } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts"

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  change: number;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change, className }) => (
  <Card className={className}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      {icon}
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
      <p className={`text-xs ${change >= 0 ? "text-green-500" : "text-red-500"}`}>
        {change >= 0 ? "+" : ""}{change}% from last month
      </p>
    </CardContent>
  </Card>
)

interface PlatformData {
  date: string;
  [key: string]: number | string;
}

type PlatformDataType = {
  [key: string]: PlatformData[];
}

const platformData: PlatformDataType = {
  twitter: [
    { date: "Jan", followers: 5000, likes: 15000, retweets: 7500, impressions: 50000 },
    { date: "Feb", followers: 5500, likes: 17000, retweets: 8000, impressions: 55000 },
    { date: "Mar", followers: 6000, likes: 18500, retweets: 9000, impressions: 60000 },
    { date: "Apr", followers: 6200, likes: 19000, retweets: 9500, impressions: 62000 },
    { date: "May", followers: 6500, likes: 20000, retweets: 10000, impressions: 65000 },
    { date: "Jun", followers: 7000, likes: 22000, retweets: 11000, impressions: 70000 },
  ],
  youtube: [
    { date: "Jan", subscribers: 10000, views: 50000, comments: 2000, watchTime: 150000 },
    { date: "Feb", subscribers: 11000, views: 55000, comments: 2200, watchTime: 165000 },
    { date: "Mar", subscribers: 12000, views: 60000, comments: 2500, watchTime: 180000 },
    { date: "Apr", subscribers: 13000, views: 65000, comments: 2700, watchTime: 195000 },
    { date: "May", subscribers: 14000, views: 70000, comments: 3000, watchTime: 210000 },
    { date: "Jun", subscribers: 15000, views: 75000, comments: 3200, watchTime: 225000 },
  ],
  twitch: [
    { date: "Jan", followers: 2000, views: 30000, subscriptions: 500, bits: 10000 },
    { date: "Feb", followers: 2200, views: 33000, subscriptions: 550, bits: 11000 },
    { date: "Mar", followers: 2400, views: 36000, subscriptions: 600, bits: 12000 },
    { date: "Apr", followers: 2600, views: 39000, subscriptions: 650, bits: 13000 },
    { date: "May", followers: 2800, views: 42000, subscriptions: 700, bits: 14000 },
    { date: "Jun", followers: 3000, views: 45000, subscriptions: 750, bits: 15000 },
  ],
  tiktok: [
    { date: "Jan", followers: 8000, likes: 100000, views: 500000, shares: 5000 },
    { date: "Feb", followers: 9000, likes: 120000, views: 600000, shares: 6000 },
    { date: "Mar", followers: 10000, likes: 140000, views: 700000, shares: 7000 },
    { date: "Apr", followers: 11000, likes: 160000, views: 800000, shares: 8000 },
    { date: "May", followers: 12000, likes: 180000, views: 900000, shares: 9000 },
    { date: "Jun", followers: 13000, likes: 200000, views: 1000000, shares: 10000 },
  ],
}

export function Analytics() {
  const [activePlatform, setActivePlatform] = useState<string>("twitter")
  const [selectedMetric, setSelectedMetric] = useState<string>("followers")

  const getMetrics = (platform: string): StatCardProps[] => {
    switch (platform) {
      case "twitter":
        return [
          { title: "Followers", value: "7,000", icon: <Users className="h-4 w-4 text-muted-foreground" />, change: 7.69, className: "col-span-2 row-span-1" },
          { title: "Tweets", value: "150", icon: <MessageSquare className="h-4 w-4 text-muted-foreground" />, change: 5.63, className: "col-span-1 row-span-1" },
          { title: "Likes", value: "22,000", icon: <ThumbsUp className="h-4 w-4 text-muted-foreground" />, change: 10, className: "col-span-1 row-span-1" },
          { title: "Retweets", value: "11,000", icon: <Share2 className="h-4 w-4 text-muted-foreground" />, change: 9.09, className: "col-span-1 row-span-1" },
          { title: "Impressions", value: "70,000", icon: <Eye className="h-4 w-4 text-muted-foreground" />, change: 7.69, className: "col-span-1 row-span-1" },
          { title: "Engagement Rate", value: "4.28%", icon: <Percent className="h-4 w-4 text-muted-foreground" />, change: 0.7, className: "col-span-1 row-span-1" },
          { title: "Top Tweet Impressions", value: "15,000", icon: <Zap className="h-4 w-4 text-muted-foreground" />, change: 25, className: "col-span-2 row-span-1" },
          { title: "Profile Visits", value: "5,500", icon: <Users className="h-4 w-4 text-muted-foreground" />, change: 12.24, className: "col-span-1 row-span-1" },
          { title: "Mentions", value: "300", icon: <Hash className="h-4 w-4 text-muted-foreground" />, change: 15.38, className: "col-span-1 row-span-1" },
          { title: "Revenue", value: "$1,200", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, change: 15.38, className: "col-span-2 row-span-1" },
        ]
      case "youtube":
        return [
          { title: "Subscribers", value: "15,000", icon: <Users className="h-4 w-4 text-muted-foreground" />, change: 7.14, className: "col-span-2 row-span-1" },
          { title: "Views", value: "75,000", icon: <Eye className="h-4 w-4 text-muted-foreground" />, change: 7.14, className: "col-span-1 row-span-1" },
          { title: "Watch Time (hrs)", value: "3,750", icon: <Clock className="h-4 w-4 text-muted-foreground" />, change: 7.14, className: "col-span-1 row-span-1" },
          { title: "Videos", value: "20", icon: <Video className="h-4 w-4 text-muted-foreground" />, change: 5.26, className: "col-span-1 row-span-1" },
          { title: "Likes", value: "45,000", icon: <ThumbsUp className="h-4 w-4 text-muted-foreground" />, change: 9.76, className: "col-span-1 row-span-1" },
          { title: "Comments", value: "3,200", icon: <MessageSquare className="h-4 w-4 text-muted-foreground" />, change: 6.67, className: "col-span-1 row-span-1" },
          { title: "Shares", value: "1,800", icon: <Share2 className="h-4 w-4 text-muted-foreground" />, change: 12.5, className: "col-span-1 row-span-1" },
          { title: "Avg. View Duration", value: "5:30", icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />, change: 3.77, className: "col-span-2 row-span-1" },
          { title: "Top Video Views", value: "25,000", icon: <Award className="h-4 w-4 text-muted-foreground" />, change: 31.58, className: "col-span-2 row-span-1" },
          { title: "Revenue", value: "$2,500", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, change: 13.64, className: "col-span-2 row-span-1" },
        ]
      case "twitch":
        return [
          { title: "Followers", value: "3,000", icon: <Users className="h-4 w-4 text-muted-foreground" />, change: 7.14, className: "col-span-2 row-span-1" },
          { title: "Views", value: "45,000", icon: <Eye className="h-4 w-4 text-muted-foreground" />, change: 7.14, className: "col-span-1 row-span-1" },
          { title: "Stream Hours", value: "40", icon: <Video className="h-4 w-4 text-muted-foreground" />, change: 5.26, className: "col-span-1 row-span-1" },
          { title: "Avg. Viewers", value: "200", icon: <Users className="h-4 w-4 text-muted-foreground" />, change: 8.11, className: "col-span-1 row-span-1" },
          { title: "Peak Viewers", value: "500", icon: <TrendingUp className="h-4 w-4 text-muted-foreground" />, change: 11.11, className: "col-span-1 row-span-1" },
          { title: "Chat Messages", value: "25,000", icon: <MessageSquare className="h-4 w-4 text-muted-foreground" />, change: 8.70, className: "col-span-2 row-span-1" },
          { title: "Subscriptions", value: "750", icon: <Award className="h-4 w-4 text-muted-foreground" />, change: 7.14, className: "col-span-1 row-span-1" },
          { title: "Bits Cheered", value: "15,000", icon: <Zap className="h-4 w-4 text-muted-foreground" />, change: 7.14, className: "col-span-1 row-span-1" },
          { title: "Raids Received", value: "20", icon: <Users className="h-4 w-4 text-muted-foreground" />, change: 17.65, className: "col-span-2 row-span-1" },
          { title: "Revenue", value: "$3,000", icon: <DollarSign className="h-4 w-4 text-muted-foreground" />, change: 11.11, className: "col-span-2 row-span-1" },
        ]
      case "tiktok":
        return [
          { title: "Followers", value: "13,000", icon: <Users className="h-4 w-4 text-muted-foreground" />, change: 8.33, className: "col-span-2 row-span-1" },
          { title: "Likes", value: "200,000", icon: <ThumbsUp className="h-4 w-4 text-muted-foreground" />, change: 11.11, className: "col-span-1 row-span-1" },
          { title: "Views", value: "1,000,000", icon: <Eye className="h-4 w-4 text-muted-foreground" />, change: 11.11, className: "col-span-1 row-span-1" },
          { title: "Shares", value: "10,000", icon: <Share2 className="h-4 w-4 text-muted-foreground" />, change: 11.11, className: "col-span-1 row-span-1" },
          { title: "Comments", value: "15,000", icon: <MessageSquare className="h-4 w-4 text-muted-foreground" />, change: 7.14, className: "col-span-1 row-span-1" },
          { title: "Videos", value: "30", icon: <Video className="h-4 w-4 text-muted-foreground" />, change: 7.14, className: "col-span-1 row-span-1" },
          { title: "Avg. Watch Time", value: "15s", icon: <Clock className="h-4 w-4 text-muted-foreground" />, change: 7.14, className: "col-span-1 row-span-1" },
          { title: "Profile Views", value: "50,000", icon: <Users className="h-4 w-4 text-muted-foreground" />, change: 13.64, className: "col-span-2 row-span-1" },
          { title: "Hashtag Views", value: "500,000", icon: <Hash className="h-4 w-4 text-muted-foreground" />, change: 25, className: "col-span-2 row-span-1" },
          { title: "Revenue", value: "$1,800", icon: <DollarSign className="h-4 w-4  text-muted-foreground" />, change: 20, className: "col-span-2 row-span-1" },
        ]
      default:
        return []
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      <Tabs value={activePlatform} onValueChange={setActivePlatform}>
        <TabsList>
          <TabsTrigger value="twitter">Twitter</TabsTrigger>
          <TabsTrigger value="youtube">YouTube</TabsTrigger>
          <TabsTrigger value="twitch">Twitch</TabsTrigger>
          <TabsTrigger value="tiktok">TikTok</TabsTrigger>
        </TabsList>
        {["twitter", "youtube", "twitch", "tiktok"].map((platform) => (
          <TabsContent key={platform} value={platform} className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              {getMetrics(platform).map((metric, index) => (
                <StatCard key={index} {...metric} />
              ))}
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Performance Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <Select value={selectedMetric} onValueChange={setSelectedMetric}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select metric" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(platformData[platform][0]).filter(key => key !== 'date').map((metric) => (
                        <SelectItem key={metric} value={metric}>
                          {metric.charAt(0).toUpperCase() + metric.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={platformData[platform]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={selectedMetric} stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Engagement Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={platformData[platform]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {Object.keys(platformData[platform][0])
                      .filter(key => key !== 'date' && key !== selectedMetric)
                      .map((key, index) => (
                        <Bar key={key} dataKey={key} fill={`hsl(${index * 40}, 70%, 50%)`} />
                      ))}
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </>
  )
}
