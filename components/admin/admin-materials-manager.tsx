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
import { FileText, Trash2, Edit, Plus } from "lucide-react"
import { toast } from "sonner"

interface Course {
  id: string
  title: string
}

interface Material {
  id: string
  title: string
  description: string
  type: string
  file_url: string
  content: string
  course_id: string
  courses: { title: string }
  created_at: string
}

export function AdminMaterialsManager() {
  const [courses, setCourses] = useState<Course[]>([])
  const [materials, setMaterials] = useState<Material[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [editingMaterial, setEditingMaterial] = useState<Material | null>(null)

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "notes",
    course_id: "",
    content: "",
    file_url: "",
  })

  const supabase = createClient()

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const [coursesRes, materialsRes] = await Promise.all([
        supabase.from("courses").select("id, title").order("title"),
        supabase
          .from("course_materials")
          .select(`
          *,
          courses(title)
        `)
          .order("created_at", { ascending: false }),
      ])

      if (coursesRes.data) setCourses(coursesRes.data)
      if (materialsRes.data) setMaterials(materialsRes.data)
    } catch (error) {
      console.error("Error fetching data:", error)
      toast.error("Failed to load data")
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setUploading(true)

    try {
      if (editingMaterial) {
        const { error } = await supabase.from("course_materials").update(formData).eq("id", editingMaterial.id)

        if (error) throw error
        toast.success("Material updated successfully")
      } else {
        const { error } = await supabase.from("course_materials").insert([formData])

        if (error) throw error
        toast.success("Material uploaded successfully")
      }

      setFormData({
        title: "",
        description: "",
        type: "notes",
        course_id: "",
        content: "",
        file_url: "",
      })
      setShowForm(false)
      setEditingMaterial(null)
      fetchData()
    } catch (error) {
      console.error("Error saving material:", error)
      toast.error("Failed to save material")
    } finally {
      setUploading(false)
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Are you sure you want to delete this material?")) return

    try {
      const { error } = await supabase.from("course_materials").delete().eq("id", id)

      if (error) throw error
      toast.success("Material deleted successfully")
      fetchData()
    } catch (error) {
      console.error("Error deleting material:", error)
      toast.error("Failed to delete material")
    }
  }

  function handleEdit(material: Material) {
    setEditingMaterial(material)
    setFormData({
      title: material.title,
      description: material.description || "",
      type: material.type,
      course_id: material.course_id,
      content: material.content || "",
      file_url: material.file_url || "",
    })
    setShowForm(true)
  }

  const materialTypes = [
    { value: "notes", label: "Notes" },
    { value: "ppt", label: "PowerPoint" },
    { value: "book", label: "Book/PDF" },
    { value: "pyq", label: "Previous Year Questions" },
    { value: "video", label: "Video" },
  ]

  if (loading) {
    return <div className="container mx-auto p-6">Loading...</div>
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Materials Manager</h1>
          <p className="text-muted-foreground mt-2">Upload and manage course materials for students</p>
        </div>
        <Button
          onClick={() => {
            setShowForm(true)
            setEditingMaterial(null)
            setFormData({
              title: "",
              description: "",
              type: "notes",
              course_id: "",
              content: "",
              file_url: "",
            })
          }}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Material
        </Button>
      </div>

      {/* Upload Form */}
      {showForm && (
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">
              {editingMaterial ? "Edit Material" : "Upload New Material"}
            </CardTitle>
            <CardDescription>Add course materials that will be visible to all students</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Material title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Type</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {materialTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Course</Label>
                <Select
                  value={formData.course_id}
                  onValueChange={(value) => setFormData({ ...formData, course_id: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courses.map((course) => (
                      <SelectItem key={course.id} value={course.id}>
                        {course.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of the material"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file_url">File URL (optional)</Label>
                <Input
                  id="file_url"
                  value={formData.file_url}
                  onChange={(e) => setFormData({ ...formData, file_url: e.target.value })}
                  placeholder="https://example.com/file.pdf"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Material content or notes"
                  rows={6}
                />
              </div>

              <div className="flex gap-2">
                <Button type="submit" disabled={uploading}>
                  {uploading ? "Saving..." : editingMaterial ? "Update Material" : "Upload Material"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowForm(false)
                    setEditingMaterial(null)
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Materials List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Uploaded Materials</h2>
        {materials.length === 0 ? (
          <Card className="bg-card border-border">
            <CardContent className="flex items-center justify-center py-8">
              <div className="text-center">
                <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No materials uploaded yet</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {materials.map((material) => (
              <Card key={material.id} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{material.title}</h3>
                        <Badge variant="secondary">{material.type.toUpperCase()}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Course: {material.courses?.title}</p>
                      {material.description && (
                        <p className="text-sm text-muted-foreground mb-2">{material.description}</p>
                      )}
                      <p className="text-xs text-muted-foreground">
                        Uploaded: {new Date(material.created_at).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => handleEdit(material)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(material.id)}>
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
