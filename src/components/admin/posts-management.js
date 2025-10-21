"use client"

import { useState, useEffect } from "react"

export default function PostsManagement() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedPosts, setSelectedPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data - matches Prisma `Post` model (with relations included)
  useEffect(() => {
    const mockPosts = [
      {
        id: 1,
        title: "Getting Started with Next.js 13",
        slug: "getting-started-nextjs-13",
        content: "<p>Intro to Next.js 13</p>",
        readTime: 5,
        featureImage: null,
        featureAlt: null,
        metaTitle: "Getting Started with Next.js 13",
        metaDesc: "A quickstart guide",
        ogImage: null,
        canonicalUrl: null,
        published: true,
        views: 1245,
        likes: 89,
        shares: 12,
        authorId: 1,
        author: { id: 1, name: "John Doe", email: "john@example.com" },
        categories: [ { id: 1, name: "Web Development", slug: "web-development" } ],
        tags: [ { id: 1, name: "Next.js", slug: "nextjs" }, { id: 2, name: "React", slug: "react" } ],
        createdAt: "2024-01-15",
        updatedAt: "2024-01-16",
      },
      {
        id: 2,
        title: "Advanced React Hooks Patterns",
        slug: "advanced-react-hooks-patterns",
        content: "<p>Advanced Hooks</p>",
        readTime: 8,
        featureImage: null,
        featureAlt: null,
        metaTitle: null,
        metaDesc: null,
        ogImage: null,
        canonicalUrl: null,
        published: true,
        views: 892,
        likes: 67,
        shares: 4,
        authorId: 2,
        author: { id: 2, name: "Jane Smith", email: "jane@example.com" },
        categories: [ { id: 2, name: "React", slug: "react" } ],
        tags: [ { id: 2, name: "React", slug: "react" }, { id: 3, name: "Hooks", slug: "hooks" } ],
        createdAt: "2024-01-10",
        updatedAt: "2024-01-10",
      },
      {
        id: 3,
        title: "TypeScript Best Practices",
        slug: "typescript-best-practices",
        content: "<p>TypeScript tips</p>",
        readTime: 7,
        featureImage: null,
        featureAlt: null,
        metaTitle: null,
        metaDesc: null,
        ogImage: null,
        canonicalUrl: null,
        published: false,
        views: 0,
        likes: 0,
        shares: 0,
        authorId: 3,
        author: { id: 3, name: "Bob Johnson", email: "bob@example.com" },
        categories: [ { id: 3, name: "Programming", slug: "programming" } ],
        tags: [ { id: 4, name: "TypeScript", slug: "typescript" } ],
        createdAt: "2024-01-20",
        updatedAt: "2024-01-20",
      },
    ]

    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 500)
  }, [])

  const stats = {
    total: posts.length,
    published: posts.filter(p => p.published).length,
    draft: posts.filter(p => !p.published).length,
    totalViews: posts.reduce((sum, p) => sum + (p.views || 0), 0),
    totalLikes: posts.reduce((sum, p) => sum + (p.likes || 0), 0),
    totalComments: 0, // comments are separate model in schema
  }

  const filteredPosts = posts.filter(post => {
    const matchesStatus =
      filterStatus === "all" ||
      (filterStatus === "published" && post.published) ||
      (filterStatus === "draft" && !post.published)

    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.author?.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.categories?.[0]?.name || "").toLowerCase().includes(searchTerm.toLowerCase())

    return matchesStatus && matchesSearch
  })

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedPosts(currentPosts.map(post => post.id))
    } else {
      setSelectedPosts([])
    }
  }

  const handleSelectPost = (postId, checked) => {
    if (checked) {
      setSelectedPosts([...selectedPosts, postId])
    } else {
      setSelectedPosts(selectedPosts.filter(id => id !== postId))
    }
  }

  const handleBulkAction = (action) => {
    console.log(`Performing ${action} on posts:`, selectedPosts)
    // TODO: Implement bulk actions
  }

  const getStatusBadge = (published) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    if (published) {
      return `${baseClasses} bg-green-100 text-green-800`
    }
    return `${baseClasses} bg-yellow-100 text-yellow-800`
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-heading">{stats.total}</div>
          <div className="text-sm text-content-secondary">Total Posts</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-green-600">{stats.published}</div>
          <div className="text-sm text-content-secondary">Published</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-yellow-600">{stats.draft}</div>
          <div className="text-sm text-content-secondary">Drafts</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-blue-600">{stats.totalViews.toLocaleString()}</div>
          <div className="text-sm text-content-secondary">Total Views</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-red-600">{stats.totalLikes}</div>
          <div className="text-sm text-content-secondary">Total Likes</div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4 shadow-sm">
          <div className="text-2xl font-bold text-purple-600">{stats.totalComments}</div>
          <div className="text-sm text-content-secondary">Total Comments</div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-heading placeholder-content-secondary focus:outline-none focus:ring-2 focus:ring-blog-primary focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-content-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-heading focus:outline-none focus:ring-2 focus:ring-blog-primary focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          <button className="bg-blog-primary hover:bg-blog-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium theme-transition flex items-center space-x-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add New Post</span>
          </button>
        </div>

        {/* Bulk Actions */}
        {selectedPosts.length > 0 && (
          <div className="mt-4 flex items-center space-x-4">
            <span className="text-sm text-content-secondary">
              {selectedPosts.length} post{selectedPosts.length > 1 ? 's' : ''} selected
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => handleBulkAction('publish')}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm theme-transition"
              >
                Publish
              </button>
              <button
                onClick={() => handleBulkAction('draft')}
                className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-1 rounded text-sm theme-transition"
              >
                Draft
              </button>
              <button
                onClick={() => handleBulkAction('delete')}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm theme-transition"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Posts Table */}
      <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-muted">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary uppercase tracking-wider">
                  <input
                    type="checkbox"
                    checked={selectedPosts.length === currentPosts.length && currentPosts.length > 0}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="rounded border-border text-blog-primary focus:ring-blog-primary"
                  />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary uppercase tracking-wider">
                   ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary uppercase tracking-wider">
                  Author
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary uppercase tracking-wider">
                  Stats
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {currentPosts.map((post) => (
                <tr key={post.id} className="hover:bg-muted theme-transition">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedPosts.includes(post.id)}
                      onChange={(e) => handleSelectPost(post.id, e.target.checked)}
                      className="rounded border-border text-blog-primary focus:ring-blog-primary"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-content-secondary">#{`00${post.id}`}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <div className="text-sm font-medium text-heading">{post.title}</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {(post.tags || []).slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blog-primary/10 text-blog-primary"
                          >
                            {tag.name}
                          </span>
                        ))}
                        {post.tags && post.tags.length > 2 && (
                          <span className="text-xs text-content-secondary">+{post.tags.length - 2}</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={getStatusBadge(post.published)}>
                      {post.published ? 'published' : 'draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-heading">{post.author?.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-heading">{post.categories?.[0]?.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-4 text-sm text-content-secondary">
                      <span title="Views">{post.views} 👁️</span>
                      <span title="Likes">{post.likes} ❤️</span>
                      <span title="Comments">{post.comments} 💬</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-content-secondary">
                      <div>{new Date(post.createdAt).toLocaleDateString()}</div>
                      {post.updatedAt !== post.createdAt && (
                        <div className="text-xs">Updated: {new Date(post.updatedAt).toLocaleDateString()}</div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button title="Edit" className="p-1 text-blog-primary hover:text-blog-primary/80 theme-transition">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button title="View" className="p-1 text-blue-600 hover:text-blue-500 theme-transition">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button title="Delete" className="p-1 text-red-600 hover:text-red-500 theme-transition">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-muted px-4 py-3 flex items-center justify-between border-t border-border sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
                className="relative inline-flex items-center px-4 py-2 border border-border text-sm font-medium rounded-md text-heading bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed theme-transition"
              >
                Previous
              </button>
              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-border text-sm font-medium rounded-md text-heading bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed theme-transition"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-content-secondary">
                  Showing <span className="font-medium">{indexOfFirstPost + 1}</span> to{" "}
                  <span className="font-medium">
                    {Math.min(indexOfLastPost, filteredPosts.length)}
                  </span>{" "}
                  of <span className="font-medium">{filteredPosts.length}</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-border bg-card text-sm font-medium text-content-secondary hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed theme-transition"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium theme-transition ${
                        currentPage === page
                          ? "z-10 bg-blog-primary border-blog-primary text-white"
                          : "bg-card border-border text-content-secondary hover:bg-muted"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-border bg-card text-sm font-medium text-content-secondary hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed theme-transition"
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}