import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, Lightbulb, Plus, Trophy, MapPin, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const carbonFootprint = 847; // kg CO2 this month
  const lastMonthCarbon = 923;
  const carbonReduction = ((lastMonthCarbon - carbonFootprint) / lastMonthCarbon * 100).toFixed(1);
  
  const ecoPoints = 1892;
  const pointsGoal = 2000;
  const pointsProgress = (ecoPoints / pointsGoal) * 100;

  const dailyTips = [
    "Take the stairs instead of the elevator to save energy",
    "Use a reusable water bottle instead of plastic bottles",
    "Bike or walk for trips under 2 miles",
  ];

  return (
    <div className="flex-1 space-y-6 p-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Here's your environmental impact dashboard</p>
        </div>
        <div className="flex gap-3">
          <Link to="/dashboard/activity-log">
            <Button className="eco-gradient hover-lift">
              <Plus className="h-4 w-4 mr-2" />
              Log Activity
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Carbon Footprint</CardTitle>
            <TrendingDown className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{carbonFootprint} kg</div>
            <p className="text-xs text-success flex items-center">
              -{carbonReduction}% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Eco Points</CardTitle>
            <Trophy className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ecoPoints.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {pointsGoal - ecoPoints} to next level
            </p>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Goal</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">
              4 of 5 daily goals met
            </p>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Community Rank</CardTitle>
            <Users className="h-4 w-4 text-accent-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#3</div>
            <p className="text-xs text-success flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              +2 this week
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Carbon Footprint Chart */}
        <Card className="eco-card">
          <CardHeader>
            <CardTitle>Carbon Footprint Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-subtle rounded-lg flex items-center justify-center border-2 border-dashed border-border">
              <div className="text-center">
                <TrendingDown className="h-12 w-12 text-success mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Trending Down!</h3>
                <p className="text-muted-foreground">Your carbon footprint is decreasing</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Daily Eco Tip */}
        <Card className="eco-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-warning" />
              Daily Eco Tip
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <p className="text-sm font-medium mb-2">Today's Tip:</p>
              <p className="text-muted-foreground">
                {dailyTips[0]}
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Upcoming Tips:</p>
              {dailyTips.slice(1).map((tip, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  • {tip}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Eco Points Progress & Quick Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="eco-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-warning" />
              Eco Points Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Current Level: Eco Enthusiast</span>
              <span className="font-medium">{ecoPoints}/{pointsGoal} points</span>
            </div>
            <Progress value={pointsProgress} className="h-3" />
            <p className="text-sm text-muted-foreground">
              {pointsGoal - ecoPoints} points until you reach "Green Guardian" level!
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-success">+125</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">7</div>
                <p className="text-xs text-muted-foreground">Day streak</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">3</div>
                <p className="text-xs text-muted-foreground">Badges earned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link to="/dashboard/activity-log">
              <Button variant="outline" className="w-full justify-start hover-lift">
                <Plus className="h-4 w-4 mr-2" />
                Log Activity
              </Button>
            </Link>
            <Link to="/dashboard/rewards">
              <Button variant="outline" className="w-full justify-start hover-lift">
                <Trophy className="h-4 w-4 mr-2" />
                View Rewards
              </Button>
            </Link>
            <Link to="/dashboard/map">
              <Button variant="outline" className="w-full justify-start hover-lift">
                <MapPin className="h-4 w-4 mr-2" />
                Find Eco Locations
              </Button>
            </Link>
            <Link to="/dashboard/community">
              <Button variant="outline" className="w-full justify-start hover-lift">
                <Users className="h-4 w-4 mr-2" />
                Join Challenge
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}