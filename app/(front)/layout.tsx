import SiteHeader from "@/components/site-header";
import React, { ReactNode } from "react";

function FrontLayOut({ children }: { children: ReactNode }) {
  return (
    <div>
      <SiteHeader />
      {children}
    </div>
  );
}

export default FrontLayOut;
