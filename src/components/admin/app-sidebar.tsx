"use client"

import React from "react"
import {
  LayoutDashboard,
  ListCollapse,
  Map,
  Star,
} from "lucide-react"

import { NavUser } from "@/components/admin/nav-user"
import { TeamSwitcher } from "@/components/admin/logo-dropdown"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { GeneralSidebar } from "./menu-sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  menu: [
    {
      name: "Dashboard",
      url: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Recipe",
      url: "/admin/recipe",
      icon: ListCollapse,
    },
    {
      name: "Categories",
      url: "/admin/categories",
      icon: Map,
    },
    {
      name: "Reviews & Ratings",
      url: "/admin/review-rating",
      icon: Star,
    },
    {
      name: "Customers",
      url: "/admin/customers",
      icon: Star,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <GeneralSidebar menus={data.menu} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
