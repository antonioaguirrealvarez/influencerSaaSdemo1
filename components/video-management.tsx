"use client"

import React from 'react'
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { BarChart2, Upload, /* Globe, */ ArrowUpCircle, /* Type, ImageIcon, Layers, */ Settings, User } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

const platforms = ["YouTube", "Instagram", "TikTok", "Facebook", "Twitter"]

export function VideoManagement() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [generateSubtitles, setGenerateSubtitles] = useState(true)
  const [upscaleResolution, setUpscaleResolution] = useState(true)
  const [abTestVariations, setAbTestVariations] = useState(3)
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0])
    }
  }

  const handleUpload = () => {
    // Simulating upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
      }
    }, 500)
  }

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
            <Link href="/case-studies" className="text-gray-600 hover:text-purple-600 transition-colors">Case Studies</Link>
            <Link href="/video-management" className="text-purple-600 font-semibold">Video Management</Link>
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
        <h1 className="text-3xl font-bold mb-8">Video Management</h1>
        <Card>
          <CardHeader>
            <CardTitle>Upload and Optimize Your Video</CardTitle>
            <CardDescription>Enhance your video content with our advanced tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* File Upload */}
              <div>
                <Label htmlFor="video-upload">Upload Video</Label>
                <div className="mt-2 flex items-center space-x-4">
                  <Input id="video-upload" type="file" onChange={handleFileChange} accept="video/*" />
                  <Button onClick={handleUpload} disabled={!selectedFile}>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload
                  </Button>
                </div>
                {uploadProgress > 0 && (
                  <div className="mt-2">
                    <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Upload progress: {uploadProgress}%</p>
                  </div>
                )}
              </div>

              {/* Subtitle Generation */}
              <div className="flex items-center space-x-2">
                <Switch
                  id="subtitle-generation"
                  checked={generateSubtitles}
                  onCheckedChange={setGenerateSubtitles}
                />
                <Label htmlFor="subtitle-generation">Generate subtitles in all languages</Label>
              </div>

              {/* Resolution Upscaling */}
              <div className="flex items-center space-x-2">
                <Switch
                  id="resolution-upscale"
                  checked={upscaleResolution}
                  onCheckedChange={setUpscaleResolution}
                />
                <Label htmlFor="resolution-upscale">Upscale video resolution</Label>
              </div>

              {/* A/B Test Variations */}
              <div>
                <Label htmlFor="ab-test-variations">Number of A/B test variations</Label>
                <Slider
                  id="ab-test-variations"
                  min={1}
                  max={5}
                  step={1}
                  value={[abTestVariations]}
                  onValueChange={(value) => setAbTestVariations(value[0])}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-1">Generate {abTestVariations} variations for titles, descriptions, and thumbnails</p>
              </div>

              {/* Platform Selection */}
              <div>
                <Label>Select platforms to upload</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {platforms.map((platform) => (
                    <div key={platform} className="flex items-center space-x-2">
                      <Switch
                        id={`platform-${platform}`}
                        checked={selectedPlatforms.includes(platform)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedPlatforms([...selectedPlatforms, platform])
                          } else {
                            setSelectedPlatforms(selectedPlatforms.filter((p) => p !== platform))
                          }
                        }}
                      />
                      <Label htmlFor={`platform-${platform}`}>{platform}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <ArrowUpCircle className="h-4 w-4 mr-2" />
              Process and Upload Video
            </Button>
          </CardFooter>
        </Card>

        {/* A/B Testing Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>A/B Test Variations</CardTitle>
            <CardDescription>Review and select the best variations for your video</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="titles">
              <TabsList>
                <TabsTrigger value="titles">Titles</TabsTrigger>
                <TabsTrigger value="descriptions">Descriptions</TabsTrigger>
                <TabsTrigger value="thumbnails">Thumbnails</TabsTrigger>
              </TabsList>
              <TabsContent value="titles">
                {Array.from({ length: abTestVariations }).map((_, index) => (
                  <div key={index} className="mb-4">
                    <Label htmlFor={`title-${index}`}>Title Variation {index + 1}</Label>
                    <Input id={`title-${index}`} placeholder={`Enter title variation ${index + 1}`} className="mt-1" />
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="descriptions">
                {Array.from({ length: abTestVariations }).map((_, index) => (
                  <div key={index} className="mb-4">
                    <Label htmlFor={`description-${index}`}>Description Variation {index + 1}</Label>
                    <Textarea id={`description-${index}`} placeholder={`Enter description variation ${index + 1}`} className="mt-1" />
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="thumbnails">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Array.from({ length: abTestVariations }).map((_, index) => (
                    <div key={index} className="border rounded p-2">
                      <Image src={`/placeholder.svg?height=200&width=300&text=Thumbnail ${index + 1}`} alt={`Thumbnail ${index + 1}`} width={300} height={200} className="w-full h-auto" />
                      <Button className="w-full mt-2" variant="outline">Upload New</Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Save A/B Test Variations</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
