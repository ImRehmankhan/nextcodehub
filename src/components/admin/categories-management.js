"use client"

import { useState } from "react"
import { useCallAPI,Error } from "@/hooks/wrapper"
import Icon from "@/components/icon"

export default function CategoriesManagement() {
  const { getAll, add, update, remove } = useCallAPI("categories", "admin/categories");

  // categories are provided by react-query (getAll)
  const { data, isLoading, error } = getAll;
  const categoriesData = data?.categories || [];
  console.log("CategoriesManagement render, error:", data)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    slug: "",
  })

 

  const filteredCategories = (categoriesData || []).filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.slug.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stats = {
    total: (categoriesData || []).length,
    totalPosts: (categoriesData || []).reduce((sum, category) => sum + (category.posts?.length || 0), 0),
    mostUsed: (categoriesData || []).reduce((prev, current) => 
      (prev.posts?.length || 0) > (current.posts?.length || 0) ? prev : current, (categoriesData || [])[0] || {}),
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (editingCategory) {
        // update expects the full payload (hook will invalidate on success)
        await update.mutateAsync({ id: editingCategory.id, ...formData })
        setShowEditModal(false)
        setEditingCategory(null)
      } else {
        await add.mutateAsync(formData)
        setShowAddModal(false)
      }

      setFormData({ name: "", slug: "" })
    } catch (err) {
      console.error('Error saving category:', err)
      alert(err?.message || 'Error saving category')
    }
  }

  const handleEdit = (category) => {
    setEditingCategory(category)
    setFormData({
      name: category.name,
      slug: category.slug,
    })
    setShowEditModal(true)
  }

  const handleDelete = async (categoryId) => {
    if (confirm("Are you sure you want to delete this category? This action cannot be undone.")) {
      try {
        await remove.mutateAsync(categoryId)
      } catch (err) {
        console.error('Error deleting category:', err)
        alert(err?.message || 'Error deleting category') // Replace with proper error handling/toast
      }
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
              <div className="bg-blog-primary p-3 rounded-lg text-white">
              <Icon name="layers" className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-content-secondary">Total Categories</h3>
              <p className="text-2xl font-bold text-heading">{stats.total}</p>
            </div>
          </div>
        </div>
 <Error message={error} />
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
              <div className="bg-blog-secondary p-3 rounded-lg text-white">
              <Icon name="file" className="w-6 h-6" />
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
              <Icon name="book" className="w-6 h-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-content-secondary">Most Used</h3>
              <p className="text-lg font-semibold text-heading">{stats.mostUsed?.name || "N/A"}</p>
              <p className="text-sm text-content-secondary">{stats.mostUsed?.posts?.length || 0} posts</p>
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
            <Icon name="search" className="absolute left-3 top-2.5 h-5 w-5 text-content-secondary" />
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blog-primary hover:bg-blog-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium theme-transition flex items-center space-x-2"
          >
            <Icon name="plus" className="w-4 h-4" />
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
                        <Icon name="edit" className="w-5 h-5" />
                      </button>
                      <button onClick={() => handleDelete(category.id)} title="Delete" className="p-1 text-red-600 hover:text-red-500">
                        <Icon name="trash" className="w-5 h-5" />
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