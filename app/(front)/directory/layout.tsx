"use client";
import React, { ReactNode, useState } from "react";

type Filters = {
  keyword: string;
  province: string;
  type: string;
  specialization: string;
  isBoarding: boolean | null;
  offerAccommodation: boolean | null;
  gender: string;
};

type DirectoryLayout = {
  children: React.ReactNode;
};

function DirectoryLayOut({ children }: { children: ReactNode }) {
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
  return <div className="flex min=h-screen">{children}</div>;
}

export default DirectoryLayOut;
