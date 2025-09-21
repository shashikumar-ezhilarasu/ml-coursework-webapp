import { Navbar } from "@/components/navbar"
import { CourseGrid } from "@/components/courses/course-grid"
import { CourseFilters } from "@/components/courses/course-filters"

export default function CoursesPage() {
  // Mock data for public viewing
  const mockCourses = [
    {
      id: "ml-fundamentals",
      title: "Machine Learning Fundamentals",
      description: "Start your ML journey with core concepts and mathematical foundations",
      level: "Beginner",
      created_at: "2024-01-01"
    },
    {
      id: "supervised-learning",
      title: "Supervised Learning",
      description: "Master classification and regression algorithms",
      level: "Intermediate", 
      created_at: "2024-01-02"
    },
    {
      id: "deep-learning",
      title: "Deep Learning & Neural Networks",
      description: "Build and train deep neural networks for complex problems",
      level: "Advanced",
      created_at: "2024-01-03"
    }
  ]

  const mockUser = null
  const mockProfile = null

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Machine Learning Courses</h1>
          <p className="mt-2 text-muted-foreground">Comprehensive ML curriculum designed for students</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64">
            <CourseFilters />
          </aside>
          <div className="flex-1">
            <CourseGrid courses={mockCourses} />
          </div>
        </div>
      </main>
    </div>
  )
}
