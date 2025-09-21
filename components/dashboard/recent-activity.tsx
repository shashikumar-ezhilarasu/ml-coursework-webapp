import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, FileText, Video, CheckCircle } from "lucide-react"

export function RecentActivity() {
  const activities = [
    {
      type: "course",
      title: "Completed Neural Networks Module",
      description: "Module 4: Deep Learning Fundamentals",
      time: "2 hours ago",
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      type: "note",
      title: "Created new note",
      description: "Backpropagation Algorithm Explained",
      time: "5 hours ago",
      icon: FileText,
      color: "text-blue-500",
    },
    {
      type: "video",
      title: "Watched tutorial",
      description: "Convolutional Neural Networks in Practice",
      time: "1 day ago",
      icon: Video,
      color: "text-purple-500",
    },
    {
      type: "course",
      title: "Started new module",
      description: "Module 5: Computer Vision Applications",
      time: "2 days ago",
      icon: BookOpen,
      color: "text-orange-500",
    },
  ]

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="rounded-full bg-muted p-2">
                <activity.icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-card-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <Badge variant="secondary" className="text-xs">
                {activity.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
