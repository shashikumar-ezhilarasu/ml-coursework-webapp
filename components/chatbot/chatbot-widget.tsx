"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageSquare, Send, X, Minimize2, Maximize2, Bot, User } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type ModelType = "default" | "gemini"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [selectedModel, setSelectedModel] = useState<ModelType>("default")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm your ML learning assistant. I can help you with concepts, assignments, and study planning. What would you like to know?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]")
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight
      }
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      console.log(`Sending message with model: ${selectedModel}`)
      
      // Show temporary loading message
      const loadingMessageId = Date.now().toString()
      const loadingMessage: Message = {
        id: loadingMessageId,
        content: selectedModel === "gemini" 
          ? "Connecting to Gemini AI..." 
          : "Thinking...",
        role: "assistant",
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, loadingMessage])
      
      // Call the API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputValue,
          history: messages.slice(-5), // Send last 5 messages for context
          model: selectedModel,
        }),
      })

      // Remove the loading message
      setMessages((prev) => prev.filter(msg => msg.id !== loadingMessageId))

      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      console.log("API response:", data)

      // Handle warning messages from the API (like quota exceeded)
      if (data.warning && data.usedFallback && selectedModel === "gemini") {
        // Show the warning but also the fallback response
        const warningMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `${data.warning} I've automatically switched to the default model for this response.`,
          role: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, warningMessage])
        
        // Small delay before showing the actual response
        setTimeout(() => {
          const assistantMessage: Message = {
            id: (Date.now() + 3).toString(),
            content: data.response,
            role: "assistant",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, assistantMessage])
          
          // Set the model selection to default
          setSelectedModel("default")
        }, 1000)
        return
      }
      
      // If there was an error but the API call succeeded, show option to switch models
      if (data.error && selectedModel === "gemini") {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: `${data.error || "Error connecting to Gemini AI"}. Would you like to try with the default model instead?`,
          role: "assistant",
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, errorMessage])
        
        // Add a helper message showing how to switch models
        setTimeout(() => {
          const helpMessage: Message = {
            id: (Date.now() + 2).toString(),
            content: "You can switch models using the dropdown at the top of this chat window.",
            role: "assistant",
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, helpMessage])
        }, 1000)
        return
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "No response received. Please try again.",
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Chat error:", error)
      
      // Create a user-friendly error message
      let errorContent = "Sorry, I'm having trouble connecting right now. Please try again later."
      
      // If using Gemini, suggest switching to the default model
      if (selectedModel === "gemini") {
        errorContent = "I encountered an error connecting to Gemini AI. Would you like to switch to the default model? You can do this using the dropdown at the top of the chat window."
      }
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: errorContent,
        role: "assistant",
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card
        className={`bg-card border-border shadow-xl transition-all duration-300 ${
          isMinimized ? "w-80 h-16" : "w-96 h-[500px]"
        }`}
      >
        <CardHeader className="flex flex-col p-4 border-b border-border space-y-2">
          <div className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2 text-card-foreground">
              <div className="rounded-full bg-primary/10 p-1">
                <Bot className="h-4 w-4 text-primary" />
              </div>
              ML Assistant
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </CardTitle>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={() => setIsMinimized(!isMinimized)} className="h-8 w-8 p-0">
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {!isMinimized && (
            <div className="flex items-center justify-end">
              <Select
                value={selectedModel}
                onValueChange={(value: ModelType) => setSelectedModel(value as ModelType)}
              >
                <SelectTrigger className="w-[140px] h-8 text-xs">
                  <SelectValue placeholder="Select Model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default LLM</SelectItem>
                  <SelectItem value="gemini">Gemini AI</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[calc(500px-73px)]">
            <ScrollArea ref={scrollAreaRef} className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="rounded-full bg-primary/10 p-2 h-8 w-8 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg p-3 text-sm ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                    {message.role === "user" && (
                      <div className="rounded-full bg-primary p-2 h-8 w-8 flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="rounded-full bg-primary/10 p-2 h-8 w-8 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-lg p-3 text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about ML..."
                  className="bg-input border-border text-foreground"
                  disabled={isLoading}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Press Enter to send, Shift+Enter for new line</p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}
