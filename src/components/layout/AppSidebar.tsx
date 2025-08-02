import { NavLink, useLocation } from "react-router-dom"
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  GitBranch, 
  Briefcase, 
  Calendar,
  FileText,
  Brain
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
  SidebarHeader,
} from "@/components/ui/sidebar"

const navigationItems = [
  { 
    title: "Dashboard", 
    url: "/", 
    icon: BarChart3,
    description: "Overview & Metrics"
  },
  { 
    title: "Candidates", 
    url: "/candidates", 
    icon: Users,
    description: "Resume Management"
  },
  { 
    title: "ATS Insights", 
    url: "/ats-insights", 
    icon: TrendingUp,
    description: "Funnel Analysis"
  },
  { 
    title: "Hiring Funnel", 
    url: "/hiring-funnel", 
    icon: GitBranch,
    description: "Pipeline Management"
  },
  { 
    title: "Job Listings", 
    url: "/jobs", 
    icon: Briefcase,
    description: "Posting Management"
  },
  { 
    title: "Schedule", 
    url: "/schedule", 
    icon: Calendar,
    description: "Interview Planning"
  },
  { 
    title: "Reports & Analytics", 
    url: "/reports", 
    icon: FileText,
    description: "Performance Reports"
  },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/"
    }
    return currentPath.startsWith(path)
  }

  const getNavClassName = (path: string) => {
    const baseClasses = "w-full justify-start transition-colors"
    if (isActive(path)) {
      return `${baseClasses} bg-primary text-primary-foreground hover:bg-primary/90`
    }
    return `${baseClasses} hover:bg-accent hover:text-accent-foreground`
  }

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Brain className="h-5 w-5" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-foreground">SmartHire</h1>
              <p className="text-xs text-muted-foreground">Hiring Dashboard</p>
            </div>
          )}
        </div>
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={getNavClassName(item.url)}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && (
                        <div className="flex flex-col">
                          <span className="text-sm font-medium">{item.title}</span>
                          <span className="text-xs opacity-75">{item.description}</span>
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}