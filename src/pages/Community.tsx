import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Users, Trophy, Target, Calendar, ArrowLeft, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const challenges = [
  {
    id: 1,
    title: "Zero Waste Week",
    description: "Go an entire week without producing any plastic waste",
    participants: 234,
    duration: "7 days",
    reward: 500,
    status: "active",
    progress: 60,
    icon: Target,
    category: "Waste Reduction"
  },
  {
    id: 2,
    title: "Car-Free Month",
    description: "Use only sustainable transportation for 30 days",
    participants: 89,
    duration: "30 days",
    reward: 1000,
    status: "upcoming",
    progress: 0,
    icon: Calendar,
    category: "Transportation"
  },
  {
    id: 3,
    title: "Energy Saver",
    description: "Reduce your energy consumption by 25% this month",
    participants: 456,
    duration: "30 days",
    reward: 750,
    status: "active",
    progress: 85,
    icon: CheckCircle,
    category: "Energy"
  },
  {
    id: 4,
    title: "Local Food Challenge",
    description: "Eat only locally sourced food for 2 weeks",
    participants: 167,
    duration: "14 days",
    reward: 300,
    status: "completed",
    progress: 100,
    icon: CheckCircle,
    category: "Food"
  }
];

const communityStats = [
  { label: "Active Members", value: "2,847", icon: Users },
  { label: "Challenges Completed", value: "1,234", icon: Trophy },
  { label: "CO2 Saved (kg)", value: "45,678", icon: Target },
];

export default function Community() {
  const { toast } = useToast();

  const handleJoinChallenge = (challengeTitle: string) => {
    toast({
      title: "Challenge Joined!",
      description: `You've successfully joined the "${challengeTitle}" challenge. Good luck!`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/dashboard" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Community Challenges</h1>
        <p className="text-muted-foreground">
          Join our eco-community and participate in sustainability challenges together
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        {communityStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="eco-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Active Challenges */}
      <div className="grid gap-6 lg:grid-cols-2">
        {challenges.map((challenge) => {
          const Icon = challenge.icon;
          return (
            <Card key={challenge.id} className="eco-card hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-full ${
                      challenge.status === 'completed' ? 'bg-success/10 text-success' :
                      challenge.status === 'active' ? 'bg-primary/10 text-primary' :
                      'bg-muted'
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{challenge.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {challenge.category}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant={
                    challenge.status === 'completed' ? 'default' :
                    challenge.status === 'active' ? 'secondary' :
                    'outline'
                  }>
                    {challenge.status === 'completed' ? 'Completed' :
                     challenge.status === 'active' ? 'Active' :
                     'Upcoming'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm">
                  {challenge.description}
                </p>
                
                {challenge.status === 'active' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{challenge.progress}%</span>
                    </div>
                    <Progress value={challenge.progress} className="h-2" />
                  </div>
                )}

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{challenge.participants} joined</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{challenge.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-warning">
                    <Trophy className="h-4 w-4" />
                    <span>{challenge.reward} pts</span>
                  </div>
                </div>

                <Button 
                  className="w-full"
                  variant={challenge.status === 'completed' ? 'outline' : 'default'}
                  disabled={challenge.status === 'completed'}
                  onClick={() => handleJoinChallenge(challenge.title)}
                >
                  {challenge.status === 'completed' ? 'Completed' :
                   challenge.status === 'active' ? 'Join Challenge' :
                   'Join When Available'}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Community Tips */}
      <Card className="eco-card mt-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Community Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm font-medium mb-1">💡 Pro Tip from Sarah G.</p>
              <p className="text-sm text-muted-foreground">
                "I use a reusable water bottle with time markers to track my hydration and avoid plastic bottles!"
              </p>
            </div>
            <div className="p-4 bg-success/5 rounded-lg border border-success/10">
              <p className="text-sm font-medium mb-1">🚴 Tip from Mike E.</p>
              <p className="text-sm text-muted-foreground">
                "Plan your errands in one trip to reduce car usage and save time!"
              </p>
            </div>
            <div className="p-4 bg-warning/5 rounded-lg border border-warning/10">
              <p className="text-sm font-medium mb-1">♻️ Tip from Emma L.</p>
              <p className="text-sm text-muted-foreground">
                "Create a home composting system for food scraps - it's easier than you think!"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}