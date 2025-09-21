import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

interface LearningPath {
  id: string
  title: string
  description: string
  level: string
  modules: any[]
}

interface UserProgress {
  learning_path_id: string
  progress_percentage: number
  completed_modules: string[]
}

interface LearningPathsGridProps {
  learningPaths: LearningPath[]
  userProgress: UserProgress[]
}

export function LearningPathsGrid({ learningPaths, userProgress }: LearningPathsGridProps) {
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

  const getUserProgress = (pathId: string) => {
    return userProgress.find((progress) => progress.learning_path_id === pathId)
  }

  const groupedPaths = learningPaths.reduce(
    (acc, path) => {
      if (!acc[path.level]) {
        acc[path.level] = []
      }
      acc[path.level].push(path)
      return acc
    },
    {} as Record<string, LearningPath[]>,
  )

  return (
    <div className="space-y-8">
      {Object.entries(groupedPaths).map(([level, paths]) => (
        <div key={level}>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-xl font-semibold text-foreground capitalize">{level} Level</h2>
            <Badge className={getLevelColor(level)}>{paths.length} paths</Badge>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {paths.map((path) => {
              const progress = getUserProgress(path.id)
              const isStarted = progress && progress.progress_percentage > 0
              const isCompleted = progress && progress.progress_percentage === 100

              return (
                <Card key={path.id} className="bg-card border-border hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg text-card-foreground line-clamp-2">{path.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{path.description}</p>
                      </div>
                      {isCompleted && <CheckCircle className="h-5 w-5 text-green-500" />}
                    </div>
                  </CardHeader>
                  <CardContent>
                    {isStarted && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium text-foreground">{progress.progress_percentage}%</span>
                        </div>
                        <Progress value={progress.progress_percentage} className="h-2" />
                      </div>
                    )}

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
                        {isStarted ? "Continue" : "Start"} Learning
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
