"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  BarChart3, 
  Clock, 
  Code,
  Play,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Users,
  Lightbulb,
  Target,
  TrendingUp
} from "lucide-react"
import Link from "next/link"

export default function RegressionClassificationPage() {
  const [completedSections, setCompletedSections] = useState<string[]>([])

  const sections = [
    {
      id: "linear-regression",
      title: "Linear Regression",
      duration: "30 min",
      content: `Linear regression finds the best line through data points to predict continuous values.

**What is Linear Regression?**
• Predicts a continuous target variable (y) from input features (x)
• Assumes a linear relationship: y = mx + b (simple) or y = w₁x₁ + w₂x₂ + ... + b (multiple)
• Goal: Find the best weights (w) and bias (b) that minimize prediction errors

**Key Concepts:**
• **Dependent Variable (y)**: What we're trying to predict
• **Independent Variables (x)**: Features used for prediction
• **Coefficients (weights)**: How much each feature influences the prediction
• **Intercept (bias)**: Base value when all features are zero

**Types:**
• **Simple Linear Regression**: One feature (x) predicts target (y)
• **Multiple Linear Regression**: Multiple features predict target

**Assumptions:**
• Linear relationship between features and target
• Independence of observations
• Homoscedasticity (constant variance of residuals)
• Normal distribution of residuals

**Applications:**
• House price prediction based on size, location, etc.
• Sales forecasting from advertising spend
• Medical outcome prediction from patient data
• Economic modeling and analysis`
    },
    {
      id: "logistic-regression",
      title: "Logistic Regression",
      duration: "25 min",
      content: `Logistic regression predicts binary outcomes using the logistic function.

**What is Logistic Regression?**
• Despite the name, it's a classification algorithm
• Predicts probability of binary outcomes (0 or 1, Yes or No)
• Uses logistic (sigmoid) function to map any real number to probability [0,1]

**Sigmoid Function:**
σ(z) = 1 / (1 + e^(-z))
where z = w₁x₁ + w₂x₂ + ... + b

**Key Properties:**
• Output always between 0 and 1 (perfect for probabilities)
• S-shaped curve
• Decision boundary typically at 0.5

**Binary vs. Multinomial:**
• **Binary**: Two classes (spam/not spam, pass/fail)
• **Multinomial**: Multiple classes (red/green/blue)

**Advantages:**
• Provides probability estimates
• No assumptions about feature distributions
• Less prone to overfitting
• Interpretable coefficients

**Applications:**
• Email spam detection
• Medical diagnosis (disease/no disease)
• Marketing response prediction
• Credit approval decisions

**Interpretation:**
• Positive coefficient: Feature increases probability
• Negative coefficient: Feature decreases probability
• Magnitude indicates strength of relationship`
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

  const regressionCode = `# Linear and Logistic Regression Examples
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression, LogisticRegression
from sklearn.metrics import mean_squared_error, accuracy_score, classification_report
from sklearn.datasets import make_regression, make_classification

print("=== LINEAR REGRESSION EXAMPLE ===")

# Create sample data for linear regression
X_reg, y_reg = make_regression(n_samples=100, n_features=1, noise=10, random_state=42)
X_train_reg, X_test_reg, y_train_reg, y_test_reg = train_test_split(
    X_reg, y_reg, test_size=0.2, random_state=42
)

# Train linear regression model
linear_model = LinearRegression()
linear_model.fit(X_train_reg, y_train_reg)

# Make predictions
y_pred_reg = linear_model.predict(X_test_reg)

# Evaluate
mse = mean_squared_error(y_test_reg, y_pred_reg)
print(f"Mean Squared Error: {mse:.2f}")
print(f"Coefficient: {linear_model.coef_[0]:.2f}")
print(f"Intercept: {linear_model.intercept_:.2f}")

print("\\n=== LOGISTIC REGRESSION EXAMPLE ===")

# Create sample data for logistic regression
X_class, y_class = make_classification(
    n_samples=1000, n_features=2, n_redundant=0, 
    n_informative=2, n_clusters_per_class=1, random_state=42
)
X_train_class, X_test_class, y_train_class, y_test_class = train_test_split(
    X_class, y_class, test_size=0.2, random_state=42
)

# Train logistic regression model
logistic_model = LogisticRegression(random_state=42)
logistic_model.fit(X_train_class, y_train_class)

# Make predictions
y_pred_class = logistic_model.predict(X_test_class)
y_pred_proba = logistic_model.predict_proba(X_test_class)

# Evaluate
accuracy = accuracy_score(y_test_class, y_pred_class)
print(f"Accuracy: {accuracy:.3f}")
print(f"Coefficients: {logistic_model.coef_[0]}")
print(f"Intercept: {logistic_model.intercept_[0]:.3f}")

# Show some probability predictions
print("\\nSample Predictions (probabilities):")
for i in range(5):
    print(f"True: {y_test_class[i]}, Pred: {y_pred_class[i]}, "
          f"Prob: [{y_pred_proba[i][0]:.3f}, {y_pred_proba[i][1]:.3f}]")

print("\\n=== GRADIENT DESCENT CONCEPT ===")
# Simple gradient descent for linear regression (educational)
def gradient_descent_demo():
    # Simple dataset
    X_simple = np.array([[1], [2], [3], [4], [5]])
    y_simple = np.array([2, 4, 6, 8, 10])  # Perfect line: y = 2x
    
    # Initialize parameters
    w = 0.0  # weight
    b = 0.0  # bias
    learning_rate = 0.01
    epochs = 1000
    
    for epoch in range(epochs):
        # Forward pass
        y_pred = w * X_simple.flatten() + b
        
        # Compute loss (Mean Squared Error)
        loss = np.mean((y_pred - y_simple) ** 2)
        
        # Compute gradients
        dw = np.mean(2 * (y_pred - y_simple) * X_simple.flatten())
        db = np.mean(2 * (y_pred - y_simple))
        
        # Update parameters
        w -= learning_rate * dw
        b -= learning_rate * db
        
        if epoch % 200 == 0:
            print(f"Epoch {epoch}: Loss = {loss:.4f}, w = {w:.4f}, b = {b:.4f}")
    
    return w, b

final_w, final_b = gradient_descent_demo()
print(f"\\nFinal parameters: w = {final_w:.4f}, b = {final_b:.4f}")
print("Expected: w = 2.0, b = 0.0 (since y = 2x)")
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
          <span>Regression & Classification</span>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Regression & Classification</h1>
              <p className="text-muted-foreground">Topic 4 of 6 • Week 3</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">Intermediate</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              ~2 hours
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Users className="h-4 w-4" />
              {sections.length} main sections
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
            Learn the fundamental algorithms of supervised learning: linear regression for predicting 
            continuous values and logistic regression for classification tasks.
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
                <span className="text-sm">Understand linear regression and its applications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Master logistic regression for binary classification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Learn about loss functions and gradient descent</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Understand evaluation metrics for regression and classification</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Implement and interpret both algorithms in practice</span>
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

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Hands-on Practice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Practice implementing linear and logistic regression with scikit-learn:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
              <code>{regressionCode}</code>
            </pre>
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Run in Jupyter
              </Button>
              <Button size="sm" variant="outline">
                <TrendingUp className="h-4 w-4 mr-2" />
                View Plots
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Coming Soon Notice */}
        <Card className="mb-8 border-dashed">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-muted-foreground" />
              More Content Coming Soon
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              This topic is being expanded with additional sections on loss functions, gradient descent optimization, 
              evaluation metrics (MSE, MAE, accuracy, precision, recall), and advanced regression techniques. 
              The current content provides a solid foundation to get started.
            </p>
            <div className="mt-4">
              <Button size="sm" variant="outline" disabled>
                Loss Functions (Coming Soon)
              </Button>
              <Button size="sm" variant="outline" disabled className="ml-2">
                Evaluation Metrics (Coming Soon)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/learning-paths/machine-learning-fundamentals/topic-3">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous: Linear Algebra & Statistics
            </Button>
          </Link>
          <Link href="/learning-paths/machine-learning-fundamentals/topic-5">
            <Button>
              Next: Model Evaluation (Coming Soon)
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}