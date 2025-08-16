import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Car, Utensils, Trash, Zap, Plus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const activityIcons = {
  Travel: Car,
  Food: Utensils,
  Plastic: Trash,
  Energy: Zap,
};

export default function ActivityLog() {
  const [activityType, setActivityType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activityType || !amount) {
      toast({
        title: "Missing Information",
        description: "Please select an activity type and enter an amount.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Activity Logged!",
      description: `Successfully logged ${amount} units of ${activityType.toLowerCase()} activity.`,
    });

    // Reset form
    setActivityType("");
    setAmount("");
    setDescription("");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="mb-6">
        <Link to="/dashboard" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>

      <Card className="eco-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-6 w-6 text-primary" />
            Log New Activity
          </CardTitle>
          <p className="text-muted-foreground">
            Track your daily eco-activities to monitor your environmental impact.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="activity-type">Activity Type</Label>
              <Select value={activityType} onValueChange={setActivityType}>
                <SelectTrigger id="activity-type">
                  <SelectValue placeholder="Select activity type" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(activityIcons).map(([type, Icon]) => (
                    <SelectItem key={type} value={type}>
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {type}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount (miles, meals, items, kWh)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min="0"
                step="0.1"
              />
              <p className="text-sm text-muted-foreground">
                {activityType === "Travel" && "Miles traveled"}
                {activityType === "Food" && "Number of meals"}
                {activityType === "Plastic" && "Number of plastic items used"}
                {activityType === "Energy" && "Energy consumed in kWh"}
                {!activityType && "Units depend on activity type"}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Input
                id="description"
                placeholder="Add notes about this activity..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <Button type="submit" className="w-full eco-gradient hover-lift">
              Log Activity
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(activityIcons).map(([type, Icon]) => (
            <Card 
              key={type}
              className="eco-card hover-lift cursor-pointer"
              onClick={() => setActivityType(type)}
            >
              <CardContent className="p-4 text-center">
                <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">{type}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}