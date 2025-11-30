"use client"

import { useState, useRef, useEffect } from "react"
import Icon from "@/components/icon"
import { useCallAPI } from "@/hooks/wrapper"

export default function PostEditor({ post, onClose, onSave }) {
  const { getAll: getAllCategories } = useCallAPI("categories", "admin/categories")
  const { getAll: getAllTags } = useCallAPI("tags", "admin/tags")
  
  const categoriesData = getAllCategories.data?.categories || []
  const tagsData = getAllTags.data?.tags || []

  const [showPreview, setShowPreview] = useState(false)
  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    content: post?.content || "",
    excerpt: post?.excerpt || "",
    featuredImage: post?.featuredImage || "",
    published: post?.published || false,
    categoryIds: post?.categories?.map(c => c.id) || [],
    tagIds: post?.tags?.map(t => t.id) || [],
  })

  const editorRef = useRef(null)
  const fileInputRef = useRef(null)

  useEffect(() => {
    if (editorRef.current && post?.content) {
      editorRef.current.innerHTML = post.content
    }
  }, [post])

  const executeCommand = (command, value = null) => {
    document.execCommand(command, false, value)
    editorRef.current?.focus()
  }

  const insertImage = async () => {
    const url = prompt("Enter image URL:")
    if (url) {
      executeCommand("insertImage", url)
    }
  }

  const uploadImage = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Create a local URL for the image
    const reader = new FileReader()
    reader.onload = (event) => {
      executeCommand("insertImage", event.target.result)
    }
    reader.readAsDataURL(file)
  }

  const handleContentChange = () => {
    if (editorRef.current) {
      setFormData(prev => ({ ...prev, content: editorRef.current.innerHTML }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const postData = {
      ...formData,
      content: editorRef.current?.innerHTML || formData.content,
    }

    try {
      await onSave(postData)
    } catch (error) {
      console.error("Error saving post:", error)
      alert(error.message)
    }
  }

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  const handleTitleChange = (e) => {
    const title = e.target.value
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title)
    }))
  }

  const toolbarButtons = [
    { icon: "bold", command: "bold", title: "Bold (Ctrl+B)" },
    { icon: "italic", command: "italic", title: "Italic (Ctrl+I)" },
    { icon: "underline", command: "underline", title: "Underline (Ctrl+U)" },
    { icon: "strikethrough", command: "strikethrough", title: "Strikethrough" },
    { divider: true },
    { icon: "heading", command: "formatBlock", value: "h1", title: "Heading 1" },
    { icon: "heading-2", command: "formatBlock", value: "h2", title: "Heading 2" },
    { icon: "heading-3", command: "formatBlock", value: "h3", title: "Heading 3" },
    { divider: true },
    { icon: "list", command: "insertUnorderedList", title: "Bullet List" },
    { icon: "list-ordered", command: "insertOrderedList", title: "Numbered List" },
    { divider: true },
    { icon: "align-left", command: "justifyLeft", title: "Align Left" },
    { icon: "align-center", command: "justifyCenter", title: "Align Center" },
    { icon: "align-right", command: "justifyRight", title: "Align Right" },
    { divider: true },
    { icon: "link", command: "createLink", title: "Insert Link" },
    { icon: "image", custom: insertImage, title: "Insert Image" },
    { icon: "upload", custom: () => fileInputRef.current?.click(), title: "Upload Image" },
    { divider: true },
    { icon: "code", command: "formatBlock", value: "pre", title: "Code Block" },
    { icon: "quote", command: "formatBlock", value: "blockquote", title: "Quote" },
  ]

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-gradient-to-br from-card via-card to-muted rounded-2xl shadow-2xl w-full max-w-7xl max-h-[95vh] flex flex-col border border-border/50 animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-border/50 bg-gradient-to-r from-blog-primary/5 via-transparent to-blog-secondary/5">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blog-primary to-blog-secondary flex items-center justify-center shadow-lg">
              <Icon name={post ? "edit" : "file"} className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-heading bg-gradient-to-r from-blog-primary to-blog-secondary bg-clip-text text-transparent">
                {post ? "Edit Post" : "Create New Post"}
              </h2>
              <p className="text-sm text-content-secondary mt-0.5">
                {showPreview ? "Preview your masterpiece" : "Write something amazing"}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="group relative px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-sm font-semibold theme-transition flex items-center space-x-2 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
            >
              <Icon name={showPreview ? "edit" : "eye"} className="w-4 h-4" />
              <span>{showPreview ? "Edit Mode" : "Preview"}</span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 hover:bg-red-500/10 text-content-secondary hover:text-red-600 rounded-xl theme-transition hover:scale-110 active:scale-95"
              title="Close Editor"
            >
              <Icon name="x" className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-gradient-to-b from-transparent to-muted/20">
          {!showPreview ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Title */}
              <div className="group">
                <label className="block text-sm font-semibold text-heading mb-3 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blog-primary to-blog-secondary"></span>
                  <span>Post Title</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={handleTitleChange}
                  className="w-full px-6 py-4 border-2 border-border rounded-xl bg-background/50 backdrop-blur-sm text-heading text-lg font-semibold placeholder-content-secondary/50 focus:outline-none focus:ring-4 focus:ring-blog-primary/20 focus:border-blog-primary transition-all duration-200 hover:border-blog-primary/50"
                  placeholder="Enter your amazing title..."
                  required
                />
              </div>

              {/* Slug */}
              <div className="group">
                <label className="block text-sm font-semibold text-heading mb-3 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blog-primary to-blog-secondary"></span>
                  <span>URL Slug</span>
                  <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                    className="w-full px-6 py-4 border-2 border-border rounded-xl bg-background/50 backdrop-blur-sm text-heading placeholder-content-secondary/50 focus:outline-none focus:ring-4 focus:ring-blog-primary/20 focus:border-blog-primary transition-all duration-200 hover:border-blog-primary/50 font-mono"
                    placeholder="post-url-slug"
                    required
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-content-secondary bg-muted px-3 py-1.5 rounded-lg border border-border">
                    /blog/{formData.slug || "..."}
                  </div>
                </div>
              </div>

              {/* Rich Text Editor */}
              <div className="group">
                <label className="block text-sm font-semibold text-heading mb-3 flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blog-primary to-blog-secondary"></span>
                  <span>Content</span>
                  <span className="text-red-500">*</span>
                </label>
                
                {/* Toolbar */}
                <div className="border-2 border-border rounded-t-xl bg-gradient-to-br from-muted via-muted to-muted/50 p-3 flex flex-wrap gap-2 shadow-inner">
                  {toolbarButtons.map((btn, index) => {
                    if (btn.divider) {
                      return <div key={index} className="w-px bg-border/50 mx-1 my-1" />
                    }
                    return (
                      <button
                        key={index}
                        type="button"
                        onClick={() => btn.custom ? btn.custom() : executeCommand(btn.command, btn.value)}
                        className="group/btn relative p-2.5 hover:bg-background/80 text-content-secondary hover:text-blog-primary rounded-lg theme-transition hover:scale-110 active:scale-95 hover:shadow-md"
                        title={btn.title}
                      >
                        <Icon name={btn.icon} className="w-4 h-4" />
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                          {btn.title}
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Editor Area */}
                <div
                  ref={editorRef}
                  contentEditable
                  onInput={handleContentChange}
                  className="min-h-[450px] max-h-[600px] overflow-y-auto border-x-2 border-b-2 border-border rounded-b-xl p-6 bg-background/50 backdrop-blur-sm text-heading focus:outline-none focus:ring-4 focus:ring-blog-primary/20 focus:border-blog-primary prose prose-lg max-w-none transition-all duration-200 shadow-inner"
                  style={{
                    lineHeight: "1.8",
                  }}
                />
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={uploadImage}
                  className="hidden"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Excerpt */}
                <div className="group">
                  <label className="block text-sm font-semibold text-heading mb-3 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blog-accent"></span>
                    <span>Excerpt</span>
                  </label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                    className="w-full px-5 py-4 border-2 border-border rounded-xl bg-background/50 backdrop-blur-sm text-heading placeholder-content-secondary/50 focus:outline-none focus:ring-4 focus:ring-blog-accent/20 focus:border-blog-accent transition-all duration-200 hover:border-blog-accent/50 resize-none"
                    rows="4"
                    placeholder="A compelling short description..."
                  />
                </div>

                {/* Featured Image */}
                <div className="group">
                  <label className="block text-sm font-semibold text-heading mb-3 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blog-accent"></span>
                    <span>Featured Image</span>
                  </label>
                  <input
                    type="url"
                    value={formData.featuredImage}
                    onChange={(e) => setFormData(prev => ({ ...prev, featuredImage: e.target.value }))}
                    className="w-full px-5 py-4 border-2 border-border rounded-xl bg-background/50 backdrop-blur-sm text-heading placeholder-content-secondary/50 focus:outline-none focus:ring-4 focus:ring-blog-accent/20 focus:border-blog-accent transition-all duration-200 hover:border-blog-accent/50"
                    placeholder="https://example.com/image.jpg"
                  />
                  {formData.featuredImage && (
                    <div className="mt-3 relative group/img">
                      <img 
                        src={formData.featuredImage} 
                        alt="Preview" 
                        className="w-full h-40 object-cover rounded-lg border-2 border-border shadow-md"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity rounded-lg flex items-end justify-center pb-3">
                        <span className="text-white text-sm font-medium">Featured Image Preview</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Categories */}
                <div className="group">
                  <label className="block text-sm font-semibold text-heading mb-3 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                    <span>Categories</span>
                  </label>
                  <select
                    multiple
                    value={formData.categoryIds}
                    onChange={(e) => setFormData(prev => ({ 
                      ...prev, 
                      categoryIds: Array.from(e.target.selectedOptions, option => Number(option.value))
                    }))}
                    className="w-full px-5 py-3 border-2 border-border rounded-xl bg-background/50 backdrop-blur-sm text-heading focus:outline-none focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-200 hover:border-purple-500/50"
                    size="5"
                  >
                    {categoriesData.map(category => (
                      <option key={category.id} value={category.id} className="py-2 px-3 rounded hover:bg-blog-primary/10">
                        {category.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-content-secondary mt-2 italic">Hold Ctrl/Cmd to select multiple</p>
                </div>

                {/* Tags */}
                <div className="group">
                  <label className="block text-sm font-semibold text-heading mb-3 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    <span>Tags</span>
                  </label>
                  <div className="flex flex-wrap gap-2 max-h-[160px] overflow-y-auto p-4 border-2 border-border rounded-xl bg-background/50 backdrop-blur-sm">
                    {tagsData.map(tag => (
                      <label 
                        key={tag.id} 
                        className="group/tag flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-br from-muted to-muted/50 rounded-lg cursor-pointer hover:from-blog-primary/10 hover:to-blog-primary/5 border border-transparent hover:border-blog-primary/30 theme-transition hover:scale-105 active:scale-95 shadow-sm"
                      >
                        <input
                          type="checkbox"
                          checked={formData.tagIds.includes(tag.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData(prev => ({ ...prev, tagIds: [...prev.tagIds, tag.id] }))
                            } else {
                              setFormData(prev => ({ ...prev, tagIds: prev.tagIds.filter(id => id !== tag.id) }))
                            }
                          }}
                          className="rounded border-border text-blog-primary focus:ring-blog-primary focus:ring-offset-0"
                        />
                        <span className="text-sm font-medium text-heading group-hover/tag:text-blog-primary transition-colors">{tag.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Published Status */}
              <div className="flex items-center justify-between p-5 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 border-2 border-green-500/20 rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${formData.published ? 'bg-green-500 shadow-lg shadow-green-500/30' : 'bg-gray-400'} transition-all duration-300`}>
                    <Icon name={formData.published ? "eye" : "eye"} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <label htmlFor="published" className="text-base font-semibold text-heading cursor-pointer">
                      {formData.published ? "Published" : "Draft"}
                    </label>
                    <p className="text-xs text-content-secondary">
                      {formData.published ? "Visible to everyone" : "Only visible to you"}
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  id="published"
                  checked={formData.published}
                  onChange={(e) => setFormData(prev => ({ ...prev, published: e.target.checked }))}
                  className="w-14 h-7 rounded-full appearance-none bg-gray-300 checked:bg-green-500 relative cursor-pointer transition-all duration-300 
                    before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-6 before:h-6 before:bg-white before:rounded-full before:transition-all before:duration-300
                    checked:before:left-7 shadow-inner"
                />
              </div>
            </form>
          ) : (
            /* Preview */
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 flex items-center justify-between p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <Icon name="eye" className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading">Preview Mode</h3>
                    <p className="text-xs text-content-secondary">See how your post will look</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-blue-500/20 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">
                  Live Preview
                </span>
              </div>
              
              <article className="prose prose-lg max-w-none bg-background/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-border shadow-xl">
                {formData.featuredImage && (
                  <div className="relative -mx-8 -mt-8 mb-8 overflow-hidden rounded-t-2xl">
                    <img 
                      src={formData.featuredImage} 
                      alt={formData.title}
                      className="w-full h-80 object-cover m-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                )}
                <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blog-primary via-blog-secondary to-blog-primary bg-clip-text text-transparent">
                  {formData.title || "Untitled Post"}
                </h1>
                {formData.excerpt && (
                  <p className="text-xl text-content-secondary mb-8 pb-8 border-b-2 border-border italic font-light">
                    {formData.excerpt}
                  </p>
                )}
                <div 
                  className="mt-8"
                  dangerouslySetInnerHTML={{ __html: formData.content || editorRef.current?.innerHTML || "<p class='text-content-secondary italic'>No content yet... Start writing something amazing!</p>" }}
                />
              </article>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border/50 bg-gradient-to-r from-muted/30 via-transparent to-muted/30">
          <div className="flex items-center space-x-3 text-sm text-content-secondary">
            <div className="flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-lg border border-border">
              <div className={`w-2 h-2 rounded-full ${formData.published ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div>
              <span className="font-medium">{formData.published ? 'Will be published' : 'Saved as draft'}</span>
            </div>
            {formData.title && (
              <span className="text-xs px-3 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg">
                {formData.title.length} characters
              </span>
            )}
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={onClose}
              type="button"
              className="px-6 py-3 border-2 border-border rounded-xl text-heading hover:bg-muted hover:border-content-secondary theme-transition font-semibold hover:scale-105 active:scale-95"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="group relative px-8 py-3 bg-gradient-to-r from-blog-primary via-blog-secondary to-blog-primary bg-size-200 bg-pos-0 hover:bg-pos-100 text-white rounded-xl font-bold theme-transition shadow-lg shadow-blog-primary/30 hover:shadow-xl hover:shadow-blog-primary/40 hover:scale-105 active:scale-95 flex items-center space-x-2"
            >
              <span>{post ? "Update Post" : "Create Post"}</span>
              <Icon name="plus" className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
