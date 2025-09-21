"use client"

import { useState } from "react"
import { Sidebar } from "@/components/srmist/sidebar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Home } from "lucide-react"

export default function SRMISTPage() {
  const [activeSection, setActiveSection] = useState("syllabus")

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Main content area */}
      <div className="flex-1 p-6 md:p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">SRMIST Machine Learning Resources</h1>
            <p className="mt-2 text-muted-foreground">
              Access Machine Learning course materials from SRM Institute of Science and Technology.
            </p>
          </div>
          <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
        
        <div className="mt-8">
          {activeSection === "syllabus" && (
            <div>
              <h2 className="text-2xl font-semibold">Machine Learning Syllabus</h2>
              <p className="mt-2 text-muted-foreground">
                <span className="font-medium">Regulations - 2021</span> | Department of Computer Science & Engineering | Course Code: 18CS723
              </p>
              
              <div className="mt-6 space-y-6">
                {/* PDF Viewer option */}
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Full Syllabus Document</h3>
                    <a href="/ML SYLLABUS (1).pdf" download>
                      <Button>Download PDF</Button>
                    </a>
                  </div>
                </div>
                
                {/* Unit 1 */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-medium">Unit 1 - Introduction</h3>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">9 Hours</span>
                  </div>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p className="mb-4">
                      Machine learning what and why?, supervised and unsupervised learning, polynomial curve fitting, 
                      probability theory- discrete random variables, fundamental rules, Bayes rule, Independence and conditional
                      independence, continuous random variables, Quantiles, Mean and variance, probability densities, 
                      Expectation and covariance.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="text-foreground font-medium mb-2">Practice:</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Devise a program to import, load and view dataset</li>
                        <li>Create a program to display the summary and statistics of the dataset</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                {/* Unit 2 */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-medium">Unit 2 - Linear models for regression</h3>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">9 Hours</span>
                  </div>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p className="mb-4">
                      Maximum likelihood estimation – least squares, robust linear expression, ridge regression, 
                      Bayesian linear regression. Linear models for classification: Discriminant function – Probabilistic generative models,
                      Probabilistic discriminative models, Laplacian approximation, Bayesian logistic regression, Kernels functions, 
                      using kernels in GLMs, Kernel trick, SVMs.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="text-foreground font-medium mb-2">Practice:</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Implement linear regression to perform prediction</li>
                        <li>Implement Bayesian logistic regression and SVM for classification</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                {/* Unit 3 */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-medium">Unit 3 - Mixture models and EM</h3>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">9 Hours</span>
                  </div>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p className="mb-4">
                      K-means clustering, mixtures of Gaussians, An alternative view of EM, Factor analysis, PCA, 
                      choosing the number of latent dimensions. Clustering – measuring dissimilarity, evaluating the output of clustering
                      methods, Hierarchical clustering.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="text-foreground font-medium mb-2">Practice:</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Implement K-means clustering, mixtures of Gaussians and Hierarchical clustering algorithm to categorize data.</li>
                        <li>Create a program to perform PCA</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                {/* Unit 4 */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-medium">Unit 4 - Hidden Markov Models</h3>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">9 Hours</span>
                  </div>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p className="mb-4">
                      Sequential data – Markov models, HMM – maximum likelihood for the HMM, The forward and Backward algorithm, 
                      the sum-product algorithm, scaling factors, Viterbi algorithm, linear dynamical systems.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="text-foreground font-medium mb-2">Practice:</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Implement HMM to predict the sequential data</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                {/* Unit 5 */}
                <div className="rounded-lg border bg-card p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-medium">Unit 5 - Combining Models</h3>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">9 Hours</span>
                  </div>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    <p className="mb-4">
                      Bayesian model averaging, Boosting, Adaptive basis function models, CART, generalized additive models, Ensemble learning.
                    </p>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="text-foreground font-medium mb-2">Practice:</h4>
                      <ol className="list-decimal pl-5 space-y-1">
                        <li>Implement CART learning algorithms to perform categorization</li>
                        <li>Implement Ensemble learning models to perform classification</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "notes" && (
            <div>
              <h2 className="text-2xl font-semibold">Machine Learning Notes</h2>
              <p className="mt-2 text-muted-foreground">
                Comprehensive lecture notes for Machine Learning course (18CS723).
              </p>
              <div className="mt-6 space-y-6">
                {/* Unit 1 Notes */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted/30 p-4 border-b">
                    <h3 className="font-medium flex items-center">
                      <span className="mr-2 flex-shrink-0 bg-primary/20 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">1</span>
                      Introduction
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Machine learning fundamentals and probability theory</p>
                      <Link href="/notes/UNIT 1 Machine Learning.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Download Notes</Button>
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">1.1 ML Introduction</h4>
                        <p className="text-xs text-muted-foreground mt-1">What and why of machine learning, supervised vs unsupervised</p>
                        <Link href="/notes/UNIT 1 Machine Learning.pdf" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                        </Link>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">1.2 Polynomial Curve Fitting</h4>
                        <p className="text-xs text-muted-foreground mt-1">Fitting curves to data points and understanding overfitting</p>
                        <Link href="/notes/UNIT 1 OLD.pdf" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                        </Link>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">1.3 Probability Theory</h4>
                        <p className="text-xs text-muted-foreground mt-1">Random variables, Bayes rule, independence</p>
                        <Link href="/notes/UNIT 1 Machine Learning.pdf" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                        </Link>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">1.4 Statistical Concepts</h4>
                        <p className="text-xs text-muted-foreground mt-1">Quantiles, mean, variance, expectation, covariance</p>
                        <Link href="/notes/UNIT 1 Machine Learning.pdf" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Unit 2 Notes */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted/30 p-4 border-b">
                    <h3 className="font-medium flex items-center">
                      <span className="mr-2 flex-shrink-0 bg-primary/20 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">2</span>
                      Linear Models for Regression
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Regression techniques and classification models</p>
                      <Link href="/notes/Unit-2.OLD pdf.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Download Notes</Button>
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">2.1 Maximum Likelihood</h4>
                        <p className="text-xs text-muted-foreground mt-1">Least squares and robust linear expression</p>
                        <Link href="/notes/Unit-2.OLD pdf.pdf" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                        </Link>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">2.2 Ridge Regression</h4>
                        <p className="text-xs text-muted-foreground mt-1">Regularization in linear regression</p>
                        <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">2.3 Classification Models</h4>
                        <p className="text-xs text-muted-foreground mt-1">Discriminant function and probabilistic models</p>
                        <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">2.4 Kernels and SVMs</h4>
                        <p className="text-xs text-muted-foreground mt-1">Kernel tricks and Support Vector Machines</p>
                        <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Unit 3 Notes */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted/30 p-4 border-b">
                    <h3 className="font-medium flex items-center">
                      <span className="mr-2 flex-shrink-0 bg-primary/20 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">3</span>
                      Mixture Models and EM
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Clustering and dimensionality reduction techniques</p>
                      <Link href="/notes/K-means clustering with problems.pdf" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm">Download Notes</Button>
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">3.1 K-means Clustering</h4>
                        <p className="text-xs text-muted-foreground mt-1">Partitioning methods for clustering</p>
                        <Link href="/notes/K-means clustering with problems.pdf" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                        </Link>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">3.2 Gaussian Mixtures</h4>
                        <p className="text-xs text-muted-foreground mt-1">EM algorithm and mixture models</p>
                        <Link href="/notes/Problems of K means clustering.pdf" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                        </Link>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">3.3 Dimensionality Reduction</h4>
                        <p className="text-xs text-muted-foreground mt-1">Factor analysis and PCA</p>
                        <Link href="/notes/K-means clustering with problems.pdf" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                        </Link>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">3.4 Hierarchical Clustering</h4>
                        <p className="text-xs text-muted-foreground mt-1">Agglomerative and divisive clustering methods</p>
                        <Link href="/notes/Hierarchial clustering.pdf" target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Unit 4 Notes */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted/30 p-4 border-b">
                    <h3 className="font-medium flex items-center">
                      <span className="mr-2 flex-shrink-0 bg-primary/20 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">4</span>
                      Hidden Markov Models
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Sequential data modeling techniques</p>
                      <Button variant="outline" size="sm">Download Notes</Button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">4.1 Sequential Data</h4>
                        <p className="text-xs text-muted-foreground mt-1">Introduction to Markov models</p>
                        <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">4.2 HMM Algorithms</h4>
                        <p className="text-xs text-muted-foreground mt-1">Forward/backward and sum-product algorithms</p>
                        <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">4.3 Viterbi Algorithm</h4>
                        <p className="text-xs text-muted-foreground mt-1">Finding the most likely sequence</p>
                        <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Unit 5 Notes */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted/30 p-4 border-b">
                    <h3 className="font-medium flex items-center">
                      <span className="mr-2 flex-shrink-0 bg-primary/20 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">5</span>
                      Combining Models
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-muted-foreground">Ensemble methods and advanced modeling techniques</p>
                      <Button variant="outline" size="sm">Download Notes</Button>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">5.1 Bayesian Averaging</h4>
                        <p className="text-xs text-muted-foreground mt-1">Model averaging and boosting</p>
                        <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">5.2 CART</h4>
                        <p className="text-xs text-muted-foreground mt-1">Classification and regression trees</p>
                        <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                      </div>
                      <div className="bg-card border rounded p-3">
                        <h4 className="font-medium text-sm">5.3 Ensemble Learning</h4>
                        <p className="text-xs text-muted-foreground mt-1">Combining multiple models for better performance</p>
                        <Button variant="ghost" size="sm" className="mt-2 w-full">View</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "pyqs" && (
            <div>
              <h2 className="text-2xl font-semibold">ML Question Papers</h2>
              <p className="mt-2 text-muted-foreground">
                Collection of Machine Learning (18CS723) examination papers from previous years.
              </p>
              
              <div className="mt-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Recent Year */}
                  <div className="rounded-lg border overflow-hidden">
                    <div className="bg-muted/30 p-3 border-b">
                      <h3 className="font-medium">2025 Academic Year</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center p-3 border rounded bg-card">
                        <div>
                          <h4 className="font-medium text-sm">Mid Semester (January 2025)</h4>
                          <p className="text-xs text-muted-foreground mt-1">Units 1-3 | Regulations 2021</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded bg-card">
                        <div>
                          <h4 className="font-medium text-sm">Assignment 1 (February 2025)</h4>
                          <p className="text-xs text-muted-foreground mt-1">Practical application of Units 1-3</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Previous Year */}
                  <div className="rounded-lg border overflow-hidden">
                    <div className="bg-muted/30 p-3 border-b">
                      <h3 className="font-medium">2024 Academic Year</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center p-3 border rounded bg-card">
                        <div>
                          <h4 className="font-medium text-sm">End Semester (November 2024)</h4>
                          <p className="text-xs text-muted-foreground mt-1">Units 1-5 | Regulations 2021</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded bg-card">
                        <div>
                          <h4 className="font-medium text-sm">Mid Semester (August 2024)</h4>
                          <p className="text-xs text-muted-foreground mt-1">Units 1-3 | Regulations 2021</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded bg-card">
                        <div>
                          <h4 className="font-medium text-sm">Assignment 2 (October 2024)</h4>
                          <p className="text-xs text-muted-foreground mt-1">Practical application of Units 4-5</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Year before */}
                  <div className="rounded-lg border overflow-hidden">
                    <div className="bg-muted/30 p-3 border-b">
                      <h3 className="font-medium">2023 Academic Year</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center p-3 border rounded bg-card">
                        <div>
                          <h4 className="font-medium text-sm">End Semester (May 2024)</h4>
                          <p className="text-xs text-muted-foreground mt-1">Units 1-5 | Regulations 2021</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded bg-card">
                        <div>
                          <h4 className="font-medium text-sm">Mid Semester (March 2024)</h4>
                          <p className="text-xs text-muted-foreground mt-1">Units 1-3 | Regulations 2021</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Model Question Papers */}
                  <div className="rounded-lg border overflow-hidden">
                    <div className="bg-muted/30 p-3 border-b">
                      <h3 className="font-medium">Model Question Papers</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="flex justify-between items-center p-3 border rounded bg-card">
                        <div>
                          <h4 className="font-medium text-sm">End Semester Model Paper</h4>
                          <p className="text-xs text-muted-foreground mt-1">Units 1-5 | Regulations 2021</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded bg-card">
                        <div>
                          <h4 className="font-medium text-sm">Mid Semester Model Paper</h4>
                          <p className="text-xs text-muted-foreground mt-1">Units 1-3 | Regulations 2021</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded bg-card">
                        <div>
                          <h4 className="font-medium text-sm">Unit-wise Question Bank</h4>
                          <p className="text-xs text-muted-foreground mt-1">Practice questions from all units</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="ghost" size="sm">Download</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "presentations" && (
            <div>
              <h2 className="text-2xl font-semibold">ML Unit Presentations</h2>
              <p className="mt-2 text-muted-foreground">
                Unit-wise lecture presentations for Machine Learning course (18CS723).
              </p>
              
              <div className="mt-6">
                <div className="space-y-8">
                  {/* Unit 1 Presentations */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted/30 p-4 border-b">
                      <h3 className="text-lg font-medium flex items-center justify-between">
                        <span className="flex items-center">
                          <span className="mr-2 flex-shrink-0 bg-primary/20 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">1</span>
                          Introduction
                        </span>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">9 Hours</span>
                      </h3>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">1.1 Machine Learning Basics</h4>
                          <p className="text-xs text-muted-foreground mt-1">What & why of ML, supervised & unsupervised learning</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">1.2 Polynomial Curve Fitting</h4>
                          <p className="text-xs text-muted-foreground mt-1">Fitting curves to data and bias-variance trade-off</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">1.3 Probability Theory</h4>
                          <p className="text-xs text-muted-foreground mt-1">Random variables, Bayes rule, independence</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">1.4 Statistical Concepts</h4>
                          <p className="text-xs text-muted-foreground mt-1">Quantiles, mean, variance, expectation, covariance</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                      </div>
                      
                      {/* Practice section */}
                      <div className="mt-6 border border-primary/20 bg-primary/5 rounded-lg p-4">
                        <h4 className="font-medium text-sm mb-2 flex items-center">
                          <span className="mr-2 w-5 h-5 rounded-full bg-primary/20 inline-flex items-center justify-center text-primary text-xs">P</span>
                          Practice Materials
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="bg-card border rounded p-3">
                            <p className="text-xs font-medium">1. Import, Load and View Dataset</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">Code</Button>
                              <Button variant="ghost" size="sm">Dataset</Button>
                            </div>
                          </div>
                          <div className="bg-card border rounded p-3">
                            <p className="text-xs font-medium">2. Display Summary and Statistics</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">Code</Button>
                              <Button variant="ghost" size="sm">Dataset</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Unit 2 Presentations */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted/30 p-4 border-b">
                      <h3 className="text-lg font-medium flex items-center justify-between">
                        <span className="flex items-center">
                          <span className="mr-2 flex-shrink-0 bg-primary/20 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">2</span>
                          Linear Models for Regression
                        </span>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">9 Hours</span>
                      </h3>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">2.1 Maximum Likelihood Estimation</h4>
                          <p className="text-xs text-muted-foreground mt-1">Least squares and robust linear expression</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">2.2 Ridge Regression</h4>
                          <p className="text-xs text-muted-foreground mt-1">Regularization and Bayesian linear regression</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">2.3 Linear Models for Classification</h4>
                          <p className="text-xs text-muted-foreground mt-1">Discriminant functions and probabilistic models</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">2.4 Kernel Methods & SVMs</h4>
                          <p className="text-xs text-muted-foreground mt-1">Kernel functions, GLMs, and Support Vector Machines</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                      </div>
                      
                      {/* Practice section */}
                      <div className="mt-6 border border-primary/20 bg-primary/5 rounded-lg p-4">
                        <h4 className="font-medium text-sm mb-2 flex items-center">
                          <span className="mr-2 w-5 h-5 rounded-full bg-primary/20 inline-flex items-center justify-center text-primary text-xs">P</span>
                          Practice Materials
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="bg-card border rounded p-3">
                            <p className="text-xs font-medium">1. Linear Regression for Prediction</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">Code</Button>
                              <Button variant="ghost" size="sm">Dataset</Button>
                            </div>
                          </div>
                          <div className="bg-card border rounded p-3">
                            <p className="text-xs font-medium">2. Bayesian Logistic Regression & SVM</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">Code</Button>
                              <Button variant="ghost" size="sm">Dataset</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Unit 3 Presentations */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted/30 p-4 border-b">
                      <h3 className="text-lg font-medium flex items-center justify-between">
                        <span className="flex items-center">
                          <span className="mr-2 flex-shrink-0 bg-primary/20 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">3</span>
                          Mixture Models and EM
                        </span>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">9 Hours</span>
                      </h3>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">3.1 K-means Clustering</h4>
                          <p className="text-xs text-muted-foreground mt-1">Centroid-based clustering algorithm</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">3.2 Mixture of Gaussians</h4>
                          <p className="text-xs text-muted-foreground mt-1">Alternative view of EM algorithm</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">3.3 Factor Analysis & PCA</h4>
                          <p className="text-xs text-muted-foreground mt-1">Dimensionality reduction techniques</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">3.4 Hierarchical Clustering</h4>
                          <p className="text-xs text-muted-foreground mt-1">Measuring dissimilarity and evaluating outputs</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                      </div>
                      
                      {/* Practice section */}
                      <div className="mt-6 border border-primary/20 bg-primary/5 rounded-lg p-4">
                        <h4 className="font-medium text-sm mb-2 flex items-center">
                          <span className="mr-2 w-5 h-5 rounded-full bg-primary/20 inline-flex items-center justify-center text-primary text-xs">P</span>
                          Practice Materials
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="bg-card border rounded p-3">
                            <p className="text-xs font-medium">1. K-means, Gaussian Mixtures & Hierarchical Clustering</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">Code</Button>
                              <Button variant="ghost" size="sm">Dataset</Button>
                            </div>
                          </div>
                          <div className="bg-card border rounded p-3">
                            <p className="text-xs font-medium">2. Principal Component Analysis (PCA)</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">Code</Button>
                              <Button variant="ghost" size="sm">Dataset</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Unit 4 Presentations */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted/30 p-4 border-b">
                      <h3 className="text-lg font-medium flex items-center justify-between">
                        <span className="flex items-center">
                          <span className="mr-2 flex-shrink-0 bg-primary/20 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">4</span>
                          Hidden Markov Models
                        </span>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">9 Hours</span>
                      </h3>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">4.1 Sequential Data</h4>
                          <p className="text-xs text-muted-foreground mt-1">Introduction to Markov models</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">4.2 HMM Maximum Likelihood</h4>
                          <p className="text-xs text-muted-foreground mt-1">Forward and backward algorithms</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">4.3 Sum-Product Algorithm</h4>
                          <p className="text-xs text-muted-foreground mt-1">Scaling factors and message passing</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">4.4 Viterbi Algorithm</h4>
                          <p className="text-xs text-muted-foreground mt-1">Linear dynamical systems</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                      </div>
                      
                      {/* Practice section */}
                      <div className="mt-6 border border-primary/20 bg-primary/5 rounded-lg p-4">
                        <h4 className="font-medium text-sm mb-2 flex items-center">
                          <span className="mr-2 w-5 h-5 rounded-full bg-primary/20 inline-flex items-center justify-center text-primary text-xs">P</span>
                          Practice Materials
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="bg-card border rounded p-3">
                            <p className="text-xs font-medium">1. HMM for Sequential Data Prediction</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">Code</Button>
                              <Button variant="ghost" size="sm">Dataset</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Unit 5 Presentations */}
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted/30 p-4 border-b">
                      <h3 className="text-lg font-medium flex items-center justify-between">
                        <span className="flex items-center">
                          <span className="mr-2 flex-shrink-0 bg-primary/20 text-primary rounded-full w-6 h-6 inline-flex items-center justify-center text-sm">5</span>
                          Combining Models
                        </span>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">9 Hours</span>
                      </h3>
                    </div>
                    
                    <div className="p-4">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">5.1 Bayesian Model Averaging</h4>
                          <p className="text-xs text-muted-foreground mt-1">Combining predictions from multiple models</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">5.2 Boosting</h4>
                          <p className="text-xs text-muted-foreground mt-1">Sequential ensemble techniques</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">5.3 CART</h4>
                          <p className="text-xs text-muted-foreground mt-1">Classification and Regression Trees</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                        <div className="bg-card border rounded p-3">
                          <h4 className="font-medium text-sm">5.4 Ensemble Learning</h4>
                          <p className="text-xs text-muted-foreground mt-1">Generalized additive models</p>
                          <Button variant="outline" size="sm" className="mt-2 w-full">View Slides</Button>
                        </div>
                      </div>
                      
                      {/* Practice section */}
                      <div className="mt-6 border border-primary/20 bg-primary/5 rounded-lg p-4">
                        <h4 className="font-medium text-sm mb-2 flex items-center">
                          <span className="mr-2 w-5 h-5 rounded-full bg-primary/20 inline-flex items-center justify-center text-primary text-xs">P</span>
                          Practice Materials
                        </h4>
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="bg-card border rounded p-3">
                            <p className="text-xs font-medium">1. CART Learning for Categorization</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">Code</Button>
                              <Button variant="ghost" size="sm">Dataset</Button>
                            </div>
                          </div>
                          <div className="bg-card border rounded p-3">
                            <p className="text-xs font-medium">2. Ensemble Learning for Classification</p>
                            <div className="flex gap-2 mt-2">
                              <Button variant="outline" size="sm">Code</Button>
                              <Button variant="ghost" size="sm">Dataset</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
            </div>
    </div>
  )
}