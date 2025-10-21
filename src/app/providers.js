"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/components/theme-provider"

export default function Providers({ children, session }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider defaultTheme="system" storageKey="nextcodehub-theme">
        {children}
      </ThemeProvider>
    </SessionProvider>
  )
}