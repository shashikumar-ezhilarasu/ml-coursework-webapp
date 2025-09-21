import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Calendar, Tag, Edit, Trash2 } from "lucide-react"
import Link from "next/link"

interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  created_at: string
  updated_at: string
  courses?: {
    title: string
  }
}

interface NotesGridProps {
  notes: Note[]
}

export function NotesGrid({ notes }: NotesGridProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const truncateContent = (content: string, maxLength = 150) => {
    if (content.length <= maxLength) return content
    return content.substring(0, maxLength) + "..."
  }

  if (notes.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">No notes yet</h3>
        <p className="mt-2 text-muted-foreground">Create your first note to get started.</p>
        <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
          <Link href="/notes/new">Create Note</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <Card key={note.id} className="bg-card border-border hover:bg-card/80 transition-colors">
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-lg text-card-foreground line-clamp-2">{note.title}</CardTitle>
              <div className="flex gap-1">
                <Button asChild size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Link href={`/notes/${note.id}`}>
                    <Edit className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {note.courses && (
              <Badge variant="secondary" className="w-fit">
                {note.courses.title}
              </Badge>
            )}
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-4">{truncateContent(note.content)}</p>

            {note.tags && note.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {note.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
                {note.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{note.tags.length - 3} more
                  </Badge>
                )}
              </div>
            )}

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>Updated {formatDate(note.updated_at)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
