import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Calendar, MapPin } from "lucide-react"

interface Candidate {
  id: string
  name: string
  role: string
  avatar?: string
  rating: number
  experience: string
  location: string
  status: "new" | "reviewing" | "interview" | "offer" | "hired"
  interviewDate?: string
}

const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "Alex Thompson",
    role: "Senior Frontend Developer",
    rating: 4.8,
    experience: "5+ years",
    location: "San Francisco, CA",
    status: "interview",
    interviewDate: "Today, 2:30 PM"
  },
  {
    id: "2",
    name: "Maria Garcia",
    role: "Product Designer",
    rating: 4.9,
    experience: "4 years",
    location: "New York, NY",
    status: "reviewing"
  },
  {
    id: "3",
    name: "David Chen",
    role: "DevOps Engineer",
    rating: 4.7,
    experience: "6+ years",
    location: "Austin, TX",
    status: "offer"
  },
  {
    id: "4",
    name: "Sarah Wilson",
    role: "Data Scientist",
    rating: 4.6,
    experience: "3 years",
    location: "Seattle, WA",
    status: "new"
  }
]

const statusColors = {
  new: "bg-blue-100 text-blue-800",
  reviewing: "bg-yellow-100 text-yellow-800",
  interview: "bg-purple-100 text-purple-800",
  offer: "bg-green-100 text-green-800",
  hired: "bg-gray-100 text-gray-800"
}

export function CandidateList() {
  return (
    <Card className="shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Recent Candidates
          <Button variant="outline" size="sm">View All</Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockCandidates.map((candidate) => (
          <div key={candidate.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-accent/50 transition-colors">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={candidate.avatar} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {candidate.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground">{candidate.name}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-warning fill-warning" />
                    <span className="text-xs text-muted-foreground">{candidate.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{candidate.role}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{candidate.experience}</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{candidate.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {candidate.interviewDate && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{candidate.interviewDate}</span>
                </div>
              )}
              <Badge className={statusColors[candidate.status]}>
                {candidate.status}
              </Badge>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}