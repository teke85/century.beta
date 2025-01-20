import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Century - Student Management System",
  description: "List and Advertise Your School on Century Today!",
  openGraph: {
    title: "Century - Student Management System",
    description: "List and Advertise Your School on Century Today!",
    type: "website",
    locale: "en_US",
    url: "https://centurybeta.vercel.app/",
    siteName: "Century",
  },
};

const SchoolDirectory = () => {
  return <div className="h-screen min-h-screen">School Search Portal</div>;
};

export default SchoolDirectory;
