import React, { ReactNode } from "react";

function DirectoryLayOut({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen h-screen">
      Hello
      {children}
    </div>
  );
}

export default DirectoryLayOut;
