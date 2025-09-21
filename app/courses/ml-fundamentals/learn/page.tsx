"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"
import { 
  BookOpen, 
  Brain, 
  Clock, 
  Code,
  Play,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  FileText,
  Calculator,
  BarChart3,
  ChevronRight,
  ChevronLeft,
  Home,
  Network,
  Zap,
  RotateCcw,
  TrendingDown,
  Shuffle,
  Scale,
  Shield,
  Settings,
  Filter
} from "lucide-react"
import Link from "next/link"

export default function MLFundamentalsLearnPage() {
  const [currentWeek, setCurrentWeek] = useState(1)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [completedSections, setCompletedSections] = useState<string[]>([])

  // Week information for navigation
  const weeks = [
    { id: 1, title: "Introduction to Machine Learning", sectionId: "introduction" },
    { id: 2, title: "Types of Learning", sectionId: "types-of-learning" },
    { id: 3, title: "Linear Algebra & Statistics Basics", sectionId: "linear-algebra-statistics" },
    { id: 4, title: "Regression & Classification", sectionId: "regression-classification" },
    { id: 5, title: "Model Evaluation & Regularization", sectionId: "model-evaluation-regularization" },
    { id: 6, title: "Neural Networks", sectionId: "neural-networks" }
  ]

  // Navigate to next/previous week
  const navigateToWeek = (direction: 'next' | 'prev') => {
    const newWeek = direction === 'next' ? currentWeek + 1 : currentWeek - 1
    if (newWeek >= 1 && newWeek <= 6) {
      setCurrentWeek(newWeek)
      // Scroll to top when changing weeks
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
  const navSections = [
    { 
      id: "introduction", 
      title: "Introduction to Machine Learning", 
      icon: Brain,
      subsections: [
        { id: "what-is-ml", title: "What is Machine Learning?" },
        { id: "history-evolution", title: "History and Evolution" },
        { id: "real-world-applications", title: "Real-world Applications" },
        { id: "model-vs-algorithm", title: "Model vs Algorithm" },
        { id: "ml-workflow", title: "ML Workflow Overview" }
      ]
    },
    { 
      id: "types-of-learning", 
      title: "Types of Learning", 
      icon: Target,
      subsections: [
        { id: "supervised-learning", title: "Supervised Learning" },
        { id: "unsupervised-learning", title: "Unsupervised Learning" },
        { id: "semi-supervised", title: "Semi-supervised Learning" },
        { id: "reinforcement-learning", title: "Reinforcement Learning" },
        { id: "choosing-approach", title: "Choosing the Right Approach" }
      ]
    },
    { 
      id: "math-foundations", 
      title: "Linear Algebra & Statistics Basics", 
      icon: Calculator,
      subsections: [
        { id: "vectors-operations", title: "Vectors and Vector Operations" },
        { id: "matrices-operations", title: "Matrices and Matrix Operations" },
        { id: "eigenvalues-eigenvectors", title: "Eigenvalues and Eigenvectors" },
        { id: "probability-distributions", title: "Probability and Distributions" },
        { id: "statistical-foundations", title: "Statistical Foundations" }
      ]
    },
    { 
      id: "regression-classification", 
      title: "Regression & Classification", 
      icon: BarChart3,
      subsections: [
        { id: "linear-regression", title: "Linear Regression" },
        { id: "logistic-regression", title: "Logistic Regression" },
        { id: "loss-functions", title: "Loss Functions" },
        { id: "gradient-descent", title: "Gradient Descent" },
        { id: "evaluation-metrics", title: "Evaluation Metrics" }
      ]
    },
    { 
      id: "model-evaluation", 
      title: "Model Evaluation & Regularization", 
      icon: CheckCircle,
      subsections: [
        { id: "cross-validation", title: "Cross-validation" },
        { id: "bias-variance", title: "Bias-Variance Tradeoff" },
        { id: "l1-l2-regularization", title: "L1/L2 Regularization" },
        { id: "hyperparameter-tuning", title: "Hyperparameter Tuning" },
        { id: "model-selection", title: "Model Selection" }
      ]
    },
    { 
      id: "neural-networks", 
      title: "Introduction to Neural Networks", 
      icon: Brain,
      subsections: [
        { id: "feedforward-networks", title: "Feedforward Networks" },
        { id: "activation-functions", title: "Activation Functions" },
        { id: "backpropagation", title: "Backpropagation" },
        { id: "deep-learning-intuition", title: "Deep Learning Intuition" },
        { id: "neural-network-applications", title: "Neural Network Applications" }
      ]
    }
  ]

  // Calculate progress
  const totalSections = navSections.reduce((acc, section) => acc + section.subsections.length, 0)
  const progress = (completedSections.length / totalSections) * 100

  // Handle section completion
  const markSectionComplete = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId])
    }
  }

  // Function to render content for current week only
  const renderWeekContent = () => {
    switch (currentWeek) {
      case 1:
        return renderWeek1Content()
      case 2:
        return renderWeek2Content()
      case 3:
        return renderWeek3Content()
      case 4:
        return renderWeek4Content()
      case 5:
        return renderWeek5Content()
      case 6:
        return renderWeek6Content()
      default:
        return renderWeek1Content()
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="flex">
        {/* Mobile Sidebar Toggle */}
        <Button
          variant="ghost"
          size="sm"
          className="fixed top-20 left-4 z-40 lg:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>

        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-30 w-80 bg-background border-r border-border transition-transform duration-300 lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ScrollArea className="h-full pt-16">
            <div className="p-6">
              {/* Course Header */}
              <div className="mb-6">
                <Link href="/courses/ml-fundamentals" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
                  <ChevronLeft className="h-3 w-3 mr-1" />
                  Back to Course
                </Link>
                <h1 className="text-lg font-semibold text-foreground">ML Fundamentals</h1>
                <p className="text-sm text-muted-foreground">Interactive Learning Path</p>
                
                {/* Progress */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    {completedSections.length} of {totalSections} sections completed
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                {navSections.map((section, index) => {
                  const Icon = section.icon
                  const sectionCompleted = section.subsections.every(sub => completedSections.includes(sub.id))
                  
                  return (
                    <div key={section.id}>
                      <div className="flex items-center gap-2 py-2 px-3 rounded-md bg-muted/50">
                        <Icon className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium flex-1">{section.title}</span>
                        {sectionCompleted && (
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        )}
                      </div>
                      
                      {/* Subsections */}
                      <div className="ml-6 mt-1 space-y-1">
                        {section.subsections.map((subsection) => {
                          const isCurrentWeekSection = currentWeek === index + 1
                          const isCompleted = completedSections.includes(subsection.id)
                          
                          return (
                            <button
                              key={subsection.id}
                              onClick={() => {
                                setCurrentWeek(index + 1)
                                setSidebarOpen(false)
                                window.scrollTo({ top: 0, behavior: 'smooth' })
                              }}
                              className={`w-full text-left py-1.5 px-3 rounded text-xs transition-colors flex items-center justify-between ${
                                isCurrentWeekSection
                                  ? 'bg-primary/10 text-primary border-l-2 border-primary'
                                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                              }`}
                            >
                              <span>{subsection.title}</span>
                              {isCompleted && (
                                <CheckCircle className="h-3 w-3 text-green-600" />
                              )}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Quick Actions
                </h4>
                <div className="space-y-2">
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <BookOpen className="h-3 w-3 mr-2" />
                    Download PDF
                  </Button>
                  <Button size="sm" variant="outline" className="w-full justify-start">
                    <Code className="h-3 w-3 mr-2" />
                    Code Examples
                  </Button>
                  <Link href="/courses" className="block">
                    <Button size="sm" variant="outline" className="w-full justify-start">
                      <Home className="h-3 w-3 mr-2" />
                      All Courses
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-20 bg-black/50 lg:hidden" 
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-80">
          <div className="mx-auto max-w-4xl px-6 py-8 lg:px-8">
            
            {/* Hero Section */}
            <section className="mb-12 text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Machine Learning Fundamentals
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Master the core concepts, algorithms, and applications of machine learning through comprehensive lessons and hands-on examples.
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>6 weeks</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>Beginner to Intermediate</span>
                </div>
                <div className="flex items-center gap-1">
                  <Target className="h-4 w-4" />
                  <span>{totalSections} lessons</span>
                </div>
              </div>
            </section>

            {/* Course Content Sections */}
            {/* Week 1: Introduction to Machine Learning */}
            <section id="introduction" className="mb-16">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-2">Week 1</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-2">Introduction to Machine Learning</h2>
                <p className="text-muted-foreground">
                  Foundation concepts, history, and the ML workflow
                </p>
              </div>

              {/* What is Machine Learning? */}
              <div id="what-is-ml" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      What is Machine Learning?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Machine Learning (ML) is a branch of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every specific task. Instead of following pre-written instructions, ML systems improve their performance on a task through experience.
                    </p>
                    
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Key Characteristics:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Data-driven:</strong> Learns patterns from data rather than explicit rules</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Adaptive:</strong> Performance improves with more data and experience</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Predictive:</strong> Can make predictions on new, unseen data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span><strong>Automated:</strong> Reduces need for manual programming of specific rules</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Traditional Programming</h4>
                        <p className="text-sm text-muted-foreground">Data + Program → Output</p>
                        <p className="text-xs mt-2">Humans write explicit rules and algorithms</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Machine Learning</h4>
                        <p className="text-sm text-muted-foreground">Data + Output → Program</p>
                        <p className="text-xs mt-2">System learns patterns and creates its own rules</p>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('what-is-ml')}
                      variant={completedSections.includes('what-is-ml') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('what-is-ml') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* History and Evolution */}
              <div id="history-evolution" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      History and Evolution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      The journey of machine learning spans several decades, evolving from theoretical concepts to practical applications that power today's technology.
                    </p>

                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold">1940s-1950s: The Foundation</h4>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li>• Neural networks concept introduced by McCulloch and Pitts (1943)</li>
                          <li>• Alan Turing's "Computing Machinery and Intelligence" (1950)</li>
                          <li>• First neural network computer (SNARC) by Marvin Minsky (1951)</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">1960s-1970s: Early Algorithms</h4>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li>• Perceptron algorithm by Frank Rosenblatt (1957)</li>
                          <li>• K-nearest neighbors algorithm</li>
                          <li>• AI winter due to computational limitations</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold">1980s-1990s: Renaissance</h4>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li>• Backpropagation algorithm popularized</li>
                          <li>• Support Vector Machines (SVMs)</li>
                          <li>• Decision trees and ensemble methods</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold">2000s-Present: Big Data Era</h4>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li>• Deep learning breakthrough (2006)</li>
                          <li>• Big data and cloud computing</li>
                          <li>• ImageNet success (2012) and AI spring</li>
                          <li>• Transformers and Large Language Models (2017-present)</li>
                        </ul>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('history-evolution')}
                      variant={completedSections.includes('history-evolution') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('history-evolution') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Real-world Applications */}
              <div id="real-world-applications" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Real-world Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Machine learning has transformed virtually every industry, from healthcare to entertainment. Here are some of the most impactful applications:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-2">🏥 Healthcare</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Medical image analysis and diagnosis</li>
                            <li>• Drug discovery and development</li>
                            <li>• Personalized treatment plans</li>
                            <li>• Epidemic prediction and tracking</li>
                          </ul>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold text-green-700 mb-2">🏦 Finance</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Fraud detection and prevention</li>
                            <li>• Algorithmic trading</li>
                            <li>• Credit scoring and risk assessment</li>
                            <li>• Robo-advisors for investment</li>
                          </ul>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold text-purple-700 mb-2">🛒 E-commerce</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Recommendation systems</li>
                            <li>• Price optimization</li>
                            <li>• Inventory management</li>
                            <li>• Customer segmentation</li>
                          </ul>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold text-red-700 mb-2">🚗 Transportation</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Autonomous vehicles</li>
                            <li>• Route optimization</li>
                            <li>• Traffic management</li>
                            <li>• Predictive maintenance</li>
                          </ul>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold text-orange-700 mb-2">🎵 Entertainment</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Content recommendation (Netflix, Spotify)</li>
                            <li>• Game AI and procedural generation</li>
                            <li>• Content creation and editing</li>
                            <li>• Personalized user experiences</li>
                          </ul>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <h4 className="font-semibold text-teal-700 mb-2">💬 Communication</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>• Language translation</li>
                            <li>• Chatbots and virtual assistants</li>
                            <li>• Sentiment analysis</li>
                            <li>• Speech recognition</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('real-world-applications')}
                      variant={completedSections.includes('real-world-applications') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('real-world-applications') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Continue with more sections... */}
              
              {/* Model vs Algorithm */}
              <div id="model-vs-algorithm" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Model vs Algorithm
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Understanding the distinction between models and algorithms is crucial for machine learning success.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-blue-700 mb-3">🧠 Algorithm</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          A set of rules or instructions for solving a problem
                        </p>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Definition:</strong> The method or procedure</li>
                          <li>• <strong>Examples:</strong> Linear Regression, Random Forest</li>
                          <li>• <strong>Purpose:</strong> Defines how to learn from data</li>
                          <li>• <strong>Analogy:</strong> Recipe for cooking</li>
                        </ul>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-green-700 mb-3">📊 Model</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          The output of an algorithm after training on data
                        </p>
                        <ul className="text-sm space-y-1">
                          <li>• <strong>Definition:</strong> The trained result</li>
                          <li>• <strong>Examples:</strong> Specific weights, decision tree</li>
                          <li>• <strong>Purpose:</strong> Makes predictions on new data</li>
                          <li>• <strong>Analogy:</strong> The actual cooked dish</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Real Example:</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Algorithm:</strong> Linear Regression (the mathematical procedure)<br/>
                        <strong>Model:</strong> House Price = 50,000 + 100 × Square_Feet + 20,000 × Bedrooms (the specific equation learned from data)
                      </p>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('model-vs-algorithm')}
                      variant={completedSections.includes('model-vs-algorithm') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('model-vs-algorithm') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* ML Workflow */}
              <div id="ml-workflow" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-primary" />
                      ML Workflow Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Every machine learning project follows a systematic workflow. Understanding this process is crucial for successful ML implementation.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</div>
                        <div>
                          <h4 className="font-semibold">Problem Definition</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Clearly define what you want to achieve and determine if it's a classification, regression, or clustering problem.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</div>
                        <div>
                          <h4 className="font-semibold">Data Collection & Exploration</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Gather relevant data, explore its structure, identify patterns, and understand data quality issues.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</div>
                        <div>
                          <h4 className="font-semibold">Data Preprocessing</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Clean data, handle missing values, encode categorical variables, and feature engineering.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</div>
                        <div>
                          <h4 className="font-semibold">Model Selection & Training</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Choose appropriate algorithms, split data into train/validation/test sets, and train models.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">5</div>
                        <div>
                          <h4 className="font-semibold">Model Evaluation</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Assess model performance using appropriate metrics, cross-validation, and test data.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">6</div>
                        <div>
                          <h4 className="font-semibold">Deployment & Monitoring</h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            Deploy the model to production, monitor performance, and iterate based on real-world feedback.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('ml-workflow')}
                      variant={completedSections.includes('ml-workflow') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('ml-workflow') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
            </section>

            {/* Week 2: Types of Learning */}
            <section id="types-of-learning" className="mb-16">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-2">Week 2</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-2">Types of Learning</h2>
                <p className="text-muted-foreground">
                  Understanding different learning paradigms and when to use each approach
                </p>
              </div>

              {/* Supervised Learning */}
              <div id="supervised-learning" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Supervised Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Supervised learning is like learning with a teacher. The algorithm learns from input-output pairs (labeled examples) to make predictions on new, unseen data.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Key Characteristics:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Labeled Data:</strong> Training data includes both inputs and correct outputs</li>
                        <li>• <strong>Goal:</strong> Learn a mapping function from inputs to outputs</li>
                        <li>• <strong>Evaluation:</strong> Performance measured against known correct answers</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">🎯 Classification</h4>
                        <p className="text-sm text-muted-foreground mb-2">Predicting discrete categories or classes</p>
                        <div className="text-xs space-y-1">
                          <p><strong>Examples:</strong></p>
                          <p>• Email spam detection (spam/not spam)</p>
                          <p>• Image recognition (cat/dog/bird)</p>
                          <p>• Medical diagnosis (disease/healthy)</p>
                          <p>• Sentiment analysis (positive/negative)</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">📈 Regression</h4>
                        <p className="text-sm text-muted-foreground mb-2">Predicting continuous numerical values</p>
                        <div className="text-xs space-y-1">
                          <p><strong>Examples:</strong></p>
                          <p>• House price prediction</p>
                          <p>• Stock price forecasting</p>
                          <p>• Temperature prediction</p>
                          <p>• Sales volume estimation</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Popular Algorithms:</h4>
                      <div className="grid md:grid-cols-3 gap-2 text-sm">
                        <div>
                          <p className="font-medium">Linear Models:</p>
                          <p className="text-xs text-muted-foreground">Linear/Logistic Regression</p>
                        </div>
                        <div>
                          <p className="font-medium">Tree-based:</p>
                          <p className="text-xs text-muted-foreground">Decision Trees, Random Forest</p>
                        </div>
                        <div>
                          <p className="font-medium">Instance-based:</p>
                          <p className="text-xs text-muted-foreground">k-Nearest Neighbors</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('supervised-learning')}
                      variant={completedSections.includes('supervised-learning') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('supervised-learning') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Unsupervised Learning */}
              <div id="unsupervised-learning" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Unsupervised Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Unsupervised learning is like learning without a teacher. The algorithm finds hidden patterns and structures in data without knowing the "correct" answers.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Key Characteristics:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>No Labels:</strong> Training data contains only inputs, no target outputs</li>
                        <li>• <strong>Goal:</strong> Discover hidden patterns, structures, or relationships in data</li>
                        <li>• <strong>Evaluation:</strong> Often subjective, based on interpretability and usefulness</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">🔍 Clustering</h4>
                        <p className="text-sm text-muted-foreground mb-2">Group similar data points together</p>
                        <div className="text-xs space-y-1">
                          <p><strong>Examples:</strong></p>
                          <p>• Customer segmentation</p>
                          <p>• Gene sequencing</p>
                          <p>• Market research</p>
                          <p>• Image segmentation</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-orange-700 mb-2">📊 Association Rules</h4>
                        <p className="text-sm text-muted-foreground mb-2">Find relationships between different variables</p>
                        <div className="text-xs space-y-1">
                          <p><strong>Examples:</strong></p>
                          <p>• Market basket analysis</p>
                          <p>• Web usage patterns</p>
                          <p>• Recommendation systems</p>
                          <p>• Cross-selling strategies</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Popular Algorithms:</h4>
                      <div className="grid md:grid-cols-3 gap-2 text-sm">
                        <div>
                          <p className="font-medium">Clustering:</p>
                          <p className="text-xs text-muted-foreground">K-Means, Hierarchical</p>
                        </div>
                        <div>
                          <p className="font-medium">Dimensionality:</p>
                          <p className="text-xs text-muted-foreground">PCA, t-SNE</p>
                        </div>
                        <div>
                          <p className="font-medium">Association:</p>
                          <p className="text-xs text-muted-foreground">Apriori, FP-Growth</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('unsupervised-learning')}
                      variant={completedSections.includes('unsupervised-learning') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('unsupervised-learning') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Semi-supervised Learning */}
              <div id="semi-supervised" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      Semi-supervised Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Semi-supervised learning combines both labeled and unlabeled data. It's like learning with a teacher for some examples and figuring out the rest on your own.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Why Use Semi-supervised Learning?</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Cost-effective:</strong> Labeling data is expensive and time-consuming</li>
                        <li>• <strong>Abundant unlabeled data:</strong> Often easy to collect but hard to label</li>
                        <li>• <strong>Improved performance:</strong> Can outperform purely supervised methods</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">🏷️ Self-training</h4>
                        <p className="text-sm text-muted-foreground mb-2">Use confident predictions as pseudo-labels</p>
                        <div className="text-xs space-y-1">
                          <p><strong>Process:</strong></p>
                          <p>1. Train on labeled data</p>
                          <p>2. Predict unlabeled data</p>
                          <p>3. Add confident predictions</p>
                          <p>4. Retrain and repeat</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">🔗 Co-training</h4>
                        <p className="text-sm text-muted-foreground mb-2">Train multiple models on different feature sets</p>
                        <div className="text-xs space-y-1">
                          <p><strong>Applications:</strong></p>
                          <p>• Web page classification</p>
                          <p>• Natural language processing</p>
                          <p>• Multi-modal learning</p>
                          <p>• Feature-rich datasets</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('semi-supervised')}
                      variant={completedSections.includes('semi-supervised') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('semi-supervised') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Reinforcement Learning */}
              <div id="reinforcement-learning" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Reinforcement Learning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Reinforcement Learning (RL) is like learning through trial and error. An agent learns to make decisions by performing actions in an environment and receiving rewards or penalties.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Key Components:</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Agent:</strong> The learner or decision maker</li>
                        <li>• <strong>Environment:</strong> The world the agent interacts with</li>
                        <li>• <strong>Actions:</strong> What the agent can do</li>
                        <li>• <strong>Rewards:</strong> Feedback from the environment</li>
                        <li>• <strong>Policy:</strong> The agent's strategy for choosing actions</li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">🎮 Gaming</h4>
                        <p className="text-sm text-muted-foreground mb-2">AI that learns to play games</p>
                        <div className="text-xs space-y-1">
                          <p><strong>Examples:</strong></p>
                          <p>• AlphaGo (Go game)</p>
                          <p>• OpenAI Five (Dota 2)</p>
                          <p>• DeepMind StarCraft II</p>
                          <p>• Atari game playing</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">🤖 Robotics</h4>
                        <p className="text-sm text-muted-foreground mb-2">Learning to control physical systems</p>
                        <div className="text-xs space-y-1">
                          <p><strong>Applications:</strong></p>
                          <p>• Autonomous vehicles</p>
                          <p>• Robot navigation</p>
                          <p>• Manipulation tasks</p>
                          <p>• Industrial automation</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Learning Process:</h4>
                      <ol className="text-sm space-y-1">
                        <li>1. <strong>Exploration:</strong> Try different actions to see what happens</li>
                        <li>2. <strong>Exploitation:</strong> Use what you've learned to maximize rewards</li>
                        <li>3. <strong>Policy Improvement:</strong> Update strategy based on experience</li>
                        <li>4. <strong>Repeat:</strong> Continue until optimal policy is found</li>
                      </ol>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('reinforcement-learning')}
                      variant={completedSections.includes('reinforcement-learning') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('reinforcement-learning') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Choosing the Right Approach */}
              <div id="choosing-approach" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Choosing the Right Approach
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Selecting the right learning approach depends on your data, problem type, and business objectives. Here's a decision framework to guide you.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-3">Decision Framework:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">1</div>
                          <div>
                            <p className="font-medium">Do you have labeled data?</p>
                            <p className="text-sm text-muted-foreground">If yes → Supervised Learning</p>
                            <p className="text-sm text-muted-foreground">If no → Unsupervised Learning</p>
                            <p className="text-sm text-muted-foreground">If some → Semi-supervised Learning</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">2</div>
                          <div>
                            <p className="font-medium">What's your goal?</p>
                            <p className="text-sm text-muted-foreground">Predict categories → Classification</p>
                            <p className="text-sm text-muted-foreground">Predict numbers → Regression</p>
                            <p className="text-sm text-muted-foreground">Find patterns → Clustering</p>
                            <p className="text-sm text-muted-foreground">Optimal decisions → Reinforcement Learning</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium">3</div>
                          <div>
                            <p className="font-medium">Consider your constraints:</p>
                            <p className="text-sm text-muted-foreground">• Data availability and quality</p>
                            <p className="text-sm text-muted-foreground">• Computational resources</p>
                            <p className="text-sm text-muted-foreground">• Interpretability requirements</p>
                            <p className="text-sm text-muted-foreground">• Real-time processing needs</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">✅ When to Use Each Approach</h4>
                        <div className="space-y-2 text-xs">
                          <p><strong>Supervised:</strong> Email classification, price prediction</p>
                          <p><strong>Unsupervised:</strong> Customer segmentation, anomaly detection</p>
                          <p><strong>Semi-supervised:</strong> Limited labeled data scenarios</p>
                          <p><strong>Reinforcement:</strong> Game playing, robotics, optimization</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-orange-700 mb-2">⚠️ Common Pitfalls</h4>
                        <div className="space-y-2 text-xs">
                          <p><strong>Over-engineering:</strong> Using complex methods for simple problems</p>
                          <p><strong>Under-fitting:</strong> Using too simple methods for complex data</p>
                          <p><strong>Data mismatch:</strong> Training/test data from different distributions</p>
                          <p><strong>Evaluation bias:</strong> Not properly validating model performance</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('choosing-approach')}
                      variant={completedSections.includes('choosing-approach') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('choosing-approach') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
            </section>

            {/* Week 3: Math Foundations */}
            <section id="math-foundations" className="mb-16">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-2">Week 3</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-2">Linear Algebra & Statistics Basics</h2>
                <p className="text-muted-foreground">
                  Essential mathematical foundations for understanding machine learning algorithms
                </p>
              </div>

              {/* Vectors and Operations */}
              <div id="vectors-operations" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-primary" />
                      Vectors and Vector Operations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Vectors are fundamental building blocks in machine learning, representing data points, features, and model parameters as ordered lists of numbers.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">What is a Vector?</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        A vector is an ordered list of numbers. In ML, each data point is typically represented as a vector where each element corresponds to a feature.
                      </p>
                      <div className="bg-white p-2 rounded border text-center">
                        <code className="text-sm">v = [height, weight, age] = [175, 70, 25]</code>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Basic Operations</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="font-medium">Addition:</p>
                            <code className="text-xs bg-muted p-1 rounded">[1,2] + [3,4] = [4,6]</code>
                          </div>
                          <div>
                            <p className="font-medium">Scalar Multiplication:</p>
                            <code className="text-xs bg-muted p-1 rounded">2 × [1,2] = [2,4]</code>
                          </div>
                          <div>
                            <p className="font-medium">Dot Product:</p>
                            <code className="text-xs bg-muted p-1 rounded">[1,2] · [3,4] = 1×3 + 2×4 = 11</code>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">ML Applications</h4>
                        <div className="space-y-1 text-sm">
                          <p>• <strong>Feature representation:</strong> Each data point as a vector</p>
                          <p>• <strong>Distance calculation:</strong> Similarity between data points</p>
                          <p>• <strong>Linear models:</strong> Weights and bias vectors</p>
                          <p>• <strong>Neural networks:</strong> Input/output vectors</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Key Properties:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Magnitude (Length):</strong> √(x₁² + x₂² + ... + xₙ²)</p>
                          <p><strong>Unit Vector:</strong> Vector with magnitude 1</p>
                        </div>
                        <div>
                          <p><strong>Orthogonal:</strong> Vectors with dot product = 0</p>
                          <p><strong>Linearly Independent:</strong> Cannot be expressed as combination of others</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('vectors-operations')}
                      variant={completedSections.includes('vectors-operations') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('vectors-operations') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Matrices and Matrix Operations */}
              <div id="matrices-operations" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Matrices and Matrix Operations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Matrices are 2D arrays of numbers that represent datasets, transformations, and relationships in machine learning. Understanding matrix operations is crucial for ML algorithms.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">Matrix in ML Context:</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        A dataset with n samples and m features is represented as an n×m matrix where rows are samples and columns are features.
                      </p>
                      <div className="bg-white p-2 rounded border">
                        <pre className="text-xs">
{`    Height Weight Age
[   175,   70,  25  ]  ← Person 1
[   180,   75,  30  ]  ← Person 2  
[   165,   60,  22  ]  ← Person 3`}
                        </pre>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Essential Operations</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="font-medium">Matrix Multiplication:</p>
                            <p className="text-xs text-muted-foreground">A×B where columns of A = rows of B</p>
                          </div>
                          <div>
                            <p className="font-medium">Transpose:</p>
                            <p className="text-xs text-muted-foreground">Flip rows and columns (Aᵀ)</p>
                          </div>
                          <div>
                            <p className="font-medium">Inverse:</p>
                            <p className="text-xs text-muted-foreground">A⁻¹ such that A×A⁻¹ = I</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">ML Applications</h4>
                        <div className="space-y-1 text-sm">
                          <p>• <strong>Linear regression:</strong> X×w = y</p>
                          <p>• <strong>Neural networks:</strong> Layer transformations</p>
                          <p>• <strong>PCA:</strong> Covariance matrix decomposition</p>
                          <p>• <strong>Data preprocessing:</strong> Normalization, scaling</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('matrices-operations')}
                      variant={completedSections.includes('matrices-operations') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('matrices-operations') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Eigenvalues and Eigenvectors */}
              <div id="eigenvalues-eigenvectors" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Eigenvalues and Eigenvectors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Eigenvalues and eigenvectors reveal the "natural directions" of a matrix transformation and are fundamental to many ML algorithms like PCA and neural networks.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Intuitive Understanding:</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        An eigenvector is a direction that doesn't change when a matrix transformation is applied. The eigenvalue tells you how much the vector is scaled in that direction.
                      </p>
                      <div className="bg-white p-2 rounded border text-center">
                        <code className="text-sm">A×v = λ×v</code>
                        <p className="text-xs mt-1">Matrix × Eigenvector = Eigenvalue × Eigenvector</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">Key Properties</h4>
                        <div className="space-y-1 text-sm">
                          <p>• <strong>Direction preservation:</strong> Eigenvectors maintain their direction</p>
                          <p>• <strong>Scaling factor:</strong> Eigenvalues show magnitude change</p>
                          <p>• <strong>Orthogonality:</strong> Eigenvectors of symmetric matrices are orthogonal</p>
                          <p>• <strong>Ranking:</strong> Larger eigenvalues = more important directions</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">ML Applications</h4>
                        <div className="space-y-1 text-sm">
                          <p>• <strong>PCA:</strong> Find principal components (eigenvectors)</p>
                          <p>• <strong>Spectral clustering:</strong> Graph-based clustering</p>
                          <p>• <strong>PageRank:</strong> Web page ranking algorithm</p>
                          <p>• <strong>Face recognition:</strong> Eigenfaces technique</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('eigenvalues-eigenvectors')}
                      variant={completedSections.includes('eigenvalues-eigenvectors') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('eigenvalues-eigenvectors') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Probability and Distributions */}
              <div id="probability-distributions" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Probability and Distributions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Probability theory provides the mathematical framework for dealing with uncertainty in machine learning, from data generation to model predictions.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Fundamental Concepts:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Probability:</strong> P(A) = likelihood of event A</p>
                          <p><strong>Joint Probability:</strong> P(A,B) = both A and B occur</p>
                          <p><strong>Conditional:</strong> P(A|B) = A given B occurred</p>
                        </div>
                        <div>
                          <p><strong>Independence:</strong> P(A,B) = P(A)×P(B)</p>
                          <p><strong>Bayes' Rule:</strong> P(A|B) = P(B|A)×P(A)/P(B)</p>
                          <p><strong>Chain Rule:</strong> P(A,B,C) = P(A)×P(B|A)×P(C|A,B)</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Common Distributions</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="font-medium">Normal/Gaussian:</p>
                            <p className="text-xs text-muted-foreground">Bell curve, many natural phenomena</p>
                          </div>
                          <div>
                            <p className="font-medium">Bernoulli:</p>
                            <p className="text-xs text-muted-foreground">Binary outcomes (coin flip)</p>
                          </div>
                          <div>
                            <p className="font-medium">Uniform:</p>
                            <p className="text-xs text-muted-foreground">Equal probability for all outcomes</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">ML Applications</h4>
                        <div className="space-y-1 text-sm">
                          <p>• <strong>Naive Bayes:</strong> Conditional probability for classification</p>
                          <p>• <strong>Gaussian Mixture:</strong> Clustering with probability distributions</p>
                          <p>• <strong>Bayesian ML:</strong> Uncertainty quantification</p>
                          <p>• <strong>Loss functions:</strong> Maximum likelihood estimation</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('probability-distributions')}
                      variant={completedSections.includes('probability-distributions') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('probability-distributions') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Statistical Foundations */}
              <div id="statistical-foundations" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5 text-primary" />
                      Statistical Foundations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Statistics provides tools for understanding data patterns, making inferences, and validating machine learning models through hypothesis testing and confidence intervals.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Descriptive Statistics:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Central Tendency:</strong></p>
                          <p className="text-xs">• Mean: Average value</p>
                          <p className="text-xs">• Median: Middle value</p>
                          <p className="text-xs">• Mode: Most frequent value</p>
                        </div>
                        <div>
                          <p><strong>Variability:</strong></p>
                          <p className="text-xs">• Variance: Spread around mean</p>
                          <p className="text-xs">• Standard deviation: √variance</p>
                          <p className="text-xs">• Range: Max - min values</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Hypothesis Testing</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Process:</strong></p>
                          <p className="text-xs">1. Null hypothesis (H₀)</p>
                          <p className="text-xs">2. Alternative hypothesis (H₁)</p>
                          <p className="text-xs">3. Test statistic calculation</p>
                          <p className="text-xs">4. P-value and decision</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">ML Validation</h4>
                        <div className="space-y-1 text-sm">
                          <p>• <strong>A/B testing:</strong> Compare model performance</p>
                          <p>• <strong>Confidence intervals:</strong> Model uncertainty</p>
                          <p>• <strong>Statistical significance:</strong> Validate improvements</p>
                          <p>• <strong>Bootstrap sampling:</strong> Estimate distributions</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('statistical-foundations')}
                      variant={completedSections.includes('statistical-foundations') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('statistical-foundations') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

            </section>

            {/* Week 4: Regression & Classification */}
            <section id="regression-classification" className="mb-16">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-2">Week 4</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-2">Regression & Classification</h2>
                <p className="text-muted-foreground">
                  Core supervised learning algorithms and optimization techniques
                </p>
              </div>

              {/* Linear Regression */}
              <div id="linear-regression" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Linear Regression
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Linear regression is one of the simplest and most interpretable ML algorithms. It models the relationship between features and a continuous target variable using a linear equation.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">The Linear Model:</h4>
                      <div className="bg-white p-3 rounded border text-center">
                        <code className="text-lg">y = w₀ + w₁x₁ + w₂x₂ + ... + wₙxₙ</code>
                        <p className="text-sm text-muted-foreground mt-2">
                          Where: y = prediction, w = weights/coefficients, x = features, w₀ = bias/intercept
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Key Assumptions</h4>
                        <div className="space-y-1 text-sm">
                          <p>• <strong>Linearity:</strong> Relationship between features and target is linear</p>
                          <p>• <strong>Independence:</strong> Observations are independent</p>
                          <p>• <strong>Homoscedasticity:</strong> Constant variance of errors</p>
                          <p>• <strong>Normality:</strong> Errors are normally distributed</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Applications</h4>
                        <div className="space-y-1 text-sm">
                          <p>• <strong>House price prediction:</strong> Based on size, location, features</p>
                          <p>• <strong>Sales forecasting:</strong> Revenue prediction from marketing spend</p>
                          <p>• <strong>Medical research:</strong> Drug dosage optimization</p>
                          <p>• <strong>Economic modeling:</strong> GDP prediction from indicators</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Advantages & Disadvantages:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-green-700">✅ Advantages:</p>
                          <p>• Fast training and prediction</p>
                          <p>• Highly interpretable coefficients</p>
                          <p>• No hyperparameter tuning needed</p>
                          <p>• Works well with linear relationships</p>
                        </div>
                        <div>
                          <p className="font-medium text-red-700">❌ Disadvantages:</p>
                          <p>• Assumes linear relationships</p>
                          <p>• Sensitive to outliers</p>
                          <p>• Can overfit with many features</p>
                          <p>• May underfit complex patterns</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('linear-regression')}
                      variant={completedSections.includes('linear-regression') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('linear-regression') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Logistic Regression */}
              <div id="logistic-regression" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Logistic Regression
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Logistic regression extends linear regression to classification problems by using the sigmoid function to output probabilities between 0 and 1.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">The Sigmoid Function:</h4>
                      <div className="bg-white p-3 rounded border text-center">
                        <code className="text-lg">P(y=1) = 1 / (1 + e^(-z))</code>
                        <p className="text-sm text-muted-foreground mt-2">
                          Where: z = w₀ + w₁x₁ + w₂x₂ + ... + wₙxₙ
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Sigmoid maps any real number to a value between 0 and 1
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Binary Classification</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Decision Rule:</strong></p>
                          <p className="text-xs">• If P(y=1) ≥ 0.5 → Predict Class 1</p>
                          <p className="text-xs">• If P(y=1) &lt; 0.5 → Predict Class 0</p>
                          <p className="text-xs mt-2"><strong>Threshold can be adjusted</strong> based on business needs</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Applications</h4>
                        <div className="space-y-1 text-sm">
                          <p>• <strong>Email spam detection:</strong> Spam vs. not spam</p>
                          <p>• <strong>Medical diagnosis:</strong> Disease vs. healthy</p>
                          <p>• <strong>Marketing:</strong> Customer will buy vs. won't buy</p>
                          <p>• <strong>Finance:</strong> Loan approval vs. rejection</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Multinomial Extension:</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        For multi-class problems, logistic regression can be extended using:
                      </p>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <p>• <strong>One-vs-Rest:</strong> Train one classifier per class</p>
                        <p>• <strong>Softmax:</strong> Generalization of sigmoid for multiple classes</p>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('logistic-regression')}
                      variant={completedSections.includes('logistic-regression') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('logistic-regression') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Loss Functions */}
              <div id="loss-functions" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Loss Functions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Loss functions measure how well our model's predictions match the actual targets. They guide the learning process by providing a signal for optimization.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-blue-700 mb-2">📈 Regression Losses</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-medium">Mean Squared Error (MSE):</p>
                            <code className="text-xs bg-white p-1 rounded block">MSE = (1/n) × Σ(yᵢ - ŷᵢ)²</code>
                            <p className="text-xs text-muted-foreground">Penalizes large errors heavily</p>
                          </div>
                          <div>
                            <p className="font-medium">Mean Absolute Error (MAE):</p>
                            <code className="text-xs bg-white p-1 rounded block">MAE = (1/n) × Σ|yᵢ - ŷᵢ|</code>
                            <p className="text-xs text-muted-foreground">More robust to outliers</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-purple-700 mb-2">🎯 Classification Losses</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-medium">Binary Cross-entropy:</p>
                            <code className="text-xs bg-white p-1 rounded block">BCE = -[y×log(ŷ) + (1-y)×log(1-ŷ)]</code>
                            <p className="text-xs text-muted-foreground">For binary classification</p>
                          </div>
                          <div>
                            <p className="font-medium">Categorical Cross-entropy:</p>
                            <code className="text-xs bg-white p-1 rounded block">CCE = -Σ yᵢ × log(ŷᵢ)</code>
                            <p className="text-xs text-muted-foreground">For multi-class classification</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Choosing the Right Loss Function:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Consider:</strong></p>
                          <p>• Problem type (regression vs classification)</p>
                          <p>• Outlier sensitivity requirements</p>
                          <p>• Computational efficiency needs</p>
                          <p>• Business cost of different error types</p>
                        </div>
                        <div>
                          <p><strong>Guidelines:</strong></p>
                          <p>• MSE: Standard for regression, sensitive to outliers</p>
                          <p>• MAE: Robust regression, equal penalty for all errors</p>
                          <p>• Cross-entropy: Standard for classification problems</p>
                          <p>• Custom: Design based on business requirements</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('loss-functions')}
                      variant={completedSections.includes('loss-functions') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('loss-functions') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Gradient Descent */}
              <div id="gradient-descent" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingDown className="h-5 w-5 text-primary" />
                      Gradient Descent
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Gradient descent is the optimization algorithm that finds the minimum of the loss function by iteratively moving in the direction of steepest descent.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">The Algorithm:</h4>
                      <div className="bg-white p-3 rounded border">
                        <div className="space-y-2 text-sm">
                          <p><strong>1. Initialize:</strong> Start with random weights w</p>
                          <p><strong>2. Compute gradient:</strong> ∇w = ∂Loss/∂w</p>
                          <p><strong>3. Update weights:</strong> w = w - α × ∇w</p>
                          <p><strong>4. Repeat:</strong> Until convergence</p>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                          Where α (alpha) is the learning rate
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Batch Gradient Descent</h4>
                        <div className="space-y-1 text-sm">
                          <p>• Uses entire dataset per update</p>
                          <p>• Stable but slow for large datasets</p>
                          <p>• Guaranteed convergence to global minimum (convex functions)</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Stochastic GD</h4>
                        <div className="space-y-1 text-sm">
                          <p>• Uses one sample per update</p>
                          <p>• Fast but noisy updates</p>
                          <p>• Can escape local minima</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-orange-700 mb-2">Mini-batch GD</h4>
                        <div className="space-y-1 text-sm">
                          <p>• Uses small batches (32-256 samples)</p>
                          <p>• Balance of speed and stability</p>
                          <p>• Most commonly used in practice</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Learning Rate Selection:</h4>
                      <div className="grid md:grid-cols-3 gap-2 text-sm">
                        <div className="p-2 bg-red-50 border rounded">
                          <p className="font-medium text-red-700">Too Large</p>
                          <p className="text-xs">Overshoots minimum, oscillates</p>
                        </div>
                        <div className="p-2 bg-green-50 border rounded">
                          <p className="font-medium text-green-700">Just Right</p>
                          <p className="text-xs">Converges smoothly and quickly</p>
                        </div>
                        <div className="p-2 bg-yellow-50 border rounded">
                          <p className="font-medium text-yellow-700">Too Small</p>
                          <p className="text-xs">Converges very slowly</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('gradient-descent')}
                      variant={completedSections.includes('gradient-descent') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('gradient-descent') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Evaluation Metrics */}
              <div id="evaluation-metrics" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Evaluation Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Evaluation metrics help us understand how well our model performs. Different metrics are suitable for different types of problems and business requirements.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-blue-700 mb-3">📈 Regression Metrics</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-medium">R² Score (Coefficient of Determination)</p>
                            <p className="text-xs text-muted-foreground">Proportion of variance explained by the model (0-1, higher is better)</p>
                          </div>
                          <div>
                            <p className="font-medium">RMSE (Root Mean Square Error)</p>
                            <p className="text-xs text-muted-foreground">Square root of MSE, same units as target variable</p>
                          </div>
                          <div>
                            <p className="font-medium">MAPE (Mean Absolute Percentage Error)</p>
                            <p className="text-xs text-muted-foreground">Percentage-based metric, easy to interpret</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-purple-700 mb-3">🎯 Classification Metrics</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-medium">Accuracy</p>
                            <p className="text-xs text-muted-foreground">Correct predictions / Total predictions</p>
                          </div>
                          <div>
                            <p className="font-medium">Precision & Recall</p>
                            <p className="text-xs text-muted-foreground">Precision: TP/(TP+FP), Recall: TP/(TP+FN)</p>
                          </div>
                          <div>
                            <p className="font-medium">F1-Score</p>
                            <p className="text-xs text-muted-foreground">Harmonic mean of precision and recall</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">Confusion Matrix (Binary Classification):</h4>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div></div>
                        <div className="text-center font-medium">Predicted 0</div>
                        <div className="text-center font-medium">Predicted 1</div>
                        <div className="font-medium">Actual 0</div>
                        <div className="bg-white p-2 border rounded text-center">TN</div>
                        <div className="bg-white p-2 border rounded text-center">FP</div>
                        <div className="font-medium">Actual 1</div>
                        <div className="bg-white p-2 border rounded text-center">FN</div>
                        <div className="bg-white p-2 border rounded text-center">TP</div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        TN=True Negative, FP=False Positive, FN=False Negative, TP=True Positive
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Choosing the Right Metric:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Balanced datasets:</strong> Accuracy is usually fine</p>
                          <p><strong>Imbalanced datasets:</strong> Use precision, recall, F1-score, or AUC</p>
                          <p><strong>Medical diagnosis:</strong> High recall (catch all diseases)</p>
                        </div>
                        <div>
                          <p><strong>Spam detection:</strong> High precision (avoid false positives)</p>
                          <p><strong>Regression:</strong> R² for explained variance, RMSE for error magnitude</p>
                          <p><strong>Business KPIs:</strong> Align metrics with business objectives</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('evaluation-metrics')}
                      variant={completedSections.includes('evaluation-metrics') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('evaluation-metrics') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

            </section>

            {/* Week 5: Model Evaluation & Regularization */}
            <section id="model-evaluation-regularization" className="mb-16">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-2">Week 5</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-2">Model Evaluation & Regularization</h2>
                <p className="text-muted-foreground">
                  Advanced techniques for robust model evaluation and preventing overfitting
                </p>
              </div>

              {/* Cross Validation */}
              <div id="cross-validation" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shuffle className="h-5 w-5 text-primary" />
                      Cross-Validation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Cross-validation is a technique for assessing model generalization by training and validating on different subsets of data, providing more reliable performance estimates.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">K-Fold Cross-Validation Process:</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>1.</strong> Split data into k equal-sized folds</p>
                        <p><strong>2.</strong> For each fold k:</p>
                        <p className="ml-4">• Use fold k as validation set</p>
                        <p className="ml-4">• Use remaining k-1 folds as training set</p>
                        <p className="ml-4">• Train model and record performance</p>
                        <p><strong>3.</strong> Average performance across all k folds</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">5-Fold CV</h4>
                        <div className="space-y-1 text-sm">
                          <p>• Most commonly used</p>
                          <p>• Good balance of bias and variance</p>
                          <p>• 80% train, 20% validation each fold</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">10-Fold CV</h4>
                        <div className="space-y-1 text-sm">
                          <p>• More training data per fold</p>
                          <p>• Lower bias, higher variance</p>
                          <p>• 90% train, 10% validation each fold</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-orange-700 mb-2">Leave-One-Out</h4>
                        <div className="space-y-1 text-sm">
                          <p>• Each sample as validation once</p>
                          <p>• Maximum training data usage</p>
                          <p>• Computationally expensive</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Benefits of Cross-Validation:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p>• <strong>Reliable estimates:</strong> Less dependent on train/test split</p>
                          <p>• <strong>Better data usage:</strong> Every sample used for both training and validation</p>
                          <p>• <strong>Variance estimation:</strong> See how stable model performance is</p>
                        </div>
                        <div>
                          <p>• <strong>Model comparison:</strong> Compare different algorithms fairly</p>
                          <p>• <strong>Hyperparameter tuning:</strong> Find optimal parameters robustly</p>
                          <p>• <strong>Overfitting detection:</strong> Large variance indicates overfitting</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('cross-validation')}
                      variant={completedSections.includes('cross-validation') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('cross-validation') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Bias-Variance Tradeoff */}
              <div id="bias-variance" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="h-5 w-5 text-primary" />
                      Bias-Variance Tradeoff
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      The bias-variance tradeoff is a fundamental concept that explains the relationship between model complexity, generalization, and prediction error.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">The Decomposition:</h4>
                      <div className="bg-white p-3 rounded border text-center">
                        <code className="text-lg">Total Error = Bias² + Variance + Irreducible Error</code>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-red-700 mb-2">High Bias</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Characteristics:</strong></p>
                          <p>• Underfitting</p>
                          <p>• Too simple model</p>
                          <p>• Poor performance on training data</p>
                          <p>• Similar performance on train/test</p>
                          <p><strong>Examples:</strong> Linear regression for non-linear data</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-blue-700 mb-2">High Variance</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Characteristics:</strong></p>
                          <p>• Overfitting</p>
                          <p>• Too complex model</p>
                          <p>• Good training performance</p>
                          <p>• Poor test performance</p>
                          <p><strong>Examples:</strong> Deep decision trees, polynomial features</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-green-700 mb-2">Sweet Spot</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Characteristics:</strong></p>
                          <p>• Balanced complexity</p>
                          <p>• Good generalization</p>
                          <p>• Minimal total error</p>
                          <p>• Stable across datasets</p>
                          <p><strong>Goal:</strong> Find optimal model complexity</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Managing the Tradeoff:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Reduce Bias:</strong></p>
                          <p>• Increase model complexity</p>
                          <p>• Add more features</p>
                          <p>• Reduce regularization</p>
                          <p>• Use ensemble methods</p>
                        </div>
                        <div>
                          <p><strong>Reduce Variance:</strong></p>
                          <p>• Decrease model complexity</p>
                          <p>• Add regularization</p>
                          <p>• Increase training data</p>
                          <p>• Use cross-validation</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('bias-variance')}
                      variant={completedSections.includes('bias-variance') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('bias-variance') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* L1/L2 Regularization */}
              <div id="l1-l2-regularization" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      L1/L2 Regularization
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Regularization techniques add penalty terms to the loss function to prevent overfitting by constraining model complexity.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-blue-700 mb-3">L1 Regularization (Lasso)</h4>
                        <div className="bg-white p-3 rounded border text-center mb-3">
                          <code className="text-sm">Loss = Original Loss + λ × Σ|wᵢ|</code>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p><strong>Effect:</strong> Drives some weights to exactly zero</p>
                          <p><strong>Result:</strong> Automatic feature selection</p>
                          <p><strong>Use when:</strong> Many irrelevant features</p>
                          <p><strong>Advantage:</strong> Sparse models, interpretable</p>
                          <p><strong>Disadvantage:</strong> Can be unstable with correlated features</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-green-700 mb-3">L2 Regularization (Ridge)</h4>
                        <div className="bg-white p-3 rounded border text-center mb-3">
                          <code className="text-sm">Loss = Original Loss + λ × Σwᵢ²</code>
                        </div>
                        <div className="space-y-2 text-sm">
                          <p><strong>Effect:</strong> Shrinks weights towards zero</p>
                          <p><strong>Result:</strong> Reduces model complexity</p>
                          <p><strong>Use when:</strong> All features are somewhat relevant</p>
                          <p><strong>Advantage:</strong> Stable, handles correlated features</p>
                          <p><strong>Disadvantage:</strong> Doesn't perform feature selection</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Elastic Net (L1 + L2):</h4>
                      <div className="bg-white p-3 rounded border text-center mb-3">
                        <code className="text-sm">Loss = Original Loss + λ₁×Σ|wᵢ| + λ₂×Σwᵢ²</code>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Combines benefits:</strong></p>
                          <p>• Feature selection from L1</p>
                          <p>• Stability from L2</p>
                        </div>
                        <div>
                          <p><strong>Best for:</strong></p>
                          <p>• High-dimensional data</p>
                          <p>• Correlated features with some irrelevant ones</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Choosing Regularization Parameter (λ):</h4>
                      <div className="grid md:grid-cols-3 gap-2 text-sm">
                        <div className="p-2 bg-red-50 border rounded">
                          <p className="font-medium text-red-700">λ = 0</p>
                          <p className="text-xs">No regularization, may overfit</p>
                        </div>
                        <div className="p-2 bg-green-50 border rounded">
                          <p className="font-medium text-green-700">λ optimal</p>
                          <p className="text-xs">Best bias-variance tradeoff</p>
                        </div>
                        <div className="p-2 bg-yellow-50 border rounded">
                          <p className="font-medium text-yellow-700">λ too large</p>
                          <p className="text-xs">Underfitting, high bias</p>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Use cross-validation to find optimal λ value
                      </p>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('l1-l2-regularization')}
                      variant={completedSections.includes('l1-l2-regularization') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('l1-l2-regularization') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Hyperparameter Tuning */}
              <div id="hyperparameter-tuning" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      Hyperparameter Tuning
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Hyperparameter tuning is the process of finding optimal configuration values that control the learning process and are not learned from data.
                    </p>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Grid Search</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Method:</strong> Exhaustive search over parameter grid</p>
                          <p><strong>Pros:</strong> Guaranteed to find best combination in grid</p>
                          <p><strong>Cons:</strong> Computationally expensive</p>
                          <p><strong>Best for:</strong> Small parameter spaces</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Random Search</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Method:</strong> Random sampling from parameter distributions</p>
                          <p><strong>Pros:</strong> More efficient for high dimensions</p>
                          <p><strong>Cons:</strong> No guarantee of finding global optimum</p>
                          <p><strong>Best for:</strong> Large parameter spaces</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Bayesian Optimization</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Method:</strong> Uses probabilistic model to guide search</p>
                          <p><strong>Pros:</strong> Efficient, learns from previous evaluations</p>
                          <p><strong>Cons:</strong> More complex to implement</p>
                          <p><strong>Best for:</strong> Expensive function evaluations</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">Common Hyperparameters to Tune:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>All Models:</strong></p>
                          <p>• Regularization strength (λ)</p>
                          <p>• Learning rate (α)</p>
                          <p>• Number of iterations/epochs</p>
                        </div>
                        <div>
                          <p><strong>Model-Specific:</strong></p>
                          <p>• Tree depth (Random Forest)</p>
                          <p>• Number of neighbors (KNN)</p>
                          <p>• Kernel parameters (SVM)</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Best Practices:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p>• <strong>Use nested CV:</strong> Separate hyperparameter selection from model evaluation</p>
                          <p>• <strong>Start simple:</strong> Tune most important parameters first</p>
                          <p>• <strong>Log scale:</strong> For parameters that vary by orders of magnitude</p>
                        </div>
                        <div>
                          <p>• <strong>Early stopping:</strong> Monitor validation performance</p>
                          <p>• <strong>Domain knowledge:</strong> Use reasonable parameter ranges</p>
                          <p>• <strong>Computational budget:</strong> Balance search time vs. performance</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('hyperparameter-tuning')}
                      variant={completedSections.includes('hyperparameter-tuning') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('hyperparameter-tuning') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Model Selection */}
              <div id="model-selection" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Filter className="h-5 w-5 text-primary" />
                      Model Selection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Model selection involves choosing the best algorithm and configuration for your specific problem based on systematic comparison and evaluation.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Model Selection Process:</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>1. Problem Definition:</strong> Classification, regression, clustering?</p>
                        <p><strong>2. Data Analysis:</strong> Size, dimensions, quality, missing values</p>
                        <p><strong>3. Algorithm Candidates:</strong> Select suitable algorithms to compare</p>
                        <p><strong>4. Cross-Validation:</strong> Fair comparison with same data splits</p>
                        <p><strong>5. Statistical Testing:</strong> Determine if differences are significant</p>
                        <p><strong>6. Final Evaluation:</strong> Test chosen model on holdout set</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Selection Criteria</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Performance Metrics:</strong></p>
                          <p>• Accuracy, F1-score, AUC, RMSE</p>
                          <p><strong>Computational Efficiency:</strong></p>
                          <p>• Training time, prediction time</p>
                          <p><strong>Memory Requirements:</strong></p>
                          <p>• Model size, RAM usage</p>
                          <p><strong>Interpretability:</strong></p>
                          <p>• Business requirements, explainability</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Common Comparisons</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Linear vs. Non-linear:</strong></p>
                          <p>• Linear regression vs. polynomial regression</p>
                          <p><strong>Simple vs. Complex:</strong></p>
                          <p>• Logistic regression vs. neural networks</p>
                          <p><strong>Tree-based:</strong></p>
                          <p>• Decision tree vs. Random Forest vs. XGBoost</p>
                          <p><strong>Instance-based:</strong></p>
                          <p>• KNN vs. SVM</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">No Free Lunch Theorem:</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        No single algorithm performs best across all possible problems. The choice depends on:
                      </p>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <p>• Data characteristics (size, noise, dimensionality)</p>
                        <p>• Problem complexity (linear vs. non-linear relationships)</p>
                        <p>• Business constraints (time, interpretability, accuracy)</p>
                        <p>• Available computational resources</p>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Practical Guidelines:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Start Simple:</strong> Begin with linear models, then increase complexity</p>
                          <p><strong>Consider Ensemble:</strong> Combine multiple models for better performance</p>
                        </div>
                        <div>
                          <p><strong>Domain Expertise:</strong> Leverage knowledge of the problem domain</p>
                          <p><strong>Iterate:</strong> Model selection is an iterative process</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('model-selection')}
                      variant={completedSections.includes('model-selection') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('model-selection') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

            </section>

            {/* Week 6: Neural Networks */}
            <section id="neural-networks" className="mb-16">
              <div className="text-center mb-8">
                <Badge variant="outline" className="mb-2">Week 6</Badge>
                <h2 className="text-3xl font-bold text-foreground mb-2">Neural Networks</h2>
                <p className="text-muted-foreground">
                  Introduction to neural networks and deep learning fundamentals
                </p>
              </div>

              {/* Feedforward Networks */}
              <div id="feedforward-networks" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Network className="h-5 w-5 text-primary" />
                      Feedforward Networks
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Feedforward neural networks are the foundation of deep learning, where information flows in one direction from input through hidden layers to output.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Basic Architecture:</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Input Layer:</strong> Receives features (no computation)</p>
                        <p><strong>Hidden Layer(s):</strong> Performs transformations z = W×x + b</p>
                        <p><strong>Output Layer:</strong> Produces final predictions</p>
                        <p><strong>Information Flow:</strong> Input → Hidden → Output (no cycles)</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Single Hidden Layer</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Also called:</strong> Shallow neural network</p>
                          <p><strong>Capability:</strong> Universal function approximator</p>
                          <p><strong>Limitations:</strong> May need very wide layers</p>
                          <p><strong>Use case:</strong> Simple non-linear problems</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Multiple Hidden Layers</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Also called:</strong> Deep neural network</p>
                          <p><strong>Capability:</strong> Learn hierarchical features</p>
                          <p><strong>Advantages:</strong> More expressive with fewer parameters</p>
                          <p><strong>Use case:</strong> Complex pattern recognition</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Mathematical Foundation:</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Forward Pass:</strong></p>
                        <div className="bg-white p-2 rounded border">
                          <code className="text-xs">
                            h₁ = σ(W₁×x + b₁)<br/>
                            h₂ = σ(W₂×h₁ + b₂)<br/>
                            ŷ = σ(W₃×h₂ + b₃)
                          </code>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Where σ is the activation function, W are weight matrices, b are bias vectors
                        </p>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('feedforward-networks')}
                      variant={completedSections.includes('feedforward-networks') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('feedforward-networks') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Activation Functions */}
              <div id="activation-functions" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      Activation Functions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Activation functions introduce non-linearity into neural networks, enabling them to learn complex patterns and relationships in data.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-blue-700 mb-3">Classic Functions</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-medium">Sigmoid: σ(x) = 1/(1+e⁻ˣ)</p>
                            <p className="text-xs">Range: (0,1), Smooth, but vanishing gradients</p>
                          </div>
                          <div>
                            <p className="font-medium">Tanh: tanh(x) = (eˣ-e⁻ˣ)/(eˣ+e⁻ˣ)</p>
                            <p className="text-xs">Range: (-1,1), Zero-centered, still vanishing gradients</p>
                          </div>
                          <div>
                            <p className="font-medium">Step: f(x) = 1 if x≥0, else 0</p>
                            <p className="text-xs">Not differentiable, historical importance</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-green-700 mb-3">Modern Functions</h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-medium">ReLU: f(x) = max(0,x)</p>
                            <p className="text-xs">Fast, no vanishing gradient, but can "die"</p>
                          </div>
                          <div>
                            <p className="font-medium">Leaky ReLU: f(x) = max(0.01x,x)</p>
                            <p className="text-xs">Prevents dying ReLU problem</p>
                          </div>
                          <div>
                            <p className="font-medium">Swish: f(x) = x × σ(x)</p>
                            <p className="text-xs">Self-gated, smooth, often outperforms ReLU</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Why Non-linearity Matters:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Without activation functions:</strong></p>
                          <p>• Network = single linear transformation</p>
                          <p>• Cannot learn XOR function</p>
                          <p>• Limited to linear decision boundaries</p>
                        </div>
                        <div>
                          <p><strong>With activation functions:</strong></p>
                          <p>• Can approximate any continuous function</p>
                          <p>• Learn complex decision boundaries</p>
                          <p>• Enable deep architectures</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Choosing Activation Functions:</h4>
                      <div className="grid md:grid-cols-3 gap-2 text-sm">
                        <div>
                          <p><strong>Hidden Layers:</strong></p>
                          <p>• ReLU (default choice)</p>
                          <p>• Leaky ReLU (if ReLU dies)</p>
                          <p>• Swish (for better performance)</p>
                        </div>
                        <div>
                          <p><strong>Binary Classification:</strong></p>
                          <p>• Sigmoid (outputs probabilities)</p>
                        </div>
                        <div>
                          <p><strong>Multi-class:</strong></p>
                          <p>• Softmax (probability distribution)</p>
                          <p><strong>Regression:</strong></p>
                          <p>• Linear/no activation</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('activation-functions')}
                      variant={completedSections.includes('activation-functions') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('activation-functions') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Backpropagation */}
              <div id="backpropagation" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <RotateCcw className="h-5 w-5 text-primary" />
                      Backpropagation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Backpropagation is the algorithm that enables neural networks to learn by efficiently computing gradients and updating weights through the chain rule.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">The Algorithm (simplified):</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>1. Forward Pass:</strong> Compute predictions and loss</p>
                        <p><strong>2. Backward Pass:</strong> Compute gradients layer by layer</p>
                        <p><strong>3. Chain Rule:</strong> ∂Loss/∂w = ∂Loss/∂output × ∂output/∂w</p>
                        <p><strong>4. Update Weights:</strong> w = w - α × ∂Loss/∂w</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Forward Pass</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Purpose:</strong> Compute network output</p>
                          <p><strong>Process:</strong></p>
                          <p>• Feed input through each layer</p>
                          <p>• Apply weights, biases, activations</p>
                          <p>• Store intermediate values</p>
                          <p>• Compute final loss</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Backward Pass</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Purpose:</strong> Compute gradients</p>
                          <p><strong>Process:</strong></p>
                          <p>• Start from output layer</p>
                          <p>• Propagate gradients backward</p>
                          <p>• Use chain rule at each layer</p>
                          <p>• Update all parameters</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-red-700 mb-2">Vanishing Gradient Problem:</h4>
                      <div className="space-y-2 text-sm">
                        <p><strong>Issue:</strong> Gradients become very small in deep networks</p>
                        <p><strong>Cause:</strong> Multiplying many small derivatives (chain rule)</p>
                        <p><strong>Effect:</strong> Early layers learn very slowly</p>
                        <p><strong>Solutions:</strong></p>
                        <div className="ml-4">
                          <p>• Use ReLU activations (vs sigmoid/tanh)</p>
                          <p>• Proper weight initialization (Xavier, He)</p>
                          <p>• Batch normalization</p>
                          <p>• Skip connections (ResNet)</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Key Insights:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p>• <strong>Automatic Differentiation:</strong> Modern frameworks handle gradient computation</p>
                          <p>• <strong>Computational Graph:</strong> Represents operations for gradient flow</p>
                        </div>
                        <div>
                          <p>• <strong>Memory Trade-off:</strong> Store forward values for backward pass</p>
                          <p>• <strong>Batch Processing:</strong> Compute gradients over multiple samples</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('backpropagation')}
                      variant={completedSections.includes('backpropagation') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('backpropagation') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Deep Learning Intuition */}
              <div id="deep-learning-intuition" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="h-5 w-5 text-primary" />
                      Deep Learning Intuition
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Deep learning leverages multiple layers to automatically learn hierarchical representations, mimicking how humans process complex information.
                    </p>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">Hierarchical Feature Learning:</h4>
                      <div className="space-y-3 text-sm">
                        <div className="grid md:grid-cols-3 gap-2">
                          <div className="p-2 bg-white border rounded">
                            <p className="font-medium text-blue-700">Layer 1 (Low-level)</p>
                            <p className="text-xs">Edges, corners, basic shapes</p>
                          </div>
                          <div className="p-2 bg-white border rounded">
                            <p className="font-medium text-green-700">Layer 2 (Mid-level)</p>
                            <p className="text-xs">Textures, patterns, parts</p>
                          </div>
                          <div className="p-2 bg-white border rounded">
                            <p className="font-medium text-orange-700">Layer 3 (High-level)</p>
                            <p className="text-xs">Objects, concepts, semantics</p>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Each layer builds upon representations from previous layers
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Why Deep Networks Work</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Representation Learning:</strong> Automatically discover relevant features</p>
                          <p><strong>Compositional Structure:</strong> Complex concepts from simple building blocks</p>
                          <p><strong>End-to-end Learning:</strong> Optimize entire pipeline jointly</p>
                          <p><strong>Universal Approximation:</strong> Can model any function given enough capacity</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Key Advantages</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>No Manual Feature Engineering:</strong> Network learns optimal features</p>
                          <p><strong>Transfer Learning:</strong> Pre-trained features can be reused</p>
                          <p><strong>Scalability:</strong> Performance improves with more data</p>
                          <p><strong>Versatility:</strong> Same principles work across domains</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">When to Use Deep Learning:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p><strong>Good Fit:</strong></p>
                          <p>• Large amounts of data available</p>
                          <p>• Complex patterns (images, text, speech)</p>
                          <p>• High-dimensional inputs</p>
                          <p>• End-to-end optimization beneficial</p>
                        </div>
                        <div>
                          <p><strong>Consider Alternatives:</strong></p>
                          <p>• Small datasets (&lt; 1000 samples)</p>
                          <p>• Simple, interpretable relationships</p>
                          <p>• Limited computational resources</p>
                          <p>• Need for interpretability</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('deep-learning-intuition')}
                      variant={completedSections.includes('deep-learning-intuition') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('deep-learning-intuition') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Neural Network Applications */}
              <div id="neural-network-applications" className="mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-primary" />
                      Neural Network Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Neural networks have revolutionized many fields by enabling breakthroughs in pattern recognition, natural language processing, and complex decision making.
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-blue-700 mb-3">🖼️ Computer Vision</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Image Classification:</strong> Medical diagnosis, quality control</p>
                          <p><strong>Object Detection:</strong> Autonomous vehicles, security systems</p>
                          <p><strong>Face Recognition:</strong> Authentication, social media tagging</p>
                          <p><strong>Style Transfer:</strong> Artistic filters, content creation</p>
                          <p><strong>Medical Imaging:</strong> Cancer detection, diagnostic assistance</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-green-700 mb-3">💬 Natural Language Processing</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Machine Translation:</strong> Google Translate, multilingual communication</p>
                          <p><strong>Sentiment Analysis:</strong> Social media monitoring, review analysis</p>
                          <p><strong>Chatbots:</strong> Customer service, virtual assistants</p>
                          <p><strong>Text Generation:</strong> Content creation, code completion</p>
                          <p><strong>Question Answering:</strong> Search engines, educational tools</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-purple-700 mb-3">🎵 Audio & Speech</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Speech Recognition:</strong> Voice assistants, transcription services</p>
                          <p><strong>Music Generation:</strong> Compositional tools, artistic creation</p>
                          <p><strong>Audio Classification:</strong> Genre recognition, sound detection</p>
                          <p><strong>Noise Reduction:</strong> Audio enhancement, communications</p>
                          <p><strong>Voice Synthesis:</strong> Text-to-speech, voice cloning</p>
                        </div>
                      </div>

                      <div className="p-4 border rounded-lg bg-muted/50">
                        <h4 className="font-semibold text-orange-700 mb-3">🎮 Game & Control</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Game AI:</strong> AlphaGo, chess engines, NPC behavior</p>
                          <p><strong>Robotics:</strong> Motion planning, manipulation control</p>
                          <p><strong>Autonomous Systems:</strong> Self-driving cars, drones</p>
                          <p><strong>Recommendation:</strong> Netflix, Spotify, e-commerce</p>
                          <p><strong>Trading:</strong> Algorithmic trading, risk assessment</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Emerging Applications:</h4>
                      <div className="grid md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <p><strong>Scientific Discovery:</strong></p>
                          <p>• Drug discovery</p>
                          <p>• Protein folding prediction</p>
                          <p>• Climate modeling</p>
                        </div>
                        <div>
                          <p><strong>Creative AI:</strong></p>
                          <p>• Art generation</p>
                          <p>• Music composition</p>
                          <p>• Content creation</p>
                        </div>
                        <div>
                          <p><strong>Edge AI:</strong></p>
                          <p>• Mobile applications</p>
                          <p>• IoT devices</p>
                          <p>• Real-time processing</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted/50 border p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">Success Factors:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p>• <strong>Large Datasets:</strong> Millions of labeled examples</p>
                          <p>• <strong>Computational Power:</strong> GPUs, specialized hardware</p>
                          <p>• <strong>Algorithmic Advances:</strong> Better architectures, training techniques</p>
                        </div>
                        <div>
                          <p>• <strong>Transfer Learning:</strong> Reuse of pre-trained models</p>
                          <p>• <strong>Open Source:</strong> Frameworks like PyTorch, TensorFlow</p>
                          <p>• <strong>Cloud Computing:</strong> Accessible high-performance computing</p>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => markSectionComplete('neural-network-applications')}
                      variant={completedSections.includes('neural-network-applications') ? 'default' : 'outline'}
                      className="w-full"
                    >
                      {completedSections.includes('neural-network-applications') ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Completed
                        </>
                      ) : (
                        'Mark as Complete'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </div>

            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
              <Button 
                variant="outline" 
                disabled={currentWeek <= 1}
                onClick={() => navigateToWeek('prev')}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous Week
              </Button>
              <span className="text-sm text-muted-foreground">
                Week {currentWeek} of 6 • {weeks.find(w => w.id === currentWeek)?.title}
              </span>
              <Button 
                disabled={currentWeek >= 6}
                onClick={() => navigateToWeek('next')}
              >
                Next Week
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}