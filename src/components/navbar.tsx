"use client"

import { UserButton } from "@/components/auth/user-button"
import { useSession } from "next-auth/react"
import { LoginButton } from "./auth/login-button"
import { Button } from "./ui/button"

export const GlobalNavbar = () => {
  const session = useSession()
  const user = session.data?.user

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <div className="flex gap-x-2">
          <p>Mazzaroth.dev</p>
        </div>
        {user && <UserButton />}
        {!user && session.status !== "loading" && (
          <LoginButton mode="modal" asChild>
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </LoginButton>
        )}
      </nav>
    </header>
  )
}
