import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, Eye, Edit, MoreHorizontal, Target, Users, Clock } from "lucide-react"

const mockJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    posted: "5 days ago",
    status: "active",
    applications: 89,
    views: 1247,
    clickRate: 7.1,
    conversionRate: 12.3,
    budget: "$120,000 - $150,000",
    performance: {
      impressions: 15420,
      applications: 89,
      qualified: 34,
      interviews: 12
    }
  },
  {
    id: "2",
    title: "Product Designer",
    department: "Design",
    posted: "2 weeks ago",
    status: "active",
    applications: 156,
    views: 2103,
    clickRate: 9.4,
    conversionRate: 18.7,
    budget: "$90,000 - $120,000",
    performance: {
      impressions: 22350,
      applications: 156,
      qualified: 67,
      interviews: 23
    }
  },
  {
    id: "3",
    title: "DevOps Engineer",
    department: "Engineering",
    posted: "1 week ago",
    status: "paused",
    applications: 67,
    views: 834,
    clickRate: 8.0,
    conversionRate: 15.2,
    budget: "$110,000 - $140,000",
    performance: {
      impressions: 10425,
      applications: 67,
      qualified: 28,
      interviews: 8
    }
  },
  {
    id: "4",
    title: "Marketing Manager",
    department: "Marketing",
    posted: "3 days ago",
    status: "active",
    applications: 45,
    views: 612,
    clickRate: 7.3,
    conversionRate: 9.8,
    budget: "$75,000 - $95,000",
    performance: {
      impressions: 8380,
      applications: 45,
      qualified: 18,
      interviews: 6
    }
  }
]

const statusColors = {
  active: "bg-success text-success-foreground",
  paused: "bg-warning text-warning-foreground",
  closed: "bg-muted text-muted-foreground"
}

const JobPerformance = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Target className="h-8 w-8 text-primary" />
            Job Performance
          </h1>
          <p className="text-muted-foreground mt-1">
            Track and optimize your job postings performance
          </p>
        </div>
        <Button>
          <Edit className="h-4 w-4 mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,796</div>
            <div className="flex items-center text-xs">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+12.5%</span>
              <span className="text-muted-foreground ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">357</div>
            <div className="flex items-center text-xs">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+8.2%</span>
              <span className="text-muted-foreground ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Click Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.0%</div>
            <div className="flex items-center text-xs">
              <TrendingDown className="h-3 w-3 text-destructive mr-1" />
              <span className="text-destructive">-2.1%</span>
              <span className="text-muted-foreground ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14.0%</div>
            <div className="flex items-center text-xs">
              <TrendingUp className="h-3 w-3 text-success mr-1" />
              <span className="text-success">+3.2%</span>
              <span className="text-muted-foreground ml-1">from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Job Listings */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle>Active Job Listings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {mockJobs.map((job) => (
              <div key={job.id} className="border border-border rounded-lg p-6 hover:bg-accent/50 transition-colors">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Job Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.department}</p>
                        <p className="text-xs text-muted-foreground mt-1">Posted {job.posted}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <Badge className={statusColors[job.status as keyof typeof statusColors]}>
                      {job.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-2">{job.budget}</p>
                  </div>

                  {/* Performance Metrics */}
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">Impressions</span>
                          <span className="text-sm font-medium">{job.performance.impressions.toLocaleString()}</span>
                        </div>
                        <Progress value={85} className="h-1.5" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">Applications</span>
                          <span className="text-sm font-medium">{job.performance.applications}</span>
                        </div>
                        <Progress value={job.performance.applications / 2} className="h-1.5" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">Qualified</span>
                          <span className="text-sm font-medium">{job.performance.qualified}</span>
                        </div>
                        <Progress value={job.performance.qualified * 3} className="h-1.5" />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-muted-foreground">Interviews</span>
                          <span className="text-sm font-medium">{job.performance.interviews}</span>
                        </div>
                        <Progress value={job.performance.interviews * 8} className="h-1.5" />
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="lg:col-span-1 flex flex-col gap-2">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{job.clickRate}%</div>
                      <div className="text-xs text-muted-foreground">Click Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-success">{job.conversionRate}%</div>
                      <div className="text-xs text-muted-foreground">Conversion</div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Eye className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default JobPerformance