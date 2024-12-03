import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <div className=" mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center rounded-full bg-gray-100 px-4 py-1.5 mb-8">
          <Badge
            variant="secondary"
            className="h-8 items-center gap-2 pl-4 pr-6 text-base"
          >
            <span className="text-sm font-medium">Welcome to Century</span>
          </Badge>
        </div>
        <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your Complete School Management Solution
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          From admissions to academics, simplify every aspect of school
          administration with our comprehensive and user-friendly platform.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button className="bg-black text-white hover:bg-gray-800">
            Try for free
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
          <Button variant="outline">
            See features
            <svg
              className="ml-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>

        {/* Trusted By Section */}
        <div className="mt-20">
          <p className="text-sm text-gray-600 mb-8">
            Trusted by 50+ learning institutions
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
