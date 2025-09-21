"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Presentation, Book, HelpCircle, Eye, ExternalLink } from "lucide-react"
import { createClient } from "@/lib/firebase/client"
import { toast } from "sonner"

interface Material {
  id: string
  title: string
  description: string
  type: string
  content: string
  file_url: string
  created_at: string
}

interface CourseMaterialsProps {
  courseId: string
}

export function CourseMaterials({ courseId }: CourseMaterialsProps) {
  const [materials, setMaterials] = useState<Material[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMaterial, setSelectedMaterial] = useState<Material | null>(null)
  const supabase = createClient()

  useEffect(() => {
    fetchMaterials()
  }, [courseId])

  async function fetchMaterials() {
    try {
      const { data, error } = await supabase
        .from("course_materials")
        .select("*")
        .eq("course_id", courseId)
        .order("created_at", { ascending: false })

      if (error) throw error
      setMaterials(data || [])
    } catch (error) {
      console.error("Error fetching materials:", error)
      toast.error("Failed to load materials")
    } finally {
      setLoading(false)
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "ppt":
        return Presentation
      case "notes":
        return FileText
      case "book":
        return Book
      case "pyq":
        return HelpCircle
      default:
        return FileText
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "ppt":
        return "bg-blue-500/10 text-blue-500"
      case "notes":
        return "bg-green-500/10 text-green-500"
      case "book":
        return "bg-purple-500/10 text-purple-500"
      case "pyq":
        return "bg-orange-500/10 text-orange-500"
      default:
        return "bg-muted text-muted-foreground"
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "ppt":
        return "Presentation"
      case "notes":
        return "Notes"
      case "book":
        return "Book"
      case "pyq":
        return "Previous Year Questions"
      default:
        return type
    }
  }

  const handleViewMaterial = (material: Material) => {
    if (material.file_url) {
      window.open(material.file_url, "_blank")
    } else {
      setSelectedMaterial(material)
    }
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Loading materials...</p>
      </div>
    )
  }

  if (materials.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">No materials available</h3>
        <p className="mt-2 text-muted-foreground">Materials will be added by instructors soon.</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {materials.map((material) => {
          const Icon = getTypeIcon(material.type)
          return (
            <Card key={material.id} className="bg-card border-border hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base text-card-foreground line-clamp-2">{material.title}</CardTitle>
                    </div>
                  </div>
                  <Badge className={getTypeColor(material.type)}>{getTypeLabel(material.type)}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {material.description && (
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{material.description}</p>
                )}
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => handleViewMaterial(material)}
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  {material.file_url && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border bg-transparent"
                      onClick={() => window.open(material.file_url, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Material Content Modal */}
      {selectedMaterial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card border-border rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">{selectedMaterial.title}</h2>
                <Button variant="ghost" onClick={() => setSelectedMaterial(null)}>
                  ×
                </Button>
              </div>
            </div>
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="prose prose-invert max-w-none">
                <pre className="whitespace-pre-wrap text-sm text-foreground">{selectedMaterial.content}</pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
