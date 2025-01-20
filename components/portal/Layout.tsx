"use client";

import React, { ReactNode } from "react";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

type Filters = {
  keyword: string;
  province: string;
  type: string;
  specialization: string;
  isBoarding: boolean | null;
  offerAccommodation: boolean | null;
  gender: string;
};

type LayoutProps = {
  children: React.ReactNode;
};

export function PortalLayout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    keyword: "",
    province: "All",
    type: "All",
    specialization: "All",
    isBoarding: null,
    offerAccommodation: null,
    gender: "All",
  });
  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:block w-80 border-r">
      <div className="hidden lg:block">hello</div>
        <Sidebar
          filters={filters}
          setFilters={setFilters}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      <main className="flex-1">
        <Button
          variant="outline"
          size="icon"
          className="fixed lg:hidden top-20 left-4 z-40"
          onClick={() => setIsOpen(true)}
        >
          <Menu className="h-4 w-4" />
        </Button>
        {children}
      </main>
    </div>
  );
}
