import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function POST(request, { params }) {
  try {
    const { postId } = params
    const { userId, action } = await request.json() // action: "like" or "dislike"

    if (!userId) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      )
    }

    // Verify user exists
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    })

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      )
    }

    // Update post likes count
    const post = await prisma.post.update({
      where: { id: parseInt(postId) },
      data: {
        likes: action === "like" ? { increment: 1 } : { decrement: 1 },
      },
      select: {
        likes: true,
      },
    })

    return NextResponse.json({
      likes: post.likes,
      message: `Post ${action}d successfully`,
    })
  } catch (error) {
    console.error("Like error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
