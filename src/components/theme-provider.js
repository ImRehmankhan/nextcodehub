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
  const [theme, setTheme] = useState(defaultTheme)
  const [actualTheme, setActualTheme] = useState('light')

  useEffect(() => {
    // Get theme from localStorage or use default
    const storedTheme = localStorage.getItem(storageKey)
    if (storedTheme) {
      setTheme(storedTheme)
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      updateActualTheme(theme)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    updateActualTheme(storedTheme || defaultTheme)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

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
    setActualTheme(resolvedTheme)
  }

  const handleSetTheme = (newTheme) => {
    localStorage.setItem(storageKey, newTheme)
    setTheme(newTheme)
    updateActualTheme(newTheme)
  }

  useEffect(() => {
    updateActualTheme(theme)
  }, [theme])

  const value = {
    theme,
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