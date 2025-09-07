
import React from "react";
import UserOverview from "../_components/dashboard/customer/dashboard/UserOverview";
import MetricsChart from "../_components/dashboard/customer/dashboard/MetricsChart";
import RecentBooking from "../_components/dashboard/customer/dashboard/RecentBooking";
import BookingsTable from "../_components/dashboard/customer/dashboard/BookingsTable";

const page = () => {
    return (
        <div className="space-y-6 ">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">User Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back! Here&apos;s an overview of your activity.
                </p>
            </div>
            <UserOverview />

            <div className="grid gap-4 grid-cols-12 md:grid-cols-2 w-full">
                <MetricsChart />
                <RecentBooking />
            </div>
            <BookingsTable />
        </div>
    );
};

export default page;