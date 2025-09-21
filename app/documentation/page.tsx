"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  BookOpen, 
  Brain, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Cpu, 
  Database, 
  Code,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Menu,
  X,
  FileText,
  Target,
  Book,
  ExternalLink,
  Lightbulb
} from "lucide-react"
import Link from "next/link"

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Navigation sections
  const navSections = [
    { id: "overview", title: "Overview", icon: BookOpen },
    { id: "introduction-to-ml", title: "What is Machine Learning?", icon: Brain },
    { id: "importance", title: "Why ML is Important", icon: Target },
    { id: "how-machines-learn", title: "How Machines Learn", icon: BarChart3 },
    { id: "types-of-ml", title: "Types of ML", icon: Target },
    { id: "benefits", title: "Benefits of ML", icon: Lightbulb },
    { id: "challenges", title: "Challenges & Considerations", icon: FileText },
    { id: "applications", title: "Real-World Applications", icon: Brain },
    { id: "getting-started", title: "Getting Started", icon: Target },
    { id: "learning-paths", title: "Learning Paths", icon: Brain },
    { id: "prerequisites", title: "Prerequisites", icon: CheckCircle },
    { id: "resources", title: "Resources", icon: Zap }
  ]

  // Handle active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navSections.map(section => document.getElementById(section.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navSections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setSidebarOpen(false)
    }
  }

  const learningPaths = [
    {
      title: "Machine Learning Fundamentals",
      description: "Start your ML journey with core concepts and mathematical foundations",
      level: "Beginner",
      duration: "4-6 weeks",
      icon: Brain,
      topics: [
        "Introduction to Machine Learning",
        "Types of Learning (Supervised, Unsupervised, Reinforcement)",
        "Linear Algebra & Statistics Basics",
        "Data Preprocessing & Feature Engineering",
        "Model Evaluation Metrics",
        "Overfitting & Underfitting"
      ],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Supervised Learning",
      description: "Master classification and regression algorithms",
      level: "Beginner to Intermediate",
      duration: "6-8 weeks",
      icon: BarChart3,
      topics: [
        "Linear & Logistic Regression",
        "Decision Trees & Random Forests",
        "Support Vector Machines (SVM)",
        "Naive Bayes Classifier",
        "k-Nearest Neighbors (k-NN)",
        "Ensemble Methods (Boosting, Bagging)"
      ],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      title: "Deep Learning & Neural Networks",
      description: "Build and train deep neural networks for complex problems",
      level: "Intermediate to Advanced",
      duration: "8-10 weeks",
      icon: Cpu,
      topics: [
        "Perceptrons & Multi-layer Networks",
        "Backpropagation & Gradient Descent",
        "Convolutional Neural Networks (CNNs)",
        "Recurrent Neural Networks (RNNs & LSTMs)",
        "Attention Mechanisms & Transformers",
        "Generative Adversarial Networks (GANs)"
      ],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      title: "Computer Vision",
      description: "Process and analyze visual data using ML techniques",
      level: "Advanced",
      duration: "6-8 weeks",
      icon: Eye,
      topics: [
        "Image Processing Fundamentals",
        "Feature Extraction (SIFT, HOG, ORB)",
        "Object Detection (YOLO, R-CNN)",
        "Image Classification & Recognition",
        "Semantic & Instance Segmentation",
        "Face Recognition & Biometrics"
      ],
      color: "bg-red-500/10 text-red-600 border-red-200"
    }
  ]

  const prerequisites = [
    {
      category: "Mathematics",
      skills: [
        "Linear Algebra (Vectors, Matrices, Eigenvalues)",
        "Calculus (Derivatives, Chain Rule)",
        "Statistics & Probability",
        "Discrete Mathematics"
      ]
    },
    {
      category: "Programming",
      skills: [
        "Python Programming",
        "NumPy & Pandas for Data Manipulation",
        "Matplotlib & Seaborn for Visualization",
        "Basic understanding of algorithms"
      ]
    },
    {
      category: "Tools & Frameworks",
      skills: [
        "Jupyter Notebooks",
        "Scikit-learn",
        "TensorFlow or PyTorch",
        "Git version control"
      ]
    }
  ]

  const resources = [
    {
      type: "Books",
      items: [
        "Hands-On Machine Learning by Aurélien Géron",
        "Pattern Recognition and Machine Learning by Christopher Bishop",
        "The Elements of Statistical Learning by Hastie, Tibshirani, and Friedman",
        "Deep Learning by Ian Goodfellow, Yoshua Bengio, and Aaron Courville"
      ]
    },
    {
      type: "Online Courses",
      items: [
        "Andrew Ng's Machine Learning Course (Coursera)",
        "Fast.ai Practical Deep Learning",
        "CS229 Machine Learning (Stanford)",
        "Deep Learning Specialization (Coursera)"
      ]
    },
    {
      type: "Practical Projects",
      items: [
        "House Price Prediction (Regression)",
        "Image Classification with CNNs",
        "Sentiment Analysis of Movie Reviews",
        "Recommendation System"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-20 left-4 z-40">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-background/80 backdrop-blur-sm"
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`
          fixed top-16 left-0 z-30 h-[calc(100vh-4rem)] w-64 transform bg-background/95 backdrop-blur-sm border-r border-border
          transition-transform duration-300 ease-in-out lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <ScrollArea className="h-full px-4 py-6">
            <nav className="space-y-2">
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Documentation
                </h3>
              </div>
              
              {navSections.map((section) => {
                const Icon = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left
                      ${activeSection === section.id 
                        ? 'bg-primary/10 text-primary border-l-2 border-primary' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }
                    `}
                  >
                    <Icon className="h-4 w-4 flex-shrink-0" />
                    <span>{section.title}</span>
                  </button>
                )
              })}
            </nav>
            
            {/* Quick Links */}
            <div className="mt-8">
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Quick Links
              </h4>
              <div className="space-y-2">
                <Link 
                  href="/courses" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="h-3 w-3" />
                  Browse Courses
                </Link>
                <Link 
                  href="/learning-paths" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Brain className="h-3 w-3" />
                  Learning Paths
                </Link>
                {/* AUTH LINK COMMENTED OUT FOR NOW
                <Link 
                  href="/auth/sign-up" 
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-3 w-3" />
                  Get Started
                </Link>
                */}
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
        <main className="flex-1 lg:ml-64">
          {/* Hero Section */}
          <section id="overview" className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <div className="mb-8 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Machine Learning Documentation
                </div>
                
                <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                  Your Complete Guide to{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Machine Learning
                  </span>
                </h1>
                
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  From fundamentals to advanced topics, this comprehensive guide will take you through your entire ML journey.
                  Learn at your own pace with structured learning paths, practical examples, and hands-on projects.
                </p>
                
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button 
                    onClick={() => scrollToSection('getting-started')}
                    size="lg"
                    className="flex items-center"
                  >
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('prerequisites')}
                    variant="outline" 
                    size="lg"
                  >
                    Prerequisites
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8">
            {/* Introduction to ML Section */}
            <section id="introduction-to-ml" className="mb-20">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    What is Machine Learning?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Machine Learning (ML) is the study of algorithms and statistical models that computer systems use to perform tasks by relying on patterns and inference rather than explicit instructions. ML allows systems to improve their performance on a task over time with more data.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Importance Section */}
            <section id="importance" className="mb-20">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Why Machine Learning is Important
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Handling Complex & Unstructured Data:</strong> Tasks like image recognition, natural language processing, speech recognition which are very hard to manually program rules for.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Adaptivity:</strong> ML systems can improve as they get more data, or when environments change.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Automation of Repetitive Tasks:</strong> Tasks that are time-consuming or error-prone when done manually can often be automated (spam detection, recommendation systems).
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Personalisation:</strong> Tailoring experiences to individual users (recommendations, adaptive interfaces).
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Scale:</strong> Ability to process large datasets and extract patterns which humans can't see at scale.
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* How Machines Learn Section */}
            <section id="how-machines-learn" className="mb-20">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    How Machines "Learn" — Core Components
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">1</span>
                      <span>Data collection & preprocessing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">2</span>
                      <span>Algorithms / model selection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">3</span>
                      <span>Training</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">4</span>
                      <span>Evaluation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">5</span>
                      <span>Feedback / iteration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">6</span>
                      <span>Deployment & monitoring</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </section>

            {/* Types of ML Section */}
            <section id="types-of-ml" className="mb-20">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Types of Machine Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="border-l-4 border-primary pl-4">
                      <div className="font-semibold text-primary">Supervised Learning</div>
                      <p className="text-sm text-muted-foreground mt-1">Training with labeled data. Tasks include classification and regression.</p>
                    </li>
                    <li className="border-l-4 border-secondary pl-4">
                      <div className="font-semibold text-secondary-foreground">Unsupervised Learning</div>
                      <p className="text-sm text-muted-foreground mt-1">Working with unlabeled data. Discovering structure like clustering, association rules.</p>
                    </li>
                    <li className="border-l-4 border-accent pl-4">
                      <div className="font-semibold text-accent-foreground">Reinforcement Learning</div>
                      <p className="text-sm text-muted-foreground mt-1">Training agents to take actions in an environment to maximize rewards.</p>
                    </li>
                    <li className="border-l-4 border-muted pl-4">
                      <div className="font-semibold">Semi-Supervised & Self-Supervised Learning</div>
                      <p className="text-sm text-muted-foreground mt-1">Combines labeled and unlabeled data to improve learning; used when labels are expensive.</p>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Benefits Section */}
            <section id="benefits" className="mb-20">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Benefits of Machine Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Machine Learning offers:</p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Data-driven decision making</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Efficiency & automation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Personalization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Innovation and new product opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Challenges Section */}
            <section id="challenges" className="mb-20">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Challenges & Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Data quality and bias</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Overfitting / underfitting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Interpretability & explainability</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Privacy & security concerns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Computational cost and scalability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Applications Section */}
            <section id="applications" className="mb-20">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    Real-World Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-primary">Healthcare</div>
                        <p className="text-sm text-muted-foreground">Diagnosis via medical imaging, predictive analytics</p>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Finance</div>
                        <p className="text-sm text-muted-foreground">Fraud detection, risk scoring</p>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Retail / E-Commerce</div>
                        <p className="text-sm text-muted-foreground">Recommendation systems, demand forecasting</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="font-semibold text-primary">Transportation & Logistics</div>
                        <p className="text-sm text-muted-foreground">Route optimization, supply chain improvements</p>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">Social Media / Entertainment</div>
                        <p className="text-sm text-muted-foreground">Content recommendation, sentiment analysis</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Getting Started Section */}
            <section id="getting-started" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Getting Started</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Begin your machine learning journey with the right foundation
                </p>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Set Your Goals</h3>
                    <p className="text-sm text-muted-foreground">Define what you want to achieve with machine learning</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Check Prerequisites</h3>
                    <p className="text-sm text-muted-foreground">Ensure you have the necessary background knowledge</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Brain className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Choose a Path</h3>
                    <p className="text-sm text-muted-foreground">Select a learning path that matches your level</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-16" />

            {/* Learning Paths Section */}
            <section id="learning-paths" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Learning Paths</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Structured curricula designed to take you from beginner to expert
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {learningPaths.map((path, index) => (
                  <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <path.icon className="h-8 w-8 text-primary" />
                        <Badge variant="secondary" className={path.color}>
                          {path.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{path.title}</CardTitle>
                      <CardDescription>{path.description}</CardDescription>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {path.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4" />
                          {path.topics.length} topics
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-foreground">Topics Covered:</h4>
                        <ul className="space-y-1">
                          {path.topics.slice(0, 3).map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              {topic}
                            </li>
                          ))}
                          {path.topics.length > 3 && (
                            <li className="text-sm text-muted-foreground ml-5">
                              +{path.topics.length - 3} more topics...
                            </li>
                          )}
                        </ul>
                      </div>
                      <Button className="w-full mt-6" variant="outline">
                        <Link href={`/courses/${path.title.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                          Start Path
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="my-16" />

            {/* Prerequisites Section */}
            <section id="prerequisites" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Prerequisites</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Essential knowledge and skills to get started with machine learning
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {prerequisites.map((prereq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        {prereq.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {prereq.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="my-16" />

            {/* Resources Section */}
            <section id="resources" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Additional Resources</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Curated books, courses, and projects to supplement your learning
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {resources.map((resource, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        {resource.type}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {resource.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-sm">
                            <ArrowRight className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Getting Started CTA */}
            <section className="text-center">
              <Card className="bg-gradient-to-r from-primary/10 via-transparent to-accent/10 border-primary/20">
                <CardContent className="pt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your ML Journey?</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Join thousands of students already learning machine learning with our comprehensive platform.
                    Get access to courses, interactive labs, and personalized learning paths.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    {/* AUTH BUTTON COMMENTED OUT FOR NOW
                    <Button asChild size="lg">
                      <Link href="/auth/sign-up" className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Join Now - Free
                      </Link>
                    </Button>
                    */}
                    <Button asChild size="lg">
                      <Link href="/courses" className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Explore Courses
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/learning-paths">Learning Paths</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}