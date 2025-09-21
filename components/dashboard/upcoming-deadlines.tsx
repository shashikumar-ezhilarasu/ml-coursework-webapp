import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, AlertTriangle } from "lucide-react"

export function UpcomingDeadlines() {
  const deadlines = [
    {
      title: "ML Assignment 3",
      description: "Neural Network Implementation",
      dueDate: "Dec 15, 2024",
      priority: "high",
      timeLeft: "3 days",
    },
    {
      title: "Mid-term Exam",
      description: "Supervised Learning Topics",
      dueDate: "Dec 20, 2024",
      priority: "high",
      timeLeft: "8 days",
    },
    {
      title: "Project Proposal",
      description: "Final Project Topic Selection",
      dueDate: "Dec 25, 2024",
      priority: "medium",
      timeLeft: "13 days",
    },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive"
      case "medium":
        return "bg-orange-500/10 text-orange-500"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-card-foreground">
          <Calendar className="h-5 w-5" />
          Upcoming Deadlines
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {deadlines.map((deadline, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <div className="rounded-full bg-primary/10 p-2">
                <AlertTriangle className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium text-card-foreground">{deadline.title}</p>
                <p className="text-xs text-muted-foreground">{deadline.description}</p>
                <div className="flex items-center gap-2">
                  <Clock className="h-3 w-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{deadline.dueDate}</span>
                </div>
              </div>
              <Badge className={getPriorityColor(deadline.priority)}>{deadline.timeLeft}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
