import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Clock, 
  DollarSign, 
  TrendingDown,
  Calendar,
  Video,
  User,
  MapPin,
  Star,
  ChevronRight
} from "lucide-react"

const upcomingInterviews = [
  {
    id: 1,
    candidate: "Sarah Johnson",
    role: "Senior Frontend Developer",
    time: "10:00 AM",
    type: "Technical Interview",
    interviewer: "Alex Chen",
    location: "Google Meet",
    rating: 4.8
  },
  {
    id: 2,
    candidate: "Michael Rodriguez",
    role: "Product Designer",
    time: "2:30 PM", 
    type: "Portfolio Review",
    interviewer: "Emily Davis",
    location: "Zoom",
    rating: 4.6
  },
  {
    id: 3,
    candidate: "Jessica Kim",
    role: "DevOps Engineer",
    time: "4:00 PM",
    type: "System Design",
    interviewer: "David Wilson",
    location: "Google Meet",
    rating: 4.9
  }
]

const metrics = [
  {
    title: "Average Time to Hire",
    value: "18 days",
    change: -12,
    icon: Clock,
    trend: "down"
  },
  {
    title: "Cost Per Hire",
    value: "$3,200",
    change: -8,
    icon: DollarSign,
    trend: "down"
  },
  {
    title: "Active Candidates",
    value: "247",
    change: 15,
    icon: Users,
    trend: "up"
  },
  {
    title: "Drop-off Rate",
    value: "12%",
    change: -5,
    icon: TrendingDown,
    trend: "down"
  }
]

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Alex! 👋</h1>
          <p className="text-muted-foreground mt-1">
            Here's your hiring pipeline overview for today
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Today</p>
          <p className="text-lg font-semibold">{new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</p>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="shadow-soft hover:shadow-elegant transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{metric.value}</div>
              <div className="flex items-center text-xs mt-1">
                <span className={`${
                  metric.trend === 'up' 
                    ? 'text-success' 
                    : 'text-success'
                } font-medium`}>
                  {metric.change > 0 ? '+' : ''}{metric.change}%
                </span>
                <span className="text-muted-foreground ml-1">from last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Interviews */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Today's Interviews
              </CardTitle>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {upcomingInterviews.map((interview) => (
              <div 
                key={interview.id} 
                className="flex items-center justify-between p-4 bg-accent/50 rounded-lg border border-border hover:bg-accent/70 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{interview.candidate}</h4>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-warning fill-warning" />
                        <span className="text-xs text-muted-foreground">{interview.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{interview.role}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <Badge variant="secondary">{interview.type}</Badge>
                      <span>with {interview.interviewer}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <div className="text-sm font-medium text-foreground">{interview.time}</div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{interview.location}</span>
                  </div>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    <Video className="h-4 w-4 mr-2" />
                    Join Meet
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions & Insights */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full justify-between" variant="outline">
                Review Resumes
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button className="w-full justify-between" variant="outline">
                Schedule Interview
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button className="w-full justify-between" variant="outline">
                Post New Job
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button className="w-full justify-between" variant="outline">
                Generate Report
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Hiring Progress */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle>This Week's Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Applications Reviewed</span>
                  <span className="font-medium">64/80</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Interviews Completed</span>
                  <span className="font-medium">12/15</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Offers Extended</span>
                  <span className="font-medium">3/5</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Dashboard