"use client";
import { useSelector } from "react-redux"

import React from "react";
import Link from "next/link";
import ContainerWrapper from "../common/ContainerWrapper";
import { User } from "lucide-react";
import Logo from "./Logo";
import { selectCurrentUser } from "@/redux/slice/authSlice";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Hire A Service Provider", href: "/service-providers" },
    { name: "Become A Service Provider", href: "/signup" },
    { name: "Login", href: "/login" },
];

const DesktopHeader = () => {
    const user = useSelector(selectCurrentUser)
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
  {navLinks.map((link) =>
    (link.name === "Login" || link.name === "Become A Service Provider") && user
      ? null // hide Login & Signup if user exists
      : (
          <Link
            key={link.name}
            href={link.href}
            className="text-gray-700 hover:text-gray-900 hover:border-b"
          >
            {link.name}
          </Link>
        )
  )}

  {!user && (
    <Link
      href="/signup"
      className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"
    >
      Sign Up
    </Link>
  )}

  {user && (
    <div className="relative group">
      <button className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200">
        <User className="w-4 h-4" />
        <span>{user.firstName}</span>
      </button>
      <div className="absolute hidden group-hover:block right-0 mt-2 w-40 bg-white shadow-md rounded-md z-50">
        <Link
          href="/dashboard"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Dashboard
        </Link>
        <Link
          href="/logout"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Logout
        </Link>
      </div>
    </div>
  )}
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
