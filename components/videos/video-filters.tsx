"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function VideoFilters() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg text-card-foreground">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Category</h4>
          <div className="space-y-2">
            {["fundamentals", "programming", "algorithms", "deep-learning"].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <Label htmlFor={category} className="text-sm capitalize text-muted-foreground">
                  {category.replace("-", " ")}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="text-sm font-medium text-card-foreground mb-3">Duration</h4>
          <div className="space-y-2">
            {["Under 10 min", "10-20 min", "20-30 min", "30+ min"].map((duration) => (
              <div key={duration} className="flex items-center space-x-2">
                <Checkbox id={duration} />
                <Label htmlFor={duration} className="text-sm text-muted-foreground">
                  {duration}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

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
          <h4 className="text-sm font-medium text-card-foreground mb-3">Quality</h4>
          <div className="space-y-2">
            {["HD", "4K", "Subtitles"].map((quality) => (
              <div key={quality} className="flex items-center space-x-2">
                <Checkbox id={quality} />
                <Label htmlFor={quality} className="text-sm text-muted-foreground">
                  {quality}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
