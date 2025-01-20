import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";

function AuthLayOut({ children }: { children: ReactNode }) {
  return (
    <main className="text-white">
      <div className="mb-5">
        {/* <Navbar /> */}
        <div className="flex w-full h-full items-center justify-center">
          {children}
        </div>
      </div>
    </main>
  );
}

export default AuthLayOut;
