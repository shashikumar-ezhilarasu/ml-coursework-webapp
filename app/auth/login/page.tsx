/* 
AUTH PAGES COMMENTED OUT FOR NOW - ENABLE LATER
*/

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-4">
        {/* Back to Home */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <Card className="w-full">
          <CardHeader className="text-center">
            <CardTitle>Authentication Disabled</CardTitle>
            <CardDescription>
              Login functionality is temporarily disabled during development.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Please use the navigation to explore the documentation and courses.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}