"use client"import { createServerClient } from "@/lib/firebase/server"

import { redirect } from "next/navigation"

import { useAuth } from "@/lib/firebase/auth-context"import { DashboardHeader } from "@/components/dashboard/dashboard-header"

import { ProtectedRoute } from "@/components/auth/protected-route"import { QuickStats } from "@/components/dashboard/quick-stats"

import { DashboardHeader } from "@/components/dashboard/dashboard-header"import { RecentActivity } from "@/components/dashboard/recent-activity"

import { QuickStats } from "@/components/dashboard/quick-stats"import { LearningPathProgress } from "@/components/dashboard/learning-path-progress"

import { RecentActivity } from "@/components/dashboard/recent-activity"import { UpcomingDeadlines } from "@/components/dashboard/upcoming-deadlines"

import { LearningPathProgress } from "@/components/dashboard/learning-path-progress"

import { UpcomingDeadlines } from "@/components/dashboard/upcoming-deadlines"export default async function DashboardPage() {

  const supabase = await createServerClient()

export default function DashboardPage() {  const {

  const { user } = useAuth()    data: { user },

    error,

  // Mock profile data for now (you'll replace this with Firestore data later)  } = await supabase.auth.getUser()

  const profile = {

    id: user?.uid || "",  if (error || !user) {

    full_name: user?.displayName || "Student",    redirect("/auth/login")

    student_id: "STU001",  }

    level: "intermediate",

    role: "student"  // Get or create user profile

  }  let { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()



  return (  if (!profile) {

    <ProtectedRoute>    // Create profile from user metadata

      <div className="min-h-screen bg-background">    const { data: newProfile } = await supabase

        <DashboardHeader user={user} profile={profile} />      .from("profiles")

      .insert({

        <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">        id: user.id,

          <div className="mb-8">        full_name: user.user_metadata?.full_name || "Student",

            <h1 className="text-3xl font-bold text-foreground">Welcome back, {profile?.full_name || "Student"}!</h1>        student_id: user.user_metadata?.student_id || "",

            <p className="mt-2 text-muted-foreground">Continue your Machine Learning journey</p>        level: user.user_metadata?.level || "beginner",

          </div>      })

      .select()

          <div className="grid gap-6 lg:grid-cols-3">      .single()

            <div className="lg:col-span-2 space-y-6">    profile = newProfile

              <QuickStats />  }

              <RecentActivity />

            </div>  if (profile?.role === "admin") {

            <div className="space-y-6">    redirect("/admin")

              <LearningPathProgress level={profile?.level || "beginner"} />  }

              <UpcomingDeadlines />

            </div>  return (

          </div>    <div className="min-h-screen bg-background">

        </main>      <DashboardHeader user={user} profile={profile} />

      </div>

    </ProtectedRoute>      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

  )        <div className="mb-8">

}          <h1 className="text-3xl font-bold text-foreground">Welcome back, {profile?.full_name || "Student"}!</h1>
          <p className="mt-2 text-muted-foreground">Continue your Machine Learning journey</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <QuickStats />
            <RecentActivity />
          </div>
          <div className="space-y-6">
            <LearningPathProgress level={profile?.level || "beginner"} />
            <UpcomingDeadlines />
          </div>
        </div>
      </main>
    </div>
  )
}
