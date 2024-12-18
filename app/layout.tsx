import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Montserrat, Rethink_Sans, Lora } from "next/font/google";
import RootProviders from "@/components/providers/RootProviders";

// Montserrat font configuration
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold for headings
  variable: "--font-montserrat",
  display: "swap", // Improves loading experience
});

const rethink = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold for headings
  variable: "--font-rethink",
  display: "swap", // Improves loading experience
});

// Lora font configuration
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, and Bold for body text
  variable: "--font-lora",
  display: "swap", // Improves loading experience
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Century - Student Management System",
  description: "A Student Management System",
  openGraph: {
    title: "Century - Student Management System",
    description: "A Student Management System",
    type: "website",
    locale: "en_US",
    url: "https://centurybeta.vercel.app/",
    siteName: "Century",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${montserrat.variable} ${rethink.variable} ${lora.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
