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
  Home
} from "lucide-react"
import Link from "next/link"

export default function MLFundamentalsLearnPage() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [completedSections, setCompletedSections] = useState<string[]>([])

  // Comprehensive course navigation based on the syllabus
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

  // Handle active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const allSubsections = navSections.flatMap(section => 
        section.subsections.map(sub => ({ ...sub, parentId: section.id }))
      )
      const sections = allSubsections.map(section => document.getElementById(section.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(allSubsections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
                          const isActive = activeSection === subsection.id
                          const isCompleted = completedSections.includes(subsection.id)
                          
                          return (
                            <button
                              key={subsection.id}
                              onClick={() => {
                                document.getElementById(subsection.id)?.scrollIntoView({ behavior: 'smooth' })
                                setSidebarOpen(false)
                              }}
                              className={`w-full text-left py-1.5 px-3 rounded text-xs transition-colors flex items-center justify-between ${
                                isActive
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
                      <div className="p-4 border rounded-lg border-blue-200 bg-blue-50/50">
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

                      <div className="p-4 border rounded-lg border-green-200 bg-green-50/50">
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

                    <div className="bg-blue-50/50 border border-blue-200 p-4 rounded-lg">
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

              {/* Add more sections following the same pattern... */}
              
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-border">
              <Button variant="outline" disabled>
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Section 1 of 6 • Introduction to Machine Learning
              </span>
              <Button 
                onClick={() => {
                  document.getElementById('types-of-learning')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>

          </div>
        </main>
      </div>
    </div>
  )
}