import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
    // Additional middleware logic can go here if needed
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        // Check if user is accessing admin routes
        if (req.nextUrl.pathname.startsWith("/admin")) {
          // Only allow if user has ADMIN role
          return token?.role === "ADMIN"
        }
        
        // For non-admin routes, allow access
        return true
      },
    },
  }
)

export const config = {
  matcher: [
    // Protect all admin routes
    "/admin/:path*",
    // You can add more protected paths here
  ]
}