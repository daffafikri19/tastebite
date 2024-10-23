import { AppSidebar } from "@/components/admin/app-sidebar"
import { AdminNavbar } from "@/components/admin/navbar"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AdminNavbar />
        <div className="p-4 md:p-6 border h-full">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}