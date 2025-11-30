"use client"

import { useState } from "react"
import { useCallAPI } from "@/hooks/wrapper"
import Icon from "@/components/icon"

export default function TagsManagement() {
  const { getAll, add, update, remove } = useCallAPI("tags", "admin/tags");
  
  const { data, isLoading, error } = getAll;
  const tags = data?.tags || [];
  
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

  // tags loaded via react-query (tagsData)

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

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (editingTag) {
        await update.mutateAsync({ id: editingTag.id, ...formData })
        setShowEditModal(false)
        setEditingTag(null)
      } else {
        await add.mutateAsync(formData)
        setShowAddModal(false)
      }

      setFormData({ name: "", slug: "" })
    } catch (error) {
      console.error('Error saving tag:', error)
      alert(error.message) // Replace with proper error handling/toast
    }
  }

  const handleEdit = (tag) => {
    setEditingTag(tag)
    setFormData({
      name: tag.name,
      slug: tag.slug,
    })
    setShowEditModal(true)
  }

  const handleDelete = async (tagId) => {
    if (confirm("Are you sure you want to delete this tag? This action cannot be undone.")) {
      try {
        await remove.mutateAsync(tagId)
        setSelectedTags(selectedTags.filter(id => id !== tagId))
      } catch (error) {
        console.error('Error deleting tag:', error)
        alert(error.message) // Replace with proper error handling/toast
      }
    }
  }

  const handleBulkDelete = async () => {
    if (confirm(`Are you sure you want to delete ${selectedTags.length} selected tags? This action cannot be undone.`)) {
      try {
        // Delete tags one by one (could be optimized with bulk delete endpoint)
        for (const tagId of selectedTags) {
          await remove.mutateAsync(tagId)
        }
        setSelectedTags([])
      } catch (error) {
        console.error('Error deleting tags:', error)
        alert(error.message) // Replace with proper error handling/toast
      }
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center">
              <div className="bg-blog-primary p-3 rounded-lg text-white">
              <Icon name="tag" className="w-6 h-6" />
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
              <Icon name="file" className="w-6 h-6" />
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
              <Icon name="book" className="w-6 h-6" />
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
              <Icon name="star" className="w-6 h-6" />
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
              <Icon name="search" className="absolute left-3 top-2.5 h-5 w-5 text-content-secondary" />
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
            <Icon name="plus" className="w-4 h-4" />
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
                        <Icon name="edit" className="w-5 h-5" />
                      </button>
                      <button onClick={() => handleDelete(tag.id)} title="Delete" className="p-1 text-red-600 hover:text-red-500">
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
