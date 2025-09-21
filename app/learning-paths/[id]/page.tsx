import { createClient } from "@/lib/firebase/server"
import { redirect, notFound } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { LearningPathHeader } from "@/components/learning-paths/learning-path-header"
import { LearningPathModules } from "@/components/learning-paths/learning-path-modules"
import { LearningPathProgress } from "@/components/learning-paths/learning-path-progress"

interface LearningPathPageProps {
  params: Promise<{ id: string }>
}

export default async function LearningPathPage({ params }: LearningPathPageProps) {
  const { id } = await params
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

  // Get learning path details
  const { data: learningPath } = await supabase.from("learning_paths").select("*").eq("id", id).single()

  if (!learningPath) {
    notFound()
  }

  // Get user progress for this path
  const { data: userProgress } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("learning_path_id", id)
    .single()

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} profile={profile} />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <LearningPathHeader learningPath={learningPath} />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <LearningPathModules
              modules={learningPath.modules}
              completedModules={userProgress?.completed_modules || []}
              learningPathId={id}
              userId={user.id}
            />
          </div>
          <div>
            <LearningPathProgress
              progress={userProgress?.progress_percentage || 0}
              completedModules={userProgress?.completed_modules || []}
              totalModules={learningPath.modules.length}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
