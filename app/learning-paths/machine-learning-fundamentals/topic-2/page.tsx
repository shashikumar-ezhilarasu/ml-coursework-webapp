"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Target, 
  Clock, 
  Code,
  Play,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Users,
  Lightbulb,
  Brain,
  Eye,
  Gamepad2
} from "lucide-react"
import Link from "next/link"

export default function TypesOfLearningPage() {
  const [completedSections, setCompletedSections] = useState<string[]>([])

  const sections = [
    {
      id: "supervised-learning",
      title: "Supervised Learning",
      duration: "20 min",
      icon: Target,
      content: `Supervised learning uses labeled training data to learn a mapping from inputs to outputs.

**Key Characteristics:**
• Training data includes both input features (X) and target labels (y)
• Goal is to predict labels for new, unseen data
• Performance can be measured by comparing predictions to known labels

**Two Main Types:**

**Classification** - Predicting categories/classes
• Email spam detection (spam vs. not spam)
• Image recognition (cat, dog, bird)
• Medical diagnosis (disease vs. healthy)
• Sentiment analysis (positive, negative, neutral)

**Regression** - Predicting continuous numerical values
• House price prediction
• Stock price forecasting
• Temperature prediction
• Sales revenue estimation

**Common Algorithms:**
• Linear/Logistic Regression
• Decision Trees
• Random Forest
• Support Vector Machines (SVM)
• Neural Networks`
    },
    {
      id: "unsupervised-learning",
      title: "Unsupervised Learning",
      duration: "20 min",
      icon: Eye,
      content: `Unsupervised learning finds hidden patterns in data without labeled examples.

**Key Characteristics:**
• Only input data (X) is provided, no target labels
• Algorithm must discover structure in the data
• More exploratory and descriptive in nature

**Main Types:**

**Clustering** - Grouping similar data points
• Customer segmentation for marketing
• Gene sequencing analysis
• Market research and consumer behavior
• Image segmentation

**Association Rules** - Finding relationships between variables
• "People who buy bread also buy butter" (Market basket analysis)
• Web usage patterns
• Recommendation systems

**Dimensionality Reduction** - Simplifying data while preserving information
• Data visualization (high-dimensional data → 2D/3D plots)
• Feature selection and extraction
• Noise reduction
• Compression

**Common Algorithms:**
• K-Means Clustering
• Hierarchical Clustering
• Principal Component Analysis (PCA)
• DBSCAN
• Apriori Algorithm`
    },
    {
      id: "semi-supervised-learning",
      title: "Semi-supervised Learning",
      duration: "15 min",
      icon: Brain,
      content: `Semi-supervised learning combines small amounts of labeled data with large amounts of unlabeled data.

**Why Use Semi-supervised Learning?**
• Labeled data is expensive and time-consuming to obtain
• Unlabeled data is abundant and cheap
• Can achieve better performance than using labeled data alone

**Key Scenarios:**
• Medical imaging: Few expert-labeled scans, many unlabeled scans
• Text classification: Few manually categorized documents, millions of unlabeled documents
• Speech recognition: Limited transcribed audio, vast amounts of untranscribed audio

**Common Approaches:**

**Self-training**
• Train model on labeled data
• Use model to predict labels for unlabeled data
• Add high-confidence predictions to training set
• Retrain and repeat

**Co-training**
• Use multiple models with different feature sets
• Models teach each other using their confident predictions

**Graph-based Methods**
• Model data as a graph where similar points are connected
• Propagate labels through the graph structure

**Applications:**
• Web page classification
• Protein function prediction
• Fraud detection
• Image classification with limited labels`
    },
    {
      id: "reinforcement-learning",
      title: "Reinforcement Learning",
      duration: "25 min",
      icon: Gamepad2,
      content: `Reinforcement learning trains agents to make decisions through trial and error, receiving rewards or penalties.

**Key Concepts:**

**Agent** - The learner/decision maker
**Environment** - The world the agent interacts with
**Actions** - What the agent can do
**State** - Current situation of the agent
**Reward** - Feedback signal (positive or negative)
**Policy** - Strategy for choosing actions

**Learning Process:**
1. Agent observes current state
2. Agent chooses an action based on its policy
3. Environment responds with new state and reward
4. Agent updates its policy to maximize future rewards
5. Process repeats

**Real-world Applications:**

**Game Playing**
• Chess, Go, Poker (AlphaGo, AlphaZero)
• Video games (Atari, StarCraft II)
• Board games and puzzles

**Robotics**
• Robot navigation and pathfinding
• Robotic arm control
• Autonomous vehicles
• Drone piloting

**Business & Finance**
• Algorithmic trading
• Dynamic pricing
• Resource allocation
• Supply chain optimization

**Other Applications**
• Personalized recommendations
• Chatbot conversations
• Ad placement optimization
• Energy grid management

**Challenges:**
• Balancing exploration vs. exploitation
• Delayed rewards (actions may have long-term consequences)
• Large state/action spaces
• Safety in real-world applications`
    },
    {
      id: "when-to-use-each",
      title: "When to Use Each Type",
      duration: "20 min",
      icon: Lightbulb,
      content: `Choosing the right type of learning depends on your data and problem characteristics.

**Use Supervised Learning When:**
• You have labeled training data
• Clear input-output relationships exist
• Goal is prediction or classification
• Performance can be measured against known answers

*Examples: Email classification, price prediction, medical diagnosis*

**Use Unsupervised Learning When:**
• No labeled data available
• Want to explore data structure
• Looking for hidden patterns
• Need to understand data better before supervised learning

*Examples: Customer segmentation, anomaly detection, data exploration*

**Use Semi-supervised Learning When:**
• Small amount of labeled data
• Large amount of unlabeled data
• Labeling is expensive or time-consuming
• Want to improve supervised learning performance

*Examples: Medical imaging, text classification, speech recognition*

**Use Reinforcement Learning When:**
• Decision-making in sequential environments
• Learning through interaction and feedback
• Optimizing long-term rewards
• No direct supervision available

*Examples: Game playing, robotics, autonomous systems*

**Decision Framework:**

1. **Do you have labeled data?**
   - Yes → Supervised Learning
   - No → Unsupervised Learning
   - Some → Semi-supervised Learning

2. **Is it a sequential decision problem?**
   - Yes → Consider Reinforcement Learning

3. **What's your goal?**
   - Prediction → Supervised
   - Discovery → Unsupervised
   - Optimization → Reinforcement

4. **What resources do you have?**
   - Lots of labeled data → Supervised
   - Limited labels → Semi-supervised
   - No labels but can get feedback → Reinforcement`
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

  const exampleCode = `# Examples of different learning types

# 1. SUPERVISED LEARNING EXAMPLE
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import make_classification

# Create labeled dataset
X, y = make_classification(n_samples=1000, n_features=5, n_classes=2, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train supervised model
classifier = LogisticRegression()
classifier.fit(X_train, y_train)  # Learning from labeled examples
accuracy = classifier.score(X_test, y_test)
print(f"Supervised Learning Accuracy: {accuracy:.3f}")

# 2. UNSUPERVISED LEARNING EXAMPLE
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs

# Create unlabeled dataset
X_unlabeled, _ = make_blobs(n_samples=300, centers=3, random_state=42)

# Find clusters without labels
kmeans = KMeans(n_clusters=3, random_state=42)
clusters = kmeans.fit_predict(X_unlabeled)  # No labels needed!
print(f"Found {len(set(clusters))} clusters in unlabeled data")

# 3. REINFORCEMENT LEARNING CONCEPT
# Simple grid world example (conceptual)
class SimpleAgent:
    def __init__(self):
        self.position = (0, 0)
        self.rewards = 0
        
    def take_action(self, action):
        # Agent learns through trial and error
        # Receives rewards/penalties for actions
        if action == "right":
            self.position = (self.position[0] + 1, self.position[1])
            reward = 1 if self.position == (3, 3) else -0.1  # Goal vs step cost
        self.rewards += reward
        return reward

print("Learning types demonstrated!")
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
          <span>Types of Learning</span>
        </div>

        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Target className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold">Types of Learning</h1>
              <p className="text-muted-foreground">Topic 2 of 6 • Week 1</p>
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
            Explore the four main types of machine learning: supervised, unsupervised, 
            semi-supervised, and reinforcement learning. Learn when to use each approach.
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
                <span className="text-sm">Understand the four main types of machine learning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Learn the differences between supervised and unsupervised learning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Explore semi-supervised learning scenarios</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Understand reinforcement learning concepts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                <span className="text-sm">Know when to apply each type of learning</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Content Sections */}
        {sections.map((section, index) => {
          const Icon = section.icon
          return (
            <Card key={section.id} className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <Icon className="h-5 w-5" />
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
          )
        })}

        {/* Code Example */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Code Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              See practical examples of supervised and unsupervised learning in action:
            </p>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
              <code>{exampleCode}</code>
            </pre>
            <div className="mt-4">
              <Button size="sm" variant="outline">
                <Play className="h-4 w-4 mr-2" />
                Run Examples
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
                Supervised learning uses labeled data for prediction tasks
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Unsupervised learning finds patterns in unlabeled data
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Semi-supervised learning combines labeled and unlabeled data
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Reinforcement learning optimizes decisions through trial and error
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-primary" />
                Choose the learning type based on your data and problem requirements
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/learning-paths/machine-learning-fundamentals/topic-1">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous: Introduction to ML
            </Button>
          </Link>
          <Link href="/learning-paths/machine-learning-fundamentals/topic-3">
            <Button>
              Next: Linear Algebra & Statistics
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}