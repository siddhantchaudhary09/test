import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import hero from "@/public/hero.jpg";
import { Music, Search } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const data = [
    {
      title: "Nordic Suite",
      location: "Stockholm",
      rating: 4.5,
      price: 113,
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Nordic+Suite",
      imageAlt: "Minimalist hotel room with deep blue walls and white bedding",
    },
    {
      title: "Urban Deluxe",
      location: "Stockholm",
      rating: 4.2,
      price: 98,
      image: "https://placehold.co/600x400/2a2a2a/ffffff?text=Urban+Deluxe",
      imageAlt: "Modern hotel room with brass lamp and black accents",
    },
    {
      title: "Design Loft",
      location: "Stockholm",
      rating: 4.7,
      price: 145,
      image: "https://placehold.co/600x400/3a3a3a/ffffff?text=Design+Loft",
      imageAlt: "Scandinavian style room with high ceilings and natural light",
    },
    {
      title: "Cozy Studio",
      location: "Stockholm",
      rating: 4.0,
      price: 89,
      image: "https://placehold.co/600x400/4a4a4a/ffffff?text=Cozy+Studio",
      imageAlt: "Compact modern room with smart storage solutions",
    },
    {
      title: "Executive Room",
      location: "Stockholm",
      rating: 4.8,
      price: 167,
      image: "https://placehold.co/600x400/5a5a5a/ffffff?text=Executive+Room",
      imageAlt: "Spacious room with king bed and designer furniture",
    },
    {
      title: "Standard Plus",
      location: "Stockholm",
      rating: 4.3,
      price: 93,
      image: "https://placehold.co/600x400/6a6a6a/ffffff?text=Standard+Plus",
      imageAlt: "Contemporary room with clean lines and subtle decoration",
    },
  ];
  return (
    <div className="py-4 mx-auto container mt-8">
      <div className="mx-auto relative h-80 bg-gray-50">
        {/* Hero Image */}
        <div className="px-8 mx-auto relative h-64">
          <Image
            src={hero}
            alt="hero"
            className="w-full h-64 rounded-lg object-cover shadow-md"
          />
        </div>
        <div className="absolute top-1/3 sm:top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          {/* Background Overlay for Text */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

          {/* Text */}
          <div className="relative z-10">
            <h2 className="text-md sm:text-5xl font-extrabold sm:mb-3 drop-shadow-lg">
              Search for a Room
            </h2>
            <h3 className="text-xs sm:text-xl font-semibold text-gray-300 drop-shadow-md">
              Rehearsal Room | Music Session | Multifloor Session
            </h3>
          </div>
        </div>

        {/* Card */}
        <Card className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full w-10/12 sm:w-4/5 lg:w-4/5 ">
          <CardContent className=" px-6 py-2 sm:py-4">
            <div className="flex sm:flex-wrap items-center gap-4 sm:gap-6">
              {/* Location Input */}
              <div className="w-full sm:flex-1">
                <Input
                  type="text"
                  placeholder="Location"
                  className="w-full  border-none rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="text-xs text-muted-foreground   text-left ml-2">
                  Where
                </div>
              </div>

              {/* Radius Input */}
              <div className="w-full sm:flex-1 hidden sm:block">
                <Input
                  type="text"
                  placeholder="Add Radius"
                  className=" border-r-2 border-none w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="text-xs text-muted-foreground  text-center sm:text-left ml-2">
                  Radius
                </div>
              </div>

              {/* Date Input */}
              <div className="w-full sm:flex-1 hidden sm:block">
                <Input
                  type="date"
                  placeholder="Add date"
                  className="w-full border-none rounded-md text-gray-500 border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="text-xs text-muted-foreground text-center sm:text-left ml-2">
                  Date
                </div>
              </div>

              {/* Hours Input */}
              <div className="w-full sm:flex-1 hidden sm:block">
                <Input
                  type="number"
                  placeholder="Number of hours"
                  className="w-full border-none rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <div className="text-xs text-muted-foreground text-center sm:text-left ml-2">
                  Hours
                </div>
              </div>

              {/* Search Button */}
              <div>
                <Button
                  size="icon"
                  className="h-10 w-10 bg-blue-500 hover:bg-blue-600 text-white shadow-md rounded-full flex items-center justify-center"
                >
                  <Search className="h-5 w-5" />
                </Button>

                <div className="text-xs text-muted-foreground mt-1 text-center sm:text-left ml-2"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ///section2  */}

      <div className="mx-auto mt-6 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Recent</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
          {data.map((room, index) => (
            <Card
              key={index}
              className="w-full max-w-md mx-auto overflow-hidden group cursor-pointer drop-shadow-sm rounded-lg hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={hero}
                    alt={room.imageAlt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="p-4">
                  {/* Title and Location */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {room.title}
                      </h3>
                      <p className="text-sm text-gray-500">{room.location}</p>
                    </div>
                    {/* Rating */}
                    <div className="flex items-center gap-1 text-blue-500">
                      <Music className="w-4 h-4" strokeWidth={3} />
                      <span className="text-sm font-medium">{room.rating}</span>
                    </div>
                  </div>

                  {/* Price Section */}
                  <div className="mt-3 flex flex-row-reverse items-center">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-gray-500 group-hover:text-blue-500 transition-colors"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      from{" "}
                      <span className="font-semibold text-gray-900">
                        €{room.price}/h
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
