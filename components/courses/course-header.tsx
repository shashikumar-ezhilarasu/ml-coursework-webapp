import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, Star } from "lucide-react"

interface CourseHeaderProps {
  course: {
    title: string
    description: string
    level: string
  }
}

export function CourseHeader({ course }: CourseHeaderProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-500/10 text-green-500"
      case "intermediate":
        return "bg-orange-500/10 text-orange-500"
      case "advanced":
        return "bg-red-500/10 text-red-500"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  return (
    <div className="bg-gradient-to-r from-card/50 to-muted/30 rounded-lg p-8 border border-border">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.8 (1,234 reviews)</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4">{course.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">{course.description}</p>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span>7 modules</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 weeks</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>1,234 students</span>
            </div>
          </div>
        </div>

        <div className="lg:w-64">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-primary">Free</div>
              <div className="text-sm text-muted-foreground">For SRM students</div>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90 mb-3">Enroll Now</Button>
            <Button variant="outline" className="w-full border-border bg-transparent">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
