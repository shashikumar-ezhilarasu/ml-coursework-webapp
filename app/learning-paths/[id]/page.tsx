import { notFound } from "next/navigation"
import { LearningPathHeader } from "@/components/learning-paths/learning-path-header"
import { LearningPathModules } from "@/components/learning-paths/learning-path-modules"
import { LearningPathProgress } from "@/components/learning-paths/learning-path-progress"
import { Navbar } from "@/components/navbar"

interface LearningPathPageProps {
  params: Promise<{ id: string }>
}

export default async function LearningPathPage({ params }: LearningPathPageProps) {
  const { id } = await params

  // Mock data for public viewing
  const mockLearningPaths = {
    "1": {
      id: "1",
      title: "Machine Learning Fundamentals",
      description: "Start your ML journey with core concepts and mathematical foundations",
      level: "Beginner",
      modules: [
        { id: "1", title: "Introduction to ML", completed: false, duration: "1 week", topics: ["What is ML?", "Types of ML", "Applications"] },
        { id: "2", title: "Types of Learning", completed: false, duration: "1 week", topics: ["Supervised", "Unsupervised", "Reinforcement"] },
        { id: "3", title: "Linear Algebra & Statistics", completed: false, duration: "2 weeks", topics: ["Vectors", "Matrices", "Probability"] },
        { id: "4", title: "Regression & Classification", completed: false, duration: "2 weeks", topics: ["Linear Regression", "Logistic Regression"] },
        { id: "5", title: "Model Evaluation", completed: false, duration: "1 week", topics: ["Cross-validation", "Metrics"] },
        { id: "6", title: "Neural Networks Intro", completed: false, duration: "2 weeks", topics: ["Perceptrons", "Backpropagation"] }
      ]
    },
    "machine-learning-fundamentals": {
      id: "machine-learning-fundamentals",
      title: "Machine Learning Fundamentals",
      description: "Start your ML journey with core concepts and mathematical foundations",
      level: "Beginner",
      modules: [
        { id: "1", title: "Introduction to ML", completed: false, duration: "1 week", topics: ["What is ML?", "Types of ML", "Applications"] },
        { id: "2", title: "Types of Learning", completed: false, duration: "1 week", topics: ["Supervised", "Unsupervised", "Reinforcement"] },
        { id: "3", title: "Linear Algebra & Statistics", completed: false, duration: "2 weeks", topics: ["Vectors", "Matrices", "Probability"] },
        { id: "4", title: "Regression & Classification", completed: false, duration: "2 weeks", topics: ["Linear Regression", "Logistic Regression"] },
        { id: "5", title: "Model Evaluation", completed: false, duration: "1 week", topics: ["Cross-validation", "Metrics"] },
        { id: "6", title: "Neural Networks Intro", completed: false, duration: "2 weeks", topics: ["Perceptrons", "Backpropagation"] }
      ]
    }
  }

  const learningPath = mockLearningPaths[id as keyof typeof mockLearningPaths]

  if (!learningPath) {
    notFound()
  }

  // Mock user progress
  const userProgress = {
    progress_percentage: 0,
    completed_modules: []
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <LearningPathHeader learningPath={learningPath} />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <LearningPathModules
              modules={learningPath.modules}
              completedModules={userProgress?.completed_modules || []}
              learningPathId={id}
            />
          </div>
          <div>
            <LearningPathProgress
              progress={userProgress?.progress_percentage || 0}
              completedModules={userProgress?.completed_modules || []}
              totalModules={learningPath.modules.length}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
