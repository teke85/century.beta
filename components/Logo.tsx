import { cn } from "@/lib/utils";
import { Code, GraduationCap } from "lucide-react";
import Link from "next/link";
import React from "react";
import imgURL from "@/public/assets/logo/default.png";
import Image from "next/image";

export default function Logo({
  variant = "light",
  size = "md",
}: {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}) {
  if (variant === "light") {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="rounded-full p-1">
          <Image
            src={imgURL}
            alt="century logo image"
            className="w-full h-full object-cover rounded-xl shadow-xl"
            width={100}
            height={100}
          />
        </div>
      </Link>
    );
  } else {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        <div className="rounded-full p-1">
          <span className="font-bold text-xl">
            {" "}
           Hello
          </span>
        </div>
      </Link>
    );
  }
}
