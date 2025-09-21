import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function VideosHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Learning Videos</h1>
        <p className="mt-2 text-muted-foreground">Curated video content to enhance your ML understanding</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search videos..." className="pl-10 w-64 bg-input border-border" />
        </div>
      </div>
    </div>
  )
}
