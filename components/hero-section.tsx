import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Brain, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20">
            <Brain className="mr-2 h-4 w-4" />
            SRM Ramapuram ML Course Hub
          </div>

          {/* Main Heading */}
          <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            Master{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Machine Learning
            </span>{" "}
            with Confidence
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
            Your complete ML coursework companion. Access lectures, notes, practice questions, personalized learning
            paths, and AI-powered assistance - all in one place.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/auth/sign-up" className="flex items-center">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted bg-transparent">
              <Link href="/auth/login">Sign In</Link>
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="mt-16 flex justify-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span className="text-sm">Complete Materials</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              <span className="text-sm">AI Assistant</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">Collaborative</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
