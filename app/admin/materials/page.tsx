import { redirect } from "next/navigation"
import { createServerClient } from "@/lib/firebase/server"
import { AdminMaterialsManager } from "@/components/admin/admin-materials-manager"

export default async function AdminMaterialsPage() {
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
      <AdminMaterialsManager />
    </div>
  )
}
