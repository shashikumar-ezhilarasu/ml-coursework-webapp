"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/firebase/client"
import { BookOpen, FileText, Users, Video, Plus, Upload } from "lucide-react"
import Link from "next/link"

interface DashboardStats {
  totalCourses: number
  totalMaterials: number
  totalStudents: number
  totalVideos: number
}

export function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalCourses: 0,
    totalMaterials: 0,
    totalStudents: 0,
    totalVideos: 0,
  })
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchStats() {
      try {
        // Mock data for now since we're using Firebase compatibility layer
        setStats({
          totalCourses: 5,
          totalMaterials: 15,
          totalStudents: 120,
          totalVideos: 8,
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [supabase])

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">Manage ML coursework content for SRM Ramapuram students</p>
        </div>
        <Badge variant="secondary" className="px-3 py-1">
          Administrator
        </Badge>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{loading ? "..." : stats.totalCourses}</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Course Materials</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{loading ? "..." : stats.totalMaterials}</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Students</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{loading ? "..." : stats.totalStudents}</div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Video Resources</CardTitle>
            <Video className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{loading ? "..." : stats.totalVideos}</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-card border-border hover:bg-accent/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Plus className="h-5 w-5 text-primary" />
              Manage Courses
            </CardTitle>
            <CardDescription>Create and edit course information, syllabus, and structure</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/courses">
              <Button className="w-full">Manage Courses</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:bg-accent/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Upload className="h-5 w-5 text-primary" />
              Upload Materials
            </CardTitle>
            <CardDescription>Add PPTs, notes, books, PYQs, and other course materials</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/materials">
              <Button className="w-full">Upload Materials</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-card border-border hover:bg-accent/50 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Video className="h-5 w-5 text-primary" />
              Manage Videos
            </CardTitle>
            <CardDescription>Add and organize YouTube videos and learning resources</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/admin/videos">
              <Button className="w-full">Manage Videos</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
