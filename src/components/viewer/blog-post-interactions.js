"use client"

import { useState, useEffect } from "react"
import Icon from "@/components/icon"
import AuthModal from "@/components/viewer/auth-modal"

export default function BlogPostInteractions({ postId, initialLikes, initialComments }) {
  const [user, setUser] = useState(null)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState("login")
  const [likes, setLikes] = useState(initialLikes)
  const [hasLiked, setHasLiked] = useState(false)
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState("")
  const [loading, setLoading] = useState(false)
  const [commentLoading, setCommentLoading] = useState(false)

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLike = async () => {
    if (!user) {
      setAuthMode("login")
      setShowAuthModal(true)
      return
    }

    if (loading) return

    setLoading(true)
    try {
      const action = hasLiked ? "dislike" : "like"
      const response = await fetch(`/api/posts/${postId}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, action }),
      })

      if (!response.ok) throw new Error("Failed to like post")

      const data = await response.json()
      setLikes(data.likes)
      setHasLiked(!hasLiked)
    } catch (error) {
      console.error("Like error:", error)
      alert("Failed to like post. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleComment = async (e) => {
    e.preventDefault()
    
    if (!user) {
      setAuthMode("signup")
      setShowAuthModal(true)
      return
    }

    if (!newComment.trim()) return

    setCommentLoading(true)
    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, content: newComment }),
      })

      if (!response.ok) throw new Error("Failed to add comment")

      const data = await response.json()
      setComments([data.comment, ...comments])
      setNewComment("")
    } catch (error) {
      console.error("Comment error:", error)
      alert("Failed to add comment. Please try again.")
    } finally {
      setCommentLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("user")
    setUser(null)
    setHasLiked(false)
  }

  const formatDate = (date) => {
    const now = new Date()
    const commentDate = new Date(date)
    const diffInSeconds = Math.floor((now - commentDate) / 1000)

    if (diffInSeconds < 60) return "just now"
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`
    
    return commentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <>
      {/* User Info Bar */}
      {user && (
        <div className="bg-gradient-to-r from-blog-primary/10 to-blog-secondary/10 rounded-xl p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blog-primary to-blog-secondary flex items-center justify-center">
                <span className="text-white font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold text-content-primary">{user.name}</p>
                <p className="text-xs text-content-secondary">{user.email}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-content-secondary hover:text-red-500 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center justify-center space-x-4 mb-12 pb-12 border-b border-border">
        <button
          onClick={handleLike}
          disabled={loading}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
            hasLiked
              ? "bg-gradient-to-r from-blog-primary to-blog-secondary text-white shadow-xl"
              : "bg-card border border-border text-content-primary hover:bg-muted"
          }`}
        >
          <Icon name={hasLiked ? "heart" : "thumbs-up"} className="w-5 h-5" />
          <span>{hasLiked ? "Liked" : "Like"} ({likes})</span>
        </button>
        <button className="flex items-center space-x-2 px-6 py-3 bg-card border border-border text-content-primary rounded-xl font-semibold hover:bg-muted transition-all">
          <Icon name="share-2" className="w-5 h-5" />
          <span>Share</span>
        </button>
        <button className="flex items-center space-x-2 px-6 py-3 bg-card border border-border text-content-primary rounded-xl font-semibold hover:bg-muted transition-all">
          <Icon name="bookmark" className="w-5 h-5" />
          <span>Save</span>
        </button>
      </div>

      {/* Comments Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-heading mb-6">
          Comments ({comments.length})
        </h3>

        {/* Comment Form */}
        <form onSubmit={handleComment} className="mb-8">
          <div className="bg-card border border-border rounded-xl p-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder={user ? "Share your thoughts..." : "Login to comment..."}
              rows={4}
              className="w-full bg-transparent text-content-primary placeholder:text-content-secondary focus:outline-none resize-none"
              disabled={!user}
            />
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-content-secondary">
                {user ? "Be respectful and constructive" : "Please login to comment"}
              </p>
              <button
                type="submit"
                disabled={!user || !newComment.trim() || commentLoading}
                className="px-6 py-2 bg-gradient-to-r from-blog-primary to-blog-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {commentLoading ? "Posting..." : "Post Comment"}
              </button>
            </div>
          </div>
        </form>

        {/* Comments List */}
        <div className="space-y-6">
          {comments.length === 0 ? (
            <div className="text-center py-12 bg-muted rounded-xl">
              <Icon name="message-circle" className="w-12 h-12 text-content-secondary mx-auto mb-4" />
              <p className="text-content-secondary">No comments yet. Be the first to comment!</p>
            </div>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blog-primary to-blog-secondary flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {comment.author.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h4 className="font-semibold text-content-primary">
                        {comment.author.name}
                      </h4>
                      <span className="text-xs text-content-secondary">
                        {formatDate(comment.createdAt)}
                      </span>
                    </div>
                    <p className="text-content-secondary leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => {
          setShowAuthModal(false)
          // Reload to check for new user
          const storedUser = localStorage.getItem("user")
          if (storedUser) {
            setUser(JSON.parse(storedUser))
          }
        }}
        mode={authMode}
      />
    </>
  )
}
