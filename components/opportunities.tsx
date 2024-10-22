"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, DollarSign, Users, Calendar, Clock, Target, Briefcase, LayoutGrid, LayoutList } from "lucide-react"
import { MainNav } from "@/components/MainNav"

interface CollaborationCardProps {
  title: string;
  brand: string;
  compensation: string;
  audience: string;
  deadline: string;
  duration: string;
  goals: string;
  requirements: string;
  status: string;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({ title, brand, compensation, audience, deadline, duration, goals, requirements, status }) => (
  <Card className="flex flex-col h-full">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription>{brand}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center mb-2">
            <DollarSign className="h-4 w-4 mr-2 text-green-500" />
            <span className="text-sm">{compensation}</span>
          </div>
          <div className="flex items-center mb-2">
            <Users className="h-4 w-4 mr-2 text-blue-500" />
            <span className="text-sm">{audience}</span>
          </div>
          <div className="flex items-center mb-2">
            <Calendar className="h-4 w-4 mr-2 text-red-500" />
            <span className="text-sm">{deadline}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <Clock className="h-4 w-4 mr-2 text-purple-500" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center mb-2">
            <Target className="h-4 w-4 mr-2 text-yellow-500" />
            <span className="text-sm">{goals}</span>
          </div>
          <div className="flex items-center mb-2">
            <Briefcase className="h-4 w-4 mr-2 text-indigo-500" />
            <span className="text-sm">{requirements}</span>
          </div>
        </div>
      </div>
    </CardContent>
    <CardFooter>
      <Button className="w-full">{status === "Available" ? "Apply Now" : "View Details"}</Button>
    </CardFooter>
  </Card>
)

const collaborations = [
  {
    title: "Summer Fashion Campaign",
    brand: "StyleCo",
    compensation: "$1,000 + Products",
    audience: "18-35, Fashion enthusiasts",
    deadline: "Apply by July 15",
    duration: "2 weeks",
    goals: "Increase brand awareness",
    requirements: "Min. 10k followers",
    status: "In Progress",
  },
  {
    title: "Fitness App Promotion",
    brand: "FitTech",
    compensation: "$1,500",
    audience: "25-45, Fitness & Wellness",
    deadline: "Apply by July 20",
    duration: "1 month",
    goals: "Drive app installs",
    requirements: "Fitness niche",
    status: "Completed",
  },
  {
    title: "Travel Vlog Series",
    brand: "Wanderlust",
    compensation: "$3,000 + Travel Expenses",
    audience: "22-40, Travel enthusiasts",
    deadline: "Apply by August 1",
    duration: "3 months",
    goals: "Create engaging travel content",
    requirements: "Travel vlogger",
    status: "In Progress",
  },
  {
    title: "Eco-Friendly Product Launch",
    brand: "GreenLife",
    compensation: "$2,000 + Product Line",
    audience: "25-50, Environmentally conscious",
    deadline: "Apply by July 25",
    duration: "6 weeks",
    goals: "Promote sustainable living",
    requirements: "Eco-friendly content creator",
    status: "Available",
  },
  {
    title: "Gaming Stream Sponsorship",
    brand: "GamersDelight",
    compensation: "$500 per stream",
    audience: "16-30, Gamers",
    deadline: "Apply by July 18",
    duration: "3 months",
    goals: "Increase game downloads",
    requirements: "Min. 1000 concurrent viewers",
    status: "Available",
  },
  {
    title: "Cooking Show Collaboration",
    brand: "TastyBites",
    compensation: "$2,500 + Kitchen Appliances",
    audience: "30-55, Cooking enthusiasts",
    deadline: "Apply by August 5",
    duration: "2 months",
    goals: "Showcase recipes using products",
    requirements: "Culinary background",
    status: "Available",
  },
  {
    title: "Beauty Product Review",
    brand: "GlowUp",
    compensation: "$800 + Full Product Range",
    audience: "18-40, Beauty enthusiasts",
    deadline: "Apply by July 30",
    duration: "3 weeks",
    goals: "Honest product reviews",
    requirements: "Beauty influencer",
    status: "In Progress",
  },
  {
    title: "Tech Gadget Unboxing",
    brand: "FutureTech",
    compensation: "$1,200 + Latest Gadget",
    audience: "20-45, Tech enthusiasts",
    deadline: "Apply by August 10",
    duration: "1 month",
    goals: "Generate buzz for new product",
    requirements: "Tech reviewer",
    status: "Completed",
  },
]

export function Opportunities() {
  const [activeMainTab, setActiveMainTab] = useState("opportunities")
  const [activeSubTab, setActiveSubTab] = useState("available")
  const [viewMode, setViewMode] = useState("grid")

  const filteredCollaborations = collaborations.filter(collab => {
    if (activeMainTab === "opportunities") {
      return collab.status === "Available"
    } else {
      return collab.status === "In Progress" || collab.status === "Completed"
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <MainNav />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Opportunities & Collaborations</h1>
        <Tabs value={activeMainTab} onValueChange={setActiveMainTab}>
          <TabsList>
            <TabsTrigger value="opportunities">Opportunities</TabsTrigger>
            <TabsTrigger value="collaborations">Collaborations</TabsTrigger>
          </TabsList>
          <TabsContent value="opportunities">
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input className="pl-10" placeholder="Search opportunities..." />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setViewMode(viewMode === "grid" ? "table" : "grid")}>
                  {viewMode === "grid" ? <LayoutList className="h-4 w-4 mr-2" /> : <LayoutGrid className="h-4 w-4 mr-2" />}
                  {viewMode === "grid" ? "Table View" : "Grid View"}
                </Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" /> Filter
                </Button>
              </div>
            </div>
            <Tabs value={activeSubTab} onValueChange={setActiveSubTab}>
              <TabsList>
                <TabsTrigger value="available">Available</TabsTrigger>
                <TabsTrigger value="applied">Applied</TabsTrigger>
              </TabsList>
              <TabsContent value="available" className="space-y-4">
                {viewMode === "grid" ? (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredCollaborations.map((collab, index) => (
                      <CollaborationCard key={index} {...collab} />
                    ))}
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>Compensation</TableHead>
                        <TableHead>Audience</TableHead>
                        <TableHead>Deadline</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredCollaborations.map((collab, index) => (
                        <TableRow key={index}>
                          <TableCell>{collab.title}</TableCell>
                          <TableCell>{collab.brand}</TableCell>
                          <TableCell>{collab.compensation}</TableCell>
                          <TableCell>{collab.audience}</TableCell>
                          <TableCell>{collab.deadline}</TableCell>
                          <TableCell>
                            <Button size="sm">Apply</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </TabsContent>
              <TabsContent value="applied">
                <p>You haven&apos;t applied to any opportunities yet.</p>
              </TabsContent>
            </Tabs>
          </TabsContent>
          <TabsContent value="collaborations">
            <div className="flex justify-between items-center mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input className="pl-10" placeholder="Search collaborations..." />
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={() => setViewMode(viewMode === "grid" ? "table" : "grid")}>
                  {viewMode === "grid" ? <LayoutList className="h-4 w-4 mr-2" /> : <LayoutGrid className="h-4 w-4 mr-2" />}
                  {viewMode === "grid" ? "Table View" : "Grid View"}
                </Button>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" /> Filter
                </Button>
              </div>
            </div>
            <Tabs defaultValue="active">
              <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              <TabsContent value="active">
                {viewMode === "grid" ? (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {collaborations.filter(c => c.status === "In Progress").map((collab, index) => (
                      <CollaborationCard key={index} {...collab} />
                    ))}
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>Compensation</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {collaborations.filter(c => c.status === "In Progress").map((collab, index) => (
                        <TableRow key={index}>
                          <TableCell>{collab.title}</TableCell>
                          <TableCell>{collab.brand}</TableCell>
                          <TableCell>{collab.compensation}</TableCell>
                          <TableCell>{collab.duration}</TableCell>
                          <TableCell>{collab.status}</TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">View Details</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </TabsContent>
              <TabsContent value="completed">
                {viewMode === "grid" ? (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {collaborations.filter(c => c.status === "Completed").map((collab, index) => (
                      <CollaborationCard key={index} {...collab} />
                    ))}
                  </div>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Brand</TableHead>
                        <TableHead>Compensation</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {collaborations.filter(c => c.status === "Completed").map((collab, index) => (
                        <TableRow key={index}>
                          <TableCell>{collab.title}</TableCell>
                          <TableCell>{collab.brand}</TableCell>
                          <TableCell>{collab.compensation}</TableCell>
                          <TableCell>{collab.duration}</TableCell>
                          
                          <TableCell>{collab.status}</TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">View Report</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
