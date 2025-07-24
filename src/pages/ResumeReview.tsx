import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Brain, Star, Download, Eye, ThumbsUp, ThumbsDown } from "lucide-react"

const mockCandidates = [
  {
    id: "1",
    name: "Alex Thompson",
    role: "Senior Frontend Developer",
    score: 94,
    experience: "5+ years",
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    aiInsights: [
      "Strong technical background with 5+ years React experience",
      "Led multiple high-impact frontend projects",
      "Excellent problem-solving demonstrated in portfolio"
    ],
    resume: "alex-thompson-resume.pdf",
    matchPercentage: 94
  },
  {
    id: "2",
    name: "Maria Garcia",
    role: "Product Designer",
    score: 91,
    experience: "4 years",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    aiInsights: [
      "Strong portfolio showcasing end-to-end design process",
      "Experience with user research and testing",
      "Good technical understanding for developer collaboration"
    ],
    resume: "maria-garcia-resume.pdf",
    matchPercentage: 91
  },
  {
    id: "3",
    name: "David Chen",
    role: "DevOps Engineer",
    score: 88,
    experience: "6+ years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    aiInsights: [
      "Extensive cloud infrastructure experience",
      "Strong automation and CI/CD background",
      "Good leadership experience with infrastructure teams"
    ],
    resume: "david-chen-resume.pdf",
    matchPercentage: 88
  }
]

const ResumeReview = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <Brain className="h-8 w-8 text-primary" />
            AI Resume Review
          </h1>
          <p className="text-muted-foreground mt-1">
            AI-powered analysis to help you identify top candidates faster
          </p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* AI Insights Summary */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-warning" />
            Top Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-accent rounded-lg">
              <div className="text-2xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">High-match candidates</div>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <div className="text-2xl font-bold text-success">89%</div>
              <div className="text-sm text-muted-foreground">Average match score</div>
            </div>
            <div className="text-center p-4 bg-accent rounded-lg">
              <div className="text-2xl font-bold text-warning">4.2</div>
              <div className="text-sm text-muted-foreground">Average AI rating</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Candidate Reviews */}
      <div className="space-y-4">
        {mockCandidates.map((candidate) => (
          <Card key={candidate.id} className="shadow-soft hover:shadow-elegant transition-shadow">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Candidate Info */}
                <div className="lg:col-span-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{candidate.name}</h3>
                      <p className="text-sm text-muted-foreground">{candidate.role}</p>
                      <p className="text-xs text-muted-foreground">{candidate.experience}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">AI Match Score</span>
                        <span className="text-sm font-bold text-primary">{candidate.matchPercentage}%</span>
                      </div>
                      <Progress value={candidate.matchPercentage} className="h-2" />
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      View Resume
                    </Button>
                  </div>
                </div>

                {/* Skills */}
                <div className="lg:col-span-1">
                  <h4 className="font-medium text-foreground mb-2">Key Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* AI Insights */}
                <div className="lg:col-span-2">
                  <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    AI Insights
                  </h4>
                  <ul className="space-y-2">
                    {candidate.aiInsights.map((insight, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        {insight}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="bg-success hover:bg-success/90">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                    <Button size="sm" variant="outline">
                      <ThumbsDown className="h-4 w-4 mr-2" />
                      Reject
                    </Button>
                    <Button size="sm" variant="outline">
                      Schedule Interview
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ResumeReview