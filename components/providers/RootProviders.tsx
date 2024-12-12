"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

const RootProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class" // This will toggle dark mode by adding/removing "dark" class
      defaultTheme="light" // Start with dark mode by default
      enableSystem // Enable system preference detection
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

export default RootProviders;
