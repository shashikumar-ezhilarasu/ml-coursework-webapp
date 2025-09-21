"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  Clock, 
  ArrowLeft,
  ChevronRight,
  Users,
  Construction
} from "lucide-react"
import Link from "next/link"

export default function NeuralNetworksIntroPage() {
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
          <span>Introduction to Neural Networks</span>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Brain className="h-8 w-8 text-muted-foreground" />
            <div>
              <h1 className="text-3xl font-bold text-muted-foreground">Introduction to Neural Networks</h1>
              <p className="text-muted-foreground">Topic 6 of 6 • Week 5-6 • Coming Soon</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline">Coming Soon</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              ~3 hours
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Users className="h-4 w-4" />
              Advanced topic
            </span>
          </div>

          <p className="text-lg text-muted-foreground">
            Get introduced to neural networks and understand the foundations of deep learning.
          </p>
        </header>

        {/* Coming Soon Card */}
        <Card className="mb-8 border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Construction className="h-5 w-5 text-primary" />
              Advanced Content Under Development
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This final topic will introduce you to neural networks and provide a foundation 
              for understanding deep learning concepts.
            </p>

            <div>
              <h4 className="font-medium mb-3">Planned Content:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Feedforward neural networks and architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Activation functions and their purposes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Backpropagation algorithm explained
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Training neural networks effectively
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Introduction to deep learning concepts
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Building your first neural network with TensorFlow/PyTorch
                </li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                <strong>Prerequisite:</strong> This topic builds on all previous concepts, especially 
                linear algebra, calculus (gradients), and the fundamentals of supervised learning.
              </p>
            </div>

            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <p className="text-sm">
                <strong>Next Steps:</strong> After completing the ML Fundamentals course, consider 
                exploring our "Deep Learning & Neural Networks" learning path for advanced topics.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Course Completion Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Course Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              You've made great progress through the Machine Learning Fundamentals course! 
              Even with this final topic in development, you have a solid foundation in:
            </p>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Core ML concepts and terminology
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Different types of machine learning
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Mathematical foundations (linear algebra & statistics)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Practical implementation of key algorithms
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Continue practicing with the exercises and explore more advanced topics when ready!
            </p>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/learning-paths/machine-learning-fundamentals/topic-5">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous: Model Evaluation (Coming Soon)
            </Button>
          </Link>
          <Link href="/learning-paths/machine-learning-fundamentals">
            <Button>
              Back to Course Overview
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}