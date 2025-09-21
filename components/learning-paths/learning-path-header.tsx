import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface LearningPathHeaderProps {
  learningPath: {
    title: string
    description: string
    level: string
    modules: any[]
  }
}

export function LearningPathHeader({ learningPath }: LearningPathHeaderProps) {
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
      {/* Back Button */}
      <div className="mb-6">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
          <Link href="/learning-paths" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Learning Paths
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-card/50 to-muted/30 rounded-lg p-8 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <Badge className={getLevelColor(learningPath.level)}>{learningPath.level}</Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>1,234 students enrolled</span>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-4">{learningPath.title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{learningPath.description}</p>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>{learningPath.modules.length} modules</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{calculateDuration(learningPath.modules)} weeks</span>
          </div>
        </div>
      </div>
    </div>
  )
}
