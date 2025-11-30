"use client"

import { useTheme } from './theme-provider'
import Icon from '@/components/icon'

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  return (
    <button
      onClick={cycleTheme}
      className="relative inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      aria-label="Toggle theme"
    >
      {/* Sun icon for light theme */}
      {actualTheme === 'light' && <Icon name="sun" className="h-4 w-4" />}
      
      {/* Moon icon for dark theme */}
      {actualTheme === 'dark' && <Icon name="moon" className="h-4 w-4" />}
      
      {/* Indicator for current theme mode */}
      <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full">
        {theme === 'system' && (
          <span className="block h-2 w-2 rounded-full bg-blog-accent animate-pulse"></span>
        )}
      </span>
    </button>
  )
}

export function ThemeSelect() {
  const { theme, setTheme } = useTheme()

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="flex h-9 w-full rounded-md border border-border bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  )
}