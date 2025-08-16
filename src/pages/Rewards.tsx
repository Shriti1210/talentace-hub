import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trophy, Star, Leaf, Recycle, Globe, Users, ArrowLeft, Calendar, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

const badges = [
  { 
    name: "Eco Warrior", 
    icon: Leaf, 
    earned: true, 
    description: "Completed 30 days of logging activities",
    earnedDate: "2024-07-15",
    earnedTime: "2:45 PM",
    requirements: "Log daily activities for 30 consecutive days",
    points: 250,
    rarity: "Common"
  },
  { 
    name: "Recycling Champion", 
    icon: Recycle, 
    earned: true, 
    description: "Recycled 100+ items",
    earnedDate: "2024-08-03",
    earnedTime: "11:22 AM",
    requirements: "Successfully recycle 100 different items",
    points: 500,
    rarity: "Rare"
  },
  { 
    name: "Carbon Reducer", 
    icon: Globe, 
    earned: false, 
    description: "Reduce carbon footprint by 20%",
    earnedDate: null,
    earnedTime: null,
    requirements: "Achieve a 20% reduction in monthly carbon footprint",
    points: 1000,
    rarity: "Epic"
  },
  { 
    name: "Community Leader", 
    icon: Users, 
    earned: false, 
    description: "Invite 5 friends to join",
    earnedDate: null,
    earnedTime: null,
    requirements: "Successfully invite 5 friends who join the platform",
    points: 750,
    rarity: "Rare"
  },
];

const leaderboard = [
  { rank: 1, name: "Sarah Green", points: 2847, avatar: "SG" },
  { rank: 2, name: "Mike Earth", points: 2435, avatar: "ME" },
  { rank: 3, name: "You", points: 1892, avatar: "YU", isCurrentUser: true },
  { rank: 4, name: "Emma Leaf", points: 1654, avatar: "EL" },
  { rank: 5, name: "David Plant", points: 1543, avatar: "DP" },
];

export default function Rewards() {
  const [selectedBadge, setSelectedBadge] = useState<typeof badges[0] | null>(null);
  const currentPoints = 1892;
  const nextMilestone = 2000;
  const progress = (currentPoints / nextMilestone) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/dashboard" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Points Summary */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-6 w-6 text-warning" />
                Your Eco Points
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary mb-2">{currentPoints.toLocaleString()}</div>
                <p className="text-muted-foreground">Total Points Earned</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Progress to next milestone</span>
                  <span className="font-medium">{currentPoints}/{nextMilestone}</span>
                </div>
                <Progress value={progress} className="h-3" />
                <p className="text-sm text-muted-foreground">
                  {nextMilestone - currentPoints} points until your next reward unlock!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-warning" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {badges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <div
                          className={`p-4 rounded-lg border-2 transition-all cursor-pointer hover:scale-[1.02] ${
                            badge.earned
                              ? "border-primary bg-primary/5 hover:bg-primary/10"
                              : "border-muted bg-muted/20 hover:bg-muted/30"
                          }`}
                          onClick={() => setSelectedBadge(badge)}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <div className={`p-2 rounded-full ${
                              badge.earned ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}>
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{badge.name}</h4>
                              {badge.earned && (
                                <Badge variant="secondary" className="text-xs">
                                  Earned
                                </Badge>
                              )}
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground">{badge.description}</p>
                        </div>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-3">
                            <div className={`p-3 rounded-full ${
                              badge.earned ? "bg-primary text-primary-foreground" : "bg-muted"
                            }`}>
                              <Icon className="h-6 w-6" />
                            </div>
                            {badge.name}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="text-center">
                            {badge.earned ? (
                              <Badge variant="default" className="mb-4">
                                <Award className="h-3 w-3 mr-1" />
                                Earned
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="mb-4">
                                Not Earned Yet
                              </Badge>
                            )}
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-medium text-sm mb-1">Description</h4>
                              <p className="text-sm text-muted-foreground">{badge.description}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-sm mb-1">Requirements</h4>
                              <p className="text-sm text-muted-foreground">{badge.requirements}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium text-sm mb-1">Points Reward</h4>
                                <div className="flex items-center gap-1">
                                  <Trophy className="h-4 w-4 text-warning" />
                                  <span className="text-sm font-medium">{badge.points} pts</span>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium text-sm mb-1">Rarity</h4>
                                <Badge variant={
                                  badge.rarity === 'Epic' ? 'default' :
                                  badge.rarity === 'Rare' ? 'secondary' :
                                  'outline'
                                } className="text-xs">
                                  {badge.rarity}
                                </Badge>
                              </div>
                            </div>
                            
                            {badge.earned && badge.earnedDate && (
                              <div className="p-3 bg-success/5 rounded-lg border border-success/10">
                                <h4 className="font-medium text-sm mb-2 text-success">Achievement Unlocked!</h4>
                                <div className="flex items-center gap-4 text-sm">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    <span>{badge.earnedDate}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Target className="h-3 w-3" />
                                    <span>{badge.earnedTime}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <div className="space-y-6">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-warning" />
                Leaderboard
              </CardTitle>
              <p className="text-sm text-muted-foreground">This week's top performers</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      user.isCurrentUser
                        ? "bg-primary/10 border border-primary/20"
                        : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        user.rank === 1 ? "bg-warning text-warning-foreground" :
                        user.rank === 2 ? "bg-muted text-muted-foreground" :
                        user.rank === 3 ? "bg-accent text-accent-foreground" :
                        "bg-secondary text-secondary-foreground"
                      }`}>
                        {user.rank}
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                        {user.avatar}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${user.isCurrentUser ? "text-primary" : ""}`}>
                          {user.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {user.points.toLocaleString()} pts
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="text-lg">Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  <span className="text-muted-foreground">+50 pts for biking to work</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">+25 pts for recycling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-warning"></div>
                  <span className="text-muted-foreground">+100 pts for daily streak</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}