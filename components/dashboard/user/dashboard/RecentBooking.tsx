"use client";
import { CardContent, CardTitle, CardHeader, Card } from "@/components/ui/card";

const bookings = [
    {
        id: 1,
        providerName: "Elite Electricians",
        date: "Tomorrow",
        time: "10:00 AM",
        status: "CONFIRMED",
    },
    {
        id: 2,
        providerName: "AquaFix Plumbing",
        date: "Jun 28",
        time: "2:30 PM",
        status: "PENDING",
    },
    {
        id: 3,
        providerName: "CleanAir AC Service",
        date: "Jun 30",
        time: "4:00 PM",
        status: "CONFIRMED",
    },
    {
        id: 4,
        providerName: "SmartHome IT Setup",
        date: "Jul 1",
        time: "6:00 PM",
        status: "CANCELLED",
    },
];

// Optional: Status badge color map
const statusStyles: Record<string, string> = {
    CONFIRMED: "bg-green-100 text-green-800",
    PENDING: "bg-blue-100 text-blue-800",
    CANCELLED: "bg-red-100 text-red-800",
};

const RecentBooking = () => {
    return (
        <Card className="rounded-sm shadow-none">
            <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {bookings.map((booking) => (
                        <div
                            key={booking.id}
                            className="flex items-center justify-between p-4 border rounded-sm"
                        >
                            <div>
                                <p className="font-medium">{booking.providerName}</p>

                            </div>
                            <span
                                className={`px-2 py-1 text-xs rounded-full ${statusStyles[booking.status]}`}
                            >
                                {booking.status.charAt(0) + booking.status.slice(1).toLowerCase()}
                            </span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};

export default RecentBooking;
