"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Calculator, 
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
  BarChart3,
  TrendingUp
} from "lucide-react"
import Link from "next/link"

export default function LinearAlgebraStatsPage() {
  const [completedSections, setCompletedSections] = useState<string[]>([])

  const sections = [
    {
      id: "vectors-matrices",
      title: "Vectors and Matrices",
      duration: "30 min",
      content: `Vectors and matrices are the fundamental building blocks of machine learning mathematics.

**Vectors**
A vector is an ordered list of numbers that represents a point in space or a direction.

**Examples:**
• Position: [3, 4] represents a point at coordinates (3, 4)
• Features: [age=25, income=50000, score=85] represents a person's attributes
• Pixel values: [120, 50, 200] represents RGB color values

**Vector Operations:**
• **Addition**: [1, 2] + [3, 4] = [4, 6]
• **Scalar multiplication**: 2 × [1, 2] = [2, 4]
• **Dot product**: [1, 2] · [3, 4] = 1×3 + 2×4 = 11

**Matrices**
A matrix is a rectangular array of numbers, essentially multiple vectors arranged in rows or columns.

**Common Uses in ML:**
• **Data matrix**: Each row is a sample, each column is a feature
• **Weight matrix**: Stores learned parameters in neural networks
• **Transformation matrix**: Rotates, scales, or transforms data

**Matrix Operations:**
• **Matrix multiplication**: Combining transformations
• **Transpose**: Flipping rows and columns
• **Inverse**: "Undoing" a transformation (when possible)

**Why Important for ML:**
• Data is naturally represented as vectors and matrices
• All ML algorithms involve vector/matrix computations
• Enables efficient computation on large datasets
• Foundation for understanding neural networks`
    },
    {
      id: "matrix-operations",
      title: "Matrix Operations",
      duration: "25 min",
      content: `Understanding matrix operations is crucial for implementing and understanding ML algorithms.

**Matrix Multiplication**
The most important operation in machine learning.

**Rules:**
• Can multiply A×B only if columns of A = rows of B
• Result has dimensions: (rows of A) × (columns of B)
• Each element is the dot product of corresponding row and column

**Example:**
[1 2]   [5 6]   [1×5+2×7  1×6+2×8]   [19 22]
[3 4] × [7 8] = [3×5+4×7  3×6+4×8] = [43 50]

**Transpose**
Flipping a matrix along its diagonal (rows become columns).

**Properties:**
• (A^T)^T = A
• (AB)^T = B^T A^T
• Important for switching between row and column vectors

**Matrix Inverse**
The matrix A^(-1) such that A × A^(-1) = I (identity matrix).

**Key Points:**
• Only square matrices can have inverses
• Not all square matrices have inverses
• Used in solving linear equations: Ax = b → x = A^(-1)b
• Computationally expensive for large matrices

**Special Matrices:**
• **Identity Matrix**: Acts like "1" for matrices
• **Diagonal Matrix**: Only diagonal elements are non-zero
• **Symmetric Matrix**: A = A^T
• **Orthogonal Matrix**: A^T = A^(-1)

**ML Applications:**
• Linear regression: (X^T X)^(-1) X^T y
• Principal Component Analysis (PCA)
• Neural network forward/backward propagation
• Solving optimization problems`
    },
    {
      id: "eigenvalues-eigenvectors",
      title: "Eigenvalues and Eigenvectors",
      duration: "25 min",
      content: `Eigenvalues and eigenvectors reveal the "natural directions" of matrix transformations.

**Definition**
For a square matrix A, an eigenvector v is a vector that doesn't change direction when A is applied to it:
A × v = λ × v

Where λ (lambda) is the eigenvalue - it tells us how much the vector is scaled.

**Intuitive Understanding:**
Think of a transformation (matrix) applied to space:
• **Eigenvectors**: Directions that remain unchanged
• **Eigenvalues**: How much stretching/shrinking occurs in those directions

**Example Applications:**

**Principal Component Analysis (PCA)**
• Finds directions of maximum variance in data
• Eigenvectors point in directions of most information
• Eigenvalues tell us how much variance each direction captures
• Used for dimensionality reduction and data visualization

**Google's PageRank Algorithm**
• Models web pages as a graph with links
• Eigenvector of the link matrix gives page importance scores
• Eigenvalue tells us about the convergence properties

**Facial Recognition**
• Eigenfaces are eigenvectors of face image covariance matrix
• Each eigenface captures common facial features
• New faces can be represented as combinations of eigenfaces

**Vibration Analysis**
• Eigenvectors show natural vibration modes
• Eigenvalues give vibration frequencies
• Used in engineering and physics

**Properties:**
• An n×n matrix has n eigenvalues (counting multiplicities)
• Symmetric matrices have real eigenvalues and orthogonal eigenvectors
• Eigenvalues can be complex numbers
• Larger eigenvalues correspond to more "important" directions

**Computing Eigenvalues:**
• Small matrices: Solve characteristic polynomial det(A - λI) = 0
• Large matrices: Use iterative algorithms (power method, QR algorithm)
• Most programming libraries provide efficient implementations`
    },
    {
      id: "probability-basics",
      title: "Probability Basics",
      duration: "30 min",
      content: `Probability theory provides the mathematical framework for handling uncertainty in machine learning.

**Fundamental Concepts**

**Probability Space:**
• **Sample Space (Ω)**: All possible outcomes
• **Event**: A subset of the sample space
• **Probability P(A)**: Number between 0 and 1 representing likelihood

**Basic Rules:**
• P(A) ≥ 0 for any event A
• P(Ω) = 1 (something must happen)
• P(A ∪ B) = P(A) + P(B) - P(A ∩ B)

**Conditional Probability**
P(A|B) = P(A ∩ B) / P(B)
"Probability of A given that B has occurred"

**Examples:**
• P(Cancer|Positive Test) = ?
• P(Spam|Contains "Free Money") = ?
• P(Rain|Cloudy) = ?

**Bayes' Theorem**
The cornerstone of probabilistic machine learning:

P(A|B) = P(B|A) × P(A) / P(B)

**Components:**
• P(A|B): Posterior probability (what we want)
• P(B|A): Likelihood (how likely is the evidence given our hypothesis)
• P(A): Prior probability (what we believed before seeing evidence)
• P(B): Evidence (normalizing constant)

**ML Applications:**
• Naive Bayes classifier
• Bayesian optimization
• Probabilistic graphical models
• Bayesian neural networks

**Independence**
Events A and B are independent if:
P(A ∩ B) = P(A) × P(B)

**Key Insight**: Knowing B doesn't change probability of A
• Important assumption in many ML algorithms
• Often violated in practice (feature independence)

**Random Variables**
A function that assigns numerical values to outcomes:
• **Discrete**: Finite or countable values (coin flips, dice)
• **Continuous**: Uncountable values (height, temperature)

**Expected Value E[X]**
The average value of a random variable:
• Discrete: E[X] = Σ x × P(X = x)
• Continuous: E[X] = ∫ x × f(x) dx

**Variance Var(X)**
Measures spread of a random variable:
Var(X) = E[(X - E[X])²] = E[X²] - (E[X])²`
    },
    {
      id: "statistical-distributions",
      title: "Statistical Distributions",
      duration: "25 min",
      content: `Statistical distributions model different types of random phenomena in machine learning.

**Key Distributions for ML**

**Normal Distribution (Gaussian)**
The most important distribution in statistics and ML.

**Properties:**
• Bell-shaped, symmetric curve
• Defined by mean (μ) and standard deviation (σ)
• 68-95-99.7 rule for standard deviations
• Central Limit Theorem: Many quantities naturally follow normal distribution

**ML Applications:**
• Linear regression assumes normal residuals
• Many algorithms assume normally distributed features
• Gaussian Naive Bayes
• Initialization of neural network weights

**Bernoulli Distribution**
Models binary outcomes (success/failure, yes/no).

**Parameters:**
• p: probability of success
• P(X = 1) = p, P(X = 0) = 1-p

**ML Applications:**
• Binary classification problems
• Logistic regression output
• Coin flip modeling

**Binomial Distribution**
Number of successes in n independent Bernoulli trials.

**Parameters:**
• n: number of trials
• p: probability of success in each trial

**Example**: Number of heads in 10 coin flips

**Poisson Distribution**
Models count data and rare events.

**Parameter:**
• λ (lambda): average rate of occurrence

**Examples:**
• Number of emails received per hour
• Number of customers arriving per minute
• Modeling count data in regression

**Exponential Distribution**
Models time between events.

**Parameter:**
• λ: rate parameter

**Examples:**
• Time between customer arrivals
• Survival analysis
• Reliability engineering

**Uniform Distribution**
All values in a range are equally likely.

**Applications:**
• Random number generation
• Monte Carlo methods
• Modeling "complete ignorance"

**Beta Distribution**
Models probabilities (values between 0 and 1).

**Parameters:**
• α (alpha) and β (beta): shape parameters

**Applications:**
• Bayesian statistics (conjugate prior for Bernoulli)
• Modeling percentages and proportions

**Choosing the Right Distribution:**
1. **Data Type**: Continuous vs. discrete
2. **Range**: Bounded vs. unbounded
3. **Shape**: Symmetric vs. skewed
4. **Context**: What process generated the data?

**Distribution Fitting:**
• Visual inspection (histograms, Q-Q plots)
• Statistical tests (Kolmogorov-Smirnov, Anderson-Darling)
• Maximum likelihood estimation
• Method of moments`
    },
    {
      id: "hypothesis-testing",
      title: "Hypothesis Testing",
      duration: "20 min",
      content: `Hypothesis testing provides a framework for making decisions under uncertainty.

**The Scientific Method in Statistics**

**Steps:**
1. **Formulate hypotheses**
2. **Choose significance level**
3. **Collect data and compute test statistic**
4. **Make decision based on p-value**

**Null and Alternative Hypotheses**

**Null Hypothesis (H₀):**
• Default position (status quo)
• Assumes no effect or no difference
• What we try to reject

**Alternative Hypothesis (H₁ or Hₐ):**
• What we want to prove
• Competing claim to null hypothesis

**Examples:**
• H₀: New drug has no effect vs. H₁: New drug is effective
• H₀: Two ML models perform equally vs. H₁: One model is better
• H₀: Feature has no correlation with target vs. H₁: Feature is correlated

**Type I and Type II Errors**

**Type I Error (False Positive):**
• Rejecting true null hypothesis
• Probability = α (significance level)
• "Crying wolf when there's no wolf"

**Type II Error (False Negative):**
• Failing to reject false null hypothesis
• Probability = β
• Power = 1 - β (probability of correctly rejecting false H₀)

**P-values**
Probability of observing data as extreme or more extreme than what we observed, assuming H₀ is true.

**Interpretation:**
• Small p-value (< α): Evidence against H₀
• Large p-value (≥ α): Insufficient evidence against H₀
• p-value ≠ probability that H₀ is true!

**Common Tests in ML**

**t-test:**
• Compare means of two groups
• Example: Comparing performance of two algorithms

**Chi-square test:**
• Test independence between categorical variables
• Feature selection in classification

**F-test:**
• Compare variances
• ANOVA for multiple group comparisons

**Kolmogorov-Smirnov test:**
• Test if data follows specific distribution
• Data quality checks

**Multiple Testing Problem**
When conducting many tests simultaneously:
• Probability of at least one Type I error increases
• Bonferroni correction: Use α/n for n tests
• False Discovery Rate (FDR) control

**Statistical Significance vs. Practical Significance**
• Statistical significance: p < α
• Practical significance: Effect size large enough to matter
• Large datasets can make tiny effects "statistically significant"

**ML Applications:**
• A/B testing for model comparison
• Feature selection
• Validation of experimental results
• Quality control in data processing`
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

  const mathCode = `# Linear Algebra and Statistics in Python
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats
from sklearn.decomposition import PCA

# 1. VECTOR AND MATRIX OPERATIONS
print("=== Vector and Matrix Operations ===")

# Create vectors
v1 = np.array([1, 2, 3])
v2 = np.array([4, 5, 6])

# Vector operations
dot_product = np.dot(v1, v2)
magnitude = np.linalg.norm(v1)
print(f"Dot product: {dot_product}")
print(f"Vector magnitude: {magnitude:.3f}")

# Matrix operations
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])

matrix_mult = A @ B  # Matrix multiplication
transpose = A.T
determinant = np.linalg.det(A)
eigenvals, eigenvecs = np.linalg.eig(A)

print(f"Matrix multiplication:\\n{matrix_mult}")
print(f"Eigenvalues: {eigenvals}")

# 2. PROBABILITY AND STATISTICS
print("\\n=== Probability and Statistics ===")

# Generate sample data
np.random.seed(42)
data = np.random.normal(100, 15, 1000)  # Normal distribution

# Basic statistics
mean = np.mean(data)
std = np.std(data)
variance = np.var(data)

print(f"Mean: {mean:.2f}")
print(f"Standard deviation: {std:.2f}")
print(f"Variance: {variance:.2f}")

# Hypothesis testing
sample1 = np.random.normal(100, 15, 100)
sample2 = np.random.normal(105, 15, 100)
t_stat, p_value = stats.ttest_ind(sample1, sample2)

print(f"T-test p-value: {p_value:.6f}")
print(f"Significant difference: {p_value < 0.05}")

# 3. PRINCIPAL COMPONENT ANALYSIS EXAMPLE
print("\\n=== PCA Example ===")

# Create 2D data with correlation
x = np.random.randn(200)
y = 2 * x + np.random.randn(200) * 0.5
data_2d = np.column_stack([x, y])

# Apply PCA
pca = PCA(n_components=2)
pca.fit(data_2d)

print(f"Explained variance ratio: {pca.explained_variance_ratio_}")
print(f"Principal components:\\n{pca.components_}")

# 4. BAYES' THEOREM EXAMPLE
print("\\n=== Bayes' Theorem Example ===")

# Medical test example
# P(Disease) = 0.01 (1% of population has disease)
# P(Positive|Disease) = 0.95 (95% sensitivity)
# P(Positive|No Disease) = 0.05 (5% false positive rate)

p_disease = 0.01
p_pos_given_disease = 0.95
p_pos_given_no_disease = 0.05

# P(Positive) = P(Pos|Disease)*P(Disease) + P(Pos|No Disease)*P(No Disease)
p_positive = p_pos_given_disease * p_disease + p_pos_given_no_disease * (1 - p_disease)

# P(Disease|Positive) = P(Positive|Disease) * P(Disease) / P(Positive)
p_disease_given_positive = (p_pos_given_disease * p_disease) / p_positive

print(f"Probability of disease given positive test: {p_disease_given_positive:.3f}")
print("Even with 95% accurate test, only ~16% chance of having disease!")
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
          <span>Linear Algebra & Statistics</span>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Linear Algebra & Statistics Basics</h1>
              <p className="text-muted-foreground">Topic 3 of 6 • Week 2</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary">Intermediate</Badge>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Clock className="h-4 w-4" />
              ~2.5 hours
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
            Master the mathematical foundations of machine learning. Learn linear algebra concepts 
            and statistical principles that power ML algorithms.
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
                <span className="text-sm">Understand vectors, matrices, and their operations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Learn about eigenvalues and eigenvectors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Master probability fundamentals and Bayes' theorem</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Explore statistical distributions and their ML applications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Understand hypothesis testing in ML contexts</span>
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

        {/* Comprehensive Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Hands-on Practice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Practice linear algebra and statistics concepts with comprehensive Python examples:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
              <code>{mathCode}</code>
            </pre>
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Run in Jupyter
              </Button>
              <Button size="sm" variant="outline">
                <BarChart3 className="h-4 w-4 mr-2" />
                View Visualizations
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
                Vectors and matrices are the foundation of ML data representation
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Matrix operations enable efficient computation on large datasets
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Eigenvalues and eigenvectors reveal important data structures
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Probability theory provides the framework for handling uncertainty
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Statistical distributions model different types of data patterns
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Hypothesis testing validates ML model performance and results
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/learning-paths/machine-learning-fundamentals/topic-2">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous: Types of Learning
            </Button>
          </Link>
          <Link href="/learning-paths/machine-learning-fundamentals/topic-4">
            <Button>
              Next: Regression & Classification
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}