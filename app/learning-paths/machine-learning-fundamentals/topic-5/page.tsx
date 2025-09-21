"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  Clock, 
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Users,
  Construction
} from "lucide-react"
import Link from "next/link"

export default function ModelEvaluationPage() {
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
          <span>Model Evaluation & Regularization</span>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="h-8 w-8 text-muted-foreground" />
            <div>
              <h1 className="text-3xl font-bold text-muted-foreground">Model Evaluation & Regularization</h1>
              <p className="text-muted-foreground">Topic 5 of 6 • Week 4 • Coming Soon</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline">Coming Soon</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              ~2 hours
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Users className="h-4 w-4" />
              Multiple sections
            </span>
          </div>

          <p className="text-lg text-muted-foreground">
            Learn how to properly evaluate machine learning models and prevent overfitting 
            through regularization techniques.
          </p>
        </header>

        {/* Coming Soon Card */}
        <Card className="mb-8 border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Construction className="h-5 w-5 text-primary" />
              Content Under Development
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              This topic is currently being developed and will cover essential concepts for evaluating 
              and improving machine learning models.
            </p>

            <div>
              <h4 className="font-medium mb-3">Planned Content:</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Cross-validation techniques and best practices
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Understanding bias-variance tradeoff
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  L1 and L2 regularization methods
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Hyperparameter tuning strategies
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Model selection and comparison
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Practical examples with scikit-learn
                </li>
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> While this content is being developed, you can continue with 
                the available topics or explore the hands-on exercises in previous sections.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/learning-paths/machine-learning-fundamentals/topic-4">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous: Regression & Classification
            </Button>
          </Link>
          <Link href="/learning-paths/machine-learning-fundamentals/topic-6">
            <Button variant="outline">
              Next: Neural Networks (Coming Soon)
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}