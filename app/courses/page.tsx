import { createClient } from "@/lib/firebase/server"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { CourseGrid } from "@/components/courses/course-grid"
import { CourseFilters } from "@/components/courses/course-filters"

export default async function CoursesPage() {
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

  // Get all courses
  const { data: courses } = await supabase.from("courses").select("*").order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} profile={profile} />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Machine Learning Courses</h1>
          <p className="mt-2 text-muted-foreground">Comprehensive ML curriculum designed for SRM Ramapuram students</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64">
            <CourseFilters />
          </aside>
          <div className="flex-1">
            <CourseGrid courses={courses || []} />
          </div>
        </div>
      </main>
    </div>
  )
}
