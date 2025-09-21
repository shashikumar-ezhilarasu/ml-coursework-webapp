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
      syllabus: [
        { id: 1, title: "Introduction to Machine Learning", description: "Overview of ML concepts", week: 1 },
        { id: 2, title: "Types of Learning", description: "Supervised vs Unsupervised", week: 2 },
        { id: 3, title: "Linear Algebra Basics", description: "Mathematical foundations", week: 3 },
        { id: 4, title: "Regression & Classification", description: "Core algorithms", week: 4 },
        { id: 5, title: "Model Evaluation", description: "Metrics and validation", week: 5 },
        { id: 6, title: "Neural Networks Intro", description: "Basic neural networks", week: 6 }
      ]
    },
    "supervised-learning": {
      id: "supervised-learning", 
      title: "Supervised Learning",
      description: "Master classification and regression algorithms",
      level: "Intermediate",
      created_at: "2024-01-02",
      duration: "6-8 weeks",
      modules: 8,
      syllabus: [
        { id: 1, title: "Linear & Logistic Regression", description: "Foundation algorithms", week: 1 },
        { id: 2, title: "Decision Trees", description: "Tree-based models", week: 2 },
        { id: 3, title: "Random Forests", description: "Ensemble methods", week: 3 },
        { id: 4, title: "Support Vector Machines", description: "SVM algorithms", week: 4 },
        { id: 5, title: "Naive Bayes", description: "Probabilistic classifiers", week: 5 },
        { id: 6, title: "k-Nearest Neighbors", description: "Instance-based learning", week: 6 },
        { id: 7, title: "Ensemble Methods", description: "Boosting and bagging", week: 7 },
        { id: 8, title: "Model Selection", description: "Choosing the right model", week: 8 }
      ]
    },
    "deep-learning": {
      id: "deep-learning",
      title: "Deep Learning & Neural Networks",
      description: "Build and train deep neural networks for complex problems", 
      level: "Advanced",
      created_at: "2024-01-03",
      duration: "8-10 weeks",
      modules: 10,
      syllabus: [
        { id: 1, title: "Perceptrons & Multi-layer Networks", description: "Basic neural architectures", week: 1 },
        { id: 2, title: "Backpropagation", description: "Training neural networks", week: 2 },
        { id: 3, title: "CNNs", description: "Convolutional neural networks", week: 3 },
        { id: 4, title: "RNNs & LSTMs", description: "Recurrent networks", week: 4 },
        { id: 5, title: "Attention Mechanisms", description: "Attention in deep learning", week: 5 },
        { id: 6, title: "Transformers", description: "Transformer architecture", week: 6 },
        { id: 7, title: "GANs", description: "Generative adversarial networks", week: 7 },
        { id: 8, title: "Transfer Learning", description: "Leveraging pre-trained models", week: 8 },
        { id: 9, title: "Model Optimization", description: "Improving performance", week: 9 },
        { id: 10, title: "Deployment", description: "Deploying deep learning models", week: 10 }
      ]
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
