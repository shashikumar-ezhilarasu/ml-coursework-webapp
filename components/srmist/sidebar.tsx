"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, HelpCircle, Presentation, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type SidebarProps = {
  activeSection: string
  setActiveSection: (section: string) => void
}

export function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  const menuItems = [
    {
      id: "syllabus",
      label: "ML Syllabus",
      icon: BookOpen,
    },
    {
      id: "notes",
      label: "ML Notes",
      icon: FileText,
    },
    {
      id: "pyqs",
      label: "ML Question Papers",
      icon: HelpCircle,
    },
    {
      id: "presentations",
      label: "ML Unit Presentations",
      icon: Presentation,
    },
  ]

  return (
    <div 
      className={cn(
        "flex flex-col border-r bg-background transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!collapsed && <h2 className="text-lg font-semibold">ML Resources</h2>}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed(!collapsed)}
          className={cn("ml-auto", !collapsed && "ml-auto")}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                collapsed && "justify-center px-2"
              )}
              onClick={() => setActiveSection(item.id)}
              data-section={item.id}
            >
              <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "mr-2")} />
              {!collapsed && <span>{item.label}</span>}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}