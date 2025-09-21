import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Target, Trophy } from "lucide-react"

interface LearningPathProgressProps {
  progress: number
  completedModules: string[]
  totalModules: number
}

export function LearningPathProgress({ progress, completedModules, totalModules }: LearningPathProgressProps) {
  const getProgressColor = (progress: number) => {
    if (progress === 100) return "text-green-500"
    if (progress >= 75) return "text-blue-500"
    if (progress >= 50) return "text-orange-500"
    return "text-muted-foreground"
  }

  const getProgressIcon = (progress: number) => {
    if (progress === 100) return Trophy
    if (progress >= 50) return Target
    return CheckCircle
  }

  const ProgressIcon = getProgressIcon(progress)

  return (
    <div className="space-y-6">
      {/* Overall Progress */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-card-foreground">
            <ProgressIcon className={`h-5 w-5 ${getProgressColor(progress)}`} />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Overall Completion</span>
                <span className={`text-lg font-bold ${getProgressColor(progress)}`}>{progress}%</span>
              </div>
              <Progress value={progress} className="h-3" />
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">{completedModules.length}</div>
                <div className="text-xs text-muted-foreground">Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{totalModules - completedModules.length}</div>
                <div className="text-xs text-muted-foreground">Remaining</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {progress >= 25 && (
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-blue-500/10 p-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-card-foreground">Getting Started</div>
                  <div className="text-xs text-muted-foreground">Completed first module</div>
                </div>
              </div>
            )}

            {progress >= 50 && (
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-orange-500/10 p-2">
                  <Target className="h-4 w-4 text-orange-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-card-foreground">Halfway There</div>
                  <div className="text-xs text-muted-foreground">50% completion milestone</div>
                </div>
              </div>
            )}

            {progress >= 100 && (
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-green-500/10 p-2">
                  <Trophy className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <div className="text-sm font-medium text-card-foreground">Path Master</div>
                  <div className="text-xs text-muted-foreground">Completed entire learning path</div>
                </div>
              </div>
            )}

            {progress < 25 && (
              <div className="text-center py-4">
                <div className="text-sm text-muted-foreground">Start completing modules to unlock achievements!</div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Study Tips */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Study Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Complete modules in order for the best learning experience</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Take notes while studying each module</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Practice with real examples after each topic</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              <span>Review previous modules regularly</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
