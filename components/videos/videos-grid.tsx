"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Clock, Eye, BookOpen } from "lucide-react"

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

interface VideosGridProps {
  videos: Video[]
}

export function VideosGrid({ videos }: VideosGridProps) {
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

  const groupedVideos = videos.reduce(
    (acc, video) => {
      if (!acc[video.category]) {
        acc[video.category] = []
      }
      acc[video.category].push(video)
      return acc
    },
    {} as Record<string, Video[]>,
  )

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
    <div className="space-y-8">
      {Object.entries(groupedVideos).map(([category, categoryVideos]) => (
        <div key={category}>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold text-foreground capitalize">{category.replace("-", " ")} Videos</h2>
            <Badge className={getCategoryColor(category)}>{categoryVideos.length} videos</Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categoryVideos.map((video) => (
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
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-t-lg">
                    <Button
                      className="rounded-full bg-primary/90 hover:bg-primary p-3"
                      onClick={() => window.open(`https://youtube.com/watch?v=${video.video_id}`, "_blank")}
                    >
                      <Play className="h-5 w-5 text-primary-foreground fill-current" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-base text-card-foreground line-clamp-2">{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{video.description}</p>

                  {video.courses && (
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <Badge variant="secondary" className="text-xs">
                        {video.courses.title}
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
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
        </div>
      ))}
    </div>
  )
}
