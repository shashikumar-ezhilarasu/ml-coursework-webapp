import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, history, model } = await request.json()
    console.log(`API received request with model: ${model}`)

    let response: string
    
    if (model === "gemini") {
      // Use Gemini API for ML/AI-related queries
      console.log("Using Gemini API for response")
      response = await generateGeminiResponse(message, history)
    } else {
      // Use the default simple response system
      console.log("Using default response system")
      response = await generateResponse(message, history)
    }

    console.log(`API sending response: ${response.substring(0, 50)}...`)
    return NextResponse.json({ response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({ error: "Failed to process message" }, { status: 500 })
  }
}

async function generateGeminiResponse(message: string, history: any[]) {
  try {
    const API_KEY = process.env.GEMINI_API_KEY
    if (!API_KEY) {
      throw new Error("Gemini API key not configured")
    }
    
    // Create conversation context from history
    const conversationContext = history.map((msg: any) => {
      return {
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }]
      }
    })

    // Add educational context to ensure responses focus on ML/AI topics
    const educationalPrompt = {
      role: "user",
      parts: [{ text: "Please act as an educational assistant focused only on machine learning, AI, data science, mathematics, and statistics. Only respond to questions related to these topics. If a question is unrelated, politely redirect to relevant educational content." }]
    }
    
    // Prepare the current message
    const userMessage = {
      role: "user",
      parts: [{ text: message }]
    }
    
    // Complete prompt with history, educational context, and current message
    const prompt = [educationalPrompt, ...conversationContext, userMessage]

    // Make request to Gemini API
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: prompt,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 800,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    })

    const data = await response.json()
    console.log("Gemini API raw response:", JSON.stringify(data).substring(0, 500))
    
    if (data.error) {
      console.error("Gemini API error:", data.error)
      throw new Error(data.error.message || "Error from Gemini API")
    }
    
    // Extract text response from Gemini with improved logging
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text
    
    if (!textResponse) {
      console.error("Could not extract text response from Gemini API", data)
      return "I'm sorry, I couldn't process that request. Please try again with a question about machine learning, AI, or data science."
    }
    
    console.log("Successfully extracted Gemini response:", textResponse.substring(0, 100))
    return textResponse
    
  } catch (error) {
    console.error("Gemini API error:", error)
    return "I'm sorry, I encountered an error connecting to Gemini. Please try again later or switch to the default model."
  }
}

async function generateResponse(message: string, history: any[]) {
  // This is a placeholder implementation
  // Replace this with actual Gemini API integration

  const lowerMessage = message.toLowerCase()

  // ML concept responses
  if (lowerMessage.includes("machine learning") || lowerMessage.includes("ml")) {
    return "Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed. It involves algorithms that can identify patterns, make predictions, and improve their performance over time. Would you like me to explain any specific ML concepts?"
  }

  if (lowerMessage.includes("supervised learning")) {
    return "Supervised learning is a type of machine learning where the algorithm learns from labeled training data. The model is trained on input-output pairs and learns to map inputs to correct outputs. Common examples include classification (predicting categories) and regression (predicting continuous values). Popular algorithms include linear regression, decision trees, and neural networks."
  }

  if (lowerMessage.includes("unsupervised learning")) {
    return "Unsupervised learning works with unlabeled data to discover hidden patterns or structures. The algorithm tries to find relationships in data without knowing the correct answers. Common techniques include clustering (grouping similar data points), dimensionality reduction (simplifying data), and association rules (finding relationships between variables)."
  }

  if (lowerMessage.includes("neural network") || lowerMessage.includes("deep learning")) {
    return "Neural networks are computing systems inspired by biological neural networks. They consist of interconnected nodes (neurons) organized in layers. Deep learning uses neural networks with multiple hidden layers to learn complex patterns. They're particularly effective for tasks like image recognition, natural language processing, and speech recognition."
  }

  if (lowerMessage.includes("algorithm")) {
    return "ML algorithms are mathematical procedures that find patterns in data. Some popular ones include:\n\n• Linear Regression - for predicting continuous values\n• Decision Trees - for classification and regression\n• Random Forest - ensemble of decision trees\n• SVM - for classification and regression\n• K-Means - for clustering\n• Neural Networks - for complex pattern recognition\n\nWhich algorithm would you like to learn more about?"
  }

  if (lowerMessage.includes("study") || lowerMessage.includes("learn") || lowerMessage.includes("help")) {
    return "I'm here to help with your ML studies! I can assist with:\n\n• Explaining ML concepts and algorithms\n• Helping with assignments and projects\n• Creating study plans\n• Reviewing course materials\n• Answering questions about specific topics\n\nWhat specific area would you like help with today?"
  }

  if (lowerMessage.includes("assignment") || lowerMessage.includes("homework")) {
    return "I'd be happy to help with your ML assignment! I can:\n\n• Explain concepts you're struggling with\n• Help you understand problem requirements\n• Guide you through algorithm selection\n• Review your approach and suggest improvements\n• Help with coding implementation\n\nWhat specific assignment are you working on?"
  }

  if (lowerMessage.includes("python") || lowerMessage.includes("code") || lowerMessage.includes("programming")) {
    return "Python is the most popular language for ML! Key libraries include:\n\n• NumPy - numerical computing\n• Pandas - data manipulation\n• Scikit-learn - ML algorithms\n• TensorFlow/PyTorch - deep learning\n• Matplotlib/Seaborn - data visualization\n\nWould you like help with any specific Python ML implementation?"
  }

  if (lowerMessage.includes("exam") || lowerMessage.includes("test") || lowerMessage.includes("revision")) {
    return "Great! I can help you prepare for your ML exam. Here's a study approach:\n\n• Review key concepts: supervised vs unsupervised learning\n• Practice algorithm comparisons and use cases\n• Work through mathematical foundations\n• Solve previous year questions\n• Create concept maps and summaries\n\nWhat specific topics do you want to focus on for your exam?"
  }

  // Default responses
  const defaultResponses = [
    "That's an interesting question about ML! Could you provide more details so I can give you a more specific answer?",
    "I'd be happy to help you with that ML topic. Can you tell me more about what you're trying to understand?",
    "Great question! To give you the best answer, could you share more context about what you're working on?",
    "I'm here to help with your ML learning journey. What specific aspect would you like me to explain further?",
  ]

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}
