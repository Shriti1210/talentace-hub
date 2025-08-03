import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Recycle, Zap, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ecoLocations = [
  {
    name: "GreenCycle Recycling Center",
    type: "Recycling",
    icon: Recycle,
    distance: "0.8 miles",
    rating: 4.8,
    address: "123 Earth St, Green City",
    hours: "Mon-Sat 8AM-6PM",
    services: ["Paper", "Plastic", "Electronics"]
  },
  {
    name: "EcoCharge Station",
    type: "EV Charging",
    icon: Zap,
    distance: "1.2 miles",
    rating: 4.6,
    address: "456 Solar Ave, Green City",
    hours: "24/7",
    services: ["Fast Charging", "Level 2", "Tesla Compatible"]
  },
  {
    name: "Sustainable Mart",
    type: "Store",
    icon: ShoppingBag,
    distance: "0.5 miles",
    rating: 4.9,
    address: "789 Organic Blvd, Green City",
    hours: "Daily 7AM-9PM",
    services: ["Organic Food", "Zero Waste", "Local Products"]
  },
  {
    name: "Community Compost Hub",
    type: "Recycling",
    icon: Recycle,
    distance: "2.1 miles",
    rating: 4.4,
    address: "321 Compost Lane, Green City",
    hours: "Daily 6AM-8PM",
    services: ["Food Waste", "Yard Waste", "Compost Pickup"]
  }
];

export default function EcoMap() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/dashboard" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Map Placeholder */}
        <div className="lg:col-span-2">
          <Card className="eco-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                Eco-Friendly Locations Near You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Map showing recycling centers, EV stations, and sustainable stores
                  </p>
                  <Button className="mt-4" variant="outline">
                    <Navigation className="h-4 w-4 mr-2" />
                    Enable Location
                  </Button>
                </div>
              </div>
              
              {/* Map Legend */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-success"></div>
                  <span className="text-sm">Recycling Centers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                  <span className="text-sm">EV Charging Stations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-warning"></div>
                  <span className="text-sm">Sustainable Stores</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Nearby Locations</h3>
          
          {ecoLocations.map((location, index) => {
            const Icon = location.icon;
            return (
              <Card key={index} className="eco-card hover-lift">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${
                      location.type === "Recycling" ? "bg-success/10 text-success" :
                      location.type === "EV Charging" ? "bg-primary/10 text-primary" :
                      "bg-warning/10 text-warning"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div>
                        <h4 className="font-medium text-sm">{location.name}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {location.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            ★ {location.rating} • {location.distance}
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p>{location.address}</p>
                        <p>{location.hours}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {location.services.map((service, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                      
                      <Button size="sm" variant="outline" className="w-full mt-2">
                        <Navigation className="h-3 w-3 mr-1" />
                        Get Directions
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}