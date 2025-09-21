import { createClient } from "@/lib/firebase/server"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { NotesHeader } from "@/components/notes/notes-header"
import { NotesGrid } from "@/components/notes/notes-grid"
import { NotesFilters } from "@/components/notes/notes-filters"

export default async function NotesPage() {
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

  // Get user notes
  const { data: notes } = await supabase
    .from("user_notes")
    .select("*, courses(title)")
    .eq("user_id", user.id)
    .order("updated_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} profile={profile} />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <NotesHeader />

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <aside className="lg:w-64">
            <NotesFilters />
          </aside>
          <div className="flex-1">
            <NotesGrid notes={notes || []} />
          </div>
        </div>
      </main>
    </div>
  )
}
