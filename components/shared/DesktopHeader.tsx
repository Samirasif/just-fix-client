"use client";
import React from "react";
import Link from "next/link";
import ContainerWrapper from "../common/ContainerWrapper";
import { User } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Hire A Service Provider", href: "/service-providers" },
    { name: "Become A Service Provider", href: "/signup" },
    { name: "Login", href: "/login" },
];

const DesktopHeader = () => {
    return (
        <header className="bg-white shadow-sm">
            <ContainerWrapper className="hidden lg:block w-full">
                <div className="flex justify-between items-center h-16">
                    <Logo />

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md mx-8">
                        <input
                            type="text"
                            placeholder="What Are You Looking For?"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-gray-900 hover:border-b"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href='/signup' className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800">
                            Sign Up
                        </Link>
                    </nav>

                    {/* Mobile menu button (optional placeholder) */}
                    <div className="lg:hidden">
                        <button className="p-2">
                            <User className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </ContainerWrapper>

        </header>
    );
};

export default DesktopHeader;
