import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ChatbotWidget } from "@/components/chatbot/chatbot-widget"
import { AuthProvider } from "@/lib/firebase/auth-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SRM ML Hub - Machine Learning Coursework Platform",
  description:
    "Complete ML coursework platform for SRM Ramapuram students with courses, notes, learning paths, and AI assistance.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <ChatbotWidget />
        </AuthProvider>
      </body>
    </html>
  )
}
