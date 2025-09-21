"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { createClient } from "@/lib/firebase/client"
import { BookOpen, Trash2, Edit, Plus } from "lucide-react"
import { toast } from "sonner"

interface Course {
  id: string
  title: string
  description: string
  syllabus: string
  level: string
  created_at: string
}

export function AdminCoursesManager() {
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingCourse, setEditingCourse] = useState<Course | null>(null)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    syllabus: "",
    level: "beginner",
  })

  const supabase = createClient()

  useEffect(() => {
    fetchCourses()
  }, [])

  async function fetchCourses() {
    try {
      const { data, error } = await supabase.from("courses").select("*").order("created_at", { ascending: false })

      if (error) throw error
      setCourses(data || [])
    } catch (error) {
      console.error("Error fetching courses:", error)
      toast.error("Failed to load courses")
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)

    try {
      if (editingCourse) {
        const { error } = await supabase.from("courses").update(formData).eq("id", editingCourse.id)

        if (error) throw error
        toast.success("Course updated successfully")
      } else {
        const { error } = await supabase.from("courses").insert([formData])

        if (error) throw error
        toast.success("Course created successfully")
      }

      setFormData({
        title: "",
        description: "",
        syllabus: "",
        level: "beginner",
      })
      setShowForm(false)
      setEditingCourse(null)
      fetchCourses()
    } catch (error) {
      console.error("Error saving course:", error)
      toast.error("Failed to save course")
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this course? This will also delete all associated materials.")) return

    try {
      const { error } = await supabase.from("courses").delete().eq("id", id)

      if (error) throw error
      toast.success("Course deleted successfully")
      fetchCourses()
    } catch (error) {
      console.error("Error deleting course:", error)
      toast.error("Failed to delete course")
    }
  }

  function handleEdit(course: Course) {
    setEditingCourse(course)
    setFormData({
      title: course.title,
      description: course.description || "",
      syllabus: course.syllabus || "",
      level: course.level,
    })
    setShowForm(true)
  }

  const levels = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ]

  if (loading) {
    return <div className="container mx-auto p-6">Loading...</div>
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Courses Manager</h1>
          <p className="text-muted-foreground mt-2">Create and manage ML courses for students</p>
        </div>
        <Button
          onClick={() => {
            setShowForm(true)
            setEditingCourse(null)
            setFormData({
              title: "",
              description: "",
              syllabus: "",
              level: "beginner",
            })
          }}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Course
        </Button>
      </div>

      {/* Course Form */}
      {showForm && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">{editingCourse ? "Edit Course" : "Create New Course"}</CardTitle>
            <CardDescription>Add course information that will be visible to all students</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Course Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Machine Learning Fundamentals"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Level</Label>
                  <Select value={formData.level} onValueChange={(value) => setFormData({ ...formData, level: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {levels.map((level) => (
                        <SelectItem key={level.value} value={level.value}>
                          {level.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of the course"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="syllabus">Syllabus</Label>
                <Textarea
                  id="syllabus"
                  value={formData.syllabus}
                  onChange={(e) => setFormData({ ...formData, syllabus: e.target.value })}
                  placeholder="Detailed course syllabus and topics covered"
                  rows={8}
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={saving}>
                  {saving ? "Saving..." : editingCourse ? "Update Course" : "Create Course"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowForm(false)
                    setEditingCourse(null)
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Courses List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Existing Courses</h2>
        {courses.length === 0 ? (
          <Card className="bg-card border-border">
            <CardContent className="flex items-center justify-center py-8">
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No courses created yet</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {courses.map((course) => (
              <Card key={course.id} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{course.title}</h3>
                        <Badge variant="secondary">{course.level.toUpperCase()}</Badge>
                      </div>
                      {course.description && <p className="text-sm text-muted-foreground mb-2">{course.description}</p>}
                      <p className="text-xs text-muted-foreground">
                        Created: {new Date(course.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(course)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(course.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
