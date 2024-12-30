"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = () => {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();

  return (
    <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[85%] sm:w-[90%] lg:w-4/5 max-w-6xl z-50">
      <div className="flex  md:flex-row items-stretch gap-2 p-3 bg-white rounded-3xl shadow-lg">
        {/* Where */}
        <div className="w-full md:border-r md:w-1/3 px-4 py-2 md:py-0  transition-colors">
          <Label htmlFor="where" className="text-sm font-medium text-gray-600">
            Where
          </Label>
          <Input
            id="where"
            placeholder="Search destinations"
            className="border-none shadow-none focus:ring-0 focus-visible:ring-0 placeholder:text-muted-foreground/60 bg-transparent"
          />
        </div>

        {/* Radius */}
        <div className="w-full md:w-1/4 px-4 py-2 md:py-0 md:border-r border-gray-200  transition-colors hidden sm:block">
          <Label className="text-sm font-medium text-gray-600">Radius</Label>
          <Input
            placeholder="Add Radius"
            className="border-none shadow-none focus:ring-0  p-0 focus-visible:ring-0 placeholder:text-muted-foreground/60 bg-transparent"
          />
        </div>

        {/* Date */}
        <div className="w-full md:w-1/4 px-4 py-2 md:py-0 md:border-r border-gray-200   transition-colors hidden sm:block">
          <Label className="text-sm font-medium text-gray-600">Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="w-full  border-none shadow-none focus:ring-0 bg-transparent justify-start p-0 font-normal hover:bg-transparent text-gray-400"
              >
                {checkOut ? checkOut.toLocaleDateString() : "Add dates"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Hours */}
        <div className="w-full md:w-1/4 px-4 py-2 md:py-0 md:border-r border-gray-200   transition-colors hidden sm:block">
          <Label className="text-sm font-medium text-gray-600">Hours</Label>
          <Input
            placeholder="No of hours"
            className="border-none shadow-none focus:ring-0   focus-visible:ring-0 placeholder:text-muted-foreground/60 bg-transparent"
          />
        </div>

        {/* Search Button */}
        <div className="px-2 py-2 md:py-0 flex items-center justify-center">
          <Button
            size="icon"
            className="rounded-full  h-12 w-12 transition-colors"
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
