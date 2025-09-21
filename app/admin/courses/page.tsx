import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/firebase/server"
import { AdminCoursesManager } from "@/components/admin/admin-courses-manager"

export default async function AdminCoursesPage() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  // Check if user is admin
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()

  if (!profile || profile.role !== "admin") {
    redirect("/dashboard")
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminCoursesManager />
    </div>
  )
}
