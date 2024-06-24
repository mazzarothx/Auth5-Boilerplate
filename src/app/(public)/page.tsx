import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <h1 className="text-3xl font-semibold">Home Page</h1>
    </div>
  )
}
