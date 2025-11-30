import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware(req) {
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (req.nextUrl.pathname.startsWith("/admin")) {
          return token?.role === "ADMIN"
        }
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