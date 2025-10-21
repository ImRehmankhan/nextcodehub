"use client"

import { useState, useEffect } from "react"

export default function CategoriesManagement() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
  })

  // Mock data - matches Prisma `Category` model (id, name, slug, posts relation)
  useEffect(() => {
    const mockCategories = [
      { id: 1, name: "Web Development", slug: "web-development", posts: [ { id: 1 }, { id: 4 } ] },
      { id: 2, name: "React", slug: "react", posts: [ { id: 2 } ] },
      { id: 3, name: "JavaScript", slug: "javascript", posts: [ { id: 6 }, { id: 7 }, { id: 8 } ] },
      { id: 4, name: "CSS", slug: "css", posts: [ { id: 5 } ] },
      { id: 5, name: "Node.js", slug: "nodejs", posts: [] },
    ]

    setTimeout(() => {
      setCategories(mockCategories)
      setLoading(false)
    }, 500)
  }, [])

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.slug.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stats = {
    total: categories.length,
    totalPosts: categories.reduce((sum, category) => sum + (category.posts?.length || 0), 0),
    mostUsed: categories.reduce((prev, current) => 
      (prev.posts?.length || 0) > (current.posts?.length || 0) ? prev : current, categories[0] || {}),
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingCategory) {
      // Update existing category
      setCategories(categories.map(cat => 
        cat.id === editingCategory.id 
          ? { ...cat, ...formData, updatedAt: new Date().toISOString().split('T')[0] }
          : cat
      ))
      setShowEditModal(false)
      setEditingCategory(null)
    } else {
      // Add new category
      const newCategory = {
        id: Date.now(),
        ...formData,
        postCount: 0,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0],
      }
      setCategories([...categories, newCategory])
      setShowAddModal(false)
    }

    setFormData({ name: "", slug: "" })
  }

  const handleEdit = (category) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      slug: category.slug,
    })
    setShowEditModal(true)
  }

  const handleDelete = (categoryId) => {
    if (confirm("Are you sure you want to delete this category? This action cannot be undone.")) {
      setCategories(categories.filter(cat => cat.id !== categoryId))
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
    setEditingCategory(null)
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
            <div className="bg-blog-primary p-3 rounded-lg text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-content-secondary">Total Categories</h3>
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
              <h3 className="text-sm font-medium text-content-secondary">Total Posts</h3>
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
              <h3 className="text-sm font-medium text-content-secondary">Most Used</h3>
              <p className="text-lg font-semibold text-heading">{stats.mostUsed?.name || "N/A"}</p>
              <p className="text-sm text-content-secondary">{stats.mostUsed?.postCount || 0} posts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="relative">
            <input
              type="text"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-border rounded-lg bg-background text-heading placeholder-content-secondary focus:outline-none focus:ring-2 focus:ring-blog-primary focus:border-transparent"
            />
            <svg className="absolute left-3 top-2.5 h-5 w-5 text-content-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blog-primary hover:bg-blog-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium theme-transition flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Add Category</span>
          </button>
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-card border border-border rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border bg-muted">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={false}
              onChange={() => {}}
              className="rounded border-border text-blog-primary focus:ring-blog-primary mr-4"
            />
            <span className="text-sm font-medium text-content-secondary">{filteredCategories.length} categories</span>
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
              {filteredCategories.map((category) => (
                <tr key={category.id} className="hover:bg-muted/50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      className="rounded border-border text-blog-primary focus:ring-blog-primary"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-content-secondary">#{`00${category.id}`}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-heading">{category.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-content-secondary"><code className="bg-muted px-1 py-0.5 rounded">{category.slug}</code></div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-content-secondary">{category.posts?.length || 0}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button onClick={() => handleEdit(category)} title="Edit" className="p-1 text-blog-primary hover:text-blog-primary/80">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button onClick={() => handleDelete(category.id)} title="Delete" className="p-1 text-red-600 hover:text-red-500">
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
                    {editingCategory ? "Edit Category" : "Add New Category"}
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
                      placeholder="Enter category name"
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
                      placeholder="category-slug"
                    />
                    <p className="text-xs text-content-secondary mt-1">
                      URL-friendly version of the name (auto-generated)
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-background text-heading placeholder-content-secondary focus:outline-none focus:ring-2 focus:ring-blog-primary focus:border-transparent resize-none"
                      placeholder="Enter category description"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-heading mb-2">
                      Color
                    </label>
                    <div className="flex items-center space-x-3">
                      <input
                        type="color"
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                        className="w-12 h-8 border border-border rounded cursor-pointer"
                      />
                      <input
                        type="text"
                        value={formData.color}
                        onChange={(e) => setFormData({ ...formData, color: e.target.value })}
                        className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-heading focus:outline-none focus:ring-2 focus:ring-blog-primary focus:border-transparent"
                        placeholder="#3B82F6"
                      />
                    </div>
                  </div>
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
                    {editingCategory ? "Update" : "Create"}
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