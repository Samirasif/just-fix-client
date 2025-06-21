"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ContainerWrapper from "../common/ContainerWrapper";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Hire A Service Provider", href: "/service-providers" },
    { name: "Become A Service Provider", href: "/signup" },
    { name: "Login", href: "/login" },
];

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <ContainerWrapper className="py-5 block lg:hidden relative z-50">
            <div className="flex items-center justify-between">
                <Logo />
                <button type="button" onClick={() => setIsOpen(true)} className="text-gray-700 cursor-pointer">
                    <Menu size={24} />
                </button>
            </div>


            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between p-4 border-b border-violet-300">
                    <Logo />
                    <button onClick={() => setIsOpen(false)} className="text-gray-700 cursor-pointer">
                        <X size={24} />
                    </button>
                </div>
                {/* Search Bar */}
                <div className="flex flex-1 max-w-md px-4 pt-3">
                    <input
                        type="text"
                        placeholder="What Are You Looking For?"
                        className="w-full px-4 py-2 border text-sm border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                </div>
                <div className="p-4 space-y-3">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block font-medium text-gray-700 hover:text-violet-500"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* CTA buttons */}
                    <div className="flex flex-col space-y-2 pt-4">
                        <Link
                            href="/signup"
                            className="px-4 py-2 rounded text-white bg-gray-900 hover:bg-gray-800 text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Sign Up
                        </Link>
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded text-gray-700 border border-gray-300 hover:border-gray-400 text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </ContainerWrapper>
    );
};

export default MobileHeader;
