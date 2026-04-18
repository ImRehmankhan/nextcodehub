"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'system',
  setTheme: () => null,
  actualTheme: 'light'
})

export function ThemeProvider({ 
  children, 
  defaultTheme = 'system',
  storageKey = 'theme',
  ...props 
}) {
  const [theme, setTheme] = useState(null)
  const [actualTheme, setActualTheme] = useState('light')
  const [isMounted, setIsMounted] = useState(false)

  // Determine the actual theme to display
  const updateActualTheme = (currentTheme) => {
    const root = window.document.documentElement
    
    // Remove existing theme classes
    root.classList.remove('light', 'dark')
    
    let resolvedTheme = currentTheme
    
    if (currentTheme === 'system') {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    }
    
    // Apply the resolved theme
    root.classList.add(resolvedTheme)
    root.setAttribute('data-theme', resolvedTheme)
    setActualTheme(resolvedTheme)
  }

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem(storageKey)
    const initialTheme = storedTheme || defaultTheme
    setTheme(initialTheme)
    updateActualTheme(initialTheme)
    setIsMounted(true)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const current = localStorage.getItem(storageKey) || defaultTheme
      if (current === 'system') {
        updateActualTheme('system')
      }
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [storageKey, defaultTheme])

  // Update actual theme whenever theme changes
  useEffect(() => {
    if (theme === null) return
    updateActualTheme(theme)
  }, [theme])

  const handleSetTheme = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem(storageKey, newTheme)
  }

  // Prevent rendering until theme is loaded (prevents hydration mismatch)
  if (!isMounted) {
    return <>{children}</>
  }

  const value = {
    theme: theme || defaultTheme,
    setTheme: handleSetTheme,
    actualTheme
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}