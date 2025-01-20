import React, { ReactNode } from "react";

function AuthLayOut({ children }: { children: ReactNode }) {
  return <main>
  <div>
      {children}
  </div>
  </main>;
}

export default AuthLayOut;