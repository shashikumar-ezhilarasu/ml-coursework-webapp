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
        'When to Use Each Type'
      ]
    },
    {
      id: 3,
      title: 'Linear Algebra & Statistics Basics',
      summary: 'Vectors, matrices, matrix multiplication, eigenvalues; probability, distributions, mean/variance, hypothesis testing.',
      length: '1 week',
      icon: Calculator,
      topics: [
        'Vectors and Matrices',
        'Matrix Operations',
        'Eigenvalues and Eigenvectors',
        'Probability Basics',
        'Statistical Distributions',
        'Hypothesis Testing'
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
        'Deep Learning Basics',
        'Neural Network Architecture'
      ]
    }
  ];

  const pythonLinearRegression = `# Simple linear regression with scikit-learn
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
print('Coef:', model.coef_, 'Intercept:', model.intercept_)
`;

  const numpyBasics = `# Numpy basics: vectors, dot product, matrix multiply
import numpy as np

v = np.array([1,2,3])
w = np.array([4,5,6])
print('dot:', np.dot(v,w))

A = np.array([[1,2],[3,4]])
b = np.array([5,6])
print('Ax =', A.dot(b))
`;

  const logisticSnippet = `# Logistic regression (binary classification)
from sklearn.datasets import make_classification
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

X,y = make_classification(n_samples=500, n_features=5, random_state=0)
Xtr,Xte,ytr,yte = train_test_split(X,y,test_size=0.2,random_state=42)
clf = LogisticRegression(max_iter=200)
clf.fit(Xtr,ytr)
print('Accuracy:', accuracy_score(yte, clf.predict(Xte)))
`;

  const sidebarItems = [
    { id: "overview", label: "Overview", icon: BookOpen },
    ...syllabus.map(topic => ({ 
      id: `topic-${topic.id}`, 
      label: `${topic.id}. ${topic.title}`, 
      icon: topic.icon 
    })),
    { id: "resources", label: "Resources", icon: FileText },
    { id: "exercises", label: "Exercises", icon: Code },
    { id: "teaching-tips", label: "Teaching Tips", icon: Lightbulb }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setSidebarOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = sidebarItems.map(item => item.id)
      const currentSection = sections.find(sectionId => {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
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
        <div className="lg:hidden fixed top-20 left-4 z-50">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        {/* Sidebar */}
        <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] w-80 bg-background border-r z-40 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:h-auto`}>
          <ScrollArea className="h-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-xl font-bold">ML Fundamentals</h1>
                  <p className="text-sm text-muted-foreground">6 topics • 4-6 weeks</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span>Progress</span>
                  <span>0%</span>
                </div>
                <Progress value={0} className="h-2" />
              </div>

              <nav className="space-y-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2 text-left rounded-lg text-sm transition-colors ${
                        activeSection === item.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </button>
                  )
                })}
              </nav>

              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="text-sm font-medium mb-2">Suggested Pace</h4>
                <p className="text-xs text-muted-foreground">4-8 hours per week</p>
              </div>
            </div>
          </ScrollArea>
        </aside>

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="max-w-4xl mx-auto p-6 lg:pl-12">
            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Link href="/learning-paths" className="hover:text-foreground">Learning Paths</Link>
                <ChevronRight className="h-4 w-4" />
                <span>Machine Learning Fundamentals</span>
              </div>
              <h1 className="text-3xl font-bold mb-2">Machine Learning Fundamentals</h1>
              <p className="text-lg text-muted-foreground">Start your ML journey with core concepts and mathematical foundations</p>
              <div className="flex items-center gap-4 mt-4">
                <Badge variant="secondary">Beginner</Badge>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  6 weeks
                </span>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  Python knowledge recommended
                </span>
              </div>
            </header>

            {/* Overview */}
            <section id="overview" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    This short course gives you a compact but practical foundation in machine learning.
                    You will learn the mathematical building blocks, core algorithms, evaluation techniques, and
                    get hands-on with small Python examples using NumPy and scikit-learn. The goal is to make you
                    comfortable reading ML research or implementing simple models for projects.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-1">Audience</h4>
                      <p className="text-sm text-muted-foreground">Beginners with basic Python knowledge</p>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Outcome</h4>
                      <p className="text-sm text-muted-foreground">Ability to build, evaluate & explain simple ML models</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Course Topics */}
            {syllabus.map((topic) => {
              const Icon = topic.icon
              return (
                <section key={topic.id} id={`topic-${topic.id}`} className="mb-12">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        {topic.id}. {topic.title}
                      </CardTitle>
                      <CardDescription>{topic.summary}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="outline">{topic.length}</Badge>
                        <span className="text-muted-foreground">Topics: {topic.topics.length}</span>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">What you'll learn</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-muted-foreground">
                          {topic.topics.map((subtopic, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-primary" />
                              {subtopic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Code Examples */}
                      {topic.id === 1 && (
                        <div>
                          <h4 className="font-medium mb-2">Quick hands-on</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Try this small NumPy example to get comfortable with vectors and matrix multiplication.
                          </p>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                            <code>{numpyBasics}</code>
                          </pre>
                        </div>
                      )}

                      {topic.id === 3 && (
                        <div>
                          <h4 className="font-medium mb-2">Linear algebra + statistics: practice</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Use this snippet to train a simple linear regression model with scikit-learn.
                          </p>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                            <code>{pythonLinearRegression}</code>
                          </pre>
                        </div>
                      )}

                      {topic.id === 4 && (
                        <div>
                          <h4 className="font-medium mb-2">Regression & classification: practice</h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            Binary classification using logistic regression.
                          </p>
                          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                            <code>{logisticSnippet}</code>
                          </pre>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Link href={`/learning-paths/machine-learning-fundamentals/topic-${topic.id}`}>
                          <Button size="sm">
                            Start Topic
                            <Play className="ml-2 h-3 w-3" />
                          </Button>
                        </Link>
                        <Button variant="outline" size="sm">
                          <BookOpen className="mr-2 h-3 w-3" />
                          View Materials
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              )
            })}

            {/* Resources */}
            <section id="resources" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Resources & Reading
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-4 w-4 mt-0.5 text-primary" />
                      Pattern Recognition and Machine Learning — Christopher Bishop (book)
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-4 w-4 mt-0.5 text-primary" />
                      Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow — Aurélien Géron
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-4 w-4 mt-0.5 text-primary" />
                      Stanford CS229 lecture notes and Andrew Ng's ML course (Coursera)
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="h-4 w-4 mt-0.5 text-primary" />
                      NumPy and scikit-learn official documentation for APIs and examples
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Exercises */}
            <section id="exercises" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Exercises & Projects
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">1</span>
                      <span>Implement linear regression from scratch (no libraries) and compare with scikit-learn.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">2</span>
                      <span>Run clustering (K-means) on a small dataset and visualise clusters with matplotlib.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">3</span>
                      <span>Build a simple binary classifier for a toy dataset and report precision/recall.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-medium">4</span>
                      <span>Mini project: Predict house prices (toy dataset) — train, evaluate, and write a short report.</span>
                    </li>
                  </ol>

                  <div>
                    <h4 className="font-medium mb-2">Helpful starter commands</h4>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                      <code>{`python -m venv venv
source venv/bin/activate  # or venv\\Scripts\\activate on Windows
pip install numpy scikit-learn matplotlib jupyter
jupyter notebook`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Teaching Tips */}
            <section id="teaching-tips" className="mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5" />
                    Teaching Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                      Start practical work early — even small experiments help understanding.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                      Visualize data and model predictions — graphs reveal problems quickly.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                      Encourage reading code from scikit-learn and numpy to grow familiarity with APIs.
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                      Keep projects small and focused: finish one end-to-end pipeline before moving on.
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}