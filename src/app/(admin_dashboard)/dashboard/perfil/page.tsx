"use client"

import { UserInfo } from "@/components/user-info"
import { useCurrentUser } from "@/hooks/use-current-user"

const ClientPage = () => {
  const user = useCurrentUser()

  return (
    <div className="h-full w-full flex items-center justify-center">
      <UserInfo label="📱 Client component" user={user} />
    </div>
  )
}

export default ClientPage
