import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, Search } from "lucide-react"
import Link from "next/link"

export function NotesHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-foreground">My Notes</h1>
        <p className="mt-2 text-muted-foreground">Organize and manage your ML learning notes</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search notes..." className="pl-10 w-64 bg-input border-border" />
        </div>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/notes/new" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Note
          </Link>
        </Button>
      </div>
    </div>
  )
}
