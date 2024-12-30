import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 sm:px-0">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg sm:text-3xl font-bold text-black hover:underline"
        >
          Music Room.
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link href="/search-room" className="text-black hover:underline">
            Search Room
          </Link>
          <Link href="/book-event" className="text-black hover:underline">
            Book Event
          </Link>
        </nav>
        <div className="flex items-center space-x-6">
          <Link href="/host-room">
            <Button
              variant="outline"
              className="flex items-center space-x-2 p-2 text-black hover:bg-gray-100"
            >
              <span className="font-semibold text-lg">Host a Room</span>
            </Button>
          </Link>
          <CircleUser className="h-12 w-12" />
        </div>
      </div>
    </header>
  );
};

export default Header;
