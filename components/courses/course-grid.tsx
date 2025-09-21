import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

interface Course {
  id: string
  title: string
  description: string
  level: string
  created_at: string
}

interface CourseGridProps {
  courses: Course[]
}

export function CourseGrid({ courses }: CourseGridProps) {
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

  if (courses.length === 0) {
    return (
      <div className="text-center py-12">
        <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">No courses available</h3>
        <p className="mt-2 text-muted-foreground">Check back later for new courses.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <Card key={course.id} className="bg-card border-border hover:bg-card/80 transition-colors">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg text-card-foreground line-clamp-2">{course.title}</CardTitle>
                <CardDescription className="mt-2 line-clamp-3">{course.description}</CardDescription>
              </div>
              <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>8 weeks</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>1.2k students</span>
                </div>
              </div>
            </div>
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <Link href={`/courses/${course.id}`} className="flex items-center justify-center gap-2">
                View Course
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
