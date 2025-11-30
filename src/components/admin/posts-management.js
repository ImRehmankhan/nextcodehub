"use client"

import { useState } from "react"
import { useCallAPI } from "@/hooks/wrapper"
import Icon from "@/components/icon"
import PostEditor from "./post-editor"

export default function PostsManagement() {
  const { getAll, add, update, remove } = useCallAPI("posts", "admin/posts");
  
  const { data: postsData, isLoading, error } = getAll;
  const posts = postsData?.posts || [];
  
  const [selectedPosts, setSelectedPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)
  const [filterStatus, setFilterStatus] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showEditor, setShowEditor] = useState(false)
  const [editingPost, setEditingPost] = useState(null)

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

  const handleBulkAction = async (action) => {
    if (selectedPosts.length === 0) return

    try {
      if (action === 'delete') {
        if (!confirm(`Are you sure you want to delete ${selectedPosts.length} selected posts? This action cannot be undone.`)) {
          return
        }
        // Delete posts one by one (could be optimized with bulk delete endpoint)
        for (const postId of selectedPosts) {
          await remove.mutateAsync(postId)
        }
      } else if (action === 'publish' || action === 'draft') {
        // Update posts status one by one
        for (const postId of selectedPosts) {
          const post = posts.find(p => p.id === postId)
          if (post) {
            await update.mutateAsync({ ...post, published: action === 'publish' })
          }
        }
      }

      setSelectedPosts([])
    } catch (error) {
      console.error(`Error performing ${action}:`, error)
      alert(error.message) // Replace with proper error handling/toast
    }
  }

  const handleEdit = (post) => {
    setEditingPost(post)
    setShowEditor(true)
  }

  const handleAddNew = () => {
    setEditingPost(null)
    setShowEditor(true)
  }

  const handleSavePost = async (postData) => {
    try {
      if (editingPost) {
        await update.mutateAsync({ id: editingPost.id, ...postData })
      } else {
        await add.mutateAsync(postData)
      }
      setShowEditor(false)
      setEditingPost(null)
    } catch (error) {
      console.error('Error saving post:', error)
      throw error
    }
  }

  const handleView = (post) => {
    // TODO: Navigate to view page
    console.log('View post:', post)
  }

  const handleDelete = async (postId) => {
    if (confirm("Are you sure you want to delete this post? This action cannot be undone.")) {
      try {
        await remove.mutateAsync(postId)
      } catch (error) {
        console.error('Error deleting post:', error)
        alert(error.message) // Replace with proper error handling/toast
      }
    }
  }

  const getStatusBadge = (published) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
    if (published) {
      return `${baseClasses} bg-green-100 text-green-800`
    }
    return `${baseClasses} bg-yellow-100 text-yellow-800`
  }

  if (isLoading) {
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
              <Icon name="search" className="absolute left-3 top-2.5 h-5 w-5 text-content-secondary" />
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

          <button 
            onClick={handleAddNew}
            className="bg-blog-primary hover:bg-blog-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium theme-transition flex items-center space-x-2"
          >
            <Icon name="plus" className="w-4 h-4" />
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
                      <button 
                        onClick={() => handleEdit(post)}
                        title="Edit" 
                        className="p-1 text-blog-primary hover:text-blog-primary/80 theme-transition"
                      >
                        <Icon name="edit" className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleView(post)}
                        title="View" 
                        className="p-1 text-blue-600 hover:text-blue-500 theme-transition"
                      >
                        <Icon name="eye" className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(post.id)}
                        title="Delete" 
                        className="p-1 text-red-600 hover:text-red-500 theme-transition"
                      >
                        <Icon name="trash" className="w-5 h-5" />
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

      {/* Post Editor Modal */}
      {showEditor && (
        <PostEditor
          post={editingPost}
          onClose={() => {
            setShowEditor(false)
            setEditingPost(null)
          }}
          onSave={handleSavePost}
        />
      )}
    </div>
  )
}
