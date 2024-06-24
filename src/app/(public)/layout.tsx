import { GlobalNavbar } from "@/components/navbar"

interface AdminDashboardLayoutProps {
  children: React.ReactNode
}

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode
  params: { storeId: string }
}) {
  return (
    <>
      <GlobalNavbar />
      {children}
    </>
  )
}
