import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <div className="bg-orange-400 rounded-full p-1">
        <span className="text-white font-bold text-xl">C</span>
      </div>
      <span className="font-bold text-xl">Century</span>
    </Link>
  );
};

export default Logo;
