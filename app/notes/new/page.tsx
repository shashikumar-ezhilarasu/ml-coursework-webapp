import { createClient } from "@/lib/firebase/server"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { NoteEditor } from "@/components/notes/note-editor"

export default async function NewNotePage() {
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

  // Get courses for dropdown
  const { data: courses } = await supabase.from("courses").select("id, title").order("title")

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} profile={profile} />

      <main className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Create New Note</h1>
          <p className="mt-2 text-muted-foreground">Organize your ML learning with personal notes</p>
        </div>

        <NoteEditor courses={courses || []} />
      </main>
    </div>
  )
}
