"use client"

import { useAuth } from "@/lib/firebase/auth-context"
import { ProtectedRoute } from "@/components/auth/protected-route"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { QuickStats } from "@/components/dashboard/quick-stats"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { LearningPathProgress } from "@/components/dashboard/learning-path-progress"
import { UpcomingDeadlines } from "@/components/dashboard/upcoming-deadlines"

export default function DashboardPage() {
  const { user } = useAuth()

  // Mock profile data for now (you'll replace this with Firestore data later)
  const profile = {
    id: user?.uid || "",
    full_name: user?.displayName || "Student",
    email: user?.email || "",
    student_id: "STU001",
    enrollment_date: "2024-01-15",
    role: "student"
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <DashboardHeader user={user} profile={profile} />
        
        <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Welcome back, {profile.full_name}!</h1>
            <p className="text-muted-foreground">Continue your machine learning journey</p>
          </div>

          {/* Quick Stats */}
          <div className="mb-8">
            <QuickStats />
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Learning Path Progress */}
            <div>
              <LearningPathProgress level="beginner" />
            </div>

            {/* Recent Activity */}
            <div>
              <RecentActivity />
            </div>

            {/* Upcoming Deadlines */}
            <div className="md:col-span-2">
              <UpcomingDeadlines />
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  )
}