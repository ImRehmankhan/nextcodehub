"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import AdminLayout from "@/components/admin/admin-layout"
import Dashboard from "@/components/admin/dashboard"
import PostsManagement from "@/components/admin/posts-management"
import CategoriesManagement from "@/components/admin/categories-management"
import TagsManagement from "@/components/admin/tags-management"

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("dashboard")

  useEffect(() => {
    if (status === "loading") return 

    if (!session) {
      router.push("/admin/login")
      return
    }

    if (session.user?.role !== "ADMIN") {
      router.push("/admin/login")
      return
    }
  }, [session, status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-content-secondary">Loading...</p>
        </div>
      </div>
    )
  }

  if (!session || session.user?.role !== "ADMIN") {
    return null
  }

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return <Dashboard />
      case "posts":
        return <PostsManagement />
      case "categories":
        return <CategoriesManagement />
      case "tags":
        return <TagsManagement />
      default:
        return <Dashboard />
    }
  }

  return (
    <AdminLayout activeSection={activeSection} onSectionChange={setActiveSection}>
      {renderContent()}
    </AdminLayout>
  )
}