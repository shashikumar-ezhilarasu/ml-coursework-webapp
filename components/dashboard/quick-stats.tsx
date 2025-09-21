import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, TrendingUp, Clock } from "lucide-react"

export function QuickStats() {
  const stats = [
    {
      title: "Course Progress",
      value: "75%",
      description: "4 of 7 modules completed",
      icon: BookOpen,
      color: "text-primary",
    },
    {
      title: "Personal Notes",
      value: "23",
      description: "Notes created this month",
      icon: FileText,
      color: "text-accent",
    },
    {
      title: "Study Streak",
      value: "12 days",
      description: "Keep it up!",
      icon: TrendingUp,
      color: "text-green-500",
    },
    {
      title: "Time Studied",
      value: "45h",
      description: "This month",
      icon: Clock,
      color: "text-orange-500",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-card-foreground">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
