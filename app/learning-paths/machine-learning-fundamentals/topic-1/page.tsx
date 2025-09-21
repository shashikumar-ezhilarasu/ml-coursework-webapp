"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { 
  BookOpen, 
  Brain, 
  Clock, 
  Code,
  Play,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Users,
  Target,
  Lightbulb,
  FileText
} from "lucide-react"
import Link from "next/link"

export default function IntroductionToMLPage() {
  const [completedSections, setCompletedSections] = useState<string[]>([])

  const sections = [
    {
      id: "what-is-ml",
      title: "What is Machine Learning?",
      duration: "15 min",
      content: `Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every task.

Key concepts:
• **Algorithm vs Model**: An algorithm is the method/procedure, while a model is the result of training an algorithm on data
• **Learning from Data**: ML systems improve their performance through experience
• **Pattern Recognition**: Finding patterns in data to make predictions or decisions
• **Automation**: Reducing human intervention in decision-making processes

Think of it like teaching a child to recognize animals - instead of describing every feature of every animal, you show them many examples until they can identify new animals on their own.`
    },
    {
      id: "history-evolution",
      title: "History and Evolution",
      duration: "20 min",
      content: `The journey of machine learning spans several decades:

**1950s-1960s: The Beginning**
• Alan Turing's "Computing Machinery and Intelligence" (1950)
• First neural network models (perceptron)
• Arthur Samuel coins the term "Machine Learning" (1959)

**1970s-1980s: Expert Systems Era**
• Rule-based systems dominate
• Backpropagation algorithm developed (1986)
• AI Winter - reduced funding and interest

**1990s-2000s: Statistical Learning**
• Support Vector Machines (SVMs)
• Random Forests
• Ensemble methods gain popularity

**2010s-Present: Deep Learning Revolution**
• Big Data availability
• GPU computing power
• Deep neural networks breakthrough
• AlexNet (2012), ResNet, Transformers (2017)
• GPT, BERT, and modern LLMs`
    },
    {
      id: "real-world-applications",
      title: "Real-world Applications",
      duration: "25 min",
      content: `Machine learning is everywhere in our daily lives:

**Recommendation Systems**
• Netflix movie suggestions
• Amazon product recommendations
• Spotify music discovery
• Social media content feeds

**Computer Vision**
• Photo tagging on social media
• Medical image analysis
• Autonomous vehicles
• Security and surveillance

**Natural Language Processing**
• Search engines (Google, Bing)
• Virtual assistants (Siri, Alexa)
• Language translation
• Chatbots and customer service

**Finance & Business**
• Credit scoring and fraud detection
• Algorithmic trading
• Market analysis and forecasting
• Customer segmentation

**Healthcare**
• Drug discovery
• Diagnostic assistance
• Personalized treatment plans
• Epidemic tracking and prediction`
    },
    {
      id: "model-vs-algorithm",
      title: "Model vs Algorithm",
      duration: "15 min",
      content: `Understanding the distinction between algorithms and models is crucial:

**Algorithm**
• The mathematical procedure or set of rules
• The "recipe" for learning from data
• Examples: Linear Regression, Decision Trees, Neural Networks
• Defines HOW to learn

**Model**
• The result of applying an algorithm to specific data
• Contains learned parameters and weights
• Ready to make predictions on new data
• The "trained chef" that can cook the dish

**Analogy: Cooking**
• Algorithm = Recipe (instructions)
• Training Data = Ingredients
• Model = Trained Chef (who has mastered the recipe)
• Prediction = Cooking a new dish

**Example: Linear Regression**
• Algorithm: y = mx + b (find best m and b)
• Training: Use data to find optimal m and b values
• Model: y = 2.5x + 1.3 (specific trained model)
• Prediction: Use this equation on new x values`
    },
    {
      id: "ml-workflow",
      title: "ML Workflow Overview",
      duration: "30 min",
      content: `The machine learning workflow follows a systematic process:

**1. Problem Definition**
• What are you trying to solve?
• What type of ML problem is it? (Classification, Regression, Clustering)
• Success metrics and evaluation criteria

**2. Data Collection & Exploration**
• Gather relevant data
• Explore data characteristics
• Identify patterns, outliers, missing values
• Data quality assessment

**3. Data Preparation**
• Clean and preprocess data
• Handle missing values
• Feature engineering and selection
• Data splitting (train/validation/test)

**4. Model Selection & Training**
• Choose appropriate algorithms
• Train models on training data
• Hyperparameter tuning
• Cross-validation

**5. Model Evaluation**
• Test on unseen data
• Compare different models
• Assess performance metrics
• Validate business impact

**6. Deployment & Monitoring**
• Deploy model to production
• Monitor performance over time
• Retrain when necessary
• A/B testing and gradual rollout`
    }
  ]

  const toggleSection = (sectionId: string) => {
    setCompletedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    )
  }

  const progressPercentage = (completedSections.length / sections.length) * 100

  const numpyBasics = `# Numpy basics: vectors, dot product, matrix multiply
import numpy as np

# Create vectors
v = np.array([1, 2, 3])
w = np.array([4, 5, 6])

# Dot product
dot_product = np.dot(v, w)
print(f'Dot product: {dot_product}')

# Matrix operations
A = np.array([[1, 2], [3, 4]])
b = np.array([5, 6])

# Matrix-vector multiplication
result = A.dot(b)
print(f'Matrix-vector product: {result}')

# Matrix properties
print(f'Matrix shape: {A.shape}')
print(f'Matrix determinant: {np.linalg.det(A)}')
`

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="max-w-4xl mx-auto p-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/learning-paths" className="hover:text-foreground">Learning Paths</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/learning-paths/machine-learning-fundamentals" className="hover:text-foreground">
            ML Fundamentals
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>Introduction to Machine Learning</span>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Introduction to Machine Learning</h1>
              <p className="text-muted-foreground">Topic 1 of 6 • Week 1</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">Beginner</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              ~1.5 hours
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Users className="h-4 w-4" />
              {sections.length} sections
            </span>
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-2">
              <span>Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          <p className="text-lg text-muted-foreground">
            Get started with the fundamentals of machine learning. Learn what ML is, its history, 
            real-world applications, and the basic workflow used in ML projects.
          </p>
        </header>

        {/* Learning Objectives */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Learning Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Understand what machine learning is and how it differs from traditional programming</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Learn about the history and evolution of machine learning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Identify real-world applications of machine learning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Distinguish between algorithms and models</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Understand the typical machine learning workflow</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Content Sections */}
        {sections.map((section, index) => (
          <Card key={section.id} className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  {section.title}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{section.duration}</Badge>
                  <Button
                    variant={completedSections.includes(section.id) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleSection(section.id)}
                  >
                    {completedSections.includes(section.id) ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Completed
                      </>
                    ) : (
                      "Mark Complete"
                    )}
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {section.content.split('\n').map((paragraph, i) => (
                  <p key={i} className="mb-3 text-sm leading-relaxed whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Hands-on Practice */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Hands-on Practice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Try this small NumPy example to get comfortable with vectors and matrix multiplication - 
              fundamental concepts you'll use throughout machine learning.
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
              <code>{numpyBasics}</code>
            </pre>
            <div className="mt-4">
              <Button size="sm" variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Run in Jupyter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Key Takeaways
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Machine learning enables computers to learn from data without explicit programming
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                The field has evolved from simple perceptrons to modern deep learning systems
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                ML applications are ubiquitous in modern technology and business
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Understanding the distinction between algorithms and models is fundamental
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Successful ML projects follow a systematic workflow from problem definition to deployment
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/learning-paths/machine-learning-fundamentals">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Course
            </Button>
          </Link>
          <Link href="/learning-paths/machine-learning-fundamentals/topic-2">
            <Button>
              Next: Types of Learning
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}