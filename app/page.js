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
    <div className="py-4 mx-auto container">
      <div className="mx-auto relative h-80">
        <div className="px-8 mx-auto relative h-64">
          {" "}
          <Image
            src={hero}
            alt="hero"
            className="w-full h-64 rounded-lg mx-2"
          />
        </div>

        <Card className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <CardContent className="p-3">
            <div className="flex flex-row items-center gap-3">
              <div className="w-full sm:flex-1">
                <Input type="text" placeholder="Location" className="w-full" />
                <div className="text-xs text-muted-foreground mt-1 text-center sm:text-left">
                  Where
                </div>
              </div>

              <div className="w-full sm:flex-1 hidden sm:block">
                <Input
                  type="text"
                  placeholder="Add Radius"
                  className="w-full"
                />
                <div className="text-xs text-muted-foreground mt-1 text-center sm:text-left">
                  Radius
                </div>
              </div>

              <div className="w-full sm:flex-1 hidden sm:block">
                <Input type="date" placeholder="Add date" className="w-full" />
                <div className="text-xs text-muted-foreground mt-1 text-center sm:text-left">
                  Date
                </div>
              </div>

              <div className="w-full sm:flex-1 hidden sm:block">
                <Input
                  type="number"
                  placeholder="Number of hours"
                  className="w-full"
                />
                <div className="text-xs text-muted-foreground mt-1 text-center sm:text-left">
                  Hours
                </div>
              </div>
              <div>
                <Button
                  size="icon"
                  className="h-10 w-10 bg-blue-500 hover:bg-blue-600 sm:ml-3 mt-2 sm:mt-0"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ///section2  */}

      <div className="mx-auto mt-6 px-2">
        <h2 className="text-lg ">Recent</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mx-auto px-6 mt-4">
          {data.map((room, index) => (
            <Card
              key={index}
              className="w-full max-w-[350px] overflow-hidden group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={hero}
                    alt={room.imageAlt}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{room.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {room.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Music className="w-4 h-4 " strokeWidth={3} />
                      <span className="text-sm">{room.rating}</span>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center flex-row-reverse">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                    <div className="text-sm font-semibold">
                      from{" "}
                      <span className="font-semibold">€{room.price}/h</span>
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
