import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Globe, Recycle, ArrowRight, Users, Target, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex items-center space-x-2 text-primary">
            <Leaf className="h-8 w-8" />
            <span className="text-2xl font-bold">GreenTrack</span>
          </div>
        </div>
        
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          Track. Reduce. Reward.
        </h1>
        <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
          Your Green Journey Starts Here
        </p>
        <p className="mb-12 max-w-2xl mx-auto text-lg text-muted-foreground">
          Join thousands of eco-warriors tracking their carbon footprint, reducing waste, 
          and earning rewards for sustainable living. Make every day count for our planet.
        </p>
        
        <Link to="/dashboard">
          <Button size="lg" className="eco-gradient hover-lift shadow-eco text-lg px-8 py-6 rounded-full">
            Start Tracking
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <Card className="eco-card hover-lift">
            <CardContent className="p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Track Impact</h3>
              <p className="text-muted-foreground">
                Monitor your carbon footprint and waste generation with detailed analytics 
                and insights into your environmental impact.
              </p>
            </CardContent>
          </Card>

          <Card className="eco-card hover-lift">
            <CardContent className="p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Set Goals</h3>
              <p className="text-muted-foreground">
                Create personalized sustainability goals and track your progress 
                towards a greener lifestyle with actionable daily tips.
              </p>
            </CardContent>
          </Card>

          <Card className="eco-card hover-lift">
            <CardContent className="p-8 text-center">
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-semibold">Earn Rewards</h3>
              <p className="text-muted-foreground">
                Get recognized for your eco-friendly actions with points, badges, 
                and compete with friends on our sustainability leaderboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Eco Icons Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Every Action Counts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From biking to work to recycling, every sustainable choice you make 
            contributes to a healthier planet for future generations.
          </p>
        </div>
        
        <div className="flex justify-center items-center space-x-8 opacity-60">
          <div className="text-center">
            <div className="rounded-full bg-success/10 p-6 mb-2">
              <Leaf className="h-12 w-12 text-success mx-auto" />
            </div>
            <span className="text-sm text-muted-foreground">Plant</span>
          </div>
          <div className="text-center">
            <div className="rounded-full bg-primary/10 p-6 mb-2">
              <Recycle className="h-12 w-12 text-primary mx-auto" />
            </div>
            <span className="text-sm text-muted-foreground">Recycle</span>
          </div>
          <div className="text-center">
            <div className="rounded-full bg-warning/10 p-6 mb-2">
              <Globe className="h-12 w-12 text-warning mx-auto" />
            </div>
            <span className="text-sm text-muted-foreground">Protect</span>
          </div>
          <div className="text-center">
            <div className="rounded-full bg-accent/30 p-6 mb-2">
              <Users className="h-12 w-12 text-accent-foreground mx-auto" />
            </div>
            <span className="text-sm text-muted-foreground">Connect</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="eco-card earth-gradient">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-accent-foreground">
              Ready to Make a Difference?
            </h2>
            <p className="text-accent-foreground/80 mb-8 text-lg max-w-2xl mx-auto">
              Join our community of eco-conscious individuals and start your 
              journey towards sustainable living today.
            </p>
            <Link to="/dashboard">
              <Button size="lg" className="eco-gradient hover-lift shadow-eco">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}