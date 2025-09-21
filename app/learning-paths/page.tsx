import { createClient } from "@/lib/firebase/server"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { LearningPathsHeader } from "@/components/learning-paths/learning-paths-header"
import { LearningPathsGrid } from "@/components/learning-paths/learning-paths-grid"
import { RecommendedPaths } from "@/components/learning-paths/recommended-paths"

export default async function LearningPathsPage() {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  // Get user profile
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", user.id).single()

  // Get all learning paths
  const { data: learningPaths } = await supabase
    .from("learning_paths")
    .select("*")
    .order("created_at", { ascending: false })

  // Get user progress
  const { data: userProgress } = await supabase
    .from("user_progress")
    .select("*, learning_paths(*)")
    .eq("user_id", user.id)

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} profile={profile} />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <LearningPathsHeader />

        <div className="mt-8 space-y-8">
          <RecommendedPaths userLevel={profile?.level || "beginner"} learningPaths={learningPaths || []} />
          <LearningPathsGrid learningPaths={learningPaths || []} userProgress={userProgress || []} />
        </div>
      </main>
    </div>
  )
}
