import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { DashboardNavbar } from "./_components/dashboard-navbar"

interface AdminDashboardLayoutProps {
  children: React.ReactNode
}

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  const session = await auth()

  if (session?.user?.role !== "ADMIN") {
    redirect("/auth/login")
  }

  return (
    <>
      <DashboardNavbar />
      {children}
    </>
  )
}
