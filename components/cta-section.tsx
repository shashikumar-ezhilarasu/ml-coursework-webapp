import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250px_250px] animate-pulse" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-primary/20 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/30">
            <Sparkles className="mr-2 h-4 w-4" />
            Start Your ML Journey Today
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Transform Your ML Learning Experience?
          </h2>

          <p className="mt-6 text-pretty text-lg leading-8 text-muted-foreground">
            Join SRM Ramapuram students who are already using our platform to excel in Machine Learning. Get started for
            free and unlock your potential.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/auth/sign-up" className="flex items-center">
                Create Free Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted bg-transparent">
              <Link href="/auth/login">Sign In to Continue</Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Free forever. No credit card required. Start learning immediately.
          </p>
        </div>
      </div>
    </section>
  )
}
