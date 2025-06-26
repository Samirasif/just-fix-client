/* eslint-disable */
"use client";
import React, { useState } from "react";
import { Trash } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
} from "@/components/ui/pagination";

// 🔹 Static service bookings
const staticBookings = [
    {
        _id: "1",
        providerName: "Elite Electricians",
        serviceType: "Electrical Repair",
        appointmentDate: "2025-06-25",
        appointmentTime: "10:00 AM",
        total: 120,
        status: "PENDING",
    },
    {
        _id: "2",
        providerName: "AquaFix Plumbing",
        serviceType: "Pipe Leakage Fix",
        appointmentDate: "2025-06-26",
        appointmentTime: "2:00 PM",
        total: 85,
        status: "CONFIRMED",
    },
    {
        _id: "3",
        providerName: "CoolAir HVAC",
        serviceType: "AC Installation",
        appointmentDate: "2025-06-27",
        appointmentTime: "3:30 PM",
        total: 250,
        status: "CANCELLED",
    },
    {
        _id: "4",
        providerName: "SparkClean Services",
        serviceType: "Home Cleaning",
        appointmentDate: "2025-06-28",
        appointmentTime: "11:00 AM",
        total: 70,
        status: "CONFIRMED",
    },
    {
        _id: "5",
        providerName: "TechMate IT",
        serviceType: "Router Setup",
        appointmentDate: "2025-06-29",
        appointmentTime: "5:00 PM",
        total: 40,
        status: "PENDING",
    },
];

const BookingsTable = () => {
    const [page, setPage] = useState(1);
    const [status, setStatus] = useState("");
    const limit = 4;

    const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPage(1);
        setStatus(e.target.value);
    };

    const filtered = status
        ? staticBookings.filter((b) => b.status === status)
        : staticBookings;

    const paginated = filtered.slice((page - 1) * limit, page * limit);
    const totalPages = Math.max(1, Math.ceil(filtered.length / limit));

    return (
        <div className="space-y-6">
            {/* Filter */}
            <Card className="shadow-none rounded-sm">
                <CardContent className="py-2 px-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold">My Service Bookings</h2>
                        <select
                            value={status}
                            onChange={handleStatusChange}
                            className="border px-3 py-2 rounded text-sm"
                        >
                            <option value="">All Statuses</option>
                            <option value="PENDING">Pending</option>
                            <option value="CONFIRMED">Confirmed</option>
                            <option value="CANCELLED">Cancelled</option>
                        </select>
                    </div>
                </CardContent>
            </Card>

            {/* Table */}
            <Card className="shadow-none rounded-sm">
                <CardContent>
                    <div className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-semibold">Date & Time</TableHead>
                                    <TableHead className="font-semibold">Provider</TableHead>
                                    <TableHead className="font-semibold">Service</TableHead>
                                    <TableHead className="font-semibold">Total</TableHead>
                                    <TableHead className="font-semibold">Status</TableHead>
                                    <TableHead className="font-semibold">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {paginated.map((booking) => (
                                    <TableRow key={booking._id} className="hover:bg-muted/50">
                                        <TableCell>
                                            <p className="text-sm text-muted-foreground font-medium">
                                                {new Date(booking.appointmentDate).toLocaleDateString()}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {booking.appointmentTime}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-muted-foreground font-medium">
                                                {booking.providerName}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-muted-foreground">
                                                {booking.serviceType}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span className="text-muted-foreground">
                                                ${booking.total}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <span
                                                className={`px-2 py-1 rounded text-xs font-medium ${booking.status === "PENDING"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : booking.status === "CONFIRMED"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-red-100 text-red-700"
                                                    }`}
                                            >
                                                {booking.status}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            {booking.status === "PENDING" ? (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => console.log("Delete booking", booking._id)}
                                                    className="text-red-600 cursor-pointer hover:text-red-800 hover:bg-red-50"
                                                >
                                                    <Trash size={16} />
                                                </Button>
                                            ) : (
                                                <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                                    ✅ Done
                                                </span>
                                            )}

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>

            {/* ShadCN Pagination */}
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            className={page <= 1 ? "pointer-events-none opacity-50 cursor-pointer" : "cursor-pointer"}
                        />
                    </PaginationItem>
                    <PaginationItem>
                        <span className="text-sm pt-[6px] px-4">
                            Page {page} of {totalPages}
                        </span>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                            className={page >= totalPages ? "pointer-events-none opacity-50 cursor-pointer" : "cursor-pointer"}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default BookingsTable;
