"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Menu, X, BookOpen, Home, FileText, GraduationCap } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">SRM ML Hub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link 
              href="/" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link 
              href="/documentation" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <BookOpen className="h-4 w-4" />
              <span>Documentation</span>
            </Link>
            <Link 
              href="/courses" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span>Courses</span>
            </Link>
            <Link 
              href="/srmist" 
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <GraduationCap className="h-4 w-4" />
              <span>SRMIST</span>
            </Link>
          </div>

          {/* Desktop Auth Buttons - COMMENTED OUT FOR NOW */}
          {/* 
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Button asChild variant="ghost">
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/auth/sign-up">Get Started</Link>
            </Button>
          </div>
          */}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                href="/"
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link
                href="/documentation"
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                <span>Documentation</span>
              </Link>
              <Link
                href="/courses"
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                <FileText className="h-4 w-4" />
                <span>Courses</span>
              </Link>
              <Link
                href="/srmist"
                className="flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                <GraduationCap className="h-4 w-4" />
                <span>SRMIST</span>
              </Link>
              {/* Mobile Auth Buttons - COMMENTED OUT FOR NOW */}
              {/*
              <div className="mt-4 space-y-2">
                <Button asChild variant="ghost" className="w-full justify-start">
                  <Link href="/auth/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                </Button>
                <Button asChild className="w-full justify-start">
                  <Link href="/auth/sign-up" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
                </Button>
              </div>
              */}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}