import { Settings, LayoutDashboard, LineChartIcon as ChartLine, BookOpen, MessageSquare, Users, GraduationCap, School, BookCopy, CalendarDays, Bell, BadgeDollarSign, Banknote, DollarSign, Bus, CircleUserRound, CircleUser, Wallet, LogOut } from 'lucide-react';

export const menuItems = [
  {
    title: "MAIN MENU",
    items: [
      {
        icon: LayoutDashboard,
        label: "Dashboard",
        link: "/dashboard",
      },
      {
        icon: ChartLine,
        label: "Analytics",
        link: "/analytics",
      },
      {
        icon: MessageSquare,
        label: "Messages",
        link: "/messages",
      },
    ],
  },
  {
    title: "ACADEMIC",
    items: [
      {
        icon: Users,
        label: "Teachers",
        link: "/teacher",
      },
      {
        icon: GraduationCap,
        label: "Students",
        link: "/student",
      },
      {
        icon: Users,
        label: "Parents",
        link: "/parent",
      },
      {
        icon: School,
        label: "Classes",
        link: "/classes",
      },
      {
        icon: BookCopy,
        label: "Lessons",
        link: "/lessons",
      },
      {
        icon: BookOpen,
        label: "Library",
        link: "/library",
      },
      {
        icon: BookCopy,
        label: "Assignments",
        link: "/assignments",
      },
      {
        icon: CalendarDays,
        label: "Events",
        link: "/events",
      },
      {
        icon: Bell,
        label: "Announcements",
        link: "/announcements",
      },
    ],
  },
  {
    title: "FINANCE",
    items: [
      {
        icon: BadgeDollarSign,
        label: "Fees Collection",
        link: "/fees",
      },
      {
        icon: Banknote,
        label: "School Expenses",
        link: "/expenses",
      },
      {
        icon: DollarSign,
        label: "Budget Tracker",
        link: "/budget",
      },
    ],
  },
  {
    title: "TRANSPORT",
    items: [
      {
        icon: Bus,
        label: "Transport",
        link: "/transport",
      },
    ],
  },
  {
    title: "ATTENDANCE",
    items: [
      {
        icon: CircleUserRound,
        label: "Staff Attendance",
        link: "/staffattendance",
      },
      {
        icon: CircleUser,
        label: "Student Attendance",
        link: "/studentattendance",
      },
    ],
  },
  {
    title: "SUPPORT",
    items: [
      {
        icon: CircleUser,
        label: "Profile",
        link: "/profile",
      },
      {
        icon: Wallet,
        label: "Billing",
        link: "/billing",
      },
      {
        icon: Settings,
        label: "Settings",
        link: "/settings",
      },
      {
        icon: LogOut,
        label: "Logout",
        link: "/logout",
      },
    ],
  },
];

