import Navbar from "@/components/viewer/navbar"
import Footer from "@/components/viewer/footer"

export default function ViewerLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
