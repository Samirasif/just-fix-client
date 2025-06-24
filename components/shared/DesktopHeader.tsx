"use client";
import { useSelector } from "react-redux"

import React from "react";
import Link from "next/link";
import ContainerWrapper from "../common/ContainerWrapper";
import { Search, User } from "lucide-react";
import Logo from "./Logo";
import { selectCurrentUser } from "@/redux/slice/authSlice";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Hire A Service Provider", href: "/service-providers" },
  { name: "Become A Service Provider", href: "/signup" },
];
import {
  LayoutDashboard,
  Settings,
  LogOut,
} from "lucide-react"

const DesktopHeader = () => {
  const user = useSelector(selectCurrentUser)
  return (
    <header className="bg-white shadow-sm">
      <ContainerWrapper className="hidden lg:block w-full">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 justify-center items-center max-w-md mx-8">
            <input
              type="text"
              placeholder="What Are You Looking For?"
              className="w-full hidden xl:flex px-4 py-2 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="xl:hidden flex  items-center justify-center space-x-1">
              <span>Search</span> <Search className="size-4" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) =>

              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700  hover:text-violet-700"
              >
                {link.name}
              </Link>

            )}

            {!user?._id && (

              <>
                <Link
                  href="/signup"
                  className="text-gray-700  px-4 py-2 rounded-md hover:text-violet-700"
                >
                  Sign Up
                </Link>
                <Link
                  href="/login"
                  className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800"

                >
                  Login
                </Link></>
            )}

            {user?._id && (
              <div className="relative group ">

                <button className="flex cursor-pointer items-center justify-center size-10  bg-gray-100 rounded-full hover:bg-gray-200">
                  <User className="w-4 h-4" />
                </button>
                <div className="absolute hidden group-hover:block right-0  z-50">
                  <div className="pt-3">
                    <div className="w-40 bg-white shadow-md rounded-md overflow-hidden">
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LayoutDashboard className="h-4 w-4 text-gray-500" />
                        Dashboard
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Settings className="h-4 w-4 text-gray-500" />
                        Settings
                      </Link>
                      <Link
                        href="/logout"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut className="h-4 w-4 text-red-500" />
                        Logout
                      </Link>
                    </div>
                  </div>

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
