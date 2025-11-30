"use client"

import { useState, useEffect } from "react"
import Icon from "@/components/icon"

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
      icon: <Icon name="file" className="w-6 h-6" />,
      color: "bg-blue-500",
    },
    {
      name: "Total Views",
      value: stats.totalViews.toLocaleString(),
      change: "+12% from last month",
      changeType: "positive",
      icon: <Icon name="eye" className="w-6 h-6" />,
      color: "bg-green-500",
    },
    {
      name: "Total Likes",
      value: stats.totalLikes,
      change: "+8% from last month",
      changeType: "positive",
      icon: <Icon name="heart" className="w-6 h-6" />,
      color: "bg-red-500",
    },
    {
      name: "Total Comments",
      value: stats.totalComments,
      change: "+15% from last month",
      changeType: "positive",
      icon: <Icon name="message" className="w-6 h-6" />,
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
        return <Icon name="file" className="w-4 h-4" />
      case "comment":
        return <Icon name="message" className="w-4 h-4" />
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
            <Icon name="plus" className="w-4 h-4" />
            <span>New Post</span>
          </button>
          <button className="bg-blog-secondary hover:bg-blog-secondary/90 text-white px-6 py-3 rounded-lg text-sm font-medium theme-transition flex items-center justify-center space-x-2">
            <Icon name="layers" className="w-4 h-4" />
            <span>New Category</span>
          </button>
          <button className="bg-blog-accent hover:bg-blog-accent/90 text-white px-6 py-3 rounded-lg text-sm font-medium theme-transition flex items-center justify-center space-x-2">
            <Icon name="tag" className="w-4 h-4" />
            <span>New Tag</span>
          </button>
          <button className="bg-blog-success hover:bg-blog-success/90 text-white px-6 py-3 rounded-lg text-sm font-medium theme-transition flex items-center justify-center space-x-2">
            <Icon name="book" className="w-4 h-4" />
            <span>Analytics</span>
          </button>
        </div>
      </div>
    </div>
  )
}