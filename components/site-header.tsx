"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  CircleUserRound,
  Menu,
  ChevronDown,
  LogIn,
  User,
  Settings,
  LogOut,
  HelpCircle,
  BookOpen,
} from "lucide-react";

import { cn } from "@/lib/utils";

import Logo from "./ui/logo";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SchoolRegistrationForm } from "./school-registration-form1";

const solutions = [
  {
    title: "Century for Government Schools",
    href: "/solutions/government-schools",
    image: "/images/solutions-overview.jpg",
  },
  {
    title: "Century for Colleges",
    href: "/solutions/colleges",
    image: "/images/solutions-overview.jpg",
  },
  {
    title: "Century for Tertiary Institutions",
    href: "/solutions/tertiary-institutions",
    image: "/images/solutions-overview.jpg",
  },
  {
    title: "Century for Training Centers",
    href: "/solutions/training-centers",
    image: "/images/solutions-overview.jpg",
  },
  {
    title: "Century for Private Schools",
    href: "/solutions/private-schools",
    image: "/images/solutions-overview.jpg",
  },
  {
    title: "Century Search Portal",
    href: "/search-portal",
    image: "/images/solutions-overview.jpg",
  },
];

const features = [
  {
    icon: CircleUserRound,
    title: "Teacher Management",
    description:
      "Manage teacher information, class assignments, and performance.",
    href: "/teachers",
  },
  {
    icon: CircleUserRound,
    title: "Student Management",
    description: "Track student details, enrollment, grades, and attendance.",
    href: "/students",
  },
  {
    icon: CircleUserRound,
    title: "Parent Portal",
    description:
      "Allow parents to view their child's progress and communicate with teachers.",
    href: "/parents",
  },
  {
    icon: CircleUserRound,
    title: "Class Management",
    description:
      "Organize and manage class schedules, subjects, and student enrollments.",
    href: "/classes",
  },
  {
    icon: CircleUserRound,
    title: "Lesson Planning",
    description:
      "Create and track lesson plans, assignments, and exam schedules.",
    href: "/lessons",
  },
  {
    icon: CircleUserRound,
    title: "Exam Management",
    description: "Manage exam schedules, grading, and performance reports.",
    href: "/exams",
  },
  {
    icon: CircleUserRound,
    title: "Attendance Tracking",
    description:
      "Monitor and record student attendance for each class and lesson.",
    href: "/attendance",
  },
  {
    icon: CircleUserRound,
    title: "Event Management",
    description:
      "Organize and communicate school events, activities, and announcements.",
    href: "/events",
  },
  {
    icon: CircleUserRound,
    title: "Data Analytics",
    description:
      "Generate reports and insights on student performance, attendance, and more.",
    href: "/analytics",
  },
  {
    icon: CircleUserRound,
    title: "Communication",
    description:
      "Enable messaging and collaboration between teachers, parents, and administrators.",
    href: "/messages",
  },
];

export default function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [showFeatures, setShowFeatures] = React.useState(false);
  const [hoveredImage, setHoveredImage] = React.useState(solutions[0].image);

  return (
    <div className="">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto flex h-14 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Logo />
            <NavigationMenu className="hidden md:flex font-[family-name:var(--font-rethink)]">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-2 gap-4 w-[900px] p-4 dark:bg-white">
                      <div>
                        <h4 className="text-lg font-medium dark:text-black mb-4">
                          Our Solutions
                        </h4>
                        <ul className="space-y-2">
                          {solutions.map((solution, index) => (
                            <li
                              key={index}
                              className="group"
                              onMouseEnter={() =>
                                setHoveredImage(solution.image)
                              }
                            >
                              <Link
                                href={solution.href}
                                className="text-gray-700 text-sm group-hover:text-blue-600 transition-colors duration-300"
                              >
                                {solution.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-center">
                        <Image
                          src={hoveredImage}
                          alt="Solution Preview"
                          width={400}
                          height={300}
                          className="rounded-lg transition-all duration-300"
                          priority
                        />
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[900px] p-4 dark:bg-white dark:text-black">
                      <div className="flex font-[family-name:var(--font-rethink)] items-center justify-between mb-4 pb-2 border-b">
                        <h4 className="text-lg font-medium">Features</h4>
                        <Link
                          href="/features"
                          className="text-sm text-blue-500 hover:underline"
                        >
                          View all
                        </Link>
                      </div>
                      <div className="grid gap-4 md:grid-cols-3">
                        {features.map((feature, index) => (
                          <Link
                            key={index}
                            href={`/feature/${feature.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="block group"
                          >
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                                <feature.icon className="h-6 w-6 text-blue-500" />
                              </div>
                              <div>
                                <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                  {feature.title}
                                </h5>
                                <p className="text-sm text-muted-foreground">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t">
                        <div className="flex items-center justify-between">
                          <Button variant="secondary">Get started</Button>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Pricing
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/search-portal" legacyBehavior passHref>
                    <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                      Search Portal
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="bg-gray-200 dark:bg-gray-800 p-2 rounded-full text-sm"
          >
            {theme === "dark" ? "🌞" : "🌙"}
          </button>

          <div className="hidden md:flex space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="font-[family-name:var(--font-rethink)]"
                  variant="outline"
                >
                  Register your School
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl">
                <DialogHeader>
                  <DialogTitle></DialogTitle>
                  <DialogDescription></DialogDescription>
                </DialogHeader>
                <SchoolRegistrationForm />
              </DialogContent>
            </Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="font-[family-name:var(--font-rethink)]"
                  variant="outline"
                >
                  <User className="mr-2 font-[family-name:var(--font-rethink)] h-4 w-4" />
                  <span>Menu</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <Link href="/login" className="flex items-center w-full">
                    <LogIn className="mr-2 h-4 w-4" />
                    <span>Login</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/registration"
                    className="flex items-center w-full"
                  >
                    <User className="mr-2 h-4 w-4" />
                    <span>Sign Up</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard" className="flex items-center w-full">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/help" className="flex items-center w-full">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    <span>Help & Support</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/resources" className="flex items-center w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>Resources</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-full p-0 bg-black">
              <SheetHeader className="border-b p-4">
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col py-4">
                <Link
                  href="/"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <button
                  className="flex items-center justify-between px-4 py-2 text-lg font-medium hover:bg-accent text-left"
                  onClick={() => setShowFeatures(!showFeatures)}
                >
                  Features
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 transition-transform",
                      showFeatures && "rotate-180"
                    )}
                  />
                </button>
                {showFeatures && (
                  <div className="px-4 py-2 space-y-4">
                    {features.map((feature, index) => (
                      <Link
                        key={index}
                        href={`/feature/${feature.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex items-start gap-4 py-2"
                        onClick={() => setOpen(false)}
                      >
                        <div className="p-2 bg-muted rounded-md">
                          <feature.icon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">{feature.title}</h5>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                <Link
                  href="/solutions"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/learn"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Learn
                </Link>
                <Link
                  href="/academy"
                  className="px-4 py-2 text-lg font-medium hover:bg-accent"
                  onClick={() => setOpen(false)}
                >
                  Academy
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-background">
                <div className="grid gap-2 font-[family-name:var(--font-rethink)]">
                  <Button
                    variant="outline"
                    className="w-full font-[family-name:var(--font-rethink)]"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Button>
                  <Button
                    className="w-full font-[family-name:var(--font-rethink)]"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
}
