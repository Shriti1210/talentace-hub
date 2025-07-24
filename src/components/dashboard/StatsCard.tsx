import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  change?: {
    value: number
    type: "increase" | "decrease"
    period: string
  }
  icon?: React.ReactNode
  className?: string
}

export function StatsCard({ title, value, change, icon, className }: StatsCardProps) {
  return (
    <Card className={cn("shadow-soft hover:shadow-elegant transition-shadow", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon && (
          <div className="h-4 w-4 text-muted-foreground">
            {icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground mb-1">
          {value}
        </div>
        {change && (
          <div className="flex items-center text-xs">
            {change.type === "increase" ? (
              <TrendingUp className="h-3 w-3 text-success mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 text-destructive mr-1" />
            )}
            <span className={change.type === "increase" ? "text-success" : "text-destructive"}>
              {change.value > 0 ? "+" : ""}{change.value}%
            </span>
            <span className="text-muted-foreground ml-1">
              from {change.period}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}