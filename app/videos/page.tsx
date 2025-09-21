import { createClient } from "@/lib/firebase/server"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { VideosHeader } from "@/components/videos/videos-header"
import { VideosGrid } from "@/components/videos/videos-grid"
import { VideoFilters } from "@/components/videos/video-filters"
import { FeaturedVideos } from "@/components/videos/featured-videos"

export default async function VideosPage() {
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

  // Get all videos with course information
  const { data: videos } = await supabase
    .from("youtube_videos")
    .select("*, courses(title)")
    .order("created_at", { ascending: false })

  // Get featured videos (first 3)
  const featuredVideos = videos?.slice(0, 3) || []
  const allVideos = videos || []

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} profile={profile} />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <VideosHeader />

        <div className="mt-8 space-y-8">
          <FeaturedVideos videos={featuredVideos} />

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64">
              <VideoFilters />
            </aside>
            <div className="flex-1">
              <VideosGrid videos={allVideos} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
