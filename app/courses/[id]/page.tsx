import { createClient } from "@/lib/firebase/server"
import { redirect, notFound } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { CourseHeader } from "@/components/courses/course-header"
import { CourseSyllabus } from "@/components/courses/course-syllabus"
import { CourseMaterials } from "@/components/courses/course-materials"
import { CourseVideos } from "@/components/courses/course-videos"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CoursePageProps {
  params: Promise<{ id: string }>
}

export default async function CoursePage({ params }: CoursePageProps) {
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

  // Get course details
  const { data: course } = await supabase.from("courses").select("*").eq("id", id).single()

  if (!course) {
    notFound()
  }

  // Get course materials
  const { data: materials } = await supabase
    .from("course_materials")
    .select("*")
    .eq("course_id", id)
    .order("created_at", { ascending: false })

  // Get course videos
  const { data: videos } = await supabase
    .from("youtube_videos")
    .select("*")
    .eq("course_id", id)
    .order("created_at", { ascending: false })

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader user={user} profile={profile} />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <CourseHeader course={course} />

        <Tabs defaultValue="overview" className="mt-8">
          <TabsList className="grid w-full grid-cols-4 bg-muted">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="prose prose-invert max-w-none">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Course Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                </div>
              </div>
              <div>
                <CourseSyllabus syllabus={course.syllabus} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="materials" className="mt-6">
            <CourseMaterials materials={materials || []} />
          </TabsContent>

          <TabsContent value="videos" className="mt-6">
            <CourseVideos videos={videos || []} />
          </TabsContent>

          <TabsContent value="syllabus" className="mt-6">
            <CourseSyllabus syllabus={course.syllabus} detailed />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
