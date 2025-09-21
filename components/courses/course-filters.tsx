"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function CourseFilters() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg text-card-foreground">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Level</h4>
          <div className="space-y-2">
            {["beginner", "intermediate", "advanced"].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox id={level} />
                <Label htmlFor={level} className="text-sm capitalize text-muted-foreground">
                  {level}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Topics</h4>
          <div className="space-y-2">
            {[
              "Supervised Learning",
              "Unsupervised Learning",
              "Deep Learning",
              "Neural Networks",
              "Computer Vision",
            ].map((topic) => (
              <div key={topic} className="flex items-center space-x-2">
                <Checkbox id={topic} />
                <Label htmlFor={topic} className="text-sm text-muted-foreground">
                  {topic}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Duration</h4>
          <div className="space-y-2">
            {["1-4 weeks", "5-8 weeks", "9-12 weeks", "12+ weeks"].map((duration) => (
              <div key={duration} className="flex items-center space-x-2">
                <Checkbox id={duration} />
                <Label htmlFor={duration} className="text-sm text-muted-foreground">
                  {duration}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
