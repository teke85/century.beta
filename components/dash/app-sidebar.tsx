"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Users,
  UserCheck,
  MessageSquare,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  BookMarked,
  Building2,
  DollarSign,
  Settings,
} from "lucide-react";

import { NavMain } from "@/components/dash/nav-main";
import { NavProjects } from "@/components/dash/nav-projects";
import { NavUser } from "@/components/dash/nav-user";
import { TeamSwitcher } from "@/components/dash/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Help & Support",
    email: "Typically reply within 5mins",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Analytics",
          url: "#",
        },
      ],
    },
    {
      title: "Academics",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Examinations",
          url: "#",
        },
        {
          title: "Classes",
          url: "#",
        },
        {
          title: "Assignments",
          url: "#",
        },
        {
          title: "Grades",
          url: "#",
        },
        {
          title: "Attendance",
          url: "#",
        },
        {
          title: "Exams",
          url: "#",
        },
        {
          title: "Timetable",
          url: "#",
        },
        {
          title: "Curriculum",
          url: "#",
        },
        {
          title: "Report Cards",
          url: "#",
        },
      ],
    },
    {
      title: "Student Management",
      url: "#",
      icon: Users,
      items: [
        { title: "Student Directory", url: "#" },
        { title: "Profiles", url: "#" },
        { title: "Admissions", url: "#" },
        { title: "Enrolment", url: "#" },
        { title: "Attendance", url: "#" },
        { title: "Performance", url: "#" },
      ],
    },
    {
      title: "Staff Management",
      url: "#",
      icon: UserCheck,
      items: [
        { title: "Teacher Profiles", url: "#" },
        { title: "Attendance", url: "#" },
        { title: "Evaluation", url: "#" },
      ],
    },
    {
      title: "Communication",
      url: "#",
      icon: MessageSquare,
      items: [
        { title: "Announcements", url: "#" },
        { title: "Messaging", url: "#" },
        { title: "Parent Portal", url: "#" },
      ],
    },
    {
      title: "Resources",
      url: "#",
      icon: BookMarked,
      items: [
        { title: "Library", url: "#" },
        { title: "E-Learning", url: "#" },
        { title: "Study Resources", url: "#" },
      ],
    },
    {
      title: "Administration",
      url: "#",
      icon: Building2,
      items: [
        { title: "Calendar", url: "#" },
        { title: "Reports", url: "#" },
        { title: "Documents", url: "#" },
      ],
    },
    {
      title: "Finance",
      url: "#",
      icon: DollarSign,
      items: [
        { title: "Fees", url: "#" },
        { title: "Scholarships", url: "#" },
        { title: "Financial Reports", url: "#" },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      items: [
        { title: "User Management", url: "#" },
        { title: "System Config", url: "#" },
        { title: "Notifications", url: "#" },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="block lg:hidden">
        LOGO
        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
