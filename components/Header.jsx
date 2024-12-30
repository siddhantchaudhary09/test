"use client";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl sm:text-3xl font-extrabold text-black hover:underline transition duration-300"
        >
          Music Room
        </Link>

        {/* Hamburger Menu */}
        <div className="block sm:hidden">
          <Button
            size="icon"
            variant="ghost"
            aria-label="Menu"
            className="text-black hover:text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </Button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white shadow-md sm:shadow-none sm:static sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-8`}
        >
          <Link
            href="/search-room"
            className="block text-black text-sm sm:text-lg font-medium hover:underline hover:text-gray-600 transition duration-300 px-4 py-2 sm:p-0"
          >
            Search Room
          </Link>
          <Link
            href="/book-event"
            className="block text-black text-sm sm:text-lg font-medium hover:underline hover:text-gray-600 transition duration-300 px-4 py-2 sm:p-0"
          >
            Book Event
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <Link href="/host-room">
            <Button
              variant="outline"
              className="hidden sm:flex items-center space-x-2 p-2 sm:p-3 bg-white text-indigo-600 hover:bg-gray-100 hover:text-indigo-700 transition duration-300 shadow-md"
            >
              <span className="text-sm sm:text-lg font-semibold">
                Host a Room
              </span>
            </Button>
          </Link>
          <CircleUser className="h-8 w-8 sm:h-10 sm:w-10 text-black hover:text-gray-600 transition duration-300 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
