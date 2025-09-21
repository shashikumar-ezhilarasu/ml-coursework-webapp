import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
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
  
  // Mock course data based on ID
  const courseData = {
    "ml-fundamentals": {
      id: "ml-fundamentals",
      title: "Machine Learning Fundamentals",
      description: "Start your ML journey with core concepts and mathematical foundations",
      level: "Beginner",
      created_at: "2024-01-01",
      duration: "4-6 weeks",
      modules: 6,
      syllabus: `Introduction to Machine Learning
Types of Learning: Supervised vs Unsupervised  
Linear Algebra Basics: Vectors and Matrices
Regression & Classification Algorithms
Model Evaluation and Validation
Neural Networks Introduction`
    },
    "supervised-learning": {
      id: "supervised-learning", 
      title: "Supervised Learning",
      description: "Master classification and regression algorithms",
      level: "Intermediate",
      created_at: "2024-01-02",
      duration: "6-8 weeks",
      modules: 8,
      syllabus: `Linear & Logistic Regression Fundamentals
Decision Trees and Tree-based Models
Random Forests and Ensemble Methods
Support Vector Machines (SVM)
Naive Bayes Classification
k-Nearest Neighbors Algorithm
Advanced Ensemble Methods
Model Selection and Hyperparameter Tuning`
    },
    "deep-learning": {
      id: "deep-learning",
      title: "Deep Learning & Neural Networks",
      description: "Build and train deep neural networks for complex problems", 
      level: "Advanced",
      created_at: "2024-01-03",
      duration: "8-10 weeks",
      modules: 10,
      syllabus: `Perceptrons & Multi-layer Networks
Backpropagation Algorithm
Convolutional Neural Networks (CNNs)
Recurrent Neural Networks (RNNs & LSTMs)
Attention Mechanisms and Transformers
Generative Adversarial Networks (GANs)
Transfer Learning Techniques
Model Optimization and Deployment
Advanced Deep Learning Architectures
Real-world Applications and Case Studies`
    }
  }

  const course = courseData[id as keyof typeof courseData]

  if (!course) {
    notFound()
  }

  // Mock materials and videos
  const materials: any[] = []
  const videos: any[] = []

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

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
            <CourseMaterials courseId={id} />
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
