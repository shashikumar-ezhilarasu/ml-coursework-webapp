import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Target, ArrowRight, Clock, BookOpen } from "lucide-react"
import Link from "next/link"

interface LearningPath {
  id: string
  title: string
  description: string
  level: string
  modules: any[]
}

interface RecommendedPathsProps {
  userLevel: string
  learningPaths: LearningPath[]
}

export function RecommendedPaths({ userLevel, learningPaths }: RecommendedPathsProps) {
  // Filter paths based on user level and get recommended ones
  const recommendedPaths = learningPaths.filter((path) => path.level === userLevel).slice(0, 3)

  if (recommendedPaths.length === 0) {
    return null
  }

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

  const calculateDuration = (modules: any[]) => {
    return modules.reduce((total, module) => {
      const duration = module.duration || "1 week"
      const weeks = Number.parseInt(duration.split(" ")[0]) || 1
      return total + weeks
    }, 0)
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <Target className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold text-foreground">Recommended for You</h2>
        <Badge className={getLevelColor(userLevel)}>{userLevel}</Badge>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {recommendedPaths.map((path) => (
          <Card key={path.id} className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg text-card-foreground line-clamp-2">{path.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{path.description}</p>
                </div>
                <Badge className="bg-primary/10 text-primary">Recommended</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{path.modules.length} modules</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{calculateDuration(path.modules)} weeks</span>
                  </div>
                </div>
              </div>
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href={`/learning-paths/${path.id}`} className="flex items-center justify-center gap-2">
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
