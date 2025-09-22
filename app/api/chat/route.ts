import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, history, model } = await request.json()
    console.log(`API received request with model: ${model}, message: "${message.substring(0, 30)}..."`)

    let response: string
    
    // Handle different model options
    if (model === "gemini") {
      try {
        // Use Gemini API for ML/AI-related queries
        console.log("Attempting to use Gemini API for response")
        response = await generateGeminiResponse(message, history)
        console.log("Gemini API response received successfully")
      } catch (geminiError: any) {
        console.error("Gemini API specific error:", geminiError)
        
        let errorMessage = "Failed to connect to Gemini API.";
        
        // Check for quota exceeded errors
        if (geminiError.message && geminiError.message.includes("quota exceeded")) {
          errorMessage = "You've reached the Gemini API quota limit. Please try again later or switch to the default model.";
        } 
        // Check for invalid API key errors
        else if (geminiError.message && geminiError.message.includes("API key")) {
          errorMessage = "The Gemini API key appears to be invalid. Please check your configuration.";
        }
        // Check for endpoint errors
        else if (geminiError.message && geminiError.message.includes("404")) {
          errorMessage = "The Gemini API endpoint couldn't be found. This might be due to an API version change.";
        }
        
        // Fall back to the default model automatically
        console.log("Falling back to default response system due to Gemini API error")
        response = await generateResponse(message, history)
        
        // Return both the fallback response and error information
        return NextResponse.json({ 
          response: response,
          warning: errorMessage,
          usedFallback: true
        })
      }
    } else if (model === "localLLM") {
      try {
        // Use local LLM server for responses
        console.log("Attempting to use Local LLM server for response")
        response = await generateLocalLLMResponse(message)
        console.log("Local LLM response received successfully")
      } catch (localLLMError: any) {
        console.error("Local LLM specific error:", localLLMError)
        
        let errorMessage = "Failed to connect to Local LLM server.";
        
        // Check for connection errors
        if (localLLMError.message && localLLMError.message.includes("ECONNREFUSED")) {
          errorMessage = "Could not connect to the Local LLM server. Please make sure the server is running at http://localhost:8000.";
        }
        // Check for timeout errors
        else if (localLLMError.message && localLLMError.message.includes("timeout")) {
          errorMessage = "The Local LLM server took too long to respond. The server might be processing another request or under heavy load.";
        }
        // Check for invalid response format
        else if (localLLMError.message && localLLMError.message.includes("Invalid response format")) {
          errorMessage = "The Local LLM server returned an unexpected response format. There might be an issue with the server implementation.";
        }
        // Check for HTTP errors
        else if (localLLMError.message && localLLMError.message.includes("HTTP error")) {
          errorMessage = "The Local LLM server returned an error. Please check the server logs for more information.";
        }
        
        // Fall back to the default model automatically
        console.log("Falling back to default response system due to Local LLM error")
        response = await generateResponse(message, history)
        
        // Return both the fallback response and error information
        return NextResponse.json({ 
          response: response,
          warning: errorMessage,
          usedFallback: true
        })
      }
    } else {
      // Use the default simple response system
      console.log("Using default response system")
      response = await generateResponse(message, history)
    }

    if (response) {
      console.log(`API sending response: ${response.substring(0, 50)}...`)
      return NextResponse.json({ response })
    } else {
      throw new Error("Empty response received from AI model")
    }
  } catch (error) {
    console.error("Chat API general error:", error)
    return NextResponse.json({ 
      error: "Failed to process message. Please try again or switch models.",
      fallbackAvailable: true
    }, { status: 500 })
  }
}

async function generateGeminiResponse(message: string, history: any[]) {
  try {
    const API_KEY = process.env.GEMINI_API_KEY
    console.log("Using Gemini API Key (first 5 chars):", API_KEY?.substring(0, 5) + "...")
    
    if (!API_KEY) {
      console.error("Gemini API key not found in environment variables")
      throw new Error("Gemini API key not configured")
    }
    
    // Filter history to keep only the most recent messages (to avoid token limits)
    const recentHistory = history.slice(-3)
    
    // Create conversation context from history
    const conversationContext = recentHistory.map((msg: any) => {
      return {
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }]
      }
    })

    // Create a structured prompt for Gemini 1.5 Flash
    const simplifiedPrompt = `Act as a highly knowledgeable tutor specializing in machine learning, AI, statistics, mathematics, and data science. 
Provide an educational and accurate answer to this question: ${message}
Focus only on educational content related to these topics.`
    
    console.log("Sending request to Gemini API with simplified prompt using Gemini 1.5 Flash model")
    
    // Use the Gemini 1.5 Flash model endpoint
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`
    
    // Make request to Gemini API with simplified payload
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              { text: simplifiedPrompt }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.2, // Lower temperature for more focused educational responses
          maxOutputTokens: 1024,
          topK: 40,
          topP: 0.95
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    })

    // Check for HTTP errors
    if (!response.ok) {
      console.error("Gemini API HTTP error:", response.status, response.statusText)
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    
    // Log partial response for debugging
    console.log("Gemini API response structure:", Object.keys(data))
    
    if (data.error) {
      console.error("Gemini API returned error:", data.error)
      throw new Error(data.error.message || "Error from Gemini API")
    }
    
    // Extract text response with improved path handling
    let textResponse
    
    if (data.candidates && data.candidates.length > 0) {
      const candidate = data.candidates[0]
      if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
        textResponse = candidate.content.parts[0].text
      }
    }
    
    if (!textResponse) {
      console.error("Unexpected Gemini API response structure:", JSON.stringify(data).substring(0, 200))
      return "I'm having trouble processing that. Please try again with a question about machine learning, AI, or data science."
    }
    
    console.log("Successfully extracted Gemini response:", textResponse.substring(0, 50) + "...")
    return textResponse
    
  } catch (error) {
    console.error("Gemini API error:", error)
    
    // Instead of returning a message, throw the error to be caught by the parent function
    // This allows proper error handling in the API route
    throw new Error(`Gemini API error: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }
}

async function generateLocalLLMResponse(message: string) {
  try {
    console.log("Sending request to Local LLM server")
    
    // Default to localhost:8000 as seen in your logs
    const LOCAL_LLM_SERVER = process.env.LOCAL_LLM_SERVER || "http://localhost:8000"
    
    // Make request to the local LLM server endpoint
    const response = await fetch(`${LOCAL_LLM_SERVER}/query`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: message
      })
    })

    // Check for HTTP errors
    if (!response.ok) {
      console.error("Local LLM server HTTP error:", response.status, response.statusText)
      throw new Error(`HTTP error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    
    // Log partial response for debugging
    console.log("Local LLM response received:", Object.keys(data))
    
    // Extract the answer from the response
    if (!data.answer) {
      console.error("Unexpected Local LLM server response structure:", JSON.stringify(data).substring(0, 200))
      throw new Error("Invalid response format from Local LLM server")
    }
    
    console.log("Successfully extracted Local LLM response:", data.answer.substring(0, 50) + "...")
    return data.answer
    
  } catch (error) {
    console.error("Local LLM server error:", error)
    throw new Error(`Local LLM server error: ${error instanceof Error ? error.message : 'Unknown error'}`)
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
