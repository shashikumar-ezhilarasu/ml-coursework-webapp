import { Navbar } from "@/components/navbar"
import { LearningPathsHeader } from "@/components/learning-paths/learning-paths-header"
import { LearningPathsGrid } from "@/components/learning-paths/learning-paths-grid"
import { RecommendedPaths } from "@/components/learning-paths/recommended-paths"

export default function LearningPathsPage() {
  // Mock data for public viewing
  const mockLearningPaths = [
    {
      id: "1",
      title: "Machine Learning Fundamentals",
      description: "Start your ML journey with core concepts and mathematical foundations",
      level: "Beginner",
      modules: [
        { id: "1", title: "Introduction to ML" },
        { id: "2", title: "Types of Learning" },
        { id: "3", title: "Linear Algebra & Statistics" },
        { id: "4", title: "Regression & Classification" },
        { id: "5", title: "Model Evaluation" },
        { id: "6", title: "Neural Networks Intro" }
      ]
    },
    {
      id: "2", 
      title: "Supervised Learning",
      description: "Master classification and regression algorithms",
      level: "Intermediate",
      modules: [
        { id: "1", title: "Linear & Logistic Regression" },
        { id: "2", title: "Decision Trees" },
        { id: "3", title: "Random Forests" },
        { id: "4", title: "Support Vector Machines" },
        { id: "5", title: "Naive Bayes" },
        { id: "6", title: "k-Nearest Neighbors" },
        { id: "7", title: "Ensemble Methods" },
        { id: "8", title: "Model Selection" }
      ]
    },
    {
      id: "3",
      title: "Deep Learning & Neural Networks", 
      description: "Build and train deep neural networks for complex problems",
      level: "Advanced",
      modules: [
        { id: "1", title: "Perceptrons & Multi-layer Networks" },
        { id: "2", title: "Backpropagation" },
        { id: "3", title: "CNNs" },
        { id: "4", title: "RNNs & LSTMs" },
        { id: "5", title: "Attention Mechanisms" },
        { id: "6", title: "Transformers" },
        { id: "7", title: "GANs" },
        { id: "8", title: "Transfer Learning" },
        { id: "9", title: "Model Optimization" },
        { id: "10", title: "Deployment" }
      ]
    }
  ]

  const mockUserProgress: any[] = []

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <LearningPathsHeader />

        <div className="mt-8 space-y-8">
          <RecommendedPaths userLevel="beginner" learningPaths={mockLearningPaths} />
          <LearningPathsGrid learningPaths={mockLearningPaths} userProgress={mockUserProgress} />
        </div>
      </main>
    </div>
  )
}
