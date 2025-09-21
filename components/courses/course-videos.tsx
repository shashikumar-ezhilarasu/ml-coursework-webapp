"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Clock, Eye } from "lucide-react"

interface Video {
  id: string
  title: string
  video_id: string
  description: string
  category: string
  created_at: string
}

interface CourseVideosProps {
  videos: Video[]
}

export function CourseVideos({ videos }: CourseVideosProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "fundamentals":
        return "bg-blue-500/10 text-blue-500"
      case "programming":
        return "bg-green-500/10 text-green-500"
      case "algorithms":
        return "bg-purple-500/10 text-purple-500"
      case "deep-learning":
        return "bg-orange-500/10 text-orange-500"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  if (videos.length === 0) {
    return (
      <div className="text-center py-12">
        <Play className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">No videos available</h3>
        <p className="mt-2 text-muted-foreground">Video content will be added soon.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {videos.map((video) => (
        <Card key={video.id} className="bg-card border-border hover:bg-card/80 transition-colors">
          <div className="relative">
            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
              <img
                src={`https://img.youtube.com/vi/${video.video_id}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover rounded-t-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = `/placeholder.svg?height=180&width=320&query=video thumbnail for ${video.title}`
                }}
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-primary/90 p-3 hover:bg-primary transition-colors cursor-pointer">
                <Play className="h-6 w-6 text-primary-foreground fill-current" />
              </div>
            </div>
            <Badge className={`absolute top-2 right-2 ${getCategoryColor(video.category)}`}>
              {video.category.replace("-", " ")}
            </Badge>
          </div>
          <CardHeader>
            <CardTitle className="text-base text-card-foreground line-clamp-2">{video.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{video.description}</p>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>15:30</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>1.2k views</span>
              </div>
            </div>
            <Button
              className="w-full bg-primary hover:bg-primary/90"
              onClick={() => window.open(`https://youtube.com/watch?v=${video.video_id}`, "_blank")}
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Video
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
