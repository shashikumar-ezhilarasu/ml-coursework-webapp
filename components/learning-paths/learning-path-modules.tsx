"use client"

import { useState } from "react"
import { createClient } from "@/lib/firebase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle, Clock, BookOpen, Play } from "lucide-react"
import { toast } from "sonner"

interface Module {
  title: string
  duration: string
  topics: string[]
}

interface LearningPathModulesProps {
  modules: Module[]
  completedModules: string[]
  learningPathId: string
  userId?: string
}

export function LearningPathModules({ modules, completedModules, learningPathId, userId }: LearningPathModulesProps) {
  const [isUpdating, setIsUpdating] = useState<string | null>(null)
  const supabase = createClient()

  const isModuleCompleted = (moduleTitle: string) => {
    return completedModules.includes(moduleTitle)
  }

  const toggleModuleCompletion = async (moduleTitle: string) => {
    setIsUpdating(moduleTitle)

    try {
      const isCompleted = isModuleCompleted(moduleTitle)
      let newCompletedModules: string[]

      if (isCompleted) {
        // Remove from completed
        newCompletedModules = completedModules.filter((title) => title !== moduleTitle)
      } else {
        // Add to completed
        newCompletedModules = [...completedModules, moduleTitle]
      }

      const progressPercentage = Math.round((newCompletedModules.length / modules.length) * 100)

      // Mock progress update - in real implementation would update Firebase
      console.log("Updating progress:", {
        userId: userId || "anonymous",
        learningPathId,
        completedModules: newCompletedModules,
        progressPercentage
      })

      // Simulate successful update
      toast.success(`Module ${isCompleted ? 'marked as incomplete' : 'completed'}!`)
    } catch (error) {
      console.error("Error updating module completion:", error)
      toast.error("Failed to update progress")
    } finally {
      setIsUpdating(null)
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">Course Modules</h2>

      {modules.map((module, index) => {
        const isCompleted = isModuleCompleted(module.title)
        const isCurrentlyUpdating = isUpdating === module.title

        return (
          <Card
            key={index}
            className={`bg-card border-border ${isCompleted ? "bg-green-500/5 border-green-500/20" : ""}`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-1">
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Circle className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg text-card-foreground">
                      Module {index + 1}: {module.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{module.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{module.topics.length} topics</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={isCompleted ? "secondary" : "default"}
                    onClick={() => toggleModuleCompletion(module.title)}
                    disabled={isCurrentlyUpdating}
                    className={
                      isCompleted
                        ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                        : "bg-primary hover:bg-primary/90"
                    }
                  >
                    {isCurrentlyUpdating ? "Updating..." : isCompleted ? "Completed" : "Mark Complete"}
                  </Button>
                  <Button size="sm" variant="outline" className="border-border bg-transparent">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-card-foreground">Topics covered:</h4>
                <div className="flex flex-wrap gap-2">
                  {module.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
