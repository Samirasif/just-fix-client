/* eslint-disable */
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import {
  MapPin,
  Briefcase,
  Star,
  Mail,
  Phone,
} from "lucide-react";

interface Provider {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  email: string;
  profession: string;
  bio: string;
  experienceYears: number;
  hourlyRate: number;
  location: string;
  createdAt: string;
  updatedAt: string;
}

export default function ProviderDetailsPage() {
  const params = useParams();
  const id = params?.id as string;

  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProvider = async () => {
      try {
        const res = await axios.get(`http://localhost:5001/api/v1/service-providers/${id}`);
        setProvider(res.data.data);
      } catch (error) {
        console.error("Failed to fetch provider", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProvider();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading provider...</div>;
  }

  if (!provider) {
    return <div className="text-center py-20 text-red-500">Provider not found.</div>;
  }

  const fullName = `${provider.firstName} ${provider.lastName}`;
  const initial = provider.firstName.charAt(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <Link href="/service-providers" className="text-white hover:text-gray-200">
              ← Back to Service Providers
            </Link>
            <div className="flex items-center space-x-4">
              <button className="text-gray-200 hover:text-white">
                <Star className="w-5 h-5 mr-1 inline-block" />
                Save Provider
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Provider Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex items-start space-x-6">
            <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-lg">{initial}</span>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{fullName}</h1>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {provider.location}
                </div>
              </div>
              <p className="text-gray-600">
                {provider.profession} with {provider.experienceYears}+ years of experience.
              </p>
            </div>
          </div>
        </div>

        {/* Provider Details */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About {fullName}</h2>
              <p className="text-gray-600">{provider.bio}</p>
            </div>

            {/* Profession & Rate */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Profession & Rate</h2>
              <div className="space-y-2">
                <p><strong>Profession:</strong> {provider.profession}</p>
                <p><strong>Experience:</strong> {provider.experienceYears} years</p>
                <p><strong>Hourly Rate:</strong> ${provider.hourlyRate}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
              {/* Contact Info */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-600" />
                    <a href={`mailto:${provider.email}`} className="text-blue-600 hover:text-blue-700">{provider.email}</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <a href={`tel:${provider.phone}`} className="text-blue-600 hover:text-blue-700">{provider.phone}</a>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Experience</h2>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">{provider.experienceYears}+ Years</span>
                </div>
              </div>

              {/* Contact Button */}
              <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Contact Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
