import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Video, MessageSquare, TrendingUp, Clock, Download, Search, Target } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Complete Course Materials",
    description: "Access all PPTs, notes, books, and previous year questions in one organized platform.",
  },
  {
    icon: FileText,
    title: "Personal Notes System",
    description: "Create, organize, and sync your personal notes across all devices with smart tagging.",
  },
  {
    icon: Target,
    title: "Personalized Learning Paths",
    description: "Curated learning journeys based on your skill level and learning objectives.",
  },
  {
    icon: Video,
    title: "Curated Video Content",
    description: "Hand-picked YouTube videos and tutorials relevant to each course module.",
  },
  {
    icon: MessageSquare,
    title: "AI-Powered Assistant",
    description: "Get instant help with concepts, assignments, and study planning using Gemini AI.",
  },
  {
    icon: Clock,
    title: "Last-Minute Revision",
    description: "Quick revision tools and summaries for efficient exam preparation.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your learning progress and identify areas that need more attention.",
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Find any content instantly with our intelligent search across all materials.",
  },
  {
    icon: Download,
    title: "Offline Access",
    description: "Download materials for offline study and never miss a learning opportunity.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything You Need to Excel in ML
          </h2>
          <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
            Comprehensive tools and resources designed specifically for SRM Ramapuram ML students.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-card-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
