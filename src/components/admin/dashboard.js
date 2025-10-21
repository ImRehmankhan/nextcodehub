"use client"

import { useState, useEffect } from "react"

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalViews: 0,
    totalLikes: 0,
    totalComments: 0,
    totalCategories: 0,
    totalTags: 0,
  })

  const [recentActivity, setRecentActivity] = useState([])

  // TODO: Replace with actual API calls
  useEffect(() => {
    // Mock data - replace with actual API calls
    setStats({
      totalPosts: 42,
      publishedPosts: 38,
      draftPosts: 4,
      totalViews: 15234,
      totalLikes: 892,
      totalComments: 156,
      totalCategories: 8,
      totalTags: 24,
    })

    setRecentActivity([
      { id: 1, type: "post", action: "published", title: "Getting Started with Next.js", time: "2 hours ago" },
      { id: 2, type: "comment", action: "received", title: "New comment on React Hooks Guide", time: "4 hours ago" },
      { id: 3, type: "like", action: "received", title: "10 new likes on JavaScript Tips", time: "6 hours ago" },
      { id: 4, type: "post", action: "drafted", title: "Advanced TypeScript Patterns", time: "1 day ago" },
    ])
  }, [])

  const mainStats = [
    {
      name: "Total Posts",
      value: stats.totalPosts,
      change: "+2 from last month",
      changeType: "positive",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "bg-blue-500",
    },
    {
      name: "Total Views",
      value: stats.totalViews.toLocaleString(),
      change: "+12% from last month",
      changeType: "positive",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: "bg-green-500",
    },
    {
      name: "Total Likes",
      value: stats.totalLikes,
      change: "+8% from last month",
      changeType: "positive",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "bg-red-500",
    },
    {
      name: "Total Comments",
      value: stats.totalComments,
      change: "+15% from last month",
      changeType: "positive",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      color: "bg-purple-500",
    },
  ]

  const secondaryStats = [
    {
      name: "Published Posts",
      value: stats.publishedPosts,
      total: stats.totalPosts,
      percentage: stats.totalPosts > 0 ? Math.round((stats.publishedPosts / stats.totalPosts) * 100) : 0,
      color: "bg-blog-primary",
    },
    {
      name: "Draft Posts",
      value: stats.draftPosts,
      total: stats.totalPosts,
      percentage: stats.totalPosts > 0 ? Math.round((stats.draftPosts / stats.totalPosts) * 100) : 0,
      color: "bg-blog-accent",
    },
    {
      name: "Categories",
      value: stats.totalCategories,
      color: "bg-blog-secondary",
    },
    {
      name: "Tags",
      value: stats.totalTags,
      color: "bg-blog-success",
    },
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case "post":
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        )
      case "comment":
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )
      case "like":
        return (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mainStats.map((stat, index) => (
          <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md theme-transition">
            <div className="flex items-center">
              <div className={`${stat.color} p-3 rounded-lg text-white`}>
                {stat.icon}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-sm font-medium text-content-secondary">{stat.name}</h3>
                <p className="text-2xl font-bold text-heading">{stat.value}</p>
                <p className={`text-xs ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Breakdown */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-heading mb-6">Content Overview</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {secondaryStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white text-xl font-bold">{stat.value}</span>
                  </div>
                  <h4 className="text-sm font-medium text-heading">{stat.name}</h4>
                  {stat.percentage && (
                    <p className="text-xs text-content-secondary mt-1">
                      {stat.percentage}% of total
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-heading mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="bg-muted p-2 rounded-lg">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-heading">
                    {activity.title}
                  </p>
                  <p className="text-xs text-content-secondary capitalize">
                    {activity.type} {activity.action}
                  </p>
                  <p className="text-xs text-content-secondary">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 text-sm text-blog-primary hover:text-blog-primary/80 theme-transition">
            View all activity
          </button>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-heading mb-6">Performance Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blog-primary mb-2">
              {stats.totalPosts > 0 ? Math.round(stats.totalViews / stats.totalPosts) : 0}
            </div>
            <div className="text-sm text-content-secondary">Average views per post</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blog-secondary mb-2">
              {stats.totalPosts > 0 ? Math.round(stats.totalLikes / stats.totalPosts) : 0}
            </div>
            <div className="text-sm text-content-secondary">Average likes per post</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blog-accent mb-2">
              {stats.totalPosts > 0 ? Math.round(stats.totalComments / stats.totalPosts) : 0}
            </div>
            <div className="text-sm text-content-secondary">Average comments per post</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-heading mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="bg-blog-primary hover:bg-blog-primary/90 text-white px-6 py-3 rounded-lg text-sm font-medium theme-transition flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>New Post</span>
          </button>
          <button className="bg-blog-secondary hover:bg-blog-secondary/90 text-white px-6 py-3 rounded-lg text-sm font-medium theme-transition flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            <span>New Category</span>
          </button>
          <button className="bg-blog-accent hover:bg-blog-accent/90 text-white px-6 py-3 rounded-lg text-sm font-medium theme-transition flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <span>New Tag</span>
          </button>
          <button className="bg-blog-success hover:bg-blog-success/90 text-white px-6 py-3 rounded-lg text-sm font-medium theme-transition flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z" />
            </svg>
            <span>Analytics</span>
          </button>
        </div>
      </div>
    </div>
  )
}