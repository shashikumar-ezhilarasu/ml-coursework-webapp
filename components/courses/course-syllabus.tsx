import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Circle } from "lucide-react"

interface CourseSyllabusProps {
  syllabus: string
  detailed?: boolean
}

export function CourseSyllabus({ syllabus, detailed = false }: CourseSyllabusProps) {
  const modules = syllabus.split("\n").filter((line) => line.trim())

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg text-card-foreground">Course Syllabus</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {modules.map((module, index) => (
            <div key={index} className="flex items-start gap-3">
              {detailed ? (
                <div className="mt-1">
                  {index < 3 ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              ) : null}
              <div className="flex-1">
                <p className={`text-sm ${detailed ? "text-card-foreground" : "text-muted-foreground"}`}>
                  {module.replace(/^Module \d+:\s*/, "")}
                </p>
                {detailed && (
                  <div className="mt-1 text-xs text-muted-foreground">{index < 3 ? "Completed" : "Not started"}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
