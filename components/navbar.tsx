'use client'

import { AirVent } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <div className="px-4 w-full">
      <div className="flex w-full items-center justify-between mx-auto max-w-4xl h-16">
        <Link href='/' className="flex items-center gap-2">
        <AirVent className="h-6 w-6" />
        <span className="font-bold text-black">nextsecure.</span>
        </Link>
        <div>
        <Link href="/sign-in">
        <Button className="outline">Sign In</Button>
        </Link>
        </div>

      </div>
    </div>
  );
}
