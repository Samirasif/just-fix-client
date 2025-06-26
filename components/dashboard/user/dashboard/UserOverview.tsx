import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { CalendarDays, MapPin, Heart, TrendingUp } from "lucide-react"
import {
  ClipboardList,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

const metrics = [
  {
    title: "Total Service Requests",
    value: "47",
    changeType: "positive" as const,
    icon: ClipboardList,
  },
  {
    title: "Pending Requests",
    value: "10",
    changeType: "neutral" as const,
    icon: Clock,
  },
  {
    title: "Completed Services",
    value: "32",
    changeType: "positive" as const,
    icon: CheckCircle,
  },
  {
    title: "Cancelled Services",
    value: "5",
    changeType: "negative" as const,
    icon: XCircle,
  },
];

export default function UserOverview() {


  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="relative overflow-hidden rounded-sm shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </div>

              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

