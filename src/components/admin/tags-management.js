"use client"

import { useState, useEffect } from "react"

export default function TagsManagement() {
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingTag, setEditingTag] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTags, setSelectedTags] = useState([])
  const [sortBy, setSortBy] = useState("name")

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
  })

  // Mock data - replace with actual API calls
  useEffect(() => {
    // Mock tags now match Prisma Tag model: { id, name, slug, posts: Post[] }
    const mockTags = [
      { id: 1, name: "JavaScript", slug: "javascript", posts: [{ id: 101 }, { id: 102 }, { id: 103 }] },
      { id: 2, name: "React", slug: "react", posts: [{ id: 104 }, { id: 105 }] },
      { id: 3, name: "Next.js", slug: "nextjs", posts: [{ id: 106 }] },
      { id: 4, name: "CSS", slug: "css", posts: [{ id: 107 }, { id: 108 }, { id: 109 }, { id: 110 }] },
      { id: 5, name: "TypeScript", slug: "typescript", posts: [{ id: 111 }] },
      { id: 6, name: "Node.js", slug: "nodejs", posts: [{ id: 112 }, { id: 113 }] },
      { id: 7, name: "API", slug: "api", posts: [] },
      { id: 8, name: "Performance", slug: "performance", posts: [] },
    ]

    setTimeout(() => {
      setTags(mockTags)
      setLoading(false)
    }, 1000)
  }, [])

  const filteredTags = tags
    .filter(tag =>
      tag.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tag.slug.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "usage":
          return (b.posts?.length || 0) - (a.posts?.length || 0)
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const totalPosts = tags.reduce((sum, tag) => sum + (tag.posts?.length || 0), 0)
  const stats = {
    total: tags.length,
    totalPosts,
    averagePosts: tags.length > 0 ? Math.round(totalPosts / tags.length) : 0,
    mostUsed: tags.reduce((prev, current) =>
      (prev.posts?.length || 0) > (current.posts?.length || 0) ? prev : current, tags[0] || {}),
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingTag) {
      // Update existing tag (preserve posts relation)
      setTags(tags.map(tag =>
        tag.id === editingTag.id
          ? { ...tag, ...formData }
          : tag
      ))
      setShowEditModal(false)
      setEditingTag(null)
    } else {
      // Add new tag with empty posts relation
      const newTag = {
        id: Date.now(),
        ...formData,
        posts: [],
      }
      setTags([...tags, newTag])
      setShowAddModal(false)
    }

    setFormData({ name: "", slug: "" })
  }

  const handleEdit = (tag) => {
    setEditingTag(tag)
    setFormData({
      name: tag.name,
      slug: tag.slug,
    })
    setShowEditModal(true)
  }

  const handleDelete = (tagId) => {
    if (confirm("Are you sure you want to delete this tag? This action cannot be undone.")) {
      setTags(tags.filter(tag => tag.id !== tagId))
      setSelectedTags(selectedTags.filter(id => id !== tagId))
    }
  }

  const handleBulkDelete = () => {
    if (confirm(`Are you sure you want to delete ${selectedTags.length} selected tags? This action cannot be undone.`)) {
      setTags(tags.filter(tag => !selectedTags.includes(tag.id)))
      setSelectedTags([])
    }
  }

  const handleSelectTag = (tagId, checked) => {
    if (checked) {
      setSelectedTags([...selectedTags, tagId])
    } else {
      setSelectedTags(selectedTags.filter(id => id !== tagId))
    }
  }

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedTags(filteredTags.map(tag => tag.id))
    } else {
      setSelectedTags([])
    }
  }

  const generateSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  const handleNameChange = (name) => {
    setFormData({
      ...formData,
      name,
      slug: generateSlug(name)
    })
  }

  const closeModals = () => {
    setShowAddModal(false)
    setShowEditModal(false)
    setEditingTag(null)
    setFormData({ name: "", slug: "" })
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="bg-blog-primary p-3 rounded-lg text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-content-secondary">Total Tags</h3>
              <p className="text-2xl font-bold text-heading">{stats.total}</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="bg-blog-secondary p-3 rounded-lg text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-content-secondary">Tagged Posts</h3>
              <p className="text-2xl font-bold text-heading">{stats.totalPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="bg-blog-accent p-3 rounded-lg text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-content-secondary">Avg per Tag</h3>
              <p className="text-2xl font-bold text-heading">{stats.averagePosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="bg-blog-success p-3 rounded-lg text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-content-secondary">Most Popular</h3>
              <p className="text-lg font-semibold text-heading">{stats.mostUsed?.name || "N/A"}</p>
              <p className="text-sm text-content-secondary">{stats.mostUsed?.posts?.length || 0} posts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-heading placeholder-content-secondary focus:outline-none focus:ring-2 focus:ring-blog-primary focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-content-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background text-heading focus:outline-none focus:ring-2 focus:ring-blog-primary focus:border-transparent"
            >
              <option value="name">Sort by Name</option>
              <option value="usage">Sort by Usage</option>
            </select>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blog-primary hover:bg-blog-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium theme-transition flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add Tag</span>
          </button>
        </div>

        {/* Bulk Actions */}
        {selectedTags.length > 0 && (
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-content-secondary">
              {selectedTags.length} tag{selectedTags.length > 1 ? 's' : ''} selected
            </span>
            <button
              onClick={handleBulkDelete}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm theme-transition"
            >
              Delete Selected
            </button>
          </div>
        )}
      </div>

      {/* Tags Table */}
      <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedTags.length === filteredTags.length && filteredTags.length > 0}
              onChange={(e) => handleSelectAll(e.target.checked)}
              className="rounded border-border text-blog-primary focus:ring-blog-primary mr-4"
            />
            <span className="text-sm font-medium text-content-secondary">{filteredTags.length} tags</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-border">
            <thead className="bg-background">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary"> </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary">Slug</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-content-secondary">Posts</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-content-secondary">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-card divide-y divide-border">
              {filteredTags.map((tag) => (
                <tr key={tag.id} className="hover:bg-muted/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={selectedTags.includes(tag.id)}
                      onChange={(e) => handleSelectTag(tag.id, e.target.checked)}
                      className="rounded border-border text-blog-primary focus:ring-blog-primary"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-content-secondary">#{`00${tag.id}`}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-heading">{tag.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-content-secondary"><code className="bg-muted px-1 py-0.5 rounded">{tag.slug}</code></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-content-secondary">{tag.posts?.length || 0}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button onClick={() => handleEdit(tag)} title="Edit" className="p-1 text-blog-primary hover:text-blog-primary/80">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button onClick={() => handleDelete(tag.id)} title="Delete" className="p-1 text-red-600 hover:text-red-500">
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
      </div>

      {/* Add/Edit Modal */}
      {(showAddModal || showEditModal) && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div
                className="absolute inset-0 bg-black/50"
                style={{ backdropFilter: 'none' }}
                onClick={closeModals}
              ></div>
            </div>

            <div className="inline-block align-bottom bg-card rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-border relative z-10">
              <form onSubmit={handleSubmit}>
                <div className="px-6 py-4 border-b border-border">
                  <h3 className="text-lg font-semibold text-heading">
                    {editingTag ? "Edit Tag" : "Add New Tag"}
                  </h3>
                </div>

                <div className="px-6 py-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleNameChange(e.target.value)}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-heading placeholder-content-secondary focus:outline-none focus:ring-2 focus:ring-blog-primary focus:border-transparent"
                      placeholder="Enter tag name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">
                      Slug
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-heading placeholder-content-secondary focus:outline-none focus:ring-2 focus:ring-blog-primary focus:border-transparent"
                      placeholder="tag-slug"
                    />
                    <p className="text-xs text-content-secondary mt-1">
                      URL-friendly version of the name (auto-generated)
                    </p>
                  </div>

                  {/* Only name and slug are required by Prisma Tag model */}
                </div>

                <div className="px-6 py-4 border-t border-border flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={closeModals}
                    className="px-4 py-2 text-sm font-medium text-content-secondary hover:text-heading theme-transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blog-primary hover:bg-blog-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium theme-transition"
                  >
                    {editingTag ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}