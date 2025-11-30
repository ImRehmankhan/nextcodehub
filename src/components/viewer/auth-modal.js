"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Icon from "@/components/icon"

export default function AuthModal({ isOpen, onClose, mode: initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode) // "login" or "signup"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (mode === "signup") {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match")
        setLoading(false)
        return
      }
      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters")
        setLoading(false)
        return
      }
    }

    try {
      const endpoint = mode === "signup" ? "/api/auth/signup" : "/api/auth/login"
      const body = mode === "signup" 
        ? { name: formData.name, email: formData.email, password: formData.password }
        : { email: formData.email, password: formData.password }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Authentication failed")
      }

      // Store user session in localStorage
      localStorage.setItem("user", JSON.stringify(data.user))
      
      // Close modal and refresh
      onClose()
      router.refresh()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const switchMode = () => {
    setMode(mode === "login" ? "signup" : "login")
    setError("")
    setFormData({ name: "", email: "", password: "", confirmPassword: "" })
  }

  return (
    <div className="w-full h-[100vh] z-5000 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm ">
      <div className="bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full  p-8 relative my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-content-secondary hover:text-content-primary transition-colors"
        >
          <Icon name="x" className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-heading mb-2">
            {mode === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-content-secondary">
            {mode === "login"
              ? "Login to like posts and add comments"
              : "Sign up to join our community"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-content-primary mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-blog-primary transition-all"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-content-primary mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-blog-primary transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-content-primary mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-blog-primary transition-all"
              placeholder="••••••••"
            />
          </div>

          {mode === "signup" && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-content-primary mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl text-content-primary focus:outline-none focus:ring-2 focus:ring-blog-primary transition-all"
                placeholder="••••••••"
              />
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-xl p-3 text-red-600 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-8 py-4 bg-gradient-to-r from-blog-primary to-blog-secondary text-white rounded-xl font-semibold hover:shadow-xl transition-all disabled:opacity-50"
          >
            {loading ? "Please wait..." : mode === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Switch Mode */}
        <div className="mt-6 text-center">
          <p className="text-content-secondary">
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={switchMode}
              className="text-blog-primary hover:text-blog-secondary font-semibold transition-colors"
            >
              {mode === "login" ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
