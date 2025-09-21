"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function NotesFilters() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg text-card-foreground">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Course</h4>
          <div className="space-y-2">
            {["ML Fundamentals", "Deep Learning", "Computer Vision", "NLP"].map((course) => (
              <div key={course} className="flex items-center space-x-2">
                <Checkbox id={course} />
                <Label htmlFor={course} className="text-sm text-muted-foreground">
                  {course}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Tags</h4>
          <div className="space-y-2">
            {["algorithms", "theory", "practice", "examples", "formulas"].map((tag) => (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox id={tag} />
                <Label htmlFor={tag} className="text-sm text-muted-foreground">
                  {tag}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Date Created</h4>
          <div className="space-y-2">
            {["Today", "This week", "This month", "Older"].map((period) => (
              <div key={period} className="flex items-center space-x-2">
                <Checkbox id={period} />
                <Label htmlFor={period} className="text-sm text-muted-foreground">
                  {period}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
