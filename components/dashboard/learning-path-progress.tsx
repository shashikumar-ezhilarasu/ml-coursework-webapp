import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface LearningPathProgressProps {
  level: string
}

export function LearningPathProgress({ level }: LearningPathProgressProps) {
  const pathData = {
    beginner: {
      title: "Beginner ML Path",
      progress: 60,
      currentModule: "Introduction to ML",
      nextModule: "First ML Model",
    },
    intermediate: {
      title: "Intermediate ML Path",
      progress: 40,
      currentModule: "Classification Algorithms",
      nextModule: "Model Evaluation",
    },
    advanced: {
      title: "Advanced ML Path",
      progress: 25,
      currentModule: "Neural Networks",
      nextModule: "Deep Learning",
    },
  }

  const currentPath = pathData[level as keyof typeof pathData] || pathData.beginner

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Learning Path</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-card-foreground">{currentPath.title}</span>
            <span className="text-sm text-muted-foreground">{currentPath.progress}%</span>
          </div>
          <Progress value={currentPath.progress} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="text-sm">
            <span className="text-muted-foreground">Current: </span>
            <span className="text-card-foreground font-medium">{currentPath.currentModule}</span>
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Next: </span>
            <span className="text-card-foreground font-medium">{currentPath.nextModule}</span>
          </div>
        </div>

        <Button asChild className="w-full bg-primary hover:bg-primary/90">
          <Link href="/learning-paths" className="flex items-center justify-center gap-2">
            Continue Learning
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
