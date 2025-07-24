import { StatsCard } from "@/components/dashboard/StatsCard"
import { CandidateList } from "@/components/dashboard/CandidateList"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Calendar, Target, Clock, TrendingUp, FileText } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import hiringIllustration from "@/assets/hiring-team-illustration.png"

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah! 👋</h1>
          <p className="text-muted-foreground mt-1">Here's what's happening with your hiring pipeline today.</p>
        </div>
        <div className="hidden lg:block">
          <img 
            src={hiringIllustration} 
            alt="Hiring team illustration" 
            className="h-24 w-auto opacity-80"
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Candidates"
          value="247"
          change={{ value: 12, type: "increase", period: "last week" }}
          icon={<Users />}
        />
        <StatsCard
          title="Interviews This Week"
          value="18"
          change={{ value: 5, type: "increase", period: "last week" }}
          icon={<Calendar />}
        />
        <StatsCard
          title="Positions to Fill"
          value="12"
          change={{ value: -2, type: "decrease", period: "last month" }}
          icon={<Target />}
        />
        <StatsCard
          title="Avg. Time to Hire"
          value="21 days"
          change={{ value: -8, type: "decrease", period: "last quarter" }}
          icon={<Clock />}
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hiring Funnel */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Hiring Funnel Performance
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Applications</span>
                  <span className="text-sm text-muted-foreground">247 candidates</span>
                </div>
                <Progress value={100} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Phone Screening</span>
                  <span className="text-sm text-muted-foreground">89 candidates</span>
                </div>
                <Progress value={36} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Technical Interview</span>
                  <span className="text-sm text-muted-foreground">34 candidates</span>
                </div>
                <Progress value={14} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Final Interview</span>
                  <span className="text-sm text-muted-foreground">18 candidates</span>
                </div>
                <Progress value={7} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Offers Extended</span>
                  <span className="text-sm text-muted-foreground">12 candidates</span>
                </div>
                <Progress value={5} className="h-2" />
              </div>
            </div>
            
            <div className="flex gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">67%</div>
                <div className="text-xs text-muted-foreground">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">21</div>
                <div className="text-xs text-muted-foreground">Avg. Days</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">92%</div>
                <div className="text-xs text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              AI Resume Review
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Interview
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Users className="h-4 w-4 mr-2" />
              View All Candidates
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Target className="h-4 w-4 mr-2" />
              Post New Job
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Candidates */}
      <CandidateList />
    </div>
  )
}

export default Dashboard