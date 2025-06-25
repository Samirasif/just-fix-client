
/* eslint-disable */
"use client";

import React, { useEffect, useState } from "react";

import axios from "axios";
import Link from "next/link";

interface ServiceProvider {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    profession: string;
    bio: string;
    experienceYears: number;
    hourlyRate: number;
    location: string;
}
import { Search, MapPin, Bookmark } from "lucide-react"

export default function ServiceProvidersPage() {

    const [providers, setProviders] = useState<ServiceProvider[]>([]);
    const [loading, setLoading] = useState(true);

    // Filters
    //   const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
    //   const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    //   const [selectedExperience, setSelectedExperience] = useState<string[]>([]);

    //   const handleCheckbox = (
    //     value: string,
    //     selectedList: string[],
    //     setList: React.Dispatch<React.SetStateAction<string[]>>
    //   ) => {
    //     if (selectedList.includes(value)) {
    //       setList(selectedList.filter((v) => v !== value));
    //     } else {
    //       setList([...selectedList, value]);
    //     }
    //   };

    //   const buildQueryString = () => {
    //     const params = new URLSearchParams();
    //     if (selectedRoles.length > 0) {
    //       params.append("role", selectedRoles.join(","));
    //     }
    //     if (selectedLocations.length > 0) {
    //       params.append("location", selectedLocations.join(","));
    //     }
    //     if (selectedExperience.length > 0) {
    //       params.append("experienceYears", selectedExperience.join(","));
    //     }
    //     return params.toString();
    //   };

    //   const fetchProviders = async () => {
    //     try {
    //       setLoading(true);
    //       const query = buildQueryString();
    //       const res = await axios.get(`http://localhost:5001/api/v1/service-providers?${query}`);
    //       setProviders(res.data.data);
    //     } catch (error) {
    //       console.error("Failed to fetch service providers", error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };

    //   useEffect(() => {
    //     fetchProviders();
    //   }, [selectedRoles, selectedLocations, selectedExperience]);

// const [filterOptions, setFilterOptions] = useState<{
//   locations: string[];
//   professions: string[];
//   experienceYears: string[];
// }>({
//   locations: [],
//   professions: [],
//   experienceYears: [],
// });

// useEffect(() => {
//   const fetchFilters = async () => {
//     try {
//       const res = await axios.get("http://localhost:5001/api/v1/service-providers/filters");
//       setFilterOptions(res.data);
//     } catch (error) {
//       console.error("Failed to fetch filters", error);
//     }
//   };

//   fetchFilters();
// }, [])

    useEffect(() => {
        const fetchProviders = async () => {
            try {
                const res = await axios.get("http://localhost:5001/api/v1/service-providers");
                setProviders(res.data.data);
            } catch (error) {
                console.error("Failed to fetch service providers", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProviders();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold text-center">Find Top Service Providers</h1>


                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                                <button className="text-blue-600 text-sm hover:text-blue-700">Clear All</button>
                            </div>

                            {/* Service Type Filter */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-medium text-gray-900">Service Type</h3>
                                    <button className="text-blue-600 text-xs hover:text-blue-700">Clear</button>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { id: "all-services", label: "All Services (150)", checked: true },
                                        { id: "interior-design", label: "Interior Design (80)" },
                                        { id: "space-planning", label: "Space Planning (45)" },
                                        { id: "color-consultation", label: "Color Consultation (30)" },
                                        { id: "furniture-selection", label: "Furniture Selection (25)" },
                                        { id: "project-management", label: "Project Management (20)" },
                                    ].map((service) => (
                                        <div key={service.id} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={service.id}
                                                defaultChecked={service.checked}
                                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor={service.id} className="text-sm text-gray-700">{service.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Location Filter */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-medium text-gray-900">Location</h3>
                                    <button className="text-blue-600 text-xs hover:text-blue-700">Clear</button>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { id: "chicago", label: "Chicago, IL (150)", checked: true },
                                        { id: "niles", label: "Niles, IL (30)" },
                                        { id: "oak-brook", label: "Oak Brook, IL (25)" },
                                        { id: "northbrook", label: "Northbrook, IL (20)" },
                                        { id: "skokie", label: "Skokie, IL (15)" },
                                    ].map((location) => (
                                        <div key={location.id} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={location.id}
                                                defaultChecked={location.checked}
                                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor={location.id} className="text-sm text-gray-700">{location.label}</label>
                                        </div>
                                    ))}
                                    <button className="text-blue-600 text-xs hover:text-blue-700 mt-2">More +</button>
                                </div>
                            </div>

                            {/* Experience Filter */}
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-medium text-gray-900">Years of Experience</h3>
                                    <button className="text-blue-600 text-xs hover:text-blue-700">Clear</button>
                                </div>
                                <div className="space-y-2">
                                    {[
                                        { id: "all-experience", label: "All (150)", checked: true },
                                        { id: "0-2", label: "0-2 Years (20)" },
                                        { id: "3-5", label: "3-5 Years (50)" },
                                        { id: "6-10", label: "6-10 Years (40)" },
                                        { id: "10-plus", label: "10+ Years (40)" },
                                    ].map((exp) => (
                                        <div key={exp.id} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={exp.id}
                                                defaultChecked={exp.checked}
                                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor={exp.id} className="text-sm text-gray-700">{exp.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">


                        {/* Results Header */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-gray-600">{providers.length} service providers found</p>

                        </div>

                        {/* Service Provider Listings */}

                        <div className="space-y-4">
                            {providers.map((provider) => (
                                <div
                                    key={provider._id}
                                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow flex flex-col justify-between h-full"
                                >
                                    <div className="flex justify-between items-start">
                                        {/* Left: Initial & Provider Info */}
                                        <div className="flex space-x-4">
                                            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                                                <span className="text-white font-bold text-sm">{provider.firstName[0]}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{provider.firstName} {provider.lastName}</h3>
                                                <p className="text-gray-600 mb-3">{provider.location}</p>

                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                                    <div>
                                                        <span className="text-gray-500">Profession</span>
                                                        <p className="font-medium">{provider.profession}</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-gray-500">Experience</span>
                                                        <p className="font-medium">{provider.experienceYears}</p>
                                                    </div>

                                                </div>
                                                <p className="text-gray-500 text-sm mt-4">{provider.bio}</p>
                                            </div>
                                        </div>

                                        {/* Save Button */}
                                        <button className="text-gray-400 flex hover:text-gray-600 w-auto justify-center items-center">
                                            Save
                                            <Bookmark className="w-4 h-4 ml-1" />
                                        </button>
                                    </div>

                                    {/* Contact Button aligned bottom right */}
                                    <div className="mt-6 flex justify-end">
                                        <Link href={`/service-providers/${provider._id}`} className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                            Contact Provider
                                        </Link >
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="text-center mt-8">
                            <button className="border border-gray-300 bg-white text-gray-700 py-2 px-8 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Load More Providers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}