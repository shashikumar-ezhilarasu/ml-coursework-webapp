"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Clock, Eye, Star } from "lucide-react"

interface Video {
  id: string
  title: string
  video_id: string
  description: string
  category: string
  courses?: {
    title: string
  }
}

interface FeaturedVideosProps {
  videos: Video[]
}

export function FeaturedVideos({ videos }: FeaturedVideosProps) {
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
    return null
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Star className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Featured Videos</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 overflow-hidden"
          >
            <div className="relative">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <img
                  src={`https://img.youtube.com/vi/${video.video_id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = `/placeholder.svg?height=180&width=320&query=video thumbnail for ${video.title}`
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <Button
                  className="rounded-full bg-primary/90 hover:bg-primary p-4"
                  onClick={() => window.open(`https://youtube.com/watch?v=${video.video_id}`, "_blank")}
                >
                  <Play className="h-6 w-6 text-primary-foreground fill-current" />
                </Button>
              </div>
              <Badge className="absolute top-2 left-2 bg-primary/10 text-primary">Featured</Badge>
              <Badge className={`absolute top-2 right-2 ${getCategoryColor(video.category)}`}>
                {video.category.replace("-", " ")}
              </Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold text-card-foreground line-clamp-2 mb-2">{video.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{video.description}</p>

              {video.courses && (
                <Badge variant="secondary" className="mb-3">
                  {video.courses.title}
                </Badge>
              )}

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>15:30</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    <span>1.2k</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
