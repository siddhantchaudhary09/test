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
    <div className="py-4 mx-auto container px-4">
      <div className="relative h-80 bg-gray-50">
        {/* Hero Image */}
        <div className="h-64 w-full overflow-hidden rounded-lg shadow-md">
          <Image src={hero} alt="hero" className="w-full h-full object-cover" />
        </div>
        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-center text-white p-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-2 drop-shadow-lg">
            Search for a Room
          </h2>
          <h3 className="text-sm sm:text-lg font-semibold drop-shadow-md">
            Rehearsal Room | Music Session | Multifloor Session
          </h3>
        </div>

        {/* Search Card */}
        <Card className="absolute left-1/2 bottom-[-10%] transform -translate-x-1/2 w-11/12 max-w-lg bg-white shadow-lg rounded-lg">
          <CardContent className="p-4 sm:p-6">
            <div className="flex flex-wrap gap-3">
              {/* Inputs */}
              <Input
                type="text"
                placeholder="Location"
                className="w-full sm:w-1/2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
              <Input
                type="text"
                placeholder="Add Radius"
                className="hidden sm:block w-full sm:w-1/2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
              <Input
                type="date"
                className="w-full sm:w-1/2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
              <Input
                type="number"
                placeholder="Hours"
                className="hidden sm:block w-full sm:w-1/2 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              />
              {/* Search Button */}
              <Button
                size="icon"
                className="h-10 w-10 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-md"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Section */}
      <div className="mt-16 sm:mt-20">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
          Recent
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((room, index) => (
            <Card
              key={index}
              className="w-full mx-auto overflow-hidden group shadow-md rounded-lg hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={hero}
                    alt={room.imageAlt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                {/* Content */}
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{room.title}</h3>
                      <p className="text-sm text-gray-500">{room.location}</p>
                    </div>
                    <div className="flex items-center text-blue-500">
                      <Music className="h-4 w-4" />
                      <span className="text-sm ml-1">{room.rating}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-700">
                    from{" "}
                    <span className="font-bold text-gray-900">
                      €{room.price}/h
                    </span>
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
