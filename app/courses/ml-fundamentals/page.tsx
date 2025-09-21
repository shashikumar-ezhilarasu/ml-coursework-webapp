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
  ChevronRight
} from "lucide-react"
import Link from "next/link"

export default function MLFundamentalsPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const syllabus = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      summary: 'What is ML, history, real-world applications, model vs algorithm, workflow (data → model → evaluation → deployment).',
      length: '1 week',
      icon: Brain,
      topics: [
        'What is Machine Learning?',
        'History and Evolution',
        'Real-world Applications',
        'Model vs Algorithm',
        'ML Workflow Overview'
      ]
    },
    {
      id: 2,
      title: 'Types of Learning',
      summary: 'Supervised, unsupervised, semi-supervised, and reinforcement learning — with examples and when to use each.',
      length: '1 week',
      icon: Target,
      topics: [
        'Supervised Learning',
        'Unsupervised Learning',
        'Semi-supervised Learning',
        'Reinforcement Learning',
        'Choosing the Right Approach'
      ]
    },
    {
      id: 3,
      title: 'Linear Algebra & Statistics Basics',
      summary: 'Vectors, matrices, matrix multiplication, eigenvalues; probability, distributions, mean/variance, hypothesis testing.',
      length: '1 week',
      icon: Calculator,
      topics: [
        'Vectors and Vector Operations',
        'Matrices and Matrix Operations',
        'Eigenvalues and Eigenvectors',
        'Probability and Distributions',
        'Statistical Foundations'
      ]
    },
    {
      id: 4,
      title: 'Regression & Classification',
      summary: 'Linear regression, logistic regression, loss functions, gradient descent, evaluation metrics (MSE, accuracy, precision, recall).',
      length: '1 week',
      icon: BarChart3,
      topics: [
        'Linear Regression',
        'Logistic Regression',
        'Loss Functions',
        'Gradient Descent',
        'Evaluation Metrics'
      ]
    },
    {
      id: 5,
      title: 'Model Evaluation & Regularization',
      summary: 'Cross-validation, bias-variance tradeoff, L1/L2 regularization, hyperparameter tuning.',
      length: '1 week',
      icon: CheckCircle,
      topics: [
        'Cross-validation',
        'Bias-Variance Tradeoff',
        'L1/L2 Regularization',
        'Hyperparameter Tuning',
        'Model Selection'
      ]
    },
    {
      id: 6,
      title: 'Introduction to Neural Networks',
      summary: 'Feedforward networks, activation functions, backpropagation; very high-level intuition to deep learning.',
      length: '1 week',
      icon: Brain,
      topics: [
        'Feedforward Networks',
        'Activation Functions',
        'Backpropagation',
        'Deep Learning Intuition',
        'Neural Network Applications'
      ]
    }
  ]

  // Navigation sections for sidebar
  const navSections = [
    { id: "overview", title: "Course Overview", icon: BookOpen },
    { id: "syllabus", title: "Course Syllabus", icon: FileText },
    { id: "code-examples", title: "Code Examples", icon: Code },
    { id: "resources", title: "Resources", icon: Brain },
    { id: "exercises", title: "Exercises", icon: Target }
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

  const codeExamples = {
    numpy: `# Numpy basics: vectors, dot product, matrix multiply
import numpy as np

v = np.array([1,2,3])
w = np.array([4,5,6])
print('dot:', np.dot(v,w))

A = np.array([[1,2],[3,4]])
b = np.array([5,6])
print('Ax =', A.dot(b))`,

    linearRegression: `# Simple linear regression with scikit-learn
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# synthetic data
X = np.arange(100).reshape(-1,1)
y = 3 * X.squeeze() + 7 + np.random.randn(100) * 10

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = LinearRegression()
model.fit(X_train, y_train)

preds = model.predict(X_test)
print('MSE:', mean_squared_error(y_test, preds))
print('Coef:', model.coef_, 'Intercept:', model.intercept_)`,

    logisticRegression: `# Logistic regression (binary classification)
from sklearn.datasets import make_classification
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X,y = make_classification(n_samples=500, n_features=5, random_state=0)
Xtr,Xte,ytr,yte = train_test_split(X,y,test_size=0.2,random_state=42)
clf = LogisticRegression(max_iter=200)
clf.fit(Xtr,ytr)
print('Accuracy:', accuracy_score(yte, clf.predict(Xte)))`
  }

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
          fixed top-16 left-0 z-30 h-[calc(100vh-4rem)] w-80 transform bg-background/95 backdrop-blur-sm border-r border-border
          transition-transform duration-300 ease-in-out lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <ScrollArea className="h-full px-4 py-6">
            {/* Course Info */}
            <div className="mb-6 p-4 bg-primary/5 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">Machine Learning Fundamentals</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Core concepts and mathematical foundations
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  4-6 weeks
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  Beginner
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3 w-3" />
                  6 topics
                </span>
              </div>
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>Progress</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Course Content
                </h4>
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

            {/* Topics List */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Course Topics
              </h4>
              <div className="space-y-1">
                {syllabus.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => scrollToSection(`topic-${topic.id}`)}
                    className="w-full flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors text-left p-2 rounded-md hover:bg-muted"
                  >
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center">
                      {topic.id}
                    </span>
                    <span className="truncate">{topic.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 space-y-2">
              <Button asChild size="sm" className="w-full">
                <Link href="/courses/ml-fundamentals/learn">
                  <Play className="h-3 w-3 mr-2" />
                  Start Course
                </Link>
              </Button>
              <Button size="sm" variant="outline" className="w-full">
                <BookOpen className="h-3 w-3 mr-2" />
                Download Materials
              </Button>
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
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            
            <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8">
              <div className="text-center">
                <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary/20">
                  <Brain className="mr-2 h-4 w-4" />
                  Machine Learning Fundamentals
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Master ML{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Fundamentals
                  </span>
                </h1>
                
                <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
                  Start your ML journey with core concepts and mathematical foundations. 
                  Learn the building blocks that power modern machine learning systems.
                </p>
                
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Button size="lg" className="flex items-center">
                    <Play className="mr-2 h-4 w-4" />
                    Start Learning
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('syllabus')}
                    variant="outline" 
                    size="lg"
                  >
                    View Syllabus
                  </Button>
                </div>

                {/* Course Stats */}
                <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">6</div>
                    <div className="text-sm text-muted-foreground">Topics</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4-6</div>
                    <div className="text-sm text-muted-foreground">Weeks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">4-8</div>
                    <div className="text-sm text-muted-foreground">Hours/Week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Beginner</div>
                    <div className="text-sm text-muted-foreground">Level</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
            {/* Overview Section */}
            <section id="overview" className="mb-20">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Course Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    This course gives you a compact but practical foundation in machine learning.
                    You will learn the mathematical building blocks, core algorithms, evaluation techniques, and
                    get hands-on with small Python examples using NumPy and scikit-learn. The goal is to make you
                    comfortable reading ML research or implementing simple models for projects.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold mb-2">Target Audience</h4>
                      <p className="text-sm text-muted-foreground">
                        Beginners with basic Python knowledge who want to understand machine learning fundamentals
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Learning Outcome</h4>
                      <p className="text-sm text-muted-foreground">
                        Ability to build, evaluate & explain simple ML models with confidence
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      What You'll Learn
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Core machine learning concepts and terminology</li>
                      <li>• Mathematical foundations: linear algebra and statistics</li>
                      <li>• Supervised and unsupervised learning techniques</li>
                      <li>• Model evaluation and validation strategies</li>
                      <li>• Hands-on implementation with Python and scikit-learn</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Separator className="my-16" />

            {/* Syllabus Section */}
            <section id="syllabus" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground">Course Syllabus</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  6 comprehensive topics designed to build your ML foundation
                </p>
              </div>

              <div className="space-y-6">
                {syllabus.map((topic, index) => (
                  <Card key={topic.id} id={`topic-${topic.id}`} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <topic.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl">
                              {topic.id}. {topic.title}
                            </CardTitle>
                            <Badge variant="secondary" className="text-xs">
                              {topic.length}
                            </Badge>
                          </div>
                          <CardDescription className="text-base">
                            {topic.summary}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">Topics Covered:</h4>
                        <div className="grid md:grid-cols-2 gap-2">
                          {topic.topics.map((subtopic, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <ChevronRight className="h-3 w-3 text-primary flex-shrink-0" />
                              {subtopic}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <Separator className="my-16" />

            {/* Code Examples Section */}
            <section id="code-examples" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground">Code Examples</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Practical examples to reinforce your learning
                </p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      NumPy Basics
                    </CardTitle>
                    <CardDescription>
                      Get comfortable with vectors and matrix operations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                      <code>{codeExamples.numpy}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-primary" />
                      Linear Regression
                    </CardTitle>
                    <CardDescription>
                      Build your first machine learning model
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                      <code>{codeExamples.linearRegression}</code>
                    </pre>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-primary" />
                      Logistic Regression
                    </CardTitle>
                    <CardDescription>
                      Binary classification with logistic regression
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="p-4 bg-muted rounded-lg overflow-x-auto text-sm">
                      <code>{codeExamples.logisticRegression}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-16" />

            {/* Resources Section */}
            <section id="resources" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground">Resources & Reading</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Recommended books and materials to supplement your learning
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      Essential Books
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Pattern Recognition and Machine Learning</strong>
                          <div className="text-muted-foreground">Christopher Bishop</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Hands-On Machine Learning</strong>
                          <div className="text-muted-foreground">Aurélien Géron</div>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="h-5 w-5 text-primary" />
                      Online Courses
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Stanford CS229</strong>
                          <div className="text-muted-foreground">Lecture notes and materials</div>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Andrew Ng's ML Course</strong>
                          <div className="text-muted-foreground">Coursera</div>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <Separator className="my-16" />

            {/* Exercises Section */}
            <section id="exercises" className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground">Exercises & Projects</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Hands-on projects to solidify your understanding
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Practical Exercises
                  </CardTitle>
                  <CardDescription>
                    Complete these exercises to master the fundamentals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">1</span>
                      <div>
                        <strong>Linear Regression from Scratch</strong>
                        <p className="text-muted-foreground mt-1">
                          Implement linear regression without libraries and compare with scikit-learn
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">2</span>
                      <div>
                        <strong>K-means Clustering</strong>
                        <p className="text-muted-foreground mt-1">
                          Run clustering on a dataset and visualize clusters with matplotlib
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">3</span>
                      <div>
                        <strong>Binary Classifier</strong>
                        <p className="text-muted-foreground mt-1">
                          Build a simple binary classifier and report precision/recall
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-medium">4</span>
                      <div>
                        <strong>House Price Prediction</strong>
                        <p className="text-muted-foreground mt-1">
                          End-to-end project: train, evaluate, and write a report
                        </p>
                      </div>
                    </li>
                  </ol>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-medium mb-2">Setup Instructions</h4>
                    <pre className="text-xs bg-background p-3 rounded border overflow-x-auto">
{`python -m venv venv
source venv/bin/activate  # or venv\\Scripts\\activate on Windows
pip install numpy scikit-learn matplotlib jupyter
jupyter notebook`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* CTA Section */}
            <section className="text-center">
              <Card className="bg-gradient-to-r from-primary/10 via-transparent to-accent/10 border-primary/20">
                <CardContent className="pt-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Start Learning?</h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Begin your machine learning journey today with our comprehensive fundamentals course.
                    Master the core concepts that power modern AI systems.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Button asChild size="lg" className="flex items-center">
                      <Link href="/courses/ml-fundamentals/learn">
                        <Play className="mr-2 h-4 w-4" />
                        Start Course
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/courses">Browse All Courses</Link>
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