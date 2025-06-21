import React from 'react';
import {
    User,
    Search,
    FileText,
    CheckCircle,
} from "lucide-react";
import Image from 'next/image';

const HowItWorks = () => {
    return (
        <div className="py-16 lg:py-20">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Find the right service provider in 3 easy steps</h2>
            </div>
            <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
                <div className="lg:py-6 lg:pr-16 space-y-5">
                    <div className="flex ">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border-2 border-blue-500 rounded-full bg-blue-50">
                                    <Search className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="bg-white p-5 rounded-md">
                            <p className="mb-2 text-lg font-bold text-gray-900">Step 1: Search for service providers</p>
                            <p className="text-gray-700">
                                Browse verified service providers across various categories. Filter by location, rating, and service type to find the best fit for your needs.
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border-2 border-green-500 rounded-full bg-green-50">
                                    <FileText className="w-5 h-5 text-green-600" />
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="bg-white p-5 rounded-md">
                            <p className="mb-2 text-lg font-bold text-gray-900">Step 2: Request a quote or book a service</p>
                            <p className="text-gray-700">
                                Contact service providers directly through the platform. Request quotes, discuss your requirements, and schedule your service hassle-free.
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border-2 border-purple-500 rounded-full bg-purple-50">
                                    <User className="w-5 h-5 text-purple-600" />
                                </div>
                            </div>
                            <div className="w-px h-full bg-gray-300" />
                        </div>
                        <div className="bg-white p-5 rounded-md">
                            <p className="mb-2 text-lg font-bold text-gray-900">Step 3: Hire with confidence</p>
                            <p className="text-gray-700">
                                Choose the best service provider based on reviews, experience, and your budget. Enjoy professional service delivered right to your doorstep.
                            </p>
                        </div>
                    </div>

                    <div className="flex">
                        <div className="flex flex-col items-center mr-4">
                            <div>
                                <div className="flex items-center justify-center w-10 h-10 border-2 border-green-500 rounded-full bg-green-50">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-5 rounded-md">
                            <p className="mb-2 text-lg font-bold text-gray-900">Success</p>
                            <p className="text-gray-700">
                                Get your tasks done by trusted professionals. Join thousands of satisfied users who found reliable service providers through our platform.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <Image
                        src='/how-works.svg'
                        fill
                        className="object-contain w-full  h-96 lg:absolute lg:h-full"
                        alt="Service provider at work"
                    />
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
