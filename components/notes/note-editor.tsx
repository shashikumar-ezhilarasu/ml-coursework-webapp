"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/firebase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Save, ArrowLeft, X } from "lucide-react"
import Link from "next/link"

interface Course {
  id: string
  title: string
}

interface Note {
  id: string
  title: string
  content: string
  course_id: string
  tags: string[]
}

interface NoteEditorProps {
  note?: Note
  courses: Course[]
}

export function NoteEditor({ note, courses }: NoteEditorProps) {
  const [title, setTitle] = useState(note?.title || "")
  const [content, setContent] = useState(note?.content || "")
  const [courseId, setCourseId] = useState(note?.course_id || "none") // Updated default value to "none"
  const [tags, setTags] = useState<string[]>(note?.tags || [])
  const [newTag, setNewTag] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const supabase = createClient()

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      setError("Title and content are required")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        throw new Error("User not authenticated")
      }

      const noteData = {
        title: title.trim(),
        content: content.trim(),
        course_id: courseId === "none" ? null : courseId, // Updated condition to handle "none" value
        tags,
        user_id: user.uid,
      }

      if (note) {
        // Update existing note
        const { error } = await supabase.from("user_notes").update(noteData).eq("id", note.id).eq("user_id", user.uid)

        if (error) throw error
      } else {
        // Create new note
        const { error } = await supabase.from("user_notes").insert(noteData)

        if (error) throw error
      }

      router.push("/notes")
    } catch (error: any) {
      setError(error.message || "An error occurred while saving the note")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
          <Link href="/notes" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Notes
          </Link>
        </Button>
        <Button onClick={handleSave} disabled={isLoading} className="bg-primary hover:bg-primary/90">
          <Save className="mr-2 h-4 w-4" />
          {isLoading ? "Saving..." : "Save Note"}
        </Button>
      </div>

      {/* Editor */}
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Note Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <div className="rounded-md bg-destructive/10 p-3">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-card-foreground">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Enter note title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-input border-border text-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course" className="text-card-foreground">
                Course (Optional)
              </Label>
              <Select value={courseId} onValueChange={setCourseId}>
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="Select a course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No course</SelectItem> {/* Updated value prop to "none" */}
                  {courses.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content" className="text-card-foreground">
              Content
            </Label>
            <Textarea
              id="content"
              placeholder="Write your note content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[300px] bg-input border-border text-foreground resize-none"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-card-foreground">Tags</Label>
            <div className="flex gap-2">
              <Input
                placeholder="Add a tag..."
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTag()}
                className="bg-input border-border text-foreground"
              />
              <Button type="button" onClick={addTag} variant="outline" className="border-border bg-transparent">
                Add
              </Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center gap-1">
                    {tag}
                    <button 
                      onClick={() => removeTag(tag)} 
                      className="ml-1 hover:text-destructive"
                      aria-label={`Remove tag ${tag}`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
